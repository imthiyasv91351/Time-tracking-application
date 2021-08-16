//declare express
const express = require('express');

//initialize express
const app = express();

const employees = [
	{
		eid: 1,
		name: 'vrinda',
	},
	{
		eid: 2,
		name: 'imthiyas',
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

app.get('/get-employee', (req, res) => {

    console.log(req.query);

    //const{employee, start, end} = req.query;
    
    // const employee = req.query.employee;
    // const start = req.query.start;
    // const end = req.query.end;

    res.status(200).json({
        //response: as we give inputs in frontend
        employees
    });
})

// app.get('/', (req, res) => {

//     console.log(req.query);
//     //const{employee, start, end} = req.query;
//     const employee = req.query.employee;
//     const start = req.query.start;
//     const end = req.query.end;

//     res.status(200).json({
//         //response: as we give inputs in frontend
//         employee,
//         start,
//         end
//     });
// })

app.listen(5000, () =>  {
    console.log("server started running on port 5000");
});