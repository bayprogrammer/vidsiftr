import mojo from '@mojojs/core';

const app = mojo()

// serve up our spa html
async function indexHtml(ctx) {
  return await ctx.sendFile(ctx.home.child('../index.html'))
}

app.get('/', indexHtml)
app.get('/index.html', indexHtml)

// serve up our spa entrypoint
app.get('/index.js', async ctx => {
  await ctx.sendFile(ctx.home.child('../index.js'))
})

// serve up js modules
app.get('/src/#file', async ctx => {
  await ctx.sendFile(ctx.home.child('../src', ctx.stash.file))
})

app.start()
