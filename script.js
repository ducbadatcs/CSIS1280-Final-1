var date = new Date();

function date_format(s){
    s = String(s);
    if (s.length == 1){
        return "0" + s;
    }
    else return s.slice(-2);
}

function random_number(){
    //we only need numbers from 1 to 6
    return Math.floor(Math.random() * 6 + 1);
}
document.querySelector("#day").textContent = 
`${date_format(date.getDate())}/${date_format(date.getMonth())}/${date_format(date.getFullYear())} at ${date_format(date.getHours())}:${date.getMinutes()}`;

document.getElementById("btn").addEventListener("click", () => {
    let total = 0;
    for (let i of document.querySelectorAll(".dice > img")){
        let a = random_number();
        i.src = `./dice-${a}.svg`;
        total += a;
    }
    document.getElementById("total").textContent = String(total);
    if (total >= 8){
        document.getElementsByTagName("h3")[0].textContent = "You Win: Try Again!";
    }
    else {
        document.getElementsByTagName("h3")[0].textContent = "You didn't win: Try Again!"
    }
})