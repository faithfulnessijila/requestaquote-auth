<template>
  <div>
    <div class="w-100" style="height: 100vh; padding: 25px 0px; background-color: #0C2754;">
      <div
        class="bg-danger d-flex w-75"
        style="height: 540px; border-radius: 5px; margin-left: 150px"
      >
        <form @submit.prevent="signUpUser" class="" style="height: 540px; width: 60%; background-color: #fff; padding: 20px 60px">
          <h2 style="color: #01C881; padding-top: 20px; font-weight: 700;font-family:  SUSHI Stroke, sans-serif;">Sign Up</h2>
          <p>{{ succmsg }}</p>
          <div class="form-group d-flex" style="">
            <div class="">
              <label for="fname1" class="form-text" style="font-size: 10px; font-weight: 700"
                >First Name</label
              >
              <input
                type="text"
                required
                id="fname1"
                v-model="form.firstName"
                class="form-control"
                style="width: 170px; height: 27px"
              />
              <!-- {{ form.firstName }} -->
            </div>
            <div class="" style="margin-left: 27px">
              <label for="fnam2" class="form-text" style="font-size: 10px; font-weight: 700"
                >Last Name</label
              >
              <input
                type="text"
                required
                  v-model="form.lastName"
                id="fnam2"
                class="form-control"
                style="width: 170px; height: 27px"
              />
            </div>
          </div>

          <div class="form-group d-flex" style="">
            <div class="">
              <label for="fname3" class="form-text" style="font-size: 10px; font-weight: 700"
                >Email</label
              >
              <input
               v-model="form.email"
                type="email"
                required
                id="fname3"
                class="form-control"
                style="width: 360px; height: 27px"
              />
            </div>
          </div>

          <div class="form-group d-flex" style="">
            <div class="">
              <label for="fname4" class="form-text" style="font-size: 10px; font-weight: 700"
                >Password</label
              >
              <input
                type="password"
                required
                 v-model="form.password"
                id="fname4"
                class="form-control"
                style="width: 360px; height: 27px"
              />
            </div>
          </div>

          <div class="form-group d-flex" style="">
            <div class="">
              <label for="fname5" class="form-text" style="font-size: 10px; font-weight: 700"
                >Re-enter password</label
              >
              <input
              required
                type="password"
                v-model="confirmPassword"
                id="fname5"
                class="form-control"
                style="width: 360px; height: 27px;"
              />
            </div>

          </div>
          <p>{{ errormsg }}</p>
          <div class="form-group d-flex" style="margin-top: 15px">
            <div class="">
              <input
                type="checkbox" v-model="terms"

                style="height: 16px; width: 16px; cursor: pointer; margin-top: 15px"
              />
              <p
                class="card-link text-dark"
                style="font-size: 9px; margin-top: -27px; margin-left: 18px"
              >
                I've read and agree with terms of service and <br />our privacy policy
              </p>
            </div>
          </div>
          <button
          type="submit"
          :disabled="loader"
            class="btn btn-md"
            style="
             background-color: #01C881;
              border-radius: 5px;
              color: #ffffff;
              font-weight: bold;
              font-size: 12px;
              width: 360px;
              margin-top: 14px;
            "
          >
          <svg
          v-show="loader"
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 50 50"
>
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="#fff"
    stroke-width="5"
    stroke-linecap="round"
    stroke-dasharray="90,150"
    stroke-dashoffset="0"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="1s"
      repeatCount="indefinite"
    />
  </circle>
