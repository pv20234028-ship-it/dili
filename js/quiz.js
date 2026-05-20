/* ============================================
   quiz.js — 題庫練習模組（含擴充題型）
   ============================================ */

// 題庫內建資料
const quizData = [
    // === 單選題 ===
    { id:1, type:'single', difficulty:'easy', chapter:'terrain', question:'我國面積最大的省級行政區是？', options:['新疆維吾爾自治區','西藏自治區','內蒙古自治區','青海省'], answer:'A', explain:'新疆面積約166萬km²，佔全國國土面積的六分之一，是我國面積最大的省級行政區。' },
    { id:2, type:'single', difficulty:'easy', chapter:'terrain', question:'「世界屋脊」指的是哪個高原？', options:['內蒙古高原','黃土高原','青藏高原','雲貴高原'], answer:'C', explain:'青藏高原平均海拔4000m以上，是世界上海拔最高的高原，被稱為「世界屋脊」。' },
    { id:3, type:'single', difficulty:'easy', chapter:'terrain', question:'我國地勢的主要特徵是？', options:['東高西低','西高東低','南高北低','中間高四周低'], answer:'B', explain:'我國地勢西高東低，呈三級階梯狀分佈，有利於海洋濕潤氣流深入內陸。' },
    { id:4, type:'single', difficulty:'medium', chapter:'terrain', question:'大興安嶺—太行山—巫山—雪峰山是我國哪兩級階梯的分界線？', options:['第一、二級','第二、三級','第一、三級','不存在此分界線'], answer:'B', explain:'大興安嶺—太行山—巫山—雪峰山一線是第二級階梯與第三級階梯的分界線。' },
    { id:5, type:'single', difficulty:'easy', chapter:'climate', question:'我國氣候的主要特徵是？', options:['季風氣候顯著','海洋性氣候顯著','大陸性氣候為主','高原氣候為主'], answer:'A', explain:'季風氣候顯著是我國氣候最突出的特徵，冬季偏北風、夏季偏南風。' },
    { id:6, type:'single', difficulty:'medium', chapter:'climate', question:'秦嶺—淮河一線是哪條等降水量線？', options:['400mm','600mm','800mm','1000mm'], answer:'C', explain:'秦嶺—淮河一線大致與800mm等降水量線一致，也是濕潤區與半濕潤區的分界線。' },
    { id:7, type:'single', difficulty:'easy', chapter:'hydrology', question:'我國最長的河流是？', options:['黃河','珠江','長江','黑龍江'], answer:'C', explain:'長江全長6300km，是我國最長的河流，也是世界第三長河。' },
    { id:8, type:'single', difficulty:'medium', chapter:'hydrology', question:'長江上中下游的分界點是？', options:['河口、湖口','宜昌、湖口','宜昌、桃花峪','河口、桃花峪'], answer:'B', explain:'長江上游與中游以宜昌為界，中游與下游以湖口為界。' },
    { id:9, type:'single', difficulty:'easy', chapter:'hydrology', question:'我國最大的淡水湖是？', options:['洞庭湖','太湖','鄱陽湖','巢湖'], answer:'C', explain:'鄱陽湖位於江西省，是我國最大的淡水湖。' },
    { id:10, type:'single', difficulty:'medium', chapter:'hydrology', question:'黃河「地上河」出現在哪個河段？', options:['上游','中游','下游','河口段'], answer:'C', explain:'黃河下游泥沙淤積嚴重，河床高出兩岸地面，形成「地上河」。' },
    { id:11, type:'single', difficulty:'easy', chapter:'population', question:'我國人口分佈的重要地理界線是？', options:['秦嶺—淮河線','黑河—騰衝線','大興安嶺—太行山線','長城線'], answer:'B', explain:'黑河—騰衝線又稱胡煥庸線，是我國重要的人口地理分界線。' },
    { id:12, type:'single', difficulty:'medium', chapter:'population', question:'我國少數民族分佈的特點是？', options:['大雜居、小聚居','大聚居、小雜居','均勻分佈','集中分佈'], answer:'A', explain:'我國少數民族分佈具有「大散居、小聚居、交錯雜居」的特點。' },
    { id:13, type:'single', difficulty:'easy', chapter:'agriculture', question:'我國南方與北方的主要糧食作物分別是？', options:['小麥、水稻','水稻、小麥','玉米、水稻','水稻、玉米'], answer:'B', explain:'南方以水稻為主；北方以小麥為主，形成「南稻北麥」格局。' },
    { id:14, type:'single', difficulty:'medium', chapter:'agriculture', question:'我國四大牧區不包括？', options:['內蒙古','新疆','青海','四川'], answer:'D', explain:'四大牧區是內蒙古、新疆、青海、西藏，四川不是主要牧區。' },
    { id:15, type:'single', difficulty:'medium', chapter:'industry', question:'全國最大的綜合性工業基地是？', options:['遼中南','京津唐','滬寧杭','珠江三角洲'], answer:'C', explain:'滬寧杭工業基地是我國最大的綜合性工業基地。' },
    { id:16, type:'single', difficulty:'hard', chapter:'industry', question:'「晉陝蒙」是我國哪種資源最集中的地區？', options:['石油','煤炭','天然氣','鐵礦'], answer:'B', explain:'山西、陝西、內蒙古是我國煤炭資源最集中的地區。' },
    { id:17, type:'single', difficulty:'hard', chapter:'terrain', question:'柴達木盆地被稱為「聚寶盆」，主要原因是？', options:['地勢最高','面積最大','礦產資源豐富','水資源豐富'], answer:'C', explain:'柴達木盆地蘊藏豐富的鹽、石油、天然氣、煤、金屬礦產。' },
    { id:18, type:'single', difficulty:'hard', chapter:'climate', question:'我國夏季氣溫最低的地方在？', options:['漠河','青藏高原','內蒙古高原','天山'], answer:'B', explain:'青藏高原因地勢高，夏季氣溫最低。' },
    { id:19, type:'single', difficulty:'medium', chapter:'regional', question:'「天府之國」指的是？', options:['長江中下游平原','華北平原','四川盆地','東北平原'], answer:'C', explain:'四川盆地氣候溫暖濕潤，物產豐富，被稱「天府之國」。' },
    { id:20, type:'single', difficulty:'easy', chapter:'regional', question:'我國最北的省份是？', options:['內蒙古','新疆','黑龍江','吉林'], answer:'C', explain:'黑龍江省漠河是我國最北端，有「北極村」之稱。' },
    { id:21, type:'single', difficulty:'medium', chapter:'hktw', question:'港珠澳大橋連接了哪三個地區？', options:['香港、珠海、澳門','香港、深圳、澳門','廣州、珠海、澳門','香港、珠海、中山'], answer:'A', explain:'港珠澳大橋東起香港，西至珠海和澳門，全長55公里。' },
    { id:22, type:'single', difficulty:'easy', chapter:'hktw', question:'臺灣島屬於哪種氣候類型？', options:['溫帶季風','亞熱帶和熱帶季風','溫帶海洋性','高原氣候'], answer:'B', explain:'北回歸線穿過臺灣中部，北部為亞熱帶季風，南部為熱帶季風。' },

    // === 多選題 ===
    { id:30, type:'multi', difficulty:'medium', chapter:'terrain', question:'以下哪些是四大高原？（多選）', options:['青藏高原','黃土高原','四川盆地','雲貴高原','塔里木盆地'], answer:'ABD', explain:'四大高原是青藏高原、內蒙古高原、黃土高原、雲貴高原。' },
    { id:31, type:'multi', difficulty:'medium', chapter:'climate', question:'秦嶺—淮河一線的地理意義包括？（多選）', options:['1月0°C等溫線','800mm等降水量線','暖溫帶與亞熱帶分界','半濕潤與濕潤區分界'], answer:'ABCD', explain:'秦嶺—淮河一線是我國重要的地理分界線，以上四項均正確。' },
    { id:32, type:'multi', difficulty:'hard', chapter:'hydrology', question:'長江的水能資源主要集中在上游，原因是？（多選）', options:['落差大','水量大','峽谷多','流域面積廣'], answer:'ABC', explain:'長江上游流經第一、二級階梯交界處，落差大、水量大、峽谷多。' },
    { id:33, type:'multi', difficulty:'medium', chapter:'agriculture', question:'我國主要的商品糧基地包括？（多選）', options:['三江平原','松嫩平原','洞庭湖平原','華北平原'], answer:'ABC', explain:'三江平原、松嫩平原和洞庭湖平原都是重要商品糧基地，華北平原因缺水商品率較低。' },
    { id:34, type:'multi', difficulty:'hard', chapter:'industry', question:'以下哪些屬於四大工業基地？（多選）', options:['遼中南','京津唐','成渝','珠江三角洲'], answer:'ABD', explain:'四大工業基地為遼中南、京津唐、滬寧杭、珠江三角洲。成渝是西部重要經濟區但非四大基地。' },
    { id:35, type:'multi', difficulty:'medium', chapter:'hktw', question:'港澳臺共同面臨的自然災害包括？（多選）', options:['颱風','地震','寒潮','暴雨洪澇'], answer:'ABD', explain:'港澳臺均受颱風、地震、暴雨影響。寒潮影響較小。' },

    // === 填空題 ===
    { id:40, type:'fill', difficulty:'easy', chapter:'terrain', question:'我國地勢第一級階梯的主體是____高原。', options:[], answer:'青藏', explain:'青藏高原是第一級階梯的主體，平均海拔4000m以上。' },
    { id:41, type:'fill', difficulty:'medium', chapter:'climate', question:'我國降水量的分佈規律是從____向____遞減。', options:[], answer:'東南沿海,西北內陸', explain:'受夏季風影響，我國降水量從東南沿海向西北內陸遞減。' },
    { id:42, type:'fill', difficulty:'easy', chapter:'hydrology', question:'黃河被稱為「母親河」，發源於____山脈。', options:[], answer:'巴顏喀拉', explain:'黃河發源於巴顏喀拉山脈的約古宗列盆地。' },
    { id:43, type:'fill', difficulty:'medium', chapter:'population', question:'我國人口分布的地理界線是____—____線。', options:[], answer:'黑河,騰衝', explain:'黑河—騰衝線（胡煥庸線）是我國重要的人口地理分界線。' },
    { id:44, type:'fill', difficulty:'easy', chapter:'agriculture', question:'我國南方與北方的農業分界線是____—____一線。', options:[], answer:'秦嶺,淮河', explain:'秦嶺—淮河一線是我國南北農業分界線。' },
    { id:45, type:'fill', difficulty:'medium', chapter:'industry', question:'我國最大的煤炭生產基地是____省。', options:[], answer:'山西', explain:'山西省是我國最大的煤炭生產基地，被稱「煤海」。' },
    { id:46, type:'fill', difficulty:'easy', chapter:'hktw', question:'臺灣島最高的山峰是____，海拔3952公尺。', options:[], answer:'玉山', explain:'玉山是臺灣最高峰，也是中國東部最高峰。' },

    // === 判斷題 ===
    { id:50, type:'truefalse', difficulty:'easy', chapter:'terrain', question:'我國地勢東高西低，呈三級階梯狀分佈。', options:[], answer:'false', explain:'我國地勢西高東低，而非東高西低。西側為青藏高原，東側為平原丘陵。' },
    { id:51, type:'truefalse', difficulty:'easy', chapter:'climate', question:'我國冬季南北溫差大，夏季南北普遍高溫。', options:[], answer:'true', explain:'冬季北方緯度高，氣溫低；夏季全國除青藏高原外普遍高溫。' },
    { id:52, type:'truefalse', difficulty:'medium', chapter:'hydrology', question:'我國所有的河流都自西向東流入太平洋。', options:[], answer:'false', explain:'我國河流注入多個大洋：太平洋（長江、黃河）、印度洋（雅魯藏布江）、北冰洋（額爾齊斯河），還有內流河。' },
    { id:53, type:'truefalse', difficulty:'easy', chapter:'population', question:'我國人口分佈東密西疏，黑河—騰衝線以東人口約佔94%。', options:[], answer:'true', explain:'胡煥庸線以東約43%的面積聚集了約94%的人口。' },
    { id:54, type:'truefalse', difficulty:'medium', chapter:'agriculture', question:'我國農業用地中，耕地面積大於林地面積。', options:[], answer:'false', explain:'我國耕地面積約佔13%，林地面積約佔25%，林地大於耕地。' },
    { id:55, type:'truefalse', difficulty:'hard', chapter:'industry', question:'我國的工業分佈是東輕西重。', options:[], answer:'false', explain:'我國工業分佈總體是東重西輕，東部沿海工業基礎雄厚、門類齊全。' },
    { id:56, type:'truefalse', difficulty:'easy', chapter:'regional', question:'西北地區的農業以綠洲農業為主。', options:[], answer:'true', explain:'西北乾旱區依靠高山雪水灌溉，形成綠洲農業。' },
    { id:57, type:'truefalse', difficulty:'medium', chapter:'hktw', question:'臺灣海峽是連接東海和南海的重要水道。', options:[], answer:'true', explain:'臺灣海峽位於東海與南海之間，是太平洋西側的重要通道。' },

    // === 簡答題 ===
    { id:60, type:'shortanswer', difficulty:'medium', chapter:'terrain', question:'簡述我國地勢西高東低、呈三級階梯分佈對河流和氣候的影響。', options:[], answer:'1.河流：地勢決定河流流向，大江大河自西向東流，溝通東西交通；階梯交界處落差大，水能資源豐富。2.氣候：地勢有利於海洋濕潤氣流深入內陸，形成豐沛降水；同時阻擋北方冷空氣南下。', explain:'西高東低的地勢是我國最基本的地理特徵之一，影響深遠。' },
    { id:61, type:'shortanswer', difficulty:'hard', chapter:'climate', question:'為什麼秦嶺—淮河一線被稱為我國最重要的地理分界線？請從氣候、農業兩方面分析。', options:[], answer:'氣候方面：1月0°C等溫線、800mm等降水量線、暖溫帶與亞熱帶分界、半濕潤與濕潤區分界。農業方面：南稻北麥的分界、水田與旱地的分界、一年兩熟/三熟與兩年三熟的分界。', explain:'秦嶺—淮河一線是自然地理和人文地理的重要過渡帶。' },
    { id:62, type:'shortanswer', difficulty:'medium', chapter:'hydrology', question:'黃河下游為什麼會形成「地上河」？應如何治理？', options:[], answer:'成因：黃河中游流經黃土高原，含沙量大增；下游進入平原，流速減緩，泥沙大量沉積，河床抬高形成地上河。治理：1.中游植樹造林，保持水土；2.修建水庫，調水調沙；3.下游加固堤防；4.退耕還林還草。', explain:'黃河治理需標本兼治，中游保持水土是根本。' },
    { id:63, type:'shortanswer', difficulty:'hard', chapter:'hktw', question:'從地理角度分析，臺灣島為什麼被稱為「祖國的寶島」？', options:[], answer:'1.戰略位置：臺灣海峽是東海與南海通道，扼西太平洋航運要衝。2.自然資源：森林覆蓋率高，水力資源豐富，地熱豐富。3.農業：熱帶亞熱帶氣候，盛產稻米、甘蔗、茶葉、水果。4.地質：與大陸同屬歐亞板塊，地質淵源深厚。5.漁業：周圍海域漁業資源豐富。', explain:'臺灣的地理優勢體現在位置、資源、生態等多方面。' },

    // === 綜合題（跨章節）===
    { id:70, type:'comprehensive', difficulty:'hard', chapter:'comprehensive', question:'【綜合分析】閱讀以下材料，回答問題：\n\n材料：青藏高原平均海拔4000m以上，被稱為「世界屋脊」。高原上雪山連綿，冰川廣布，是長江、黃河、瀾滄江等大江大河的發源地。高原上空氣稀薄，太陽輻射強，晝夜溫差大，形成獨特的高原氣候。高原上的農業以畜牧業為主，種植業限於河谷地帶，主要作物為青稞。\n\n(1) 從地形角度，解釋青藏高原為什麼能成為「亞洲水塔」。\n(2) 從氣候角度，分析青藏高原農業以畜牧業為主的原因。\n(3) 青藏高原的地形如何影響我國東部地區的氣候？', options:[], answer:'(1)青藏高原海拔高，氣溫低，降水以雪的形式儲存為冰川，是眾多河流的源頭；高原邊緣地勢陡降，河流落差大，水流匯聚東流。(2)海拔高→氣溫低→熱量不足→作物生長期短；空氣稀薄→保溫差→晝夜溫差大→不利於農作物生長；降水少→乾旱→河谷地帶才有灌溉條件。(3)阻擋印度洋暖濕氣流北上，使西北更乾旱；夏季高原形成熱力低壓，增強季風環流；冬季冷空氣南下受阻，減弱寒潮影響。', explain:'此題綜合考查地形→氣候→水文→農業的連鎖關係。' },
    { id:71, type:'comprehensive', difficulty:'hard', chapter:'comprehensive', question:'【看圖比較】比較我國南方地區與北方地區在以下方面的差異：\n\n(1) 地形特徵\n(2) 氣候類型與特點\n(3) 主要農產品\n(4) 交通方式偏好', options:[], answer:'(1)南方：山地丘陵為主，平原狹小，河網密布；北方：平原為主，地形開闊。(2)南方：亞熱帶/熱帶季風，高溫多雨；北方：溫帶季風，冬冷夏熱，降水較少。(3)南方：水稻、甘蔗、油菜、茶葉；北方：小麥、玉米、大豆、甜菜。(4)南方：水運發達，河網密布；北方：陸運為主，鐵路公路網密集。', explain:'南北差異是我國最基本的區域差異。' },
    { id:72, type:'comprehensive', difficulty:'hard', chapter:'comprehensive', question:'【跨區域分析】對比西北地區與青藏地區：\n\n(1) 兩地的氣候特徵有何不同？\n(2) 兩地的農業類型分別是什麼？為什麼？\n(3) 兩地在生態保護方面各面臨什麼問題？', options:[], answer:'(1)西北：溫帶大陸性氣候，乾旱少雨，晝夜溫差大；青藏：高原山地氣候，高寒缺氧，太陽輻射強。(2)西北：綠洲農業和畜牧業——因乾旱，只能依靠灌溉發展綠洲農業；青藏：河谷農業和高寒畜牧業——因高寒，只能在海拔較低的河谷種植。(3)西北：荒漠化、水資源短缺；青藏：冰川退縮、草地退化、生物多樣性減少。', explain:'西北的核心問題是「乾」，青藏的核心問題是「寒」。' }
];

