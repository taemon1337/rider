<template>
  <div style="float:left">
    <md-input-container>
      <md-input></md-input>
      <my-datepicker :date='startTime' :option='option' :limit='limit'></my-datepicker>
    </md-input-container>
  </div>
</template>

<script>
  import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'

  export default {
    name: 'DatePicker',
    data () {
      return {
        startTime: {
          time: ''
        },
        endtime: {
          time: ''
        },
        option: {
          type: 'min',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm',
          placeholder: 'Select Event Date',
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'color': '#5F5F5F'
          },
          buttons: {
            ok: 'Ok',
            cancel: 'Cancel'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        timeoption: {
          type: 'min',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm'
        },
        multiOption: {
          type: 'multi-day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm'
        },
        limit: []
      }
    },
    components: {
      myDatepicker
    }
  }
</script>

