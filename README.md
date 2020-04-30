# _D&D 5e Random Encounter Generator_
  

#### _Team Week Project at Epicodus, 04.30.2020_
  

#### By _**Daniel Merys, Mark Gridley, Reid Ashwill, Tyler Bates, Tyler Bowerman**_
  

## Description

_This application is designed to create random encounters using DnD monsters. All monster stats and information were pulled from the [Open5e API](https://open5e.com/)._

  
## Specs

| Spec                                                                                                             | Input                                                               | Output                                       |
|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|----------------------------------------------|
| Will calculate the XP threshold based on user selections                                                         | Average party level = 5, Number of members = 3, Difficulty = medium | XP Threshold = 1500                          |
| Will populate list of possible monsters based on user environment selection                                      | Desert environment                                                  | desert environment array is then called upon |
| Will select challenge appropriate monsters within environment array based on previously determined XP threshold. | Desert environment                                                  | eg. Bandit Captain, Lion, Giant Toad         |
| The user can then hit the Try Again button to start over.                                                        | click try again                                                     | the user will be taken back to the home page |


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

## Known Bugs

_No known bugs as of 04.30.2020_

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/reidashwill/random-encounter-generator/issues) here on GitHub._

## Technologies Used

_*HTML,*_
_*CSS,*_
_*JavaScript,*_
_*Bootstrap,*_
_*Open5e API*_

### License

*Licensed under the MIT license*
Copyright (c) 2020 **_Daniel Merys, Mark Gridley, Reid Ashwill, Tyler Bates, Tyler Bowerman_**