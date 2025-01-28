import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    trace: 'on-first-retry',
  },
  projects: [
    {
        name: 'Frontend Tests Desktop',
        use: {
            ...devices['Desktop Chrome']
        }
    },
    {
        name: 'Frontend Tests Tablet',
        use: {
            ...devices['iPad (gen 7)'],
            ...devices['iPad Pro 11'],
            ...devices['Galaxy Tab S4']
        }
    },
    {
        name: 'Frontend Tests Mobile',
        use: {
            ...devices['iPhone 11'],
            ...devices['iPhone 15 Pro'],
            ...devices['iPhone 15 Pro Max']
        }
    },
  ],
});
