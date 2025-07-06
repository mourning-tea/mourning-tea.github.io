function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

dragElement(document.getElementById("basic"))
dragElement(document.getElementById("check"))
dragElement(document.getElementById("radio"))
dragElement(document.getElementById("legend"))
dragElement(document.getElementById("text"))
dragElement(document.getElementById("volume"))
dragElement(document.getElementById("vertical"))
dragElement(document.getElementById("drop"))

function dragElement(element) {
    const draggable = element

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false

    draggable.addEventListener("mousedown", (event) => {
        isDragging = true
        offsetX = event.clientX - draggable.offsetLeft
        offsetY = event.clientY - draggable.offsetTop
    })

    document.addEventListener("mousemove", (event) => {
        if(isDragging){
            draggable.style.left = `${event.clientX - offsetX}px`
            draggable.style.top = `${event.clientY-offsetY}px`
        }
    })

    document.addEventListener("mouseup", (event) => {
        isDragging = false
    })
}

var welcomeScreen = document.querySelector("#welcome")

var welcomeScreenClose = document.querySelector("#welcomeclose")

function closeWindow(element){
    element.style.display = "none"
}

function openWindow(element){
    element.style.display = "flex"
}

welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
  });

