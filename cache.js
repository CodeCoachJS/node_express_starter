class Cache {
  constructor() {
    this.map = new Map();
  }

  async get(key) {
    if (!key) return;
    const data = await Promise.resolve(this.map.get(key));
    if (data) {
      return data;
    }
  }

  async set(key, value) {
    if (!key || !value) return;
    await Promise.resolve(this.map.set(key, value));
  }

  async clear() {
    await Promise.resolve(this.map.clear());
  }
}

module.exports = { Cache };
