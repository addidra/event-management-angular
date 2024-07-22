async function addDoc(collection, userModel) {
  let user = new collection({
    ...userModel,
  });
  await user.save();
  return user.toObject();
}

async function getAll(collection) {
  const users = await collection.find();
  return users.map((_) => _.toObject());
}

async function getById(collection, id) {
  const user = await collection.findById(id);
  return user.toObject();
}

async function updateDoc(collection, id, userModel) {
  const filter = { _id: id };
  await collection.findOneAndUpdate(filter, userModel);
}

async function deleteDoc(collection) {
  await collection.findByIdAndDelete(id);
}

// export default { getUsers, getUser };
module.exports = { getAll, addDoc, getById, updateDoc, deleteDoc };
