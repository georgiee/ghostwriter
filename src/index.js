require("./styles/index.scss");
console.log('hello2');

class ExampleViewer {
  constructor(){
    console.log('hello1')
  }
}


window.addEventListener('load', function() {
  new ExampleViewer();
})