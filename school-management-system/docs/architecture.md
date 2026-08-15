# Hillfort International School SMS: System Architecture & Technical Specification

## 1. Executive Summary

The **Hillfort International School School Management System (SMS)** is a production-grade, multi-tenant, hybrid-curriculum educational platform. Designed to seamlessly integrate with the school's existing public marketing site (`hillfortintlschool.ng`), the system accommodates both the **Nigerian National Curriculum** (Continuous Assessment & Examination scoring models) and the **British International Curriculum** (Checkpoint/IGCSE grading standards).

---

## 2. Monorepo Architecture & Workspace Structure

The project is structured as a high-performance monorepo powered by **Turborepo** and **pnpm workspaces**, ensuring strict dependency isolation, atomic code sharing, and parallelized builds.

```
/workspaces/hillfort-sms-com/school-management-system/
├── apps/
│   ├── api/                 # Node.js & Express REST API Backend
│   ├── web-admin/           # React & Vite Admin / Staff Dashboard
│   ├── web-portal/          # React & Vite Student / Parent Portal
│   └── web-public/          # Marketing / Public Web Integration
├── packages/
│   ├── config/              # Shared TypeScript & ESLint configurations
│   ├── database/            # Prisma ORM client, schemas, and migrations
│   ├── shared-types/        # Shared DTOs, Enums, and domain interfaces
│   └── ui/                  # Shared atomic design system (Tailwind CSS)
├── docker/                  # Production & Development Docker compose and Dockerfiles
└── docs/                    # Architecture and OpenAPI specifications

```

---

## 3. Technology Stack Breakdown

| Layer | Technology | Purpose |
| --- | --- | --- |
| **Monorepo Orchestration** | Turborepo + pnpm | Workspace task caching, parallel execution, and dependency linking. |
| **Frontend** | React 18, Vite, Tailwind CSS | High-performance, responsive single-page applications for Admin and Portal interfaces. |
| **Backend API** | Node.js, Express, TypeScript | Scalable, modular RESTful API server handling business logic, authentication, and webhooks. |
| **Database & ORM** | PostgreSQL 15, Prisma ORM | Robust relational data modeling with type-safe queries and database migrations. |
| **Caching & State** | Redis 7 | Session storage, rate limiting, and performance caching. |
| **Containerization** | Docker, Docker Compose, Nginx | Multi-stage production builds and isolated container runtimes served via Nginx. |
| **CI/CD & Version Control** | GitHub Actions | Automated linting, Prisma client generation, building, and test validation. |

---

## 4. Hybrid Curriculum Data Modeling

To support Hillfort International School's dual academic framework, the database schema provides flexible grading structures within a unified student profile:

* **Nigerian Curriculum**: Evaluates students using Continuous Assessment (CA - 40%) combined with terminal Examinations (Exam - 60%).
* **British Curriculum**: Evaluates students using standard international grading rubrics (e.g., $A^*$, Checkpoint Levels, letter grades).
* **Unified DTOs**: Shared types (`@sms/shared-types`) abstract these differences, enabling consistent frontend rendering across both admin and parent portals.

---

## 5. Security & Role-Based Access Control (RBAC)

Authentication is enforced using JSON Web Tokens (JWT) issued by the `/auth/login` endpoint. Authorization is governed by strict role hierarchies:

1. **SUPER_ADMIN**: Full platform configuration and tenant management.
2. **PRINCIPAL**: Academic oversight, staff management, and approval workflows.
3. **BURSAR**: Fee payment verification, financial reporting, and gateway reconciliation.
4. **TEACHER**: Grade entry, attendance tracking, and classroom management.
5. **PARENT / STUDENT**: View-only access to academic performance, fee status, and attendance history via `web-portal`.

---

## 6. Deployment & Subdomain Routing Strategy

In production (`docker/docker-compose.prod.yml`), services are partitioned behind an Nginx reverse proxy and private Docker bridge network (`hillfort-net`):

* **`[https://hillfortintlschool.ng](https://hillfortintlschool.ng)`**: Public marketing and admissions site.
* **`[https://admin.hillfortintlschool.ng](https://admin.hillfortintlschool.ng)`**: Admin and staff management dashboard (`web-admin`).
* **`[https://portal.hillfortintlschool.ng](https://portal.hillfortintlschool.ng)`**: Student and parent interactive portal (`web-portal`).
* **`[https://api.hillfortintlschool.ng](https://api.hillfortintlschool.ng)`**: Backend REST API (`api`).