<template>
  <b-container>
    <h1>{{ $t('listPost') }}</h1>
    <b-row>
      <Article v-for="(post, index) in this.$store.state.posts" :key="index" v-bind:post="post" v-bind:index="index" />
    </b-row>
  </b-container>
</template>

<script>
import {mapActions} from 'vuex';
import Article from "@/components/Article";

export default {
  name: "Post",
  components: {
    Article
  },
  methods: {
    ...mapActions(['getPost'])
  },
  created () {
    this.getPost()
  }
}
</script>
