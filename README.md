# VARA Landing Page

An Astro-based landing page with Tailwind CSS, supporting integration with Google AI Studio generated UI components.

## 🤖 Using Google AI Studio UI

This project is set up to easily integrate UI components created via Google AI Studio.

**Quick Start:**
1. Create your UI in [Google AI Studio](https://ai.google.dev/aistudio)
2. Copy the generated code
3. Create a new component in `src/components/`
4. Import and use in your pages

**📚 See [GOOGLE_AI_STUDIO_GUIDE.md](GOOGLE_AI_STUDIO_GUIDE.md) for complete instructions and examples.**

**🎯 Check out the example:** Run `npm run dev` and visit `/example` to see a sample integration.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/               # Static assets
├── src/
│   ├── components/      # Reusable components (add Google AI Studio UIs here)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes (each file = a route)
│   └── styles/          # Global styles
├── GOOGLE_AI_STUDIO_GUIDE.md  # How to integrate Google AI Studio UI
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
