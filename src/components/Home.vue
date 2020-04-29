<template>
  <v-app>
    <Navbar/>
    <v-content>
      <TodayClasses/>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import TodayClasses from './components/TodayClasses';
import BottomNav from './components/BottomNav';

export default {
  name: 'Home',

  components: {
    TodayClasses,
    Navbar,
    BottomNav,
  },
};
</script>
