const heroes = [
    { name: "Abrams", image: "Abrams", background: "#817239", role: "Melee-Tank",
        description: "Abrams is a former New York detective who now brawls at point-blank range. He heals himself by draining nearby enemies and shrugs off a lot of damage. A shoulder charge and an area stun let him start fights and cut weak targets off from their team. His story began when a mysterious book appeared on his desk with a warning not to let anyone have it.",
        tip: "Unbind your parry.",
        voiceline: "Take a nap, kid." },
    { name: "Apollo", image: "Apollo", background: "#825641", role: "Spirit-Melee",
        description: "Apollo is a fencer and the heir to the throne of Ixia, sent to New York for his own safety. He moves fast and hunts isolated enemies with precise strikes. Deflecting an attack lets him answer with a quick riposte, and he can leap out of danger when a fight turns. His ultimate channels the strength of his homeland into a final blow.",
        tip: "Apollo is like a mosquito, he flies around and just when you think you have him, he gets out.",
        voiceline: "The Patrons are lucky to have someone like me fight for them." },
    { name: "Baba", image: "Baba", background: "#92476B", role: "Spirit-Tank",
        description: "Baba is Central Park's famous pigeon lady, and she is also a witch. She fights on the front line, using cursed yarn to drain enemies and power herself up. Her bench is enchanted, so she can run, jump and kick with it. Scalding tea and a flock of birds make sure nobody forgets she is dangerous.",
        tip: "Baba is an old woman, dont hit her it's rude.",
        voiceline: "Tea's ready, dear. Do sit down." },
    { name: "Bebop", image: "Bebop", background: "#914A33", role: "Spirit-Burst",
        description: " ,  enemies and launches them with a big uppercut. A long-range beam finishes off whoever is still standing.",
        tip: "Bebop is a hook champion, except unlike most games his hook distance is almost uncapped, so good luck.",
        voiceline: "Ritual or no ritual, it's Bunko Night." },
    { name: "Billy", image: "Billy", background: "#B84587", role: "Melee-Sustain",
        description: "Billy is an angry, goat-headed brawler armed with a spiked bat. He rams into enemies and slams the ground to send shockwaves through them. His ultimate chains up foes and drags them back if they try to run. A swig from his bottle makes him even more destructive.",
        tip: "Billy is one of those heroes who's only good on the enemy team.",
        voiceline: "Hey, your taste in music? Sucks." },
    { name: "Calico", image: "Calico", background: "#854291", role: "Spirit-Burst",
        description: "Calico is a former monster hunter who now works as a hired killer, and she thinks assassinating a Patron would be great publicity. She sneaks around in the body of her cat, Ava, and ambushes targets with bombs and slashes. Her slashes also heal her. Slipping back into the shadows lets her leave a fight or return when nobody expects it.",
        tip: "Run around the map in your cat form and steal the enemies money.",
        voiceline: "It's important to surround yourself with disposable- I mean, good people." },
    { name: "Celeste", image: "Celeste", background: "#86AF8D", role: "Spirit",
        description: "Celeste is a Coney Island circus star who is secretly a unicorn. She floats above the fight and throws light-based attacks that mark and weaken enemies. The shield she conjures explodes and silences enemies who break it. Falling daggers and a flashy finale round out her show.",
        tip: "Just spam your ult in team fights.",
        voiceline: "Ladies and gentlemen, the show begins!" },
    { name: "Deadman Danny", image: "Deadman_Danny", background: "#C89226", role: "Flying-Spirit",
        description: "Deadman Danny is a Fairfax Industries salesman with a rocket launcher and a jetpack that is permanently attached to him. He flies over the streets and marks enemies with missiles for later attacks. He can vent the pack's heat to scorch anyone standing close. His ultimate is an explosive product demonstration.",
        tip: "I hate this guy so much, smash your head on the keyboard its not like you need any skill to play this guy.",
        voiceline: "Deadman Danny, at your service!" },
    { name: "The Doorman", image: "The_Doorman", background: "#B79750", role: "Spirit-Support",
        description: "The Doorman is a polite hotel employee who is secretly a fledgling god watching over humanity. He rings a bell to disorient enemies and rams them with a luggage cart. Linked doorways let his allies take shortcuts across the map. Unlucky enemies get sent to a pocket dimension version of his hotel.",
        tip: "Place doors for your team to gain an advantage in team fights or just kindap people into your base.",
        voiceline: "May your time in New York be unforgettable." },
    { name: "Drifter", image: "Drifter", background: "#461412", role: "Spirit-Burst",
        description: "Drifter is an ancient vampire who looks down on vampire law and treats the Ritual as just another hunting ground. He tracks lone victims by scent. He can appear behind a marked target and tear into them. His ultimate brings an endless night filled with screams.",
        tip: "Pick off whoever wanders off alone, he's not made for diving a full team.",
        voiceline: "Crazy burst damage." },
    { name: "Dynamo", image: "Dynamo", background: "#AF8B3E", role: "Spirit-Support",
        description: "Professor Dynamo is a friendly scientist who lost his body in an accident and wants it back. He heals his allies and teleports them into or out of danger. He can also knock enemies into the air. When the moment is right, he collapses into a singularity that can swing a whole fight.",
        tip: "Spam ult in team fights and you pretty much win the game.",
        voiceline: "Time for a little field work." },
    { name: "Graves", image: "Graves", background: "#8CA530", role: "Spirit-Summoner",
        description: "Graves is a necromancer who learned her craft from a severed lich hand she dug up in a park. She summons ghouls and walking skulls to fight for her. Hands reaching up from the ground trap enemies in place. Her ultimate calls a crowd of the dead to fight at her side.",
        tip: "A newborn could play this hero.",
        voiceline: "I am the reapers handmaiden." },
    { name: "Grey Talon", image: "Grey_Talon", background: "#37A447", role: "Spirit-Burst",
        description: "Grey Talon is a retired monster hunter pulled back into action to find the killers of his family. He shoots charged arrows from long range. Traps and short flights help him keep his distance. His spirit owl hunts down enemies who are low on health.",
        tip: "Impossible to dodge his ult.",
        voiceline: "There is no escaping me." },
    { name: "Haze", image: "Haze", background: "#38312F", role: "Marksman-Burst",
        description: "Haze is a secret agent who can enter her targets' dreams. She fixes on one enemy at a time and takes down lone targets quickly. Smoke and a sleep dagger help her get close before she opens fire with her SMGs. When things go badly, her ultimate lets her dodge return fire while she finishes the job.",
        tip: "One button outplay.",
        voiceline: "Sweet dreams." },
    { name: "Holliday", image: "Holliday", background: "#1AA478", role: "Marksman-Burst",
        description: "Holliday is an ex-sheriff hunting a killer through the Cursed Apple with a family revolver and a lasso. She wears enemies down from range with accurate shots. Bounce pads and explosive kegs help her set up a fight. Her lasso drags a target into the waiting attacks of her allies.",
        tip: "She has bounce pads, kinda dope.",
        voiceline: "Reckon it's high noon." },
    { name: "Infernus", image: "Infernus", background: "#EB8B4B", role: "Spirit-Burn",
        description: "Infernus is an Ixian bartender who wants to leave his troubled past behind and wishes to save his bar. He controls fire to dash around and set enemies ablaze. A spray of flammable liquid makes the burn even worse. His ultimate explodes, leaving enemies stunned and easy to burn further.",
        tip: "Fire damage is crazy.",
        voiceline: "Drinks are on fire tonight." },
    { name: "Ivy", image: "Ivy", background: "#4B774A", role: "Spirit-Support",
        description: "Ivy is a gargoyle who cleared a crime syndicate out of Spanish Harlem to protect her adopted family. She links up with an ally to share healing and buffs. Thorns and a stone form let her control space and absorb damage. She can also carry an ally across the map, either to save them or to drop them into the enemy team.",
        tip: "Fly your strongest teammate around like a drone or save people.",
        voiceline: "Stay close. I've got you." },
    { name: "Kelvin", image: "Kelvin", background: "#6AB4E9", role: "Spirit-Support",
        description: "Kelvin is an undead frost mage who fights to uncover the secrets of his own nature. He lays ice paths for faster movement and slows enemies with frost grenades and a freezing beam. His ice dome protects and heals allies while trapping enemies inside. Most of what he does sets up his teammates.",
        tip: "Buy ricochet.",
        voiceline: "Stay cool, everyone." },
    { name: "Lady Geist", image: "Lady_Geist", background: "#40A36E", role: "Spirit-Sustain",
        description: "Lady Geist made a pact with a powerful spirit to stay young forever, and she is paying for it. She spends her own health to fuel her abilities and drains enemies to get it back. Her bombs and blood shards hit hard. Her ultimate swaps health with an enemy hero, which can turn a fight on its head.",
        tip: "Walk up to somebody and ult them, pretty much free kill.",
        voiceline: "Youth is worth any price." },
    { name: "Lash", image: "Lash", background: "#839FAD", role: "Spirit-Control",
        description: "Jacob Lash is an asshole.",
        tip: "Lash is the goat.",
        voiceline: "Hold still. This'll be quick." },
    { name: "McGinnis", image: "McGinnis", background: "#BBA031", role: "Spirit-Summoner",
        description: "McGinnis heads the military research department at Fairfax Industries and is very proud of her designs. She fights with a machine gun and deploys turrets to hold ground. Spectral walls protect her team or trap enemies. A healing specter and a long-range barrage round out her kit.",
        tip: "Huge wall on regular ability, just spam it.",
        voiceline: "Everything I build works. Everything." },
    { name: "Mina", image: "Mina", background: "#A52625", role: "Spirit-Burst",
        description: "Mina is a newly turned vampire who wants to become the next Viscount of New York. She rakes enemies with her umbrella and fires quick bursts of spirit damage from range. She can turn into bats to escape when things get messy. Each Love Bites hit makes her stronger, building toward an ultimate that swarms and silences nearby enemies.",
        tip: "Mina is the squishiest champion in the game, not for me.",
        voiceline: "How rude, bleeding on my umbrella." },
    { name: "Mirage", image: "Mirage", background: "#671E74", role: "Spirit-Mobile",
        description: "Mirage is a Djinn bodyguard sworn to protect an ambassador. He uses wind and sand to damage, lift and slip away from enemies. Marking enemies with Djinn's Mark boosts his attacks. His ultimate lets him travel across the map instantly to help allies or catch a weak enemy.",
        tip: "Use his travel to save the walkers.",
        voiceline: "The wind goes where I go." },
    { name: "Mo & Krill", image: "Mo_And_Krill", background: "#B39D5C", role: "Melee-Tank",
        description: "Mo & Krill are a pair of underground traders who fight as one hero. They burrow around the battlefield and burst out to catch enemies off guard. A sand blast jams enemy weapons, and a combo locks down a single target. Their ultimate scares enemies into scattering.",
        tip: "Why so much regen man.",
        voiceline: "Business is booming down here." },
    { name: "Nurse Harrow", image: "Nurse_Harrow", background: "#55AD7F", role: "Spirit-Support",
        description: "Nurse Harrow works at a possession ward, and her bedside manner is terrible. Thrown leeches drain enemies' health and energy. Her vapors strengthen allies, though there are side effects when they wear off. A syringe heals teammates, and her bag releases terrors when she has had enough.",
        tip: "Guaranteed Mid Boss with her ult.",
        voiceline: "This won't hurt. Much." },
    { name: "Paige", image: "Paige", background: "#417D5E", role: "Spirit-Support",
        description: "Paige is a bibliomancer who searches for her missing brother and summons spirits from the pages of her books. A thrown book becomes a bookwyrm that burns enemies who get too close. She can also bind enemies in place and embolden hurt allies. Her ultimate summons a cavalry charge that gallops across the city.",
        tip: "Melee paige lol.",
        voiceline: "Every story needs a hero." },
    { name: "Paradox", image: "Paradox", background: "#5BB2E1", role: "Spirit-Control",
        description: "Paradox is both a hero and the name of her thieves' guild, which specializes in impossible heists. She bends time with grenades that slow enemies and walls that restrict them. A charged carbine lets her threaten enemies at any range. Her ultimate swaps her place with a target and drops them into the middle of her team.",
        tip: "Insane snipes.",
        voiceline: "Time is just another lock." },
    { name: "Pocket", image: "Pocket", background: "#CDD535", role: "Spirit-Burst",
        description: "Pocket is the hidden heir to Fairfax Industries, in hiding since a failed assassination attempt. They fight up close with a shotgun and spirit powers from a magic briefcase. They can teleport past a target to shoot from behind, or hide in a satchel to avoid damage. Their ultimate slowly eats away at enemies' health.",
        tip: "Insane burst.",
        voiceline: "Please don't tell my father you saw me." },
    { name: "Rat King", image: "Rat_King", background: "#DBCF97", role: "Marksman-Tank",
        description: "Rat King is a tough fighter who came up from the sewers and dreams of turning Long Island into a rat paradise. He leads from the front, summoning swarms of rats to chew at his enemies. His royal robes help him shake off damage. A banner rallies his rat subjects in the middle of a fight.",
        tip: "Buy echo shard(my main).",
        voiceline: "All hail the Rat King!" },
    { name: "Rem", image: "Rem", background: "#02E4B8", role: "Spirit-Support",
        description: "Rem is a child from a world of dreams who got stranded in New York and wants to go home. He tosses a pillow to knock back enemies who get too close. He can nap on an ally's shoulder to leap to their aid. His little helpers cheer allies on, and Naptime makes enemies unable to stay awake.",
        tip: "Build gun Rem.",
        voiceline: "Five more minutes..." },
    { name: "Seven", image: "Seven", background: "#D3B24A", role: "Spirit-Control",
        description: "Seven is a power-hungry scientist who escaped his own execution and hopes to reach apotheosis through the Ritual. He fills areas with lightning balls so enemies cannot stand there. His charged gun punishes enemies who stay close together. His ultimate turns him into a storm cloud that fries everything beneath it.",
        tip: "Play for his ult.",
        voiceline: "Knowledge is power. Power is electric." },
    { name: "Shiv", image: "Shiv", background: "#9C3231", role: "Spirit-Bleed",
        description: "Shiv is a former criminal who hunts monsters for the Baxter Society to make up for his past. He throws knives that make enemies bleed and uses his shotgun's recoil to move fast. Dealing damage builds his rage, which strengthens his abilities. He can endure heavy hits and then finish off targets who are nearly dead.",
        tip: "Also known as Mr. Hallway. Recently known for one shotting people with his shotgun.",
        voiceline: "Keep bleeding. I'm not done." },
    { name: "Silver", image: "Silver", background: "#A26C1B", role: "Melee-Burst",
        description: "Silver is a bounty hunter who insists her werewolf curse is under control. She catches enemies with a bola, kicks them in the face, and finishes them with her rifle. When the curse takes over, anyone standing close regrets it. The Ritual is just another job for her, though this one ends with summoning a god.",
        tip: "She cant kill you in ult form if you're on a rope.",
        voiceline: "I've got it under control. Mostly." },
    { name: "Sinclair", image: "Sinclair", background: "#5CA6B8", role: "Spirit-Control",
        description: "Sinclair is actually two magicians, Henry and Savannah, bound together in an unhappy marriage and hoping to be separated. Their wand fires bolts that surprise enemies and can turn them into rabbits. A spectral assistant boosts their damage and doubles as an escape route. Their final trick turns enemies' own abilities against them.",
        tip: "Steal ults, and bunnies.",
        voiceline: "Pick a card. Any card. Too late." },
    { name: "Solomon", image: "Solomon", background: "#345553", role: "Spirit-Control",
        description: "Solomon is a Central Park chess player who joined the Ritual to keep the Patrons' power out of the wrong hands. He treats the city like a giant board and moves his bishops, knights and rooks around the fight. The bishops deal damage, the knights protect allies, and the rooks charge in to stall enemies. His ultimate drops the queen and locks enemies down for checkmate.",
        tip: "Y'all just pawns to me.",
        voiceline: "Checkmate." },
    { name: "Venator", image: "Venator", background: "#9142B3", role: "Marksman-Control",
        description: "Venator is Father Quinn Rourke, sent by the Vatican to destroy the evil stirring in New York. He uses traps and grenades that hold enemies in place and stop them from healing. His shotgun knocks back anyone who gets too close. His ultimate is a final blast of holy wrath.",
        tip: "Venator is just all around a good hero tbh, his ult is crazy strong tho.",
        voiceline: "Forgive me, for I am about to sin." },
    { name: "Victor", image: "Victor", background: "#4B816C", role: "Spirit-Tank",
        description: "Victor is a reanimated man who woke up on a mortuary table with no memory of who made him. He turns the damage he takes into power stored in a Pain Battery. Enemies standing close to him suffer too. When he is beaten, he can piece himself back together and get up again.",
        tip: "I suck at this  guy lol.",
        voiceline: "Again. Hit me again." },
    { name: "Vindicta", image: "Vindicta", background: "#83B5BD", role: "Marksman-Sniper",
        description: "Vindicta was killed during the Salem witch trials and has returned to wage war on the Friends of Humanity. She floats above the battlefield and shoots from far away with a powerful rifle. A crow bleeds her targets and a stake tethers them in place. Her sniper shot can finish off nearly dead enemies from a great distance.",
        tip: "Snipe people, while flying.",
        voiceline: "Justice has a long memory." },
    { name: "Violet", image: "Violet", background: "#338190", role: "Spirit-Control",
        description: "Violet is an artist who bends the Ritual to her will with ink and paint. Her living ink empowers her bullets and brings her ideas to life. In Flow State she weaves toward danger to deal damage or away from it to escape. Her ultimate surrounds her and nearby allies with a huge painted landscape.",
        tip: "Annoying.",
        voiceline: "Every masterpiece starts with a mess." },
    { name: "Viscous", image: "Viscous", background: "#413735", role: "Spirit-Support",
        description: "Viscous is a psychic sea anemone in a protoplasmic suit whose home in the deep was invaded by something called the Adversary. He covers the battlefield in green goo that slows enemies down. Puddle Punches knock enemies away from his team, or his friends away from enemies. Anything inside his Cube is completely invulnerable.",
        tip: "I'm made of goo! If you cube people to save them they wont get upset when you hit them with Puddle Punch.",
        voiceline: "I am not a pile of goo. I'm merely piloting a pile of goo." },
    { name: "Vyper", image: "Vyper", background: "#4B6836", role: "Marksman-Burst",
        description: "Vyper is an outlaw who loves crime and spends a lot of time in jail. She slithers around enemy attacks while spraying them with bullets. Venom injections finish off retreating enemies, and a dagger hits distant targets. Bolas keep her targets from getting away.",
        tip: "Spam dash and slide.",
        voiceline: "Catch me if you can. You can't." },
    { name: "Warden", image: "Warden", background: "#794244", role: "Marksman-Burst",
        description: "Warden was trained from birth to keep the Patrons out of the world, whatever it costs. He opens fights with a word that binds enemies or an alchemical flask, then brawls up close. His willpower gives him toughness and staying power. In a pinch, his Last Stand drains life from every enemy in front of him.",
        tip: "Save Deadlock.",
        voiceline: "Whatever the cost." },
    { name: "Wraith", image: "Wraith", background: "#B6689D", role: "Marksman-Burst",
        description: "Wraith is a card-throwing telekinetic who runs a gambling network in New York's underworld. She fights in the Ritual for a big pile of cash. Full Auto boosts her fire rate, and she can teleport into or out of fights. She can also pick up a chosen enemy and throw them in any direction.",
        tip: "Lifting!",
        voiceline: "Read 'em and weep." },
    { name: "Yamato", image: "Yamato", background: "#BE4134", role: "Spirit-Control",
        description: "Yamato is a swordswoman who took her late brother's name and wants to fulfill his dream by demanding a wish from the Patrons. She grapples toward enemies and slashes them to damage, slow and disable them while healing herself. Her shadow form makes her unstoppable for a short time. She is deadly to anyone she reaches.",
        tip: "Point and click grapple...",
        voiceline: "My brother's dream will live on." },
    { name: "Random", image: "Random", background: "#405050", role: "Any",
        description: "Can't decide? Let the game pick a hero for you.",
        tip: "A good way to try a hero you wouldn't normally choose.",
        voiceline: "Let fate decide." }
];

