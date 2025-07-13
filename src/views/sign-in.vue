<template>
  <div>
    <div class=" w-100" style="height: 100vh; padding:70px 0px; background-color: #0C2754;">
    <div class="bg-danger d-flex w-75" style="height: 470px; border-radius: 5px;  margin-left: 150px;">
    <div class="" style="height: 470px; width: 60%; background-color: #fff;"><h2 style="color: #01C881; text-align: center; padding-top: 20px; font-weight: 700; font-family:jali greeek;">Sign in to Account</h2>
    <div class="" style="height: 5px; width: 7%; background-color: #01C881; border-radius: 10px; margin-left: 245px; margin-top: -5px;"></div>
    <div class="" style="height: 45px; width: 32%; margin-left: 195px;  margin-top: 15px; display: flex; padding-bottom: 50px;margin-top: 25px;">
        <i class="fa-brands fa-facebook-f" style="font-size: 18px; text-align: center;padding-top: 7px; background-color:#e7e7e7; width: 30px; height: 30px; border-radius: 50%;"></i>
        <i class="fa-brands fa-linkedin-in" style="font-size: 18px; text-align: center;padding-top: 7px; margin-left:20px; background-color:#e7e7e7; width: 30px; height: 30px; border-radius: 50%;"></i>
        <i class="fa-brands fa-google-plus-g" style="font-size: 18px; text-align: center;padding-top: 7px;margin-left:20px; background-color:#e7e7e7; width: 30px; height: 30px; border-radius: 50%;"></i>

    </div>
    <p style="text-align: center; font-size: 12px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5); margin-top: 5px;">or use your email account</p>
    <form @submit.prevent="login" class="form-group" style=" background-color: ellow; padding-left: 130px;height: 180px; margin-top: 25px;">

            <label for="fname1" class="form-number" style="font-size: 10px; font-weight: 700; position: absolute; z-index: 2; margin-left: 8px;margin-top: -5px;"><p style="background-color: white; font-size: 8px !important;">Email</p></label>
        <input v-model="email"   type="email" id="fname1" placeholder="example@mail.com" class="form-control " style="width: 250px; height:28px;position: relative;"> <div class="error" v-if="errors.email">{{ errors.email}}</div>

            <input v-model="password"   type="password" id="fnam2" placeholder="password" class="form-control " style="width: 250px;height:28px; margin-top:25px;">   <div class="error" v-if="errors.password ">{{ errors.password }}</div>

            <div class=" bg-daner" style="height: 28px; width: 250px; margin-top: 40px; font-size: 12px; display: flex; ">
                <input type="checkbox" style="width: 18px; height: 18px; margin-top: 5px;"> <p style="margin-left: 5px; margin-top: 6px;font-weight: 700; color: #0C2754; cursor: pointer;">Remember me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a @click="$router.push('/forgotpassword')"> Forgot password?</a></p>
            </div>

            <button :disabled="loading" class="btn btn-sm " type="submit" style="background-color: #01C881;  padding: 5px 30px; border-radius: 15px; margin-left: 76px; margin-top: 20px;
                color: #FFFFFF;font-weight: bold;font-size: 12px;"><span v-if="loading">Loading...</span>
  <span style="font-family:jali greeek;" v-else>Sign in</span>
