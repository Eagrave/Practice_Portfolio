const displayStudents = () => {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = ''; 
    students.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-3">${student.name}</td>
            <td class="px-6 py-3"> ${student.course}</td>
            <td class="px-6 py-3">${formatDate(student.bday)}</td>
            <td class="px-6 py-3">${student.email}</td>
            <td class="px-6 py-3">${student.address}</td>
            <td class="px-6 py-3">${student.contact}</td>
            <td class="px-6 py-3">${student.gender}</td>
            <td class="px-6 py-3">
                <button type="button" class="bg-green-500 edit-btn p-2">Edit</button>
                <button type="button" class="bg-red-500 delete-row p-2" onclick="deleteRow(${student.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
};
const deleteRow = (id) => {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    const studentToDelete = students.find(student => student.id === id);
    students = students.filter(student => student.id !== id);
    localStorage.setItem('students', JSON.stringify(students));
    alert(`${studentToDelete.name} has been removed.`);
    displayStudents();    
}

const editRow = ()=>{
    
}

document.addEventListener('DOMContentLoaded', displayStudents);