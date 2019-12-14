const mongoose = require('mongoose');

class MongoManager {
  constructor (config) {
    this._config = config;
  }

  getMongoUrl() {
    return this._config.MONGODB_URI;
  }

  connect () {
    try {
      return mongoose.connect(this.getMongoUrl(), { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    } catch (e) {
      console.log('Mongodb connection failed');
    }
  }
}

module.exports = { MongoManager };
