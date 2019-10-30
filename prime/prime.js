
function isPrime(n) {
	if (n < 2) {
		return false;
	}
	if (n == 2 || n == 3) {
		return true;
	}
	if (n % 2 == 0) {
		return false;
	}
	var m = parseInt(Math.sqrt(n));
	for (var i = 3; i <= m; i+=2) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

function doFind(x) {
	console.log(new Date());
	var m = parseInt(Math.sqrt(x));
	for (var i = 3; i <= m; i+=2) {
		if (!isPrime(i)) {
			continue;
		}
		var t = parseInt(x / i);
		if ((t * i == x) && isPrime(t)) {
			console.log(new Date());
			console.log('find: ' + i + ' * ' + t + ' = ' + x);
			return;
		}
	}
	console.log(new Date());
	console.log('not find');
}

doFind(7140229933);