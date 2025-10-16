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
    
    // Always get 2 items from harvestcorn
    const harvestcornItems = [];
    itemLists["harvestcorn"].forEach(item => {
        if (item.name && item.link) {
            for (let i = 0; i < item.weight; i++) {
                harvestcornItems.push(item);
            }
        }
    });
    
    for (let i = 0; i < 2 && harvestcornItems.length > 0; i++) {
        const cornIndex = Math.floor(Math.random() * harvestcornItems.length);
        results.push(harvestcornItems[cornIndex]);
    }
    
    // Get 1-2 items from harvestfestival
    const harvestfestivalItems = [];
    itemLists["harvestfestival"].forEach(item => {
        if (item.name && item.link) {
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
        if (item.name && item.link) {
            for (let i = 0; i < item.weight; i++) {
                weightedItems.push(item);
            }
        }
    });
        
    const guaranteedFive = ["shipment", "breeding", "decor", "backgrounds"].includes(category);
    const guaranteedOne = ["mysterycrate"].includes(category);
    const oneTwoItems = ["trunk"].includes(category);
    const itemCount = guaranteedFive ? 5 : (guaranteedOne ? 1 : (oneTwoItems ? Math.floor(Math.random() * 2) + 1 : Math.floor(Math.random() * 3) + 1));
    
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

    // Get all rolled items first
    const rolledResults = roller.rollMultiple(selectedCategory);

    // Count duplicate items
    const itemCounts = {};
    rolledResults.forEach(item => {
        itemCounts[item.name] = (itemCounts[item.name] || 0) + 1;
    });

    // Convert to array of unique items with counts
    const rolledItems = Object.entries(itemCounts)
        .map(([name, count]) => {
            const item = rolledResults.find(i => i.name === name);
            return `x${count}  &nbsp; <a href="${item.link}" target="_blank">${name}</a><br>`;
        })
        .join("");
    
    document.getElementById("result").innerHTML = `
        <p><i>${message}</i></p>
        <br>
        ${rolledItems}<p><strong>All items have been added to your vault!</strong></p>
        <button onclick="copyResults()" class="copy-button">Copy Results</button>
    `;
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
  }
  
  document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown');
    const toggle = document.querySelector('.dropdown-toggle');
  
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });

function copyResults() {
    const resultDiv = document.getElementById("result");
    
    // Create a temporary element for rich text selection
    const range = document.createRange();
    range.selectNode(resultDiv);
    
    // Remove the button from the selection
    const button = resultDiv.querySelector('.copy-button');
    if (button) {
        button.style.display = 'none';
    }
    
    // Copy with formatting
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
        document.execCommand('copy');
        const copyButton = resultDiv.querySelector('.copy-button');
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
    
    // Clean up
    window.getSelection().removeAllRanges();
    if (button) {
        button.style.display = '';
    }
}
  