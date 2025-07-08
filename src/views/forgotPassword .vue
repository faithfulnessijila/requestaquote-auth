<template>
  <div>
    <div class=" w-100" style="height: 100vh; padding:70px 0px; background-color: #0C2754;">
    <div class="bg-danger d-flex w-75" style="height: 470px; border-radius: 5px;  margin-left: 150px;">
    <div class="" style="height: 470px; width: 60%; background-color: #fff;padding-top: 90px;"><h2 style="color: #01C881; text-align: center; padding-top: 20px; font-weight: 700; font-family:jali greeek;">Forgot Password</h2>
    <div class="" style="height: 5px; width: 7%; background-color: #01C881; border-radius: 10px; margin-left: 245px; margin-top: -5px;"></div>

    <p style="text-align: center; font-size: 13px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5); margin-top: 19px; text-align: center;">Enter your email address</p>
    <form @submit.prevent="forgotPassword" class="form-group" style=" padding-left: 160px;height: 180px; margin-top: 25px;">

            <label for="fname1" class="form-number" style="font-size: 10px; font-weight: 700; position: absolute; z-index: 2; margin-left: 8px;margin-top: -5px;"><p style="background-color: white; font-size: 8px !important;">Email</p></label>
        <input v-model="email"   type="email" id="fname1" placeholder="example@mail.com" class="form-control " style="width: 250px; height:28px;position: relative;"> <div class="error" v-if="errors.email">{{ errors.email}}</div>




            <button :disabled="loading" class="btn btn-sm " type="submit" style="background-color: #01C881;  padding: 5px 30px; border-radius: 5px;  margin-top: 20px;width: 250px;
                color: #FFFFFF;font-weight: bold;font-size: 12px;"><span v-if="loading">Loading...</span>
  <span style="font-family:jali greeek;" v-else>Continue</span>
</button>
                <p v-if="error">{{ error }}</p>
    </form>
    <p v-if="successMessage" style="color: green; font-weight: bold; font-size:10px; margin-top:-20px; text-align: center;">{{ successMessage }}</p>


    <p  style="margin-left: 189px; font-size: 10px; margin-top: 35px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5);">privacy policy &nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp;&nbsp; Terms &nbsp;&&nbsp; conditions </p>
</div>
<div
          class=""
          style="height: 470px; width: 40%; background-color: #01C881; padding: 120px 0;" > <h2 style="color: white; text-align: center; font-weight: 700; font-family: Amsi Pro, sans-serif;">Hello, Friend!</h2>
          <div
            class=""
            style="
              height: 3px;
              width: 10%;
              background-color: white;
              border-radius: 10px;
              margin-left: 156px;
              margin-top: -3px;
            "
          ></div>

          <p
            style="
              color: whitesmoke;
              text-align: center;
              font-size: 11px;
              font-weight: 700;
              margin-top: 15px;
            "
          >
            Fill up personal information and <br />
            start journey with us
          </p>

        </div>
    </div>
  </div>
  </div>
</template>






<script>

export default {
  data() {
  return {
    email: '',
    loading: false,
    error: null,
    errors: {},
    successMessage: null
  }
},
  methods: {
    async forgotPassword() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!this.email) {
        this.error = 'Please enter your email address';
        return;
      }

      if (!emailRegex.test(this.email)) {
        this.error = 'Invalid email format';
        return;
      }

      try {
        this.loading = true;
        this.error = null;
        this.errors = {};

        const response = await fetch('https://siwes-task-2.onrender.com/auth/forgotpassword', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email })
        });


        if (response.ok) {
  this.successMessage = 'Password reset link sent to your email address.';
  setTimeout(() => {
    
  }, 2000);
}



 else {
          const errorData = await response.json();
          this.error = errorData.message || 'An error occurred';
          this.errors = errorData.errors || {};
        }
      }
catch (error) {
  console.error(error);
  this.error = 'An error occurred: ' + error.message;
}
 finally {
        this.loading = false;
      }
    }
  }
}




</script>









<style>
html {
scroll-behavior: smooth;
}

*{
font-family: "Space Grotesk", sans-serif;
margin: 0px;
padding: 0px;
}
::placeholder{
font-size: 8px;
color: #e4e4e4;
}




</style>


































































































































