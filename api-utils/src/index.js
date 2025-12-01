import express from 'express';
import morgan from 'morgan';
import { lower, upper } from './lib/str.js';
import { minimum, maximum } from './lib/num.js';

const app = express();
app.use(morgan('tiny'));
app.use(express.json());

app.post('/util/text/lowercase', (req, res) => {
	let ans = {str: ''};
	const { string } = req.body;
	ans.str = lower(string);
	res.json(ans);
});

app.post('/util/text/uppercase', (req, res) => {
	let ans = {str: ''};
	const { string } = req.body;
	ans.str = upper(string);
	res.json(ans);
});

app.post('/util/number/minimum', (req, res) => {
	const { list } = req.body;
	const ans = {ans: minimum(list)};
	res.json(ans);
})

app.post('/util/number/maximum', (req, res) => {
	const { list } = req.body;
	const ans = {ans: maximum(list)};
	res.json(ans);
})

app.listen(3000, () => {
	console.log('Servidor ouvindo em http://localhost:3000')
});
