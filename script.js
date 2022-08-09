printAnswer1(8);
printAnswer2(8);

//exercise 1
function fibs(limit) {
  const fibArray = [0, 1];
  for (let index = 2; index < limit; index++) {
    fibArray.push(fibArray[index - 2] + fibArray[index - 1]);
  }
  return fibArray;
}

function printAnswer1(n) {
  document.getElementById("a1").textContent = fibs(n);
}

//exercise 2
function fibsRec(limit) {
  if (limit === 0) {
    return [0];
  }
  if (limit === 1) {
    return [0, 1];
  }
  if (limit > 1) {
    const fibArrayRec = fibsRec(limit - 1);
    return [...fibArrayRec, fibArrayRec[limit - 2] + fibArrayRec[limit - 1]];
  }
}

function printAnswer2(n) {
  //The nth number appears on the position n - 1 on the array. 
  document.getElementById("a2").textContent = fibsRec(n-1);
}

//exercise 3
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function printAnswer3(n) {
  document.getElementById("a3").textContent = factorial(n);
}
