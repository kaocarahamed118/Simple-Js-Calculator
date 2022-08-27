function myFunction(){

    let screen = document.getElementById("screen");
    let buttons = document.querySelectorAll(".calculate-button");
    let equal = document.getElementById("equality"); 
    let deletes = document.getElementById("deletes"); 
    let clears = document.getElementById("clear");

    buttons.forEach(function(button){
        button.addEventListener('click', function(event){
            let value = event.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function(event){
        if(screen.value === ''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clears.addEventListener('click', function(event){
        screen.value = "";
    })

    deletes.addEventListener('click', function(event){
        screen.value = screen.value.slice(0, -1);
    })

}
myFunction();