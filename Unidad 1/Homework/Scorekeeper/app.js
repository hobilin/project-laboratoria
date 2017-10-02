var  scores = {
  maripi = 0
  andre = 0
  natu = 0
}

function uppdatePoints(name, points){
  scores[name] += points;
}

console.log(uppdatePoints("maripi", 2345)); //if you write a name that isn't in the original Object, it will be added.

function printAllPoints(){
  var names = Object.keys(scores);
  var points = 0;

  for(var i = 0; i < names.length; i++){
    points += score[names[i]];
  }
  return points;
}
console.log(printAllPoints());
