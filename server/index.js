// requiring or declaring express 
const express = require("express");

// requiring cors for bypass cors error
const cors = require("cors");
const { timeLog } = require("console");

const dbService = require("./dbServices");

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

const formatDate = (timeStamp) => {
    var d = new Date(timeStamp),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

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

// handle the get request in root end point
app.get('/time-track', (req, res) =>{
    console.log(req.query);

    const {eid, start, end} = req.query;

    console.log(eid, start, end);
    // const eid =req.query.eid;
    // const start =req.query.start;
    // const end =req.query.end;

    let employeeInd = -1;
    employeeInd = employees.findIndex((employee) => employee.eid === eid);

    console.log(employee.eid);
    if(employeeInd === -1){
        return res.status(404).json({
            message: 'employee not found'
        })
    }

    let hours = 0;

    // const start_timeStamp = Number(new Date(start));
    // const end_timeStamp = Number(new Date(end));

    for (let i = 0; i < workLog.length; i++) {
        const workLog = workLog[i];
        if (tempLog.eid === Number(eid)) {  
            const tempDate = Number(new Date(tempLog.date));   
            if (tempDate >= start && tempDate <= end) {
                hours += tempLog.time;
            }    
        }
        
    }

    res.status(200).json({
        // respond as what we have to catch
        hours
    });
})


// listening http server
app.listen(5000, () => {
    console.log("server started running on port 5000");
});