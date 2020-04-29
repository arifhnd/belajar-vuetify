<template>
	<div class="container">
	<p class="text-left font-weight-bold pengumuman">
	Pengumuman
	</p>
	<v-carousel 
     height="200"
     hide-delimiters
     cycle
     :show-arrows="false"
	>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <v-card
    class="mx-auto"
    max-width="100%"
    color="#2ecc71"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Pengumuman</div>
        <v-list-item-title class="headline font-weight-black">Upacara Bendera</v-list-item-title>
        <p class="text-left list-subtitle">
        Kepada seluruh siswa, besok akan diadakan upacara bendera dalam memperingati hari sumpah pemuda
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
      text-color="#212121"
      class="ma-2"
    >
      29 April 2019
    </v-chip>
      <v-chip
      color="white"
      text-color="#212121"
      class="ma-2"
    >
      07:00 WIB
    </v-chip>
    </v-card-actions>
  </v-card>
    </v-carousel-item>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <v-card
    class="mx-auto"
    max-width="100%"
    color="black"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Pengumuman</div>
        <v-list-item-title class="headline font-weight-black">Pengumpulan Tugas</v-list-item-title>
        <p class="text-left list-subtitle">
        Kepada seluruh siswa, besok hari terakhir pengumpulan tugas
        </p>
      </v-list-item-content>

      <v-list-item-avatar
        circle
        size="80"
        color="white"
      >
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-chip
      color="white"
      text-color="#212121"
      class="ma-2"
    >
      29 April 2019
    </v-chip>
      <v-chip
      color="white"
      text-color="#212121"
      class="ma-2"
    >
      07:00 WIB
    </v-chip>
    </v-card-actions>
  </v-card>
    </v-carousel-item>
  </v-carousel>
	</div>
</template>

<script>
	export default {
		name: 'Beranda'
	}
</script>

<style>
	.pengumuman{
		font-size: 30px;
		color: #332f32;
	}
</style>