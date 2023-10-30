// Numeros primos
const isPrimo = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;

  let count = 2,
    i = 2;
  while (i < n) {
    if (count > 2) return false;
    if (n % i === 0) count += 1;
    i += 1;
  }
  return true;
};

const nPrimos = (n) => {
  const numPrimos = [];
  let i = 1;

  while (numPrimos.length < n) {
    if (isPrimo(i)) numPrimos.push(i);
    i++;
  }

  return numPrimos;
};
// console.log(nPrimos(20));

// Serie Fibonacci
const fibonacci = (n, serie = false) => {
  /* *Si serie es true la funcion devuelve la serie fibonacci 
  de lo contrario solo devuelve el numero fibonacci 
  correspndiente al termino n */
  const serieFib = [0, 1, 1];
  if (n === 0) return serieFib[0];
  if (n < 3) return serieFib[2];

  let i = 2;
  while (i < n) {
    serieFib.push(serieFib[i] + serieFib[i - 1]);
    i++;
  }
  if (serie) return serieFib;
  else return serieFib[n];
};
// console.log(fibonacci(50, true));

const primos = nPrimos(100);
document.querySelector("#primos").innerHTML = primos;
// console.log("primos", primos);

const serieFibonacci = fibonacci(primos.length, true);
// console.log("serie", serieFibonacci);

const sumaPrimos = primos.reduce(
  (acc, curr) => acc + curr,
  0
);
document.querySelector("#sumatoriaPrimos").innerHTML = sumaPrimos;

const primosInFibonacci = [];
primos.forEach((primo) => {
  if (serieFibonacci.includes(primo)) {
    primosInFibonacci.push(primo);
  }
});
document.querySelector("#primosInFibonacci").innerHTML = primosInFibonacci;
// console.log(primosInFibonacci);

const sumaPrimosFibonacci = primosInFibonacci.reduce(
  (acc, curr) => acc + curr,
  0
);
document.querySelector("#sumaPrimosFib").innerHTML = sumaPrimosFibonacci;
// console.log("suma", sumaPrimosFibonacci);
