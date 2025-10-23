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
        
    // Convert category to lowercase for consistent comparison
    const lowerCategory = category.toLowerCase();
    const guaranteedFive = ["shipment", "breeding", "decor", "backgrounds"].includes(lowerCategory);
    const guaranteedOne = ["mysterycrate", "foolsmask"].includes(lowerCategory);
    const oneTwoItems = ["trunk"].includes(lowerCategory);
    const threeToFiveItems = ["largeingredient"].includes(lowerCategory);
    const oneToFifteen = ["teethbag"].includes(lowerCategory);
    const oneToThree = ["bountifulharvest", "bagofgags", "supplycrate", "pouchofherbs"].includes(lowerCategory);

    // Handle coin sacks
    if (lowerCategory === "smallsackofcoins") {
        const coinAmount = Math.floor(Math.random() * 1001) + 1000; // 1000 to 2000
        return [{ name: "Coins", link: "#", quantity: coinAmount }];
    }
    if (lowerCategory === "largesackofcoins") {
        const coinAmount = Math.floor(Math.random() * 3001) + 2000; // 2000 to 5000
        return [{ name: "Coins", link: "#", quantity: coinAmount }];
    }
    
    // Special handling for Map
    if (lowerCategory === "map") {
        // 50% chance for coins
        if (Math.random() < 0.2) {
            return [{ name: "Coins", link: "https://www.deviantart.com/nemeionadmin/art/Coins-1255615725", quantity: 5000 }];
        } else {
            // Select one random item and give 1-15 of it
            const randomIndex = Math.floor(Math.random() * weightedItems.length);
            const selectedItem = weightedItems[randomIndex];
            const amount = Math.floor(Math.random() * 15) + 1; // 1 to 15
            const results = [];
            for (let i = 0; i < amount; i++) {
                results.push(selectedItem);
            }
            return results;
        }
    }

    const itemCount = guaranteedFive ? 5 : 
        (guaranteedOne ? 1 : 
        (oneTwoItems ? Math.floor(Math.random() * 2) + 1 : 
        (threeToFiveItems ? Math.floor(Math.random() * 3) + 3 :
        (oneToFifteen ? Math.floor(Math.random() * 15) + 1 :
        (oneToThree ? Math.floor(Math.random() * 3) + 1 :
        (twoToFive ? Math.floor(Math.random() * 4) + 2 :
        Math.floor(Math.random() * 3) + 1))))));
    
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

function tryHatchEgg() {
    // 40% chance of hatching (returns true if egg hatches)
    return Math.random() >= 0.6;
}

