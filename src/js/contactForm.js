//CONTACT FORM SUBMIT 
(function () {

  var formData = {};
  var cName = document.getElementById('cName');
  var cEmail = document.getElementById('cEmail');
  var cComments = document.getElementById('cComments');
  var submit = document.getElementById('submitContactForm');
  var submitAnimation = function(){
    submit.style.backgroundColor = '#53d608';
    submit.innerHTML = 'Sent';
    setTimeout(function(){
      submit.style.backgroundColor = '#00aeda';
      submit.innerHTML = 'Send';
    },4000);
  };
  submit.addEventListener('click', function () {
    submitAnimation();
    formData = {
      name: cName.value,
      email: cEmail.value,
      comments: cComments.value
    };
    var jsonData = JSON.stringify(formData);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200 || xmlhttp.status == 503) {
          console.log(xmlhttp.responseText);
        } else {
          console.log('Error occurred');
        }
      }
    };
    xmlhttp.open("POST", "https://formspree.io/kyleleightondesign@gmail.com", false);
    xmlhttp.setRequestHeader('Content-type', 'application/json');
    xmlhttp.send(jsonData);
  });

}());