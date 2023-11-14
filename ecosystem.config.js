module.exports = {
    apps: [{
      name: 'bftx_node',
      script: 'app.js',
    //   watch: ['server', 'client'], //watch certain folders
    watch:true,
      // Delay between restarts
      watch_delay: 1000,
      ignore_watch : ["node_modules"],
      watch_options: {
        "followSymlinks": false
      }
    }]
  };
  