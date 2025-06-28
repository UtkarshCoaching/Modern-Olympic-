const questions = [
    {
        question: "আধুনিক অলিম্পিক গেমস কবে শুরু হয়েছিল?",
        options: ["1892", "1896", "1900", "1904"],
        answer: "1896"
    },
    {
        question: "প্রথম আধুনিক অলিম্পিক গেমস কোন শহরে অনুষ্ঠিত হয়েছিল?",
        options: ["প্যারিস", "লন্ডন", "এথেন্স", "রোম"],
        answer: "এথেন্স"
    },
    {
        question: "অলিম্পিক রিং-এ কয়টি রিং থাকে?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "অলিম্পিক মটো 'Citius, Altius, Fortius' এর অর্থ কী?",
        options: ["দ্রুত, শক্তিশালী, সাহসী", "দ্রুত, উচ্চতর, শক্তিশালী", "উচ্চতর, শক্তিশালী, বিজয়ী", "দ্রুত, উচ্চতর, সাহসী"],
        answer: "দ্রুত, উচ্চতর, শক্তিশালী"
    },
    {
        question: "অলিম্পিক গেমসে সোনার মেডেল কিসের তৈরি হয়?",
        options: ["বিশুদ্ধ সোনা", "রুপার উপর সোনার প্রলেপ", "পিতল", "তামা"],
        answer: "রুপার উপর সোনার প্রলেপ"
    },
    {
        question: "কোন মহাদেশ অলিম্পিক রিং-এ প্রতিনিধিত্ব করে না?",
        options: ["এশিয়া", "আফ্রিকা", "অ্যান্টার্কটিকা", "ইউরোপ"],
        answer: "অ্যান্টার্কটিকা"
    },
    {
        question: "কোন দেশ গ্রীষ্মকালীন অলিম্পিকে সবচেয়ে বেশি মেডেল জিতেছে?",
        options: ["চীন", "রাশিয়া", "মার্কিন যুক্তরাষ্ট্র", "গ্রেট ব্রিটেন"],
        answer: "মার্কিন যুক্তরাষ্ট্র"
    },
    {
        question: "প্রথম শীতকালীন অলিম্পিক গেমস কবে অনুষ্ঠিত হয়েছিল?",
        options: ["1920", "1924", "1928", "1932"],
        answer: "1924"
    },
    {
        question: "অলিম্পিক শিখা প্রথম কবে প্রবর্তন করা হয়েছিল?",
        options: ["1920", "1928", "1936", "1948"],
        answer: "1928"
    },
    {
        question: "অলিম্পিকে ব্যক্তিগতভাবে সবচেয়ে বেশি মেডেল জেতা ব্যক্তি কে?",
        options: ["উসাইন বোল্ট", "মাইকেল ফেল্পস", "কার্ল লুইস", "ল্যারিসা লাতিনিনা"],
        answer: "মাইকেল ফেল্পস"
    },
    {
        question: "অলিম্পিক গেমস কত বছর পর পর অনুষ্ঠিত হয়?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "অলিম্পিক মশাল রিলে প্রথম কবে চালু হয়?",
        options: ["1936", "1948", "1952", "1960"],
        answer: "1936"
    },
    {
        question: "ভারতীয় অলিম্পিক অ্যাসোসিয়েশন কবে প্রতিষ্ঠিত হয়েছিল?",
        options: ["1924", "1927", "1930", "1932"],
        answer: "1927"
    },
    {
        question: "কোন ভারতীয় মহিলা প্রথম অলিম্পিক মেডেল জিতেছিলেন?",
        options: ["পি.টি. ঊষা", "কর্নম মালেশ্বরী", "সাকশি মালিক", "পি.ভি. সিন্ধু"],
        answer: "কর্নম মালেশ্বরী"
    },
    {
        question: "কোন শহরে 3 বার গ্রীষ্মকালীন অলিম্পিক গেমস অনুষ্ঠিত হয়েছে?",
        options: ["লন্ডন", "প্যারিস", "লস অ্যাঞ্জেলেস", "উপরের সবগুলি"],
        answer: "উপরের সবগুলি"
    },
    {
        question: "অলিম্পিকের ফ্ল্যাগে কোন রঙের ব্যাকগ্রাউন্ড থাকে?",
        options: ["লাল", "নীল", "সাদা", "সবুজ"],
        answer: "সাদা"
    },
    {
        question: "প্রাচীন অলিম্পিক গেমস প্রথম কবে অনুষ্ঠিত হয়েছিল?",
        options: ["776 BC", "393 AD", "100 BC", "1896 AD"],
        answer: "776 BC"
    },
    {
        question: "অলিম্পিকে অংশগ্রহণকারী প্রথম ভারতীয় কে ছিলেন?",
        options: ["নরম্যান প্রিচার্ড", "কে.ডি. যাদব", "ধ্যান চাঁদ", "মিলখা সিং"],
        answer: "নরম্যান প্রিচার্ড"
    },
    {
        question: "কোন খেলাটি অলিম্পিক গেমসে সবচেয়ে বেশি ইভেন্ট নিয়ে গঠিত?",
        options: ["সাঁতার", "অ্যাথলেটিক্স", "জিমন্যাস্টিকস", "সাইক্লিং"],
        answer: "অ্যাথলেটিক্স"
    },
    {
        question: "2024 সালের গ্রীষ্মকালীন অলিম্পিক গেমস কোন শহরে অনুষ্ঠিত হবে?",
        options: ["লস অ্যাঞ্জেলেস", "প্যারিস", "রোম", "টোকিও"],
        answer: "প্যারিস"
    },
    {
        question: "একই অলিম্পিকে 9টি স্বর্ণপদক জয়ী একমাত্র অ্যাথলেট কে?",
        options: ["মাইকেল ফেল্পস", "উসাইন বোল্ট", "ল্যারিসা লাতিনিনা", "মার্ক স্পিটজ"],
        answer: "মার্ক স্পিটজ"
    },
    {
        question: "অলিম্পিক শপথ প্রথম কবে গ্রহণ করা হয়?",
        options: ["1896", "1920", "1936", "1952"],
        answer: "1920"
    },
    {
        question: "অলিম্পিক মাস্কট (Mascot) প্রথম কবে প্রবর্তন করা হয়?",
        options: ["1968", "1972", "1976", "1980"],
        answer: "1968"
    },
    {
        question: "অলিম্পিক গেমসের সর্বোচ্চ নিয়ন্ত্রক সংস্থা কোনটি?",
        options: ["জাতিসংঘ", "আন্তর্জাতিক অলিম্পিক কমিটি (IOC)", "বিশ্ব ক্রীড়া পরিষদ", "ইউরোপীয় অলিম্পিক কমিটি"],
        answer: "আন্তর্জাতিক অলিম্পিক কমিটি (IOC)"
    },
    {
        question: "অভিনব বিন্দ্রা কোন অলিম্পিক ইভেন্টে ভারতের প্রথম ব্যক্তিগত স্বর্ণপদক জিতেছিলেন?",
        options: ["শ্যুটিং", "কুস্তি", "বক্সিং", "ব্যাডমিন্টন"],
        answer: "শ্যুটিং"
    }
];
// আপনি এই ডেটা ব্যবহার করে একটি কুইজ অ্যাপ তৈরি করতে পারেন।
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let selectedOption = null;
let answeredQuestions = new Array(questions.length).fill(false);
let questionTimerInterval;
const questionTimeLimit = 30;
let questionTimeLeft;

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const totalQuestionsInfo = document.getElementById('totalQuestionsInfo');
const fullMarksInfo = document.getElementById('fullMarksInfo');
const timeLimitInfo = document.getElementById('timeLimitInfo');

