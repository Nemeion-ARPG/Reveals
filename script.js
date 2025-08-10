class RandomItemRoller {
    constructor(items) {
        this.items = items;
    }

    rollMultiple(category) {
    if (this.items.length === 0) {
        return ["No items available"];
    }
    
    let itemsToUse = this.items;
    
    // Special handling for Harvestfestival category
    if (category === "harvestfestival") {
        const results = [];
        
        // Always get 1 item from harvestcorn
        const harvestcornItems = [];
        itemLists["harvestcorn"].forEach(item => {
            if (item.image && item.link) {
                for (let i = 0; i < item.weight; i++) {
                    harvestcornItems.push(item);
                }
            }
        });
        
        if (harvestcornItems.length > 0) {
            const cornIndex = Math.floor(Math.random() * harvestcornItems.length);
            results.push(harvestcornItems[cornIndex]);
        }
        
        // Get 1-2 items from harvestfestival
        const harvestfestivalItems = [];
        itemLists["harvestfestival"].forEach(item => {
            if (item.image && item.link) {
                for (let i = 0; i < item.weight; i++) {
                    harvestfestivalItems.push(item);
                }
            }
        });
        
        const festivalItemCount = Math.floor(Math.random() * 2) + 1; // 1-2 items
        for (let i = 0; i < festivalItemCount && harvestfestivalItems.length > 0; i++) {
            const festivalIndex = Math.floor(Math.random() * harvestfestivalItems.length);
            results.push(harvestfestivalItems[festivalIndex]);
        }
        
        return results;
    }
    
    const weightedItems = [];
    itemsToUse.forEach(item => {
        if (item.image && item.link) {
            for (let i = 0; i < item.weight; i++) {
                weightedItems.push(item);
            }
        }
    });
        
    const guaranteedFive = ["shipment", "breeding", "decor", "backgrounds"].includes(category);
    const itemCount = guaranteedFive ? 5 : Math.floor(Math.random() * 3) + 1;
    
    const results = [];
    for (let i = 0; i < itemCount; i++) {
        const randomIndex = Math.floor(Math.random() * weightedItems.length);
        results.push(weightedItems[randomIndex]);
    }
    return results;
    }
}

function getRandomWeightedMessage(category) {
    const messages = categoryMessages[category];

    if (!messages || messages.length === 0) {
        return "No message available.";
    }

    const weightedArray = [];
    messages.forEach(message => {
        for (let i = 0; i < message.weight; i++) {
            weightedArray.push(message.text);
        }
    });

    const randomIndex = Math.floor(Math.random() * weightedArray.length);
    return weightedArray[randomIndex];
}

function rollItem() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    const roller = new RandomItemRoller(itemLists[selectedCategory]);
    const message = getRandomWeightedMessage(selectedCategory);

    const rolledItems = roller.rollMultiple(selectedCategory)
    .map(item => `<a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.name}" style="width:100px; height:auto;"></a><br>`)
    .join("");
    
    document.getElementById("result").innerHTML = `
        <p><i>${message}</i></p>
        ${rolledItems}<p><strong>All items have been added to your vault!</strong></p>
    `;
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
  }
  
  document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown');
    const toggle = document.querySelector('.dropdown-toggle');0
  
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
  