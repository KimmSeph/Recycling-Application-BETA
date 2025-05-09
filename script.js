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
      }
    ],
    paper: [
      {
        name: "Newspapers",
        desc: "Old newspapers and magazines.",
        dispose: "Recycle bin (Paper)"
      },
      {
        name: "Cardboard",
        desc: "Shipping and packaging boxes.",
        dispose: "Recycle bin (Paper)"
      }
    ],
    glass: [
      {
        name: "Glass Jars",
        desc: "Used food containers like pickle jars.",
        dispose: "Glass-only recycling bin"
      },
      {
        name: "Wine Bottles",
        desc: "Empty beverage containers.",
        dispose: "Glass-only recycling bin"
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
  
