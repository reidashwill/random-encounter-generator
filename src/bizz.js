export class Encounter {
  constructor(partyLevel, partyMembers, challengeDifficulty, xpThreshold, monsterType, environment, currentEnvironmentArray) {
    this.partyLevel = partyLevel;
    this.partyMembers = partyMembers;
    this.challengeDifficulty = challengeDifficulty;
    this.xpThreshold = xpThreshold;
    this.monsterType = monsterType;
    this.environment = environment;
    this.currentEnvironmentArray = [];
    this.forestMonsterArray = ["baboon", "badger", "cat", "commoner", "deer", "hyena", "owl", "bandit", "blood-hawk", "flying-snake", "giant-rat", "giant-weasel", "guard", "kobold", "mastiff", "poisonous-snake", "stirge", "tribal-warrior", "blink-dog", "boar", "constrictor-snake", "elk", "giant-badger", "giant-bat", "giant-frog", "giant-lizard", "giant-owl", "giant-poisonous-snake", "goblin", "panther", "pseudodragon", "sprite", "swarm-of-ravens", "wolf", "ape", "black-bear", "giant-wasp", "gnoll", "hobgoblin", "lizardfolk", "orc", "satyr", "scout", "worg", "brown-bear", "bugbear", "dire-wolf", "dryad", "giant-hyena", "giant-spider", "giant-toad", "harpy", "tiger", "ankheg", "awakened-tree", "bandit-captain", "berserker", "centaur", "druid", "ettercap", "giant-boar", "giant-constrictor-snake", "giant-elk", "grick", "ogre", "pegasus", "swarm-of-poisonous-snakes", "wererat", "will-o-wisp", "green-hag", "owlbear", "phase-spider", "veteran", "werewolf", "couatl", "wereboar", "weretiger", "gorgon", "shambling-mound", "troll", "unicorn", "werebear", "giant-ape", "oni", "young-green-dragon", "treant", "guardian-naga", "young-gold-dragon", "adult-green-dragon", "ancient-green-dragon", "ancient-gold-dragon"];
    this.desertMonsterArray = ["cat", "commoner", "hyena", "jackal", "scorpion", "vulture", "bandit", "camel", "flying-snake", "guard", "kobold", "mule", "poisonous-snake", "stirge", "tribal-warrior", "constrictor-snake", "giant-lizard", "poisonous-snake", "giant-wolf-spider", "pseudodragon", "dust-mephit", "gnoll", "hobgoblin", "scout", "swarm-of-insects", "death-dog", "giant-hyena", "giant-spider", "giant-toad", "giant-vulture", "lion", "bandit-captain", "druid", "giant-constrictor-snake", "ogre", "giant-scorpion", "mummy", "phase-spider", "wight", "weretiger", "air-elemental", "fire-elemental", "medusa", "young-brass-dragon", "young-blue-dragon", "guardian-naga", "efreeti", "gynosphinx", "roc", "adult-brass-dragon", "mummy-lord", "purple-worm", "adult-blue-dragon", "androsphinx", "ancient-brass-dragon", "ancient-blue-dragon"];
    this.hillMonsterArray = ["baboon", "commoner", "eagle", "goat", "hyena", "raven", "vulture", "bandit", "blood-hawk", "giant-weasel", "guard", "kobold", "mastiff", "mule", "poisonous-snake", "stirge", "tribal-warrior", "axe-beak", "boar", "elk", "giant-owl", "giant-wolf-spider", "goblin", "panther", "pseudodragon", "swarm-of-bats", "swarm-of-ravens", "wolf", "giant-goat", "gnoll", "hobgoblin", "orc", "scout", "swarm-of-insects", "worg", "brown-bear", "dire-wolf", "giant-eagle", "giant-hyena", "harpy", "hippogriff", "berserker", "druid", "giant-boar", "giant-elk", "griffon", "ogre", "orc", "pegasus", "green-hag", "manticore", "phase-spider", "veteran", "werewolf", "ettin", "wereboar", "bulette", "gorgon", "hill-giant", "troll", "werebear", "chimera", "wyvern", "stone-giant", "young-copper-dragon", "young-red-dragon", "roc", "adult-copper-dragon", "adult-red-dragon", "ancient-copper-dragon", "ancient-red-dragon"];
    this.grasslandMonsterArray = ["cat", "commoner", "deer", "eagle", "goat", "hyena", "jackal", "vulture", "blood-hawk", "flying-snake", "guard", "poisonous-snake", "stirge", "tribal-warrior", "axe-beak", "boar", "elk", "giant-poisonous-snake", "giant-wolf-spider", "goblin", "panther", "riding-horse", "wolf", "cockatrice", "giant-goat", "giant-wasp", "gnoll", "hobgoblin", "orc", "scout", "swarm-of-insects", "worg", "bugbear", "giant-eagle", "giant-hyena", "giant-vulture", "hippogriff", "lion", "tiger", "ankheg", "centaur", "druid", "giant-boar", "giant-elk", "griffon", "ogre", "pegasus", "rhinoceros", "manticore", "phase-spider", "veteran", "couatl", "elephant", "wereboar", "weretiger", "bulette", "gorgon", "chimera", "young-gold-dragon", "adult-gold-dragon", "ancient-gold-dragon"];
    this.mountainMonsterArray = ["eagle", "goat", "blood-hawk", "guard", "kobold", "stirge", "tribal-warrior", "pseudodragon", "swarm-of-bats", "giant-goat", "orc", "scout", "giant-eagle", "harpy", "hippogriff", "lion", "berserker", "druid", "giant-elk", "griffon", "ogre", "saber-toothed-tiger", "basilisk", "hell-hound", "manticore", "veteran", "ettin", "air-elemental", "bulette", "troll", "chimera", "wyvern", "stone-giant", "frost-giant", "cloud-giant", "fire-giant", "young-silver-dragon", "young-red-dragon", "roc", "adult-silver-dragon", "adult-red-dragon", "ancient-red-dragon"];
    this.arcticMonsterArray = ["commoner", "owl", "bandit", "blood-hawk", "kobold", "tribal-warrior", "giant-owl", "ice-mephit", "ice-devil", "ice-maiden", "orc", "scout", "brown-bear", "druid", "griffon", "ogre", "polar-bear", "manticore", "veteran", "wolf", "troll", "werebear", "mammoth", "young-white-dragon", "frost-giant", "remorhaz", "roc", "adult-white-dragon", "ancient-white-dragon", "frostveil", "dire-wolf"];
    this.coastalMonsterArray = ["commoner", "crab", "eagle", "bandit", "kobold", "merfolk", "poisonous-snake", "stirge", "tribal-warrior", "giant-lizard", "giant-wolf-spider", "pseudodragon", "sahuagin", "scout", "giant-eagle", "harpy", "bandit-captain", "druid", "griffon", "ogre", "merrow", "plesiosaurus", "sea-hag", "manticore", "water-elemental", "young-bronze-dragon", "young-blue-dragon", "djinni", "roc", "adult-bronze-dragon", "adult-blue-dragon", "ancient-bronze-dragon", "ancient-blue-dragon", "dragon-turtle", "storm-giant", "storm-lord", "storm-spirit", "giant-octopus"];
    this.swampMonsterArray = ["rat", "raven", "giant-rat", "kobold", "poisonous-snake", "stirge", "tribal-warrior", "constrictor-snake", "giant-frog", "giant-lizard", "giant-poisonous-snake", "swarm-of-rats", "swarm-of-ravens", "crocodile", "lizardfolk", "orc", "scout", "swarm-of-insects", "ghoul", "giant-spider", "giant-toad", "druid", "ghast", "giant-constrictor-snake", "ogre", "swarm-of-poisonous-snakes", "will-o-wisp", "green-hag", "wight", "giant-crocodile", "shambling-mound", "troll", "water-elemental", "young-black-dragon", "hydra", "adult-black-dragon", "ancient-black-dragon"];
    this.underdarkMonsterArray = ["giant-fire-beetle", "shrieker", "giant-rat", "kobold", "stirge", "tribal-warrior", "drow", "giant-bat", "giant-centipede", "giant-lizard", "giant-poisonous-snake", "goblin", "grimlock", "swarm-of-bats", "violet-fungus", "darkmantle", "gray-ooze", "hobgoblin", "magma-mephit", "orc", "rust-monster", "scout", "shadow", "swarm-of-insects", "bugbear", "duergar", "ghoul", "giant-spider", "giant-toad", "specter", "druid", "gargoyle", "gelatinous-cube", "ghast", "giant-constrictor-snake", "gibbering-mouther", "grick", "mimic", "minotaur-skeleton", "ochre-jelly", "ogre", "polar-bear", "doppelganger", "hell-hound", "minotaur", "phase-spider", "veteran", "wight", "black-pudding", "chuul", "ettin", "ghost", "earth-elemental", "otyugh", "roper", "salamander", "troll", "vampire-spawn", "wraith", "chimera", "drider", "stone-giant", "cloaker", "spirit-naga", "fire-giant", "aboleth", "behir"];
    this.underwaterMonsterArray = ["quipper", "merfolk", "constrictor-snake", "steam-mephit", "giant-sea-horse", "reef-shark", "sahuagin", "giant-octopus", "giant-constrictor-snake", "hunter-shark", "merrow", "plesiosaurus", "sea-hag", "killer-whale", "giant-shark", "water-elemental", "storm-giant"];
    this.urbanMonsterArray = ["cat", "commoner", "goat", "rat", "raven", "bandit", "cultist", "flying-snake", "giant-rat", "guard", "kobold", "mastiff", "mule", "noble", "pony", "stirge", "acolyte", "draft-horse", "giant-centipede", "giant-poisonous-snake", "pseudodragon", "riding-horse", "skeleton", "swarm-of-bats", "swarm-of-rats", "zombie", "crocodile", "giant-wasp", "shadow", "swarm-of-insects", "thug", "warhorse", "ghoul", "giant-spider", "specter", "spy", "bandit-captain", "cult-fanatic", "gargoyle", "ghast", "mimic", "priest", "wererat", "will-o-wisp", "doppelganger", "knight", "phase-spider", "veteran", "wight", "couatl", "ghost", "gladiator", "vampire-spawn", "invisible-stalker", "mage", "oni", "shield-guardian", "assassin", "young-silver-dragon", "archmage", "rakshasa", "vampire", "adult-silver-dragon", "ancient-silver-dragon", "tarrasque"];
  }


  async getMonster(monsterPlaceholder) {
    try {
      let request = await fetch(`https://api.open5e.com/monsters/${monsterPlaceholder}`);
      if (request.ok && request.status === 200) {
        let monsterObject = await request.json();
        monsterObject.xp = 0;
        console.log(monsterObject);
        this.monsterXpConverter(monsterObject);
        this.currentEnvironmentArray.push(monsterObject);
        console.log(this.currentEnvironmentArray);

      } else {
        request = false;
      }
    } catch (error) {
      return false;
    }
  }


  encounterGen() {
    this.environmentArray = [];
    // console.log("EnvironmentGen start test")
    if (this.environment === "forestEnvironment") {
      // console.log("environment test")
      for (let i = 0; i <= this.forestMonsterArray.length - 1; i++) {
        this.getMonster(this.forestMonsterArray[i]);
      }
    } else if (this.environment === "desertEnvironment") {
      for (let i = 0; i <= this.desertMonsterArray.length - 1; i++) {
        this.getMonster(this.desertMonsterArray[i]);
      }
    } else if (this.environment === "hillEnvironment") {
      for (let i = 0; i <= this.hillMonsterArray.length - 1; i++) {
        this.getMonster(this.hillMonsterArray[i]);
      }
    } else if (this.environment === "grasslandEnvironment") {
      for (let i = 0; i <= this.grasslandMonsterArray.length - 1; i++) {
        this.getMonster(this.grasslandMonsterArray[i]);
      }
    } else if (this.environment === "mountainEnvironment") {
      for (let i = 0; i <= this.mountainMonsterArray.length - 1; i++) {
        this.getMonster(this.mountainMonsterArray[i]);
      }
    } else if (this.environment === "arcticEnvironment") {
      for (let i = 0; i <= this.arcticMonsterArray.length - 1; i++) {
        this.getMonster(this.arcticMonsterArray[i]);
      }
    } else if (this.environment === "coastalEnvironment") {
      for (let i = 0; i <= this.coastalMonsterArray.length - 1; i++) {
        this.getMonster(this.coastalMonsterArray[i]);
      }
    } else if (this.environment === "swampEnvironment") {
      for (let i = 0; i <= this.swampMonsterArray.length - 1; i++) {
        this.getMonster(this.swampMonsterArray[i]);
      }
    } else if (this.environment === "underdarkEnvironment") {
      for (let i = 0; i <= this.underdarkMonsterArray.length - 1; i++) {
        this.getMonster(this.underdarkMonsterArray[i]);
      }
    } else if (this.environment === "underwaterEnvironment") {
      for (let i = 0; i <= this.underwaterMonsterArray.length - 1; i++) {
        this.getMonster(this.underwaterMonsterArray[i]);
      }
    } else if (this.environment === "urbanEnvironment") {
      for (let i = 0; i <= this.urbanMonsterArray.length - 1; i++) {
        this.getMonster(this.urbanMonsterArray[i]);
      }
    }
    for (let i = 0; i <this.xpThreshold;) {
      let monsterSelectNum = this.randomNumber(this.currentEnvironmentArray.length - 1);
      this.environmentArray.push(this.currentEnvironmentArray[monsterSelectNum]);
      this.xpThreshold -= this.currentEnvironmentArray[monsterSelectNum].xp;
    }
  }



  randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  partyXpThreshold(partyMembers, challengeDifficulty, partyLevel) {
    const thresholdArray = [[],
      [25, 50, 75, 100],
      [50, 100, 150, 200],
      [75, 150, 225, 400],
      [125, 250, 375, 500],
      [250, 500, 750, 1100],
      [300, 600, 900, 1400],
      [350, 750, 1100, 1700],
      [450, 900, 1400, 2100],
      [550, 1100, 1600, 2400],
      [600, 1200, 1900, 2800],
      [800, 1600, 2400, 3600],
      [1000, 2000, 3000, 4500],
      [1100, 2200, 3400, 5100],
      [1250, 2500, 3800, 5700],
      [1400, 2800, 4300, 6400],
      [1600, 3200, 4800, 7200],
      [2000, 3900, 5900, 8800],
      [2100, 4200, 6300, 9500],
      [2400, 4900, 7300, 10900],
      [2800, 5700, 8500, 12700]
    ];
    this.xpThreshold = partyMembers * thresholdArray[partyLevel][challengeDifficulty];
    console.log(this.xpThreshold);
  }


  monsterXpConverter(monsterObject) {
    console.log("xpConverterTest");
    if (monsterObject.challenge_rating === "0") {
      monsterObject.xp = 10;
    } else if (monsterObject.challenge_rating === "1/8") {
      monsterObject.xp = 25;
    } else if (monsterObject.challenge_rating === "1/4") {
      monsterObject.xp = 50;
    } else if (monsterObject.challenge_rating === "1/2") {
      monsterObject.xp = 100;
    } else if (monsterObject.challenge_rating === "1") {
      monsterObject.xp = 200;
    } else if (monsterObject.challenge_rating === "2") {
      monsterObject.xp = 450;
    } else if (monsterObject.challenge_rating === "3") {
      monsterObject.xp = 700;
    } else if (monsterObject.challenge_rating === "4") {
      monsterObject.xp = 1100;
    } else if (monsterObject.challenge_rating === "5") {
      monsterObject.xp = 1800;
    } else if (monsterObject.challenge_rating === "6") {
      monsterObject.xp = 2300;
    } else if (monsterObject.challenge_rating === "7") {
      monsterObject.xp = 2900;
    } else if (monsterObject.challenge_rating === "8") {
      monsterObject.xp = 3900;
    } else if (monsterObject.challenge_rating === "9") {
      monsterObject.xp = 5000;
    } else if (monsterObject.challenge_rating === "10") {
      monsterObject.xp = 5900;
    } else if (monsterObject.challenge_rating === "11") {
      monsterObject.xp = 7200;
    } else if (monsterObject.challenge_rating === "12") {
      monsterObject.xp = 8400;
    } else if (monsterObject.challenge_rating === "13") {
      monsterObject.xp = 10000;
    } else if (monsterObject.challenge_rating === "14") {
      monsterObject.xp = 11500;
    } else if (monsterObject.challenge_rating === "15") {
      monsterObject.xp = 13000;
    } else if (monsterObject.challenge_rating === "16") {
      monsterObject.xp = 15000;
    } else if (monsterObject.challenge_rating === "17") {
      monsterObject.xp = 18000;
    } else if (monsterObject.challenge_rating === "18") {
      monsterObject.xp = 20000;
    } else if (monsterObject.challenge_rating === "19") {
      monsterObject.xp = 22000;
    } else if (monsterObject.challenge_rating === "20") {
      monsterObject.xp = 25000;
    } else if (monsterObject.challenge_rating === "21") {
      monsterObject.xp = 33000;
    } else if (monsterObject.challenge_rating === "22") {
      monsterObject.xp = 41000;
    } else if (monsterObject.challenge_rating === "23") {
      monsterObject.xp = 50000;
    } else if (monsterObject.challenge_rating === "24") {
      monsterObject.xp = 62000;
    } else if (monsterObject.challenge_rating === "30") {
      monsterObject.xp = 155000;
    }
  }
}