// 題庫狀態
let quizState = {
    questions: [],
    currentIndex: 0,
    answers: {},
    submitted: false
};

function initQuiz() {
    // 題庫由按鈕驅動
}

function startQuiz() {
    const type = document.getElementById('quizType').value;
    const difficulty = document.getElementById('quizDifficulty').value;
    const chapter = document.getElementById('quizChapter').value;

    let questions = csvData['quizzes'] || quizData;

    // 篩選
    if (type !== 'all') questions = questions.filter(q => q.type === type);
    if (difficulty !== 'all') questions = questions.filter(q => q.difficulty === difficulty);
    if (chapter !== 'all') questions = questions.filter(q => q.chapter === chapter);

    if (questions.length === 0) {
        showNotification('沒有符合條件的題目', 'warning');
        return;
    }

    // 打亂順序
    questions = shuffleArray([...questions]).slice(0, 15);

    quizState = {
        questions: questions,
        currentIndex: 0,
        answers: {},
        submitted: false
    };

    renderQuiz();
    updateProgressBar();
}

function renderQuiz() {
    const area = document.getElementById('quizArea');
    if (!quizState.questions.length) return;

    area.innerHTML = quizState.questions.map((q, i) => {
        const diffLabel = { easy: '基礎', medium: '進階', hard: '挑戰' };
        const typeLabel = { single:'單選', multi:'多選', fill:'填空', truefalse:'判斷', shortanswer:'簡答', comprehensive:'綜合' };
        let optionsHTML = '';

        if (q.type === 'single') {
            optionsHTML = q.options.map((opt, oi) => {
                const marker = String.fromCharCode(65 + oi);
                return `<div class="quiz-option" data-question="${i}" data-value="${marker}" onclick="selectOption(${i},'${marker}')">
                    <span class="option-marker">${marker}</span>
                    <span>${opt}</span>
                </div>`;
            }).join('');
        } else if (q.type === 'multi') {
            optionsHTML = `<p style="font-size:0.82rem;color:var(--accent);margin-bottom:8px;">（可選多項）</p>` +
                q.options.map((opt, oi) => {
                    const marker = String.fromCharCode(65 + oi);
                    return `<div class="quiz-option" data-question="${i}" data-value="${marker}" onclick="toggleMultiOption(${i},'${marker}')">
                        <span class="option-marker">${marker}</span>
                        <span>${opt}</span>
                    </div>`;
                }).join('');
        } else if (q.type === 'fill') {
            optionsHTML = `<input type="text" class="quiz-fill-input" data-question="${i}" placeholder="請輸入答案..." oninput="fillAnswer(${i},this.value)">`;
        } else if (q.type === 'truefalse') {
            optionsHTML = `<div class="quiz-tf-options">
                <div class="quiz-tf-btn" data-question="${i}" data-value="true" onclick="selectTF(${i},true)"><i class="fas fa-check"></i> 正確</div>
                <div class="quiz-tf-btn" data-question="${i}" data-value="false" onclick="selectTF(${i},false)"><i class="fas fa-times"></i> 錯誤</div>
            </div>`;
        } else if (q.type === 'shortanswer') {
            optionsHTML = `<div class="quiz-shortanswer-area">
                <textarea data-question="${i}" placeholder="請寫出你的答案..." oninput="fillAnswer(${i},this.value)"></textarea>
            </div>
            <div class="quiz-reference-answer" id="refAnswer${i}">
                <h5><i class="fas fa-lightbulb"></i> 參考答案</h5>
                <p>${q.answer}</p>
            </div>`;
        } else if (q.type === 'comprehensive') {
            const parts = q.question.split('\n\n').filter(p => p.trim());
            let contextHTML = '';
            let subQs = [];
            parts.forEach(p => {
                if (p.startsWith('【') || p.startsWith('材料') || !p.match(/^\(\d\)/)) {
                    contextHTML += `<p>${p}</p>`;
                } else {
                    subQs.push(p);
                }
            });
            optionsHTML = `<div class="quiz-comprehensive-context"><h5><i class="fas fa-file-alt"></i> 題目材料</h5>${contextHTML}</div>
            <div class="quiz-shortanswer-area">
                <textarea data-question="${i}" placeholder="請綜合分析作答..." oninput="fillAnswer(${i},this.value)"></textarea>
            </div>
            <div class="quiz-reference-answer" id="refAnswer${i}">
                <h5><i class="fas fa-lightbulb"></i> 參考答案</h5>
                <p>${q.answer}</p>
            </div>`;
        }

        return `<div class="quiz-card" id="quizCard${i}">
            <span class="quiz-number">第 ${i+1} 題</span>
            <span class="quiz-difficulty ${q.difficulty}">${diffLabel[q.difficulty] || q.difficulty}</span>
            <span style="display:inline-block;padding:3px 8px;background:var(--bg-alt);border-radius:50px;font-size:0.72rem;color:var(--text-light);margin-left:4px;">${typeLabel[q.type] || q.type}</span>
            <div class="quiz-question">${q.question.replace(/\n/g, '<br>')}</div>
            <div class="quiz-options" id="quizOptions${i}">${optionsHTML}</div>
            <div class="quiz-explanation" id="quizExplain${i}">
                <h5><i class="fas fa-check-circle"></i> 解析</h5>
                <p>${q.explain}</p>
            </div>
        </div>`;
    }).join('');

    // 提交按鈕
    area.innerHTML += `
        <div class="quiz-actions" style="justify-content:center; margin-top:20px;">
            <button class="btn-primary" onclick="submitQuiz()"><i class="fas fa-paper-plane"></i> 提交答案</button>
            <button class="btn-outline" onclick="startQuiz()"><i class="fas fa-redo"></i> 重新出題</button>
        </div>
    `;
}

