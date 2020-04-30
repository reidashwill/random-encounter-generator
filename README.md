# _D&D 5e Random Encounter Generator_
  

#### _Team Week Project at Epicodus, 04.30.2020_
  

#### By _**Daniel Merys, Mark Gridley, Reid Ashwill, Tyler Bates, Tyler Bowerman**_
  

## Description

_This application is designed to create random encounters using DnD monsters. All monster stats and information were pulled from the [Open5e API](https://open5e.com/)._

  
## Specs

| Spec                                                                       | Input                                                                                     | Output                                                      |
|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| Accept user inputs from dropdown menus                                     | Average party level = 5                                                                   | partyLevel = 5                                              |
| Determine xpThreshold based on user inputs                                 | Average party level = 5, Number of members = 3, Difficulty = medium                       | XP Threshold = 1500                                         |
| Place API call based on user inputs                                        | Click "Create Encounter"                                                                  | call https://api.open5e.com/monsters/ ${monsterPlaceholder} |
| API call limited in scope by user environment selection                    | Environment = Desert                                                                      | eg. Bandit Captain, Lion, Giant Toad                        |
| Assign monsterObject xp property for calculations                          | monster with challenge rating of "5"                                                      | monsterObject.xp = 1800                                     |
| Monsters selected based on xpThreshold calculation & environment selection | Environment = Desert, Average party level = 5, Number of members = 3, Difficulty = medium | XP Threshold = 1500, desertMonsterArray                     |
| EncounterGen selects random monster from environment array.                |                                                                                           |                                                             |
| Monsters with xp lower than XP threshold are added to encounter            | monster.xp = 1600, current xpThreshold = 1800                                             | monsterObject added to Encounter                            |
| Process repeats until xpThreshold is reached                               | monster.xp = 300, current xpThreshold = 200                                               | monsterObject not added to Encounter                        |
| Encounter is displayed to user                                             | click "Create Encounter"                                                                  | Array of monsters displayed                                 |
| Monster stats displayed to user on click                                   | click Bandit Captain                                                                      | strength: 15, hit points: 65, etc.                          |
| "Try Again" button clears encounter and refreshes page                     | click "Try Again"                                                                         | the user will be taken back to the home page                |


## Setup/Installation Requirements

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/reidashwill/random-encounter-generator```
* On Mac: ```open -a {your text editor} random-encounter-generator```
* On Windows: ```random-encounter-generator```
* Or navigate to cloned repository in the terminal
* Run the command npm install and then the command npm run start

_To Download Manually:_
* Navigate to https://github.com/reidashwill/random-encounter-generator
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "random-encounter-generator".
* Right click "index.html" and select your preferred browser or text editor.

_To view live:_
* [Click here!](https://friendly-dubinsky-5def3e.netlify.app)

## Known Bugs

_Due to unknown cause, sometimes the encounter array is not populated_
_Scaling the browser window is not ideal at this point_
_Viewing on a mobile device is not ideal at this point_

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/reidashwill/random-encounter-generator/issues) here on GitHub._

## Technologies Used

_*HTML,*_
_*CSS,*_
_*JavaScript,*_
_*Bootstrap,*_
_*Open5e API*_
_*NodeJs*_
_*Webpack*_
_*Jquery*_


### License

*Licensed under the MIT license*
Copyright (c) 2020 **_Daniel Merys, Mark Gridley, Reid Ashwill, Tyler Bates, Tyler Bowerman_**