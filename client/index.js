const selectEmployee = document.getElementById('employee-select');
const ipStartDate = document.getElementById('ipStartDate');
const ipEndDate = document.getElementById('ipEndDate');
const btnTrack = document.getElementById('btnTrack');

const resultCard = document.getElementById('resultCard');
const vtName = document.getElementById('vtName');
const vtHours = document.getElementById('vtHours');
const btnCheck = document.getElementById('btnCheck');

document.addEventListener('DOMContentLoaded', function () {
	fetch('http://localhost:5000/api/get-employees')
		.then((response) => response.json())
		.then((data) => {
			const { employees } = data;
			let optionsMarkup = '<option value="">Select an employee</option>';
			for (let i = 0; i < employees.length; i++) {
				const employee = employees[i];
				optionsMarkup += `<option value="${employee.eid}">${employee.eid} - ${employee.name}</option>`;
			}
			selectEmployee.innerHTML = optionsMarkup;
		});
});


btnTrack.onclick = () => {
	const start = Number(new Date(ipStartDate.value));
	const end = Number(new Date(ipEndDate.value));
    const eid = selectEmployee.value;

    fetch(`http://localhost:5000/api/track-time?eid=${eid}&start=${start}&end=${end}`)
		.then((response) => response.json())
		.then((data) => {
			if (data.hours === undefined) {
                swal("", data.message || 'something went wrong', "error");
                return;
            }
            vtName.innerText = data.employee.eid + ' - ' + data.employee.name;
            vtHours.innerText = data.hours + ' Hours';
            resultCard.style.display = 'block';
		});
};

btnCheck.onclick = () => {
    window.location.reload();
}