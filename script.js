const questions = [
    {
        question: "下面的捕猎方式，你更喜欢哪种？",
        options: ["观察猎物，设置魔法陷阱，等待上钩", "打磨武器，魔法强化身体，正面战斗"],
        scores: { F: 1, B: 1 }
    },
    {
        question: "你觉得魔法的强度更受什么影响？",
        options: ["使用者的心理状态", "使用者对魔法的认识", "使用者的长相（彩蛋选项，不可选）"],
        scores: { I: 1, M: 1, X: 0 },
        disabledOption: 2
    },
    {
        question: "你觉得魔力的来源更可能是从哪儿来？",
        options: ["由万物中来，由身体吸收，刻印在灵魂之上。", "由灵魂中来，由身体释放，作用于万物之上。"],
        scores: { N: 1, O: 1 }
    },
    {
        question: "你认为魔法是：",
        options: ["无形的，难以描述的，意识态的", "有形的，可以看见的，物质态的"],
        scores: { S: 1, Nt: 1 }
    }
];

const magicTypes = {
    FNIM: { name: "自然唯心内敛型", description: "你与自然融为一体，魔力源自内心的感悟，内敛而深邃。", traits: ["自然系", "功能系", "唯心魔法观", "魔法内敛"] },
    FNIO: { name: "自然唯心外放型", description: "你的魔法来自自然的馈赠，以精神力量驱动，向外释放无尽能量。", traits: ["自然系", "功能系", "唯心魔法观", "魔法外放"] },
    FNMM: { name: "自然唯物内敛型", description: "你相信魔法是自然规律的一部分，通过研究和理解来掌控魔力。", traits: ["自然系", "功能系", "唯物魔法观", "魔法内敛"] },
    FNMO: { name: "自然唯物外放型", description: "你将自然法则转化为强大的魔力，向外释放惊人的力量。", traits: ["自然系", "功能系", "唯物魔法观", "魔法外放"] },
    BNIM: { name: "战斗唯心内敛型", description: "你的战斗意志是魔法的源泉，内敛的力量在战斗中爆发。", traits: ["自然系", "战斗系", "唯心魔法观", "魔法内敛"] },
    BNIO: { name: "战斗唯心外放型", description: "你的斗志化为魔法，向外释放毁灭一切的力量。", traits: ["自然系", "战斗系", "唯心魔法观", "魔法外放"] },
    BNMM: { name: "战斗唯物内敛型", description: "你通过科学的方法研究战斗魔法，内敛中蕴含着精准的力量。", traits: ["自然系", "战斗系", "唯物魔法观", "魔法内敛"] },
    BNMO: { name: "战斗唯物外放型", description: "你将战斗技巧与魔法科学结合，释放出精准而强大的攻击。", traits: ["自然系", "战斗系", "唯物魔法观", "魔法外放"] },
    SNIM: { name: "超自然唯心内敛型", description: "你与神秘的超自然力量相连，魔力源自深邃的精神世界。", traits: ["超自然系", "功能系", "唯心魔法观", "魔法内敛"] },
    SNIO: { name: "超自然唯心外放型", description: "你驾驭超自然的力量，将精神转化为震撼的魔法效果。", traits: ["超自然系", "功能系", "唯心魔法观", "魔法外放"] },
    SNMM: { name: "超自然唯物内敛型", description: "你用理性研究超自然现象，将神秘力量转化为可控的魔力。", traits: ["超自然系", "功能系", "唯物魔法观", "魔法内敛"] },
    SNMO: { name: "超自然唯物外放型", description: "你将超自然法则转化为强大的魔法能量，向外释放。", traits: ["超自然系", "功能系", "唯物魔法观", "魔法外放"] },
    BSIM: { name: "战斗超自然唯心内敛型", description: "你与暗影力量共鸣，内敛的魔力蕴含着毁灭的潜能。", traits: ["超自然系", "战斗系", "唯心魔法观", "魔法内敛"] },
    BSIO: { name: "战斗超自然唯心外放型", description: "你化身战斗的化身，释放超自然的毁灭之力。", traits: ["超自然系", "战斗系", "唯心魔法观", "魔法外放"] },
    BSMM: { name: "战斗超自然唯物内敛型", description: "你研究超自然力量的本质，将其转化为精准的战斗魔力。", traits: ["超自然系", "战斗系", "唯物魔法观", "魔法内敛"] },
    BSNO: { name: "战斗超自然唯物外放型", description: "你掌握超自然力量的规律，释放出毁天灭地的魔法攻击。", traits: ["超自然系", "战斗系", "唯物魔法观", "魔法外放"] }
};

