const express = require('express');
const cors = require('cors');
const dbService = require('./dbService');

const app = express();

app.use(cors());

const employees = [
	{
		eid: 1,
		name: 'shaheem',
	},
	{
		eid: 2,
		name: 'imthyas',
	},
	{
		eid: 3,
		name: 'misha',
	},
	{
		eid: 4,
		name: 'jini',
	},
];

const worklog = [
	{
		eid: 1,
		date: '2021-08-14',
		time: 8,
	},
	{
		eid: 1,
		date: '2021-08-13',
		time: 7,
	},
	{
		eid: 2,
		date: '2021-08-14',
		time: 8,
	},
	{
		eid: 2,
		date: '2021-08-13',
		time: 7,
	},
	{
		eid: 3,
		date: '2021-08-14',
		time: 8,
	},
	{
		eid: 3,
		date: '2021-08-13',
		time: 7,
	},
	{
		eid: 4,
		date: '2021-08-14',
		time: 8,
	},
	{
		eid: 4,
		date: '2021-08-13',
		time: 7,
	},
];

const formatDate = (timestamp) => {
	var d = new Date(timestamp),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
};

app.get('/api/get-employees', async (req, res) => {
	const db = dbService.getDbServiceInstance();

	let employees;
	try {
		employees = await db.getAllEmployees();
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}

	res.status(200).json({
		employees,
	});
});

app.get('/api/track-time', async (req, res) => {
	const { eid, start, end } = req.query;

	const db = dbService.getDbServiceInstance();

	const formattedStart = formatDate(Number(start));
	const formattedEnd = formatDate(Number(end));

	let worklog;
	try {
		worklog = await db.getEmployeeWork(eid, formattedStart, formattedEnd);
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}

	const hoursJsonData = JSON.parse(JSON.stringify(worklog));

	let employees;
	try {
		employees = await db.getEmployeeByEid(eid);
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}

    const employeeJsonData = JSON.parse(JSON.stringify(employees));

	res.status(200).json({
		hours: hoursJsonData[0].hours,
        employee: employeeJsonData[0]
	});
});

app.listen(5000, () => {
	console.log('server started running on port 5000');
});