
// Mid level
let n = 10;
function fibonacci(n) {
var fib = [0,1]
  for(let i = 2; i<= n; i++){
      fib[i] = fib[i-2] + fib[i-1];
  }
  console.log(fib)
}
fibonacci(n);

// Senior/Mid level
function  fib(n)
    {
        let f = new Array(n+2);
        let i;
        f[0] = 0;
        f[1] = 1;
        for (i = 2; i <= n; i++)
        {
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
    }
    let n =10;
console.log(fib(n));

