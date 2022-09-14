// 7kyu- You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
function pattern(n){
    let newarr = []
   for(i = 1; i <= n; i++){
    newarr.push(i.toString().repeat(i))
   }
   return newarr.join('\n')
}