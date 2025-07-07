<template>
<div>

  <div class="w-100  " style="height: 100vh;padding: 30px 0; background-color: #0C2754;">
      <h2 style="font-size: 29px; margin-left: 350px;color: white; font-weight: 700; ">Request a Quote</h2>
      <p style="font-size: 8px; margin-left: 350px; color: rgb(236, 217, 217);"> Entrust with high professionalism, we are capable of offering pixel perfect web & mobile <br> application development, thirld party interogations and solutions to our</p>
      <form @submit.prevent="signUpUser" class="w-50 bg-light" style="height: 415px; border-radius: 10px;margin-top: 20px; margin-left: 350px;box-shadow: 0px 10px 10px  0px rgba(0,0,0,0.2); ">
          <div class="form-group d-flex" style="padding: 0 60px; padding-top: 20px;">
              <div class=""><label for="fname1" class="form-text" style="font-size: 10px; font-weight: 700;color: black;">First Name</label>
              <input type="text"  id="fname1" v-model="form.firstName" class="form-control " style="width: 250px; height:21px;"></div>
              <div class="" style="margin-left:20px;"><label for="fnam1" class="form-text" style="font-size: 10px; font-weight: 700;color: black;">Last Name</label>
                  <input type="text" id="fnam1" v-model="form.lastName" class="form-control " style="width: 250px;height:20px;"></div>
          </div>
          <div class="form-group d-flex" style="padding: 0 60px;padding-top: 19px;">
              <div class=""><label for="fname2" class="form-number" style="font-size: 10px; font-weight: 700;color: black;">Phone Number</label>
                <input type="text" id="fname2" v-model="form.phoneNumber" @input="form.phoneNumber = form.phoneNumber.replace(/[^0-9]/g, '')" class="form-control " style="width: 250px; height:21px"></div>
              <div class="" style="margin-left:20px;"><label for="fnam2" class="form-text" style="font-size: 10px; font-weight: 700;color: black;">Email</label>
                  <input type="email" id="fnam2" v-model="form.email" class="form-control " style="width: 250px;height:20px;"></div>
          </div>

          <div class="form-group d-flex" style="padding: 0 60px; padding-top: 19px;">
              <div class=""><label for="fnam3" class="form-text" style="font-size: 10px; font-weight: 700;color: black;">Project Type</label>
                <select v-model="form.projectType" id="fname3" class="form-control " style="width: 250px; height:21px;font-size:7px;font-weight: bold">
<option value="">Select a project type</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
</select>

              </div>
              <div class="" style="margin-left:20px;"><label for="fnam3" class="form-text" style="font-size: 10px; font-weight: 700;color: black;">Estimate Budget</label>
                  <input type="number" id="fnam3"  v-model="form.estimateBudget" class="form-control " style="width: 250px;height:20px;"></div>
          </div>

          <div class="form-group d-flex" style="padding: 0 60px;padding-top: 19px;">
              <div class=""><label for="fname4" class="form-text" style="font-size: 10px; font-weight: 700;color: black;">Maximum time for the project</label>
              <input type="number" id="fname4" v-model="form.maximumTime" class="form-control " style="width: 250px; height:21px"></div>
              <div class="" style="margin-left:20px;"><label for="fnam4" class="form-text" style="font-size: 10px; font-weight: 700;color: black;">Company Name</label>
                  <input type="text" id="fnam4" v-model="form.companyName"  class="form-control " style="width: 250px;height:20px;">


              </div>
          </div>

          <div class="form-group d-flex" style="padding: 0 60px;padding-top: 19px;">
              <div class=""><label for="fname5" class="form-text" style="font-size: 10px; font-weight: 700;color: black;">Required Skills</label>
              <input type="text" id="fname5" v-model="form.requiredSkills" class="form-control " style="width: 250px; height:21px"></div>
              <div class="" style="margin-left:20px;"><label for="fnam5" class="form-text" style="font-size: 10px; font-weight: 700;color: black;">Country</label>
                <select id="fnam5" v-model="form.country" class="form-control " style="width: 250px;height:21px; font-size:6px; font-weight:bold;">
<option value="">Select a country</option>
<option>Egypt</option>
<option>France</option>
<option>China</option>
<option>Philippines</option>
<option>Malaysia</option>
<option>Thailand</option>
<option>Nigeria</option>
<option>India</option>
<option>Vietnam</option>
<option>United States</option>
<option>Canada</option>
</select>
</div>
          </div>


          <button type="submit" class="btn btn-lg text-light" :disabled="loader" style=" margin-top: 35px !important; font-size: 10px; margin-left: 420px; padding: 8px 38px; background-color: #01C881;">
  <span v-if="loader"> 
    <div class="loader"></div> Submitting... 
  </span>
  <span v-else>Request a quote</span>
