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

function rollItem() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    const roller = new RandomItemRoller(itemLists[selectedCategory]);
    const message = categoryMessages[selectedCategory] || ""; // Ensure the predetermined message is used

    const rolledItems = roller.rollMultiple(selectedCategory).map(item => `<li>${item}</li>`).join("");
    
    document.getElementById("result").innerHTML = `
        <p><strong>${message}</strong></p>
        <ul style="display: inline-block; text-align: left;">
            ${rolledItems}
        </ul>
        <p><strong>All items have been added to your vault!</strong></p>
    `;
}
