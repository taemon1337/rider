<template>
  <div style="width:100%;margin:15px;">
    <md-table-card>
      <md-toolbar>
        <md-button :disabled="!entries.length" class="md-raised md-primary">
          Submit Entries
          <md-tooltip>You are not registered until you submit and confirm entries</md-tooltip>
        </md-button>

        <h1 class="md-title">Your Entries in {{ event.title || 'this event' }}</h1>

        <md-button class="md-icon-button md-raised md-primary" @click.native="addEntry">
          <md-tooltip>Click to add entry</md-tooltip>
          <md-icon>add</md-icon>
        </md-button>
      </md-toolbar>

      <md-table md-sort="index">
        <md-table-header>
          <md-table-row>
            <md-table-head>Rider</md-table-head>
            <md-table-head>Horse</md-table-head>
            <md-table-head>Class</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(entry, rowIndex) in entries" :key="rowIndex" :md-item="entry">
            <md-table-cell>
              <md-input-container>
                <label>Rider name</label>
                <md-input v-model="entry.rider"></md-input>
              </md-input-container>
            </md-table-cell>
            <md-table-cell>
              <md-input-container>
                <label>Horse name</label>
                <md-input v-model="entry.horse"></md-input>
              </md-input-container>
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
    </md-table-card>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  export default {
    name: 'Entries',
    data () {
      return {
        event: {},
        riders: [],
        horses: [],
        entries: [],
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
    methods: {
      submit (e) {
        console.log('SUBMIT', e)
      },
      removeEntry (index) {
        this.entries.splice(index, 1)
      },
      addEntry () {
        this.entries.push({ rider: null, horse: null, class: null })
      }
    },
    components: {
      Multiselect
    }
  }
</script>
