const name = document.getElementById("hero-name");
const render = document.getElementById("hero-render");
const description = document.getElementById("hero-description");
let permName = "Abrams";
const heroes = [
    { name: "Abrams", image: "Abrams", background: "#817239", description:
            "Abrams is a hard-boiled, hard-hitting bruiser of a character that focuses on engaging enemies in close combat. Abrams is a juggernaut on the battlefield, tapping into the dark power of his Tome to Siphon Life from nearby enemies and utilizing his Infernal Resilience to brush off the damage he takes. With a sudden Shoulder Charge or area stun from his Seismic Impact, he can aggressively initiate fights and isolate fragile targets from the rest of their team to set up a devastating burst of damage.\n" +
            "\n" +
            "A capable and well-known detective of New York, Abrams solved crimes ranging from kidnappings to ritual murders. One day, a mysterious Tome was left on his desk with a note of \"Don't let them have it\" scrawled in Onyx blood; followed by car bombings and break-ins to his office. Now, Abrams is trying to figure out just what the hell is going on. "},
    { name: "Apollo", image: "Apollo", background: "#825641", description:
            "Apollo is a high-mobility fencer Hero who engages isolated targets with precision strikes. As the heir to Ixia's throne, he fights in the Ritual to prove his skill and honor his family name.\n" +
            "\n" +
            "With Flawless Advance the fencer begins his approach, timing his strikes perfectly to inflict more damage. Counter-attacks aren't a concern for Apollo, as a flourish of his blade deflects the damage and triggers a quick Riposte, and Disengaging Sigil allows him to jump out of the fray with ease. For his final blow, Apollo dons his fencer's mask and channels Ixia's might with Itani Lo Sahn, leaving enemies defeated in his wake.\n" +
            "\n" +
            "As the Dauphin of Ixia, Apollo comes from a land of beauty, tradition and conflict. Political violence was common in Ixia, but when Apollo was sent to New York for his own safety, he knew the situation was serious. Now a highly skilled fencer at Blackmore Academy, Apollo knows that in due time, he will be called back to Ixia... and when he returns, he will show why he's worthy to wield his family's ancestral blade. "},
    { name: "Baba", image: "Baba", background: "#92476B", description:
            "Baba is a hexing, spirit-draining witch who uses her long-legged bench to brawl in the front lines of the Ritual. Flinging scalding tea, cursed yarn, and breadcrumbs in equal measure, Baba is a cackling force to be reckoned with.\n" +
            "\n" +
            "In the heat of battle, Baba throws out her Threadsap, a chaotic spool of yarn that steals the very spirit of her enemies, granting her greater power. While her legs might not be what they used to, her trusty bench comes to life with a creak of metal, allowing her to run, jump, and kick with impressive vigor. Parkgoers know it's best to stay on Baba's good side, as at tea time you might find yourself splashed with one of Baba's Brews (some of them much sweeter than others), and when tea time is over - The Birds come out to play...\n" +
            "\n" +
            "Tourists in the park might not think much of ol' Baba sitting on her bench - sipping tea and talking to her birds - but the locals have always suspected that something more brews below the surface. An institution of New York City, the Central Park Pigeon Lady is ready to use her lifelong experience in witchcraft to protect Manhattan from rowdy tourists wanting to summon the Patrons, without leaving her trusty bench. "},
    { name: "Bebop", image: "Bebop", background: "#914A33", description:
            "Bebop is an isolating and disruptive Hero with an extendable arm to pull any other hero to his side. A polite and proper golem, he fights in both bloodsport and in the Ritual to find a cure for his creator.\n" +
            "\n" +
            "A scrap golem with a big heart and a bigger extendable arm, Bebop is a potent threat on the battlefield when supported by his team. His Grappling Arm can pull friends and enemies alike towards him, saving them from certain doom or guaranteeing it. Bebop can attach Sticky Bombs to nearby foes and launch them in any direction with a powerful Exploding Uppercut. For any foes left standing, Bebop's Hyper Beam can cut across the battlefield and finish them off.\n" +
            "\n" +
            "The mechanical son of a widowed junkyard attendant, Bebop and Miss Shelly lived together at a junkyard, working with scrap metal by day and listening to jazz music by night. But once Miss Shelly fell ill, Bebop had to resort to participating in bloodsport at the Bear Pit to pay for her medicine. And while Bebop's creator wouldn't approve of his illicit activities, what she doesn't know can't hurt her. "},
    { name: "Billy", image: "Billy", background: "#B84587", description:
            "Billy is a furious and chaotic Hero with a big spiked bat, a horned goat's head, and an overflow of fury at everything and anything. He fights against \"The Man\" and may even fight for positive change in the world; but he always pays his taxes.\n" +
            "\n" +
            "A white hot ball of rage, furious at the very notion of... something. Billy is a chaotic front-liner who never backs down from a challenge. With Rising Ram he gets up close and personal, before slamming down with Bashdown to create shockwaves through his enemies. Running isn't even an option when Billy can use his ultimate Chain Gang to grapple enemies and pull them back in. A quick swig from his bottle gets him Blasted, and his enemies totally wrecked. "},
    { name: "Calico", image: "Calico", background: "#854291", description:
            "Calico is a shadowy assassin Hero who stalks the streets in the form of her cat before ambushing foes with claw and bombs. A former monster hunter turned hired assassin, she has decided that killing one of the Patrons would be an excellent marketing opportunity.\n" +
            "\n" +
            "Possessing her cat, Ava, Calico uses the shadows to her advantage to surprise her foes, slinging Gloom Bombs and attacking with a Leaping Slash for damage and healing. By Returning to the Shadows, she can turn any fight to her advantage, disappearing after a fight or engaging again when the enemy least expects her.\n" +
            "\n" +
            "As a contract killer, Calico is glad to finally be earning significant money by assassinating other people. Despite the good that the Baxter Society did by slaying monsters, it simply didn't pay well enough for her. "},
    { name: "Celeste", image: "Celeste", background: "#86AF8D", description:
            "Celeste is a dazzling and disruptive Hero, drifting above the battlefield and tossing her abilities with a shining wonder. She fights in the Ritual to save the soul of her fellow carnie, hoping to keep her true identity as a Unicorn secret from the poachers of the Cursed Apple.\n" +
            "\n" +
            "It's not every day that Coney Island's biggest star, The Dazzling Celeste, performs on the streets of Manhattan. Her show begins with Light Eater, where a deep breath lit by her blazing baton coats enemies in front of her, and grants increased damage against them. Following that up, she envelops herself in the prismatic shield of her Dazzling Trick, which explodes and silences nearby enemies who break it. Try not to get distracted by her gliding gracefully through the air, or by the dance of her Radiant Daggers, as you'll regret being underneath them when they rain down from above. As for her memorable final act, the Shining Wonder will make her allies go OOH and her foes go AGGHHH! "},
    { name: "Deadman Danny", image: "Deadman_Danny", background: "#C89226", description:
            "Deadman Danny is a daring and explosive Hero with a rocket launcher, a rocket jetpack, and a series of additional rocket skills to blow his opponents away. With only the most powerful of permanently-attached rocket packs, Danny is excited to surprise and amaze all potential Fairfax Industries customers.\n" +
            "\n" +
            "Today, Fairfax Industries is proud to introduce their most valuable salesman: Deadman Danny. Wielding a rocket launcher and flying high above the streets of New York (courtesy of the Chimera Mk1 - the latest and greatest in self-adhered aviation technology), Danny rains his Strix Salvo missiles down upon foes, marking them for future attacks. Jettison Fuel is a handy trick that both expels heat from the Chimera System, while also dousing nearby enemies in the warm embrace of a firey inferno. Yet his most impressive tactic has always been his ability to Close the Deal, wowing prospective customers with an explosive hands-on demonstration of all that Fairfax has to offer. "},
    { name: "The Doorman", image: "The_Doorman", background: "#B79750", description:
            "The Doorman is a proper, polite, godlike Hero that conjures connected portal doorways in the streets and sends his enemies to a frightful pocket dimension of his favorite hotel. As a \"fledgling god\", The Doorman is here to merely observe humanity; though perhaps a visit with his old friends is in order.\n" +
            "\n" +
            "He's proper, he's polite, but the humble Doorman of The Baroness Hotel is more than meets the eye. A brisk ring of his Call Bell leaves nearby enemies disoriented, and his high-speed Luggage Cart knocks them right off their feet. Do you find yourself getting lost easily in the streets of Manhattan? Don't worry, The Doorman is here to provide a shortcut with his Doorway whenever the need arises. And only the most special of enemies get to experience the trip of a lifetime to The Baroness Hotel. "},
    { name: "Drifter", image: "Drifter", background: "#461412", description:
            "Drifter is a bloodthirsty Hero that stalks the streets of The Cursed Apple. He can hunt his victims with bloodscent alone, marking and rending isolated targets to pieces in an eternal night. As an ancient vampire with a contempt of traditional vampiric law, Drifter is eager to join the Ritual only as another battleground on which to conduct his bloody work.\n" +
            "\n" +
            "Something ancient has arrived in New York... a nameless horror known only as the Drifter. Relentless as time, as certain as death, once Drifter sets his eyes on a victim there's nothing they can do to stop him. They can try to run, but his Bloodscent drives him forward, leading him to isolated prey. Even if they manage to escape it doesn't matter, as Stalker's Mark allows Drifter to appear right behind his enemies before lunging in for the kill with a vicious Rend. Soon Eternal Night comes, and a faint whistling in the breeze will be joined by a chorus of screams. "},
    { name: "Dynamo", image: "Dynamo", background: "#AF8B3E", description:
            "Professor Dynamo is a supportive and friendly Hero that is glad to heal his allies, teleport them out of (or into) danger, and transform into a singularity at just the right time. A moment of carelessness vaporized the professor's body, so he now seeks a wish from the Patrons to recover his physical form.\n" +
            "\n" +
            "He is a man of wit, using his brain and his brawn to provide support to his teammates by healing them, teleporting them, knocking his opponents into the air, and when the time is right, unleashing a Singularity which can drastically shift the tides of battle. "},
    { name: "Graves", image: "Graves", background: "#8CA530", description:
            "Graves is a summoning, deathly Hero with a talent for siphoning life essence on the battlefield. She summons vicious ghouls, mobile deadheads, and spirit rifts as she fights, stealing the power of her enemies both dead and alive. After unearthing a lich hand buried in Van Cortlandt Park, Darcy Graves found the best necromancy teacher that she could ask for.\n" +
            "\n" +
            "The dead have been making a whole lot of demands lately, and only Graves has the courage to oblige. That severed lich hand she found in the cemetery has proven itself a valuable ally, allowing her to latch onto her enemies and steal their power for herself. Her curiosities about the passage of life are further put to use with Jar of Dead, collecting the remains of the fallen, shaking them up, and throwing them back at her enemies to grant those remorseful spirits a final shot at revenge. With Grasping Hands she strikes a deep crack in the earth, allowing those down below to grab onto enemies' ankles and stop them from escaping her reach. And when all else fails, a Borrowed Decree will summon the dead to fight alongside her. "},
    { name: "Grey Talon", image: "Grey_Talon", background: "#37A447", description:
            "Grey Talon is a bow-wielding mystical Hero that harasses his enemies with arrows and spirit from long range. He uses traps and brief flight to maintain his distance, and sends his spirit companion owl to eliminate low-health opponents. A famed, long-serving monster hunter, Grey Talon finds himself pulled out of retirement to hunt down the killers of his family and perhaps enlist the Patrons to his aid.\n" +
            "\n" +
            "He is a clever, long-range combatant that uses his powerful bow in combination with traps and mystical flight to pin down and destroy his foes. With the ability to charge his arrow shot for powerful effect, Grey Talon can harass his foes at a distance before launching his Spirit Owl, Rohan, to finish them off. "},
    { name: "Haze", image: "Haze", background: "#38312F", description:
            "Haze is a stealthy assassin Hero who eliminates solitary enemies swiftly. By fixating on single targets, she can use multiple tools and a pair of fast-firing SMGs to send them to a final rest. As a \"Sandman\" with the OSIC, Haze can infiltrate the dreams of her targets to scrutinize their motivations, though her motives around the Ritual are still unknown.\n" +
            "\n" +
            "She works as a secret agent in the Sandman Division of OSIC, fighting as a devastating assassin character who excels in Fixating on foes that are out of position and swiftly ending them. Her Smoke Bomb lets her sneak up on enemies before knocking them out with a Sleep Dagger and unleashing a hail of gunfire at close range. In desperate situations, Haze can enter her Bullet Dance to avoid return fire while dispatching her remaining targets. "},
    { name: "Holliday", image: "Holliday", background: "#1AA478", description:
            "Holliday is a crackshot Hero with deadly aim and a trusty lasso. Utilizing everything from gunpowder to bounce pads to set up a fight, she relies on her aim with her trusty heirloom revolver to finish the job. Once a sheriff on the outskirts of civilization, Holliday now hunts a killer on the streets of the Cursed Apple and she's willing to enlist the supernatural help of anyone that can offer it.\n" +
            "\n" +
            "With a Crackshot of her pistol, she can slow and damage her foes from a distance before launching an explosive Powder Keg with her Bounce Pad or a melee attack. To isolate her foes, she can wrangle them with her Spirit Lasso and drag them into the attacks of her allies. "},
    { name: "Infernus", image: "Infernus", background: "#EB8B4B", description:
            "Infernus is a firey Ixian Hero with a literal fingergun and a powerful control of flame that he uses to enhance his speed and ignite his enemies. Now a simple bartender, Infernus is happy to leave his troubled past behind and make a Wish to save his bar.\n" +
            "\n" +
            "Combining his Flame Dash with the ability to spew a Napalm catalyst, Infernus can chase down and ignite his foes with a deadly Afterburn. Any targets left standing will be subject to his explosive Concussive Combustion, knocking them out and leaving them vulnerable to further immolation. "},
    { name: "Ivy", image: "Ivy", background: "#4B774A", description:
            "Ivy is a dependable, gargoyle Hero with potent supportive and disruptive abilities to assist her allies in combat. After clearing out Spanish Harlem from a terrible crime syndicate, Ivy plans to use the Ritual's power to protect her adoptive family.\n" +
            "\n" +
            "After setting up a Kudzu Connection with an ally to share healing and buffs, she can grow patches of Entangling Thorns and transform into her Stone Form to damage and stun the enemy while healing herself. With her abilities of flight, she can pick up any ally or create a bomb and fly them to any point on the battlefield, choosing to either explosively Air Drop them into the middle of the enemy battle group, or rescue an ally from danger. "},
    { name: "Kelvin", image: "Kelvin", background: "#6AB4E9", description:
            "Kelvin is a frozen, supportive Hero with a bevy of freezing abilities to slow his enemies and heal allies. He sets out to fight in the Ritual to discover the secrets of his own undead nature.\n" +
            "\n" +
            "He can conjure an Ice Path under his feet for faster movement for himself and his team, throwing Frost Grenades and firing his Arctic Beam at nearby enemies to set them up for his companions' attacks. Tactical usage of his Frozen Shelter ice dome can protect and heal allies while trapping hapless opponents. "},
    { name: "Lady Geist", image: "Lady_Geist", background: "#40A36E", description:"" +
            "Lady Geist is a life-draining, Spiritual Hero with a necromantic pact that consumes her own health for her abilities while draining the life away from opponents. While she struggles against a pact made to a powerful spirit, her only hope to remain young forever may lie with the Patrons.\n" +
            "\n" +
            "Sacrificing her life force to launch Essence Bombs and blood shards filled with Malice, Lady Geist can regain lost health with Life Drain, sapping enemy heroes and units of their health. Her Soul Exchange swaps health values with an enemy hero, turning the odds against them for a killing blow. "},
    { name: "Lash", image: "Lash", background: "#839FAD", description:
            "Jacob Lash is an asshole."},
    { name: "McGinnis", image: "McGinnis", background: "#BBA031", description:
            "McGinnis is a machine-gunning mechanic Hero with a selection of turrets and rockets to rain down sustained fire on her enemies. A prodigy of a mechanic without much care for morality, she may be fighting in the Ritual simply for a larger paycheck and a chance to demo her demolitions.\n" +
            "\n" +
            "The head of Fairfax Industries Military R&D department, McGinnis has a high opinion of her own work which includes her machine gun, numerous automatic Mini Turrets, Spectral Walls that she can create to protect teammates, hold down positions and trap enemies, a Medicinal Specter that dispenses health to nearby allies, and finally, a devastating spectral Heavy Barrage that can reach even faraway enemies. "},
    { name: "Mina", image: "Mina", background: "#A52625", description:
            "Mina is a vampiric, nimble Hero with quick bursts of Spirit damage and a bat-powered hit n' run playstyle. A recently-transformed vampire, she now navigates both vampiric high society and the Ritual, seeking to rise up and become the new Viscount of New York.\n" +
            "\n" +
            "Mina is a glass cannon that rakes enemies with her umbrella and delivers quick bursts of Spirit damage at range with her passive, Love Bites. She can transform into bats and escape when things get a bit too messy. Each time she triggers Love Bites, her vampiric powers grow stronger. This builds toward her ultimate, Nox Nostra, which unleashes a massive swarm of bats that hunt down and silence nearby enemies. "},
    { name: "Mirage", image: "Mirage", background: "#671E74", description:
            "Mirage is an elusive Hero of wind and sand, teleporting across the map to control the map and support his allies. As an emissary of the Djinn ambassador Nashala Dion, Mirage is a diplomatic bodyguard who is charged with protecting the Djinn while supporting their mission to develop a sovereign nation within the state of Wyoming.\n" +
            "\n" +
            "He is agile and uses powerful wind-based abilities for disruption. By throwing out Fire Scarabs and transforming into a Dust Devil, Mirage can damage, lift up, steal life and elude his targets while applying Djinn's Mark to enemies to enhance his attacks. When the time is right, he can Travel across the map in an instant to assist his allies, hunt down weak foes and take care of objectives. "},
    { name: "Mo & Krill", image: "Mo_And_Krill", background: "#B39D5C", description:
            "Mo & Krill are tandem bruiser Heroes that operate as one character to burrow around the battlefield, attack with blasts of sand, and lockdown single targets. Members of The Tunnel Rats and close associates of Wraith, Maurice and Krill are illicit traders who make the underground of New York their home.\n" +
            "\n" +
            "Highly respected members of America's underworld, together they are a disruptive and mobile pair that can Burrow around the battlefield and leave their enemies in ruins. Jumping out of ground let Mo & Krill catch their enemies unprepared, and if they are prepared then that will be rectified when Sand Blast jams their weapons. The duo is not concerned about being ambushed by a large group of people, as Scorn will force them to scatter or else risk the pair surviving long enough for backup to arrive. If some poor moron oversteps, Mo and Krill can Combo them to render them helpless. "},
    { name: "Nurse Harrow", image: "Nurse_Harrow", background: "#55AD7F", description:
            "Nurse Harrow is a draining, healing Hero with dangerous tools and a terrible bedside manner. To some, her practices may seem unorthodox, her patients at the Marble Hill Possession Ward cannot say that the results aren't effective.\n" +
            "\n" +
            "With Leech Therapy, she throws a jar full of leeches that attach to oncoming enemies, draining their health and energy, before crawling back to deliver their haul. Cracking open one of her vials, she releases her Wretched Vapors, possessing her allies with a powerful boost of effectiveness - though subjects should be warned of the side effects when the vapors wear off. To efficiently keep her teammates fighting their best, she loads her syringe full of Healing Needles to inject medicine directly into their veins. And when her patience runs out, she opens her bag to release all the Lurking Terrors captured inside, making her adversaries run for cover. "},
    { name: "Paige", image: "Paige", background: "#417D5E", description:
            "Paige is a Spiritual bibliomancer Hero who summons spirits from the pages of her tomes to attack, shield, and captivate her fellow Ritualists. On the streets of the Cursed Apple, she hunts for answers about her brother's disappearance and beseeches the Patrons for their aid.\n" +
            "\n" +
            "With the mere toss of a book, Paige can conjure a Bookwyrm that sears enemies who get too close, or bind them to the ground with Captivating Read. Waning allies will find themselves emboldened by Plot Armor, granting them the courage to fight another day. Fantasy becomes reality with Rallying Charge, summoning an entire cavalry to gallop across the city. "},
    { name: "Paradox", image: "Paradox", background: "#5BB2E1", description:
            "Paradox is an enigmatic, time-bending Hero, wielding a variety of thieves' tools and chrono-controlling gadgets to execute the perfect heist. Paradox is both the name of this Hero and the name of their Thieves' Guild, specializing in stealing the untouchable and breaking into ultra-secure facilities.\n" +
            "\n" +
            "She wields time manipulation with potent disruption and slowing abilities. With a charged Kinetic Carbine, she can threaten her enemies at any range while damaging and slowing them with thrown Pulse Grenades and well-placed Time Walls. At just the right moment, Paradox can activate her Paradoxical Swap to change places with her target, dropping them into a dangerous situation amongst her team. "},
    { name: "Pocket", image: "Pocket", background: "#CDD535", description:
            "Pocket is an elusive, unpredictable Hero with protective, disruptive Spirit abilities and a powerful shotgun to disorient and overcome their enemies. The eldest heir to Fairfax Industries, Arin Fairfax has been in hiding for over 5 years after a failed assassination attempt. Fearing for their life and wishing to chart their own path, the newly nicknamed Pocket has been keeping their original identity secret while investigating who had tried to kill them.\n" +
            "\n" +
            "Having to fight in the Ritual for the chance to stop their father, Pocket prefers to fight up close thanks to their powerful shotgun and highly mobile abilities. Opening their magic briefcase to Barrage groups of enemies with spiritual bursts, Pocket may use their Flying Cloak to damage their targets and teleport past them to unload their shotgun; disappearing inside their Enchanter's Satchel to avoid return fire. When surrounded by enemies, Pocket can unleash an Affliction to slowly eat away at their health, setting their enemies up for a devastating attack. "},
    { name: "Rat King", image: "Rat_King", background: "#DBCF97", description:
            "Rat King is a scrappy, tanky Hero fighting out of the sewers and into the streets of the Cursed Apple. Summoning swarms of rats to his whims, he leads the charge into battle with heavy armor and a plan to turn Long Island into a rat utopia.\n" +
            "\n" +
            "Rodent-hating citizens of Manhattan won't be prepared to see his Scrap Grenade bouncing down Broadway, nor for his Swarm of Rats biting at their heels. By donning his Royal Pestments, the Rat King shakes off incoming damage, allowing him to bravely lead the charge into battle. His loyal subjects will feel awed and inspired when they see the great Banner of Ratannia waving in the middle of combat, and those who oppose him will rue the day they ever thought they could overthrow the king. "},
    { name: "Rem", image: "Rem", background: "#02E4B8", description:
            "Rem is a sleepy, helpful Hero who supports his allies with Lil' helpers, pillow fights, and by taking a quick nap on their shoulders. An innocent child from a world of dreams, Rem and his little helpers found themselves stranded in New York. They seek to summon the Patrons so he can finally return to his family.\n" +
            "\n" +
            "Pillow fights are Rem's preferred form of conflict, tossing his favorite pillow at enemies to knock them back when they're getting too close. His friends, however, he likes to keep nearby - leaping to their aid when things get dicey and taking a quick nap on their shoulder. His Lil Helpers are curious creatures, taking interest in everything the streets of New York have to offer, and cheering on his allies as they go. Ultimately when Naptime hits, no one will be able to keep their eyes open. "},
    { name: "Seven", image: "Seven", background: "#D3B24A", description:
            "Seven is a vicious, electrifying Hero with a wide array of electric attacks and skills to stun and electrocute his opponents. A megalomaniac scientist who escaped his own execution through the murder of his captors, he wishes to reach \"apotheosis\" by completing the ritual.\n" +
            "\n" +
            "Seven excels in rapidly taking control of the battlefield by denying areas with Lightning Balls and Surging his gun to punish his foes for staying close together. After putting his enemies in their place with Static Charge, Seven is free to discharge himself into a Storm Cloud and fry them alive. "},
    { name: "Shiv", image: "Shiv", background: "#9C3231", description:
            "Shiv is a bloodletting, hit-and-run Hero who can quickly traverse the battlefield with his shotgun's recoil to bleed his foes and enact a killing blow. A former criminal, Shiv seeks to make up for his mistakes by hunting down monsters on behalf of The Baxter Society and prove his worth in the Ritual.\n" +
            "\n" +
            "Flinging Serrated Knives to bleed his foes from range, Shiv initiates close quarters combat on his terms by dashing to them while Slicing and Dicing through those standing in his way. By continuously dealing damage, Shiv builds Rage which enhances his abilities and allows him to be a one man army. Withstanding grievous damage via Bloodletting, Shiv finishes off dying targets with a devastating Killing Blow. "},
    { name: "Silver", image: "Silver", background: "#A26C1B", description:
            "Silver is a transforming, wolfish Hero with an accurate shotgun, the tools of a bounty hunter, and a lycan curse that she *swears* to have under control. She makes her living tracking down lowlifes, but today New York’s misanthrope lycanthrope plans on summoning a god.\n" +
            "\n" +
            "Fortunately, Lilah Silver's career as a bounty hunter has prepared her well for all that the ritual requires. She makes quick work of adversaries by catching them with her Entangling Bola, Boot Kicking them in the face, and finishing them off with a Slam Fire from her rifle. But inevitably, the Lycan Curse comes calling whether she likes it or not, and her foes will regret being too close when it does. "},
    { name: "Sinclair", image: "Sinclair", background: "#5CA6B8", description:
            "Sinclair is a tricky magician Hero with a multitude of vexing, surprising spells to confound their opponents. Two magician souls bound forever in unpleasant matrimony, Henry and Savannah use the shared title of Sinclair to seek a way to finally be separated and find peace in the afterlife.\n" +
            "\n" +
            "With their trusty magic wand, they can shoot Vexing Bolts to surprise enemies and use magic to turn them into Rabbits. The Spectral Assistant amplifies their damage and can serve as a fast escape route. Sinclair can even turn their enemies' abilities against themselves with their surprising final trick, Audience Participation. "},
    { name: "Solomon", image: "Solomon", background: "#345553", description:
            "Solomon is a strategic chessmaster Hero who navigates his bishops, knights, and rooks around a fight before dropping the Queen in an ultimate checkmate. As a long-term chess player in Central Park, he joined the Ritual to prevent the power of the Patrons from falling into the wrong hands.\n" +
            "\n" +
            "Solomon remains calm and collected when facing a new challenger, so when the Patrons come calling, he approaches the city as if it's one giant chessboard. With Setup Bishop he advances, planting his loyal damage dealers ahead of him and sliding them across the streets with ease. Kingside Knight comes into play when it's time for defense, granting protection to allies and making tactical retreats when needed. Rook Battery charges forward with great force, stalling enemies in their tracks. And with his final move, Develop Queen, he locks down his enemies in an ultimate checkmate. "},
    { name: "Venator", image: "Venator", background: "#9142B3", description:
            "Venator is a relentless, righteous Hero using traps and explosives to weaken his foes and both an assault rifle and blessed crossbow to eliminate the enemies of the Vatican. Father Quinn Rourke represents the righteous wrath and fury of the Venators of Saint Benedict, sent to annihilate the evil stirring in New York.\n" +
            "\n" +
            "He doesn't walk the righteous path, he blazes the trail so that others may do so safely. Firing a Consecrating Grenade into the fray softens up his enemies and keeps them from restoring health, and his Hex-Lined Snap Trap scatters across the ground to lock them in place. A Gutshot from his shotgun will knock back enemies who get too close, and when the time is right, Ira Domini will rid the world of evil once and for all. "},
    { name: "Victor", image: "Victor", background: "#4B816C", description:
            "Victor is a reanimated, relentless Hero who walks the line between life and death, welcoming incoming damage and inflicting suffering on his enemies. After waking up on a mortuary table with no memories, Victor wants nothing more than to find out who made him and from whom he is made of.\n" +
            "\n" +
            "Victor has learned to harness pain, shocking himself with Jumpstart to get his adrenaline rushing and his faulty heart pumping. He welcomes incoming damage with open (albeit mismatched) arms, channeling it into his Pain Battery and granting enemies a taste of the pain he endures. Get too close and risk getting caught in his Aura of Suffering, but hey, at least you'll be suffering together. And just when you think you've taken him down, he'll piece himself back together and live again! "},
    { name: "Vindicta", image: "Vindicta", background: "#83B5BD", description:
            "Vindicta is a floating marksman Hero, engaging targets with bleeds and tethers before picking them off from a distance with her powerful rifle. A girl who was killed by John Hathorne during the Salem Witch Trials of the 1600s, Vindicta returned to this world to wage a war against the Neo-inquisitorial \"Friends of Humanity\".\n" +
            "\n" +
            "Using her Crow Familiar to initiate fights by bleeding her targets, Vindicta may launch into Flight to keep her distance from enemies and tether them with a Stake in the ground while targeting them with her powerful rifle. Enemies that are near-death should fear her ability to Assassinate at long-range with a devastating sniper shot. "},
    { name: "Violet", image: "Violet", background: "#338190", description:
            "Violet is an artistic, nimble Hero that uses her paint and talent to bend the Ritual to her will. With ink and paint, she can empower her allies with one stroke while disrupting her foes with another.\n" +
            "\n" +
            "Brush in hand, Violet approaches the ritual with the same precision she does her art, wielding Living Ink that both empowers her bullets, and draws mere inspiration into reality. When entering Flow State, her ink glides easily, weaving towards danger to deal damage, or away from it to make a quick getaway. By creating a Still Life Violet can truly capture her enemies' likeness to stunning results. And with Abstract Landscape she surrounds herself and those nearby with her biggest and most ambitious piece yet, leaving onlookers completely speechless. "},
    { name: "Viscous", image: "Viscous", background: "#413735", description:
            "Viscous is a green, rubbery Hero in a protoplasmic suit that can use goo to cover the battlefield, himself, friends, and foes to both support and threaten at his whim. He is a psychic sea anemone whose home in the Bermuda Triangle has been invaded by a mysterious, dangerous predator only known as the Adversary. His mission is to summon the Patrons to protect his home in the Deep.\n" +
            "\n" +
            "A psychic sea anemone in a protoplasmic suit, Viscous can throw Splatter to cover the area in green goo which slows down his victims and leaves them vulnerable to Puddle Punches, which will knock his enemies away from their friends and his friends away from their enemies. Even if they manage to catch Viscous it doesn't matter, as anything inside The Cube is completely invulnerable. Soon Goo Ball comes, and walls painted green will be joined by echoes of screams. "},
    { name: "Vyper", image: "Vyper", background: "#4B6836", description:
            "Vyper is a slippery, venomous Hero with a joyous inclination towards crime and a variety of tools to make better targets for her hail of bullets. Despite being an impulsive outlaw that frequently gets thrown in jail, Vyper seems to be seeking a new and secure life for herself from the Patrons.\n" +
            "\n" +
            "After Slithering across the battlefield to swiftly avoid enemy attacks while spraying them with copious amount of bullets, Vyper can inject retreating foes with Lethal Venom to finish them off and use her Screwjab Dagger to hit faraway targets. By slinging her Petrifying Bolas, Vyper will make sure that her targets won't get away from her. " },
    { name: "Warden", image: "Warden", background: "#794244", description:
            "Warden is a tough, tenacious Hero with endless determination, willpower, and a technique for alchemy. With the apocalypse on the horizon, Warden was trained since birth, forged into a weapon built specifically towards stopping the Patrons from ever entering our world, no matter the cost.\n" +
            "\n" +
            "Opening fights with either a Binding Word or a disrupting Alchemical Flask, Warden dashes into the fight to brawl at close range and utilizing his Willpower for protection and staying power. In desperate situations, Warden can trigger his Last Stand, damaging and stealing life from all foes in front of him. "},
    { name: "Wraith", image: "Wraith", background: "#B6689D", description:
            "Wraith is a fast-talking, fast-firing Hero with offensive psychic abilities and a talent for both card tricks and telekinesis. Employing her charisma and strength to run a gambling network, Wraith is a widely-known feature of the criminal underworld of New York City who fights in the Ritual simply to wish for a big pile of cash.\n" +
            "\n" +
            "She can activate her Full Auto to boost her own fire rate, perform Card Tricks by sending them at her targets and Project Mind to teleport either into or out of dangerous fights. Singling out a foe with her Telekinesis and throwing them in any direction, Wraith can decide who on the enemy team should die first. "},
    { name: "Yamato", image: "Yamato", background: "#BE4134", description:
            "Yamato is a precise, close-range assassin Hero using flying strikes, sword attacks, and a connection to shadow to destroy her foes. She lost her brother to a territorial dispute and adopted his name, vowing to secure her brother's dream of international presence by demanding a wish from the Patrons\n" +
            "\n" +
            "Conducting a Flying Strike with her grapple to get close, Yamato unleashes her powerful melee attacks along with Power Slash and Crimson Slash attacks to damage, slow, and disable her enemies while healing herself. Once fully engaged, she can unleash her Shadow Transformation to become infused with her brother's shadow soul, becoming unstoppable for a short time while ending the life of her opponents. "},
    { name: "Random", image: "Random", background: "#405050", description:
            "Random"}
];

