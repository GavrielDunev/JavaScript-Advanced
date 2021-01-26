function deleteByEmail() {
    let input = document.querySelector('input[name="email"]').value;
    let emails = document.querySelectorAll('tbody tr');
    let result = document.getElementById('result');
    let isFound = false;
    for (let current of emails) {
        if (current.textContent.includes(input)) {
            current.remove();
            result.textContent = 'Deleted.';
            isFound = true;
        }
    }
    if (!isFound) {
        result.textContent = 'Not found.';
    }
}