function setup() {
    createCanvas(640, 640);
    arr = [];
    for (let i=0; i<10; i++){
        arr[i] = new acceleratoToMouse();
    }
}
function checkKey(e) {
    var event = window.event ? window.event : e;
    if (event.keyCode == '38') {
        w.upSpeed();
    }
    else if (event.keyCode == '40') {
        w.breakSpeed();
    }
}
document.onkeydown = checkKey;

function draw() {
    for (let i=0; i<10; i++){
        arr[i].step();
        arr[i].display();
        arr[i].checkEdges();
    }
}