<template>
  <div>
    <div class=" w-100" style="height: 100vh; padding:70px 0px; background-color: #0C2754;">
    <div class="bg-danger d-flex w-75" style="height: 470px; border-radius: 5px;  margin-left: 150px;">
    <div class="" style="height: 470px; width: 60%; background-color: #fff;padding-top: 90px;"><h2 style="color: #01C881; text-align: center; padding-top: 20px; font-weight: 700; font-family:jali greeek;">New Password</h2>
    <div class="" style="height: 5px; width: 7%; background-color: #01C881; border-radius: 10px; margin-left: 245px; margin-top: -5px;"></div>

    <p style="text-align: center; font-size: 11px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5); margin-top: 19px; text-align: center;">Please create a new password that <br> you don't use on any other site.</p>
    <form @submit.prevent="resetPassword" class="form-group" style=" background-color: ellow; padding-left: 160px;height: 180px; margin-top: 25px;">

      <input  id="newPassword"   type="password" v-model="newPassword" placeholder="Create new password" class="form-control " style="width: 250px;height:28px; margin-top:25px;">  <div class="error" v-if="errors.newPassword">{{ errors.newPassword }}</div>

      <input v-model="confirmPassword" type="password" id="confirmPassword"   placeholder="Confirm your password" class="form-control " style="width: 250px;height:28px; margin-top:25px;">    <div class="error" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>






            <button :disabled="loading"  class="btn btn-sm" type="submit" style="background-color: #01C881;  padding: 5px 30px; border-radius: 5px;  margin-top: 20px;width: 250px;
                color: #FFFFFF;font-weight: bold;font-size: 12px;"><span v-if="loading">Loading...</span>
  <span style="font-family:jali greeek;" v-else>Reset password </span>
</button>
                <p v-if="error">{{ error }}</p>
    </form>
    <p href="" style="margin-left: 189px; font-size: 10px; margin-top: 15px;text-shadow: 0 0 2px  rgba(0, 0, 2px, 0.2); color: rgba(0, 0, 0, 0.5);">privacy policy &nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp;&nbsp; Terms &nbsp;&&nbsp; conditions </p>
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
      newPassword: '',
      confirmPassword: '',
      loading: false,
      error: null,
      errors: {},
      token: null
    }
  },
  created() {
    this.token = this.$route.query.token
    console.log('Token:', this.token)
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
    body: JSON.stringify({ newPassword: this.newPassword, confirmPassword: this.confirmPassword })
  });
  if (response.ok) {
  this.error = null;
  this.errors = {};
  alert('Password reset successfully!');
  this.$router.push('/sign-in');
}

} catch (error) {
  console.error(error);

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














