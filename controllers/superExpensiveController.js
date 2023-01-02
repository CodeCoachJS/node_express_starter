const { Cache } = require("../cache");

const cache = new Cache();

const superExpensiveOperation = async (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id, result: "some result" });
    }, 1000);
  });
};

const superExpensiveController = async (req, res) => {
  const { id } = req.body;

  const cachedResult = await cache?.get?.(id);

  if (cachedResult) {
    console.count("hit cache");
    return res.send({ fromCache: true, ...cachedResult });
  }

  console.count("miss cache");

  const result = await superExpensiveOperation(id);
  // cache the result
  await cache?.set?.(id, result);
  // send the result back to the user
  res.send(result);
};

const clearCache = async (req, res) => {
  await cache.clear();
  res.send("cache cleared");
};

module.exports = { superExpensiveController, clearCache };
