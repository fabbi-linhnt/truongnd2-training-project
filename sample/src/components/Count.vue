<template>
  <div>
    <p>{{ count }}</p>
    <b-button variant="success" v-on:click="Counted">Button</b-button>
  </div>
</template>

<script>
export default {
name: "Count",
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    Counted:  function(){
      this.count += 1
    }
  }
}
</script>

<style scoped>

</style>