<template>
  <div style="height: 100vh; background-color: #0C2754; padding: 70px 0">
    <div class="container">
      <div class="row mx-auto bg-danger rounded-3 overflow-hidden" style="max-width: 1000px; height: 470px;">
        <!-- Left Side: Form -->
        <div class="col-12 col-md-7 bg-white d-flex flex-column justify-content-center align-items-center px-4">
          <h2 class="text-center fw-bold" style="color: #01C881; font-family: jali greeek;">New Password</h2>
          <div class="mb-2" style="height: 5px; width: 50px; background-color: #01C881; border-radius: 10px;"></div>

          <p class="text-center mt-2" style="font-size: 11px; color: rgba(0, 0, 0, 0.5); text-shadow: 0 0 2px rgba(0,0,0,0.2);">
            Please create a new password that <br />you don't use on any other site.
          </p>

          <form @submit.prevent="resetPassword" class="w-100 d-flex flex-column align-items-center mt-3">
            <div class="form-group mb-2" style="width: 250px;">
              <input
                id="newPassword"
                v-model="newPassword"
                type="password"
                placeholder="Create new password"
                class="form-control"
                style="height: 28px; font-size: 12px;"
              />
              <div class="text-danger small mt-1" v-if="errors.newPassword">{{ errors.newPassword }}</div>
            </div>

            <div class="form-group mb-2" style="width: 250px;">
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                class="form-control"
                style="height: 28px; font-size: 12px;"
              />
              <div class="text-danger small mt-1" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>
            </div>

            <button
              :disabled="loading"
              type="submit"
              class="btn btn-sm mt-2"
              style="background-color: #01C881; color: #fff; font-weight: bold; font-size: 12px; width: 250px;"
            >
              <span v-if="loading">Loading...</span>
              <span v-else style="font-family: jali greeek;">Reset password</span>
            </button>

            <p v-if="error" class="text-danger small mt-2">{{ error }}</p>
          </form>

          <p class="text-center mt-3 small" style="color: rgba(0, 0, 0, 0.5);">
            privacy policy &nbsp; • &nbsp; Terms & Conditions
          </p>
        </div>

        <!-- Right Side: Welcome -->
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center text-white" style="background-color: #01C881;">
          <h2 class="fw-bold text-center" style="font-family: Amsi Pro, sans-serif;">Hello, Friend!</h2>
          <div style="height: 3px; width: 50px; background-color: white; border-radius: 10px;"></div>
          <p class="text-center mt-3" style="font-size: 11px; font-weight: 700;">
            Fill up personal information and <br />start journey with us
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
      newPassword: '',
      confirmPassword: '',
      loading: false,
      error: null,
      errors: {},
      token: null
    };
  },
  created() {
    this.token = this.$route.query.token;
    console.log('Token:', this.token);
  },
  methods: {
    async resetPassword() {
      if (!this.newPassword || !this.confirmPassword) {
        this.error = 'Please fill in all fields';
        return;
      }

      if (this.newPassword.length < 8) {
        this.error = 'Password must be at least 8 characters long';
        return;
      }

      if (this.newPassword !== this.confirmPassword) {
        this.error = 'Passwords do not match';
        return;
      }

      this.loading = true;

      try {
        const response = await fetch(`https://siwes-task-2.onrender.com/auth/reset-password/${this.token}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword
          })
        });

        if (response.ok) {
          this.error = null;
          this.errors = {};
          alert('Password reset successfully!');
          this.$router.push('/sign-in');
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