function selectOption(questionIndex, value) {
    if (quizState.submitted) return;
    quizState.answers[questionIndex] = value;
    document.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(opt => {
        opt.classList.remove('selected');
        if (opt.dataset.value === value) opt.classList.add('selected');
    });
    updateProgressBar();
}

function selectTF(questionIndex, value) {
    if (quizState.submitted) return;
    quizState.answers[questionIndex] = String(value);
    document.querySelectorAll(`.quiz-tf-btn[data-question="${questionIndex}"]`).forEach(opt => {
        opt.classList.remove('selected');
        if (opt.dataset.value === String(value)) opt.classList.add('selected');
    });
    updateProgressBar();
}

function toggleMultiOption(questionIndex, value) {
    if (quizState.submitted) return;
    if (!quizState.answers[questionIndex]) quizState.answers[questionIndex] = [];
    const arr = quizState.answers[questionIndex];
    const idx = arr.indexOf(value);
    if (idx > -1) { arr.splice(idx, 1); } else { arr.push(value); }
    document.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(opt => {
        opt.classList.toggle('selected', arr.includes(opt.dataset.value));
    });
    updateProgressBar();
}

function fillAnswer(questionIndex, value) {
    if (quizState.submitted) return;
    quizState.answers[questionIndex] = value;
    updateProgressBar();
}