const RANDOM = "Random";

const heroNameEl = document.getElementById("hero-name");
const heroRenderEl = document.getElementById("hero-render");
const heroRoleEl = document.getElementById("hero-role");
const heroTipEl = document.getElementById("hero-tip");
const heroVoicelineEl = document.getElementById("hero-voiceline");
const heroDescriptionEl = document.getElementById("hero-description");
const heroesContainer = document.querySelector(".heroes");
const heroDetailsEl = document.getElementById("hero-details");

const pool = heroes.filter(hero => hero.name !== RANDOM);
const boxes = new Map();
let selectedHero = heroes[0];

function randomHero() {
    return pool[Math.floor(Math.random() * pool.length)];
}

function renderHero(hero) {
    heroNameEl.textContent = hero.name;
    heroRenderEl.src = `images/heroes/1024px-${hero.image}_Render.png`;
    heroRenderEl.alt = `${hero.name} render`;
    heroTipEl.textContent = hero.tip;
    heroVoicelineEl.textContent = hero.voiceline;
    heroDescriptionEl.textContent = hero.description;
    heroRoleEl.textContent = hero.role;
}

function markSelected(hero) {
    document.querySelector(".selected-hero")?.classList.remove("selected-hero");
    boxes.get(hero.name)?.classList.add("selected-hero");
}

function preview(hero) {
    if (hero.name !== RANDOM) {
        renderHero(hero);
    }
    markSelected(hero);
}

function restore() {
    renderHero(selectedHero);
    markSelected(selectedHero);
}

function select(hero) {
    selectedHero = hero.name === RANDOM ? randomHero() : hero;
    restore();
}

function createBox(hero) {
    const box = document.createElement("div");
    box.className = "hero-box";
    box.style.backgroundColor = hero.background;

    const link = document.createElement("a");
    link.href = "#hero-name";

    const image = document.createElement("img");
    image.src = `images/heroes/cards/150px-${hero.image}_card.png`;
    image.alt = hero.name;
    image.loading = "lazy";

    const label = document.createElement("span");
    label.textContent = hero.name;

    link.append(image, label);
    box.append(link);

    box.addEventListener("mouseenter", () => preview(hero));
    box.addEventListener("mouseleave", restore);
    box.addEventListener("focusin", () => preview(hero));
    box.addEventListener("focusout", restore);
    box.addEventListener("click", () => select(hero));

    return box;
}

heroes.forEach(hero => {
    const box = createBox(hero);
    boxes.set(hero.name, box);
    heroesContainer.append(box);
});

restore();