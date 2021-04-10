<template>
<div class="row">
        <form @submit.prevent="OnUpdate">
            <div class="form-group">
                <label for="accountName">Full Name</label>
                <input name="name" type="text" class="form-control" id="accountName" placeholder="Enter your name" v-model="apiRequest.name" required>
            </div>
            <div class="form-group">
                <label for="accountEmail">Email</label>
                <input name="email" type="email" class="form-control" id="accountEmail" placeholder="Enter your email" v-model="apiRequest.email" required>
            </div>
            <div class="form-group">
                <label for="accountPassword">New Password</label>
                <input name="password" type="password" class="form-control" id="accountPassword" placeholder="Enter your password" v-model="apiRequest.password">
            </div>
            <div class="form-group">
                <label for="accountPasswordConfirm">Confirm New Password</label>
                <input name="password_confirmation" type="password" class="form-control" id="accountPasswordConfirm" placeholder="Enter your password" v-model="apiRequest.password_confirmation">
            </div>
            <button name="submit" type="submit" class="btn btn-primary">Save</button>
        </form>
<a href="javascript:;" onclick="$('#accountDeactivateForm').toggle()">Deactivate account</a>
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
    OnUpdate () {
      // Not implemented
      // this.apiRequest.addStore(this.$store)
      // this.apiRequest.post('onUpdate')
      //   .then((response) => {
      //     this.successMessage = response
      //     this.errorMessage = ''
      //   })
      //   .catch((errors) => {
      //     this.errorMessage = errors
      //     this.successMessage = ''
      //   })
    }
  }
}
</script>
