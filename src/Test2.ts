canvas.onclick = function(e) {

    // adjust mouse position to relative to canvas:
    let r = canvas.getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;

    // check if x/y is within any of the buttons
        if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
            y > dflt / (1080 / 260) && y < dflt / (1080 / 260) + dflt / 14.25) {
            alert("A");
        } else if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
                   y > dflt / (1080 / 440) && y < dflt / (1080 / 440) + dflt / 14.25){
                   alert("B");
        } else if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
                   y > dflt / (1080 / 620) && y < dflt / (1080 / 620) + dflt / 14.25){
                   alert("C");
        } else if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
                   y > dflt / (1080 / 800) && y < dflt / (1080 / 800) + dflt / 14.25){
                   alert("D");}
    }    
