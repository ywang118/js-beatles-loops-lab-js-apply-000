// add solution here
function theBeatlesPlay(musicians, instruments) {
  var list = [];
    for (let i =0 ; i< musicians.length; i++) {
    list.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return list;
}

function johnLennonFacts(facts) {
  var newFacts = facts.map(function(fact){
    return fact+'!!!'
  })
  return newFacts;
}
