import { test, expect } from '@playwright/test';

test('API Get Request', async ({ request }) => {
  const response = await request.get('http://localhost:3000/users/get-users', {
    data: {
      firstName: 'Giorno',
    },
  });
  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toBe(
    '[{"id":1,"firstName":"Giorno","secondName":null,"email":"GiornoGG@gmail.com","phone":"89174","password":"$2b$10$Qh1RdZL0lMBsEFc8nT7lpe4rrfxZvNxM8T.7JK2D2WEBVwHRJmh1.","role":null,"createdAt":"2024-04-19T20:32:08.694Z","updatedAt":"2024-04-19T20:32:08.694Z"}]',
  );
});
