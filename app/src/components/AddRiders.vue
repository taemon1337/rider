<template>
  <div style="width:100%;margin:15px;">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Register Riders</h1>

        <md-button class="md-icon-button md-raised md-primary" @click.native="addRider">
          <md-tooltip>Click to add rider</md-tooltip>
          <md-icon>add</md-icon>
        </md-button>
      </md-toolbar>

      <md-table md-sort="index">
        <md-table-header>
          <md-table-row>
            <md-table-head>Rider Name</md-table-head>
            <md-table-head>Contact Email</md-table-head>
            <md-table-head>Birth Year</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(rider, index) in riders" :key="index" :md-item="rider">
            <md-table-cell>
              <md-input-container>
                <label>Name</label>
                <md-input v-model="rider.name" required></md-input>
              </md-input-container>
            </md-table-cell>
            <md-table-cell>
              <md-input-container>
                <label>Email</label>
                <md-input v-model="rider.email" required></md-input>
              </md-input-container>
            </md-table-cell>
            <md-table-cell>
              <md-input-container>
                <label>Birth Year</label>
                <md-input type="number" v-model="rider.birthyear" required></md-input>
              </md-input-container>
            </md-table-cell>
            <md-table-cell>
              <md-button class="md-icon-button md-raised md-accent" @click.native="removeRider(rider)">
                &times;
                <md-tooltip>Remove Rider</md-tooltip>
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
    name: 'AddRiders',
    data () {
      return {
        riders: []
      }
    },
    methods: {
      removeRider (index) {
        this.riders.splice(index, 1)
      },
      addRider () {
        this.riders.push({ name: null, email: null, birthyear: null })
      }
    }
  }
</script>

