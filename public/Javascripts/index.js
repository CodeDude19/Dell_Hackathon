$(':radio').change(function () {
    console.log('New star rating: ' + this.value);
});

function feedback() {
    let x = document.querySelector("textArea");
    let y = document.querySelector(".fsubmit");
    let z = document.getElementById("changeSubmit");
    if (x.value) {
        x.remove();
        y.remove();
        z.innerHTML = "Thank You for giving us your Feedback &#10004;";
        z.style.color = "Green";
    }
}

// MLPart()
window.addEventListener("DOMContentLoaded", event => {
    let DataJs = dataObj;

    let fullDiv1 = ``;
    let fullDiv2 = ``;
    let x = document.getElementById("recommend1");
    let y = document.getElementById("recommend2");
    let k = [
        `<img src = "Images/Accessories/1.jpg" alt="">`,
        `<img src = "Images/Accessories/2.jpg" alt="">`,
        `<img src = "Images/Accessories/3.jpg" alt="">`,
        `<img src = "Images/Accessories/4.jpg" alt="">`,
        `<img src = "Images/Accessories/5.jpg" alt="">`,
        `<img src = "Images/Accessories/6.png" alt="">`,
    ]
    let i = 0;
    Object.keys(DataJs).forEach(function (key) {
        fullDiv1 += `<div class="cards_rec">`
        fullDiv2 += `<div class="cards_rec2">`
        imageloc = ``;
        switch (parseInt(DataJs[key][3])) {
            case 1:
                imageloc += `<img src = "Images/General_laptop/Home.jpg" alt="">`;
                break;
            case 2:
                imageloc += `<img src = "Images/General_laptop/Home.jpg" alt="">`;
                break;
            case 3:
                imageloc += `<img src = "Images/General_laptop/Student.jpg" alt="">`;
                break;
            case 4:
                imageloc += `<img src = "Images/General_laptop/Student.jpg" alt="">`;
                break;
            case 5:
                imageloc += `<img src = "Images/General_laptop/Executive.jpg" alt="">`;
                break;
            case 6:
                imageloc += `<img src = "Images/General_laptop/Progamming.jpg" alt="">`;
                break;
            case 7:
                imageloc += `<img src = "Images/General_laptop/DataSc.jpg" alt="">`;
                break;
            case 8:
                imageloc += `<img src = "Images/General_laptop/Home.jpg" alt="">`;
                break;
            case 9:
                imageloc += `<img src = "Images/General_laptop/Gaming.jpg" alt="">`;
                break;
            case 10:
                imageloc += `<img src = "Images/General_laptop/DataSc.jpg" alt="">`;
                break;
            case 11:
                imageloc += `<img src = "Images/General_laptop/Executive.jpg" alt="">`;
                break;
            case 12:
                imageloc += `<img src = "Images/General_laptop/Progamming.jpg" alt="">`;
                break;
            case 13:
                imageloc += `<img src = "Images/General_laptop/Gaming.jpg" alt="">`;
                break;
            case 14:
                imageloc += `<img src = "Images/General_laptop/Gaming.jpg" alt="">`;
                break;
        }
        fullDiv1 += imageloc;
        fullDiv2 += k[i++];
        fullDiv1 += `<span>${key}</span>` + `<p>₹ ${DataJs[key][0]}</p></div>`;
        fullDiv2 += `<span>${DataJs[key][1]}</span>` + `<p>₹ ${DataJs[key][2]}</p></div>`;
    })
    x.innerHTML = fullDiv1;
    y.innerHTML = fullDiv2;
});
$(document).ready(function () {
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
    }, 500);
    $("#closeCookieConsent, .cookieConsentOK").click(function () {
        $("#cookieConsent").fadeOut(200);
    });
});

function cookieStatus(n) {
    console.log(n);
}