<template>
  <section>
    <v-dialog v-if="$store.isModel" v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
            
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="$store.commit('setModel', false)">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="$store.commit('setModel', false)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    }
  },
  computed: {
    dialog() {
      return 
    }
  },
  // watch: {
  //   'this.$store.isModel' () {
  //     dialog = this.$store.isModel
  //   }
  // }
}
</script>