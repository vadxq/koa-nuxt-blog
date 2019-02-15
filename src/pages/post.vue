<template>
  <v-container grid-list-sm>
    <v-timeline align-top
        dense>
      <v-timeline-item color="grey lighten-2" fill-dot right small>
        <v-card>
          <v-card-title class="grey lighten-2">
            <v-icon dark size="42" class="mr-3">mdi-magnify</v-icon>
            <h2 class="display-1 white--text font-weight-light">Title 1</h2>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex
                xs10
              >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.</v-flex>
              <v-flex xs2>
                <v-icon size="64">mdi-calendar-text</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="grey lighten-1" fill-dot right small>
        <v-card>
          <v-card-title class="grey lighten-1">
            <h2 class="display-1 mr-3 white--text font-weight-light">Title 2</h2>
            <v-icon dark size="42">mdi-home-outline</v-icon>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex
                xs8
              >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.</v-flex>
              <v-flex xs4>Lorem ipsum dolor sit amet, no nam oblique veritus.</v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="grey lighten-1" fill-dot right small>
        <v-card>
          <v-card-title class="grey lighten-1">
            <v-icon class="mr-3" dark size="42">mdi-email-outline</v-icon>
            <h2 class="display-1 white--text font-weight-light">Title 3</h2>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex
                v-for="n in 3"
                :key="n"
                xs4
              >Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.</v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="grey lighten-1" fill-dot right small>
        <v-card>
          <v-card-title class="grey lighten-1 ">
            <h2 class="display-1 mr-3 white--text font-weight-light">Title 4</h2>
            <v-icon dark size="42">mdi-account-multiple-outline</v-icon>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex xs2>
                <v-icon size="64">mdi-server-network</v-icon>
              </v-flex>
              <v-flex
                xs10
              >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.</v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>

    </v-timeline>
  </v-container>
</template>
