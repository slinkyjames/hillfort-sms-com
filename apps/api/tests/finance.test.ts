import request from 'supertest';
import app from '../src/app';

describe('Finance Module Integration Tests', () => {
  describe('POST /api/finance/invoices', () => {
    it('should return 400 Bad Request when required invoice fields are missing', async () => {
      const response = await request(app)
        .post('/api/finance/invoices')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('status', 'error');
      expect(response.body).toHaveProperty('message');
    });
  });

  describe('POST /api/finance/paystack/initialize', () => {
    it('should return 400 Bad Request when invoiceId or email is missing', async () => {
      const response = await request(app)
        .post('/api/finance/paystack/initialize')
        .send({
          invoiceId: '',
          email: '',
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('status', 'error');
    });
  });

  describe('GET /api/finance/paystack/verify', () => {
    it('should return 400 Bad Request when transaction reference is missing', async () => {
      const response = await request(app)
        .get('/api/finance/paystack/verify');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('status', 'error');
    });
  });
});