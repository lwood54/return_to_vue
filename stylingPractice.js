var app = new Vue({
  el: '#stylingPracticeApp',
  data: {
    pageHeading: 'Assignment: Styling Practice',
    shrink: true,
    highlight: false,
    famColor: true,
    famSize: true,
    userClass: 'orange',
    userColor: 'red',
    userTruth: '',
    isTrue: false,
    colorPicker: 'pink',
    progressWidth: 0
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        if (vm.shrink) {
          vm.highlight = true;
          vm.shrink = false;
        } else {
          vm.shrink = true;
          vm.highlight = false;
        }
      }, 3000);
    },
    startProgressBar: function() {
      var vm = this;
      setInterval(function() {
        vm.progressWidth < 100
          ? (vm.progressWidth += 4)
          : (vm.progressWidth = 0);
      }, 200);
    }
  },
  computed: {
    currentStyle: function() {
      return {
        shrink: this.shrink,
        highlight: !this.shrink
      };
    },
    standardBox: function() {
      return {
        width: '100px',
        height: '100px',
        border: '3px solid black'
      };
    }
  },
  watch: {
    userTruth: function() {
      var vm = this;
      if (vm.userTruth === 'true') {
        console.log('isTrue = true');
        vm.isTrue = true;
      } else {
        vm.isTrue = false;
      }
    }
  }
});
