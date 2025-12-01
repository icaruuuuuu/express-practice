get() {
	curl "http://localhost:3000/$1"
}

post() {
	echo "sending post to $1"
	curl -X POST -H 'Content-Type: application/json' -d $2 "http://localhost:3000/$1"
	echo ""
}
