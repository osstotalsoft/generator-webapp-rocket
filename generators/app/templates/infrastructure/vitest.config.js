import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './vitest.setup.js',
      coverage: {
        include: ['src/features/**/*.{js,jsx,ts,tsx}'],
        exclude: ['src/**/*.spec.*', 'src/**/*.test.*', 'src/**/*mocks*.*']
      }
    }
  })
)
