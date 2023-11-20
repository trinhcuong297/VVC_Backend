import express from 'express';
import Home_Route from './home.js';
import News_Route from './news.js';
import AboutUs_Route from './about.js';
import Project_Route from './project.js';

const Route = express.Router();

Route
	.use('/home', Home_Route)
	.use('/news', News_Route)
	.use('/aboutus', AboutUs_Route)
	.use('/project', Project_Route)
	.post('/admin/login', (req, res) => {
		console.log(req.body)
		if (req.body?.Email == "vvcgreen" && req.body?.Password == "12345678") {
			return res.status(200).json(1)
		} else {
			return res.status(200).json(0)
		}
	})

export default Route;