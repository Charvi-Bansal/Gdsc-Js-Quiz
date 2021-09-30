const quizDb = [
    {
      question:
        "Q1.Keeping which of the following functionalities activated all the time can cause serious threat to the security of your mobile phone?",
      a: "Flashlight",
      b: "Bluetooth",
      c: "Rotation",
      d: "All of the above",
      ans: "ans2"
    },
    {
      question: "Q2.Smishing is a type of attack done over",
      a: "Email",
      b: "SMS",
      c: "Wi-Fi",
      d: "Pen Drive",
      ans: "ans2"
    },
    {
      question:
        "Q3.Which among the below is not a correct example of multi-factor authentication?",
      a: " Password + SMS OTP",
      b: " Password + PIN",
      c: " Password + Face recognition",
      d: "Entering PIN for a card transaction while withdrawing money at ATM",
      ans: "ans4"
    },
    {
      question:
        "Q4.If you are an Android user, which of these sources are safe to install apps / games?",
      a: "UC Browser",
      b: "Google Play Store",
      c: "ShareIT",
      d: "All of the above",
      ans: "ans2"
    },
    {
      question:
        "Q5. Which of the following details can be shared over phone whenever you receive calls stating from banks or any other support team?",
      a: "Account number",
      b: "CVE number",
      c: "Card expiry details",
      d: "None of the above",
      ans: "ans4"
    },
    {
      question:
        "Q6. Is it safe to install a pen drive that you find on the roadside directly in your system?",
      a: "Yes, always",
      b: "Only if the system’s anti-virus is updated",
      c: "Pick and clean the pendrive and then use it",
      d: " Never",
      ans: "ans4"
    },
    {
      question:
        "Q7.You have made friendship with a stranger online. After some time, the person asks for your personal details. Is it safe?",
      a: "Yes, always",
      b: "Only if you are online friends for 2 weeks",
      c: "Only if you are online friends for 3 weeks",
      d: "Never",
      ans: "ans4"
    },
    {
      question:
        "Q8. _____ helps to keep your social media accounts safe and secure",
      a: "Enabling two factor authentication",
      b: "Using strong password",
      c: "Using unique password",
      d: "All of the above",
      ans: "ans4"
    },
    {
      question:
        "Q9.What are the scenarios where it is acceptable to share your password with a colleague?",
      a: "When you are on leave",
      b: "When directed by your supervisor",
      c: "When the colleague is trustworthy",
      d: "Never",
      ans: "ans4"
    },
    {
      question: "Q10.Which of the following password is more secure?",
      a: "Boat123",
      b: "WTh!5Z7",
      c: "into*48",
      d: "123456",
      ans: "ans2"
    }
  ];
  
  const question = document.querySelector(".question");
  const option1 = document.querySelector("#option1");
  const option2 = document.querySelector("#option2");
  const option3 = document.querySelector("#option3");
  const option4 = document.querySelector("#option4");
  const submit = document.querySelector("#submit");
  
  const answers = document.querySelectorAll(".answer");
  
  const showScore = document.querySelector("#showScore");
  
  let questionCount = 0;
  let score = 0;
  
  const loadQuestion = () => {
    const questionList = quizDb[questionCount];
  
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
  };
  
  loadQuestion();
  
  const getCheckAnswer = () => {
    let answer;
  
    answers.forEach((currAnsElem) => {
      if (currAnsElem.checked) answer = currAnsElem.id;
    });
  
    return answer;
  };
  
  const deselectAll = () => {
    answers.forEach((currAnsElem) => (currAnsElem.checked = false));
  };
  
  submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
  
    if (checkedAnswer === quizDb[questionCount].ans) {
      score++;
    }
  
    questionCount++;
  
    deselectAll();
  
    if (questionCount < quizDb.length) {
      loadQuestion();
    } else {
      showScore.innerHTML = ` 
      <h3>You are ${score}/${quizDb.length} cyber aware! </h3> 
      <button class="btn" onclick="location.reload()"> 
      Play again
      </button>
      
      `;
  
      showScore.classList.remove("scoreArea");
    }
  });
  
