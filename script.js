class RandomItemRoller {
    constructor(items) {
        this.items = items;
    }

    roll() {
        if (this.items.length === 0) {
            return "No items available";
        }
        
        const weightedItems = [];
        this.items.forEach(item => {
            for (let i = 0; i < item.weight; i++) {
                weightedItems.push(item.name);
            }
        });
        
        const randomIndex = Math.floor(Math.random() * weightedItems.length);
        return weightedItems[randomIndex];
    }
}

function rollItem() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    const roller = new RandomItemRoller(itemLists[selectedCategory]);
    document.getElementById("result").textContent = "Rolled item: " + roller.roll();
}
