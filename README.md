# Pontlook - The Verified Corporate Training Marketplace

Pontlook is a modern B2B platform that bridges the gap between businesses experiencing workforce challenges and the right corporate training providers. By focusing on verified needs, Pontlook eliminates the friction of cold outreach and retainers, presenting training providers with hot opportunities where the budget is already approved.

## Key Features

- **Verified Opportunities**: Connects providers with companies actively seeking training solutions.
- **Matchmaking Engine**: Matches companies with providers based on pain points, industry, and budget.
- **Provider & Client Portals**: Tailored workflows for both ends of the marketplace (`/providers`, `/find-training`).
- **Modern UI/UX**: Built with Next.js and Tailwind CSS for a blazing-fast, responsive experience. Includes full **Dark Mode** support.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: Radix UI / custom components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: Next-themes (Dark/Light mode toggle)

## Getting Started

### Prerequisites
- Node.js >= 18.x
- npm or yarn or pnpm

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   cd "leads middleman"
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Project Structure

- `src/app`: Contains the Next.js App Router pages (Home, Providers, Find Training).
- `src/components`: Reusable UI components (Hero, Navbar, TrustBar, ThemeToggle, etc.).
- `src/components/animations`: Framer Motion animation wrappers (FadeIn).
- `src/components/ui`: Base UI components (buttons, theme provider).
- `public`: Static assets.

## Dark Mode
The website supports dark mode via `next-themes`. A toggle is available in the Navbar to switch between light, dark, and system preference themes seamlessly.

## License
Private Property of Pontlook. All Rights Reserved.
