const textArea = document.querySelector(".left textarea");
const previewDiv = document.querySelector(".right");
const resetBtn = document.querySelector("#resetBtn button");

resetBtn.addEventListener('click',()=>{
    textArea.value="";
    previewDiv.innerHTML="";
})

textArea.addEventListener("input",updatePreview);

function updatePreview() {
    const markdownText = textArea.value;
    previewDiv.innerHTML = marked.parse(markdownText);
    Prism.highlightAll();
}