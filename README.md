# Express Practice
This repository serves as programming practice for Express JS

## Testing the APIs
### Running the server

```sh
cd hello-api
npm i
npm start
```
### Testing through REST Client
You can open the requests.http file in any of the API directories in VScode. as long as you have the REST Client extension installed, it will do its thing.

### Testing through bash
The root of this respository contains a "requests" script, written in bash, that simplifies the process of using curl.

- Note that, when using post, you can create a json file to store the data you want to send so you can easily use the requests script

To use the script:
```sh
source requests
get path/to/api
post path/to/api @my_json_data.json
```

