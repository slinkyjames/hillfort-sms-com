import request from 'supertest';
import app from '../src/app';

describe('App Bootstrap & Health Check', () => {
  /**
   * Test health check endpoint for container orchestrators and load balancers.
   */
  it('should return 200 OK on /health endpoint', async () => {
    const response = await request(app).get('/health');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body).toHaveProperty('message', 'School Management System API is running successfully.');
    expect(response.body).toHaveProperty('timestamp');
  });

  /**
   * Test catch-all 404 handler for unmatched routes.
   */
  it('should return 404 on non-existent API endpoints', async () => {
    const response = await request(app).get('/api/v1/non-existent-route');
    
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('status', 'error');
    expect(response.body).toHaveProperty('statusCode', 404);
    expect(response.body).toHaveProperty('message', 'The requested API endpoint does not exist.');
  });
});