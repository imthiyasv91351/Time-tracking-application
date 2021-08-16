const selectEmployee = document.getElementById('employee-select');
const ipStartDate = document.getElementById('ipStartDate');
const ipEndDate = document.getElementById('ipEndDate');
const btnTrack = document.getElementById('btnTrack');

const resultCard = document.getElementById('resultCard');
const vtName = document.getElementById('vtName');
const vtHours = document.getElementById('vtHours');
const btnCheck = document.getElementById('btnCheck');

document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded');
    fetch('http://localhost:5000/get-employee')
        .then((response) => response.json())
        .then((data) => {
            const {employees} = data;
            let optionMarkup = '<option value="">Select an employee</option>';
            for (let i = 0; i < employees.length; i++) {
                const employee = employees[i];
                optionMarkup += `<option value="${employee.eid}">${employee.eid} - ${employee.name}</option>`;
            }
            selectEmployee.innerHTML = optionMarkup;
        });
});

btnTrack.onclick = () => {
    const start = Number(new Date(ipStartDate.value));
    const end = Number(new Date(ipEndDate.value));
    const eid = selectEmployee.value;
    console.log(eid);

    // console.log('start', new Date(start));

    fetch(`http://localhost:5000/time-track?eid=${eid}&start=${start}&end=${end}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
};