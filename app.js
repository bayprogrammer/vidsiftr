import mojo from '@mojojs/core';

const app = mojo();

app.any('/', async ctx => {
  await ctx.render({inline: indexTemplate, inlineLayout: defaultLayout}, {title: 'Welcome'});
});

app.websocket('/heading', ctx => {
  ctx.on('connection', ws => {
    ws.send('Welcome to the mojo.js real-time web framework!');
  });
});

app.start();

const indexTemplate = `
<h1>Waiting...</h1>
<script>
  const ws = new WebSocket('<%= ctx.urlFor('heading') %>');
  ws.onmessage = event => { document.querySelector('h1').innerHTML = event.data };
</script>
`;

const defaultLayout = `
<!DOCTYPE html>
<html>
  <head>
    <%= await tags.favicon() %>
    <title><%= title %></title>
  </head>
  <body><%= ctx.content.main %></body>
</html>
`;
