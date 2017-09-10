<template>
    <div class="announcement">
        <label>快讯</label>
       <span>{{announcement}}</span>
    </div>
</template>
<script>
export default {
    data () {
        return {
            announcement: '今日上架的图书全部8折',
           slides: [
            {id: 1, img_url: './fixtures/sliders/t1.svg'},
            {id: 2, img_url: './fixtures/sliders/t2.svg'}
        ]
        }
    }
}
</script>