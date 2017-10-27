# _Zoo Animal Tracker_

#### _An application that allows a user to keep track of information about individual zoo animals, 10.27.2017_

#### By _**Margaret Berry**_

## Description

_This application allows users to store and edit information about individual zoo animals, including name, species, age, and more.  Animals can be viewed in a list, which can be filtered by animal age._

## Setup/Installation Requirements

_Run the following commands in Terminal:_

* _$ git clone (https://github.com/margaret85/angular-zoo.git)_
* _$ cd angular-zoo_
* _$ npm install_
* _$ bower install_
* _$ gulp build_
* _$ npm start_

## User Stories

* _A user can log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike._
* _A user can view a list of animals they have logged._
* _A user can view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older)._
* _A user can click an animal to edit its name, age or caretakers._

## Specifications

| Spec                                                | Input       | Output           |
|-----------------------------------------------------|-------------|------------------|
| Log a new animal and see it in the list. | New Animal: Name: Simba, Age: 3, Zoo Location: Mammal Trail, Caretakers: 2, Sex: Male, Likes: Nala, Dislikes: Scar | Animal List: Name: Simba, Age: 3, Zoo Location: Mammal Trail, Caretakers:2, Sex: Male Likes: Nala, Dislikes: Scar |
| Edit an animal's name, age, or caretakers and see changes in the list. | Edit Animal: Name: King Simba, Age: 4, Caretakers: 3| Animal List: Name: King Simba, Age: 4, Zoo Location: Mammal Trail, Caretakers: 3, Sex: Male Likes: Nala, Dislikes: Scar |
| See only animals under 2 | Filter by Age: Young animals | Animal List: Name: Baby Simba, Age: 1 |
| See only animals age 2 and over | Filter by Age: Mature animals | Animal List: Name: Mufasa, Age: 10 |

## Known Bugs

_There are no known bugs at this time._

_In the future, I would like to expand the application to display the total number of caretakers needed, and to sort animals by species and diet._

## Support and contact details

_If you have any updates or suggestions please contact [Margaret] or make a contribution yourself._

[Margaret]: mailto:margaretshelaghmcgovern@gmail.com

## Technologies Used

* _JavaScript_
* _Angular 2_
* _Node_
* _Bower_

### License

*MIT License*

Copyright (c) 2017 **_Margaret Berry_**
