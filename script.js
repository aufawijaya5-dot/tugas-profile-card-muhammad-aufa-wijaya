
let sudahFollow = false;

function follow() {
    const tombol = document.getElementById("followBtn");

    if (sudahFollow == false) {
        tombol.innerHTML = "Following";
        sudahFollow = true;
    } else {
        tombol.innerHTML = "Follow";
        sudahFollow = false;
    }
}

function message() {
    const instagram = "https://www.instagram.com/aufaa.project?utm_source=qr&rpxt=OHE2ZThrbzRxa2sy";

    window.open(instagram, "_blank");
}
