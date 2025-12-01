import express from 'express';
import morgan from 'morgan';
import { lower, upper } from './lib/str.js';
import { minimum, maximum } from './lib/num.js';

const app = express();
app.use(morgan('tiny'));

app.get('/util/text/', (req, res) => {
	let ans = {str: ''};
	const string = req.body;

	if (req.params.lowercase) {
		ans.str = lower(string);
	}	

	if (req.params.uppercase) {
		ans.str = upper(string);
	}

	res.json(ans);
});
