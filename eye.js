let eye = document.querySelector(".eye");
      eye.addEventListener("mouseenter", (e) =>
        e.target.setAttribute("data-closed", "")
      );
      eye.addEventListener("mouseleave", (e) =>
        e.target.removeAttribute("data-closed")
      );