const scoreDisplayElem = document.getElementById('scoreDisplay');
const questionIndexDisplayElem = document.getElementById('questionIndexDisplay');

const questionTextBox = document.getElementById('questionTextBox'); // New element for question text
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextButton = document.getElementById('nextButton');
const skipButton = document.getElementById('skipButton');
const submitButton = document.getElementById('submitButton');


const questionTimerTextElem = document.getElementById('questionTimer');
const progressRingBar = document.querySelector('.progress-ring-bar');
const circumference = 2 * Math.PI * 35;
progressRingBar.style.strokeDasharray = circumference;
progressRingBar.style.strokeDashoffset = circumference;


// Set initial info on start screen
totalQuestionsInfo.textContent = questions.length;
fullMarksInfo.textContent = questions.length;
timeLimitInfo.textContent = Math.ceil(questions.length * questionTimeLimit / 60);

// Event Listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', handleNextQuestion);
skipButton.addEventListener('click', handleSkipQuestion);
submitButton.addEventListener('click', handleSubmitQuiz);


function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
    scoreDisplayElem.textContent = score;
}


function updateQuestionTimerDisplay() {
    questionTimerTextElem.textContent = questionTimeLeft;

    const offset = circumference - (questionTimeLeft / questionTimeLimit) * circumference;
    progressRingBar.style.strokeDashoffset = offset;

    // Change color based on time left
    if (questionTimeLeft <= 10) {
        progressRingBar.style.stroke = '#FF6347';
    } else if (questionTimeLeft <= 20) {
        progressRingBar.style.stroke = '#FFD700';
    } else {
        progressRingBar.style.stroke = '#28a745';
    }
}

function startQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTimeLeft = questionTimeLimit;
    updateQuestionTimerDisplay();
    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimerDisplay();
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimerInterval);
            handleTimeUp();
        }
    }, 1000);
}


function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        handleSubmitQuiz();
        return;
    }
    clearInterval(questionTimerInterval);
    startQuestionTimer();

    const currentQuestion = questions[currentQuestionIndex];
    questionIndexDisplayElem.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    questionTextBox.textContent = currentQuestion.question; // Set question text here
    optionsContainer.innerHTML = '';
    feedbackMessage.textContent = '';
    feedbackMessage.style.color = 'transparent';
    selectedOption = null;

    nextButton.style.display = 'none';
    skipButton.style.display = 'inline-block';
    submitButton.style.display = 'none';

    if (currentQuestionIndex === questions.length - 1) {
        submitButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        skipButton.style.display = 'none';
    }

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, option));
        optionsContainer.appendChild(button);
    });

    enableOptions();
}


function selectOption(selectedButton, selectedAnswer) {
    if (answeredQuestions[currentQuestionIndex]) return;

    clearInterval(questionTimerInterval);

    disableOptions();

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer; 

    selectedButton.classList.add('selected');

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score += 1;
        correctCount++;
        feedbackMessage.textContent = 'সঠিক উত্তর!';
        feedbackMessage.style.color = '#28a745';
    } else {
        selectedButton.classList.add('wrong');
        score -= 0.33;
        wrongCount++;
        feedbackMessage.textContent = `ভুল উত্তর। সঠিক উত্তর: ${correctAnswer}`;
        feedbackMessage.style.color = '#dc3545';
        
        Array.from(optionsContainer.children).forEach(optionBtn => {
            if (optionBtn.textContent === correctAnswer) {
                optionBtn.classList.add('correct');
            }
        });
    }

    scoreDisplayElem.textContent = score.toFixed(2);
    answeredQuestions[currentQuestionIndex] = true;

    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function handleTimeUp() {
    if (answeredQuestions[currentQuestionIndex]) return;

    skippedCount++;
    answeredQuestions[currentQuestionIndex] = true;
    
    showAnswer();
    disableOptions();
    
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function showAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer; 

    Array.from(optionsContainer.children).forEach(optionBtn => {
        optionBtn.style.pointerEvents = 'none';
        if (optionBtn.textContent === correctAnswer) {
                optionBtn.classList.add('correct');
        }
    });
    feedbackMessage.textContent = `সঠিক উত্তর: ${correctAnswer}`;
    feedbackMessage.style.color = '#ffc107';
    
    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function disableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
}

function enableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.classList.remove('selected', 'correct', 'wrong');
    });
}


function handleNextQuestion() {
    if (!answeredQuestions[currentQuestionIndex]) {
        skippedCount++;
        answeredQuestions[currentQuestionIndex] = true;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function handleSkipQuestion() {
    if (!answeredQuestions[currentQuestionIndex]) {
        clearInterval(questionTimerInterval);
        skippedCount++;
        answeredQuestions[currentQuestionIndex] = true;
        
        showAnswer();
        disableOptions();
        
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 2000);
    }
}


function handleSubmitQuiz() {
    clearInterval(questionTimerInterval);
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    document.getElementById('finalTotalQuestions').textContent = questions.length;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = wrongCount;
    document.getElementById('skippedQuestions').textContent = skippedCount;
    document.getElementById('finalScore').textContent = score.toFixed(2);
    document.getElementById('finalFullMarks').textContent = questions.length;
}