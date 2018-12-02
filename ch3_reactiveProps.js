var app = new Vue({
  el: '#ch3',
  data: {
    title: 'Assignment 3 Break Down',
    value: 0,
    userTime: 3000
  },
  computed: {
    result: function() {
      console.log('computed result ran');
      return this.value === 37 ? 'DONE' : 'not there yet';
    }
  },
  watch: {
    result: function() {
      console.log('watch value ran');
      var vm = this;
      setTimeout(function(value) {
        vm.value = 0;
      }, vm.userTime);
    }
  },
  methods: {
    updateUserTime: function(ev) {
      console.log('methods updateUserTime ran');
      this.userTime = ev.target.value * 1000;
    }
  }
});
