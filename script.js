function calculateTotal() {
    let selectedCourses = document.getElementById('courses').selectedOptions;
    let total = 0;
    for (let option of selectedCourses) {
        total += parseInt(option.value);
    }
    document.getElementById('total').innerText = total + ' R';
}
