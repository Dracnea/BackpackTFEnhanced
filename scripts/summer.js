function summerApply(thisRow) {
    //TODO: Determine how to align icon-stack with current row
    var thisDiv = thisRow.querySelectorAll(".icon-stack")
    var summerChild = document.createElement("div");
    summerChild.classList.add('gifted-item')
    var iconImage = document.createElement("i");
    iconImage.setAttribute("class", "fa fa-thermometer-full")
    // Custom Image Code
    // imageUrl = chrome.runtime.getURL("images/umbrella.png");
    summerChild.appendChild(iconImage);
    thisDiv[0].appendChild(summerChild)
}