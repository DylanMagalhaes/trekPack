# Manage Stuff

## Description

**Manage Stuff** is a web application built to help hikers and outdoor enthusiasts efficiently organize and manage their backpacks for hikes and treks. Users can add items, categorize them, and track their total weight, allowing them to optimize their backpack's load for better balance and comfort.

## Features

- **Add and Manage Items**: Easily add essential items to your backpack with quantity, weight, and category options (e.g., clothing, food, equipment).
- **Weight Visualization**: Get a clear breakdown of weight distribution by category with a dynamic pie chart, allowing you to adjust your load for better balance.
- **Responsive Design**: The app is designed to be fully responsive, offering an optimal experience on mobile, tablet, and desktop.
- **Local Storage**: Your backpack data is saved directly to your browser’s local storage, ensuring you don't lose your list when you close the app.

## Tech Stack

- **Next.js**: Server-side rendering and static site generation framework.
- **React.js**: For building the UI components and managing state.
- **Tailwind CSS**: A utility-first CSS framework for rapid and modern UI styling.
- **Chart.js**: A JavaScript charting library for data visualization (pie chart).
- **Local Storage**: Data is stored locally to persist between sessions without a backend.

## Installation

To get the project running locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/manage-stuff.git
   cd manage-stuff
   ```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
