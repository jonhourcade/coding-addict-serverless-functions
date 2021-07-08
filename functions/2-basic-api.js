const items = require('../assets/data');

module.exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items)
  };
};
