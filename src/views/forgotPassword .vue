<template>
  <div style="height: 100vh; background-color: #0C2754; padding: 70px 0">
    <div class="container">
      <div class="row bg-danger rounded-3 overflow-hidden mx-auto" style="max-width: 1000px; height: 470px;">
        <!-- Left Section -->
        <div class="col-12 col-md-7 bg-white d-flex flex-column justify-content-center align-items-center px-4">
          <h2 class="text-center fw-bold" style="color: #01C881; font-family: jali greeek;">Forgot Password</h2>
          <div class="mb-3" style="height: 5px; width: 50px; background-color: #01C881; border-radius: 10px;"></div>

          <p class="text-center" style="font-size: 13px; color: rgba(0, 0, 0, 0.5); text-shadow: 0 0 2px rgba(0,0,0,0.2);">
            Enter your email address
          </p>

          <form @submit.prevent="forgotPassword" class="w-100 d-flex flex-column align-items-center mt-3">
            <div class="form-group mb-2 position-relative" style="width: 250px;">
              <label for="fname1" class="position-absolute" style="font-size: 10px; font-weight: 700; top: -10px; left: 10px; background: white; padding: 0 2px;">
                Email
              </label>
              <input
                v-model="email"
                type="email"
                id="fname1"
                placeholder="example@mail.com"
                class="form-control"
                style="height: 28px; font-size: 12px;"
              />
              <div class="text-danger small mt-1" v-if="errors.email">{{ errors.email }}</div>
            </div>

            <button
              :disabled="loading"
              type="submit"
              class="btn btn-sm mt-2"
              style="background-color: #01C881; color: #fff; font-weight: bold; font-size: 12px; width: 250px;"
            >
              <span v-if="loading">Loading...</span>
              <span v-else style="font-family: jali greeek;">Continue</span>
            </button>

            <p v-if="error" class="text-danger small mt-2">{{ error }}</p>
          </form>

          <p
            v-if="successMessage"
            class="text-success fw-bold text-center small mt-2"
          >
            {{ successMessage }}
          </p>

          <p class="text-center mt-3 small" style="color: rgba(0, 0, 0, 0.5);">
            privacy policy &nbsp; • &nbsp; Terms & Conditions
          </p>
        </div>

        <!-- Right Section -->
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center text-white" style="background-color: #01C881;">
          <h2 class="fw-bold text-center" style="font-family: Amsi Pro, sans-serif;">Hello, Friend!</h2>
          <div style="height: 3px; width: 50px; background-color: white; border-radius: 10px;"></div>
          <p class="text-center mt-3" style="font-size: 11px; font-weight: 700;">
            Fill up personal information and <br />start journey with us
          </p>
          <button
            @click="$router.push('/sign-in')"
            class="btn btn-outline-light mt-3 px-4 py-1 rounded-pill fw-bold"
            style="font-size: 11px; font-family: jali greeek;"
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
  data() {
    return {
      email: '',
      loading: false,
      error: null,
      errors: {},
      successMessage: null
    };
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
        } else {
          const errorData = await response.json();
          this.error = errorData.message || 'An error occurred';
          this.errors = errorData.errors || {};
        }
      } catch (error) {
        console.error(error);
        this.error = 'An error occurred: ' + error.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

* {
  font-family: "Space Grotesk", sans-serif;
  margin: 0;
  padding: 0;
}

::placeholder {
  font-size: 8px;
  color: #e4e4e4;
}
</style>
