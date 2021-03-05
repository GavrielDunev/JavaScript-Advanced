window.onload = loadStudents;
document.querySelector('#addForm').addEventListener('submit', addStudent);

async function addStudent(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    if (firstName == '' || lastName == '' || facultyNumber == '' || grade == '') {
        return alert('All fields must be filled !');
    }

    if (isNaN(Number(grade)) == true || Number.isInteger(Number(facultyNumber)) == false) {
        return alert('Faculty number and grade must be numbers !')
    }

    fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            facultyNumber: facultyNumber,
            grade: Number(grade)
        })
    });

    loadStudents();
    event.target.reset();
}

async function loadStudents() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();

    Object.values(data).map(createRow).forEach(r => tbody.appendChild(r));

    function createRow(student) {
        const row = document.createElement('tr');

        const firstName = document.createElement('td');
        firstName.textContent = student.firstName;

        const lastName = document.createElement('td');
        lastName.textContent = student.lastName;

        const facultyNumber = document.createElement('td');
        facultyNumber.textContent = student.facultyNumber;

        const grade = document.createElement('td');
        grade.textContent = student.grade;

        row.appendChild(firstName);
        row.appendChild(lastName);
        row.appendChild(facultyNumber);
        row.appendChild(grade);

        return row;
    }
}