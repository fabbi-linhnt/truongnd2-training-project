<template>
  <b-container>
    <b-form @submit="onSubmit">
      <ValidationProvider
          rules="required|email"
          name="Email"
          v-slot="{ valid, errors }"
      >
        <b-form-group
            id="input-group-1"
            label="Email address"
            label-for="input-1"
        >
          <b-form-input
              v-model="account.user"
              placeholder="Enter your email address"
              type="email"
              :state="errors[0] ? false: (valid ? true : null)"
          ></b-form-input>
          <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider
          rules="required"
          name="Password"
          v-slot="{ valid, errors }"
      >
        <b-form-group
            id="input-group-2"
            label="Password"
            label-for="input-2"
        >
          <b-form-input
              id="input-2"
              v-model="account.pass"
              type="password"
              placeholder="Input your password"
              :state="errors[0] ? false: (valid ? true: null)"
          ></b-form-input>
          <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </b-container>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate'

export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      account: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$store.dispatch('login', this.account)
      if(!this.$store.getters.getAuth){
        this.$bvToast.toast('Email or password is invalid', {
          title: 'Error',
          autoHideDelay: 5000,
          appendToast: true,
          variant: 'danger'
        })
      }else{
        localStorage.setItem('account', JSON.stringify(this.account))
      }
    },
  },
}
</script>
