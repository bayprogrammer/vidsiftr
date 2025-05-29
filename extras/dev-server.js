import mojo from '@mojojs/core';

const app = mojo()

// serve up our spa html
app.get('/', indexHtml)
app.get('/index.html', indexHtml)

async function indexHtml(ctx) {
  await ctx.sendFile(ctx.home.child('..', 'index.html'))
}

// serve up our spa entrypoint
app.get('/index.js', async ctx => {
  await ctx.sendFile(ctx.home.child('..', 'index.js'))
})

// serve up js modules
app.get('/src/#file', async ctx => {
  await ctx.sendFile(ctx.home.child('..', 'src', ctx.stash.file))
})

// serve up vendored js modules
app.get('/vendor/#file', async ctx => {
  await ctx.sendFile(ctx.home.child('..', 'vendor', ctx.stash.file))
})

app.start()
