const TodoModel = require("./models/list")
function add(name, callback) {
  const newItem = new ListModel({
    name
  });
  newItem.save((error, result) => {
    callback(result);
  })
}
function getAll(callback){
  ListModel.find({}, (error, result)=>{
    if(error){
      console.log(error);
      callback([]);
    }
    else {
      callback(result);
    }
  })
}
module.exports = {
  getAll,
  add,
};