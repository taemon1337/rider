<template>
  <div style="width:100%;margin:15px;">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Your Entries in {{ event.title || 'this event' }}</h1>

        <md-button class="md-icon-button md-raised md-primary" @click.native="addEntry">
          <md-tooltip>Click to add entry</md-tooltip>
          <md-icon>add</md-icon>
        </md-button>
      </md-toolbar>

      <md-table md-sort="index">
        <md-table-header>
          <md-table-row>
            <md-table-head>Registered</md-table-head>
            <md-table-head>Rider</md-table-head>
            <md-table-head>Horse</md-table-head>
            <md-table-head>Class</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(entry, rowIndex) in allEntries" :key="rowIndex" :md-item="entry">
            <md-table-cell>
              <md-icon :style="{ color: entry['.key'] ? 'green' : 'gray' }">{{ entry['.key'] ? 'check_circle' : 'more_horiz' }}</md-icon>
            </md-table-cell>
            <md-table-cell>
              <md-select placeholder="Select rider" name="rider" id="type" v-model="entry.rider">
                <md-option v-for="rider in riders" key=".key" :value="rider['.key']">{{ rider.name }}</md-option>
              </md-select>
            </md-table-cell>
            <md-table-cell>
              <md-select placeholder="Select horse" name="horse" id="type" v-model="entry.horse">
                <md-option v-for="horse in horses" key=".key" :value="horse['.key']">{{ horse.name }}</md-option>
              </md-select>
            </md-table-cell>
            <md-table-cell>
              <md-select
                placeholder="Select class"
                :name="'class'"
                :id="'type'"
                v-model="entry.class">
                <md-option v-for="opt in options" key="value" :value="opt.value">{{ opt.name }}</md-option>
              </md-select>
            </md-table-cell>
            <md-table-cell>
              <md-button class="md-icon-button md-raised md-accent" @click.native="removeEntry(rowIndex)">
                &times;
                <md-tooltip>Remove Entry</md-tooltip>
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>

      <md-toolbar>
        <md-button :disabled="!newEntries.length" class="md-raised md-primary" @click.native="submit">
          Submit Entries
          <md-tooltip>You are not registered until you submit and confirm entries</md-tooltip>
        </md-button>
      </md-toolbar>
    </md-table-card>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import { CurrentUserTypes } from '@/store/mutation-types'

  export default {
    name: 'Entries',
    data () {
      return {
        event: {},
        newEntries: [],
        options: [
          { name: 'Lead Line 1', value: 'LL1' },
          { name: 'Walk Trot Cantor 1', value: 'WTC1' },
          { name: 'Green 1', value: 'G1' },
          { name: 'Flat Class 1', value: 'FLT1' },
          { name: '2x0 Jumpers', value: '20J' },
          { name: '3x6 Jumpers', value: '36J' }
        ]
      }
    },
    computed: {
      ...mapGetters({
        isAdmin: CurrentUserTypes.isAdmin,
        events: 'events/get',
        riders: 'riders/get',
        horses: 'horses/get',
        entries: 'entries/get'
      }),
      ...mapState({
        currentUser: state => state.currentUser.currentUser
      }),
      allEntries: function () {
        return this.newEntries.concat(this.entries)
      }
    },
    methods: {
      submit (e) {
        var self = this
        self.newEntries.forEach(function (entry, i) {
          self.$store.dispatch('entries/add', entry)
          self.newEntries.splice(i, 1)
        })
      },
      removeEntry (index) {
        this.newEntries.splice(index, 1)
      },
      addEntry () {
        this.newEntries.push({ rider: null, horse: null, class: null })
      }
    },
    created () {
      let self = this
      if (self.$route.params.id) {
        let evt = self.events.filter(function (evt) { return evt['.key'] === self.$route.params.id })[0]
        if (evt) {
          self.event = evt
        }
      }
    }

  }
</script>
