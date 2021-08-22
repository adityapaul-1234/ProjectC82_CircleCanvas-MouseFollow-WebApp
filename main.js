canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

colour = "black";
line_width = 2;
radius = 40;
mouseEvent = "";

canvas.addEventListener("mousedown", func_mousedown);
function func_mousedown(e) {
    mouseEvent = "mouseDown";

    radius = document.getElementById("Radius").value;
    colour = document.getElementById("colour").value;
    line_width = document.getElementById("line-width").value;

}

canvas.addEventListener("mouseleave", func_mouseleave);
function func_mouseleave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup", func_mouseup);
function func_mouseup(e) {
    mouseEvent = "mouseUp";
}

var last_x;
var last_y;
canvas.addEventListener("mousemove", func_mousemove);
function func_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = line_width;
        ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}

function erase(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function restore(){
    console.log("restoring");
    colour = "black";
    console.log(colour);
    line_width = 2;
    console.log(line_width);
    radius = 40;
    console.log(radius);
    document.getElementById("Radius").value=radius;
    document.getElementById("colour").value=colour;
    document.getElementById("line-width").value=line_width;
}