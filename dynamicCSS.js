var app = new Vue({
  el: '#dynamicCSS',
  data: {
    pageTitle: 'Dynamic Styling with CSS Classes',
    secondTitle: 'Dynamic Styling without CSS Classes',
    attachRed: false,
    attachGreen: false,
    attachBlue: false,
    color: 'green',
    noClassColor: 'gray',
    width: 100
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },
    myStyles: function() {
      return {
        backgroundColor: this.noClassColor,
        width: this.width + 'px'
      };
    }
  }
});
