const questions = [
    {
        question: "在社交场合中，你通常更倾向于：",
        options: ["主动与人交流，结识新朋友", "观察周围环境，与熟悉的人交谈", "保持安静，倾听他人说话", "寻找独处的机会"],
        scores: { E: 3, I: 0, E: 2, I: 1 }
    },
    {
        question: "当你需要做出重要决策时，你更依赖：",
        options: ["直觉和灵感", "逻辑和分析", "他人的建议", "过去的经验"],
        scores: { N: 3, S: 0, N: 2, S: 1 }
    },
    {
        question: "你更喜欢哪种工作方式：",
        options: ["有明确的计划和截止日期", "灵活自由，按自己的节奏", "与团队协作完成", "独立完成，不受干扰"],
        scores: { J: 3, P: 0, J: 2, P: 1 }
    },
    {
        question: "在团队合作中，你通常扮演的角色是：",
        options: ["领导者，负责决策", "协调者，促进沟通", "创意者，提出想法", "执行者，落实细节"],
        scores: { E: 3, F: 2, N: 1, S: 0 }
    },
    {
        question: "当你感到压力大时，你会：",
        options: ["找人倾诉", "独自思考解决", "做运动或户外活动", "沉浸在自己的爱好中"],
        scores: { E: 3, I: 0, E: 2, I: 1 }
    },
    {
        question: "你更看重：",
        options: ["事实和数据", "可能性和想象", "和谐与人际关系", "效率和结果"],
        scores: { S: 3, N: 0, F: 2, T: 1 }
    },
    {
        question: "你更喜欢学习：",
        options: ["具体的技能和知识", "抽象的理论和概念", "通过实践体验", "通过阅读和观察"],
        scores: { S: 3, N: 0, S: 2, N: 1 }
    },
    {
        question: "在争论中，你更倾向于：",
        options: ["坚持自己的观点", "寻找妥协方案", "倾听对方观点", "避免冲突"],
        scores: { T: 3, F: 0, T: 2, F: 1 }
    },
    {
        question: "你通常如何安排周末：",
        options: ["制定详细计划", "随性而为", "与朋友聚会", "独自放松"],
        scores: { J: 3, P: 0, E: 2, I: 1 }
    },
    {
        question: "你更喜欢的沟通方式：",
        options: ["面对面交流", "文字消息", "电话沟通", "邮件沟通"],
        scores: { E: 3, I: 0, E: 2, I: 1 }
    },
    {
        question: "你如何看待规则：",
        options: ["严格遵守", "灵活运用", "视情况而定", "尽量避免"],
        scores: { J: 3, P: 0, J: 2, P: 1 }
    },
    {
        question: "你更容易被什么吸引：",
        options: ["新奇的想法", "实用的信息", "美好的事物", "深刻的思考"],
        scores: { N: 3, S: 0, F: 2, T: 1 }
    },
    {
        question: "当团队意见不一致时，你会：",
        options: ["分析利弊做出决策", "寻求共识", "尊重每个人的意见", "提出折中方案"],
        scores: { T: 3, F: 0, F: 2, T: 1 }
    },
    {
        question: "你更喜欢的工作环境：",
        options: ["有组织、有条理", "自由、灵活", "充满活力", "安静、专注"],
        scores: { J: 3, P: 0, E: 2, I: 1 }
    },
    {
        question: "你更擅长：",
        options: ["分析问题", "理解他人", "创新思维", "执行任务"],
        scores: { T: 3, F: 0, N: 2, S: 1 }
    },
    {
        question: "在做决定时，你更看重：",
        options: ["公平和公正", "感受和关系", "逻辑和理性", "和谐和共识"],
        scores: { T: 3, F: 0, T: 2, F: 1 }
    },
    {
        question: "你更喜欢：",
        options: ["提前计划", "随机应变", "按部就班", "即兴发挥"],
        scores: { J: 3, P: 0, J: 2, P: 1 }
    },
    {
        question: "你如何获取能量：",
        options: ["与他人交往", "独自思考", "参加社交活动", "阅读或冥想"],
        scores: { E: 3, I: 0, E: 2, I: 1 }
    },
    {
        question: "你更关注：",
        options: ["整体和概念", "细节和事实", "未来的可能性", "当下的现实"],
        scores: { N: 3, S: 0, N: 2, S: 1 }
    },
    {
        question: "你认为自己更：",
        options: ["理性客观", "感性体贴", "果断坚定", "温和包容"],
        scores: { T: 3, F: 0, T: 2, F: 1 }
    }
];

