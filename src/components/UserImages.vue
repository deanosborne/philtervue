 <template>
 <div class="container">
<div class="row">
    <h2>Your Images</h2>
    <router-link tag="p" to="/image/add">
    <a class="btn btn-primary text-center float-right">Upload an Image Now</a>
    </router-link>
</div>
<div v-for="image in userImages" :key="image.id" class="card other">
        <picture v-bind:id="'image' + image.id">
          <img v-bind:src = "image.image.path" v-bind:alt="image.description" style="width:25%;">
        </picture>
        <h5>{{ image.name }}</h5>
        <p>{{ image.description }}</p>
        <p><button class="btn btn-primary text-center" v-on:click="deleteImage(image)">
          Delete this image</button></p>
      </div>
      <div class="clearfix"></div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'userImages',
  computed: {
    token () {
      return this.$store.getters.getToken
    }
  },
  created () {
    // eslint-disable-next-line no-use-before-define
    const token = token
    axios
      .get('http://test.me/api/v1/images/user',
        { headers: { Authorization: `Bearer ${this.token}` } })
      .then((response) => {
        this.userImages = response.data
        this.errors = ''
      })
      .catch((errors) => {
        this.errors = errors
      })
  },
  data () {
    return {
      apiRequest: new this.$request(),
      userImages: [],
      errors: ''
    }
  },
  methods: {
    deleteImage (image) {
      axios
        .delete('http://test.me/api/v1/users/delete/' + image.id,
          { headers: { Authorization: `Bearer ${this.token}` } })
        .then((response) => {
          this.userImages.splice(this.userImages.indexOf(image), 1)
          this.successMessage = response.data
          this.errors = ''
        })
        .catch((errors) => {
          this.errors = errors
          this.successMessage = ''
        })
    }
  }
}
</script>
