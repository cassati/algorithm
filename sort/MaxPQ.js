/**
	MaxPQ
**/

var MaxPQ = {
	createNew: function(maxN) {
		var arr = [];
		var size = maxN+1;
		var N = 0;
		arr[0] = -1;

		return {
			isEmpty: function() {
				return N == 0;
			},
			size: function() {
				return N;
			},
			insert: function(v) {
				if(N + 1 == size) {
					throw {msg:'space is full'};
				}
				arr[++N] = v;
				this.swim(N);
			},
			delMax: function() {
				var max = arr[1];
				this.exch(1, N--);
				delete arr[N+1];
				this.sink(1);
				return max;
			},
			swim: function(k) {
				while(k > 1) {
					var j = parseInt(k/2);
					if(arr[j] < arr[k]) {
						this.exch(j, k);
					}
					k = j;
				}
			},
			sink: function(k) {
				while(2*k <= N) {
					var j = 2*k;
					if(j < N && arr[j] < arr[j+1]) {
						j++;
					}
					if(arr[k] >= arr[j]) {
						break;
					}
					this.exch(j, k);
					k = j;
				}
			},
			exch: function(i, j) {
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			},
			display: function() {
				console.log(arr);
			}
		};
	}

};


var b = [5,4,6,2,21,7,8,10,11,9,20,15];
var max = b.length;
var pq = MaxPQ.createNew(max);
for(var i = 0; i < b.length; i++) {
	pq.insert(b[i]);
}

for(var i = 0; i < 5; i++) {
	console.log(pq.delMax());
}
