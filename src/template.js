export default ({body, title, initialState}) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <meta keywords="writing prompt, writing prompt generator, creative writing prompts"/>
        <link rel="manifest" href="/assets/manifest.json">
        <link rel="stylesheet" href="/assets/skeleton.min.css" />
      </head>
      
      <body>
        <div id="root" class="container">${body}</div>
      </body>
      
      <script src="/assets/bundle.js"></script>
      <script>
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw', {scope: '/'})
          .then(function(reg) {
            // registration worked
            console.log('Registration succeeded. Scope is ' + reg.scope);
          }).catch(function(error) {
            // registration failed
            console.log('Registration failed with ' + error);
          });
        }
      </script>
    </html>
  `;
};
