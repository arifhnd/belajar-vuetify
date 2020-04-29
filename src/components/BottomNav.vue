<template>
  <v-bottom-navigation
    fixed
    :value=true
    grow
    color="teal"
    v-if="this.$store.getters.isLoggedIn"
  >
    <v-btn to="/profil">
      <span>Profil</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn to="/pelajaran">
      <span>Pelajaran</span>
      <v-icon>mdi-book-open-page-variant</v-icon>
    </v-btn>

    <v-btn to="/">
      <span>Beranda</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Tugas</span>
      <v-icon>mdi-calendar-check</v-icon>
    </v-btn>

    <v-btn>
      <span>Absen</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: 'BottomNav'
  }
</script>