class RandomItemRoller {
    constructor(items) {
        this.items = items;
    }

    rollMultiple(count) {
        if (this.items.length === 0) {
            return ["No items available"];
        }
        
        const weightedItems = [];
        this.items.forEach(item => {
            for (let i = 0; i < item.weight; i++) {
                weightedItems.push(item.name);
            }
        });
        
        const results = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * weightedItems.length);
            results.push(weightedItems[randomIndex]);
        }
        return results;
    }
}

function rollItem() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    const roller = new RandomItemRoller(itemLists[selectedCategory]);
    const message = categoryMessages[selectedCategory];
    
    const rolledItems = roller.rollMultiple(5).join(", ");
    document.getElementById("result").innerHTML = `<p><strong>${message}</strong></p><p>Rolled items: ${rolledItems}</p><p><strong>All items have been added to your vault!</strong></p>`;
}