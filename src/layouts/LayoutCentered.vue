<template>
  <div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>
<script>
export default {
  name: 'LayoutCentered',
};
</script>
