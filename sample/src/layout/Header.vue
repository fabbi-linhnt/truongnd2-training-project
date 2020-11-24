<template>
  <header>
    <nav id="nav">
      <b-row>
        <b-col cols="10">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </b-col>

        <b-col cols="2">
          <b-form-select v-model="selected" @change="changeLanguage" size="sm"
                         class="mt-3">
            <b-form-select-option v-for="option in options" :value="option.value">{{ option.text }}</b-form-select-option>
          </b-form-select>
        </b-col>
      </b-row>
    </nav>
  </header>
</template>

<script>
import i18n from '../plugins/i18n.js'
export default {
  name: "Header",
  methods: {
    changeLanguage(){
      i18n.locale = this.selected
    }
  },
  data() {
    return {
      selected: i18n.locale,
      options: [
        {
          value: 'vi', text: 'Tiếng Việt',
        },
        {
          value: 'en', text: 'English'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 10px 0;

  ul {
    display: flex;

    li {
      display: block;
      padding: 10px;
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }

  }
}

</style>