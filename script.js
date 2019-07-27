var imgSrc;
window.addEventListener("load", function() {
  document.querySelector("input[type='file']").addEventListener("change", function() {
    if (this.files && this.files[0]) {
      imgSrc = URL.createObjectURL(this.files[0]);
    }
  })
});
// Image import taken from https://stackoverflow.com/a/45931408

function output() {
  if (imgSrc == undefined) {alert("No image has been loaded."); return};
  if (document.getElementById("canvas")) {document.body.removeChild(document.getElementById("canvas"))};

  var img = new Image();
  img.src = imgSrc;
  img.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = 64;
    canvas.height = 64;
    canvas.style.border = "2px solid black";

    document.body.appendChild(canvas);
    canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // 1.7 Section
    context.drawImage(img, 0, 0, 64, 32, 0, 0, 64, 32);

    context.scale(-1, 1);
    // Leg
    context.drawImage(img, 0, 20, 12, 12, -64 + 36, 52, 12, 12);
    context.drawImage(img, 4, 16, 4, 4, -64 + 40, 48, 4, 4);
    context.drawImage(img, 8, 16, 4, 4, -64 + 36, 48, 4, 4);
    context.drawImage(img, 12, 20, 4, 12, -64 + 32, 52, 4, 12);
    // Arm
    context.drawImage(img, 40, 20, 12, 12, -64 + 20, 52, 12, 12);
    context.drawImage(img, 44, 16, 4, 4, -64 + 24, 48, 4, 4);
    context.drawImage(img, 48, 16, 4, 4, -64 + 20, 48, 4, 4);
    context.drawImage(img, 52, 20, 4, 12, -64 + 16, 52, 4, 12);
    //context.drawImage(img, 0, 0, 64, 64, -64, 0, 64, 64);
  };
};

// Download button taken from https://stackoverflow.com/a/42546234
function download() {
  if (document.getElementById("canvas")) {
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
  } else {
    alert("No image has been output.")
  }
}
