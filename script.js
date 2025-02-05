class RandomItemRoller {
    constructor(items) {
        this.items = items;
    }

    rollMultiple(category) {
        if (!this.items || this.items.length === 0) {
            console.error("No items found in category:", category);
            return [{ name: "No items available", image: "images/no-image.png" }];
        }
    
        const weightedItems = [];
        this.items.forEach(item => {
            for (let i = 0; i < item.weight; i++) {
                weightedItems.push(item);
            }
        });
    
        const guaranteedFive = ["common", "rare", "legendary", "scrolls"].includes(category);
        const itemCount = guaranteedFive ? 5 : Math.floor(Math.random() * 5) + 1;
    
        const results = [];
        for (let i = 0; i < itemCount; i++) {
            const randomIndex = Math.floor(Math.random() * weightedItems.length);
            results.push(weightedItems[randomIndex]);
        }
        return results;
    }
    

function rollItem() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    const roller = new RandomItemRoller(itemLists[selectedCategory]);
    if (!itemLists[selectedCategory]) {
        console.error("Invalid category selected: ", selectedCategory);
        return;
    }

    const messages = categoryMessages[selectedCategory];
    const message = messages ? messages[Math.floor(Math.random() * messages.length)] : "";

    const rolledItems = roller.rollMultiple(selectedCategory)
        .map(item => `<a href="#"><img src="${item.image}" class="item-image" alt="${item.name}"></a>`)
        .join(" ");
    
    document.getElementById("result").innerHTML = `
        <p><strong>${message}</strong></p>
        <div>${rolledItems}</div>
        <p><strong>All items have been added to your vault!</strong></p>
    `;
}
