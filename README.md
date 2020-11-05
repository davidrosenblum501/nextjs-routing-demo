# Nextjs Routing Demo

Dummy project to provide a working example of routing multiple domains on the vanilla Nextjs router.

### Setup

Install dependencies
`npm install` to install the project dependencies.

Add these entries to your `/etc/hosts` file.
```
127.0.0.1 content.mandalorian.com
127.0.0.1 community.mandalorian.com
```

#### Running

Development build should be locally available at `http://content.mandalorian.com:3000`.

* `npm run build` to create a production build.
* `npm run dev` to run in development mode.
* `npm run start` to start in production mode (build first!).
