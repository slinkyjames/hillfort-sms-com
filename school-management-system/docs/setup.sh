#!/usr/bin/env bash

set -e

PROJECT_NAME="school-management-system"

echo "🚀 Scaffolding Enterprise Hybrid Curriculum SMS for Hillfort Int'l School..."

mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME"

# 1. Root Infrastructure & Configs
mkdir -p .github/workflows docker docs
touch .github/workflows/ci.yml \
      .github/workflows/deploy.yml \
      docker/docker-compose.dev.yml \
      docker/Dockerfile.api \
      docker/Dockerfile.admin \
      docker/Dockerfile.portal \
      docs/openapi.yaml \
      docs/architecture.md \
      pnpm-workspace.yaml \
      turbo.json \
      package.json \
      .gitignore

# 2. Backend API Setup (apps/api)
mkdir -p apps/api/src/config \
         apps/api/src/common/middleware \
         apps/api/src/common/guards \
         apps/api/src/common/utils \
         apps/api/src/modules/auth \
         apps/api/src/modules/users \
         apps/api/src/modules/students \
         apps/api/src/modules/academics \
         apps/api/src/modules/attendance \
         apps/api/src/modules/grading \
         apps/api/src/modules/finance

touch apps/api/.env.example \
      apps/api/package.json \
      apps/api/tsconfig.json \
      apps/api/src/server.ts \
      apps/api/src/app.ts \
      apps/api/src/config/environment.ts

# 3. Web Admin Dashboard (apps/web-admin)
mkdir -p apps/web-admin/src/components \
         apps/web-admin/src/layouts \
         apps/web-admin/src/pages \
         apps/web-admin/src/store

touch apps/web-admin/.env.example \
      apps/web-admin/package.json \
      apps/web-admin/tailwind.config.js \
      apps/web-admin/tsconfig.json \
      apps/web-admin/vite.config.ts \
      apps/web-admin/src/main.tsx \
      apps/web-admin/src/App.tsx

# 4. Student & Parent Portal (apps/web-portal)
mkdir -p apps/web-portal/src/features

touch apps/web-portal/.env.example \
      apps/web-portal/package.json \
      apps/web-portal/tsconfig.json \
      apps/web-portal/src/main.tsx \
      apps/web-portal/src/App.tsx

# 5. Public Bridge Integration (apps/web-public)
mkdir -p apps/web-public/src
touch apps/web-public/package.json \
      apps/web-public/tsconfig.json

# 6. Shared Packages (Database, Types, UI)
mkdir -p packages/database/prisma \
         packages/database/src \
         packages/shared-types/src \
         packages/ui/src

touch packages/database/.env.example \
      packages/database/package.json \
      packages/database/tsconfig.json \
      packages/database/prisma/schema.prisma \
      packages/database/prisma/seed.ts \
      packages/database/src/index.ts \
      packages/shared-types/package.json \
      packages/shared-types/tsconfig.json \
      packages/shared-types/src/index.ts \
      packages/ui/package.json \
      packages/ui/tsconfig.json \
      packages/ui/src/index.ts

# Populate Root Workspace Configs
cat << 'EOF' > pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
EOF

cat << 'EOF' > turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
EOF

cat << 'EOF' > package.json
{
  "name": "hillfort-sms-monorepo",
  "version": "1.0.0",
  "private": true,
  "packageManager": "pnpm@9.0.0",
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev --parallel",
    "lint": "turbo run lint",
    "db:generate": "pnpm --filter @sms/database db:generate",
    "db:push": "pnpm --filter @sms/database db:push"
  },
  "devDependencies": {
    "turbo": "^2.0.0",
    "typescript": "^5.4.0"
  }
}
EOF

cat << 'EOF' > .gitignore
node_modules
.pnpm-store
dist
build
.env
.env.local
*.log
.turbo
EOF

echo "✅ Hillfort International School SMS Monorepo Generated Successfully!"