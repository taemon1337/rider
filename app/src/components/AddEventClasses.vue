<template>
  <div style="width:100%;margin:15px;">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Event Classes</h1>

        <md-button class="md-icon-button md-raised md-primary" @click.native="openClassForm" id="openForm">
          <md-tooltip>Click to add class</md-tooltip>
          <md-icon>add</md-icon>
        </md-button>
      </md-toolbar>

      <md-dialog md-open-from="#openForm" md-close-to="#openForm" @close.native="formClosed" ref="classFormDialog">
        <md-dialog-title>Add New Class</md-dialog-title>

        <md-dialog-content style="width:400px;">
          <form ref="classForm">
            <md-input-container>
              <label>Division</label>
              <md-input v-model="klass.division" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Class Id</label>
              <md-input v-model="klass.id" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Class Title</label>
              <md-input v-model="klass.title" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Max number in class</label>
              <md-input v-model="klass.maxRiders" type="number" required></md-input>
            </md-input-container>

            <md-input-container>
              <label>Additional Info</label>
              <md-textarea v-model="klass.details"></md-textarea>
            </md-input-container>

            <md-button class="md-raised md-primary" @click.native="saveClass"> Save </md-button>
            <md-button class="md-raised" @click.native="closeClassForm"> Cancel </md-button>
          </form>
        </md-dialog-content>
      </md-dialog>

      <md-table md-sort="index">
        <md-table-header>
          <md-table-row>
            <md-table-head>Division</md-table-head>
            <md-table-head>Number</md-table-head>
            <md-table-head>Title</md-table-head>
            <md-table-head>Max Riders</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(klass, index) in value.classes" :key="index" :md-item="klass">
            <md-table-cell>
              {{ klass.division }}
            </md-table-cell>
            <md-table-cell>
              {{ klass.id }}
            </md-table-cell>
            <md-table-cell>
              {{ klass.title }}
            </md-table-cell>
            <md-table-cell>
              {{ klass.maxRiders }}
            </md-table-cell>
            <md-table-cell>
              <span>
                <md-icon @click.native="editClass(klass)">mode_edit</md-icon>
                <md-tooltip>Edit</md-tooltip>
              </span>

              <span>
                <md-icon @click.native="removeClass(klass)">delete_forever</md-icon>
                <md-tooltip>Remove Class</md-tooltip>
              </span>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'AddEventClass',
    props: ['value'],
    data () {
      return {
        klass: {}
      }
    },
    computed: {
      ...mapGetters({
        events: 'events/get'
      }),
      ...mapState({
        currentUser: state => state.currentUser.currentUser
      })
    },
    methods: {
      removeClass (index) {
        var val = Object.assign({}, this.value)
        val.classes.splice(index, 1)
        this.$emit('input', val)
        this.klass = { name: null }
      },
      editClass (klass) {
        this.klass = klass
        this.openClassForm()
      },
      saveClass () {
        var val = Object.assign({}, this.value)
        val.classes = val.classes || []
        val.classes.push(this.klass)
        this.$emit('input', val)
        this.klass = { name: null }
        this.closeClassForm()
      },
      openClassForm () {
        this.$refs.classFormDialog.open()
      },
      closeClassForm () {
        this.$refs.classFormDialog.close()
      }
    }
  }
</script>

