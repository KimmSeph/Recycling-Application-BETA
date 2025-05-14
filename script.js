const wasteItems = {
  plastic: [
    {
      name: "Plastic Bottles",
      desc: "Common beverage bottles made of PET plastic.",
      dispose: "Recycle bin (Plastic)"
    },
    {
      name: "Plastic Bags",
      desc: "Lightweight plastic used for groceries.",
      dispose: "Recycling center (soft plastic section)"
    },
    {
      name: "Newspapers",
      desc: "Old newspapers and magazines.",
      dispose: "Recycle bin (Paper)"
    },
    {
      name: "Cardboard",
      desc: "Shipping and packaging boxes.",
      dispose: "Recycle bin (Paper)"
    },
    {
      name: "Glass Jars",
      desc: "Used food containers like pickle jars.",
      dispose: "Glass-only recycling bin"
    }
  ],
  paper: [
    {
      name: "Plastic Utensils",
      desc: "Single-use plastic forks, spoons, and knives.",
      dispose: "Regular waste bin"
    },
    {
      name: "Styrofoam",
      desc: "Foam products like cups and takeout containers.",
      dispose: "Regular waste bin"
    },
    {
      name: "Tissues",
      desc: "Used tissues or paper towels.",
      dispose: "Regular waste bin"
    },
    {
      name: "Chip Bags",
      desc: "Snack bags made from multi-layered plastic.",
      dispose: "Regular waste bin"
    },
    {
      name: "Cigarette Butts",
      desc: "Used cigarette filters and remnants.",
      dispose: "Regular waste bin"
    }
  ],
  glass: [
    {
      name: "Batteries",
      desc: "Used alkaline, lithium, and rechargeable batteries.",
      dispose: "Hazardous waste disposal center"
    },
    {
      name: "Paint Cans",
      desc: "Old paint cans containing leftover paint.",
      dispose: "Hazardous waste disposal center"
    },
    {
      name: "Cleaning Products",
      desc: "Household cleaning agents with chemicals.",
      dispose: "Hazardous waste disposal center"
    },
    {
      name: "Fluorescent Light Bulbs",
      desc: "Light bulbs containing mercury vapor.",
      dispose: "Hazardous waste disposal center"
    },
    {
      name: "Pesticides",
      desc: "Unused or expired insecticides and herbicides.",
      dispose: "Hazardous waste disposal center"
    }
  ]
};

let openType = null;

function showItems(type) {
  const existingItems = document.querySelector('.items-section');
  if (existingItems) existingItems.remove();

  if (openType === type) {
    openType = null; // Same card clicked twice, so close it
    return;
  }

  const card = document.querySelector(`.waste-card.${type}`);
  const container = document.createElement("div");
  container.className = "items-section";

  const items = wasteItems[type] || [];
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <p><strong>Dispose at:</strong> ${item.dispose}</p>
    `;
    container.appendChild(div);
  });

  card.insertAdjacentElement("afterend", container);
  openType = type;
}
