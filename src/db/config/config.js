const config = {
  "development": {
    "username": "psujmmqgzgpfgo",
    "password": "0b5962328e2ccef022bf1759be702e1d7f58e132416d72524b9b7bd4cbe34f6c",
    "database": "dbiff713ut8it3",
    "host": "ec2-54-243-54-6.compute-1.amazonaws.com",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "G,iANp5g\"W3q&f#fL(Vm\"2Ks&",
    "database": "catalyst_development",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "ssl": true
  }
}
