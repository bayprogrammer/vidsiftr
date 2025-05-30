import mojo from '@mojojs/core';

const app = mojo()

function disableCache(ctx) {
  ctx.res.set('Cache-Control', 'no-cache')
}

// serve up app js modules
app.get('/src/#file', async ctx => {
  disableCache(ctx)
  await ctx.sendFile(ctx.home.child('..', 'src', ctx.stash.file))
})

// serve up vendored js modules
app.get('/vendor/#file', async ctx => {
  disableCache(ctx)
  await ctx.sendFile(ctx.home.child('..', 'vendor', ctx.stash.file))
})

// redirect /index.html -> /
app.get('/index.html', async ctx => {
  disableCache(ctx)
  await ctx.redirectTo('/');
})

// serve up our spa html
app.get('/*', async ctx => {
  disableCache(ctx)
  await ctx.sendFile(ctx.home.child('..', 'index.html'))
})

app.start()
