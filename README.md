# DevFolio - Terminal Style Portfolio

A professional developer portfolio with a terminal/command-line aesthetic, built with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devfolio.git
   cd devfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   Create a `.env` file in the root directory (copy from `.env.local`) and add your EmailJS credentials for the contact form:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Local Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

Build the application for production:

```bash
npm run build
```

The output will be in the `dist` directory.

---

## 🌍 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Click **Configure** on the "Static HTML" or "Vite" workflow suggestion.
5. GitHub will create a `.github/workflows/deploy.yml` file. Ensure the build command matches your project (`npm run build`).
6. Commit the changes. GitHub Actions will automatically build and deploy your site.

### Option 2: Using `gh-pages` package

1. Update `vite.config.ts` (if applicable) to set the base path to your repository name:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add these scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Run the deploy command:
   ```bash
   npm run deploy
   ```

## 🛠 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Bundler**: Vite
- **Animations**: CSS Transitions & React Hooks

## 📝 Customization

- **Profile**: Edit `pages/Home.tsx` and `pages/About.tsx`.
- **Projects**: Update `pages/Projects.tsx` and the `types.ts` interface.
- **Experience**: Update `pages/Experience.tsx`.
- **Theme**: Customize colors in `tailwind.config` inside `index.html` or `tailwind.config.js`.
