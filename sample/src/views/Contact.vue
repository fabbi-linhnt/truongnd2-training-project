<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <ValidationObserver>
        <ValidationProvider
            rules="required|email"
            name="Email"
            v-slot="{ valid, errors }"
        >
          <b-form-group inline id="input-group-1"
                        description="We'll never share your email with anyone else."
          >
            <label class="sr-only" for="inline-form-input-name">Name</label>
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                :state="errors[0] ? false: (valid ? true : null)"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
            rules="required"
            name="name"
            v-slot="{ valid, errors }"
        >
          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter name"
                :state="errors[0] ? false: (valid ? true : null)"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
          <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </ValidationObserver>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>k
    </b-form>
  </b-container>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate'

export default {
  name: "Contact",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    if (JSON.stringify(this.form) !== JSON.stringify(this.$store.state.formDefault)) {
      const answer = window.confirm('Do you really want to leave?')
      if (answer) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  }
}
</script>