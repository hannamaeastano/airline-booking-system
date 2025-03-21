/* Input the correct syntax */
$(document).ready(function() {
    // Set the real-time date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    $(".bi-clock").parent().text(` ${formattedDate}`);
    
    // Confirm button functionality
    $('.btn-confirm').click(function() {
        alert('Payment confirmed!');
    });
});