</button>







      </form>
      <p style="color: red; margin-left: 350px;">{{ errormsg }}</p>
      <p v-if="showSuccMsg" style="color: green; margin-left: 350px;">{{ succmsg }}</p>



  </div>
</div>
</template>



<script>
export default {
name: 'SignUp',
data() {
  return {
    form: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      projectType: '',
      estimateBudget: '',
      maximumTime: '',
      companyName: '',
      requiredSkills: '',
      country: ''
    },
    errormsg: '',
    succmsg: '',
    showSuccMsg: false,
    loader: false
  }
},
methods: {
  async signUpUser() {
    const phoneNumberRegex = /^\d{10,15}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.form.firstName.trim() || !this.form.lastName.trim() || !this.form.phoneNumber.trim() || !this.form.email.trim() || !this.form.projectType.trim() || !this.form.estimateBudget || !this.form.maximumTime || !this.form.companyName.trim() || !this.form.requiredSkills.trim() || !this.form.country.trim()) {
      this.errormsg = 'Please fill in all required fields.';
      return;
    }

    const allowedProjectTypes = ['A', 'B', 'C', 'D'];
    if (!allowedProjectTypes.includes(this.form.projectType.trim())) {
      this.errormsg = 'Invalid project type. Please select a valid project type.';
      return;
    }

    if (!/^[a-zA-Z\s,]+$/.test(this.form.requiredSkills.trim())) {
      this.errormsg = 'Invalid required skills. Please enter a valid skill set (letters, commas, and spaces only).';
      return;
    }

    if (!phoneNumberRegex.test(this.form.phoneNumber)) {
      this.errormsg = 'Invalid phone number. Please enter a valid phone number.';
      return;
    }

    if (!emailRegex.test(this.form.email)) {
      this.errormsg = 'Invalid email address. Please enter a valid email address.';
      return;
    }

    if (this.form.estimateBudget === '' || this.form.estimateBudget <= 0) {
      this.errormsg = 'Invalid estimate budget. Please enter a valid number.';
      return;
    }

    if (this.form.maximumTime === '' || this.form.maximumTime <= 0) {
      this.errormsg = 'Invalid maximum time. Please enter a valid number.';
      return;
    }

    let response;
    try {
      this.loader = true;
      response = await fetch('https://siwes-task-2.onrender.com/requestaquote', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(this.form)
});

  if (response.ok) {
  this.succmsg = 'Quote request sent successfully!';
  this.showSuccMsg = true;
  this.errormsg = '';
  this.form = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    projectType: '',
    estimateBudget: '',
    maximumTime: '',
    companyName: '',
    requiredSkills: '',
    country: ''
  };
  setTimeout(() => {
    this.succmsg = '';
    this.showSuccMsg = false;
  }, 3000);
}
 else {
        try {
          const errorData = await response.json();
          if (response.status === 400) {
            this.errormsg = 'Invalid request. Please check your form data. Error: ' + errorData.message;
          } else if (response.status === 500) {
            this.errormsg = 'Server error. Please try again later. Error: ' + errorData.message;
          } else {
            this.errormsg = 'Error requesting quote. Please try again. Error: ' + errorData.message;
          }
        } catch (error) {
  console.error('Error requesting quote:', error);
  this.errormsg = 'Error requesting quote. Please try again.';
  console.log('Response data:', await response.text());
}
        this.succmsg = '';
      }
    } catch (error) {
  console.error('Error requesting quote:', error);
  if (error.message && (error.message.includes("NetworkError") || error.message.includes("Failed to fetch"))) {
    this.errormsg = "A network error occurred. Please check your internet connection and try again.";
  } else {
    this.errormsg = 'Error requesting quote. Please try again. Error: ' + error.message;
  }
  this.succmsg = '';
  this.showSuccMsg = false;
  if (response && response !== null) {
    if (response.ok === false) {
      console.log('Response status:', response.status);
      try {
        console.log('Response data:', await response.json());
      } catch (error) {
  console.error('An error occurred:', error);
  console.log('Response data:', await response.text());
}
    }
  } else {
    console.log('No response received');
  }

}
finally {
  this.loader = false;
}

  }
}
}

</script>




<style>



html {
             scroll-behavior: smooth;
          }
        ::placeholder{
              font-size: 8px;
          }
 .loader {
border: 4px solid #f3f3f3;
border-top: 4px solid #3498db;
border-radius: 50%;
width: 20px;
height: 20px;
animation: spin 2s linear infinite;
display: inline-block;
margin-right: 10px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}



@keyframes spin {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}
option[value=""] {
color: #ccc;
}


</style>