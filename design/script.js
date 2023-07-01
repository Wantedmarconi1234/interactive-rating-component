const submitBtn = document.querySelector(".submit-btn");
const ratingPage = document.querySelector(".main-container");
const endPage = document.querySelector(".end-container");
const rateBtn = document.querySelectorAll(".btn");
const rateComment = document.querySelector("#rate-comment");

submitBtn.addEventListener("click", () => {
    ratingPage.style.display = "none";
    endPage.style.display = "block";
});

rateBtn.forEach(rateElement => {
    rateElement.addEventListener("click", () => {
        rateComment.innerHTML = `You selected ${rateElement.innerHTML} out of ${rateBtn.length}`
        
    })
});