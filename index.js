// I have coded this in such a way such that every exercise is included I know Tanay sir showed the same way but I loved this because everytime I typed it felt like I am recalling  everything which I have learned//
var readlineSync = require("readline-sync")
var chalk = require("chalk")
var welcomeUser = readlineSync.question(chalk.red("Hello welcome to my 'How well do you know about INDIA' quiz. What is your name ? "))
var useranswer = ("\nWelcome  " + welcomeUser + " lets begin the game !")
console.log(useranswer)
var score = 0
console.log(chalk.green("\nTo reach your goal, you must pass four levels, each one harder than the last. When you reach the desired score for one level, you can move to the next. You'll face tougher challenges as you progress. So work hard and stay focused, and you'll make it to the top!"))
//Level 1//
console.log("\n----Level 1-----")
var firstQues = readlineSync.question("\n Who is the President of India ? ")

if (firstQues === "Droupadi Murmu") {
  console.log(chalk.bgGreen("You are right !"))
  score = score + 1
}
else {
  console.log(chalk.bgRed("You are wrong !"))
  score = score - 1
}
var secondQues = readlineSync.question("\nHow many states are there? ")
if (secondQues === "28") {
  console.log(chalk.bgGreen("You are right !"))
  score = score + 1
}
else {
  console.log(chalk.bgRed("You are wrong !"))
  score = score - 1
}

console.log("\nYour final score is: " + score)


function play(question, answer) {
  var thirdQues = readlineSync.question(question)
  if (thirdQues === answer) {
    console.log(chalk.bgGreen("You are right!"))
    score = score + 1
  }
  else {
    console.log(chalk.bgRed("You are wrong!"))
    score = score - 1
  }
}


{
  //Level 2
  if (score === 2) {

    console.log("\nCongratulation you qualified for level 2 !")
    play("\nWhat is the National Anthem of India? ", "Jan gana mana")
    play("What is the National Song of India? ", "Vande Mataram")
    play("What is the National Tree of India? ", "Banyan")
    play("What is the National Fruit of India?", "Mango")
    console.log("\nYour final Score after Level 2: " + score)
  }
  //Level 3// 
  if (score === 6) {
    console.log("\nCongratulation you qualified for level 3 !")

    var questions = [{
      question: "\nIn which Indian State would you be if you were holidaying on Calangute beach? ",
      answer: "Goa",
    },
    {
      question: "Which India city is also called the The city of Joy?",
      answer: "Kolkata",
    }, {
      question: "Which river is known as the Sorrow of Bihar? ",
      answer: "Kosi",
    },
    {
      question: "In which State of India is the Wular Lake located?",
      answer: "Jammu & Kashmir"
    }]

    for (var i = 0; i < questions.length; i++) {
      var currentQuestion = questions[i]
      play(currentQuestion.question, currentQuestion.answer)


    }
    console.log("\nYour final score after level 3: " + score)
  }
  //Level 4//
  if (score === 10) {
    console.log("\nCongratulation you have qualified for level 4 !")
    var questionsNew = [{ question: "Which state is known as India's Spice Garden? ", answer: "Kerala", }, { question: "On Which river bank Goa is located? ", answer: "Mandovi", }, { question: "which is the First Uniersity in India? ", answer: "Kolkata University", }, { question: "Tungabhadra and Bhima are the tributaries of? ", answer: "Krishna", }]
    for (i = 0; i < questionsNew.length; i++) {
      var currentQuestionNew = questionsNew[i]
      play(currentQuestionNew.question, currentQuestionNew.answer)

    }

    console.log(chalk.bgCyanBright("\nYour final score after level 4: " + score))
    if (score === 14) {
      console.log(chalk.bgBlueBright("\nCongratulations! You know INDIA very well!"))
    }
    else {
      console.log("\nSorry! You have to upgrade your GK regarding INDIA. Brush up your GK and attempt again. \n Thank you for playing.")
    }
  }

  else {
    console.log(chalk.bgYellowBright("\nSorry you haven't qualified for next level. Thank you for playing"))
  }

}







