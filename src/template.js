export default ({body, title, initialState}) => {
    return `<!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <meta charset="utf-8">
        <meta name="Description" content="A creative writing prompt generator. It generates a range of names, locations, and genres.">
        <meta name="description" content="A creative writing prompt generator. It generates a range of names, locations, and genres.">
        <meta hreflang="en"/>
        <meta property="og:title" content="WriteThus" />
        <meta property="og:description" content="A creative writing prompt generator. It generates a range of names, locations, and genres."/>
        <meta name="Keywords" content="creative writing, prompt generator, generator, creative writing prompt generator, writing prompt generator, WriteThus">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="manifest" href="/assets/img/manifest.json">
        <link rel="favicon" href="/assets/img/favicon.ico"/>
      </head>
      
      <body>
        <div id="root" class="container">${body}</div>
      </body>
      <link rel="stylesheet" href="/assets/css/skeleton.min.css" />
      <link rel="stylesheet" href="/assets/css/style.min.css" />
      <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
      <script src="/assets/bundle.js"></script>
      <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
          ga('create', 'UA-61201132-3', 'auto');
          ga('send', 'pageview');
        
      </script>
    </html>`;
};
