# metrobi-interview

This is a Next.js application with TypeScript, featuring several algorithmic exercises and a styled UI.

## Project Structure

```
metrobi-interview
├── src
│   ├── components
│   │   └── exercise_6.tsx         # Zeno's Paradox simulation component
│   ├── exercises
│   │   ├── exercise_1.ts          # Find duplicates in an array
│   │   ├── exercise_2.ts          # Write array items with exponential delay
│   │   ├── exercise_4.ts          # Bracket validation
│   │   ├── exercise_5.ts          # Egg drop problem (min moves)
│   │   ├── exercise_7.ts          # Max carrot value
│   ├── pages
│   │   ├── index.tsx              # Main entry point of the application
│   │   └── _app.tsx               # Custom App component for shared layout and styles
│   ├── styles
│   │   ├── globals.css            # Global CSS styles
│   │   └── Home.module.css        # CSS module styles for the Home component
├── public
│   └── favicon.ico                # Favicon for the application
├── tsconfig.json                  # TypeScript configuration file
├── package.json                   # npm configuration file
├── .gitignore                     # Git ignore file
└── README.md                      # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd metrobi-interview
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Features

- TypeScript support for type safety and better development experience.
- CSS Modules for scoped styling.
- Algorithmic exercises implemented in `/src/exercises`:
  - Find duplicates in an array
  - Write array items with exponential delay
  - Bracket validation
  - Egg drop problem (min moves)
  - Max carrot value (unbounded knapsack)
- Zeno's Paradox simulation component.
- Custom App component for shared layout and styles across pages.

## License

This project is licensed under the MIT License.
