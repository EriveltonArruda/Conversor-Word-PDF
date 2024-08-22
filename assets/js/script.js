const label = document.querySelector("label");

function onEnter() {
  label.classList.add("active")
}

function onLeave() {
  label.classList.remove("active")
}

label.addEventListener("dragenter", onEnter)
label.addEventListener("drop", onLeave)
label.addEventListener("dragend", onLeave)
label.addEventListener("dragleave", onLeave)

