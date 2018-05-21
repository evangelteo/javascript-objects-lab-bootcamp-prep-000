var recipes = {};

function updateObjectWithKeyAndValue(obj,key,value) {
  return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
  return Object.assign(obj,{[key]:value})
}

function deleteFromObjectByKey(object,key){
  var clone = object
  delete clone[key]
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}


