import express from 'express';

const Route = express.Router();

Route
	.use('/', (req, res) => {
		res.status(200).json('Hello');
	});

export default Route;