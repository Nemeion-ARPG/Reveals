// Mysterious Potion responses
const mysteriousPotionResponses = [
    { //Prompt 1
        text: "{description} drains the bottle and looks around, but nothing happens. Frustrated, they swirl the empty bottle around and hear a little tinkling noise. There's something inside! They tilt the bottle and peer down the neck to find...",
        weight: 1,
        randomChoice: true,
        items: [
            { name: "Teeth", link: "https://www.deviantart.com/nemeionadmin/art/Teeth-857006414", quantity: 122 },
            { name: "Doubloons", link: "https://www.deviantart.com/nemeionadmin/art/Fool-s-Doubloon-1037696568", quantity: 122 },
            { name: "Coins", link: "https://www.deviantart.com/nemeionadmin/art/Coins-1255615725", quantity: 50022500 },
            { name: "Medal of Honor", link: "https://www.deviantart.com/nemeionadmin/art/Coins-1255615725", quantity: 123 }
        ]
    },
    { //Prompt 2
        text: "The bottle glitters in the sun as {description} peers into it. The liquid inside is crystal clear! They eagerly pull the stopper and swallow the potion, only for… nothing to happen. It was just water! Someone must have poured it out and refilled it. Oh well, at least they get to keep the bottle?",
        weight: 1,
        items: [
            { name: "Glass Bottle", link: "https://www.deviantart.com/nemeionadmin/art/Glass-Bottle-862974216", quantity: 1 }
        ]
    },
    { //Prompt 3
        text: "{description} slurps up the potion greedily and suddenly feels very, very strange. Prismatic colors flash across their vision and they feel out of their own body as you wander beyond the city. A few hours later they wake up on the forest floor, covered head to toe in mud and surrounded by Mushrooms.",
        weight: 1,
        randomChoice: true,
        items: [
            { name: "Brown Mushrooms", link: "https://www.deviantart.com/nemeionadmin/art/Brown-Mushrooms-937795581", quantity: 123 },
            { name: "Honey Mushrooms", link: "https://www.deviantart.com/nemeionadmin/art/Honey-Mushrooms-893646595", quantity: 123 },
            { name: "Portabello Mushrooms", link: "https://www.deviantart.com/nemeionadmin/art/Portobello-Mushrooms-1172583362", quantity: 123 },
            { name: "Telesphorus Cap", link: "https://www.deviantart.com/nemeionadmin/art/Telesphorus-Cap-1213669976", quantity: 1 },
            { name: "Redcap Mushroom", link: "https://www.deviantart.com/nemeionadmin/art/Redcap-Mushroom-990295607", quantity: 123 }
        ]
    },
    { //Prompt 4
        text: "An orphan approaches {description} and asks for the potion. Confused, they hand over their Mysterious Potion much to the orphans delight! They have seen fit to gift {description} their favorite pet rock which turns out to be a Chunk of Gold with a charcoal face crudely drawn on!",
        weight: 1,
        items: [
            { name: "Chunk of Gold", link: "https://www.deviantart.com/nemeionadmin/art/Chunk-of-Gold-893641299", quantity: 1 }
        ]
    },
    { //Prompt 5
        text: "{description} wanders the local library as they drink the potion, peering at the books on the shelves. As they finish the bottle, something catches their eye! A tiny book hidden on a high shelf, illuminated by a beam of light, as if destined to be theirs! They reach up and pluck it from its place, flipping it open eagerly, only to find some very… questionable content within, clearly written by a 'budding author'. They shrug and glance around before putting the Book in their bag.",
        weight: 1,
        items: [
            { name: "Trait Tome", link: "https://www.deviantart.com/nemeionadmin/art/Trait-Tome-1149003056", quantity: 1 }
        ]
    },
    { //Prompt 6
        text: "{description}, the mascot of bad choices, chugs the potion and becomes absolutely enraged! Their victim of the day is a local soldier on break in an alleyway. They give him quite the thrashing and, once he’s knocked out, relieve him of his Armor. The centurions may find them later, but for now you’re well protected! You have received:",
        weight: 1,
        items: [
            { name: "Roman Armor", link: "https://www.deviantart.com/nemeionadmin/art/Roman-Armor-1171961791", quantity: 1 }
        ]
    },
    { //Prompt 7
        text: "{description} tries to drink the potion, but receives a very nasty pinch to the lips instead! Upon smashing the bottle, they find some crabs hiding inside the bottle! They now have crabs!",
        weight: 1,
        items: [
            { name: "Crab", link: "https://www.deviantart.com/nemeionadmin/art/Crab-1167340587", quantity: 123 }
        ]
    },
    { //Prompt 8
        text: "{description} knocks back the potion, excited to see what happens, only to gag and retch when they realize they have swallowed an entire bottle of pickling vinegar! They drop the bottle in their panic and it smashes, revealing…",
        weight: 1,
        randomChoice: true,
        items: [
            { name: "Strange Egg", link: "https://www.deviantart.com/nemeionadmin/art/Strange-Egg-1048406877", quantity: 1 },
            { name: "Frog Spawn", link: "https://www.deviantart.com/nemeionadmin/art/Frog-Spawn-1149004787", quantity: 1 },
            { name: "Peculiar Egg", link: "https://www.deviantart.com/nemeionadmin/art/Peculiar-Egg-1162906826", quantity: 1 },
            { name: "Hefty Egg", link: "https://www.deviantart.com/nemeionadmin/art/Hefty-Egg-1162907350", quantity: 1 },
            { name: "Curious Eggs", link: "https://www.deviantart.com/nemeionadmin/art/Curious-Eggs-1162907685", quantity: 1 },
            { name: "Unusual Egg", link: "https://www.deviantart.com/nemeionadmin/art/Unusual-Egg-1162913333", quantity: 1 },
            { name: "Spotted Egg", link: "https://www.deviantart.com/nemeionadmin/art/Spotted-Eggs-1162916632", quantity: 1 },
            { name: "Quivering Egg", link: "https://www.deviantart.com/nemeionadmin/art/Quivering-Egg-1187466873", quantity: 1 }
        ]
    },
    { //Prompt 9
        text: "As {description} sits down to drink the potion, something lumpy pokes them in the backside, causing them to drop the potion and have it shatter on the ground! They jump back to their feet and turn around to spot a shiny red gem on the seat and a sore bum.",
        weight: 1,
        items: [
            { name: "Rhodochrosite", link: "https://www.deviantart.com/nemeionadmin/art/Rhodochrosite-937796180", quantity: 1 }
        ]
    },
    { //Prompt 10
        text: "{description} raises the bottle to drink the potion, but something chunky flows into their mouth. They gag and bite down, only to crunch on something very hard. They quickly spit out the mystery objects and find a glittery stone and a tooth in their paw. They should get that checked out...",
        weight: 1,
        randomChoice: true,
        guaranteedItems: [
            { name: "Teeth", link: "https://www.deviantart.com/nemeionadmin/art/Teeth-857006414", quantity: 1 }
        ],
        items: [
            { name: "Fire Agate", link: "https://www.deviantart.com/nemeionadmin/art/Fire-Agate-990297709", quantity: 1 },
            { name: "Topaz", link: "https://www.deviantart.com/nemeionadmin/art/Topaz-990295373", quantity: 1 },
            { name: "Cluster of Gems", link: "https://www.deviantart.com/nemeionadmin/art/Cluster-of-Gems-990299363", quantity: 1 },
            { name: "Peridot", link: "https://www.deviantart.com/nemeionadmin/art/Peridot-1048421851", quantity: 1 },
            { name: "Chunk of Unakite", link: "https://www.deviantart.com/nemeionadmin/art/Chunk-of-Unakite-990298579", quantity: 1 },
            { name: "Moonstone", link: "https://www.deviantart.com/nemeionadmin/art/Moonstone-1172355874", quantity: 1 },
            { name: "Star Ruby", link: "https://www.deviantart.com/nemeionadmin/art/Star-Ruby-869944706", quantity: 1 },
            { name: "Sapphire", link: "https://www.deviantart.com/nemeionadmin/art/Sapphire-869944524", quantity: 1 },
            { name: "Ruby", link: "https://www.deviantart.com/nemeionadmin/art/Ruby-869944435", quantity: 1 },
            { name: "Diamond", link: "https://www.deviantart.com/nemeionadmin/art/Diamond-893642549", quantity: 1 },
            { name: "Tiger's Eye", link: "https://www.deviantart.com/nemeionadmin/art/Tiger-s-Eye-869944883", quantity: 1 },
            { name: "Yellow Crystal", link: "https://www.deviantart.com/nemeionadmin/art/Yellow-Crystal-893785808", quantity: 1 },
            { name: "Red Crystal", link: "https://www.deviantart.com/nemeionadmin/art/Red-Crystal-893647621", quantity: 1 },
            { name: "Emerald", link: "https://www.deviantart.com/nemeionadmin/art/Emerald-893642927", quantity: 1 },
            { name: "Blue Crystal", link: "https://www.deviantart.com/nemeionadmin/art/Blue-Crystal-893640417", quantity: 1 },
            { name: "Amber", link: "https://www.deviantart.com/nemeionadmin/art/Amber-893639260", quantity: 1 },
            { name: "Blue Geode", link: "https://www.deviantart.com/nemeionadmin/art/Blue-Geode-893799887", quantity: 1 },
            { name: "Purple Geode", link: "https://www.deviantart.com/nemeionadmin/art/Purple-Geode-893799912", quantity: 1 },
            { name: "Rhodochrosite", link: "https://www.deviantart.com/nemeionadmin/art/Rhodochrosite-937796180", quantity: 1 },
            { name: "Jade", link: "https://www.deviantart.com/nemeionadmin/art/Jade-937797148", quantity: 1 },
            { name: "Shard of Ra", link: "https://www.deviantart.com/nemeionadmin/art/Shard-of-Ra-1213668544", quantity: 1 },
            { name: "Chunk of Azurite", link: "https://www.deviantart.com/nemeionadmin/art/Chunk-of-Azurite-990298338", quantity: 1 }
        ]
    },
    { //Prompt 11
        text: "{description} chugs the potion like a true son of Dionysus, and like a true son of Dionysus, they promptly throw up! What remains on the ground, however, is a strange, sticky green ball, bubbles popping along its surface. They gag at the thought, but still bend down and scoop it back up into the bottle, who knows it might be useful.",
        weight: 1,
        items: [
            { name: "Blistering Bile", link: "https://www.deviantart.com/nemeionadmin/art/Blistering-Bile-1137290581", quantity: 1 }
        ]
    },
    { //Prompt 12
        text: "{description}'s scalp explodes in agony as soon as the bitter tasting liquid slides down their throat! They hurl the bottle away and reach up to grab their pounding head, only to find a large pair of horns jutting out of their fur! In a panic, they sprint to the local doctor to have them removed! After a few grueling hours and a questionably large amount of alcohol, they leave with a sore head and a keepsake pair of Horns for their unusual experience.",
        weight: 1,
        items: [
            { name: "Satyr Horns", link: "https://www.deviantart.com/nemeionadmin/art/Satyr-Horns-862974711", quantity: 1 }
        ]
    },
    { //Prompt 13
        text: "{description} raises the bottle to their lips and takes a taste, only to sputter and spit it out onto the floor. Black liquid splatters across the cobblestones! They peek into the bottle just in time for a tiny tentacle to reach out and slap them on the face. A very perturbed looking squid waves its arms threateningly from within!",
        weight: 1,
        items: [
            { name: "Squid", link: "https://www.deviantart.com/nemeionadmin/art/Squid-1167341967", quantity: 1 },
            { name: "Ink", link: "https://www.deviantart.com/nemeionadmin/art/Ink-893645160", quantity: 1 }
        ]
    },
    { //Prompt 14
        text: "{description} downs the potion eagerly, only to immediately fall on their back as the effects take over. They’ve never felt so drunk! As everything fades to black, they hear a strange flapping sound… Their eyes snap open as air rushes all around them. They nearly choke with fright as they look up to see that they're being carried away by a harpy! The creature is singing softly to itself, something about finally finding a mate? They aren’t sure how they are going to get out of this one…",
        weight: 1,
        items: [
            { name: "Harpy Companion", link: "https://www.deviantart.com/nemeionadmin/art/Harpy-Red-Throat-1161344630", quantity: 1 }
        ]
    },
    { //Prompt 15
        text: "{description} downs the potion eagerly, only to immediately fall on their back as the effects take over. They’ve never felt so drunk! As everything fades to black, they hear a strange flapping sound… They awaken from their drunken escapades and find themselves laying like a ragdoll in a massive nest. A harpy stands above them, serenading them with what they can only assume is a very poor rendition of a local love song. As the harpy distracts itself with high notes, they take their chance and run for it! On your way to safety, however, they do manage to sneak a souvenir!",
        weight: 1,
        items: [
            { name: "Peculiar Egg", link: "https://www.deviantart.com/nemeionadmin/art/Peculiar-Egg-1162906826", quantity: 1 }
        ]
    },
    { //Prompt 16
        text: "{description} groans in confusion as they sit up. That potion must have knocked them out! They look down at themself and gasp. They’re covered head-to-toe in honey and feathers! It’s going to take ages to get all of this off!",
        weight: 1,
        items: [
            { name: "Feathers", link: "https://www.deviantart.com/nemeionadmin/art/Feathers-862973997", quantity: 1 },
            { name: "Apollo's Feather", link: "https://www.deviantart.com/nemeionadmin/art/Apollo-s-Feather-990294160", quantity: 1 },
            { name: "Honey", link: "https://www.deviantart.com/nemeionadmin/art/Honey-1172350113", quantity: 1 }
        ]
    },
    { //Prompt 17
        text: "The potion makes {description}'s brain tingle, as if it’s skittering around inside their skull! In a rush of inspiration, they grab the nearest parchment and quill and begin to write! At the end of the potion’s effects, they’ve managed to write down some useful knowledge!",
        weight: 1,
        randomChoice: true,
        items: [
            { name: "Common Scroll", link: "https://www.deviantart.com/nemeionadmin/art/Common-Scroll-893641746", quantity: 1 },
            { name: "Uncommon Scroll", link: "https://www.deviantart.com/nemeionadmin/art/Uncommon-Scroll-893785302", quantity: 1 },
            { name: "Rare Scroll", link: "https://www.deviantart.com/nemeionadmin/art/Rare-Scroll-893647526", quantity: 1 },
            { name: "Epic Scroll", link: "https://www.deviantart.com/nemeionadmin/art/Epic-Scroll-893642761", quantity: 1 },
            { name: "Legendary Scroll", link: "https://www.deviantart.com/nemeionadmin/art/Legendary-Scroll-893645688", quantity: 1 },
            { name: "Missive", link: "https://www.deviantart.com/nemeionadmin/art/Missive-990301175", quantity: 1 },
            { name: "Trait Tome", link: "https://www.deviantart.com/nemeionadmin/art/Trait-Tome-1149003056", quantity: 1 },
            { name: "Ancient Time Scroll", link: "https://www.deviantart.com/nemeionadmin/art/Ancient-Time-Scroll-1154720381", quantity: 1 },
            { name: "Junk Mail", link: "https://www.deviantart.com/nemeionadmin/art/Junk-Mail-1167801625", quantity: 1 },
            { name: "Shipment Papers", link: "https://www.deviantart.com/nemeionadmin/art/Shipment-Papers-1148997259", quantity: 1 },
            { name: "Fraudulent Pedigree Letter", link: "https://www.deviantart.com/nemeionadmin/art/Fraudulent-Pedigree-Letter-1048412698", quantity: 1 },
            { name: "Birthright Trait", link: "https://www.deviantart.com/nemeionadmin/art/Birthright-Trait-1000422007", quantity: 1 },
            { name: "Popular Trait", link: "https://www.deviantart.com/nemeionadmin/art/Popular-Trait-1000422348", quantity: 1 },
            { name: "Challenger Trait", link: "https://www.deviantart.com/nemeionadmin/art/Challenger-Trait-1000422473", quantity: 1 },
            { name: "Silver Tongue Trait", link: "https://www.deviantart.com/nemeionadmin/art/Silver-Tongue-Trait-1000422560", quantity: 1 },
            { name: "Heat Resistant Trait", link: "https://www.deviantart.com/nemeionadmin/art/Heat-Resistant-Trait-1000422667", quantity: 1 },
            { name: "Thick Coat Trait", link: "https://www.deviantart.com/nemeionadmin/art/Thick-Coat-Trait-1000422757", quantity: 1 },
            { name: "Iron Will Trait", link: "https://www.deviantart.com/nemeionadmin/art/Iron-Will-Trait-1000422835", quantity: 1 },
            { name: "Wild Nature Trait", link: "https://www.deviantart.com/nemeionadmin/art/Wild-Nature-Trait-1000422936", quantity: 1 },
            { name: "Loner Trait", link: "https://www.deviantart.com/nemeionadmin/art/Loner-Trait-1000423032", quantity: 1 },
            { name: "Trader Trait", link: "https://www.deviantart.com/nemeionadmin/art/Trader-Trait-1000423128", quantity: 1 },
            { name: "Big Boned Trait", link: "https://www.deviantart.com/nemeionadmin/art/Big-Boned-Trait-1000423226", quantity: 1 },
            { name: "Fertility Treatment Trait", link: "https://www.deviantart.com/nemeionadmin/art/Fertility-Treatment-Trait-1000423306", quantity: 1 },
            { name: "Lucky Trait", link: "https://www.deviantart.com/nemeionadmin/art/Lucky-Trait-1000423380", quantity: 1 },
            { name: "Blessing of the Queen Trait", link: "https://www.deviantart.com/nemeionadmin/art/Blessing-of-the-Queen-Trait-1000423431", quantity: 1 },
            { name: "Blessing of the King Trait", link: "https://www.deviantart.com/nemeionadmin/art/Blessing-of-the-King-Trait-1000423496", quantity: 1 },
            { name: "Nightbane Trait", link: "https://www.deviantart.com/nemeionadmin/art/Nightbane-Trait-1000423545", quantity: 1 },
            { name: "Critter Keeper Trait", link: "https://www.deviantart.com/nemeionadmin/art/Critter-Keeper-Trait-1000423610", quantity: 1 },
            { name: "Primal Instincts Trait", link: "https://www.deviantart.com/nemeionadmin/art/Primal-Instincts-Trait-1000423682", quantity: 1 },
            { name: "Quick Feet Trait", link: "https://www.deviantart.com/nemeionadmin/art/Quick-Feet-Trait-1000423729", quantity: 1 },
            { name: "Daywalker Trait", link: "https://www.deviantart.com/nemeionadmin/art/Daywalker-Trait-1000423816", quantity: 1 },
            { name: "Rare Blood Trait", link: "https://www.deviantart.com/nemeionadmin/art/Rare-Blood-Trait-1000423871", quantity: 1 },
            { name: "Delicate Trait", link: "https://www.deviantart.com/nemeionadmin/art/Delicate-Trait-1000423960", quantity: 1 },
            { name: "Battleborn Trait", link: "https://www.deviantart.com/nemeionadmin/art/Battleborn-Trait-1000424047", quantity: 1 },
            { name: "Fortune Finder Trait", link: "https://www.deviantart.com/nemeionadmin/art/Fortune-Finder-Trait-1000424123", quantity: 1 },
            { name: "Casanova Trait", link: "https://www.deviantart.com/nemeionadmin/art/Casanova-Trait-1000424187", quantity: 1 },
            { name: "Historian Trait", link: "https://www.deviantart.com/nemeionadmin/art/Historian-Trait-1000424295", quantity: 1 },
            { name: "Knowledge Seeker Trait", link: "https://www.deviantart.com/nemeionadmin/art/Knowledge-Seeker-Trait-1000424364", quantity: 1 },
            { name: "Short Stature Trait", link: "https://www.deviantart.com/nemeionadmin/art/Short-Stature-Trait-1000424441", quantity: 1 },
            { name: "Clever Trait", link: "https://www.deviantart.com/nemeionadmin/art/Clever-Trait-1000424527", quantity: 1 },
            { name: "Warmonger Trait", link: "https://www.deviantart.com/nemeionadmin/art/Warmonger-Trait-1000424629", quantity: 1 },
            { name: "Favored Trait", link: "https://www.deviantart.com/nemeionadmin/art/Favored-Trait-1000424708", quantity: 1 },
            { name: "Fellowship Trait", link: "https://www.deviantart.com/nemeionadmin/art/Fellowship-Trait-1000424770", quantity: 1 },
            { name: "Aphrodite's Lament Trait", link: "https://www.deviantart.com/nemeionadmin/art/Aphrodite-s-Lament-Trait-1000424998", quantity: 1 },
            { name: "Artesian Trait", link: "https://www.deviantart.com/nemeionadmin/art/Artesian-Trait-1000425536", quantity: 1 },
            { name: "Mark of the Forager Trait", link: "https://www.deviantart.com/nemeionadmin/art/Mark-of-the-Forager-Trait-1000425598", quantity: 1 },
            { name: "Mark of the Hunter Trait", link: "https://www.deviantart.com/nemeionadmin/art/Mark-of-the-Hunter-Trait-1000425693", quantity: 1 },
            { name: "Mark of the Traveler Trait", link: "https://www.deviantart.com/nemeionadmin/art/Mark-of-the-Traveler-Trait-1000425790", quantity: 1 },
            { name: "Gold Digger Trait", link: "https://www.deviantart.com/nemeionadmin/art/Gold-Digger-Trait-1000425934", quantity: 1 },
            { name: "Mark of the Caver Trait", link: "https://www.deviantart.com/nemeionadmin/art/Mark-of-the-Caver-Trait-1000426042", quantity: 1 },
            { name: "Mark of the Fisher Trait", link: "https://www.deviantart.com/nemeionadmin/art/Mark-of-the-Fisher-Trait-1000426119", quantity: 1 },
            { name: "Noble Blood Trait", link: "https://www.deviantart.com/nemeionadmin/art/Noble-Blood-Trait-1000426201", quantity: 1 },
            { name: "One with Nature Trait", link: "https://www.deviantart.com/nemeionadmin/art/One-with-Nature-Trait-1000426317", quantity: 1 },
            { name: "Ambassador Trait", link: "https://www.deviantart.com/nemeionadmin/art/Ambassador-Trait-1000426403", quantity: 1 },
            { name: "Time Traveler Trait", link: "https://www.deviantart.com/nemeionadmin/art/Time-Traveler-Trait-1000426504", quantity: 1 },
            { name: "Supply Seeker Trait", link: "https://www.deviantart.com/nemeionadmin/art/Supply-Seeker-Trait-1000426577", quantity: 1 },
            { name: "Transmutation Trait", link: "https://www.deviantart.com/nemeionadmin/art/Transmutation-Trait-1000426639", quantity: 1 },
            { name: "Treasure Tracker Trait", link: "https://www.deviantart.com/nemeionadmin/art/Treasure-Tracker-Trait-1000426713", quantity: 1 },
            { name: "Devoted Trait", link: "https://www.deviantart.com/nemeionadmin/art/Devoted-Trait-1000426765", quantity: 1 },
            { name: "Natural Leader Trait", link: "https://www.deviantart.com/nemeionadmin/art/Natural-Leader-Trait-1000426828", quantity: 1 },
            { name: "Forged Certificate", link: "https://www.deviantart.com/nemeionadmin/art/Forged-Certificate-1193704939", quantity: 1 },
            { name: "Champion Voucher", link: "https://www.deviantart.com/nemeionadmin/art/Champion-Voucher-1172578895", quantity: 1 },
            { name: "Savage Bounty", link: "https://www.deviantart.com/nemeionadmin/art/Savage-Bounty-1172594376", quantity: 1 },
            { name: "Decree of Domestication", link: "https://www.deviantart.com/nemeionadmin/art/Decree-of-Domestication-1213667885", quantity: 1 }
        ]
    },
    { //Prompt 18
        text: "{description} drinks the oddly metallic tasting liquid and hears a low hiss from behind them, turning slowly with their hackles raised they come face to face with a large, glowing Bonehound. It stands there, empty eye sockets locked on them but it does not seem like it's here to cause any harm. After a moment it turns and walks away, checking every few feet to make sure {description} is following along. And though hesitant, they decide to follow the spectral hound. It leads them to a small, overgrown mound and points expectantly, wagging its stiff, bony tail. It was a lot of digging but deep at the bottom of the mound is a massive pile of bones! Jumping around and snatching as many bones as its spectral maw can hold, the bonehound sprints off into the darkness without so much as a thank you. Looking back into the pit they find some leftover bones and a few treasures! ",
        weight: 1,
        items: [
            { name: "Treasure Chest", link: "https://www.deviantart.com/nemeionadmin/art/Treasure-Chest-893785238", quantity: 1 },
            { name: "Bone", link: "https://www.deviantart.com/nemeionadmin/art/Bone-862973459", quantity: 1 }
        ]
    },
    { //Prompt 19
        text: "{description} opens the potion bottle and a genie pops out! It says it’s short on time though so they only get one wish!",
        weight: 1,
        items: [
            { name: "Wishing Lamp", link: "https://www.deviantart.com/nemeionadmin/art/Wishing-Lamp-1000416215", quantity: 1 }
        ]
    },
    { //Prompt 20
        text: "As {description} knocks back the potion, the Caesar himself suddenly greets them from horseback. They approach nervously and he leans down, offering you a parchment and claiming someone has been looking for you. It reads 'We have been trying to reach you about your wagon's extended warranty.' They hear him laugh as he gallops away. They have received junk mail and are thoroughly confused about what just happened, perhaps it's a fever dream.",
        weight: 1,
        items: [
            { name: "Junk Mail", link: "https://www.deviantart.com/nemeionadmin/art/Junk-Mail-1167801625", quantity: 1 }
        ]
    },
    { //Prompt 21
        text: "The potion glides down {description}’s throat like liquid heaven, warming their vocal chords and filling their chest to bursting with song. As they belt out their (slightly off-key) song, they are visited by Anthea, passing by on her way to the bazaar! She cheers for their bravery in performing so publicly and rewards you with a flower from her hair!.",
        weight: 1,
        items: [
            { name: "Aphrodite's Lament", link: "https://www.deviantart.com/nemeionadmin/art/Aphrodite-s-Lament-1048409662", quantity: 1 }
        ]
    },
    { //Prompt 22
        text: "{description} settles down against the trunk of an old tree and swig the potion in one big gulp. As they lean back and smile, something comes crashing down onto their head. A furious buzzing fills the air, followed by dozens of tiny stings!.",
        weight: 1,
        items: [
            { name: "Beehive", link: "https://www.deviantart.com/nemeionadmin/art/Beehive-1167336933", quantity: 1 }
        ]
    },
    { //Prompt 23
        text: "As {description} uncorks the bottle to sip the potion, a strange dog appears. Battleworn and tired looking, he stops long enough to give their face a friendly lick before bounding off again. They try to grab his collar, but it slips from around his neck, falling onto the ground with a loud clunk.",
        weight: 1,
        items: [
            { name: "Metal Collar", link: "https://www.deviantart.com/nemeionadmin/art/Metal-Collar-869943758", quantity: 1 }
        ]
    },
    { //Prompt 24
        text: "{description} tries to drink the potion, but something pokes them in the lips. They reach into the bottle and pull out a set of papers instead. How did those get in there?",
        weight: 1,
        items: [
            { name: "Shipment Papers", link: "https://www.deviantart.com/nemeionadmin/art/Shipment-Papers-1148997259", quantity: 1 }
        ]
    },
    { //Prompt 25
        text: "{description} stares into the black liquid contained within the bottle. It doesn’t look quite right, but after all, what’s the worst that could happen? Turns out the worst is a worm. In their haste to down the potion, they swallowed one of Hade’s Wereworms! Let’s hope he’s just passing through!",
        weight: 1,
        items: [
            { name: "Wereworm", link: "https://www.deviantart.com/nemeionadmin/art/Wereworm-Companion-999723203", quantity: 1 }
        ]
    },
    { //Prompt 26
        text: "{description} drinks the potion and feels a sudden wild urge to help deliver packages all across Nemeia at prime speed! The problem is that it wears off too fast and they can't keep up with their quota, so they 'accidentally' take home a few packages instead. I'm sure these won't be missed, right?",
        weight: 1,
        randomMultipleChoice: true, // New flag for multiple random selections
        itemCount: { min: 1, max: 5 }, // How many items to randomly select
        items: [
            { name: "Large Ingredient Box", link: "https://www.deviantart.com/nemeionadmin/art/Large-Ingredient-Box-1172597120", quantity: 1 },
            { name: "Small Ingredient Box", link: "https://www.deviantart.com/nemeionadmin/art/Small-Ingredient-Box-1154202273", quantity: 1 },
            { name: "Decoration Coffer", link: "https://www.deviantart.com/nemeionadmin/art/Decoration-Coffer-1154202795", quantity: 1 },
            { name: "Supply Crate", link: "https://www.deviantart.com/nemeionadmin/art/Supply-Crate-893785139", quantity: 1 },
            { name: "Sunken Treasure Chest", link: "https://www.deviantart.com/nemeionadmin/art/Sunken-Treasure-Chest-893785104", quantity: 1 },
            { name: "Treasure Chest", link: "https://www.deviantart.com/nemeionadmin/art/Treasure-Chest-893785238", quantity: 1 },
            { name: "Pouch of Prosperity", link: "https://www.deviantart.com/nemeionadmin/art/Pouch-of-Prosperity-990300129", quantity: 1 },
            { name: "Wooden Trunk", link: "https://www.deviantart.com/nemeionadmin/art/Wooden-Trunk-1000415488", quantity: 1 },
            { name: "Metal Supplies", link: "https://www.deviantart.com/nemeionadmin/art/Metal-Supplies-1000417087", quantity: 1 },
            { name: "Pouch of Herbs", link: "https://www.deviantart.com/nemeionadmin/art/Pouch-of-Herbs-893647196", quantity: 1 },
            { name: "Bag of Gags", link: "https://www.deviantart.com/nemeionadmin/art/Bag-of-Gags-1178225699", quantity: 1 },
            { name: "Festive Present", link: "https://www.deviantart.com/nemeionadmin/art/Festive-Present-998661639", quantity: 1 },
            { name: "Mysterious Chest", link: "https://www.deviantart.com/nemeionadmin/art/Mysterious-Chest-893646729", quantity: 1 },
            { name: "Bountiful Harvest", link: "https://www.deviantart.com/nemeionadmin/art/Bountiful-Harvest-1225138578", quantity: 1 },
            { name: "Abandoned Fisherman's Tackle Box", link: "https://www.deviantart.com/nemeionadmin/art/Abandoned-Fisherman-s-Tackle-Box-1187466140", quantity: 1 },
            { name: "Abandoned Adventurer's Satchel", link: "https://www.deviantart.com/nemeionadmin/art/Abandoned-Adventurer-s-Satchel-1187465760", quantity: 1 },
            { name: "Abandoned Crusader's Saddlebag", link: "https://www.deviantart.com/nemeionadmin/art/Abandoned-Crusader-s-Saddlebag-1187465450", quantity: 1 },
            { name: "Abandoned Fighter's Cache", link: "https://www.deviantart.com/nemeionadmin/art/Abandoned-Fighter-s-Cache-1187465049", quantity: 1 },
            { name: "Abandoned Miner's Knapsack", link: "https://www.deviantart.com/nemeionadmin/art/Abandoned-Miner-s-Knapsack-1172575813", quantity: 1 },
            { name: "Abandoned Hunter's Game Bag", link: "https://www.deviantart.com/nemeionadmin/art/Abandoned-Hunter-s-Game-Bag-1172574618", quantity: 1 },
            { name: "Abandoned Forager's Tote Bag", link: "https://www.deviantart.com/nemeionadmin/art/Abandoned-Forager-s-Tote-Bag-1172596669", quantity: 1 }
        ]
    },
    { //Prompt 27
        text: "{description} tries to drink the potion but gets choked up as something lodges in their throat! They quickly spit out the soggy material and look down at their paws to find…",
        weight: 1,
        randomChoice: true,
        items: [
            { name: "Map", link: "https://www.deviantart.com/nemeionadmin/art/Map-893646156", quantity: 1 },
            { name: "Explorer's Map", link: "https://www.deviantart.com/nemeionadmin/art/Explorer-s-Map-1162882786", quantity: 1 },
            { name: "Map Pieces", link: "https://www.deviantart.com/nemeionadmin/art/Map-Pieces-893646101", quantity: 123 }
        ]
    },
    { //Prompt 28
        text: "As {description} finishes the potion, they hear a clink inside the bottle. Peering  inside, they see a wet looking stone of some kind. They smash the bottle and reveal a runestone that was hiding inside!",
        weight: 1,
        items: [
            { name: "Runestone", link: "https://www.deviantart.com/nemeionadmin/art/Runestone-893647858", quantity: 1 }
        ]
    },
    { //Prompt 29
        text: "{description} considered long and hard what to do with the potion, but as they passed one of the many temples to the Gods, they were struck with an idea! They approach the altar and carefully lay the potion across it, dipping their head in respect and praying the gods accept their humble gift. But oh no! Their offering has angered the Gods! Suddenly a large spectral hound climbs out of the ground and attempts to take a bite out of {description} ! After a short but taxing battle they were able to escape and flee into the streets, but not without receiving a [Minor Injury]. <br><br> {description} has been wounded! [Visit the healing thread to heal your Nemeion.]",
        weight: 1,
    },
    { //Prompt 30
        text: "{description} considered long and hard what to do with the potion, but as they passed one of the many temples to the Gods, they were struck with an idea! They approach the altar and carefully lay the potion across it, dipping their head in respect and praying the gods accept their humble gift. But oh no! Their offering has angered the Gods! Suddenly a large spectral hound climbs out of the ground and attempts to take a bite out of {description} ! After a short but taxing battle they were able to escape and flee into the streets, but not without receiving a [Moderate Injury]. <br><br> {description} has been wounded! [Visit the healing thread to heal your Nemeion.]",
        weight: 1,
    },
    { //Prompt 31
        text: "{description} considered long and hard what to do with the potion, but as they passed one of the many temples to the Gods, they were struck with an idea! They approach the altar and carefully lay the potion across it, dipping their head in respect and praying the gods accept their humble gift. But oh no! Their offering has angered the Gods! Suddenly a large spectral hound climbs out of the ground and attempts to take a bite out of {description} ! After a short but taxing battle they were able to escape and flee into the streets, but not without receiving a [Severe Injury]. <br><br> {description} has been wounded! [Visit the healing thread to heal your Nemeion.]",
        weight: 1,
    },
     { //Prompt 32
        text: "{description} considered long and hard what to do with the potion, but as they passed one of the many temples to the Gods, they were struck with an idea! They approach the altar and carefully lay the potion across it, dipping their head in respect and praying the gods accept their humble gift. But oh no! Their offering has angered the Gods! Suddenly a large spectral hound climbs out of the ground and attempts to take a bite out of {description} ! After a short but taxing battle they were able to escape and flee into the streets, but not without receiving a [Life Threatening Injury]. <br><br> {description} has been wounded! [Visit the healing thread to heal your Nemeion.]",
        weight: 1,
    },
    { //Prompt 33
        text: "{description} considered long and hard what to do with the potion, but as they passed one of the many temples to the Gods, they were struck with an idea! They approach the altar and carefully lay the potion across it, dipping their head in respect and praying the gods accept their humble gift. The Gods smile upon them, while their gift was indeed humble the gesture was deeply appreciated. They have seen fit to grant them a small boon for their kindness.",
        weight: 1,
        randomChoice: true,
        items: [
            { name: "Blessing of Hera", link: "https://www.deviantart.com/nemeionadmin/art/Blessing-of-Hera-1000420405", quantity: 1 },
            { name: "Blessing of Volcan", link: "https://www.deviantart.com/nemeionadmin/art/Blessing-of-Volcan-990292998", quantity: 1 },
            { name: "Blessing of Zeus", link: "https://www.deviantart.com/nemeionadmin/art/Blessing-of-Zeus-1000420032", quantity: 1 },
            { name: "Blessing of Poseidon", link: "https://www.deviantart.com/nemeionadmin/art/Blessing-of-Poseidon-990292572", quantity: 1 },
            { name: "Befuddling Brew", link: "https://www.deviantart.com/nemeionadmin/art/Befuddling-Brew-1156343809", quantity: 1 },
            { name: "Blistering Bile", link: "https://www.deviantart.com/nemeionadmin/art/Blistering-Bile-1137290581", quantity: 1 },
            { name: "Freakish Fangs", link: "https://www.deviantart.com/nemeionadmin/art/Freakish-Fangs-1247924583", quantity: 1 },
            { name: "Medusa's Malice", link: "https://www.deviantart.com/nemeionadmin/art/Medusa-s-Malice-1247936681", quantity: 1 },
            { name: "Mark of the Gorgon", link: "https://www.deviantart.com/nemeionadmin/art/Mark-of-the-Gorgon-1247921681", quantity: 1 },
            { name: "Stygian Sting", link: "https://www.deviantart.com/nemeionadmin/art/Stygian-Sting-1247922969", quantity: 1 },
        ]
    },
    { //Prompt 34
        text: "{description} uncorks the bottle and takes a swig, only to cough and choke with surprise. Why is it lumpy?? They sniff it suspiciously, only to realize that it smells like…. Soup! Why would someone put soup in a bottle?",
        weight: 1,
        randomChoice: true,
        items: [
            { name: "Fragrant Soup", link: "https://www.deviantart.com/nemeionadmin/art/Fragrant-Soup-1178922930", quantity: 1 },
            { name: "Frightening Soup", link: "https://www.deviantart.com/nemeionadmin/art/Frightening-Soup-1178924014", quantity: 1 },
            { name: "Hearty Soup", link: "https://www.deviantart.com/nemeionadmin/art/Hearty-Soup-1178925574", quantity: 1 },
            { name: "Questionable Soup", link: "https://www.deviantart.com/nemeionadmin/art/Questionable-Soup-1178927697", quantity: 1 },
            { name: "Meaty Soup", link: "https://www.deviantart.com/nemeionadmin/art/Meaty-Soup-1178928074", quantity: 1 },
            { name: "Zesty Soup", link: "https://www.deviantart.com/nemeionadmin/art/Zesty-Soup-1178930757", quantity: 1 },
            { name: "Sinister Soup", link: "https://www.deviantart.com/nemeionadmin/art/Sinister-Soup-1179741547", quantity: 1 },
            { name: "Savory Soup", link: "https://www.deviantart.com/nemeionadmin/art/Savory-Soup-1179750727", quantity: 1 },
            { name: "Fishy Soup", link: "https://www.deviantart.com/nemeionadmin/art/Fishy-Soup-1179751588", quantity: 1 },
            { name: "Appalling Soup", link: "https://www.deviantart.com/nemeionadmin/art/Appalling-Soup-1179756715", quantity: 1 }
        ]
    },
    { //Prompt 35
        text: "{description} eyes the potion warily, but dares to take a little sip. The effects are instantaneous! The world around them lights up in fantastic hues of every color, rainbows swirling and splattering across every surface of their surroundings. Without warning, a mythical sight takes shape before them; a glorious, transcendent unicorn, radiating pure joy and wonder! Unfortunately, in their psychedelic fueled confusion, your lion mistakes it for a very oversized piece of candy and immediately begins to gobble it up! By the time their reign of prismatic terror comes to an end, all that remains is a single bite of questionably glittered meat.",
        weight: 1,
        items: [
            { name: "Unicorn Meat", link: "https://www.deviantart.com/nemeionadmin/art/Unicorn-Meat-1037691492", quantity: 1 }
        ]
    },
    { //Prompt 36
        text: "{description} drinks the potion and suddenly feel inspired to learn a new trade! [You may upgrade a single applied armor of your choice 1 tier without cost!] <br><br> [This comment can be redeemed at the Import Updates thread to upgrade 1 applied armor set to the next highest tier!] <br><br> Please link this comment in the Import Updates thread as a [“Mysterious Potion”] at the bottom of the information template. [Please keep this comment as proof of your rewards!]",
        weight: 1,
    },
    { //Prompt 37
        text: "{description} studies the contents of the potion, swirling the muddy looking liquid in the bottle. After a little hesitation, they chug the bottle in three big gulps, sending a tingling shiver down their spine. At first, it seems like nothing happens, but as they study the label on the bottle more closely, they notice the strange symbol there has begun to rapidly blur. The air around them seems to buzz, or maybe that's their ears? They look up just in time for their vision to tunnel and fade to black. The last thing they remember is hearing a loud thud as they fall to the ground in a very drunken heap. <br><br> There's something wet on their cheek. Wet and oddly... warm? They lift a paw to wipe it away, but slap themselves in the face instead. Their eyes struggle open and begin to blink away the fog, staring up at the open sky. The sound of birds and bugs fills their ears. This is definitely not where they were before. How long has it been? They turn their head to the left and see a stream trickling by, frogs croaking merrily. Turning to the right and- Panic envelops them in waves. Face to face with them is a [Nemeion,] drool dripping steadily from its fangs. That would explain the warm, wet liquid. They carefully edge away, sitting up and staring with a mixture of awe and fear at the feral cat. It seems.. friendly? They wonder if maybe, just maybe, they can convince it to come home with them. In whatever direction that might be, of course, seeing as how they are terribly lost. <br><br> {description} has triggered a chance Feral Encounter and has run into [FERAL]! To attempt to tame this feral please reply to the Feral Taming section of the Special Events Journal with a tame following the rules found on the Special Events Journal. <br><br>{description} has until (mm/dd/yyyy - 00:01 CST) to tame this feral before they are no longer tamable.",
        weight: 1,
    },
];

// Export the responses for use in other files
window.mysteriousPotionResponses = mysteriousPotionResponses;