<template>
<div>
  <div class="section"> 
    <slider :slides="slides"></slider>
     <div class="announcement">
        <label>快讯</label>
        <span>{{announcement}}</span>
    </div>
    <div class="section">
   <book-list :books="latestUpdated" heading="最新更新"></book-list>
    </div>
    <div class="section">
    <book-list :books="recommended" heading="编辑推荐"></book-list>
    </div>
  </div>
</div>
</template>
<style>
</style>
<script>
import Slider from './components/Slider.vue'
import BookList from './components/BookList.vue'
import t1 from '../fixtures/sliders/t1.svg'
import t2 from '../fixtures/sliders/t2.svg'
import datou from '../fixtures/sliders/datou.jpg'
import c1 from '../fixtures/covers/1.svg'
import c2 from '../fixtures/covers/2.svg'
export default{
  components: {Slider, BookList},
  data () {
    return {
    announcement: '今日上架的图书全部8折',
    slides: [
    {id: 1, img_url: t1},
    {id: 2, img_url: t2},
    {id: 3, img_url: datou}
    ],
    latestUpdated: [
      {
        "id": 1,
        "title": "揭开数据真相，从小白到数据分析达人",
        "authors": ["Edward Zaccaro", "Daniel Zaccaro"],
        "img_url": c1
      }
    ],
    recommended: [
       {
        "id": 1,
        "title": "揭开数据真相，从小白到数据分析达人",
        "authors": ["Edward Zaccaro", "Daniel Zaccaro"],
        "img_url": c2
      }
    ]
    }
  }
}
</script>