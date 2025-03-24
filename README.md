# Minimalist Blog

A simple and elegant blog built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- 🎨 Clean and minimalist design
- 🌓 Dark/Light mode support
- 📱 Fully responsive
- ⚡ Built with Next.js App Router
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🎭 Shadcn UI components

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd minimalist-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   └── post/
│       └── [id]/
│           └── page.tsx # Dynamic blog post pages
├── components/
│   ├── mode-toggle.tsx # Dark/Light mode toggle
│   └── theme-provider.tsx # Theme provider
└── types/              # TypeScript types
```

## Customization

1. Edit `src/app/page.tsx` to modify the home page
2. Update `src/app/post/[id]/page.tsx` to change the blog post template
3. Modify `src/app/globals.css` to customize the theme
4. Add new components in the `src/components` directory

## License

MIT 