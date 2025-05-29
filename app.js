import mojo from '@mojojs/core';

const app = mojo()

app.get('/', async ctx => {
  await ctx.sendFile(ctx.home.child('index.html'))
})

app.get('/src/#file', async ctx => {
  await ctx.sendFile(ctx.home.child('src', ctx.stash.file))
})

app.start()
