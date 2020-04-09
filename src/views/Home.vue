<template>
  <div class="home">
    <a href="#" v-if="!$store.getters.isLoggedIn" data-membership-id="5e8f4a0331de7500176306d6">Login / Sign up</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
}
</script>
