document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".modal");
  const buttons = document.querySelectorAll(".button");
  const closeBtns = document.querySelectorAll(".close");
  const profileBtn = document.querySelector(".profile-button");
  const profileModal = document.querySelector(".profile-modal");
  const profileClose = document.querySelector(".profile-close");
  const logoWrapper = document.querySelector(".logo-wrapper");
  const logo = document.querySelector(".name-logo")


  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        modals[index].style.display = "block";
    });
  });

  closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
        modals[index].style.display = "none";
    });
  });

  profileBtn.addEventListener("click", () => {
    profileModal.style.display = "block";
  });

  profileClose.addEventListener("click", () => {
        profileModal.style.display = "none";
  });

    

});

document.addEventListener("DOMContentLoaded", () => {
  const walkman = document.getElementById("center-img");
  const buttons = document.querySelectorAll(".button");

  walkman.addEventListener("click", () => {
    buttons.forEach(button => {
      button.classList.add("reveal");
      walkman.style.zIndex = 10;
      walkman.style.cursor = "default";
    });
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('scrolling-content');
  const originalText = content.innerHTML;
  
  while (content.scrollWidth < content.parentElement.offsetWidth * 2) {
    content.innerHTML += originalText;
  }
});


  

