<template>
    <div class="swiper-container"
         ref="slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="slide in slides">
                <img :src="slide.img_url"/>
            </div>
        </div>
        <div class="swiper-pagination"
             ref="pagination"></div>
    </div>
</template>
<style>
    .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .swiper-wrapper {
        height: 200px;
    }

    .swiper-slide img {
        max-width: 100%;
    }

    .swiper-slide {
        text-align: center;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>
<script type="text/ecmascript-6">
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default{
        props: ['slides'],
        mounted () {
         var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 4000,
                onTouchEnd: function () {
                    swiper.startAutoplay()
                }
            })
        }
    }
</script>