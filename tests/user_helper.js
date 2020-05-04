const bcrypt = require("bcrypt");

const User = require("../models/user");
const initialUsers = [
  {
    username: "root",
    password: "root",
  },
];

// const nonExistingId = async () => {
//   const user = new user({
//     name
//   });
//   await blog.save();
//   await blog.remove();
//   return blog._id.toString();
// };

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((user) => user.toJSON());
};

const addUserToDb = async () => {
  await User.deleteMany({});
  const newUser = initialUsers[0];
  const passwordHash = await bcrypt.hash(newUser.password, 10);
  const user = new User({ username: newUser.username, passwordHash });
  await user.save();
};

module.exports = {
  initialUsers,
  //   nonExistingId,
  usersInDb,
  addUserToDb,
};
