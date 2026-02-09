# VARA Landing Page

An Astro-based landing page with Tailwind CSS, supporting integration with Google AI Studio generated UI components.

## 🤖 Using Google AI Studio UI

This project is set up to easily integrate UI components created via Google AI Studio.

### 💬 **Want to Paste Your Code Directly?**

**Yes, you can!** Simply paste your Google AI Studio generated code (HTML/CSS/JS) and get help integrating it. See [QUICK_START.md](QUICK_START.md) for details.

### 🚀 **DIY Integration:**

1. Create your UI in [Google AI Studio](https://ai.google.dev/aistudio)
2. Copy the generated code
3. Use the template: `src/components/PasteYourCodeHere.astro`
4. Paste your code in the marked sections
5. Import and use in your pages

**📚 Full Guide:** [GOOGLE_AI_STUDIO_GUIDE.md](GOOGLE_AI_STUDIO_GUIDE.md) | **🎯 Live Example:** Run `npm run dev` and visit `/example`

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/               # Static assets
├── src/
│   ├── components/      # Reusable components (add Google AI Studio UIs here)
│   │   ├── PasteYourCodeHere.astro  # Template for pasting code
│   │   └── GoogleAIStudioExample.astro  # Working example
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes (each file = a route)
│   └── styles/          # Global styles
├── QUICK_START.md       # How to paste code directly
├── GOOGLE_AI_STUDIO_GUIDE.md  # Complete integration guide
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
