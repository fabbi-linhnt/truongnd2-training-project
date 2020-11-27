<template>
  <b-container>
    <div v-if="this.$store.state.auth === true">
      <h1>{{ $t('welcomeDash') }}</h1>
    </div>
    <div v-else>
      <Login/>
    </div>
  </b-container>
</template>

<script>
import Login from "@/components/Login";
import {mapActions} from 'vuex'

export default {
  name: "Dashboard",
  components: {
    Login,
  },
  methods: {
    ...mapActions(['checkAuth']),
  },
  created() {
    this.checkAuth()
  }
}
</script>
