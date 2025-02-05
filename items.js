const itemLists = {
    common: [
        { name: "Sword", image: "https://www.nemeionarpg.com/files/Images/little-letter.png", link: "https://example.com/sword", weight: 10 },
        { name: "Bow", image: "https://www.nemeionarpg.com/files/Images/little-letter.png", link: "https://example.com/sword", weight: 10 },
        { name: "Dagger", image: "https://www.nemeionarpg.com/files/Images/little-letter.png", link: "https://example.com/sword", weight: 15 },
        { name: "Axe", image: "https://www.nemeionarpg.com/files/Images/little-letter.png", link: "https://example.com/sword", weight: 8 },
        { name: "Lance", image: "https://www.nemeionarpg.com/files/Images/little-letter.png", link: "https://example.com/sword", weight: 12 }
    ],
    rare: [
        { name: "Helmet", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Chestplate", image: "sword.png", link: "https://example.com/sword", weight: 5 },
        { name: "Boots", image: "sword.png", link: "https://example.com/sword", weight: 8 },
        { name: "Shield", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Gauntlets", image: "sword.png", link: "https://example.com/sword", weight: 7 }
    ],
    legendary: [
        { name: "Health Potion", image: "sword.png", link: "https://example.com/sword", weight: 25 },
        { name: "Mana Potion", image: "sword.png", link: "https://example.com/sword", weight: 20 },
        { name: "Stamina Potion", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Antidote", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Elixir", image: "sword.png", link: "https://example.com/sword", weight: 30 }
    ],
    scrolls: [
        { name: "Ring", image: "sword.png", link: "https://example.com/sword", weight: 35 },
        { name: "Amulet", image: "sword.png", link: "https://example.com/sword", weight: 20 },
        { name: "Bracelet", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Charm", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Belt", image: "sword.png", link: "https://example.com/sword", weight: 5 }
    ],
    mystical: [
        { name: "Mystic Orb", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Ethereal Cloak", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Crystal Staff", image: "sword.png", link: "https://example.com/sword", weight: 12 },
        { name: "Phantom Dagger", image: "sword.png", link: "https://example.com/sword", weight: 8 },
        { name: "Soul Pendant", image: "sword.png", link: "https://example.com/sword", weight: 20 }
    ],
    arcane: [
        { name: "Arcane Tome", image: "sword.png", link: "https://example.com/sword", weight: 18 },
        { name: "Sorcerer's Wand", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Mana Gem", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Runed Ring", image: "sword.png", link: "https://example.com/sword", weight: 12 },
        { name: "Spellbound Amulet", image: "sword.png", link: "https://example.com/sword", weight: 8 }
    ],
    divine: [
        { name: "Holy Sword", image: "sword.png", link: "https://example.com/sword", weight: 12 },
        { name: "Blessed Armor", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Sacred Chalice", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Celestial Staff", image: "sword.png", link: "https://example.com/sword", weight: 18 },
        { name: "Divine Talisman", image: "sword.png", link: "https://example.com/sword", weight: 10 }
    ],
    cursed: [
        { name: "Cursed Blade", image: "sword.png", link: "https://example.com/sword", weight: 20 },
        { name: "Haunted Pendant", image: "sword.png", link: "https://example.com/sword", weight: 12 },
        { name: "Dark Grimoire", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Wraith Cloak", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Shadow Ring", image: "sword.png", link: "https://example.com/sword", weight: 8 }
    ],
    ancient: [
        { name: "Ancient Relic", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Timeworn Scroll", image: "sword.png", link: "https://example.com/sword", weight: 12 },
        { name: "Forgotten Helm", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Ruined Blade", image: "sword.png", link: "https://example.com/sword", weight: 8 },
        { name: "Elder Pendant", image: "sword.png", link: "https://example.com/sword", weight: 20 }
    ],
    enchanted: [
        { name: "Enchanted Necklace", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Mystic Scroll", image: "sword.png", link: "https://example.com/sword", weight: 18 },
        { name: "Magic Boots", image: "sword.png", link: "https://example.com/sword", weight: 12 },
        { name: "Eldritch Ring", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Warding Charm", image: "sword.png", link: "https://example.com/sword", weight: 10 }
    ],
    shadow: [
        { name: "Shadow Dagger", image: "sword.png", link: "https://example.com/sword", weight: 20 },
        { name: "Night Cloak", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Dark Crystal", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Phantom Band", image: "sword.png", link: "https://example.com/sword", weight: 12 },
        { name: "Void Amulet", image: "sword.png", link: "https://example.com/sword", weight: 8 }
    ],
    elemental: [
        { name: "Flame Sword", image: "sword.png", link: "https://example.com/sword", weight: 15 },
        { name: "Ice Staff", image: "sword.png", link: "https://example.com/sword", weight: 12 },
        { name: "Storm Orb", image: "sword.png", link: "https://example.com/sword", weight: 18 },
        { name: "Earthen Shield", image: "sword.png", link: "https://example.com/sword", weight: 10 },
        { name: "Tidal Pendant", image: "sword.png", link: "https://example.com/sword", weight: 8 }
    ]
};
