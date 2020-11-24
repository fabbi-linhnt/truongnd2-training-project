<template>
  <div class="hello">
    <h1>{{ $t('welcomeMsg') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      languageArray: ['en', 'vi']
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
