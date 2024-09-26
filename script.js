document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalElement = document.getElementById('total');

    function calculateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
            }
        });
        totalElement.textContent = 'R ' + total;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    // Initial calculation
    calculateTotal();

    // Form submission (you can customize this part based on your needs)
    document.getElementById('checkout-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedCourses = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.getAttribute('data-course'));
        
        alert('Selected courses: ' + selectedCourses.join(', ') + '\nTotal: ' + totalElement.textContent);
        // Here you would typically send this data to a server or payment processor
    });
});