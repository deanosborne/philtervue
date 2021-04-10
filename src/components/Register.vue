
<template>
    <div>
        <h3>Register</h3>
        <div class="row" v-if="errorMessage">
            <div class="alert alert-danger">{{ errorMessage }}</div>
        </div>
        <div class="row" v-if="successMessage">
            <div class="alert alert-success">{{ successMessage }}</div>
        </div>
        <form @submit.prevent="registerUser">
            <div class="form-group">
                <label>Full Name</label>
                <input name="name" type="text" class="form-control" id="registerFullName" placeholder="Enter your full name" required v-model="apiRequest.name">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input name="email" type="email" class="form-control" id="registerEmail" placeholder="Enter your email" required v-model="apiRequest.email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input name="password" type="password" class="form-control" id="registerPassword" placeholder="Choose a password" required v-model="apiRequest.password">
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input name="password_confirmation" type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password" required v-model="apiRequest.password_confirmation">
            </div>
                <input class="btn btn-primary" name="submit"  type ="submit" value="Register" />
                <input type="hidden" name="_handler" value="register">
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      apiRequest: new this.$request({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }),
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    registerUser () {
      this.apiRequest.addStore(this.$store)
      this.apiRequest.post('registerUser/')
        .then((response) => {
          this.successMessage = response
          this.errorMessage = ''
          this.$router.push('/account')
        })
        .catch((errors) => {
          this.errorMessage = 'Please try again'
          this.successMessage = ''
        })
    }
  }
}
</script>