function submitQuiz() {
    if (quizState.submitted) return;
    quizState.submitted = true;

    let correct = 0;
    const wrongBook = loadFromStorage('wrongBook') || [];

    quizState.questions.forEach((q, i) => {
        const userAnswer = quizState.answers[i];
        let isCorrect = false;

        if (q.type === 'single') {
            isCorrect = userAnswer === q.answer;
            document.querySelectorAll(`[data-question="${i}"]`).forEach(opt => {
                if (opt.dataset.value === q.answer) opt.classList.add('correct');
                else if (opt.dataset.value === userAnswer && !isCorrect) opt.classList.add('wrong');
            });
        } else if (q.type === 'multi') {
            const userArr = (userAnswer || []).sort().join('');
            const correctArr = q.answer.split('').sort().join('');
            isCorrect = userArr === correctArr;
            const cArr = q.answer.split('');
            const uArr = userAnswer || [];
            document.querySelectorAll(`[data-question="${i}"]`).forEach(opt => {
                if (cArr.includes(opt.dataset.value)) opt.classList.add('correct');
                else if (uArr.includes(opt.dataset.value)) opt.classList.add('wrong');
            });
        } else if (q.type === 'fill') {
            const correctAnswers = q.answer.split(',');
            isCorrect = correctAnswers.some(a => (userAnswer || '').trim() === a.trim());
        } else if (q.type === 'truefalse') {
            isCorrect = String(userAnswer) === String(q.answer);
            document.querySelectorAll(`.quiz-tf-btn[data-question="${i}"]`).forEach(opt => {
                if (opt.dataset.value === String(q.answer)) opt.classList.add('correct');
                else if (opt.dataset.value === String(userAnswer) && !isCorrect) opt.classList.add('wrong');
            });
        } else if (q.type === 'shortanswer' || q.type === 'comprehensive') {
            // 簡答題/綜合題顯示參考答案
            const refEl = document.getElementById(`refAnswer${i}`);
            if (refEl) refEl.classList.add('show');
            isCorrect = (userAnswer || '').trim().length >= 10; // 簡單判定有作答
        }

        // 顯示解析
        document.getElementById(`quizExplain${i}`).classList.add('show');

        if (isCorrect) correct++;
        else {
            wrongBook.push({
                question: q.question.substring(0, 80) + '...',
                userAnswer: q.type === 'shortanswer' || q.type === 'comprehensive' ? '（簡答題）' : (userAnswer || '未作答'),
                correctAnswer: q.answer,
                explain: q.explain,
                time: new Date().toLocaleString()
            });
        }
    });

    saveToStorage('wrongBook', wrongBook);
    showNotification(`答題完成！正確 ${correct}/${quizState.questions.length}`, correct > quizState.questions.length / 2 ? 'success' : 'warning');
}

