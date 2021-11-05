
let vars = ["#0C0C0C","#313131", "#1d77fd", "#ffffffe7","#272727ce"]
let cool = ["#f2f8ff", "white", "#1d77fd", "rgba(0, 0, 0, 0.747)", "rgb(255, 255, 255)"]

let current = 0;

$(document).ready(function(e) {
    $('.background').css('width', document.querySelector('.background').offsetHeight - 10 + "px");
})

$('.shift').click(function(){
    $('.shift .far').toggleClass("active")

    if (current == 0) {
        current++;
        $("body").get(0).style.setProperty("--gradient1", vars[0]);
        $("body").get(0).style.setProperty("--gradient2", vars[1]);
        $("body").get(0).style.setProperty("--gradient3", vars[2]);
        $("body").get(0).style.setProperty("--text", vars[3]);
        $("body").get(0).style.setProperty("--shadows", vars[4]);
    }
    else {
        current--

        $("body").get(0).style.setProperty("--gradient1", cool[0]);
        $("body").get(0).style.setProperty("--gradient2", cool[1]);
        $("body").get(0).style.setProperty("--gradient3", cool[2]);
        $("body").get(0).style.setProperty("--text", cool[3]);
        $("body").get(0).style.setProperty("--shadows", cool[4]);
    }
}) 