RUN:
pm2 start ecosystem.config.js

List all running applications:
pm2 list

Stop an application:
pm2 stop my-app

Stop all applications:
pm2 stop all

View logs for all applications:
pm2 logs

Show detailed information about a specific application:
pm2 show my-app