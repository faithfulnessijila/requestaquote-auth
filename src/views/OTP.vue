<template>
  <div class="w-100 min-vh-100 d-flex align-items-center justify-content-center" style="background-color: #0C2754;">
    <div class="container px-3 px-md-5">
      <div class="row shadow rounded overflow-hidden bg-white">

        <!-- OTP Form Section -->
        <div class="col-lg-7 col-12 p-4 text-center">
          <h2 class="text-success fw-bold" style="font-family: 'jali greeek';">OTP Verification</h2>
          <div class="mx-auto" style="height: 5px; width: 50px; background-color: #01C881; border-radius: 10px;"></div>

          <p class="text-muted mt-3" style="font-size: 12px;">Your code was sent to you via email</p>

          <!-- OTP Inputs -->
          <div class="d-flex flex-wrap justify-content-center mt-3 gap-2">
            <input v-for="(digit, index) in otpDigits" :key="index"
              :ref="`input${index}`"
              v-model="otpDigits[index]"
              inputmode="numeric"
              maxlength="1"
              @input="focusNextInput(index + 1)"
              @keydown="handleBackspace($event, index)"
              @keypress="validateNumber($event)"
              @paste="validatePaste($event)"
              class="form-control text-center"
              style="width: 45px; height: 50px; box-shadow: 0 0 4px gray; border-radius: 4px;" />
          </div>

          <!-- Submit -->
          <button :disabled="loading" @click="verifyOtp"
            class="btn mt-4 px-4 py-2"
            style="background-color: #01C881; border-radius: 20px; font-size: 12px; color: #fff; font-weight: bold;">
            <span v-if="loading"><i class="fa fa-spinner fa-spin"></i> Verifying...</span>
            <span v-else style="font-family: 'jali greeek';">Verify</span>
          </button>

          <!-- Errors/Status -->
          <p v-if="error" class="text-danger mt-2" style="font-size: 10px;">{{ error }}</p>
          <p v-if="verificationSuccess" class="text-success mt-2" style="font-size: 10px;">
            OTP verified successfully! Redirecting...
          </p>

          <!-- Resend OTP -->
          <p class="text-muted mt-3" style="font-size: 10px;">
            Didn't receive the code?
            <span @click="resendOtp"
              :style="{ cursor: resendDisabled ? 'not-allowed' : 'pointer', color: resendDisabled ? 'gray' : '#01C881' }">
              {{ resendDisabled ? `Resend OTP in ${countdown}s` : resendLoading ? 'Resending...' : 'Resend OTP' }}
            </span>
          </p>

          <p class="text-muted mt-5 mb-2" style="font-size: 10px;">Privacy Policy &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Terms & Conditions</p>
        </div>

        <!-- Right Section (Hidden on Mobile) -->
        <div class="col-lg-5 d-none d-lg-flex align-items-center justify-content-center"
          style="background-color: #01C881;">
          <div class="text-white text-center px-3">
            <h2 class="fw-bold" style="font-family: 'Amsi Pro', sans-serif;">Hello, Friend!</h2>
            <div class="mx-auto my-2" style="height: 3px; width: 50px; background-color: white; border-radius: 10px;"></div>
            <p style="font-size: 11px; font-weight: 700;">Fill up personal information and<br />start your journey with us.</p>
          </div>
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
      email: '',  // Add email here
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
  created() {
    // Fetch email from localStorage
    this.email = localStorage.getItem('email') || localStorage.getItem('emailForVerification') || '';
    if (!this.email) {
      this.error = "Email not found. Please sign up again.";
    }
  },

  methods: {
  validatePaste(event) {
    const pastedData = event.clipboardData.getData('text');
    if (!/^\d+$/.test(pastedData)) {
      event.preventDefault();
    }
  },

  validateNumber(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  },

  handleBackspace(event, index) {
    // Move to previous input if current is empty and backspace is pressed
    if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
      this.$refs[`input${index - 1}`].focus();
    }
  },

  async verifyOtp() {
    this.loading = true;
    this.error = null;
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
        body: JSON.stringify({ email: this.email, otp })
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
      const response = await fetch('https://siwes-task-2.onrender.com/auth/signup/resendotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: this.email })
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

























































































