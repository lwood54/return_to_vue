var app = new Vue({
  el: '#s2computedProps',
  data: {
    greetings: 'Hello Vue!',
    counter: 0,
    link: 'http://www.espn.com',
    currentLink: 'ESPN'
  },
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result: function() {
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    changeLink: function() {
      if (this.currentLink === 'ESPN') {
        this.currentLink = 'Amazon';
        this.link = 'http://www.amazon.com';
      } else {
        this.currentLink = 'ESPN';
        this.link = 'http://www.espn.com';
      }
    }
  }
});
