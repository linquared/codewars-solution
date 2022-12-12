function xo(str){
    let xs = []
    let o = []
    str.toLowerCase().split('').forEach(x => x == 'x' ? xs.push(x) : x == 'o' ? o.push(x): x)
    return xs.length == o.length ? true :false
  }