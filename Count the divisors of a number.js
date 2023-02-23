function getDivisorsCnt(n){
    for (var i = 0, r = 0; i <= n; i++)
    if (n % i == 0) r++;
    return r;
  }