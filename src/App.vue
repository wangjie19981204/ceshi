<template>
  <div>
    <!-- <Login/> -->
    <Dashboard/>
    <router-view/>
  </div>
</template>

<script>
// import Login from '@/views/login.vue'
import Dashboard from './views/dashboard/index.vue'
export default {
  components:{
    // Login,
    Dashboard
  },
  data () {
    return {

    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>

</style>
