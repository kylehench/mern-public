function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
  let headsCount = 0;
  let attempts = 0;
  while(headsCount < 5) {
    attempts++;
    let result = tossCoin();
    // console.log(`${result} was flipped`);
    if(result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }
  return {
    msg: `It took ${attempts} tries to flip five "heads"`,
    attempts: attempts
  };
}

function fiveHeads() {
  return new Promise( (resolve, reject) => {
    res = fiveHeadsSync()
    if (res.attempts<=100) {
      resolve(`succeeded at 100 attempts or fewer. ${res.attempts} attempts.`)
    } else {
      reject(`failed at 100 attempts or fewer. ${res.attempts} attempts.`)
    }
    
  });
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );
fiveHeads()
  .then( res => console.log(res) )
  .catch( err => console.log(err) );
console.log( "When does this run?" );