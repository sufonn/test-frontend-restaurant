import { test, expect, request } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'http://localhost:3001';


test('API should return correct data', async ({ request }) => {
  const response = await request.get('/api/endpoint');
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).toHaveProperty('key', 'value');
});
