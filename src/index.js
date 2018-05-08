import app from './app'
import log from './utils/logger'
import db from './db/models'

db.sequelize.sync({force: true})

const { PORT = 8080 } = process.env;
app.listen(PORT, () => log.info(`Listening on port ${PORT}`));
