let isPaymentDone = false;

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!isPaymentDone) {
        alert('Please complete the payment first.');
        return;
    }
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const doctor = document.getElementById('doctor').value;
    
    const appointment = {
        name,
        date,
        time,
        doctor,
        payment: 500 // Fixed payment amount
    };
    
    addAppointmentToList(appointment);
    clearForm();
    isPaymentDone = false; // Reset payment status for next appointment
    document.getElementById('schedule-button').disabled = true;
});

document.getElementById('payment-button').addEventListener('click', function() {
    alert('Payment of Rs.500 successful!');
    isPaymentDone = true;
    document.getElementById('schedule-button').disabled = false;
});

function addAppointmentToList(appointment) {
    const appointmentsList = document.getElementById('appointments-list');
    const appointmentItem = document.createElement('li');
    
    appointmentItem.innerHTML = `
        <div class="appointment-header">
            <span> ${appointment.name}</span>
            <button class="cancel-button">Cancel</button>
        </div>
        <div class="appointment-details">
            <p><strong>Doctor:</strong> Dr. ${appointment.doctor}</p>
            <p><strong>Date:</strong> ${appointment.date}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
            <p><strong>Payment:</strong> Rs.${appointment.payment}</p>
        </div>
    `;
    
    appointmentItem.querySelector('.cancel-button').onclick = function() {
        showConfirmationDialog(appointmentItem);
    };
    
    appointmentsList.appendChild(appointmentItem);
}

function clearForm() {
    document.getElementById('appointment-form').reset();
}

function showConfirmationDialog(appointmentItem) {
    const dialog = document.getElementById('confirmation-dialog');
    dialog.style.display = 'block';

    document.getElementById('confirm-yes').onclick = function() {
        const appointmentsList = document.getElementById('appointments-list');
        appointmentsList.removeChild(appointmentItem);
        dialog.style.display = 'none';
        alert('Your refund will proceed within 24 hours.');
    };

    document.getElementById('confirm-no').onclick = function() {
        dialog.style.display = 'none';
    };
}
