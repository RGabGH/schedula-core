const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "200");
svg.setAttribute("height", "200");
// Creare un cerchio all'interno dell'SVG
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", "100");
circle.setAttribute("cy", "100");
circle.setAttribute("r", "50");
circle.setAttribute("fill", "blue");
// Aggiungere il cerchio all'SVG
svg.appendChild(circle);
// Aggiungere l'SVG al documento
document.body.appendChild(svg);
