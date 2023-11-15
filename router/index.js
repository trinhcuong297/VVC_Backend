import express from 'express';
import Home_Route from './home.js';
import News_Route from './news.js';
import AboutUs_Route from './about.js';

const Route = express.Router();

Route
	.use('/home', Home_Route)
	.use('/news', News_Route)
	.use('/aboutus', AboutUs_Route)

export default Route;