function getUnhatchedEggMessage(eggType) {
    const messages = [
        `The ${eggType} egg remains still and cold...`,
        `The ${eggType} egg shows no signs of hatching.`,
        `Despite your care, the ${eggType} egg doesn't hatch.`,
        `The ${eggType} egg remains dormant.`,
        `There is no movement from within the ${eggType} egg.`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function getFailedMaskMessage() {
    const messages = [
        `You put on the Feast of Fools Mask hoping to attract a feathery friend and nothing happens, better luck next time!`,
        `The Feast of Fools Mask dissolves into nothing before your eyes, leaving you empty-handed. Bummer! Better luck next time.`,
        `The Feast of Fools Mask's power fades away without effect, leaving you empty-handed. Bummer! Better luck next time.`,
        `The Feast of Fools Mask shatters into fragments that vanish into thin air, leaving you empty-handed. Bummer! Better luck next time.`,
        `The Feast of Fools Mask's magic dissipates harmlessly, leaving you empty-handed. Bummer! Better luck next time.`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function getGagMessage() {
    const messages = [
        `The bag suddenly explodes in a cloud of glitter and confetti, covering you from head to toe! Your dignity may have taken a hit, but at least you're sparkly now.`,
        `As you open the bag, a spring-loaded pie launches directly into your face. Classic! You wipe the cream from your eyes, finding nothing else in the bag.`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function rollItem() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    let itemList = itemLists[selectedCategory];
    
    // Special handling for Large Ingredient Box
    if (selectedCategory === "largeingredient") {
        itemList = itemLists["smallingredient"];
    }

    // Special handling for Bag of Gags
    if (selectedCategory === "bagofgags") {
        // 5% chance for special message with specific items
        if (Math.random() < 0.05) {
            const isGlitterMessage = Math.random() < 0.5;
            let message, items;
            if (isGlitterMessage) {
                message = "You test the weight of your x1 Bag of Gags, watching it drift up and down unnaturally. Puzzled, you pull the draw strings, only for a loud shriek to make you fling the bag away in fright! Out of the retreating bag flies a brilliant red wisp, cackling with glee and whizzing around your head.";
                items = [
                    { name: "Wisp Companion - Menacing", link: "https://www.deviantart.com/nemeionadmin/art/Wisp-Menacing-1162485536" }
                ];
            } else {
                message = "You give your x1 Bag of Gags a curious shake, listening to what sounds like multiple items rattling around within! You thrust your hand down into the bag, eager for your prize, but yelp when something clamps down on your finger! You jerk your hand out and find, dangling angrily from your finger, Jerry [the talking skull]!. He glares at you indignantly before letting go of your finger and dropping into your other hand. He clears his (non-existant) throat and somehow manages to look haughtily up at you. 'I am Jerry Von Richterstein III, the infamous Talking Skull, and how dare you put your fingers in my mouth without at least buying me dinner first! Weren't you taught proper ettiquet?'";
                items = [
                    { name: "Jerry", link: "https://www.deviantart.com/nemeionadmin/art/Jerry-the-Talking-Skull-1178226987" }
                ];
            }

            // Convert items to the display format
            const rolledItems = items.map(item => 
                `x1  &nbsp; <a href="${item.link}" target="_blank">${item.name}</a><br>`
            ).join("");

            document.getElementById("result").innerHTML = `
                <p><i>${message}</i></p>
                <br>
                ${rolledItems}
                <p><strong>All items have been added to your vault!</strong></p>
                <button onclick="copyResults()" class="copy-button">Copy Results</button>
            `;
            return;
        }
        // Otherwise continue with normal 1-3 item roll (95% chance)
        // Normal rolling will happen below since bagofgags is in oneToThree array
    }

    // Special handling for Fool's Mask
    if (selectedCategory === "foolsmask") {
        // Check if mask works (40% chance)
        if (!tryHatchEgg()) { // reusing the same 40% chance function
            // Mask didn't work
            document.getElementById("result").innerHTML = `
                ${getFailedMaskMessage()}<br>
                <p><strong>The mask has been removed from your vault.</strong></p>
                <button onclick="copyResults()" class="copy-button">Copy Results</button>
            `;
            return;
        }
    }
    
    // Special handling for Eggs category
    if (selectedCategory === "eggs") {
        const selectedEggType = document.querySelector('input[name="eggType"]:checked').value;
        
        // Check if egg hatches (40% chance)
        if (!tryHatchEgg()) {
            // Egg didn't hatch
            document.getElementById("result").innerHTML = `
                <p><i>You attempt to hatch the egg, but...</i></p>
                <br>
                ${getUnhatchedEggMessage(selectedEggType)}<br>
                <p><strong>The egg has been removed your vault.</strong></p>
                <button onclick="copyResults()" class="copy-button">Copy Results</button>
            `;
            return;
        }
        
        // Get items from the egg type category directly
        itemList = itemLists[selectedEggType];
        // Force single item for egg hatches
        const roller = new RandomItemRoller(itemList);
        const rolledResults = [roller.rollMultiple(selectedCategory)[0]]; // Get only one item
        
        // Create custom success message for egg hatching
        const message = `The ${selectedEggType} egg begins to crack and shake...`;
        
        // Convert to array of unique items with counts (keeping existing format)
        const rolledItems = Object.entries({[rolledResults[0].name]: 1})
            .map(([name, count]) => {
                const item = rolledResults[0];
                return `x${count}  &nbsp; <a href="${item.link}" target="_blank">${name}</a><br>`;
            })
            .join("");
        
        document.getElementById("result").innerHTML = `
            <p><i>${message}</i></p>
            <br>
            ${rolledItems}<p><strong>The creature has been added to your vault!</strong></p>
            <button onclick="copyResults()" class="copy-button">Copy Results</button>
        `;
        return;
    }
    
    const roller = new RandomItemRoller(itemList);
    const message = getRandomWeightedMessage(selectedCategory);

    // Get all rolled items first
    const rolledResults = roller.rollMultiple(selectedCategory);

    // Count duplicate items and handle special quantity items
    const itemCounts = {};
    rolledResults.forEach(item => {
        if (item.quantity) {
            // For items with specific quantities (like coins)
            itemCounts[item.name] = item.quantity;
        } else {
            // For regular items with duplicate counting
            itemCounts[item.name] = (itemCounts[item.name] || 0) + 1;
        }
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

// Update category display when a radio button is clicked
document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const label = this.parentElement.textContent.trim();
        document.getElementById('selectedCategory').textContent = 'Currently Selected: ' + label;
        
        // Show/hide egg subcategory based on selection
        const eggsSubcategory = document.getElementById('eggsSubcategory');
        const selectedEggType = document.getElementById('selectedEggType');
        if (this.value === 'eggs') {
            eggsSubcategory.style.display = 'inline-block';
            selectedEggType.style.display = 'block';
        } else {
            eggsSubcategory.style.display = 'none';
            selectedEggType.style.display = 'none';
        }
    });
});

// Handle egg type selection
document.querySelectorAll('input[name="eggType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const label = this.parentElement.textContent.trim();
        document.getElementById('selectedEggType').textContent = 'Selected Egg Type: ' + label;
    });
});

function toggleEggsDropdown() {
    const dropdown = document.getElementById('eggsDropdownMenu');
    const parent = dropdown.parentElement;
    parent.classList.toggle('show');
    event.stopPropagation();
}

function resetRoller() {
    document.getElementById('result').innerHTML = '';
    // Reset radio button selection to the first option (backgrounds)
    const firstRadio = document.querySelector('input[type="radio"]');
    if (firstRadio) {
        firstRadio.checked = true;
        // Update the category display text
        const label = firstRadio.parentElement.textContent.trim();
        document.getElementById('selectedCategory').textContent = 'Currently Selected: ' + label;
    }
    // Hide egg subcategory
    document.getElementById('eggsSubcategory').style.display = 'none';
    document.getElementById('selectedEggType').style.display = 'none';
    // Reset egg type selection
    const firstEggType = document.querySelector('input[name="eggType"]');
    if (firstEggType) {
        firstEggType.checked = true;
    }
}

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
  