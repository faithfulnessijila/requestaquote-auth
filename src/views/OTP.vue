<template>
  <div>
    <div class=" w-100" style="height: 100vh; padding:70px 0px; background-color: #0C2754;">
    <div class="bg-danger d-flex w-75" style="height: 470px; border-radius: 5px;  margin-left: 150px;">
    <div class="" style="height: 470px; width: 60%; background-color: #fff;padding-top: 70px;"><h2 style="color: #01C881; text-align: center; padding-top: 20px; font-weight: 700; font-family:jali greeek;"> OTP Verification</h2>
    <div class="" style="height: 5px; width: 11%; background-color: #01C881; border-radius: 10px; margin-left: 245px; margin-top: -5px;"></div>

    <p style="text-align: center;  font-size: 12px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5); margin-top: 19px; text-align: center;">Your code was sent to you via email </p>
    <div class="d-flex w-100"  type="number"    style="height: 50px;  padding: 20px 60px;">
    <input @paste="validatePaste($event)" @keypress="validateNumber($event)"  ref="input0" class=" w-100"  v-model="otpDigits[0]"  type="number" maxlength="1" @input="focusNextInput(1)"  style="height: 50px; background-color: white;box-shadow: 0.4px 0.4px 0.8px  0.8px gray; border-radius: 4px;text-align: center; border-color: transparent;">
    <input @paste="validatePaste($event)" @keypress="validateNumber($event)"  ref="input1" class=" w-100"  v-model="otpDigits[1]"  type="number" maxlength="1" @input="focusNextInput(2)" style ="height: 50px; background-color: white;box-shadow: 0.4px 0.4px 0.8px  0.8px gray; margin-left: 6px;border-radius: 4px;text-align: center;border-color: transparent;">
    <input @paste="validatePaste($event)" @keypress="validateNumber($event)"  ref="input2" class=" w-100"  v-model="otpDigits[2]"  type="number" maxlength="1" @input="focusNextInput(3)" style ="height: 50px; background-color: white;box-shadow: 0.4px 0.4px 0.8px  0.8px gray; margin-left: 6px;border-radius: 4px;text-align: center;border-color: transparent;">
    <input @paste="validatePaste($event)" @keypress="validateNumber($event)"  ref="input3" class=" w-100"  v-model="otpDigits[3]"  type="number" maxlength="1" @input="focusNextInput(4)" style="height: 50px; background-color: white;box-shadow: 0.4px 0.4px 0.8px  0.8px gray; margin-left: 6px;border-radius: 4px;text-align: center;border-color: transparent;">
    <input @paste="validatePaste($event)" @keypress="validateNumber($event)" ref="input4" class=" w-100"  v-model="otpDigits[4]"  type="number" maxlength="1" @input="focusNextInput(5)" style="height: 50px; background-color: white;box-shadow: 0.4px 0.4px 0.8px  0.8px gray; margin-left: 6px;border-radius: 4px;text-align: center;border-color: transparent;">
    <input @paste="validatePaste($event)" @keypress="validateNumber($event)"  ref="input5" class=" w-100"  v-model="otpDigits[5]"  type="number" maxlength="1" @input="focusNextInput(6)" style="height: 50px; background-color: white;box-shadow: 0.4px 0.4px 0.8px  0.8px gray; margin-left: 6px;border-radius: 4px;text-align: center;border-color: transparent;">
    </div>



    <button :disabled="loading" @click="verifyOtp" class="btn btn-sm " type="submit" style="background-color: #01C881;  padding: 5px 30px; border-radius: 15px; margin-left: 235px; margin-top: 70px;
                color: #FFFFFF;font-weight: bold;font-size: 12px;"><span v-if="loading">Loading...</span>
  <span style="font-family:jali greeek;" v-else>Verify</span>
</button>     <p v-if="error" style="color: red; margin-left: 235px; font-size: 10px; margin-top: 10px;">{{ error }}</p>

<p style="margin-left: 189px; font-size: 10px; margin-top: 10px;text-shadow: 0 0 2px rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5);">
  Didn't receive the code?
  <span :disabled="resendLoading || resendDisabled" @click="resendOtp" :style="{ cursor: resendDisabled ? 'not-allowed' : 'pointer', color: resendDisabled ? 'gray' : '#01C881' }">
  {{ resendDisabled ? `Resend OTP in ${countdown}s` : resendLoading ? 'Resending...' : 'Resend OTP' }}
</span>

</p>
<p v-if="verificationSuccess" style="color: green; margin-left: 235px; font-size: 10px; margin-top: 10px;">OTP verified successfully! Redirecting to sign-in page...</p>




    <p href="" style="margin-left: 189px; font-size: 10px; margin-top: 50px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5);">privacy policy &nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp;&nbsp; Terms &nbsp;&&nbsp; conditions </p>
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
      otpDigits: ['', '', '', '', '', ''],
      loading: false,
      error: null,
      resendDisabled: false,
      countdown: 60,
      resendSuccess: false,
      verificationSuccess: false,
    resendLoading: false,


    }
  },
  watch: {
    otpDigits: {
      handler() {
        this.error = null;
      },
      deep: true
    }
  },
  methods: {
    validatePaste(event) {
    const pastedData = event.clipboardData.getData('text');
    if (!/^\d$/.test(pastedData)) {
      event.preventDefault();
    }
  },
    validateNumber(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  },
    async verifyOtp() {
      this.loading = true;
      try {
        const otp = this.otpDigits.join('');
        if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
          this.error = 'Invalid OTP';
          return;
        }
        const response = await fetch('https://siwes-task-2.onrender.com/auth/signup/verifyotp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ otp })
        });
        if (response.ok) {
          this.verificationSuccess = true;
          setTimeout(() => {
            this.$router.push('/sign-in');
          }, 2000);
        } else {
          const errorData = await response.json();
          this.error = errorData.message || 'An error occurred';
        }
      } catch (e) {
        console.error(e);
        this.error = 'An error occurred';
      } finally {
        this.loading = false;
      }
    },
    focusNextInput(index) {
      if (index < this.otpDigits.length && this.otpDigits[index - 1].trim() !== '') {
        this.$nextTick(() => {
          this.$refs[`input${index}`].focus();
        });
      }
    },
async resendOtp() {
  if (this.resendLoading || this.resendDisabled) return;
  this.resendLoading = true;
  try {
    const response = await fetch('http://localhost:3000/auth/signup/resendotp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      console.log('OTP resent successfully');
      this.resendSuccess = true;
      setTimeout(() => {
        this.resendSuccess = false;
      }, 2000);
      this.resendDisabled = true;
      this.startCountdown();
    } else {
      const errorData = await response.json();
      this.error = errorData.message || 'An error occurred';
    }
  } catch (e) {
    console.error(e);
    this.error = 'An error occurred';
  } finally {
    this.resendLoading = false;
  }
},
    startCountdown() {
      const intervalId = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(intervalId);
          this.resendDisabled = false;
          this.countdown = 60;
        }
      }, 1000);
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

























































