const results = {
    ISTJ: {
        name: "后勤型人格",
        description: "ISTJ型的人是可靠、务实的组织者。他们重视传统、秩序和稳定，善于把事情安排得井井有条。他们是值得信赖的执行者，能够高效地完成任务。",
        traits: ["内向", "感觉", "思维", "判断"],
        strengths: ["可靠负责", "注重细节", "善于组织", "踏实稳重"],
        careers: ["会计师", "项目经理", "工程师", "警察"]
    },
    ISFJ: {
        name: "守护者型人格",
        description: "ISFJ型的人是温暖、富有同情心的守护者。他们善于照顾他人，重视人际关系，总是乐于助人。他们是可靠的朋友和家人，善于营造和谐的环境。",
        traits: ["内向", "感觉", "情感", "判断"],
        strengths: ["富有同情心", "善于倾听", "细心周到", "忠诚可靠"],
        careers: ["护士", "教师", "社会工作者", "行政助理"]
    },
    INFJ: {
        name: "咨询师型人格",
        description: "INFJ型的人是富有洞察力的理想主义者。他们善于理解他人的内心世界，富有创造力和远见。他们追求意义和深度，致力于帮助他人实现潜能。",
        traits: ["内向", "直觉", "情感", "判断"],
        strengths: ["富有洞察力", "善于倾听", "富有创造力", "坚定信念"],
        careers: ["心理咨询师", "作家", "艺术指导", "人力资源"]
    },
    INTJ: {
        name: "战略家型人格",
        description: "INTJ型的人是独立、专注的战略思想家。他们具有强大的分析能力和远见卓识，善于制定复杂的计划并执行。他们追求知识和效率，是天生的领导者。",
        traits: ["内向", "直觉", "思维", "判断"],
        strengths: ["逻辑思维", "远见卓识", "独立自主", "果断坚定"],
        careers: ["科学家", "企业家", "工程师", "战略规划"]
    },
    ISTP: {
        name: "手艺型人格",
        description: "ISTP型的人是灵活、务实的问题解决者。他们善于分析和处理实际问题，具有出色的动手能力。他们喜欢探索事物的运作原理，是天生的工程师。",
        traits: ["内向", "感觉", "思维", "感知"],
        strengths: ["动手能力强", "适应性强", "理性务实", "善于分析"],
        careers: ["工程师", "程序员", "消防员", "运动员"]
    },
    ISFP: {
        name: "艺术家型人格",
        description: "ISFP型的人是敏感、富有创造力的艺术家。他们热爱美和和谐，善于通过艺术表达自己。他们是温和的观察者，享受当下的美好。",
        traits: ["内向", "感觉", "情感", "感知"],
        strengths: ["富有创造力", "敏感细腻", "真诚友善", "审美能力强"],
        careers: ["艺术家", "设计师", "音乐家", "摄影师"]
    },
    INFP: {
        name: "治愈者型人格",
        description: "INFP型的人是理想主义、富有同情心的治愈者。他们追求真实和意义，善于理解他人的情感。他们是温和的梦想家，致力于创造更美好的世界。",
        traits: ["内向", "直觉", "情感", "感知"],
        strengths: ["富有同理心", "理想主义", "创造力强", "真诚善良"],
        careers: ["作家", "心理咨询师", "教师", "非营利组织"]
    },
    INTP: {
        name: "思想家型人格",
        description: "INTP型的人是好奇、富有逻辑的思想家。他们热爱知识和理论，善于分析复杂问题。他们是独立的思考者，追求真理和创新。",
        traits: ["内向", "直觉", "思维", "感知"],
        strengths: ["逻辑思维", "好奇心强", "创新能力", "独立思考"],
        careers: ["科学家", "程序员", "哲学家", "研究员"]
    },
    ESTP: {
        name: "创业者型人格",
        description: "ESTP型的人是精力充沛、务实的创业者。他们善于应对挑战，享受冒险和刺激。他们是天生的谈判者，能够在压力下做出快速决策。",
        traits: ["外向", "感觉", "思维", "感知"],
        strengths: ["行动力强", "善于交际", "适应能力强", "勇敢果断"],
        careers: ["销售", "企业家", "运动员", "警察"]
    },
    ESFP: {
        name: "表演者型人格",
        description: "ESFP型的人是热情、活泼的表演者。他们热爱生活，善于与人交往，享受成为焦点。他们是天生的娱乐家，能够给周围的人带来欢乐。",
        traits: ["外向", "感觉", "情感", "感知"],
        strengths: ["热情开朗", "善于表达", "富有魅力", "适应能力强"],
        careers: ["演员", "主持人", "销售", "旅游行业"]
    },
    ENFP: {
        name: "倡导者型人格",
        description: "ENFP型的人是充满热情、富有创造力的倡导者。他们善于激励他人，追求创新和可能性。他们是天生的梦想家，能够看到事物的美好一面。",
        traits: ["外向", "直觉", "情感", "感知"],
        strengths: ["富有激情", "善于沟通", "创造力强", "乐观积极"],
        careers: ["市场营销", "公关", "作家", "创业导师"]
    },
    ENTP: {
        name: "辩论家型人格",
        description: "ENTP型的人是聪明、善于辩论的创新者。他们热爱挑战传统观念，善于提出新想法。他们是天生的战略家，能够看到问题的多个角度。",
        traits: ["外向", "直觉", "思维", "感知"],
        strengths: ["机智敏捷", "善于分析", "创新能力", "说服力强"],
        careers: ["律师", "企业家", "市场营销", "产品经理"]
    },
    ESTJ: {
        name: "监督者型人格",
        description: "ESTJ型的人是务实、负责的监督者。他们重视秩序和效率，善于组织和管理。他们是可靠的领导者，能够确保团队目标的实现。",
        traits: ["外向", "感觉", "思维", "判断"],
        strengths: ["组织能力强", "责任感强", "务实高效", "善于管理"],
        careers: ["管理者", "军人", "会计师", "行政主管"]
    },
    ESFJ: {
        name: "执政官型人格",
        description: "ESFJ型的人是热情、乐于助人的执政官。他们善于与人交往，重视和谐与传统。他们是天生的照顾者，能够营造温暖的氛围。",
        traits: ["外向", "感觉", "情感", "判断"],
        strengths: ["热情友好", "善于交际", "乐于助人", "组织能力强"],
        careers: ["教师", "护士", "人力资源", "活动策划"]
    },
    ENFJ: {
        name: "教育家型人格",
        description: "ENFJ型的人是富有魅力、善于激励的教育家。他们善于理解他人，具有强大的说服力和领导能力。他们致力于帮助他人成长和发展。",
        traits: ["外向", "直觉", "情感", "判断"],
        strengths: ["善于沟通", "富有魅力", "激励他人", "富有远见"],
        careers: ["教师", "培训师", "心理咨询师", "管理者"]
    },
    ENTJ: {
        name: "指挥官型人格",
        description: "ENTJ型的人是果断、自信的指挥官。他们具有强大的领导能力和战略眼光，善于制定和执行计划。他们是天生的领导者，能够激励团队取得成功。",
        traits: ["外向", "直觉", "思维", "判断"],
        strengths: ["领导能力强", "果断坚定", "战略思维", "目标导向"],
        careers: ["CEO", "管理者", "律师", "军事领导"]
    }
};

