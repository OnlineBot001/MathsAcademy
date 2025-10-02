const watermark = document.getElementById("watermark");
    let pos = -100; // start above the page
    const speed = 0.5; // lower = slower

    function moveWatermark() {
      pos += speed;
      watermark.style.top = pos + "px";

      // When it goes below page, reset to top
      if (pos > window.innerHeight) {
        pos = -100; // reset above page
      }

      requestAnimationFrame(moveWatermark);
    }

    moveWatermark();




    var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}