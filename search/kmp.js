/**
	KMP模式匹配算法
**/

/**
	求模式串的next函数
**/
function get_next(p) {
	var i, j, plen, next;
	next = [];
	plen = p.length;
	i = 0
	j = -1;
	next[0] = -1;
	while(i < plen) {
		console.log("i = " + i + ", j = " + j + ", next = " + next);
		if (j == -1 || p[i] == p[j]) {
			++i;
			++j;
			next[i] = j;
		} else {
			j = next[j];
		}
	}
	return next;
}

// 测试
//get_next("abababb");
/*
get_next("abababb");
输入: abababb
过程: 
	i=0, j=-1, next[0]=-1
	i=1, j=0,  next[1]=0
	set j=next[j]=next[0]=-1
	i=1, j=-1, 
	i=2, j=0,  next[2]=0 
	i=3, j=1,  next[3]=1
	i=4, j=2,  next[4]=2
	i=5, j=3,  next[5]=3
	i=6, j=4,  next[6]=4
	set j=next[j]=next[4]=2
	i=6, j=2, 
	set j=next[j]=next[2]=0
	i=6, j=0, 
	set j=next[j]=next[0]=-1
	i=6, j=-1, 
	i=7, j=0,  next[7]=0
输出：
	i = 0, j = -1, next = -1
	i = 1, j = 0,  next = -1,0
	i = 1, j = -1, next = -1,0
	i = 2, j = 0,  next = -1,0,0
	i = 3, j = 1,  next = -1,0,0,1
	i = 4, j = 2,  next = -1,0,0,1,2
	i = 5, j = 3,  next = -1,0,0,1,2,3
	i = 6, j = 4,  next = -1,0,0,1,2,3,4
	i = 6, j = 2,  next = -1,0,0,1,2,3,4
	i = 6, j = 0,  next = -1,0,0,1,2,3,4
	i = 6, j = -1, next = -1,0,0,1,2,3,4
*/


/**
	KMP模式匹配算法
**/
function Index_KMP(s, p, pos, next) {
	var i, j, slen, plen;
	i = pos - 1;
	j = -1;
	slen = s.length;
	plen = p.length;
	while(i < slen && j < plen) {
		if (j == -1 || s[i] == p[j]) {
			++i;
			++j;
		} else {
			j = next[j];
		}
	}
	if (j == plen) {
		return i - plen;
	} else {
		return -1;
	}
}

// 测试
var s = "abacbcabababbcbc";
var p = "abababb";
var pos = 1;
var next = get_next(p);
var index = Index_KMP(s, p, pos, next);
console.log(index);
// 输出：6