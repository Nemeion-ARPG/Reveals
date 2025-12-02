const categoryMessages = {
    shipment: [
        { text: "You spend the afternoon at the docks, waiting patiently for your shipment of goods to arrive. A large ship pulls in towards the shore, accompanied by a voice on the wind. 'Prepare to dock!' After observing several crew members moving crate after crate from the ship, you find one specifically addressed to you. You open it up to reveal the following items:", weight: 10 }
    ],
    backgrounds: [
        { text: "You have revealed the following backgrounds:", weight: 3 }
    ],
    teethbag: [
        { text: "The small burlap pouch feels heavier than it should. When you loosen the tie, a soft rattle comes from inside, the sound of tiny bones clicking together. The teeth are all different shapes and sizes, some cracked, while others are still shining as if freshly pulled. A cold shiver runs through you when you notice a few that look almost human. Your x1 Bag of Teeth has revealed:", weight: 2 }
    ],
    breeding: [
        { text: "You have revealed the following breeding items:", weight: 3 }
    ],
    decor: [
        { text: "You have received the following decor:", weight: 2 }
    ],
    decorationcoffer: [
        { text: "You ease the latch open and the coffer bursts into a soft sparkle, scattering motes of gold dust across your paws. Inside rests a delicate collection of charms and baubles — each one humming with quiet joy, eager to brighten your space. Your x1 Decoration Coffer has revealed the following:", weight: 2 }
    ],
    present: [
        { text: "The present opens with a quiet rustle, the scent of myrrh and olive oil drifting into the air. Inside lie offerings wrapped in sun-warmed cloth, humble gifts meant to honor the turning of the year, when mortals and gods alike share in the feast of Saturn's peace. Your x1 Festive Present has revealed the following:", weight: 2 }
    ],
    naughtypresent: [
        { text: "The present rattles ominously as you shake it, the sound of mischief barely contained. When you tear open the dark wrapping, a faint scent of sulfur and smoke rises from within. Your x1 Naughty Present has revealed the following:", weight: 2 }
    ],
    elegantpresent: [
        { text: "The present gleams beneath ribbons of silk and silver, its weight promising something of true worth. As you carefully unwrap the immaculate packaging, the scent of fine oils and precious metals fills the air. These are gifts befitting nobilitym treasures chosen with care and bound by the favor of the gods. Your x1 Elegant Present has revealed the following:", weight: 2 }
    ],
    metalsupplies: [
        { text: "The crate opens with a metallic groan, revealing stacks of forged bars and rivets gleaming in the half-light. They carry the promise of creation — the bones of armor, the heart of machines, the veins of a thousand yet-to-be-made relics. Your x1 Metal Supplies has revealed the following:", weight: 5 },
    ],
    mysterycrate: [
        { text: "The crate groans as you pry it open, the hinges shrieking like something alive. A chill seeps out, curling through the air like the breath of the dead. Within, the trinkets glimmer faintly—masks that leer, lanterns that flicker with trapped souls, and a faint music box tune that shouldn’t still be playing. The melody halts as you reach inside, leaving behind only silence… and the feeling that something unseen has just stepped closer. Your x1 Mysterious Crate has revealed the following:", weight: 5 },
    ],
    mysterypotion: [
        { text: "Guess what? Chicken butt.", weight: 5 },
    ],
    foolsmask: [
        { text: "You put on the Feast of Fools Mask hoping to attract a feathery friend and are immediately greeted by an equally fashionable fool! You have received:", weight: 5 },
    ],
    supplycrate: [
        { text: "The crate opens with a heavy crack of wood, the scent of oil and rope drifting into the air. Inside rests an assortment of supplies—tools, rations, and spare materials packed with care. Each piece bears the mark of long travel, yet all remain ready for use. You have received the following:", weight: 5 },
    ],
    pouchofherbs: [
        { text: "The pouch opens with a soft rustle, releasing the sharp scent of crushed leaves and sun-dried stems. The aroma carries notes of pine, sage, and smoke, a reminder of the wild hills where such herbs still grow untamed. You have received the following:", weight: 5 },
    ],
    map: [
        { text: "You study your x1 Map beneath the fading light, comparing its markings to the ridges and streams around you. Each turn brings a new sign of progress—a carved stone here, a weathered post there. The promise of buried treasure feels closer now, tangible and real. You have found the following:", weight: 5 },
    ],
    bagofgags: [
        { text: "You rummage around in your x1 Bag of Gags, groping around for your new prize! It takes an unusually long time to find your gift, as if the bag is... simply too big inside, but eventually you manage to pull out:", weight: 5 },
    ],
    bountifulharvest: [
        { text: "You rummage through the x1 Bountiful Harvest, looking for tasty rewards. As you look through the basket brimming with the fruits and vegetables of the seasons labors you find yours is full of:", weight: 5 },
    ],
    scrolls: [
        { text: "Your x1 Scroll has revealed the following:", weight: 5 },
    ],
    smallingredient: [
        { text: "The box opens to reveal small packets bound in waxed paper and twine. A soft aroma of rosemary and smoke curls upward, mingling with the cool scent of stone. These are offerings once favored by healers and priests, the raw essence of ritual and remedy alike. Your x1 Small Ingredients Box has revealed the following:", weight: 2 }
    ],
    sunkenchest: [
        { text: "Pulled from the seafloor, the chest bears the weight of centuries. Its hinges strain as it opens, releasing a quiet sigh that mingles with the sound of the waves. Inside lie relics dulled by water and sand, remnants of a voyage the sea refused to forget. Your x1 Sunken Treasure Chest has revealed the following:", weight: 5 }
    ],
    treasurechest: [
        { text: "The wooden chest yields with a groan, revealing a collection of coins, ornaments, and trinkets. Each bears signs of use such as a dented edge or worn engraving, proof of lives long past. Riches gathered and lost, gathered again, until they found their way here. Your x1 Treasure Chest has revealed the following:", weight: 2 }
    ],
    trunk: [
        { text: "The trunk opens with a hollow creak, releasing the scent of oil and leather. Inside lies an assortment of well-kept equipment, each piece worn by time yet sturdy in purpose. The craftsmanship bears the quiet influence of Hephaestus, humble tools made to endure both war and wilderness. Your x1 Wooden Trunk has revealed the following:", weight: 2 }
    ],
    legendarycompanioncache: [
        { text: "The cache opens slowly, releasing a deep, rhythmic sound like a distant heartbeat. A faint glow spills out, carrying the scent of earth and rain. Whatever rests within is no ordinary companion but something touched by the divine. Your Legendary Companion Cache reveals:", weight: 2 }
    ],
    largeingredient: [
        { text: "The large wooden crate holds an assortment of ingredients preserved with care. Glass jars shimmer with powdered minerals and oils drawn from sacred groves. The weight of knowledge lingers over them, as if every herb and crystal still remembers the hands of those who once worked the old magic. Your x1 Large Ingredient Box has revealed the following:", weight: 2 }
    ],
    smallsackofcoins: [
        { text: "The small leather sack jingles softly as you loosen its drawstring. Inside, a modest collection of coins catches the light. Your Small Sack of Coins reveals:", weight: 1 }
    ],
    largesackofcoins: [
        { text: "The substantial weight of the large leather sack speaks of its contents before you even open it. As you loosen the thick rope binding it shut, the unmistakable gleam of coins catches your eye. Your Large Sack of Coins reveals:", weight: 1 }
    ]
};