</button>
                <p v-if="error">{{ error }}</p>
    </form>
    <p href="" style="margin-left: 189px; font-size: 10px; margin-top: 75px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5);">privacy policy &nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp;&nbsp; Terms &nbsp;&&nbsp; conditions </p>
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
          <button @click="$router.push('/sign-up')"
            class="btn btn-sm"
            style="
              border: 1.5px solid white;
              padding: 5px 30px;
              border-radius: 15px;
              margin-left: 140px;
              margin-top: 20px;
              color: #ffffff;
              font-weight: 700;
              font-family:jali greeek;
              font-size: 11px;
              
            "
          >
            Sign up                               
          </button>
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
      password: '',
      loading: false,
      error: null,
      errors: {}
    }
  },
  methods: {
    async login() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email || !this.password) {
        this.error = 'Please fill in all fields';
        return;
      }
      if (!emailRegex.test(this.email)) {
        this.error = 'Invalid email format';
        return;
      }
      this.loading = true;
      this.error = null;
      this.errors = {};
      try {
        const response = await fetch('https://siwes-task-2.onrender.com/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: this.email, password: this.password })
        });
        if (response.ok) {
          const data = await response.json();
          if (data.token) {
            localStorage.setItem('token', data.token);
            this.$router.push('/');
          } else {
            this.error = 'Invalid credentials';
          }
        } else {
          const errorData = await response.json();
          if (errorData.errors) {
            this.errors = errorData.errors;
          } else {
            this.error = errorData.message || 'An error occurred';
          }
        }
      } catch (e) {
        console.error(e);
        this.error = 'An error occurred';
      } finally {
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


































































































































<!-- <template>
  <div>
    <div class=" w-100" style="height: 100vh; padding:70px 0px; background-color: #0C2754;">
    <div class="bg-danger d-flex w-75" style="height: 470px; border-radius: 5px;  margin-left: 150px;">
    <div class="" style="height: 470px; width: 60%; background-color: #fff;"><h2 style="color: #01C881; text-align: center; padding-top: 20px; font-weight: 700;">Sign in to Account</h2>
    <div class="" style="height: 5px; width: 7%; background-color: #01C881; border-radius: 10px; margin-left: 245px; margin-top: -5px;"></div>
    <div class="" style="height: 45px; width: 32%; margin-left: 195px;  margin-top: 15px; display: flex; padding-bottom: 50px;margin-top: 25px;">
        <i class="fa-brands fa-facebook-f" style="font-size: 18px; text-align: center;padding-top: 7px; background-color:#e7e7e7; width: 30px; height: 30px; border-radius: 50%;"></i>
        <i class="fa-brands fa-linkedin-in" style="font-size: 18px; text-align: center;padding-top: 7px; margin-left:20px; background-color:#e7e7e7; width: 30px; height: 30px; border-radius: 50%;"></i>
        <i class="fa-brands fa-google-plus-g" style="font-size: 18px; text-align: center;padding-top: 7px;margin-left:20px; background-color:#e7e7e7; width: 30px; height: 30px; border-radius: 50%;"></i>
    </div>
    <p style="text-align: center; font-size: 12px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5); margin-top: 5px;">or use your email account</p>
    <form  class="form-group" style=" background-color: ellow; padding-left: 130px;height: 180px; margin-top: 25px;">

            <label for="fname2" class="form-number" style="font-size: 10px; font-weight: 700; position: absolute; z-index: 2; margin-left: 8px;margin-top: -5px;"><p style="background-color: white; font-size: 8px !important;">Email</p></label>
        <input   type="email" id="fname2" placeholder="example@mail.com" class="form-control " style="width: 250px; height:28px;position: relative;">

            <input type="password" id="fnam2" placeholder="password" class="form-control " style="width: 250px;height:28px; margin-top:25px;">

            <div class=" bg-daner" style="height: 28px; width: 250px; margin-top: 40px; font-size: 12px; display: flex; ">
                <input type="checkbox" style="width: 18px; height: 18px; margin-top: 5px;"> <p style="margin-left: 5px; margin-top: 6px;font-weight: 700; color: #0C2754; cursor: pointer;">Remember me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Forgot password?</p>
            </div>

            <div class="btn btn-sm " style="background-color: #01C881;  padding: 5px 30px; border-radius: 15px; margin-left: 76px; margin-top: 20px;
                color: #FFFFFF;font-weight: bold;font-size: 12px;">Sign in</div>
    </form>
    <p href="" style="margin-left: 189px; font-size: 10px; margin-top: 75px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5);">privacy policy &nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp;&nbsp; Terms &nbsp;&&nbsp; conditions </p>
</div>
<div
          class=""
          style="height: 470px; width: 40%; background-color: #01C881; padding: 120px 0;" > <h2 style="color: white; text-align: center; font-weight: 700">Hello, Friend!</h2>
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
          <div
            class="btn btn-sm"
            style="
              border: 1.5px solid white;
              padding: 5px 30px;
              border-radius: 15px;
              margin-left: 140px;
              margin-top: 20px;
              color: #ffffff;
              font-weight: 700;
              font-size: 11px;
            "
          >
            Sign in
          </div>
        </div>
    </div>
  </div>
  </div>
</template>


<script>
export default {
  name: 'SignIn',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
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

</style> -->
