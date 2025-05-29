import mojo from '@mojojs/core';

const app = mojo()

// serve up js modules
app.get('/src/#file', async ctx => {
  await ctx.sendFile(ctx.home.child('..', 'src', ctx.stash.file))
})

// serve up vendored js modules
app.get('/vendor/#file', async ctx => {
  await ctx.sendFile(ctx.home.child('..', 'vendor', ctx.stash.file))
})

// serve up our spa entrypoint
app.get('/index.js', async ctx => {
  await ctx.sendFile(ctx.home.child('..', 'index.js'))
})

// redirect /index.html -> /
app.get('/index.html', async ctx => {
  await ctx.redirectTo('/');
})

// serve up our spa html
app.get('/*', async ctx => {
  await ctx.sendFile(ctx.home.child('..', 'index.html'))
})

app.start()
