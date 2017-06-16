function repeat(n) {
 return function(m){
 	return m > n; 
 };
}
module.exports = repeat

