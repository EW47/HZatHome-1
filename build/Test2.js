canvas.onclick = function (e) {
    let r = canvas.getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;
    if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 260) && y < dflt / (1080 / 260) + dflt / 14.25) {
        alert("A");
    }
    else if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 440) && y < dflt / (1080 / 440) + dflt / 14.25) {
        alert("B");
    }
    else if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 620) && y < dflt / (1080 / 620) + dflt / 14.25) {
        alert("C");
    }
    else if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 800) && y < dflt / (1080 / 800) + dflt / 14.25) {
        alert("D");
    }
};
//# sourceMappingURL=Test2.js.map