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
    counter: 0
  },
  methods: {
    increase: function() {
      this.counter++;
    }
  }
});
