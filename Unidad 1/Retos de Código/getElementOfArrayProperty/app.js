function getElementOfArrayProperty(obj, key, index) {
 for (var i = 0; i < key.length; i++){
  if(key.length < index){
      return undefined;

  }else if(Array.isArray(obj.key) === false){
      return undefined;

  }else if(obj.key === ''){
      return undefined;

  }else{
      return obj.key[index];
  }

 }

}
