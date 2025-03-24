#!/bin/bash

# Install dependencies
npm install

# Install additional dependencies
npm install @tailwindcss/typography
npm install @types/react @types/react-dom @types/node --save-dev

# Create necessary directories
mkdir -p src/app src/components

# Install shadcn-ui components
npx shadcn-ui@latest init

# Success message
echo "Installation complete! Run 'npm run dev' to start the development server." 