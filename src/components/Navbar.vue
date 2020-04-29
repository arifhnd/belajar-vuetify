<template>
  <v-app-bar
      app
      color="primary"
      dark
      v-if="this.$store.getters.isLoggedIn"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/school.svg"
          transition="scale-transition"
          width="40"
        />
        <span class="nav-text">DigiSchool</span>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon v-on:click="logout()" v-if="this.$store.getters.isLoggedIn">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<style>
  .nav-text{
    margin-top: 3px;
    font-weight: bold;
    font-size: 25px;
  }
</style>

<script>
  export default {
    name: 'Navbar',
    methods: {
      logout: function() {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    }
  }
</script>