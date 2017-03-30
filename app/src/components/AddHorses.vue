<template>
  <div style="width:100%;margin:15px;">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Register Horses</h1>

        <md-button class="md-icon-button md-raised md-primary" @click.native="addHorse">
          <md-tooltip>Click to add horse</md-tooltip>
          <md-icon>add</md-icon>
        </md-button>
      </md-toolbar>

      <md-table md-sort="index">
        <md-table-header>
          <md-table-row>
            <md-table-head>Horse's Show Name</md-table-head>
            <md-table-head>Owner's Name</md-table-head>
            <md-table-head>Details</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(horse, index) in horses" :key="index" :md-item="horse">
            <md-table-cell>
              <md-input-container>
                <label>Show name</label>
                <md-input v-model="horse.name" required></md-input>
              </md-input-container>
            </md-table-cell>
            <md-table-cell>
              <md-input-container>
                <label>Owner</label>
                <md-input v-model="horse.owner" required></md-input>
              </md-input-container>
            </md-table-cell>
            <md-table-cell>
              <md-input-container>
                <label>Details</label>
                <md-textarea v-model="horse.info" required></md-textarea>
              </md-input-container>
            </md-table-cell>
            <md-table-cell>
              <md-button class="md-icon-button md-raised md-accent" @click.native="removeHorse(horse)">
                &times;
                <md-tooltip>Remove Horse</md-tooltip>
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
  export default {
    name: 'AddHorses',
    data () {
      return {
        horses: []
      }
    },
    methods: {
      removeHorse (index) {
        this.horses.splice(index, 1)
      },
      addHorse () {
        this.horses.push({ name: null, email: null, birthyear: null })
      }
    }
  }
</script>

