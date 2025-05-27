import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: { open: true, port: 3000 },
  plugins: [react()],
  resolve: {
    alias: {
      apollo: '/src/apollo',
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      features: '/src/features',
      hooks: '/src/hooks',
      providers: '/src/providers',
      routes: '/src/routes',
      utils: '/src/utils'
    }
  },
  build: {
    outDir: 'build'
  }
})
