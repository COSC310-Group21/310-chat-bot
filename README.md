# COSC 310 - Project Repository. Customer Service Chatbot.
Our respository for the COSC 310 Assignments/Project for group 21.

Members include Joshua Medina-Quiaro, Ramisa Mahboob, Fareeha Hayat, Shreyasi Chauhan, and Megan Nguyen.

### Code Running:

To run the program and test the bot, please open index.html in a browser.


# Class Breakdown:

## App.js: 
This class is the main class that will handle the bots main functionality. It listens to the document for user inputs and will generate the proper actions in receiving and appending text to the chat bot, it will call words.js in order to find what messages to reply as. Functions included in app.js are:

### read(userInput)
This function cleans up the user input and tries to find a match in our prompts array with compare(). Once a match is found, it outputs the reply with addchat().

### compare(arrayPrompt, arrayReplies, string)
This function takes a string and tries to find a match in arrayPrompt. Once a match is found, the functions returns a corresponding reply from arrayReplies.

### addChat(userMessage, botMessage)
This function prints the message typed by the user as well as the response from the bot.


## Words.js
This class is responsible for holding the datastructure of the prompt words and responses for each sequence. It contains an order 2-D list of prompts and responses and as well will hold the default responses to null prompt statements. This essentialy contains two arrays - prompts and responses. Prompts consists of all the possible phrases that the user might enter. 

# Project Waterfall Development Plan:

## Description:
Our group has decided on creating a chatbot that focuses on customer satisfaction. The chatbot is intended to be deployed on web stores to gather customer feedback on their experience of the goods/services received. The chatbot should be able to mimic an understanding of what the customer is expressing and respond accordingly (i.e display a sympathetic tone when receiving a complaint from the customer) as well as offer to carry out appropriate actions (direct customer to related FAQ section, offer to file a complaint, connect customer to a live agent, etc.)

https://github.com/COSC310-Group21/project

## SDLC: Waterfall
The key aspect of a waterfall model is gathering all the requirements at the beginning of the project, allowing every other phase to be planned without further customer correspondence until the product is complete. Since the customer service bot we are developing is a relatively simple one and we already know the deliverables we can easily use a sequential development model. 

### Phase 0: Project Plan
- Description
- SDLC
  - List phases
  - List tasks
- WBS
- Gantt Chart

### Phase 1: Requirements
- Gather user requirements
- Gather system requirements
- Gather resource requirements

### Phase 2: System Design Plans
- Create chat-bot flow structure
  - Find general cases to lead to other
  - Cases that lead to a default ending
- Create class breakdown

### Phase 3: Implementation 
- Code in classes 
- Create methods for classes
- Code implementation for base chat-bot structure
  - Comment code

### Phase 4: Integration, Testing
- Code reviews to find any potential errors within
- Test program using edge cases and general conversation
  - Fix where unknown breaks are found

## WBS:
This breakdown structure shows the amount of hours each team member put into the project in our various phases. You can see here we have different categories of work within from the initial planning stages onto the coding and testing of the bot program.

## Gantt Chart:

![The first section of the Gantt Chart](https://user-images.githubusercontent.com/60419500/110990210-425d1f00-8330-11eb-8bc7-0c4b3b66f177.PNG)
![The second section of the Gantt Chart](https://user-images.githubusercontent.com/60419500/110990212-42f5b580-8330-11eb-901e-144f9686f90a.png)

This chart was created with our task list within Trello where we have used the labels as milestones that are all dependent on each other in order to follow our plan based project. The milestones go in order of green-> yellow -> orange  -> red -> purple in gradient order. The milestones made in our plan also act as dependencies for the next task as they are in order. Off of this we assigned people to each task and within Trello we can organize the tasks of each member.


## Limitations:
The limitations of our program are very vast as most of it feigns responsivness. Some general case limiations are:
 - Specific informational queries cannot be answered as no actual product is shown
 - Spelling mistakes cannot be accounted for
 - Handles synonyms to a certain extent
 - Specific nouns are feigned to be learned but are not actually recognized
 - Multiple questions do not work
 - Queries with mutiple emotions do not work (I am disappointed with this product even though my sister is happy with it)

## Sample Output: 

*Src needed*

## Limiations Output:

*Src needed*

## Meeting Times:

M1) Monday . . . February 22, 2021 12:00 PM - 2:00 PM
- Discussed project and decided who would work on which parts of plan
- Learned CASE tools and how to create our chat bot
- Wrote Project Plan Description
- Wrote SDLC Description
- Created the tasks for our Trello

M2) Wednesday . . . February 24, 2021 2:00 PM- 3:30 PM
- Created our Gantt chart off of our Trello and organized it
- Created Java project, and repository
- Writing classes for project

M3) Sunday . . . February 28, 2021 1:00 PM - 3:30 PM

- Created class breakdown structure
- Coded class structure
- Wrote bot script https://docs.google.com/document/d/1zeG5EIxBwp9Zs1pyxpFQ05yKEaw1mAj2MkaP1VBdMvI/edit
- Created proper README

M4) Wednesday . . . March 3, 2021 2:00 PM - 3:00 PM
- OpenNLP Maven setup

M5) Wednesday . . . March 10, 2021 2:00 PM - 4:00 PM
- Revamped program to be HTML Javascript imbedded
- Created new file structure and class structure for new setup
- Planned full scale and flow of bot
- Created event listener for user input
- Added read function to app.js
- Added compare function to app.js
- Started adding to words.js
- Finished writing bot script 


M6) Friday . . . March 12, 2021 10:10 AM - 8:00 PM
- Formatted the chat containers in the HTML and CSS files
- Fixed the image position on CSS 
- Edited read function 
- Edited addChat function
- Completed words.js
- Updated README
- Finished Work Breakdown Structure

