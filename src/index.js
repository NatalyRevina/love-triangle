/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;
	var a = 0;
	var ai = 0;
	var b = 0;
	var bi = 0;
	var c = 0;
	var ci = 0;
	
	for ( var i = 0; i <= preferences.length-1; i++){
		if(preferences[i] > 0 && preferences[i] < preferences.length+1 && preferences[i]!= i+1){
			a = preferences[i];
			ai = i+1;
			b = preferences[a-1];
			bi = a;
			c = preferences[b-1];
			ci = b;
			
			if(a==bi&&b==ci&&c==ai){
				count = count+1;
			}
		
		}
	}
	return count/3;
}