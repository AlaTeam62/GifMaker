const GifMaker = require('../model/GifMaker');

async function getAll(req, res, next) {
  let gifMakers;

  try {
    gifMakers = await GifMaker.find({});
  } catch ({ message }) {
    return next({
      status: 500,
      message
    });
  }

  res.json({ gifMakers });
}

module.exports = {
  getAll
}
