


let document_arr = ["crew-specialist.html", "crew-pilot.html", "crew-commander.html", "crew-engineer.html"];
let i;
let s = document.getElementById("main-hero-left-p1");
let tit = s.textContent; // Use s.textContent to get plain text content

if (tit === " Mission Specialist") { // Use comparison operator === for comparison
    i = 1;
}
else if (tit === " Pilot") { // Use comparison operator === for comparison
    i = 2;
}
else if (tit === " Commander") { // Use comparison operator === for comparison
    i = 3;
}
else {
    i = 0;
}

let document_change = function () {
    document.body.style.transition = "opacity 0.5s ease-in"; // Apply transition effect to the body element
    document.body.style.opacity = "0"; // Fade out the body element
    setTimeout(function () {
        window.location.href = document_arr[i]; // Use window.location.href to navigate to the next URL after the transition
    }, 500); // Wait for the transition to complete before changing URL
}

setTimeout(document_change, 2200);

document.body.style.opacity = "1"; // Set initial opacity of the body element to 1

