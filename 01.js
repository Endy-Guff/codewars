function minMax(arr){
    var max = Math.max.apply(Math, arr);
    var min = Math.min.apply(Math, arr);
    return [min,max];
  }