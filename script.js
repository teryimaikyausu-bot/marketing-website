function buyNow(Group3 Accessories) {
    alert(Hurry! order the group3 Accessories before the discount ends!);
}

let hours = 120;
let timeleft = hours * 60 * 60;

let timer = document.getElementById(timer);

let countdown= setInterval(function() => { if(timer) { if (timeleft > 0){
    let h = Math.floor(timeleft / 3600);
    let m = Math.floor((timeleft % 3600) / 60 );
    let s = timeleft % 60;
timer.innerHTML= discount ends in: ${h}h ${m}m ${s}s ;
timeleft--;
} else {
    clearInterval(countdown);
    timer.innerHTML= offer expired!;
}
}
}, 1000);