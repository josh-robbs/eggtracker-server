module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/eggtracker'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}