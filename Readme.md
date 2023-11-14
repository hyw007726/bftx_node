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

.github/workflows/deploy.yml
name: Deploy Node.js Application

# Defines the events that will trigger the workflow
on:
  push:
    branches:
      - main  # Trigger the workflow when pushing to the main branch

jobs:
  deploy:
    runs-on: Centos_7.9.2009  # Specifies the type of virtual host machine

    steps:
    - name: Checkout Code
      uses: actions/checkout@v2  # Checks out your repository under $GITHUB_WORKSPACE

    - name: Install Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16.14.2'  # Specify the Node.js version

    - name: Install Dependencies
      run: npm install  # Install npm dependencies

    - name: Build
      run: npm run build  # Run the build script defined in your package.json

    - name: SSH and Deploy
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SERVER_HOST }}
        username: ${{ secrets.SERVER_USER }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        port: 22
        script: |
          cd /path/to/your/project
          git pull origin main
          npm install --production
          pm2 restart all  # Assuming you use PM2 as your process manager