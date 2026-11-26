const mapPoints = [
    { name: "Map Overview", image: "images/minimap.png",
        highlight: "highlight",
        description: "The map is divided into 3 primary, color-coded lanes: York (Yellow Lane), Broadway (Blue Lane), and Greenwich (Green Lane). Each lane is further divided into 3 unique locations and contains the game's primary and secondary objectives. Each lane has its own Zipline, which shares that lane's respective color. Ziplines extend from the end of one base to the other." },
    { name: "York", label: "Yellow Lane", image: "images/stock_exchange_03.jpg", icon: "yellow_lane.png", x: 19, y: 70,
        highlight: "highlight-yellow", glow: "255, 172, 17",
        description: "York (Yellow) is one of the side lanes. One side is a heavily industrialized factory area with smog, overgrown forgotten storage warehouses and resources collecting dust. The other side is the New York Stock Exchange, modern, sleek, marble and clean, a stark contrast to the other side." },
    { name: "Broadway", label: "Blue Lane", image: "images/times_square.jpg", icon: "blue_lane.png", x: 43, y: 65,
        highlight: "highlight-blue", glow: "47, 203, 243",
        description: "Broadway (Blue) is the middle lane, and the most iconic of the three. It cuts straight through Times Square, a bustling commercial and entertainment hub with bright lights and billboards. Under it is the New York subway and sewers, but be careful, there have been whispers of alligators living in the sewer systems." },
    { name: "Greenwich", label: "Green Lane", image: "images/central_park_02.jpg", icon: "green_lane.png", x: 73, y: 70,
        highlight: "highlight-green", glow: "151, 218, 121",
        description: "Greenwich (Green), pronounced \"Grenich\", is on the opposite side of York. A park filled with beautiful statues and greenery. On one side is Umbria University, a prestigious and historic university with a beautiful campus. The other side is a residential area with brownstone buildings and tree-lined streets." },
    { name: "Haunts", label: "Jungle camp", image: "images/haunt.png", icon: "haunt_icon.png", x: 30, y: 55,
        highlight: "highlight-yellow", glow: "255, 172, 17",
        description: "Haunts are the neutral creatures guarding the jungle between the lanes. They don't fight for either Patron, but they hit back if you attack them. Clearing a camp rewards you with Souls, which makes it a good way to earn between lane fights. The strongest Haunt of all is the Mid Boss." },
    { name: "Mid Boss", label: "Mid Boss", image: "images/mid_boss.png", icon: "rejuv.png", x: 47.5, y: 50,
        highlight: "highlight-blue", glow: "47, 203, 243",
        description: "The Mid Boss is a powerful Haunt that spawns under Broadway. Once he is killed he drops three crystals around himself, which when broken give the team that broke them extra lives." },
    { name: "Unstable Rift", label: "Side lane objective", image: "images/rift.png", icon: "Unstable_Rift.png", x: 82, y: 50,
        highlight: "highlight-green", glow: "151, 218, 121",
        description: "The Unstable Rift appears randomly throughout the game at one of the side lanes. It is a capture the point minigame that creates opportunities for team fights, pushes on the other side of the map and game winning comebacks. Whoever captures the Unstable Rift gets rewarded with souls and more powerful troopers." },
    { name: "Urn", label: "Side lane objective", image: "images/urn.png", icon: "Soul_Urn.png", x: 19, y: 50,
        highlight: "highlight-green", glow: "151, 218, 121",
        description: "The Unstable Rift appears randomly throughout the game at one of the side lanes. It is a capture the point minigame that creates opportunities for team fights, pushes on the other side of the map and game winning comebacks. Whoever captures the Unstable Rift gets rewarded with souls and more powerful troopers." }
];

const mapEl = document.getElementById("map");
const mapNameEl = document.getElementById("map-name");
const mapImageEl = document.getElementById("map-image");
const mapDescriptionEl = document.getElementById("map-description");

const buttons = new Map();
let selectedPoint = mapPoints[0];

function renderPoint(point) {
    mapNameEl.src = point.name;
    mapNameEl.className = point.highlight;
    mapImageEl.src = `images/map/${point.image}.png`;
    mapImageEl.alt = point.name;
    mapDescriptionEl.textContent = point.description;
}

function markSelected(point) {
    document.querySelector(".selected-point")?.classList.remove("selected-point");
    buttons.get(point.name)?.classList.add("selected-point");
}

function preview(point) {
    renderPoint(point);
    markSelected(point);
}

function restore() {
    renderPoint(selectedPoint);
    markSelected(selectedPoint);
}

function select(point) {
    selectedPoint = point;
    buttons.forEach((button, name) => button.setAttribute("aria-pressed", name === point.name));
    restore();
}

function createButton(point) {
    const button = document.createElement("img");
    button.type = "button";
    button.className = "map-point";
    button.src= `images/${point.icon}`;
    button.alt= point.label;

    button.style.setProperty("--x", `${point.x}%`);
    button.style.setProperty("--y", `${point.y}%`);
    button.style.setProperty("--point-color", point.color);
    button.style.setProperty("--glow-color", point.glow);

    button.addEventListener("mouseenter", () => preview(point));
    button.addEventListener("mouseleave", restore);
    button.addEventListener("focus", () => preview(point));
    button.addEventListener("blur", restore);
    button.addEventListener("click", () => select(point));

    return button;
}

mapPoints.forEach(point => {
    const button = createButton(point);
    buttons.set(point.name, button);
    mapEl.append(button);
});

select(selectedPoint);