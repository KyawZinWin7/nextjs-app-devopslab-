module.exports = {
  apps: [
    {
      name: "devktops-b3",
      script: "npm",
      args: "start -p 3000",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
