function validateForm(event) {
    
    event.preventDefault();
    const firstName = document.getElementById('fname').value.trim();
    const lastName = document.getElementById('lname').value.trim();
    const email = document.getElementById('email-inp').value.trim();
    const role = document.getElementById('role-inp').value;
    const country = document.getElementById('city').value.trim();
    const time = document.getElementById('time').value.trim();
    const bio = document.getElementById('biograph').value.trim();
    const domain = document.getElementById('domain-inp1').value.trim();
    const domainbox = document.getElementById('domain-boxer').value.trim();
    const domain2 = document.getElementById('domain-inp2').value.trim();
    const domainboxx = document.getElementById('domain-boxer2').value.trim();
    const pic = document.getElementById('profile-pic');
    const inputfile = document.getElementById('picture-inp');
    


    const fname = document.getElementById('error-name');
    const lname = document.getElementById('error-lname');
    const roleserror = document.getElementById('error-role');
    const emailerror = document.getElementById('error-email');
    const countryerror = document.getElementById('error-country');
    const timeerror = document.getElementById('error-time');
    const bioerror = document.getElementById('error-bio');
    const domainerror = document.getElementById('error-ftdomain');
    const domainerrors = document.getElementById('error-stdomain');
    


    fname.textContent ='';
    lname.textContent ='';
    roleserror.textContent ='';
    emailerror.textContent = '';
    countryerror.textContent = '';
    timeerror.textContent = '';
    bioerror.textContent = '';
    domainerror.textContent = '';
    domainerrors.textContent = '';
   

    let isValid = true;



    inputfile.onchange = function(){
        pic.src = URL.createObjectURL(inputfile.files[0]);
        
    }


    if(firstName === '' && lastName ===''){
        fname.textContent = "First name is required";
        lname.textContent = "Last name is required";
        document.getElementById('fname').style.border = '2px solid red';
        document.getElementById('lname').style.border = '2px solid red';
        isValid = false;
        console.log('empty');
    }

    else if(/\d/.test(firstName) && /\d/.test(lastName)){
        fname.textContent = "Enter your correct name";
        lname.textContent = "Enter your correct name";
        document.getElementById('fname').style.border = '2px solid red';
        document.getElementById('lname').style.border = '2px solid red';
        isValid = false;
        console.log('empty');
    }

    else if(firstName !== '' && lastName === '' || firstName === '' && lastName !== ''){
        lname.textContent = 'Both names are required'
        document.getElementById('fname').style.border = '2px solid red';
        document.getElementById('lname').style.border = '2px solid red';
        isValid = false;
        console.log('empty');
    }



    else{
        document.getElementById('fname').style.border = '2px solid #31db39ff';
        document.getElementById('lname').style.border = '2px solid #31db39ff';
        console.log(`Name: ${firstName} ${lastName}`);
    }





    if (email === '' || !email.includes("@")) {
        emailerror.textContent = "Enter a valid email";
        document.getElementById('email-inp').style.border = '2px solid red';
        isValid = false;
        console.log('empty');
    }

    else{
        document.getElementById('email-inp').style.border = '2px solid #31db39ff';
        console.log(`Email: ${email}`);
    }



    if (role === ''){
        roleserror.textContent = "Role is mandatory";
        document.getElementById('role-inp').style.border = '2px solid red';
        isValid = false;
        console.log('empty');
    }

    else{
        document.getElementById('role-inp').style.border = '2px solid #31db39ff';
        console.log(`Role: ${role}`)
    }

        
    if(country === ''){
        countryerror.textContent = 'select country';
        document.getElementById('city').style.border = '2px solid red';
        isValid = false;
        console.log('empty');
    }

    else{
        document.getElementById('city').style.border = '2px solid #31db39ff';
        console.log(`Country: ${country}`);   
    }

    if(time === ''){
        timeerror.textContent = 'select timezone';
        document.getElementById('time').style.border = '2px solid red';
        isValid = false;
        console.log('empty');
    }

    else{
        document.getElementById('time').style.border = '2px solid #31db39ff';
        console.log(`Time: ${time}`);
    }

     if(domain === ''){
        domainerror.textContent = 'Enter domain';
        document.getElementById('domain-inp1').style.border = '2px solid red';
        isValid = false;
        console.log('empty');
    }

    else{
        document.getElementById('domain-inp1').style.border = '2px solid #31db39ff';    
    }


    if(domainbox === ''){
        domainerror.textContent = 'Enter domain';
        document.getElementById('domain-boxer').style.border = '2px solid red';
        isValid = false;
    }else{
        document.getElementById('domain-boxer').style.border = '2px solid #31db39ff';
        console.log(`Domain: ${domainbox} ${domain}`);  
    }
    
    
    if(domain2 === ''){
        domainerrors.textContent = 'Enter custom domain';
        document.getElementById('domain-inp2').style.border = '2px solid red';
        isValid = false;
        console.log('empty');
    }

    else{
        document.getElementById('domain-inp2').style.border = '2px solid #31db39ff';    
    }


    if(domainboxx === ''){
        domainerrors.textContent = 'Enter custom domain';
        document.getElementById('domain-boxer2').style.border = '2px solid red';
        isValid = false;
    }else{
        document.getElementById('domain-boxer2').style.border = '2px solid #31db39ff';
        console.log(`Custom domain: ${domainboxx} ${domain2}`);  
    } 

    if(bio === ''){
        bioerror.textContent = 'fill biography';
        document.getElementById('biograph').style.border = '2px solid red';
        console.log('empty');
        isValid = false;
    }

    else{
        document.getElementById('biograph').style.border = '2px solid #31db39ff';
        console.log(`Biography: ${bio}`);
    }

    
    

}

const form = document.getElementById("form");
form.addEventListener("submit", validateForm);


