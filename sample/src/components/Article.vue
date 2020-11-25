<template>
  <b-col cols="4" class="mb-md-4">
    <div class="post" :key="index">
      <div class="post__image">
        <img :src="post.urlToImage" :alt="post.title">
      </div>
      <div class="post__detail">
        <a :href="post.url">
          <h3>{{ post.title }}</h3>
        </a>
        <span>{{ post.description }}</span>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "Article",
  props: {
    post: Object,
    index: Number
  }
}
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  background-color: #fff;
  transition: .5s;
  height: 100%;
  user-select: none;

  &:hover {
    box-shadow: 0px 0px 35px -5px #7f8c8d;
    border-radius: 5px;
    overflow: hidden;
  }

  &__image {
    height: 180px;
    overflow: hidden;

    img {
      max-width: 100%;
      display: block;
    }
  }

  &__detail {
    padding: 20px;

    a {
      text-decoration: none;
      color: #333;

      &:hover {
        h3 {
          text-decoration: underline;
        }
      }
    }

    h3 {
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 10px;
    }

    span {
      opacity: .7;
      font-size: 15px;
    }
  }
}
</style>