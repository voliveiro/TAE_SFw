// Populate the Job Role dropdown
function populateJobRole() {
    const jobRoleSelect = document.getElementById('jobRole');
    const jobRoles = [...new Set(data.map(item => item['Job Role']))];

    jobRoles.forEach(role => {
        const option = document.createElement('option');
        option.value = role;
        option.textContent = role;
        jobRoleSelect.appendChild(option);
    });
}

// Populate Critical Work Function based on Job Role selection
function populateCriticalWorkFunction() {
    const jobRole = document.getElementById('jobRole').value;
    const workFunctionSelect = document.getElementById('workFunction');
    workFunctionSelect.innerHTML = '<option value="">-- Select Critical Work Function --</option>';

    const filteredFunctions = data.filter(item => item['Job Role'] === jobRole);

    const workFunctions = [...new Set(filteredFunctions.map(item => item['Critical Work Function']))];
    workFunctions.forEach(func => {
        const option = document.createElement('option');
        option.value = func;
        option.textContent = func;
        workFunctionSelect.appendChild(option);
    });
}

// Populate Key Tasks based on Critical Work Function selection
function populateKeyTasks() {
    const workFunction = document.getElementById('workFunction').value;
    const keyTasksSelect = document.getElementById('keyTasks');
    keyTasksSelect.innerHTML = '<option value="">-- Select Key Tasks --</option>';

    const filteredTasks = data.filter(item => item['Critical Work Function'] === workFunction);

    const keyTasks = [...new Set(filteredTasks.map(item => item['Key Tasks']))];
    keyTasks.forEach(task => {
        const option = document.createElement('option');
        option.value = task;
        option.textContent = task;
        keyTasksSelect.appendChild(option);
    });
}

// Initialize the Job Role dropdown on page load
window.onload = populateJobRole;
