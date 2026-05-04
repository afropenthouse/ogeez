# Ogeez Lounge & Restaurant

A modern restaurant website built with TanStack Start, React, and Tailwind CSS.

## Deployment on Vercel

### Prerequisites
- Vercel account
- GitHub repository (optional but recommended)

### Quick Deploy

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository or upload the project
   - Vercel will automatically detect the framework and build settings

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts to deploy your project.

### Automatic Configuration

The project includes:
- `vercel.json` - Vercel configuration file
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing configured with rewrites

### Environment Variables

Add any environment variables in your Vercel dashboard under Project Settings → Environment Variables.

### Custom Domain

After deployment, you can add a custom domain in your Vercel project settings.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework**: TanStack Start
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
