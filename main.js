let letters = ['<span>W</span>.','<span>E</span>.','<span>F</span>.','<span>A</span>.','L','a,','t','f','n','l','t','i','h.','T,','e','c','w','t','F','N','a.','O','t','A,','m','o','a','f','e,','c','s','t,','b','w','t','w','n','h','m,','h','v.','A','h','y','p','a','m','b','a','I','d','t','n','A,','a','a','n','A.','A','a','h','a','s','a','g,','h','h','a','l','t','l','b','h','r','t','s','a.','B','I','b','A','c','s','t','w.'];

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

window.onload = function() {
    let offset = 2;

    let oneDay = 24 * 60 * 60 * 1000;
    let today = new Date()

    let startdate = new Date(2025, 8, 22);
    let enddate = new Date(2026, 2, 22);

    let diffDays = Math.round(Math.abs((startdate - enddate) / oneDay));
    let progDays = Math.round(Math.abs((startdate - today) / oneDay));

    //let text = letters.slice(0, letters.length * progDays / diffDays + offset);
    let text = letters.slice(0, 2 * progDays + offset);

    document.body.style = "font-size:" + (text.length > 100 ? 32 : Math.min(3000 / text.length, 80)) + "px";
    document.body.innerHTML = text.join(" ");
}