const app = require('./app');
const request = require('supertest');

test('GET / responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });

// test('GET /api/some-endpoint', async () => {
//     const response = await request(app).get('/api/some-endpoint');
//     expect(response.statusCode).toBe(200);
//     // Additional assertions...
//   });