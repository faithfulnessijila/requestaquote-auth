<template>
  <div class="w-100" style="min-height: 100vh; padding: 25px 0; background-color: #0C2754;">
    <div class="container">
      <div class="d-flex flex-column flex-md-row rounded mx-auto shadow-lg overflow-hidden" style="max-width: 900px; background-color: white;">

        <!-- Left: Sign-Up Form -->
        <form @submit.prevent="signUpUser" class="p-4 col-md-7" style="background-color: #fff;">
          <h2 class="fw-bold mb-2" style="color: #01C881; font-family: 'SUSHI Stroke', sans-serif;">Sign Up</h2>
          <p class="text-success">{{ succmsg }}</p>

          <!-- Name Fields -->
          <div class="row">
            <div class="col-6">
              <label class="form-label small fw-bold">First Name</label>
              <input type="text" v-model="form.firstName" required class="form-control form-control-sm" />
            </div>
            <div class="col-6">
              <label class="form-label small fw-bold">Last Name</label>
              <input type="text" v-model="form.lastName" required class="form-control form-control-sm" />
            </div>
          </div>

          <!-- Email -->
          <div class="mt-2">
            <label class="form-label small fw-bold">Email</label>
            <input type="email" v-model="form.email" required class="form-control form-control-sm" />
          </div>

          <!-- Password -->
          <div class="mt-2">
            <label class="form-label small fw-bold">Password</label>
            <input type="password" v-model="form.password" required class="form-control form-control-sm" />
          </div>

          <!-- Confirm Password -->
          <div class="mt-2">
            <label class="form-label small fw-bold">Re-enter password</label>
            <input type="password" v-model="confirmPassword" required class="form-control form-control-sm" />
          </div>

          <p class="text-danger small">{{ errormsg }}</p>

          <!-- Terms Checkbox -->
          <div class="form-check my-2">
            <input type="checkbox" v-model="terms" class="form-check-input" id="termsCheck" />
            <label for="termsCheck" class="form-check-label small">
              I’ve read and agree with terms of service and privacy policy
            </label>
          </div>

          <!-- Submit Button -->
          <button :disabled="loader" type="submit" class="btn btn-success btn-sm w-100 mt-2">
            <span v-if="loader" class="spinner-border spinner-border-sm me-2"></span>
            <span v-else>Sign up</span>
          </button>

          <!-- OR -->
          <p class="text-center fw-bold small mt-3 mb-2">OR</p>

          <!-- Social Buttons -->
          <div class="d-flex gap-2 flex-column flex-sm-row">
            <div class="btn btn-outline-secondary btn-sm w-100 d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/></svg>Sign up with Google
            </div>
            <div class="btn btn-sm w-100 d-flex align-items-center justify-content-center" style="background-color: purple; color: white;">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
	<g fill="none">
		<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="M13.5 21.888C18.311 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.013 3.689 9.165 8.5 9.888V15H9a1.5 1.5 0 0 1 0-3h1.5v-2A3.5 3.5 0 0 1 14 6.5h.5a1.5 1.5 0 0 1 0 3H14a.5.5 0 0 0-.5.5v2H15a1.5 1.5 0 0 1 0 3h-1.5z" />
	</g>
</svg>Sign up with Facebook
            </div>
          </div>

          <!-- Sign In Link -->
          <p class="text-center small mt-3">
            Already have an account?
            <a @click="$router.push('/sign-in')" style="cursor: pointer; color: gray; font-family: 'SUSHI Stroke';">Sign in</a>
          </p>
        </form>

        <!-- Right: Welcome Section -->
        <div class="d-none d-md-flex col-md-5 flex-column justify-content-center align-items-center text-white text-center" style="background-color: #01C881; padding: 2rem;">
          <h2 class="fw-bold" style="font-family: 'Amsi Pro', sans-serif;">Hello, Friend!</h2>
          <div class="my-2" style="height: 3px; width: 30%; background-color: white; border-radius: 10px;"></div>
          <p class="small fw-bold">
            Fill up personal information <br /> and start journey with us
          </p>
          <button @click="$router.push('/sign-in')" class="btn btn-outline-light btn-sm mt-2 px-4 py-1" style="border-radius: 15px; font-family: 'Jali Greek'; font-size: 11px;">
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
      succmsg: '',
      errormsg: '',
    };
  },
  methods: {
    async signUpUser() {
      this.succmsg = '';
      this.errormsg = '';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email.trim())) {
        this.errormsg = "Invalid email address";
        return;
      }
      if (this.form.password !== this.confirmPassword) {
        this.errormsg = "Passwords do not match";
        return;
      }
      if (!this.terms) {
        this.errormsg = "Please agree to the terms and conditions";
        return;
      }

      this.loader = true;
      try {
        const response = await fetch('https://siwes-task-2.onrender.com/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form),
        });

        const result = await response.json();
        if (response.ok) {
          this.succmsg = "Sign up was successful! Redirecting...";
          localStorage.setItem('emailForVerification', this.form.email);
          this.$router.push('/otp');
        } else {
          this.errormsg = result.message || "Error signing up";
        }
      } catch (error) {
        console.error('Error:', error);
        this.errormsg = "Error signing up";
      } finally {
        this.loader = false;
      }
    }
  }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
* {
  font-family: 'Space Grotesk', sans-serif;
}
::placeholder {
  font-size: 10px;
  color: #ccc;
}
</style>
