export default () => ({
  postgres: {
    type: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'bruno',
    password: 'cordeiro',
    database: 'aivacol',
    autoLoadEntities: 'true',
    synchronize: 'true',
  },
  default_user: {
    email: 'aivacol@aivacol.aivacol',
    name: 'aivacol',
    nickname: 'aivacol',
    password: 'aivacol',
  },
});
