const flexBlock = document.querySelector(".flex__block");
const columnBtn = document.querySelector(".col-btn");
const rowBtn = document.querySelector(".row-btn");
const sbBtn = document.querySelector(".sb-btn");
const saBtn = document.querySelector(".sa-btn");
const seBtn = document.querySelector(".se-btn");
const feBtn = document.querySelector(".fe-btn");
const fsBtn = document.querySelector(".fs-btn");
const rowReverseBtn = document.querySelector(".rrs-bt");
const colReverseBtn = document.querySelector(".crs-btn");

columnBtn.addEventListener("click", () => {
  console.log("Column button clicked");
  flexBlock.className = "flex__block column";
});

rowBtn.addEventListener("click", () => {
  console.log("Row button clicked");
  flexBlock.className = "flex__block row";
});

sbBtn.addEventListener("click", () => {
  console.log("Space-between button clicked");
  flexBlock.className = "flex__block space-bettwen";
});

saBtn.addEventListener("click", () => {
  console.log("Space-around button cflex-endlicked");
  flexBlock.className = "flex__block space-around";
});

seBtn.addEventListener("click", () => {
  console.log("Space-evenly button clicked");
  flexBlock.className = "flex__block space-evenly";
});

feBtn.addEventListener("click", () => {
  console.log("Flex-end button clicked");
  flexBlock.className = "flex__block flex-end";
});

fsBtn.addEventListener("click", () => {
  console.log("Flex-start button clicked");
  flexBlock.className = "flex__block flex-start";
});