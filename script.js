function openMenu() {
    var x = document.getElementById("myLinks");
    var blur = document.getElementById("myBlur");
    var header = document.getElementById("myHeader");
    var footer = document.getElementById("footer");
    if (x.style.display === "flex") {
      x.style.display = "none";
      blur.style.filter = "unset";
      footer.style.filter = "unset";
     
    } else {
      x.style.display = "flex";
      blur.style.filter = "blur(8px)";
      header.style.filter = "unset";
      footer.style.filter = "blur(8px)";
    }
  }

