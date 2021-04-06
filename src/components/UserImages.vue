 <template>
 <div class="container">
<div class="row">
    <h2>Your Images</h2>
    <router-link tag="p" to="/image/add">
    <a class="btn btn-primary text-center float-right">Upload an Image Now</a>
    </router-link>
</div>
<div v-for="image in userImages" :key="image.id" class="card other">
        <picture v-bind:id="'image' + image.id" style='width:10%;height:10%;'>
          <img v-bind:src = "image.image.path" v-bind:alt="image.description">
        </picture>
        <h5>{{ image.name }}</h5>
        <p>{{ image.description }}</p>
        <button class="btn btn-primary btn-sm" v-on:click="deleteImage(image)">
          Delete this image</button>
      </div>
      <div class="clearfix"></div>
    </div>
</template>
<script>
export default {
  name: 'userImages',
  created () {
    this.fetchImages()
  },
  data () {
    return {
      apiRequest: new this.$request(),
      userImages: [],
      errors: ''
    }
  },
  methods: {
    fetchImages () {
      const endpoint = 'images'
      this.apiRequest.get(endpoint)
        .then((response) => {
          this.userImages = response
          this.errors = ''
        })
        .catch((errors) => {
          this.errors = errors
        })
    }
  }
}
</script>
