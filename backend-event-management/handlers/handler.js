const { User } = require("../models/userModel");

async function addDoc(collectionName, userModel) {
  let user = new collectionName({
    ...userModel,
  });
  await user.save();
  return user.toObject();
}

async function getAll(collectionName) {
  const users = await collectionName.find();
  return users.map((_) => _.toObject());
}

async function getById(collectionName, id) {
  const user = await collectionName.findById(id);
  return user.toObject();
}

async function updateDoc(collectionName, id, userModel) {
  const filter = { _id: id };
  await collectionName.findOneAndUpdate(filter, userModel);
}

async function deleteDoc(collectionName) {
  await collectionName.findByIdAndDelete(id);
}

async function userExist(email, password) {
  const user = await User.findOne({email password});
  const result = user ? user.toObject() : { message: "wrong credentials" };
  return result;
}

// export default { getUsers, getUser };
module.exports = { getAll, addDoc, getById, updateDoc, deleteDoc };
