const wasteItems = {
  yellow: [
    {
      name: "Used Bandages",
      desc: "Bandages contaminated with blood or bodily fluids.",
      dispose: "Yellow Bin - Infectious Waste"
    },
    {
      name: "Syringes",
      desc: "Used needles and syringes from medical use.",
      dispose: "Yellow Bin - Sharps container inside"
    },
    {
      name: "Surgical Gloves",
      desc: "Contaminated gloves used in medical procedures.",
      dispose: "Yellow Bin - Infectious Waste"
    },
    {
      name: "Cotton Swabs",
      desc: "Used cotton swabs with blood or discharge.",
      dispose: "Yellow Bin - Infectious Waste"
    },
    {
      name: "IV Tubes",
      desc: "Used tubes from medical drips.",
      dispose: "Yellow Bin - Infectious Waste"
    }
  ],
  black: [
    {
      name: "Sanitary Pads",
      desc: "Used feminine hygiene products.",
      dispose: "Black Bin - Residual Waste"
    },
    {
      name: "Used Tissues",
      desc: "Dirty tissues and napkins.",
      dispose: "Black Bin - Residual Waste"
    },
    {
      name: "Disposable Diapers",
      desc: "Used baby diapers or adult diapers.",
      dispose: "Black Bin - Residual Waste"
    },
    {
      name: "Cigarette Butts",
      desc: "Leftover cigarette filters.",
      dispose: "Black Bin - Residual Waste"
    },
    {
      name: "Broken Ceramics",
      desc: "Shattered mugs or ceramic plates.",
      dispose: "Black Bin - Residual Waste"
    }
  ],
  green: [
    {
      name: "Fruit Peels",
      desc: "Organic waste like banana and orange peels.",
      dispose: "Green Bin - Biodegradable Waste"
    },
    {
      name: "Vegetable Scraps",
      desc: "Kitchen leftovers like carrot or onion skins.",
      dispose: "Green Bin - Biodegradable Waste"
    },
    {
      name: "Eggshells",
      desc: "Cracked eggshells from cooking.",
      dispose: "Green Bin - Biodegradable Waste"
    },
    {
      name: "Coffee Grounds",
      desc: "Leftover coffee powder from brewing.",
      dispose: "Green Bin - Biodegradable Waste"
    },
    {
      name: "Leaves",
      desc: "Dry or fallen leaves from plants.",
      dispose: "Green Bin - Biodegradable Waste"
    }
  ],
  blue: [
    {
      name: "Plastic Bottles",
      desc: "Water and soda bottles made of PET plastic.",
      dispose: "Blue Bin - Recyclable Waste"
    },
    {
      name: "Paper",
      desc: "Clean paper sheets or old documents.",
      dispose: "Blue Bin - Recyclable Waste"
    },
    {
      name: "Cardboard",
      desc: "Flattened boxes from packaging.",
      dispose: "Blue Bin - Recyclable Waste"
    },
    {
      name: "Metal Cans",
      desc: "Used soda and food cans.",
      dispose: "Blue Bin - Recyclable Waste"
    },
    {
      name: "Glass Bottles",
      desc: "Unbroken glass jars and bottles.",
      dispose: "Blue Bin - Recyclable Waste"
    }
  ]
};

let openType = null;

function showItems(type) {
  const existingItems = document.querySelector('.items-section');
  if (existingItems) existingItems.remove();

  if (openType === type) {
    openType = null;
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
