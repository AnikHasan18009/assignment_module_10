let links=document.querySelectorAll('.nav-link');

let path=window.location.pathname;

links.forEach(link=>
  {
if(link.href.includes(path))
{
  link.classList.add('active');
}
  }
  )


  const form = document.getElementById('form');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  
  form.addEventListener('submit', e => {
      e.preventDefault();
  
      validateInputs();
  });
  
  const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
  
      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success')
  }
  
  const setSuccess = element => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
  
      errorDisplay.innerText = '';
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
  };
  
  const isValidEmail = email => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
  
  const validateInputs = () => {
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const phoneValue = phone.value.trim();
      const messageValue = message.value.trim();
  
      if(usernameValue === '') {
          setError(username, 'Username is required');
      } else {
          setSuccess(username);
      }
  
      if(emailValue === '') {
          setError(email, 'Email is required');
      } else if (!isValidEmail(emailValue)) {
          setError(email, 'Provide a valid email address');
      } else {
          setSuccess(email);
      }
  
      if(phoneValue === '') {
          setError(phone, 'Phone number is required');
      } else if (phoneValue.length != 11 ) {
          setError(phone, 'Phone number must be at least 11 character.')
      } else {
          setSuccess(phone);
      }
  
      if(messageValue === '') {
          setError(message, 'Please enter your message');
      } else {
          setSuccess(message);
      }
  
  };
  
