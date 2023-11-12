import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import { db_Connect } from './configs/db_server_connect.js';
import Route from './router/index.js';
import cors from 'cors';

//enable .env variable
dotenv.config();

const app = express();
app.use(cors())
const server = http.createServer(app);
const port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 8080;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//db connect
db_Connect().catch((err) => console.log(err));

//root api
app
	.all('/', function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		next()
	})
	.use(function (req, res, next) {
		res.setTimeout(120000, function () {
			console.log('Request has timed out.');
			res.send(408);
		});

		next();
	})
	.use('/', Route);

//start server
server.listen(port, () => {
	console.log('Server listenning on port : ' + port);
});