import drawCanvas from './modules/canvas.js'

function getQueryVariable(variable)
{
       let query = window.location.search.substring(1)
       let vars = query.split("&")
       for (var i=0;i<vars.length;i++) {
               let pair = vars[i].split("=")
               if(pair[0] == variable) {return pair[1]}
       }
       return(NaN);
}

function setBarValue(name, value) {
    var innerel = document.getElementById(name)
    var outerel = document.getElementById("bar-" + name)
    outerel.style.width = (value + "%")
    innerel.innerHTML = (value + "%")
    if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
        innerel.style.visibility = "hidden"
    }
}
function setLabel(val,ary) {
    if (val > 100) { return "" } else
    if (val >  90) { return ary[0] } else
    if (val >  75) { return ary[1] } else
    if (val >  60) { return ary[2] } else
    if (val >= 40) { return ary[3] } else
    if (val >= 25) { return ary[4] } else
    if (val >= 10) { return ary[5] } else
    if (val >=  0) { return ary[6] } else
    {return ""}
}

var whitesup        = getQueryVariable("r")
var matriarchy      = getQueryVariable("s")
var jeunism         = getQueryVariable("a")
var hetero          = getQueryVariable("h")
var cis             = getQueryVariable("t")
var thin            = getQueryVariable("f")
var blacksup        = (100 - whitesup        ).toFixed(1)
var patriarchy      = (100 - matriarchy      ).toFixed(1)
var adultism        = (100 - jeunism         ).toFixed(1)
var homo            = (100 - hetero          ).toFixed(1)
var trans           = (100 - cis             ).toFixed(1)
var fat             = (100 - thin            ).toFixed(1)

setBarValue("whitesup", whitesup)
setBarValue("blacksup", blacksup)
setBarValue("matriarchy", matriarchy)
setBarValue("patriarchy", patriarchy)
setBarValue("jeunism", jeunism)
setBarValue("adultism", adultism)
setBarValue("hetero", hetero)
setBarValue("homo", homo)
setBarValue("cis", cis)
setBarValue("trans", trans)
setBarValue("thin", thin)
setBarValue("fat", fat)

const rcsmArray = ["White Supremacist","White Nationalist","White Preference","Racial Egalitarianism","Black Preference","Black Nationalism","Black Supremacism"]
const sxsmArray = ["Radical Misandry","Matriarchy","Radical Feminism","Feminism","Masculism","Patriarchy","Radical Misogynist"]
const agsmArray = ["Radical Jeunist","Jeunism","Moderate Jeunism","Childism","Moderate Adultism","Adultism","Radical Adultist"]
const hmpbArray = ["Straight Supremacist","Straight Advantage","Straight Preference","Sexual Orientation Equality","Gay Preference","Gay Advantage","Gay Supremacist"]
const cispArray = ["Cis Supremacist","Cis Advantage","Cis Preference","Transgender Equality","Trans Preference","Trans Advantage","Trans Supremacist"]
const fatpArray = ["Malthusocrat","Thin Power","Thin Preference","Body Type Equality","Fat Preference","Fat Power","Lipostocrat"]

document.getElementById("racism-label").innerHTML = setLabel(whitesup, rcsmArray)
document.getElementById("sexism-label").innerHTML = setLabel(matriarchy, sxsmArray)
document.getElementById("ageism-label").innerHTML = setLabel(jeunism, agsmArray)
document.getElementById("homophobia-label").innerHTML = setLabel(hetero, hmpbArray)
document.getElementById("transphobia-label").innerHTML = setLabel(cis, cispArray)
document.getElementById("fatphobia-label").innerHTML = setLabel(thin, fatpArray)


drawCanvas(whitesup, blacksup, matriarchy, patriarchy, jeunism, adultism, hetero, homo, cis, trans, thin, fat) 

