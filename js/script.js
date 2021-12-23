$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
//da48e04f-7ef0-4428-a7ee-5bfa8025bc8d
function send(){
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "",
        Password : "",
        To : '',
        From :"" ,
        Subject : document.getElementById("form-inputs-mail").value ,
        Body : document.getElementById("form-inputs-message").value +" "+ "iam :" +  document.getElementById("form-inputs-name").value 
    }).then(
      message => alert("email sent")
    );
}