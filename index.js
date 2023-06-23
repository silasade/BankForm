function Validator(){
    
        
        const email = document.getElementById('email').value;
        const accountNumber = document.getElementById('account-number').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        const accountNumberPattern = /^\d{6}$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        
        
        
        
        if (!emailPattern.test(email)) {
          alert('Please enter a valid Email address.');
          return false;
        }
        
        
        
        if (!accountNumberPattern.test(accountNumber)) {
          alert('Please enter a valid Account Number (6 digits).');
          return false;
        }
        if (!passwordPattern.test(password)) {
            alert('Please enter a valid Password (at least 1 letter, 1 digit, and 8 characters long).');
            return false;
          }
        
       
        
        if (password !== confirmPassword) {
          alert('Password and Confirm Password do not match.');
          return false;
        }
        
        // If all validation checks pass, the form is valid and can be submitted
        return true;
      }
