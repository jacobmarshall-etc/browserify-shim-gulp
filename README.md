How to make it fail...
---

- Run `npm install && bower install`
- Run `gulp`
- Open `/example/index.html`
- Change the `/src/js/main.js` file (gulp should pickup the change and build again)
- Refresh `/example/index.html` (error should be thrown in dev-tools)
- Stop `gulp`
- Run `gulp`
- Open `/example/index.html` (the changes you make should work this time)
