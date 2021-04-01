
<template>
    <div>
        <h3>Register</h3>
        <div class="row" v-if="errorMessage">
            <div class="alert alert-danger">{{ errorMessage }}</div>
        </div>
        <div class="row" v-if="successMessage">
            <div class="alert alert-success">{{ successMessage }}</div>
        </div>
        <form @submit.prevent="OnLogin">
            <div class="form-group">
                <label for="registerFullName">Full Name</label>
                <input name="name" type="text" class="form-control" id="registerFullName" placeholder="Enter your full name">
            </div>
            <div class="form-group">
                <label for="registerEmail">Email</label>
                <input name="email" type="email" class="form-control" id="registerEmail" placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label for="registerPassword">Password</label>
                <input name="password" type="password" class="form-control" id="registerPassword" placeholder="Choose a password">
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input name="password_confirmation" type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password">
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      apiRequest: new this.$request({
        fullname: '',
        email: '',
        password: '',
        password_confirmation: ''
      }),
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    OnLogin () {
      this.apiRequest.addStore(this.$store)
      this.apiRequest.post('users/')
        .then((response) => {
          this.successMessage = response
          this.errorMessage = ''
        })
        .catch((errors) => {
          this.errorMessage = errors
          this.successMessage = ''
        })
    }
  }
}
</script>
