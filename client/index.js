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
        .then(response => response.json())
        .then(data => console.log(data));
});

btnTrack.onclick = () => {

};