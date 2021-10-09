var max_rcsm, max_sxsm, max_agsm, max_hmpb, max_cisp, max_fatp // Max possible scores
max_rcsm = max_sxsm = max_agsm = max_hmpb = max_cisp = max_fatp = 0;
var rcsm, sxsm, agsm, hmpb, cisp, fatp // User's scores
rcsm = sxsm = agsm = hmpb = cisp = fatp = 0;
var qn = 0; // Question number
var prev_answer = null;
fetch("JSON/questions.json")
    .then(response => response.json())
    .then(data => load_questions(data))

function load_questions(data) {
    questions = data
    for (var i = 0; i < questions.length; i++) {
        max_rcsm += Math.abs(questions[i].effect.rcsm)
        max_sxsm += Math.abs(questions[i].effect.sxsm)
        max_agsm += Math.abs(questions[i].effect.agsm)
        max_hmpb += Math.abs(questions[i].effect.hmpb)
		max_cisp += Math.abs(questions[i].effect.cisp)
		max_fatp += Math.abs(questions[i].effect.fatp)
    }
    init_question();
}

function init_question() {
    document.getElementById("question-text").innerHTML = questions[qn].question;
    document.getElementById("question-number").innerHTML = "Question " + (qn + 1) + " of " + (questions.length);
    if (prev_answer == null) {
        document.getElementById("back_button").style.display = 'none';
        document.getElementById("back_button_off").style.display = 'block';
    } else {
        document.getElementById("back_button").style.display = 'block';
        document.getElementById("back_button_off").style.display = 'none';
    }

}

function next_question(mult) {
    rcsm += mult*questions[qn].effect.rcsm
    sxsm += mult*questions[qn].effect.sxsm
    agsm += mult*questions[qn].effect.agsm
    hmpb += mult*questions[qn].effect.hmpb
    cisp += mult*questions[qn].effect.cisp
    fatp += mult*questions[qn].effect.fatp
    qn++;
    prev_answer = mult;
    if (qn < questions.length) {
        init_question();
    } else {
        results();
    }
}
function prev_question() {
    if (prev_answer == null) {
        return;
    }
    qn--;
    rcsm -= prev_answer * questions[qn].effect.rcsm;
    sxsm -= prev_answer * questions[qn].effect.sxsm;
    agsm -= prev_answer * questions[qn].effect.agsm;
    hmpb -= prev_answer * questions[qn].effect.hmpb;
    cisp -= prev_answer * questions[qn].effect.cisp;
    fatp -= prev_answer * questions[qn].effect.fatp;
    prev_answer = null;
    init_question();

}
function calc_score(score,max) {
    return (100*(max+score)/(2*max)).toFixed(1)
}
function results() {
    location.href = `results.html`
            + `?r=${calc_score(rcsm,max_rcsm)}`
            + `&s=${calc_score(sxsm,max_sxsm)}`
            + `&a=${calc_score(agsm,max_agsm)}`
            + `&h=${calc_score(hmpb,max_hmpb)}`
            + `&t=${calc_score(cisp,max_cisp)}`
            + `&f=${calc_score(fatp,max_fatp)}`
}