</svg>

            Sign up
          </button>
          <p style="margin-left: 170px; font-size: 10px; font-weight: 700; margin-top: 20px">OR</p>
          <div class="form-group d-flex" style="margin-top: -4px">
            <div
              class="btn btn-md"
              style="
                border: 0.1px solid rgb(188, 183, 183);
                width: 170px;
                border-radius: 7px;
                color: black;
                font-weight: 700;
                font-size: 8px;
              "
            ><i class="fa-brands fa-google" style="font-size: 10px;"></i>
              <a  style="margin-left: 3px;">Sign up with Goggle</a>
            </div>
            <div
              class="btn btn-md"
              style="
                border: 0.1px solid rgb(188, 183, 183);
                width: 170px;
                border-radius: 7px;
                margin-left: 20px;
                background-color:purle ;
                color: black;
                font-weight: 700;
                font-size: 8px;
              "
            ><i class="fa-brands fa-facebook" style="font-size: 10px;"></i>
             <a style="margin-left: 3px;"> Sign up with Facebook</a>
            </div>
          </div>

          <div class=""></div>

          <p style="font-size: 10px; margin-left: 110px; margin-top: 21px; font-weight: 700">
            Already have an account? &nbsp;<a @click="$router.push('/sign-in')" style="cursor: pointer; color: gray;font-family:  SUSHI Stroke, sans-serif;">sign in</a>
          </p>
        </form>
        <!-- <div class="" style="height:540px; width: 40%; background-color:  #0C2754;"></div> -->
        <div
          class=""
          style="height: 540px; width: 40%;background-color: #01C881; padding: 150px 0"
        >
          <h2 style="color: white; text-align: center; font-weight: 700;font-family: Amsi Pro, sans-serif;">Hello, Friend!</h2>
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
          <button @click="$router.push('/sign-in')"
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
              font-family:jali greeek;
              
            "
          >
            Sign in
          </button>
        </div>
      </div>
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
        email: '',
        password: '',
      },
      confirmPassword: '',
      loader: false,
      terms: false,
    }
  },
  mounted() {},
  methods: {
    async signUpUser() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email.trim())) {
        alert("Invalid email address")
        return
      }
      if (this.form.password !== this.confirmPassword) {
        alert("Passwords do not match")
        return
      }
      if (!this.terms) {
        alert("Please agree to the terms and conditions")
        return
      }
      this.loader = true
      let response;
      try {
        response = await fetch('https://siwes-task-2.onrender.com/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form),
        })
        if (response.ok) {
  const data = await response.json()
  console.log('Success:', data);
  alert("Sign up was successful")
  this.$router.push('/otp');
}
else {
          try {
            const errorResponse = await response.json();
            alert(errorResponse.message || "Error signing up")
          } catch {
            alert("Error signing up")
          }
        }
      } catch (error) {
        console.error('Error:', error);
        alert("Error signing up")
      }
      this.loader = false
    }
  }
}
</script>









<style>
html {
  scroll-behavior: smooth;
}

* {
  font-family: 'Space Grotesk', sans-serif;
  margin: 0px;
  padding: 0px;
}
::placeholder {
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
    <form @submit.prevent="onLogin()" class="form-group" style=" background-color: ellow; padding-left: 130px;height: 180px; margin-top: 25px;">

            <label for="fname2" class="form-number" style="font-size: 10px; font-weight: 700; position: absolute; z-index: 2; margin-left: 8px;margin-top: -5px;"><p style="background-color: white; font-size: 8px !important;">Email</p></label>
        <input v-model="email"   type="email" id="fname2" placeholder="example@mail.com" class="form-control " style="width: 250px; height:28px;position: relative;"> <div class="error" v-if="errors.email">{{ errors.email}}</div>

            <input v-model="password"   type="password" id="fnam2" placeholder="password" class="form-control " style="width: 250px;height:28px; margin-top:25px;">   <div class="error" v-if="errors.password ">{{ errors.password }}</div>

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
import SignupValidations from './services/SignupValidations';

// export default {
//   name: 'SignIn',

//   data() {
//     return {
//       email: '',
//       password: '',
//       errors:[],

//     };
//   },

//   mounted() {

//   },

//   methods: {
//     onLogin() {
//       let validations = new SignupValidations(
//         this.email,
//         this.password
//       );
//       this.errors = validations.checkValidation();
//       if (this.errors.length) {
//         return false;
//       }
//     },
//   },

// };
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
