/* Input the correct syntax */
$(document).ready(function() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB'); 
    $(".bi-clock").parent().text(` ${formattedDate}`);
    
    // Confirm button functionality
    $('.btn-confirm').click(function() {
        alert('Payment confirmed!');
    });
});
