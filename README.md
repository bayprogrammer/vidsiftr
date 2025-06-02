# VidSiftr

Simple YouTube video search front-end delivered as a single-page-application
written using Lit and Web Compoponents.

## Provenance

This project is hand-crafted without the use of any boilerplates; the Mojo.js
generator was used to get a skeleton single-file server started (which is used
as the foundation of the included dev-server). Various interesting checkpoints
along the development journey have been tagged for reader enjoyment.

## Installing & Development

Speaking of dev-servers and development, you can install (almost) everything
you need to run the application locally like so:

```
$ cp config.json.example config.json
$ vi config.json
$ npm ci --include-dev
$ npm run serve
```

Then you can access the app at http://127.0.0.1:8080/ and search to your
heart's content (or until you run out of [YouTube Data API v3][1] [quota][2]
allowance).

Speaking of API's, you do need to edit the `config.json` file you copied before
you can _really_ do much of anything. Feel free to use another editor of
`vi(1)` isn't your cup of tea. `emacs(1)` was used to write this application.

[1]: https://developers.google.com/youtube/v3/getting-started
[2]: https://developers.google.com/youtube/v3/determine_quota_cost

## Production

This app _should be_ fully deployable to any static hosting server, just as
long as you can copy `index.html`, `src/*`, `vendor/*` and a production
`config.json` (with a properly locked down YouTube Data API v3 API key). Good
luck.

## Application Usage

The application exposes a search interface such that you can ~~search for~~
*sift through* YouTube videos by keywords; you can also select what order
YouTube should return your freshly sifted results in. Those results will be
rendered in a fairly reasonable way below your search input.

Feel free to scroll through the results, admire the thumbnails, and click on
the titles to open target videos on YouTube itself. Be amazed. Hire me.

![Screenshot of VidSiftr in Action](screenshot.png?raw=true "VidSiftr in Action")

## License

ISC, see `LICENSE` in root of the project tree.
