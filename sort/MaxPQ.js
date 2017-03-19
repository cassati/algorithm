/**
	MaxPQ
	NOT WORKING
**/

var MaxPQ = {
	createNew: function(maxN) {
		var arr = [];
		var size = maxN+1;
		var N = 0;

		return {
			isEmpty: function() {
				return N == 0;
			},
			size: function() {
				return N;
			},
			insert: function(v) {
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
					this.display();
					var t = parseInt(k/2);
					if(arr[t] < arr[k]) {
						this.exch(arr, t, k);
						k = t;
					}
				}
			},
			sink: function(k) {
				var N = arr.length;
				while(2*k <= N) {
					var j = 2*k;
					if(j < N && arr[j] < arr[j+1]) {
						j++;
					}
					if(arr[k] >= arr[j]) {
						break;
					}
					k = j;
				}
			},
			exch: function(i, j) {
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			},
			display: function() {
				console.log(arr.join(','));
			}
		};
	}

};



var b = [5,4,6,2,21,7,8,10,11,9,20,15];
var pq = MaxPQ.createNew(5);
for(var i = 0; i < b.length; i++) {
	pq.insert(b[i]);
	pq.display();
}
