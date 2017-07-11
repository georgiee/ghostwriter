require("./styles/index.scss");

class ExampleViewer {
  constructor(el){
    this.el = el;
    this.src = this.el.getAttribute('data-src');

    this.iframe = this.el.querySelector('.js-iframe');
    this.playButton = this.el.querySelector('.js-play');
    this.playButton.addEventListener('click', event => {
      this.play();
    })
  }

  play(){
    this.el.classList.add('is-playing');
    this.iframe.setAttribute('src', this.src);
  }
}


window.addEventListener('load', function() {
  const elements = document.querySelectorAll('.js-example-view');
  for(let i = 0, l = elements.length; i < l; i++) {
    new ExampleViewer(elements[i]);
  }

})