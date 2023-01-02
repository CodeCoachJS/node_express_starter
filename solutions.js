// Replace the following code with your solution and see why this works
// use some debuggers to see what's going on

// promise is a global variable that will be used to cache the result of the superExpensiveOperation
let promise = null;

const superExpensiveController = async (req, res) => {
  const { id } = req.body;

  const cachedResult = await cache?.get?.(id);

  if (cachedResult) {
    console.count("hit cache");
    return res.send({ fromCache: true, ...cachedResult });
  }

  if (promise) {
    return res.send({ fromCache: true, ...promise });
  }

  try {
    console.count("miss cache");
    // we don't await here because we don't want to block other requests
    promise = superExpensiveOperation(id);
    const result = await promise;
    // cache the result
    await cache?.set?.(id, result);
    // send the result back to the user
    res.send(result);
  } finally {
    promise = null;
  }
};
