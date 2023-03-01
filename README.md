# Todo App

This is made for study purpose only.

## 🏗 Getting Started

We use Deno + Typescript as a backend with Postgresql for database. For frontend, we use React + Typescript + Tailwind CSS

## Setup Requirements

### Postgres

<b>Linux with Snap</b>

https://snapcraft.io/install/postgresql/kde-neon

<b>Mac OS with Homebrew</b>

brew install postgresql

<b>Windows</b>

Following this website: https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/

<b>Once Postgresql is installed in your machine</b>

1. Create a database called `note`.
2. Create a table relation called `notes`.

The script to create table is in this path of the project directory `server/db/create.sql`;

### Deno + Typescript

Following the official Deno website: https://deno.land/manual@v1.31.1/getting_started/installation

<b>Environment Variables</b>

Create a `.env` file in the server directory and insert
your key/value pairs in the following format of `KEY=VALUE`:

```sh
APP_HOST=127.0.0.1
APP_PORT=8000

POSTGRES_USER=postgres
POSTGRES_DATABASE=note
POSTGRES_HOSTNAME=localhost
POSTGRES_PASSWORD=postgres
POSTGRES_PORT=5432
```
Postgresql doesn't have a default password. You can setup your database based on your own needs.

<b>Once Deno is installed in your machine</b>

1. Go into the server directory `$ cd server`
2. Run the server `$ deno run --allow-net --allow-read --allow-env --unsafely-ignore-certificate-errors --watch index.ts`

### React + Typescript

1. Go into the client directory `$ cd client`
2. Install node modules `$ npm i`
3. Run the project `$ npm start`

<b>Environment Variables</b>

Create a `.env` file in the client directory and insert
your key/value pairs in the following format of `KEY=VALUE`:

```sh
SERVER_URL=http://127.0.0.1:8000/api
```

## 📝 License

MIT