let currentQuestion = 0;
let answers = [];
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startTest() {
    currentQuestion = 0;
    answers = [];
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    window.location.href = 'test.html';
}

function restartTest() {
    window.location.href = 'index.html';
}

function initTest() {
    if (window.location.pathname.includes('test.html')) {
        loadQuestion();
    } else if (window.location.pathname.includes('result.html')) {
        showResult();
    }
}

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    
    const optionKeys = Object.keys(question.scores);
    const optionValues = Object.values(question.scores);
    
    for (let i = 0; i < 4; i++) {
        document.getElementById(`opt-${i + 1}`).textContent = question.options[i];
        document.getElementById(`opt-${i + 1}`).dataset.scoreKey = optionKeys[i];
        document.getElementById(`opt-${i + 1}`).dataset.scoreValue = optionValues[i];
        document.getElementById(`opt-${i + 1}`).classList.remove('selected');
    }
    
    if (answers[currentQuestion] !== undefined) {
        document.getElementById(`opt-${answers[currentQuestion] + 1}`).classList.add('selected');
    }
    
    updateProgress();
    updateNavigation();
}

function selectOption(index) {
    answers[currentQuestion] = index;
    
    const optionBtn = document.getElementById(`opt-${index + 1}`);
    const scoreKey = optionBtn.dataset.scoreKey;
    const scoreValue = parseInt(optionBtn.dataset.scoreValue);
    
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    optionBtn.classList.add('selected');
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `第 ${currentQuestion + 1} / ${questions.length} 题`;
}

