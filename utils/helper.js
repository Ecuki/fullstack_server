const ObjectId = require("mongoose").Types.ObjectId;

function isObjectIdValid(id) {
  return ObjectId.isValid(id) && new ObjectId(id) == id;
}
module.exports = {
  isObjectIdValid,
};
