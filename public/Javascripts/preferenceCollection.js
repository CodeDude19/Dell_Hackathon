Names = []
Price = []
fData = []
let avgPrice = 0;
$(document).ready(async function () {
    let x = document.querySelector(".Ads");
    for (let i = 1; i < x.childNodes.length; i += 2) {
        let tempTitle = x.childNodes[i].childNodes[5].innerHTML;
        let tempPrice = x.childNodes[i].childNodes[7].innerHTML;
        Names.push(tempTitle);
        Price.push(tempPrice);
    }
    Price.forEach(element => {
        avgPrice += parseInt(element);
    });
    avgPrice /= Names.length;
    avgPrice = parseInt(avgPrice);
    fData = [avgPrice, Names];
    const res = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fData)
    })
    const jsonRes = await res.json();
});