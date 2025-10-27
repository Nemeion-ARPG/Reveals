function handleMysteriousPotion() {
    // Get the potion description if provided
    const potionDescription = document.getElementById('potionDescription').value;
    const descriptionText = potionDescription ? `<b>${potionDescription}</b> ` : '';
    
    // Get a random response using the weighting system
    const weightedArray = [];
    if (!window.mysteriousPotionResponses) {
        console.error('mysteriousPotionResponses not found');
        return 'Error: Could not load responses. Please refresh the page.';
    }
    window.mysteriousPotionResponses.forEach(response => {
        for (let i = 0; i < response.weight; i++) {
            weightedArray.push(response);
        }
    });

    const randomIndex = Math.floor(Math.random() * weightedArray.length);
    const selectedResponse = weightedArray[randomIndex];

    // Format the items if they exist
    let itemsHtml = '';
    if (selectedResponse.items && selectedResponse.items.length > 0) {
        let itemsToShow = selectedResponse.items;
        
        // If this response requires random selection(s)
        if (selectedResponse.randomChoice && selectedResponse.items.length > 1) {
            // Single random choice
            const randomItemIndex = Math.floor(Math.random() * selectedResponse.items.length);
            itemsToShow = [selectedResponse.items[randomItemIndex]];
        } else if (selectedResponse.randomMultipleChoice && selectedResponse.items.length > 0) {
            // Multiple random choices
            const count = Math.floor(Math.random() * (selectedResponse.itemCount.max - selectedResponse.itemCount.min + 1)) + selectedResponse.itemCount.min;
            const availableItems = [...selectedResponse.items];
            itemsToShow = [];
            
            // Select 'count' number of random unique items
            for (let i = 0; i < count && availableItems.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * availableItems.length);
                itemsToShow.push(availableItems[randomIndex]);
                availableItems.splice(randomIndex, 1); // Remove the selected item to avoid duplicates
            }
        }
        
        // Add any guaranteed items
        if (selectedResponse.guaranteedItems) {
            itemsToShow = [...selectedResponse.guaranteedItems, ...itemsToShow];
        }
        
        itemsHtml = itemsToShow.map(item => {
            let quantity = item.quantity;

            // If quantity is 125, generate a random number between 1 and 5
            if (quantity === 125) {
                quantity = Math.floor(Math.random() * 5) + 1;
            }
            else if (quantity === 123) {
                quantity = Math.floor(Math.random() * 3) + 1;
            }
            else if (quantity === 122) {
                quantity = Math.floor(Math.random() * 2) + 1;
            }
            else if (quantity === 1000210000) {
                quantity = Math.floor(Math.random() * 10000) + 1000;
            }
            else if (quantity === 50022500) {
                quantity = Math.floor(Math.random() * 2500) + 500;
            }
            return `x${quantity}  &nbsp; <a href="${item.link}" target="_blank">${item.name}</a><br>`;
        }).join('');
    }

    // Return the formatted result
    // Get the response text and handle any special replacements
    let responseText = selectedResponse.text;

    // If this is a feral encounter (prompt 37), randomly select a feral description
    if (responseText.includes('[FERAL]') && window.feralOptions) {
        const randomFeralIndex = Math.floor(Math.random() * window.feralOptions.length);
        const selectedFeral = window.feralOptions[randomFeralIndex];
        // Create a linked feral description
        const feralLink = `<a href="${selectedFeral.link}" target="_blank">${selectedFeral.description}</a>`;
        responseText = responseText.replace('[FERAL]', feralLink);
    }

    // Replace description placeholder and format text
    responseText = responseText.replaceAll('{description}', descriptionText);
    responseText = responseText.replace(/\[(.*?)\]/g, '<b>$1</b>');

    return `
        <p><i>${responseText}</i></p>
        <br>
        ${itemsHtml}
        <p><strong>The mysterious potion has been consumed and any applicable items have been added to your vault!</strong></p>
        <button onclick="copyResults()" class="copy-button">Copy Results</button>
    `;
}
