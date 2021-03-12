/*
This class stores all the possible word cases within the string and stores a response to the script that the bot will reply to. 
It uses 2D arrays to store the data that the bot will sort through in order to find the proper case.
*/ 
const prompts = [
    // beginning of bot script (user replies to bot) hopefully the order
    ["im good", "im fine", "im great", "im decent", "im ok"], //1 Feeling Good
    ["im feeling bad", "im terrible", "im awful"],  //2 Feeling bad
    [""],//cannot expect prompt (name)  3
    [""],//cannot expect prompt (order number)  4
    ["happy with", "satisfied with", "pleased with", "works"],  //5 Happy
    ["do not understand", "not working", "need repairs", "damaged"],  //6 Confused/Broken
    ["hate", "dislike","unhappy", "does not work", "bad quality", "dissatisfied","unsatisfied",], //7 Unhappy
    [""],  //8
    [""],  //9
    [""],  //10
    ["yes", "no"],  //11
    [""],  //12
    [""],  //10
    [""],  //11
    ["refund", "replace", "talk"],
    [""], // no match
    [""], // no match explain
    ["refund", "replace", "talk"],
    [""],
    [""],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    ["yes", "no"],
    [""],
    [""], // google form feedback
    [""],

    //Default Cases
    ["hello", "hilo", "hi", "hey", "heya", "hey", "good morning", "good afternoon", "good evening"],
    ["how are you", "how is life", "how is it going"],
    ["what are you doing", "what is going on", "what is up", "whats up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot", "are you bot or human"],
    ["who created you", "who is your creator", "who made you"],
    ["your name please", "your name", "may i know your name", "what is your name", "what call yourself", "what are you called"],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "awesome", "excited"],
    ["bad", "bored", "tired", "awful", "horrible", "miserable", "angry", "terrible"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice", "alright"],
    ["bye", "good bye", "goodbye", "see you later", "see ya"],
    ["what should i eat today", "hungry"],
    ["bro"],
    ["what", "why", "how", "where", "when", "who"],
    ["no", "not sure", "maybe", "no thanks"],
    [""],
    ["haha", "ha", "lol", "hehe", "heehee", "funny", "joke"]
]



//Ideal script followed by any default replies
const replies = [
    
    // beginning of bot script (bot goes first here)

    //["Hi! Thank you for choosing our store. How are you doing today?"], Needs to be autogenerated, not in array
    
    ["I am glad to hear that! Could I please get your name?"],  //1 Feeling Good
    ["I am very sorry to hear that! Could I please get your name?"],  //2 Feeling bad
    //if either of these two cases are called, get name as variable, then call next array line^^ 
    ["Nice to meet you (+ name if you wish)! Could you please enter the order number found on your receipt?"],  //3 name response
    //if this array function is called then call next array line^^
    ["How can we assist you with your product?"], //4 //order number response
    ["We're sorry to hear that this has occured, can you give more specific information about your problem?"], //5
    ["I am sorry that this product has given you trouble, could you please tell us further what is broken or confusing?"],  //6
    ["I am so sorry for your experience. Do you want a replacement, refund, or talk to an executive? Please pick one."],  //7
    ["Here's the contact information of an executive you may contact between 10:00 AM to 4:00 PM PST."],  //8
    ["Thank you for sharing your feedback. Hope you have a better experience next time!"],  //9
    ["We are happy to receive this positive feedback! Would you like to be our premium customer?"],  //10
    ["Sounds good! Here's the form to fill to be a premium customer."],  //11
    ["That's okay. Maybe some other time."],  //12
    ["Thank you for the feedback. Hope we can always serve you well!"],  //13
    ["What can we help you with? Please specify."],
    ["Sorry. Could you please explain in detail?"],
    ["I'm sorry if we're not able to help you with your specific query. I could offer you a refund or a replacement for your order, or I could connect you to an executive."],
    ["Sorry we cannot help you with your specific query. Here are some FAQs you might want to look into."],
    ["How would you rate this conversation?"],
    ["We're so sorry, would you like to file a complaint?"],
    ["Let us know how we can improve!"],
    ["Thank you for using our service, we're glad we could be of service!"],

    //default replies:
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy!"],
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you"],
    ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The one true God, Javascript"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Bro!"],
    ["Great question"],
    ["That's ok", "I understand", "What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!", "Good one!"],

]

//Pulls a random string if user input is completely unknown.
const defaultResponse = [
    "My apologies, I dont understand what you are trying to say. Could you rephrase that?",
    "Please try a different query.",
    "Please elaborate...",
    "I don't understand, sorry!",
    "That does not compute! Please try again."
]