function updateProgressBar() {
    const total = quizState.questions.length;
    const answered = Object.keys(quizState.answers).filter(k => {
        const a = quizState.answers[k];
        return a && (Array.isArray(a) ? a.length > 0 : (typeof a === 'string' ? a.trim() !== '' : false));
    }).length;
    const fill = document.getElementById('quizProgressFill');
    const text = document.getElementById('quizProgressText');
    if (fill) fill.style.width = (total ? (answered / total * 100) : 0) + '%';
    if (text) text.textContent = `${answered} / ${total}`;
}

function openWrongBook() {
    const modal = document.getElementById('wrongBookModal');
    const body = document.getElementById('wrongBookBody');
    const data = loadFromStorage('wrongBook') || [];

    if (data.length === 0) {
        body.innerHTML = '<p class="placeholder-text">錯題本為空，繼續加油！</p>';
    } else {
        body.innerHTML = data.map((item, i) => `
            <div class="wrong-item" style="padding:16px;border-bottom:1px solid var(--border);">
                <div style="font-weight:600;margin-bottom:6px;">${i+1}. ${item.question}</div>
                <div style="color:var(--danger);font-size:0.88rem;margin-bottom:4px;">你的答案：${item.userAnswer}</div>
                <div style="color:var(--success);font-size:0.88rem;margin-bottom:4px;">正確答案：${item.correctAnswer}</div>
                <div style="color:var(--text-light);font-size:0.85rem;">解析：${item.explain}</div>
                <div style="color:var(--text-lighter);font-size:0.75rem;margin-top:4px;">${item.time}</div>
            </div>
        `).join('');
    }

    modal.classList.add('active');
}

function closeWrongBook() {
    document.getElementById('wrongBookModal').classList.remove('active');
}

function clearWrongBook() {
    saveToStorage('wrongBook', []);
    document.getElementById('wrongBookBody').innerHTML = '<p class="placeholder-text">錯題本已清空</p>';
    showNotification('錯題本已清空', 'success');
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}