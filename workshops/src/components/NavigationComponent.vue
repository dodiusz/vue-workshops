<template>
  <div>
    <router-link :to="{ name: 'home' }">
      Home
    </router-link>
    <router-link :to="{ name: 'score' }">
      Score
    </router-link>
    <router-link :to="{ name: 'userSettings' }">
      Settings
    </router-link>
    <router-link :to="{ name: 'userVote' }">
      Vote
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationComponent'
}
</script>

<style scoped>

</style>
