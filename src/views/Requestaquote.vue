
<template>
  <div class="">
    <div class="w-100 min-vh-100 py-4" style="background-color: #0c2754">
      <div class="container">
        <h2 class="text-white text-center fw-bold fs-4">Request a Quote</h2>
        <p class="text-white text-center small">
          Entrust with high professionalism, we are capable of offering pixel-perfect web &
          mobile<br />
          application development, third-party integrations and tailored solutions.
        </p>

        <form
          @submit.prevent="signUpUser"
          class="bg-light mx-auto mt-4 p-4 shadow rounded"
          style="max-width: 600px"
        >
          <div class="form-group mb-3">
            <label for="fname1">First Name</label>
            <input
              type="text"
              required
              id="fname1"
              v-model.trim="form.name"
              class="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div class="row mb-3">
            <div class="col-12 col-md-6 mb-3 mb-md-0">
              <label for="phone">Phone Number</label>
              <input
                type="text"
                required
                id="phone"
                v-model.trim="form.phoneNumber"
                @input="form.phoneNumber = form.phoneNumber.replace(/[^0-9]/g, '')"
                class="form-control"
                placeholder="e.g. 08012345678"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="email">Email</label>
              <input
                type="email"
                required
                id="email"
                v-model.trim="form.email"
                class="form-control"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-md-6 mb-3 mb-md-0">
              <label for="projectType">Project Type</label>
              <select id="projectType" required v-model="form.projectType" class="form-control">
                <option value="">Select a project type</option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="desktop">Desktop</option>
              </select>
            </div>
            <div class="col-12 col-md-6">
              <label for="budget">Estimated Budget ($)</label>
              <input
                type="number"
                required
                id="budget"
                v-model.number="form.estimatedBudget"
                min="1"
                class="form-control"
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-md-6 mb-3 mb-md-0">
              <label for="time">Maximum Time (weeks/months)</label>
              <input
                type="text"
                required
                id="time"
                v-model.trim="form.maximumTime"
                class="form-control"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="company">Company Name</label>
              <input
                type="text"
                id="company"
                required
                v-model.trim="form.companyName"
                class="form-control"
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-md-6 mb-3 mb-md-0">
              <label for="skills">Required Skills</label>
              <input
                type="text"
                required
                id="skills"
                v-model.trim="form.requiredSkills"
                class="form-control"
                placeholder="e.g. HTML, Vue, Node.js"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="country">Country</label>
              <select id="country" required v-model="form.country" class="form-control">
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

          <button
            type="submit"
            class="btn btn-success w-50"
            :disabled="loader"
            aria-label="Request a quote"
          >
            <span v-if="loader">
              <div class="loader d-inline-block me-2 "></div>
              Submitting...
            </span>
            <span v-else>Request a quote</span>
          </button>

          <p class="mt-2 text-danger">{{ errormsg }}</p>
          <p v-if="showSuccMsg" class="mt-2 text-success">{{ succmsg }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phoneNumber: '',
        email: '',
        projectType: '',
        estimatedBudget: '',
        maximumTime: '',
        companyName: '',
        requiredSkills: '',
        country: '',
      },
      errormsg: '',
      succmsg: '',
      showSuccMsg: false,
      loader: false,
    }
  },
  created() {
    const token = localStorage.getItem('token')
    if (token) this.token = token
  },
  methods: {
    async signUpUser() {
      // ... your validations remain unchanged

      const token = localStorage.getItem('token')
      if (!token || token.split('.').length !== 3) {
        this.errormsg = 'Invalid or missing token. Please login again.'
        return
      }

      try {
        this.loader = true

        const response = await fetch('https://siwes-task-2.onrender.com/requestaquote', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(this.form),
        })

        if (!response.ok) throw await response.json()

        this.succmsg = 'Quote request sent successfully!'
        this.errormsg = ''
        this.showSuccMsg = true

        // Reset form
        this.form = {
          name: '',
          phoneNumber: '',
          email: '',
          projectType: '',
          estimatedBudget: '',
          maximumTime: '',
          companyName: '',
          requiredSkills: '',
          country: '',
        }

        setTimeout(() => {
          this.succmsg = ''
          this.showSuccMsg = false
        }, 3000)
      } catch (error) {
        this.errormsg = error?.message || 'Submission failed. Try again.'
      } finally {
        this.loader = false
      }
    },
  },
}
</script>

<style scoped>
::placeholder {
  font-size: 10px;
}
.loader {
  width: 16px;
  height: 16px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
