const InputModel = require("./models/diary")

function add(happy, angry, sad, joy, title, body, callback) {
  const newInput = new InputModel({
    happy: happy,
    angry: angry,
    sad: sad,
    joy: joy,
    title: title,
    body: body
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
  InputModel.deleteOne({_id:id}, (error)=>{
    callback();
  });
}

module.exports = {
  getAll,
  add,
  remove
};