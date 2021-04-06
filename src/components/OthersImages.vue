<template>
  <div class="row" v-if="OthersImages">
      <div class="col" v-if="errors">
          <div class="alert alert-danger">{{ errors }}</div>
      </div>
      <div id="others-images" class="card-columns">
          <div class="card other" v-for="image in OthersImages" v-bind:key="image">
              <picture v-bind:id="'image' + image.id">
                  <img v-bind:src="image.image.path"  v-bind:alt="image.description" style="width:50%;"/>
              </picture>
              <h5>{{ image.name }}</h5>
              <p>{{ image.description }}</p>
          </div>
          <div class="clearfix"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'OthersImages',
  created () {
    this.fetchImages()
  },
  data () {
    return {
      apiRequest: new this.$request(),
      OthersImages: [],
      errors: ''
    }
  },
  methods: {
    fetchImages () {
      const endpoint = 'images'
      this.apiRequest.get(endpoint)
        .then((response) => {
          this.OthersImages = response
          this.errors = ''
        })
        .catch((errors) => {
          this.errors = errors
        })
    }
  }
}
</script>