function updateNavigation() {
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').textContent = currentQuestion === questions.length - 1 ? '查看结果' : '下一题';
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) {
        alert('请选择一个选项');
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        calculateResult();
    }
}

function calculateResult() {
    answers.forEach((answerIndex, questionIndex) => {
        const question = questions[questionIndex];
        const optionKeys = Object.keys(question.scores);
        const scoreKey = optionKeys[answerIndex];
        const scoreValue = question.scores[scoreKey];
        
        const oppositeKey = getOppositeKey(scoreKey);
        scores[scoreKey] += scoreValue;
        scores[oppositeKey] += (3 - scoreValue);
    });
    
    const type = getType();
    localStorage.setItem('mbtiResult', type);
    window.location.href = 'result.html';
}

function getOppositeKey(key) {
    const opposites = { E: 'I', I: 'E', S: 'N', N: 'S', T: 'F', F: 'T', J: 'P', P: 'J' };
    return opposites[key];
}

function getType() {
    const EorI = scores.E > scores.I ? 'E' : 'I';
    const SorN = scores.S > scores.N ? 'S' : 'N';
    const TorF = scores.T > scores.F ? 'T' : 'F';
    const JorP = scores.J > scores.P ? 'J' : 'P';
    return EorI + SorN + TorF + JorP;
}

function showResult() {
    const type = localStorage.getItem('mbtiResult') || 'INFJ';
    const result = results[type];
    
    if (result) {
        document.getElementById('type-badge').textContent = type;
        document.getElementById('type-name').textContent = result.name;
        document.getElementById('type-description').textContent = result.description;
        
        const traitList = document.getElementById('trait-list');
        traitList.innerHTML = '';
        result.traits.forEach(trait => {
            const span = document.createElement('span');
            span.className = 'trait';
            span.textContent = trait;
            traitList.appendChild(span);
        });
        
        const strengths = document.getElementById('strengths');
        strengths.innerHTML = '<h3>你的优势</h3><ul>' + result.strengths.map(s => `<li>${s}</li>`).join('') + '</ul>';
        
        const careers = document.getElementById('careers');
        careers.innerHTML = '<h3>适合的职业方向</h3><ul>' + result.careers.map(c => `<li>${c}</li>`).join('') + '</ul>';
    }
}

document.addEventListener('DOMContentLoaded', initTest);