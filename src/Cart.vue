<template>
    <div>
    	<div>
    		您的购物车空空如也
    	</div>
    </div>
</template>
<style>
	.empty {
		color: #ccc;
		text-align: center;
		margin: 50% auto;
		height: 100%;
		vertical-align: middle;
		display: block;
		background: transparent;
		font-size: 24px;
	}
</style>
<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          storeKey: 'VUE-CART',
          items: []
        }
      }
    }
</script>