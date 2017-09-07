<template>
  <div class="app">
    <div class="tabs">
      <ul>
        <li>
          <router-link :to="{name:'Home'}" tag="li">
            <div><img src="../assets/images/home.svg"></div>
            <div>首页</div>
          </router-link>
        </li>
         <li>
          <router-link :to="{name:'Categories'}" tag="li">
            <div><img src="../assets/images/category.svg"></div>
            <div>分类</div>
          </router-link>
        </li>
         <li>
          <router-link :to="{name:'Cart'}" tag="li">
            <div><img src="../assets/images/cart.svg"></div>
            <div>购物车</div>
          </router-link>
        </li>
           <li>
          <router-link :to="{name:'Me'}" tag="li">
            <div><img src="../assets/images/me.svg"></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
