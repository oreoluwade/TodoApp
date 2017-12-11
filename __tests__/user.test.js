import request from 'supertest';
import app from '../server';

describe('homepage', () => {
  it('welcomes the user', (done) => {
    request(app).get('/')
      .expect(200)
      .expect('This is where it begins!!!', done);
  });
});
