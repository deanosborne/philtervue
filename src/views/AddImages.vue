<template>
<div>
  <div id="main">
    <div class="container">
      <div class="row">
          <h2>Add An Image</h2>
      </div>
    </div>
    <AddImages />
</div>

</div>

</template>

<script>
import AddImages from '@/components/AddImages.vue'
export default {
  name: 'add-image',
  components: {
    AddImages
  }
}
</script>
