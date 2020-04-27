export class Encounter {
  constructor(partyLevel, partyMembers, challengeDifficulty, xpThreshold, possibleMonsterArray, monsterType, environment) {
    this.partyLevel = partyLevel;
    this.partyMembers = partyMembers;
    this.challengeDifficulty = challengeDifficulty;
    this.xpThreshold = xpThreshold;
    this.possibleMonsterArray = ["baboon", "badger", "bat", "cat", "commoner", "crab", "deer", "eagle", "frog", "goat"];
    this.monsterType = monsterType;
    this.environment = environment;
    this.forestMonsterArray = ["baboon", "badger", "cat", "commoner", "deer", "hyena", "owl", "bandit", "blood-hawk", "flying-snake", "giant-rat", "giant-weasel", "guard", "kobold", "mastiff", "poisonous-snake", "stirge", "tribal-warrior", "blink-dog", "boar", "constrictor-snake", "elk", "giant-badger", "giant-bat", "giant-frog", "giant-lizard", "giant-owl", "giant-poisonous-snake", "goblin", "panther", "pixie", "pseudodragon", "sprite", "swarm-of-ravens", "wolf", "ape", "black-bear", "giant-wasp", "gnoll", "hobgoblin", "lizardfolk", "orc", "satyr", "scout", "vine-blight", "worg", "brown-bear", "bugbear", "dire-wolf", "dryad", "giant-hyena", "giant-spider", "giant-toad", "harpy", "tiger", "ankheg", "awakened-tree", "bandit-captain", "berserker", "centaur", "druid", "ettercap", "giant-boar", "giant-constrictor-snake", "giant-elk", "grick", "ogre", "pegasus", "swarm-of-poisonous-snakes", "wererat", "will-o-wisp", "green-hag", "owlbear", "phase-spider", "veteran", "werewolf", "couatl", "wereboar", "weretiger", "gorgon", "shambling-mound", "troll", "unicorn", "werebear", "giant-ape", "oni", "young-green-dragon", "treant", "guardian-naga", "young-gold-dragon", "adult-green-dragon", "ancient-green-dragon", "ancient-gold-dragon"}    ];
    this.desertMonsterArray = ["cat", "commoner", "hyena" ,"jackal", "scorpion", "vulture", "bandit", "camel", "flying-snake", "guard", "kobold", "mule", "poisonous-snake", "stirge", "tribal-warrior", "constrictor-snake", "giant-lizard", "giant", "poisonous-snake", "giant-wolf-spider", "pseudodragon", "winged-kobold", "dust-mephit", "gnoll", "hobgoblin", "jackalwere", "scout", "swarm-of-insects", "death-dog", "giant-hyena", "giant-spider", "giant-toad", "giant-vulture", "half-ogre", "lion", "bandit-captain", "beserker", "druid", "giant-constrictor-snake", "ogre", "giant-scorpion", "mummy", "phase-spider", "wight", "weretiger", "air-elemental", "fire-elemental", "revenant", "medusa", "young-brass-dragon", "young-blue-dragon", "guardian-naga", "efreeti", "gynosphinx", "roc", "adult-brass-dragon", "mummy-lord", "purple-worm", "adult-blue-dragon", "androsphinx", ]
    this.grasslandMonsterArray = []
  }
  


  encounterGen(){
    for(let i=0; i<this.xpThreshold; i++){
      let monsterSelectNum = this.randomNumber(this.possibleMonsterArray.length);
      this.encounterArray.push(this.possibleMonsterArray[monsterSelectNum]);
      this.xpThreshold -= this.possibleMonsterArray[monsterSelectNum].xp;
    }
  }

  async getList(url) {
    try {
      let request = await fetch(url);
      if (request.ok && request.status === 200) {
        let list = await request.json();
        console.log(list);
        return list;
      } else {
        request = false;
      }
    } catch (error) {
      return false;
    }  
  }

  randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  partyxpThreshold(partyLevel, challengeDifficulty){
    const threshholdArray = [[],
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
    this.xpThreshold = this.partyMembers * threshholdArray[partyLevel][challengeDifficulty];
  }


  monsterXpConverter(placeholder) {
    if(this.results.placeholder.challenge_rating === "0"){
      this.xp = 10;
    }else if(this.challenge_rating ==="1/8"){
      this.xp = 25;
    }else if(this.challenge_rating ==="1/4"){
      this.xp = 50;
    }else if(this.challenge_rating ==="1/2"){
      this.xp = 100;
    }else if(this.challenge_rating ==="1"){
      this.xp = 200;
    }else if(this.challenge_rating ==="2"){
      this.xp = 450;
    }else if(this.challenge_rating ==="3"){
      this.xp = 700;
    }else if(this.challenge_rating ==="4"){
      this.xp = 1100;
    }else if(this.challenge_rating ==="5"){
      this.xp = 1800;
    }else if(this.challenge_rating ==="6"){
      this.xp = 2300;
    }else if(this.challenge_rating ==="7"){
      this.xp = 2900;
    }else if(this.challenge_rating ==="8"){
      this.xp = 3900;
    }else if(this.challenge_rating ==="9"){
      this.xp = 5000;
    }else if(this.challenge_rating ==="10"){
      this.xp = 5900;
    }else if(this.challenge_rating ==="11"){
      this.xp = 7200;
    }else if(this.challenge_rating ==="12"){
      this.xp = 8400;
    }else if(this.challenge_rating ==="13"){
      this.xp = 10000;
    }else if(this.challenge_rating ==="14"){
      this.xp = 11500;
    }else if(this.challenge_rating ==="15"){
      this.xp = 13000;
    }else if(this.challenge_rating ==="16"){
      this.xp = 15000;
    }else if(this.challenge_rating ==="17"){
      this.xp = 18000;
    }else if(this.challenge_rating ==="18"){
      this.xp = 20000;
    }else if(this.challenge_rating ==="19"){
      this.xp = 22000;
    }else if(this.challenge_rating ==="20"){
      this.xp = 25000;
    }else if(this.challenge_rating ==="21"){
      this.xp = 33000;
    }else if(this.challenge_rating ==="22"){
      this.xp = 41000;
    }else if(this.challenge_rating ==="23"){
      this.xp = 50000;
    }else if(this.challenge_rating ==="24"){
      this.xp = 62000;
    }else if(this.challenge_rating ==="30"){
      this.xp = 155000;
    }
  }
}

