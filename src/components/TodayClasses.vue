<template>
	<v-container class="grey lighten-5">
	<p class="text-left font-weight-bold today-classes">
	Pelajaran Hari ini
	</p>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
      >
        <v-card
    transition="slide-x-reverse-transition"
    class="mx-auto"
    max-width="100%"
    color="#3565ff"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Mata Pelajaran</div>
        <v-list-item-title class="headline font-weight-black">Matematika</v-list-item-title>
        <p class="text-left list-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </v-list-item-content>

      <v-list-item-avatar
        circle
        size="80"
        color="white"
      >
      <img src="../assets/math-icon.svg" class="icon-course" style="width: 50%;">
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-chip
      color="white"
      class="ma-2"
    >
      27 April 2019
    </v-chip>
      <v-chip
      color="white"
      text-color="#212121"
      class="ma-2"
    >
      08:00 WIB
    </v-chip>
    </v-card-actions>
  </v-card>
  <br>

  <v-card
    class="mx-auto"
    max-width="100%"
    color="#f7b500"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Mata Pelajaran</div>
        <v-list-item-title class="headline font-weight-black">Kewarganegaraan</v-list-item-title>
        <p class="text-left list-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </v-list-item-content>

      <v-list-item-avatar
        circle
        size="80"
        color="white"
      >
      <img src="../assets/pancasila.png" class="icon-course" style="width: 55%;height:65%;">
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-chip
      color="white"
      class="ma-2"
    >
      27 April 2019
    </v-chip>
      <v-chip
      color="white"
      text-color="#212121"
      class="ma-2"
    >
      10:00 WIB
    </v-chip>
    </v-card-actions>
  </v-card>
  <br>
  <v-card
    class="mx-auto"
    max-width="100%"
    color="#2ecc71"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Mata Pelajaran</div>
        <v-list-item-title class="headline font-weight-black">Kimia I</v-list-item-title>
        <p class="text-left list-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </v-list-item-content>

      <v-list-item-avatar
        circle
        size="80"
        color="white"
      >
      <img src="../assets/kimia.svg" class="icon-course" style="width: 55%;height:65%;">
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-chip
      color="white"
      class="ma-2"
    >
      27 April 2019
    </v-chip>
      <v-chip
      color="white"
      text-color="#212121"
      class="ma-2"
    >
      12:00 WIB
    </v-chip>
    </v-card-actions>
  </v-card>
  <br>
  <br>
  <br>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
	.today-classes{
		font-size: 30px;
		color: #332f32;
	}
	.overline{
		color: white;
	}
	.headline{
		font-weight: bold;
		color: white;
	}
	.list-subtitle{
		color: white;
		height: 10px;
	}
	img.icon-course{
		height: 5px;
	}
</style>

<script>
	export default {
		name: 'TodayClasses'
	}
</script>