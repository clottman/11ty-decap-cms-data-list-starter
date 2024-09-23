# Site

## 11ty
This site is built with [11ty](https://11ty.dev). `_site` is the build output directory; it should not be committed to git and be careful not to directly modify files within `_site/`!! They will get overwritten on every build.

If you need some Eleventy starting pointers, Cassey has a couple blog posts: [Getting your bearings in an existing 11ty project](https://www.cassey.dev/navigating-11ty-projects/) and [Just Enough JavaScript for Eleventy](https://www.cassey.dev/just-enough-javascript-11ty/).

## CMS
The CMS to add creators without writing code or touching Github is Decap CMS. Access it at theurl.com/admin by logging in with a GitHub that's a contributor the project. `functions/api` is a Cloudflare serverless function to handle that authing to Github.

If you Publish a post through the CMS, that will trigger a commit to main, and will deploy the site automatically.

## Daily builds
Site is set up to be hosted in Cloudflare. [A daily cron job triggers a new build](https://www.codemzy.com/blog/scheduling-builds-cloudflare) every day which is important mainly so that the item list shuffles order every day - the item at the top probably won't be at the top of the list tomorrow, and no one should get stuck at the bottom either. Remove the `shuffle` filter from the item list display in index.njk if you don't want this.

Builds/deploys happen automatically on pushes to `main` on Github. If you make a PR, you can expand the PR details to see a preview build.

## Node version
.nvmrc says 18 which was chosen somewhat arbitrarily as what I had on my machine at the time, you are welcome to upgrade if needed.

## Links

[schedule builds in cloudflare with cron](https://www.codemzy.com/blog/scheduling-builds-cloudflare)
