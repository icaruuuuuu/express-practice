get() {
	curl "http://localhost:3000/$1"
}

post() {
	curl -X POST -H $1 -d $2 "http://localhost:3000/$3"
}
