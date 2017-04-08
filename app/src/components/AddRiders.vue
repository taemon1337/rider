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
              <label>Rider Birth Year</label>
              <md-input type="number" v-model="rider.birthyear" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Trainer or Coach's Name</label>
              <md-input v-model="rider.trainer" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Trainer or Coach's Email</label>
              <md-input v-model="rider.trainer_email" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Group name</label>
              <md-input v-model="rider.group" placeholder="Group, Team, or Barn name" required></md-input>
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
            <md-table-head>Trainer</md-table-head>
            <md-table-head>Team</md-table-head>
            <md-table-head>Age</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(rider, index) in riders" :key="index" :md-item="rider">
            <md-table-cell>
              {{ rider.name }}
            </md-table-cell>
            <md-table-cell>
              {{ rider.trainer }}
            </md-table-cell>
            <md-table-cell>
              {{ rider.group }}
            </md-table-cell>
            <md-table-cell>
              {{ age(rider) }}
            </md-table-cell>
            <md-table-cell>
              <span>
                <md-icon @click.native="editRider(rider)">mode_edit</md-icon>
                <md-tooltip>Edit</md-tooltip>
              </span>

              <span>
                <md-icon @click.native="removeRider(rider)">delete_forever</md-icon>
                <md-tooltip>Remove Rider</md-tooltip>
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
      age: function (rider) {
        return new Date().getFullYear() - rider.birthyear
      },
      removeRider (rider) {
        this.$store.dispatch('riders/remove', rider)
      },
      editRider (rider) {
        this.rider = rider
        this.openRiderForm()
      },
      saveRider () {
        if (this.rider['.key']) {
          this.$store.dispatch('riders/update', this.rider)
        } else {
          this.$store.dispatch('riders/add', this.rider)
        }
        this.rider = { name: null }
        this.closeRiderForm()
      },
      openRiderForm () {
        this.$refs.riderFormDialog.open()
      },
      closeRiderForm () {
        this.$refs.riderFormDialog.close()
      }
    },
    created () {
      this.$store.dispatch('riders/watch')
    }
  }
</script>

