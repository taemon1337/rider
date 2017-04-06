<template>
  <div style="width:100%;margin:15px;">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Register Horses</h1>

        <md-button class="md-icon-button md-raised md-primary" @click.native="openHorseForm" id="openForm">
          <md-tooltip>Click to add horse</md-tooltip>
          <md-icon>add</md-icon>
        </md-button>
      </md-toolbar>

      <md-dialog md-open-from="#openForm" md-close-to="#openForm" @close.native="formClosed" ref="horseFormDialog">
        <md-dialog-title>Add New Horse</md-dialog-title>

        <md-dialog-content style="width:400px;">
          <form ref="horseForm">
            <md-input-container>
              <label>Horse Name</label>
              <md-input v-model="horse.name" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Horse Birth Year</label>
              <md-input type="number" v-model="horse.birthyear" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Trainer or Coach's Name</label>
              <md-input v-model="horse.trainer" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Trainer or Coach's Email</label>
              <md-input v-model="horse.trainer_email" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Group name</label>
              <md-input v-model="horse.group" placeholder="Group, Team, or Barn name" required></md-input>
            </md-input-container>

            <md-button class="md-raised md-primary" @click.native="saveHorse"> Save </md-button>
            <md-button class="md-raised" @click.native="closeHorseForm"> Cancel </md-button>
          </form>
        </md-dialog-content>
      </md-dialog>

      <md-table md-sort="index">
        <md-table-header>
          <md-table-row>
            <md-table-head>Horse Name</md-table-head>
            <md-table-head>Trainer</md-table-head>
            <md-table-head>Team</md-table-head>
            <md-table-head>Age</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(horse, index) in horses" :key="index" :md-item="horse">
            <md-table-cell>
              {{ horse.name }}
            </md-table-cell>
            <md-table-cell>
              {{ horse.trainer }}
            </md-table-cell>
            <md-table-cell>
              {{ horse.group }}
            </md-table-cell>
            <md-table-cell>
              {{ age(horse) }}
            </md-table-cell>
            <md-table-cell>
              <span>
                <md-icon @click.native="editHorse(horse)">mode_edit</md-icon>
                <md-tooltip>Edit</md-tooltip>
              </span>

              <span>
                <md-icon @click.native="removeHorse(horse)">delete_forever</md-icon>
                <md-tooltip>Remove Horse</md-tooltip>
              </span>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AddHorses',
    data () {
      return {
        horse: {}
      }
    },
    computed: {
      ...mapGetters({
        horses: 'horses/get'
      })
    },
    methods: {
      age: function (horse) {
        return new Date().getFullYear() - horse.birthyear
      },
      removeHorse (horse) {
        this.$store.dispatch('horses/remove', horse)
      },
      editHorse (horse) {
        this.horse = horse
        this.openHorseForm()
      },
      saveHorse () {
        if (this.horse['.key']) {
          this.$store.dispatch('horses/update', this.horse)
        } else {
          this.$store.dispatch('horses/add', this.horse)
        }
        this.horse = { name: null }
        this.closeHorseForm()
      },
      openHorseForm () {
        this.$refs.horseFormDialog.open()
      },
      closeHorseForm () {
        this.$refs.horseFormDialog.close()
      }
    }
  }
</script>

