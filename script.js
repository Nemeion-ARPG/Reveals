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
            for (let i = 0; i < item.weight; i++) {
                weightedItems.push(item.name);
            }
        });
        
        const guaranteedFive = ["common", "rare", "legendary", "scrolls"].includes(category);
        const itemCount = guaranteedFive ? 5 : Math.floor(Math.random() * 5) + 1; // 5 for selected categories, 1-5 for others
        
        const results = [];
        for (let i = 0; i < itemCount; i++) {
            const randomIndex = Math.floor(Math.random() * weightedItems.length);
            results.push(weightedItems[randomIndex]);
        }
        return results;
    }
}

function getWeightedRandomMessage(category) {
    const messages = categoryMessages[category];

    if (!messages || messages.length === 0) return "No message available.";

    // Create weighted message pool
    let weightedPool = [];
    messages.forEach(message => {
        for (let i = 0; i < message.weight; i++) {
            weightedPool.push(message.text);
        }
    });

    // Select a random message from the weighted pool
    const randomIndex = Math.floor(Math.random() * weightedPool.length);
    return weightedPool[randomIndex];
}

function rollItem() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    const roller = new RandomItemRoller(itemLists[selectedCategory]);
    const messages = categoryMessages[selectedCategory];
    const message = messages ? messages[Math.floor(Math.random() * messages.length)] : "";

    const rolledItems = roller.rollMultiple(selectedCategory)
        .map(item => `<a href="#"><img src="images/${item.name.toLowerCase().replace(/\s+/g, '-')}.png" class="item-image" alt="${item.name}"></a> `)
        .join("");
    
    document.getElementById("result").innerHTML = `
        <p><strong>${message}</strong></p>
        <div>${rolledItems}</div>
        <p><strong>All items have been added to your vault!</strong></p>
    `;
}
