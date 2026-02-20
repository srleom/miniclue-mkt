# MiniClue Marketing Site (`miniclue-mkt`)

The Next.js landing page for the MiniClue platform. It showcases the product features, pricing, and blog to potential users.

**Role in Stack:**

- **Landing Page**: Provides a high-conversion entry point for new users.
- **Blog**: Hosts product updates and educational content via MDX.
- **Analytics**: Tracks user engagement and conversion funnels using PostHog.

## 🛠 Prerequisites

- **Node.js 20+**
- **pnpm** (Package Manager)
- **PostHog** (For analytics tracking)

## 🚀 Quick Start

> See [CONTRIBUTING.md](https://github.com/srleom/miniclue?tab=contributing-ov-file) for full details on how to setup and contribute to the project.

1. **Fork & Clone**

```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/your-username/miniclue-mkt.git
cd miniclue-mkt
git remote add upstream https://github.com/srleom/miniclue-mkt.git
pnpm install
```

2. **Environment Setup**
   Copy the example config:

```bash
cp .env.example .env

```

_Ensure you populate all necessary fields as stated in the `.env.example` file._

3. **Run Locally**

```bash
pnpm dev
# Site will run at http://localhost:3000
```

## 📝 Pull Request Process

1. Create a new branch for your feature or bugfix: `git checkout -b feature/my-cool-improvement`.
2. Ensure your code follows the coding standards and project architecture.
3. Push to your fork: `git push origin feature/my-cool-improvement`.
4. Submit a Pull Request from your fork to the original repository's `main` branch.
5. Provide a clear description of the changes in your PR.
6. Once your PR is approved and merged into `main`, the CI/CD pipeline will automatically deploy it to the [production environment](https://app.miniclue.com).

> Note: Merging of PR and creation of release will be done by repo maintainers.
