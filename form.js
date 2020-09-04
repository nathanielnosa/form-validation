//Form ids
    document.querySelector('#name').addEventListener('keyup',validateName);
    document.querySelector('#email').addEventListener('keyup',validateEmail);
    document.querySelector('#phone').addEventListener('keyup',validatePhone);
    document.querySelector('#zip').addEventListener('keyup',validateZip);

function validateName(){
  const name = document.querySelector('#name');
  const re =/^([a-zA-Z]+)(\s{1}[a-zA-Z]+)$/;
  if(re.test(name.value)){
    name.classList.add('is-valid');
    name.classList.remove('is-invalid');
  }else{
    name.classList.add('is-invalid');
    name.classList.remove('is-valid');
  }
}
function validateEmail(){
  const email = document.querySelector('#email');
  const re =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(re.test(email.value)){
    email.classList.add('is-valid');
    email.classList.remove('is-invalid');
  }else{
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');
  }

}
function validatePhone(){
  const phone = document.querySelector('#phone');
  const re =/^\(?\d{3}\)?[-. ]?\d{10}$/;
  if(re.test(phone.value)){
    phone.classList.add('is-valid');
    phone.classList.remove('is-invalid');
  }else{
    phone.classList.add('is-invalid');
    phone.classList.remove('is-valid');
  }
 
}
function validateZip(){
  const zip = document.querySelector('#zip');
  const re =/^[0-9]{3}(-[0-9]{3})?$/;
  if(re.test(zip.value)){
    zip.classList.add('is-valid');
    zip.classList.remove('is-invalid');
  }else{
    zip.classList.add('is-invalid');
    zip.classList.remove('is-valid');
  }
  
}