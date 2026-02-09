# How to Use UI Created via Google AI Studio

This guide explains how to integrate UI components created in Google AI Studio into this Astro landing page.

> 💡 **Quick Option:** Want to just paste your code and get help? See [QUICK_START.md](QUICK_START.md) for the fastest way to integrate your Google AI Studio code directly.

## What is Google AI Studio?

Google AI Studio is a tool that allows you to generate code, components, and UIs using AI prompts. The generated code can be in various formats including HTML, CSS, JavaScript, React, or other frameworks.

## Integration Steps

### 1. Export Your UI from Google AI Studio

After creating your UI in Google AI Studio:
1. Copy the generated code from Google AI Studio
2. Identify the format (HTML/CSS, React, Astro, etc.)

### 2. Add Component to the Project

#### For Astro Components (.astro files)

If your generated code is in Astro format or plain HTML/CSS:

1. Create a new file in `src/components/` directory:
   ```bash
   src/components/YourComponentName.astro
   ```

2. Paste your Google AI Studio generated code into this file

3. Make sure the component follows Astro structure:
   ```astro
   ---
   // Component logic here (if any)
   const { title, description } = Astro.props;
   ---
   
   <!-- Your HTML/UI here -->
   <div class="your-component">
     <!-- Generated UI content -->
   </div>
   
   <style>
     /* Your styles here */
   </style>
   ```

#### For React/JSX Components

If your generated code is in React/JSX format:

1. First, add React support to Astro:
   ```bash
   npx astro add react
   ```

2. Create a new file in `src/components/`:
   ```bash
   src/components/YourComponent.jsx
   ```

3. Paste your generated React code

4. Import and use it in your Astro pages with the `client:load` directive:
   ```astro
   ---
   import YourComponent from '../components/YourComponent.jsx';
   ---
   <YourComponent client:load />
   ```

#### For Plain HTML/CSS/JS

If your generated code is plain HTML/CSS/JavaScript:

1. Convert it to an Astro component in `src/components/YourComponent.astro`:
   ```astro
   ---
   // Any props or logic
   ---
   
   <div>
     <!-- Your HTML from Google AI Studio -->
   </div>
   
   <style>
     /* Your CSS from Google AI Studio */
   </style>
   
   <script>
     // Your JavaScript from Google AI Studio
   </script>
   ```

### 3. Use the Component in Your Pages

In any Astro page (e.g., `src/pages/index.astro`):

```astro
---
import Layout from '../layouts/Layout.astro';
import YourComponent from '../components/YourComponent.astro';
---

<Layout>
  <YourComponent />
</Layout>
```

## Example: Adding a Hero Section

Here's a complete example of adding a hero section generated from Google AI Studio:

1. Create `src/components/Hero.astro`
2. Paste your Google AI Studio generated code
3. Import and use in `src/pages/index.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
---

<Layout>
  <Hero />
  <!-- Rest of your page -->
</Layout>
```

## Styling Considerations

This project uses **Tailwind CSS**. When integrating Google AI Studio components:

- If the generated code uses Tailwind classes, it will work directly
- If it uses custom CSS, you can:
  - Keep the CSS in a `<style>` block in your Astro component
  - Move it to `src/styles/global.css` for global styles
  - Convert custom CSS to Tailwind classes for consistency

## Testing Your Integration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:4321` in your browser

3. Check that your component renders correctly

4. Build the production site to ensure no errors:
   ```bash
   npm run build
   ```

## Common Issues and Solutions

### Component Not Rendering

- Make sure the import path is correct
- Check for syntax errors in the generated code
- Verify that all required dependencies are installed

### Styling Not Applied

- Check that Tailwind classes are spelled correctly
- Ensure custom CSS is in a `<style>` block or imported correctly
- Clear cache and restart dev server: `npm run dev`

### JavaScript Not Working

- For client-side JavaScript in Astro, use `<script>` tags
- Consider using `client:load` directive if using React/Vue components
- Check browser console for errors

## Best Practices

1. **Component Organization**: Keep related components in the `src/components/` directory
2. **Reusability**: Make components configurable using props
3. **Consistency**: Try to match the styling and patterns of existing components
4. **Documentation**: Add comments to complex generated code
5. **Testing**: Always test in both development and production builds

## Need Help?

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google AI Studio](https://ai.google.dev/aistudio)
