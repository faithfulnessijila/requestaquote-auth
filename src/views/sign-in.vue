<template>
  <div class="container-fluid d-flex justify-content-center align-items-center signin-wrapper">
    <div class="signin-card row w-100 m-0">
      <!-- Left: Sign-in form -->
      <div class="col-md-6 p-4 bg-white signin-form">
        <h2 class="text-success text-center fw-bold">Sign in to Account</h2>
        <div class="underline mx-auto mb-3"></div>

        <!-- Social Icons -->
        <div class="d-flex justify-content-center gap-3 mb-3">
          <i class="fa-brands fa-facebook-f social-icon"></i>
          <i class="fa-brands fa-linkedin-in social-icon"></i>
          <i class="fa-brands fa-google-plus-g social-icon"></i>
        </div>

        <p class="text-center text-muted small">or use your email account</p>

        <form @submit.prevent="login" class="px-3">
          <div class="form-group mb-3 position-relative">
            <label class="form-label small-label">Email</label>
            <input v-model="email" type="email" class="form-control" placeholder="example@mail.com" />
            <div class="text-danger small" v-if="errors.email">{{ errors.email }}</div>
          </div>

          <div class="form-group mb-3">
            <input v-model="password" type="password" class="form-control" placeholder="Password" />
            <div class="text-danger small" v-if="errors.password">{{ errors.password }}</div>
          </div>

          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="rememberMe" />
            <label class="form-check-label small-label" for="rememberMe">
              Remember me
              <span class="ms-3">
                <a @click="$router.push('/forgotpassword')" class="text-primary small" role="button">Forgot password?</a>
              </span>
            </label>
          </div>

          <div class="text-center">
            <button :disabled="loading" class="btn btn-success px-4 rounded-pill">
              <span v-if="loading">Loading...</span>
              <span v-else>Sign in</span>
            </button>
            <p class="text-danger mt-2" v-if="error">{{ error }}</p>
          </div>
        </form>

        <p class="text-center mt-4 small text-muted">
          privacy policy &nbsp;&middot;&nbsp; Terms & conditions
        </p>
      </div>

      <!-- Right: Info Panel -->
      <div class="col-md-6 text-center text-white signin-info">
        <h2>Hello, Friend!</h2>
        <div class="underline bg-white mx-auto"></div>
        <p class="mt-3 small">
          Fill up personal information and <br />start journey with us
        </p>
        <router-link 
  to="/sign-up" 
  class="btn btn-outline-light px-4 rounded-pill mt-3 fw-bold small d-block mx-auto"
>
  Sign up
</router-link>

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
    };
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
        const data = await response.json();
        if (response.ok && data.token) {
          localStorage.setItem('token', data.token);
          this.$router.push('/');
        } else {
          this.errors = data.errors || {};
          this.error = data.message || 'Invalid credentials';
        }
      } catch (e) {
        console.error(e);
        this.error = 'An error occurred';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.signin-wrapper {
  min-height: 100vh;
  background-color: #0C2754;
  padding: 40px 15px;
}

.signin-card {
  background-color: transparent;
  max-width: 960px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.15);
}

.signin-form {
  min-height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.signin-info {
  background-color: #01C881;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;
  min-height: 470px;
}

.underline {
  height: 4px;
  width: 50px;
  background-color: #01C881;
  border-radius: 5px;
}

.social-icon {
  background-color: #e7e7e7;
  padding: 7px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}

.small-label {
  font-size: 12px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .signin-card {
    flex-direction: column;
  }

  .signin-info {
    order: -1;
    padding: 20px 10px;
  }

  .signin-form {
    padding: 20px 15px;
  }

  .underline {
    width: 40px;
    height: 3px;
  }

  .social-icon {
    font-size: 16px;
    width: 28px;
    height: 28px;
  }

  .btn {
    font-size: 12px;
  }
}
</style>
