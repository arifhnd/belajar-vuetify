<template>
  <v-app id="inspire">
    <v-content>
      <loading :active.sync="this.$store.getters.loading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="this.$store.getters.loading"></loading>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form method="POST" @submit.prevent="login">
                  <v-text-field
                    label="Email"
                    name="email"
                    type="text"
                    v-model="input.email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="input.password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-on:click="login()" type="submit" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
   // Import component
  import Loading from 'vue-loading-overlay';
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css';
  export default {
    data() {
      return {
        input: {
          email: "",
          password: ""
        },
        color: "#00000"
      }
    },
    components: {
      Loading
    },
    methods: {
      login: function() {
        let email = this.input.email
        let password = this.input.password
        this.$store.dispatch('login', {email, password})
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
      }
    }
  }
</script>

<style>
  #inspire{
    background-image: url('../assets/background.jpg');
    background-size: 500px;
  }
</style>