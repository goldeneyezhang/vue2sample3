<template>
<div class="section"> <slider :slides="page_data.top"></slider></div>

</template>
<style>
</style>
<script>
import Slider from './components/slider.vue'
export default{
  components: {Slider}
}
</script>