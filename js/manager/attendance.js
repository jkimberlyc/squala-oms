window.onload = function() {
    datePicker = document.getElementById('datePicker');
    datePicker.value = new Date().toLocaleDateString('en-ca')
    datePicker.max = new Date().toLocaleDateString('en-ca')
    searchTable('datePicker', 'attendance');
}
