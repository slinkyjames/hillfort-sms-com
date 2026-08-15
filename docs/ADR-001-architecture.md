# ADR-001: Monorepo Architecture and Technology Stack Selection

* **Status:** Accepted
* **Date:** August 2026
* **Deciders:** Architecture Team, Lead Software Engineer

---

## 1. Context and Problem Statement

Hillfort International School requires a robust, scalable, and secure School Management System (SMS) to manage hybrid curricula (Nigerian and British educational standards), multi-tenant administration, role-based access control, student admissions, attendance, grading, and fee payment processing.

The system must integrate cleanly with the existing public marketing site (`hillfortintlschool.ng`) and provide dedicated interfaces for administrators, teachers, bursars, students, and parents. We needed to choose an architectural pattern and technology stack that maximizes code reuse, guarantees type safety across the stack, simplifies dependency management, and streamlines containerized production deployment.

---

## 2. Decision Drivers

* **Type Safety & Developer Experience:** End-to-end type safety from database models to frontend UI components to prevent runtime errors.
* **Code Reusability:** Ability to share domain models, DTOs, database clients, and UI design systems across multiple web applications (`web-admin`, `web-portal`, `api`).
* **Build Performance:** Fast, cached, and parallelized compilation and testing workflows.
* **Deployment Simplicity:** Standardized containerization using Docker and sub-domain routing via Nginx.

---

## 3. Considered Options

1. **Polyrepo Architecture:** Separate repositories for the API backend, admin dashboard, parent portal, and shared packages.
* *Pros:* Complete service isolation.
* *Cons:* High overhead for dependency version synchronization, code duplication across shared types/components, cumbersome local development setup.


2. **Monorepo with Turborepo and pnpm Workspaces (Selected):** Unified repository combining backend and frontend apps with centralized shared packages.
* *Pros:* Atomic commits, seamless code sharing via internal workspace packages (`@sms/shared-types`, `@sms/ui`, `@sms/database`), lightning-fast builds with Turborepo caching, unified dependency management via pnpm.
* *Cons:* Initial configuration complexity.



---

## 4. Decision

We have decided to adopt a **Monorepo Architecture** powered by **Turborepo** and **pnpm workspaces**.

### Core Technology Stack:

* **Orchestration:** Turborepo + pnpm Workspaces
* **Backend:** Node.js, Express, TypeScript
* **Frontend:** React 18, Vite, Tailwind CSS
* **Database & ORM:** PostgreSQL 15, Prisma ORM (with singleton connection pooling)
* **Containerization:** Docker, Docker Compose, Nginx reverse proxy

---

## 5. Consequences

### Positive Consequences

* **End-to-End Type Safety:** Changes to Prisma database models or shared DTOs (`@sms/shared-types`) immediately propagate compile-time safety checks to both the API backend and frontend portals.
* **Streamlined UI Consistency:** The atomic design system package (`@sms/ui`) guarantees consistent branding and component behavior across both `web-admin` and `web-portal`.
* **Optimized Builds:** Turborepo intelligent task caching reduces CI/CD build times significantly by only rebuilding modified packages and applications.
* **Simplified Operations:** Multi-stage Dockerfiles and standardized Docker Compose manifests make local development and production staging deterministic and reliable.

### Negative Consequences

* **Monorepo Learning Curve:** Developers unfamiliar with workspaces or Turborepo require brief onboarding regarding workspace filtering commands (e.g., `pnpm --filter @sms/api build`).
* **Lockfile Coupling:** All dependencies across the monorepo are managed through a single root `pnpm-lock.yaml`, requiring disciplined dependency updates.