const InputModel = require("./models/diary")

function add(happyvalue, angryvalue, sadvalue, joyvalue, titlevalue, bodyvalue, callback) {
  const newInput = new InputModel({
    happy: happyvalue,
    angry: angryvalue,
    sad: sadvalue,
    joy: joyvalue,
    title: titlevalue,
    body: bodyvalue
  });
  newInput.save((error, result) => {
    callback(result);
  })
}

function getAll(callback){
  InputModel.find({}, (error, result)=>{
    if(error){
      console.log(error);
      callback([]);
    }
    else {
      callback(result);
    }
  })
}

function remove(id, callback){
  TodoModel.deleteOne({_id:id}, (error)=>{
    callback();
  });
}

module.exports = {
  getAll,
  add,
  remove
};