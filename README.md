# A Simple Starter

A starter project with a Next.js front end (`web`) with a few bits and bobs configured to my liking (eslint, prettier etc) and a Node/Express backend (`api`).

## Environment variables

For `api` these are stored at `.env` and for `web` they are in `web/.env.local` - make copies of the `example` files to get started

## Start 'er up

1. Install dependencies with

```
yarn
```

1. Create env files from examples:

```
cp .env.example .env
cp web/.env.local.example web/.env.local
```

1. Run the `web` server at http://localhost:3000 (by default) in watch mode:

```
yarn web:dev
```

1. And the `api` server at http://localhost:3001 (by default) in watch mode:

```
yarn api:dev
```

## Test it's working

With both servers running, you should be able to see:

> Test: Hello, World!

amongst the Next.js starter screen.

In `web/src/pages/index.tsx` if you change the arg passed to `callApi` from `'hello'` to `'lionel'` you should see this text change!
