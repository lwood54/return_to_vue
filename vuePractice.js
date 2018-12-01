var app = new Vue({
  el: '#challenge1',
  data: {
    title: 'Section 2 Challenges',
    myName: 'Logan Wood',
    myAge: 36,
    imageSrc:
      'https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/06/06/Photos/human_dna--621x414.jpg'
  },
  methods: {
    randNum: function() {
      return Math.random();
    }
  }
});

var app2 = new Vue({
  el: '#s2practice',
  data: {
    title: 'Section 2 Practice',
    counter: 0,
    x: 0,
    y: 0,
    keyValue: ''
  },
  methods: {
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(ev) {
      this.x = ev.clientX;
      this.y = ev.clientY;
    },
    dummy: function(ev) {
      ev.stopPropagation();
    },
    alertMe: function() {
      alert('Hello there, you have been alerted...');
    },
    updateKeyValue: function(event) {
      this.keyValue = event.target.value;
    }
  }
});
