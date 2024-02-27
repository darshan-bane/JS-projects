const questions = [{
    'que': 'Which of the following is a markup language',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JS',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'Where is SLITS office',
    'a': 'Byculla',
    'b': 'Dombivali',
    'c': 'Ratnagiri',
    'd': 'Chiplun',
    'correct': 'b'
},
{
    'que': 'Which among this is bird',
    'a': 'lion',
    'b': 'tiger',
    'c': 'elephant',
    'd': 'crow',
    'correct': 'd'
}
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong =0;
const queBox = document.getElementById("queBox")
const optionInput = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data)
    queBox.innerText = `${index+1}) ${data.que}`
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        
    }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3>Thank you for submitting the quiz</h3>
    <h2> ${right} / ${total} are correct</h2>
    `
}

loadQuestion();