export function minimum(arr) {
	arr = JSON.parse(arr);
	let mn = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) {
		mn = arr[i] < mn ? arr[i] : mn;	
	}
	return mn;
}

export function maximum(arr) {
	arr = JSON.parse(arr);
	let mx = -Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
		mx = arr[i] > mx ? arr[i] : mx;
	}
	return mx;
}
