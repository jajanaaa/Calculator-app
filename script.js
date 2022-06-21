// Find elements
const screen = document.querySelector(".screen");

const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    switch (e.target.innerHTML) {
      default:
        screen.innerHTML += e.target.innerHTML;
        break;
      case "RESET":
        screen.innerHTML = "";
        break;
      case "DEL":
        screen.innerHTML = screen.innerHTML.slice(0, -1);
        break;
      case "=":
        screen.innerHTML = eval(screen.innerHTML);
        break;
    }
  });
});


function(){
    
    




 console.log();
}