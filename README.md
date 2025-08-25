
# Digital Wallet Frontend

A full-featured **Digital Wallet System** with role-based access (Admin, Agent, User), wallet and transaction management, JWT authentication, and secure API interactions. Built with **React, Redux Toolkit, RTK Query, Axios, TypeScript, and Express.js (Node.js)**.

---
## 🌐 Live Link

🔗 [website link](https://digital-wallet-frontend-one.vercel.app/)



## Features
- User, Agent, and Admin dashboards
- Authentication (login, register, logout)
- Wallet overview and management
- Cash in, cash out, send money, and transaction history
- Role-based sidebar navigation
- Global loading indicator and error handling
- Responsive, modern UI with Tailwind CSS
- Guided tour for dashboard features

## Tech Stack
- React (v19) + TypeScript
- Redux Toolkit & RTK Query
- React Redux
- React Router
- Vite (build tool)
- Tailwind CSS (utility-first CSS framework)
- Radix UI (React UI primitives)
- Lucide React (icon library)
- React Hook Form & Zod (form validation)
- Axios (HTTP client)
- Sonner (toast notifications)
- Recharts (charts/analytics)
- date-fns (date utilities)
- ESLint (linting)
- Class variance authority, clsx, tailwind-merge (utility libraries)
- Driver.js (guided tours)
- Next Themes (theme switching)
- Plus: TypeScript, @types, and other dev tooling

## Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```bash
	https://github.com/hassan-nahid/digital-wallet-frontend.git
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
3. Configure environment variables:
	- Make `.env` and set `VITE_BASE_URL` to your backend API URL.

### Running Locally
```bash
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` by default.

### Building for Production
```bash
npm run build
# or
yarn build
```

### Deployment
- Deploy the frontend to Vercel, Netlify, or any static hosting.
- Make sure your backend CORS settings allow your deployed frontend domain.

## Folder Structure

```
digital-wallet-frontend/
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .env
├── public/
│   ├── logo.svg
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   │   ├── react.svg
│   │   └── image/
│   │       ├── login.jpg
│   │       ├── register.png
│   │   └── Logo/
│   │       └── Logo.tsx
│   ├── components/
│   │   ├── app-sidebar.tsx
│   │   ├── Layouts/
│   │   │   ├── CommonLayout.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ModeToggle.tsx
│   │   │   ├── Navbar.tsx
│   │   ├── modules/
│   │   │   ├── ContactPage/
│   │   │   ├── HomePage/
│   │   │   ├── LoginPage/
│   │   │   ├── RegisterPage/
│   │   ├── ui/
│   │   │   ├── accordion.tsx
│   │   │   ├── app-toaster.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── date-picker.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── tooltip.tsx
│   ├── config/
│   │   └── index.ts
│   ├── constants/
│   │   └── role.ts
│   ├── context/
│   │   ├── theme.context.ts
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   ├── useTheme.ts
│   ├── lib/
│   │   ├── axios.ts
│   │   ├── utils.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ErrorPage.tsx
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── HomePage.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Unauthorized.tsx
│   │   ├── Admin/
│   │   │   ├── AllTransactions.tsx
│   │   │   ├── Analaytics.tsx
│   │   │   ├── CashIn.tsx
│   │   │   ├── ChangePassword.tsx
│   │   │   ├── ManageAgent.tsx
│   │   │   ├── ManageUser.tsx
│   │   │   ├── ManageWallet.tsx
│   │   │   ├── MyTransactions.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── Settings.tsx
│   │   │   ├── WalletOverview.tsx
│   │   │   ├── Withdraw.tsx
│   │   ├── Agent/
│   │   │   ├── CashIn.tsx
│   │   │   ├── CashOut.tsx
│   │   │   ├── ChangePassword.tsx
│   │   │   ├── Overview.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── Settings.tsx
│   │   │   ├── Transactions.tsx
│   │   ├── User/
│   │   │   ├── CashOut.tsx
│   │   │   ├── ChangePassword.tsx
│   │   │   ├── Overview.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── SendMoney.tsx
│   │   │   ├── Settings.tsx
│   │   │   ├── Transactions.tsx
│   ├── provider/
│   │   └── theme.provider.tsx
│   ├── redux/
│   │   ├── axiosBaseQuery.ts
│   │   ├── baseApi.ts
│   │   ├── hook.ts
│   │   ├── store.ts
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── transaction/
│   │   │   ├── user/
│   │   │   ├── wallet/
│   ├── routes/
│   │   ├── adminSidebarItem.ts
│   │   ├── agentSidebarItem.ts
│   │   ├── index.tsx
│   │   ├── userSidebarItem.ts
│   ├── types/
│   │   ├── auth.type.ts
│   │   ├── index.ts
│   │   ├── transaction.ts
│   │   ├── user-profile.ts
│   ├── utils/
│   │   ├── generateRoutes.ts
│   │   ├── getSidebarItems.ts
│   │   ├── withAuth.tsx
```

## Environment Variables
- `VITE_BASE_URL` - The base URL for your backend API (e.g., `https://your-backend.com/api/v1`)

## package.json

```json
{
	"name": "digital-wallet-frontend",
	"private": true,
	"version": "0.0.0",
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "tsc -b && vite build",
		"lint": "eslint .",
		"preview": "vite preview"
	},
	"dependencies": {
		"@hookform/resolvers": "^5.2.1",
		"@radix-ui/react-accordion": "^1.2.12",
		"@radix-ui/react-avatar": "^1.1.10",
		"@radix-ui/react-dialog": "^1.1.15",
		"@radix-ui/react-dropdown-menu": "^2.1.16",
		"@radix-ui/react-label": "^2.1.7",
		"@radix-ui/react-separator": "^1.1.7",
		"@radix-ui/react-slot": "^1.2.3",
		"@radix-ui/react-tooltip": "^1.2.8",
		"@reduxjs/toolkit": "^2.8.2",
		"@tailwindcss/vite": "^4.1.12",
		"axios": "^1.11.0",
		"class-variance-authority": "^0.7.1",
		"clsx": "^2.1.1",
		"date-fns": "^4.1.0",
		"driver.js": "^1.3.6",
		"lucide-react": "^0.540.0",
		"next-themes": "^0.4.6",
		"radix-ui": "^1.4.3",
		"react": "^19.1.1",
		"react-day-picker": "^9.9.0",
		"react-dom": "^19.1.1",
		"react-hook-form": "^7.62.0",
		"react-icons": "^5.5.0",
		"react-redux": "^9.2.0",
		"react-router": "^7.8.1",
		"recharts": "^3.1.2",
		"sonner": "^2.0.7",
		"tailwind-merge": "^3.3.1",
		"tailwindcss": "^4.1.12",
		"zod": "^4.0.17"
	},
	"devDependencies": {
		"@eslint/js": "^9.33.0",
		"@types/node": "^24.3.0",
		"@types/react": "^19.1.10",
		"@types/react-dom": "^19.1.7",
		"@vitejs/plugin-react": "^5.0.0",
		"eslint": "^9.33.0",
		"eslint-plugin-react-hooks": "^5.2.0",
		"eslint-plugin-react-refresh": "^0.4.20",
		"globals": "^16.3.0",
		"tw-animate-css": "^1.3.7",
		"typescript": "~5.8.3",
		"typescript-eslint": "^8.39.1",
		"vite": "^7.1.2"
	}
}
```

## CORS & Auth Notes
- For authentication to work in production, your backend must:
  - Set `Access-Control-Allow-Origin` to your frontend domain (not `*`)
  - Set `Access-Control-Allow-Credentials: true`
  - Set cookies with `SameSite=None; Secure`


