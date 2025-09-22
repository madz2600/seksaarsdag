let letters = ['W','E','F','A','M','g','u','t','t','m','s','a','t','o','d','a','t','o','p','w','t','A','k','b','b','t','W','T','E','K','F','N','a','A','N','B','t','a','c','w','t','F','N','a','O','t','A','m','a','f','e','O','h','c','s','t','r','f','B','w','t','w','n','h','m','h','v','A','h','y','h','p','a','t','F','N','i','n','v','i','t','W','T','y','a','m','f','a','t','m','o','m','t','j','t','t','E','K','t','h','f','a','t','F','N','l','m','a','m','b','t','l','a','o','t','S','p','b','t','t','A','w','n','r','i','t','A','N','a','t','t','c','i','b','B','I','h','l','h','I','s','b','t','s','t','A','w','r','t','s','t','w'];

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

window.onload = function() {
    let offset = 4;

    let oneDay = 24 * 60 * 60 * 1000;
    let today = new Date()

    let startdate = new Date(2025, 8, 22);
    let enddate = new Date(2026, 2, 22);

    let diffDays = Math.round(Math.abs((startdate - enddate) / oneDay));
    let progDays = Math.round(Math.abs((startdate - today) / oneDay));

    let text = letters.slice(0, letters.length * progDays / diffDays + offset);

    document.body.style = "font-size:" + (text.length > 100 ? 32 : Math.min(3000 / text.length, 80)) + "px";
    document.body.innerHTML = text.join(" ");
}

