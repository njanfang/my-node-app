// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'my-node-app',
      script: 'server.js',
      instances: 'max',
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 2010
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 80
      }
    }
  ]
};