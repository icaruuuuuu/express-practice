export function minimum(arr) {
	let mn = Number.MAX_SAFE_INTEGER;
	for (const a in arr) {
		mn = a ? a < mn : mn;	
	}
	return mn;
}

export function maximum(arr) {
	let mx = -Number.MAX_SAFE_INTEGER;
	for (const a in arr) {
		mx = a ? a > mx : mx;
	}
	return mx;
}