// Perm hero for render
let permHero = heroes[0];

const heroesContainer = document.querySelector(".heroes");

// A pool with no random in it so if we select random we dont get random again
const pool = heroes.filter(h => h.name !== "Random");
// Random hero selection
function randomHero() {
    return pool[Math.floor(Math.random() * pool.length)];
}

// render hero image
function renderHero(hero) {
    name.textContent = hero.name;
    render.src = `images/heroes/1024px-${hero.image}_Render.png`;
    description.textContent = hero.description;
}

// Unmark all and mark the new selected box
function markSelected(box) {
    document.querySelector(".selected-hero")?.classList.remove("selected-hero");
    box?.classList.add("selected-hero");
}

markSelected(heroesContainer[0]);
renderHero(permHero);

// Render heroes
heroes.forEach(hero => {
    const heroBox = document.createElement("div");
    heroBox.classList.add("hero-box");
    heroBox.dataset.name = hero.name;
    heroBox.style.backgroundColor = hero.background;
    heroBox.innerHTML = `
        <img src="images/heroes/cards/150px-${hero.image}_card.png" alt="${hero.name}">
        <span>${hero.name}</span>
    `;

    // On hover mark selected and render hero
    heroBox.onmouseover = () => {
        if(hero.name !== "Random")
            renderHero(hero);

        markSelected(heroBox);
    };

    //On mouse leave mark selected as permanent hero
    heroBox.onmouseleave = () => {
        renderHero(permHero);
        // What the hell is this
        markSelected(heroesContainer.querySelector(`.hero-box[data-name="${CSS.escape(permHero.name)}"]`));
    };

    // Set perm when on click
    heroBox.onclick = () => {
        // If hero name is random get random hero and set it to hero and then use that for the bs
        permHero = hero.name === "Random" ? randomHero() : hero;
        renderHero(permHero);
        markSelected(heroesContainer.querySelector(`.hero-box[data-name="${CSS.escape(permHero.name)}"]`));
    };

    heroesContainer.appendChild(heroBox);
});


