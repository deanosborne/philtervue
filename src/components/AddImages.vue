<template>
 <div class="container">
  <div class="row">
    <form @submit.prevent="addImage"  enctype="multipart/form-data" v-show="token">
        <div class="form-group">
            <label>Name</label>
            <input type="text" name="title" class="form-control"
            v-model="apiRequest.name" maxlength="50" required>
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" name="description" class="form-control"
            v-model="apiRequest.description" maxlength="100" required>
        </div>
        <div class="form-group">
            <label>Tag - add a comma after each tag.</label>
            <input type="text" name="tag" class="form-control"
            v-model="apiRequest.tag" maxlength="100" required>
        </div>
        <div class="form-group">
            <label>Filter</label>
            <select v-model = "apiRequest.filter"
            name="filter" class="custom-select" required>
                <option value="_1977">1977</option>
                <option value="aden">Aden</option>
                <option value="brannan">Brannan</option>
                <option value="brooklyn">Brooklyn</option>
                <option value="clarendon">Clarendon</option>
                <option value="earlybird">Earlybird</option>
                <option value="gingham">Gingham</option>
                <option value="hudson">Hudson</option>
                <option value="inkwell">Inkwell</option>
                <option value="kelvin">Kelvin</option>
                <option value="lark">Lark</option>
                <option value="lofi">Lo-Fi</option>
                <option value="maven">Maven</option>
                <option value="mayfair">Mayfair</option>
                <option value="moon">Moon</option>
                <option value="nashville">Nashville</option>
                <option value="perpetua">Perpetua</option>
                <option value="reyes">Reyes</option>
                <option value="rise">Rise</option>
                <option value="slumber">Slumber</option>
                <option value="stinson">Stinson</option>
                <option value="toaster">Toaster</option>
                <option value="valencia">Valencia</option>
                <option value="walden">Walden</option>
                <option value="willow">Willow</option>
                <option value="xpro2">X-pro II</option>
            </select>
        </div>
        <div id="image-upload" class="form-group">
            <label>Image</label>
            <input type="file" @change="onFileSelected" ref="image"
            class="input-file" name="file" accept="image/*" required>
        </div>
        <input class="btn btn-primary" name="submit"  type ="submit" value="Submit">
         <input type="hidden" name="_handler" value="addImage">
    </form>
  </div>
</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { mapGetters } from 'vuex'
export default {
  name: 'AddImage',
  computed: {
    token () {
      return this.$store.getters.isLoggedIn
    }
  },
  data () {
    return {
      apiRequest: new this.$request({
        name: '',
        description: '',
        tag: '',
        filter: '',
        file: ''
      }),
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    addImage () {
      this.apiRequest.addStore(this.$store)
      this.apiRequest.postImage('addImage')
        .then((response) => {
          this.successMessage = response
          this.errorMessage = ''
        })
        .catch((errors) => {
          this.errorMessage = errors
          this.successMessage = ''
        })
    },
    onFileSelected (event) {
      /* eslint-disable no-unused-vars */
      const image = event.target.files[0]
      this.apiRequest.file = this.$refs.image.files[0]
    }
  }
}
</script>
