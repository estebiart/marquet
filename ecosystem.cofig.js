module.exports = {
  apps: [
    {
      name: 'inertia-ssr',
      script: 'bootstrap/ssr/ssr-server.js',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 13714
      }
    }
  ]
}
