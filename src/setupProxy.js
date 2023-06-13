import API from './config';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(`${API.BOARD}`, {
      target: 'http://34.64.142.115:8080',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware(`${API.FAVORITE}`, {
      target: 'http://34.64.142.115:8080',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware(`${API.FAVORITE_MAJOR}`, {
      target: 'http://34.64.142.115:8080',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware(`${API.LOGIN}`, {
      target: 'http://34.64.142.115:8080',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware(`${API.MAJOR}`, {
      target: 'http://34.64.142.115:8080',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware(`${API.MORE}`, {
      target: 'http://34.64.142.115:8080',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware(`${API.SEARCH}`, {
      target: 'http://34.64.142.115:8080',
      changeOrigin: true,
    }),
  );
};