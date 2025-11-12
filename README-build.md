Build instructions for compiled CSS

1. Install dependencies (requires Node.js and npm):

   npm install

2. Build production CSS once:

   npm run build:css

3. For development, watch for changes:

   npm run watch:css

This will create `dist/main.css`. Include `<link rel="stylesheet" href="dist/main.css">` in your HTML `<head>` and remove the runtime Tailwind CDN script from the page to avoid FOUC.
