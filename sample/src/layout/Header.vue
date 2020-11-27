<template>
  <header>
    <nav id="nav">
      <b-row>
        <b-col cols="8">
          <ul>
            <li>
              <router-link to="/">{{ $t('homePage') }}</router-link>
            </li>
            <li>
              <router-link to="/about">{{ $t('aboutPage') }}</router-link>
            </li>
            <li>
              <router-link to="/contact">{{ $t('contactPage') }}</router-link>
            </li>
            <li>
              <router-link to="/dash">{{ $t('Dashboard') }}</router-link>
            </li>
            <li>
              <router-link to="/posts">{{ $t('post') }}</router-link>
            </li>
          </ul>
        </b-col>

        <b-col cols="4">
          <b-row>
            <b-col cols="6">
              <div v-if="this.$store.state.auth">
                <b-button variant="danger" @click="logoutAdmin">Logout</b-button>
              </div>
            </b-col>
            <b-col cols="6">
              <b-form-select v-model="selected" @change="changeLanguage" size="sm"
                             class="mt-3">
                <b-form-select-option v-for="option in options" :value="option.value">{{ option.text }}</b-form-select-option>
              </b-form-select>
            </b-col>
          </b-row>
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
    },
    logoutAdmin(){
      this.$store.dispatch('logout')
    },
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
    padding-left: 0;
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