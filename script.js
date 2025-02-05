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

    const rolledItems = roller.rollMultiple(selectedCategory).map(item => `<li>${item}</li>`).join("");
    
    document.getElementById("result").innerHTML = `
        <p><strong>Purchased!</strong></p><br>
        <p><i>${message}</i></p>
        <ul class="no-bullets">
            ${rolledItems}
        </ul>
        <p><strong>All items have been added to your vault!</strong></p>
    `;
}
