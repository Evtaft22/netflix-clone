const { Router } = require('express');
const { itemsRouter } = require('./items');

const apiRouter = Router();

apiRouter.use('/items', itemsRouter);

module.exports = {
  apiRouter,
};
