<template>
<div>
  <div class="section"> 
    <slider :slides="page_data.top"></slider>
  </div>
</div>
</template>
<style>
</style>
<script>
import Slider from './components/slider.vue'
import BookList from './components/BookList.vue'
export default{
  components: {Slider, BookList},
    announcement: '今日上架的图书全部8折',
    slides: [
    {id: 1, img_url: './fixtures/sliders/t1.svg'},
    {id: 2, img_url: './fixtures/sliders/t2.svg'}
    ],
    latestUpdated: [
      {
        "id": 1,
        "title": "揭开数据真相，从小白到数据分析达人",
        "authors": ["Edward Zaccaro", "Daniel Zaccaro"],
        "img_url": "1.svg"
      }
    ],
    recommended: [
       {
        "id": 1,
        "title": "揭开数据真相，从小白到数据分析达人",
        "authors": ["Edward Zaccaro", "Daniel Zaccaro"],
        "img_url": "1.svg"
      }
    ]
}
</script>