const profileImg = document.getElementById("profileImg");
const overlay = document.getElementById("imgOverlay");

function openImg() {
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImg() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

profileImg.addEventListener("click", openImg);
overlay.addEventListener("click", closeImg);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeImg();
});