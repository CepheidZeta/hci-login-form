const tooltipBox = document.getElementById("tooltip-box");
const tooltipContent = document.getElementById("tooltip-content");
const closeTooltip = document.getElementById("close-tooltip");

/**
 * Displays the tooltip box near the
 * @param {String} message Message to be displayed
 * @param {String} color Color of the tooltip
 */
function showTooltip(message, color) {
    tooltipContent.innerHTML = "<p>" + message + "</p>";
    tooltipBox.style.display = "flex";
    tooltipBox.style.backgroundColor = color;
    setTimeout(() => {
        tooltipBox.style.display = "none";
    }, 5000);
}

closeTooltip.addEventListener("click", () => {
    tooltipBox.style.display = "none";
});

export default showTooltip;