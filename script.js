class RandomItemRoller {
    constructor(items) {
        this.items = items;
    }

    rollMultiple(category) {
        if (this.items.length === 0) {
            return ["No items available"];
        }
        
        const weightedItems = [];
    this.items.forEach(item => {
        if (item.image && item.link) { // Ensure items have valid properties
            for (let i = 0; i < item.weight; i++) {
                weightedItems.push(item);
            }
        }
    });
        
        const guaranteedFive = ["shipment", "breeding", "decor", "backgrounds"].includes(category);
        const itemCount = guaranteedFive ? 5 : Math.floor(Math.random() * 3) + 1; // 5 for selected categories, 1-3 for others
        
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
  