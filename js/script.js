const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
if(menuToggle&&navLinks){menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));}
const chips=[...document.querySelectorAll(".interest-chip")];
const count=document.getElementById("selectionCount");
chips.forEach(chip=>chip.addEventListener("click",()=>{
  chip.classList.toggle("selected");
  const total=chips.filter(item=>item.classList.contains("selected")).length;
  count.textContent=`${total} interest${total===1?"":"s"} selected`;
}));
const demoMessage=document.getElementById("demoMessage");
document.querySelectorAll(".auth-card").forEach(form=>form.addEventListener("submit",event=>{
  event.preventDefault();
  if(demoMessage) demoMessage.textContent="This is a front-end preview. Connect the form to your Flask backend to enable real registration and login.";
}));
