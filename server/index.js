// requiring or declaring express 
const express = require("express");

// requiring cors for bypass cors error
const cors = require("cors");

// initializing express
const app = express();

app.use(cors());

const employees = [
	{
		eid: 1,
		name: 'imthiyas',
	},
	{
		eid: 2,
		name: 'rashad',
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

const workLog = [
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

//handle the get request in root end point
app.get('/get-employee', (req, res) =>{
    console.log(req.query);

    // const{employee, start, end} = req.query;

    // const employee =req.query.employee;
    // const start =req.query.start;
    // const end =req.query.end;

    res.status(200).json({
        // respond as what we have to catch
        employees
    });
})

//handle the get request in root end point
// app.get('/get-employee', (req, res) =>{
//     console.log(req.query);

//     // const{employee, start, end} = req.query;

//     const employee =req.query.employee;
//     const start =req.query.start;
//     const end =req.query.end;

//     res.status(200).json({
//         // respond as what we have to catch
//         employee,
//         start,
//         end
//     });
// })


// listening http server
app.listen(5000, () => {
    console.log("server started running on port 5000");
});