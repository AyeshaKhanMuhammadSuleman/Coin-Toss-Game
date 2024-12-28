let button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', () => {
  let tossResult = Math.random();
  if (tossResult < 0.5) {
    result.textContent = `Oh you got: Heads`;
  } 
  else {
    result.textContent = ` Oh you got: Tails`;
  }
});


