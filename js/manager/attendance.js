window.onload = function() {
    datePicker = document.getElementById('datePicker');
    datePicker.valueAsDate = new Date();
    searchTable('datePicker', 'attendance');
}