const magicSpells = {
    FNIM: ["自然愈合", "植物生长", "元素亲和", "自然感知"],
    FNIO: ["自然风暴", "元素爆发", "生命汲取", "大地震动"],
    FNMM: ["元素控制", "魔法药剂", "符文铭刻", "阵法布置"],
    FNMO: ["元素箭", "自然之力", "地震术", "风暴召唤"],
    BNIM: ["斗气护体", "战斗直觉", "武器附魔", "致命一击"],
    BNIO: ["烈焰斩", "雷霆一击", "暗影突袭", "旋风斩"],
    BNMM: ["战斗分析", "武器强化", "防御结界", "精准打击"],
    BNMO: ["能量冲击", "破甲术", "范围攻击", "必杀技"],
    SNIM: ["心灵感应", "幻术", "预言", "灵魂沟通"],
    SNIO: ["精神冲击", "时空扭曲", "幻象破灭", "灵魂出窍"],
    SNMM: ["符文魔法", "魔法阵", "魔力转换", "魔法研究"],
    SNMO: ["虚空裂隙", "时间停滞", "空间传送", "魔法爆发"],
    BSIM: ["暗影步", "致命背刺", "隐身术", "暗杀"],
    BSIO: ["暗影爆发", "虚空吞噬", "死亡之触", "恐惧光环"],
    BSMM: ["暗影研究", "毒药制作", "陷阱布置", "暗杀技巧"],
    BSNO: ["暗影箭", "虚空打击", "灵魂收割", "黑暗领域"]
};

let currentQuestion = 0;
let answers = [];
let scores = { F: 0, B: 0, S: 0, Nt: 0, I: 0, M: 0, N: 0, O: 0 };

function startTest() {
    currentQuestion = 0;
    answers = [];
    scores = { F: 0, B: 0, S: 0, Nt: 0, I: 0, M: 0, N: 0, O: 0 };
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
        const btn = document.getElementById(`opt-${i + 1}`);
        if (i < question.options.length) {
            btn.textContent = question.options[i];
            btn.dataset.scoreKey = optionKeys[i];
            btn.dataset.scoreValue = optionValues[i];
            btn.style.display = 'block';
            btn.classList.remove('selected', 'disabled');
            btn.disabled = false;
            
            if (question.disabledOption === i) {
                btn.classList.add('disabled');
                btn.disabled = true;
            }
        } else {
            btn.style.display = 'none';
        }
    }
    
    if (answers[currentQuestion] !== undefined) {
        document.getElementById(`opt-${answers[currentQuestion] + 1}`).classList.add('selected');
    }
    
    updateProgress();
    updateNavigation();
}

function selectOption(index) {
    const question = questions[currentQuestion];
    if (question.disabledOption === index) {
        alert('此选项不可选，请选择其他选项');
        return;
    }
    
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
        
        scores[scoreKey] += scoreValue;
    });
    
    const type = getType();
    localStorage.setItem('magicResult', type);
    window.location.href = 'result.html';
}

function getType() {
    const ForB = scores.F > scores.B ? 'F' : 'B';
    const SorNt = scores.S > scores.Nt ? 'S' : 'Nt';
    const IorM = scores.I > scores.M ? 'I' : 'M';
    const NorO = scores.N > scores.O ? 'N' : 'O';
    
    return ForB + SorNt + IorM + NorO;
}

function showResult() {
    const type = localStorage.getItem('magicResult') || 'FNIM';
    const result = magicTypes[type] || magicTypes['FNIM'];
    
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
    }
}

function awakenMagic() {
    const type = localStorage.getItem('magicResult') || 'FNIM';
    const spells = magicSpells[type] || magicSpells['FNIM'];
    const randomSpell = spells[Math.floor(Math.random() * spells.length)];
    
    const modal = document.createElement('div');
    modal.className = 'awakening-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="sparkles">✨</div>
            <h2>⚡ 魔法觉醒 ⚡</h2>
            <p>恭喜你觉醒了</p>
            <div class="spell-name">${randomSpell}</div>
            <button onclick="closeModal()">确定</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    localStorage.setItem('awakenedSpell', randomSpell);
}

function closeModal() {
    document.querySelector('.awakening-modal').remove();
}

document.addEventListener('DOMContentLoaded', initTest);