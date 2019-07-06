This repo contains basic code to make an HTTP request using RxJS. 

Using the RxJS built-in `ajax` operator:

- To run: `npm run ajax`.
- Source file: `src/ajax.ts`.
- Requires installing `xmlhttprequest`.
- Requires taking care of CORS, passing a `XMLHttpRequest` factory, etc.

Using `rxios`:

- To run: `npm run rxios`.
- Source file: `src/rxios.ts`.
- Requires installing `rxjs-compat`, because the author has not updated RxJS to v6 yet. Red flag: there are few stale PRs with this changes.
