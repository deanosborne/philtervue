<template>
  <div id="main">
        <div class="row" v-if="errorMessage">
        <div class="alert alert-danger">{{ errorMessage }}</div>
        </div>
        <div class="row" v-if="successMessage">
        <div class="alert alert-success">{{ successMessage }}</div>
        </div>
      <UserImages />
      <div id="others-images" class="container">
        <div class="row">
            <h2>Other Images</h2>
        </div>
      <OthersImages />
      </div>
  </div>
</template>

<script>
import OthersImages from '@/components/OthersImages.vue'
import UserImages from '@/components/UserImages.vue'
export default {
  name: 'Images',
  components: {
    OthersImages,
    UserImages
  }
}
</script>
