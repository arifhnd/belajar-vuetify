<template>
  <v-app style="background-image: ('/assets/background.jpg')">
    <Navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';

export default {
  name: 'App',
  components: {
    Navbar,
    BottomNav
  }
};
</script>