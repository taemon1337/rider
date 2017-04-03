<template>
  <div style="width:100%;margin:15px;">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Register Riders</h1>

        <md-button class="md-icon-button md-raised md-primary" @click.native="openRiderForm" id="openForm">
          <md-tooltip>Click to add rider</md-tooltip>
          <md-icon>add</md-icon>
        </md-button>
      </md-toolbar>

      <md-dialog md-open-from="#openForm" md-close-to="#openForm" @close.native="formClosed" ref="riderFormDialog">
        <md-dialog-title>Add New Rider</md-dialog-title>

        <md-dialog-content style="width:400px;">
          <form ref="riderForm">
            <md-input-container>
              <label>Rider Name</label>
              <md-input v-model="rider.name" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Rider Email</label>
              <md-input v-model="rider.email" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Birth Year</label>
              <md-input type="number" v-model="rider.birthyear" required></md-input>
            </md-input-container>

            <md-button class="md-raised md-primary" @click.native="saveRider"> Save </md-button>
            <md-button class="md-raised" @click.native="closeRiderForm"> Cancel </md-button>
          </form>
        </md-dialog-content>
      </md-dialog>

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
  import { mapGetters } from 'vuex'

  export default {
    name: 'AddRiders',
    data () {
      return {
        rider: {}
      }
    },
    computed: {
      ...mapGetters({
        riders: 'riders/get'
      })
    },
    methods: {
      removeRider (rider) {
        this.$store.dispatch('riders/remove', rider)
      },
      saveRider () {
        if (this.rider.id) {

        } else {
          this.$store.dispatch('riders/add', this.rider)
          this.rider = { name: null }
          this.closeRiderForm()
        }
      },
      openRiderForm () {
        this.$refs.riderFormDialog.open()
      },
      closeRiderForm () {
        this.$refs.riderFormDialog.close()
      }
    }
  }
</script>

