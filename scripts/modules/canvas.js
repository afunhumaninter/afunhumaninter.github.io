export default drawCanvas
function drawCanvas(whitesup, blacksup, matriarchy, patriarchy, jeunism, adultism, hetero, homo, cis, trans, thin, fat) {
    var version = "Test Edition #4.0"
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        var bg = "#141414"
        var fg = "#EEEEEE"
    } else {
        var bg = "#EEEEEE"
        var fg = "#141414" 
    }
        var c = document.createElement("canvas")
        var ctx = c.getContext("2d")
        c.width = 800;
        c.height = 900;
        ctx.fillStyle = bg
        ctx.fillRect(0,0,800,900);

        var img = document.getElementById("img-whitesup")
        ctx.drawImage(img, 20, 170, 100, 100);
        var img = document.getElementById("img-blacksup")
        ctx.drawImage(img, 680, 170, 100, 100)
        var img = document.getElementById("img-matriarchy")
        ctx.drawImage(img, 20, 290, 100, 100)
        var img = document.getElementById("img-patriarchy")
        ctx.drawImage(img, 680, 290, 100, 100)
        var img = document.getElementById("img-jeunism")
        ctx.drawImage(img, 20, 410, 100, 100)
        var img = document.getElementById("img-adultism")
        ctx.drawImage(img, 680, 410, 100, 100)
        var img = document.getElementById("img-hetero")
        ctx.drawImage(img, 20, 530, 100, 100)
        var img = document.getElementById("img-homo")
        ctx.drawImage(img, 680, 530, 100, 100)
        var img = document.getElementById("img-cis")
        ctx.drawImage(img, 20, 650, 100, 100)
        var img = document.getElementById("img-trans")
        ctx.drawImage(img, 680, 650, 100, 100)
        var img = document.getElementById("img-thin")
        ctx.drawImage(img, 20, 770, 100, 100)
        var img = document.getElementById("img-fat")
        ctx.drawImage(img, 680, 770, 100, 100)

        ctx.fillStyle="#222"
        ctx.fillRect(120, 180, 560, 80)
        ctx.fillRect(120, 300, 560, 80)
        ctx.fillRect(120, 420, 560, 80)
        ctx.fillRect(120, 540, 560, 80)
        ctx.fillRect(120, 660, 560, 80)
        ctx.fillRect(120, 780, 560, 80)
        ctx.fillStyle="#f1f1f1"
        ctx.fillRect(120, 184, 5.6*whitesup-2, 72)
        ctx.fillStyle="#303030"
        ctx.fillRect(682-5.6*blacksup, 184, 5.6*blacksup-2, 72)
        ctx.fillStyle="#eb14eb"
        ctx.fillRect(120, 304, 5.6*matriarchy-2, 72)
        ctx.fillStyle="#1414eb"
        ctx.fillRect(682-5.6*patriarchy, 304, 5.6*patriarchy-2, 72)
        ctx.fillStyle="#eedbdb"
        ctx.fillRect(120, 424, 5.6*jeunism-2, 72)
        ctx.fillStyle="#6b0000"
        ctx.fillRect(682-5.6*adultism, 424, 5.6*adultism-2, 72)
        ctx.fillStyle="#585858"
        ctx.fillRect(120, 544, 5.6*hetero-2, 72)
        ctx.fillStyle="#0de961"
        ctx.fillRect(682-5.6*homo, 544, 5.6*homo-2, 72)
        ctx.fillStyle="#797979"
        ctx.fillRect(120, 664, 5.6*cis-2, 72)
        ctx.fillStyle="#ef187c"
        ctx.fillRect(682-5.6*trans, 664, 5.6*trans-2, 72)
        ctx.fillStyle="#540769"
        ctx.fillRect(120, 784, 5.6*thin-2, 72)
        ctx.fillStyle="#dca838"
        ctx.fillRect(682-5.6*fat, 784, 5.6*fat-2, 72)
        ctx.fillStyle=fg
        ctx.font="700 60px Montserrat"
        ctx.textAlign="left"
        ctx.fillText("Discriminatoryvalues", 20, 90)
        ctx.font="50px Montserrat"
        ctx.fillStyle="#222222"
        ctx.textAlign="left"
        if (whitesup        > 30) {ctx.fillText(whitesup + "%", 130, 237.5)}
        if (matriarchy      > 30) {ctx.fillText(matriarchy + "%", 130, 357.5)}
        if (jeunism         > 30) {ctx.fillText(jeunism + "%", 130, 477.5)}
        if (hetero          > 30) {ctx.fillText(hetero + "%", 130, 597.5)}
        if (cis             > 30) {ctx.fillText(cis + "%", 130, 717.5)}
        if (thin            > 30) {ctx.fillText(thin + "%", 130, 837.5)}
        ctx.textAlign="right"
        if (blacksup        > 30) {ctx.fillText(blacksup + "%", 670, 237.5)}
        if (patriarchy      > 30) {ctx.fillText(patriarchy + "%", 670, 357.5)}
        if (adultism        > 30) {ctx.fillText(adultism + "%", 670, 477.5)}
        if (homo            > 30) {ctx.fillText(homo + "%", 670, 597.5)}
        if (trans           > 30) {ctx.fillText(trans + "%", 670, 717.5)}
        if (fat             > 30) {ctx.fillText(fat + "%", 670, 837.5)}
        ctx.fillStyle=fg
        ctx.font="300 25px Montserrat"
        ctx.fillText("afunhumaninter.github.io/discriminatoryvalues", 780, 40)
        ctx.fillText(version, 780, 70)
        ctx.textAlign="center"
        ctx.fillText("Racism Axis: " + document.getElementById("racism-label").innerHTML, 400, 175)
        ctx.fillText("Sexism Axis: " + document.getElementById("sexism-label").innerHTML, 400, 295)
        ctx.fillText("Ageism Axis: " + document.getElementById("ageism-label").innerHTML, 400, 415)
        ctx.fillText("Homophobia Axis: " + document.getElementById("homophobia-label").innerHTML, 400, 535)
        ctx.fillText("Transphobia Axis: " + document.getElementById("transphobia-label").innerHTML, 400, 655)
        ctx.fillText("Fatphobia Axis: " + document.getElementById("fatphobia-label").innerHTML, 400, 775)

        document.getElementById("banner").src = c.toDataURL();
}