const redis = require("redis");

class Cache {
  constructor() {
    this.client = redis.createClient();
    this.client.connect();

    this.client.on("error", (err) => {
      console.log("Error " + err);
    });

    this.client.on("connect", () => {
      console.log("🚀 Connected to Redis");
    });
  }

  async get(key) {
    if (!key) return;
    const data = await this.client.get(key);
    if (data) {
      return JSON.parse(data);
    }
  }

  async set(key, value) {
    if (!key || !value) return;
    await this.client.set(key, JSON.stringify(value));
  }

  async clear() {
    await this.client.flushDb();
  }
}

module.exports = { Cache };
