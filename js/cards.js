/* ============================================
   cards.js — 名詞與數據卡片模組
   ============================================ */

// 地理之最資料
const geoMostData = [
    { category:'terrain', icon:'fa-mountain', question:'中國最高的高原', answer:'青藏高原', detail:'平均海拔4000m以上，號稱「世界屋脊」，面積約250萬km²' },
    { category:'terrain', icon:'fa-mountain', question:'中國最大的盆地', answer:'塔里木盆地', detail:'面積約53萬km²，內有塔克拉瑪干沙漠' },
    { category:'terrain', icon:'fa-mountain', question:'中國最大的平原', answer:'東北平原', detail:'面積約35萬km²，黑土地肥沃' },
    { category:'terrain', icon:'fa-mountain', question:'中國最長的山脈', answer:'崑崙山脈', detail:'全長約2500km，被稱「萬山之祖」' },
    { category:'terrain', icon:'fa-mountain', question:'中國海拔最高的山峰', answer:'珠穆朗瑪峰', detail:'海拔8848.86m，世界第一高峰' },
    { category:'water', icon:'fa-water', question:'中國最長的河流', answer:'長江', detail:'全長6300km，世界第三長河，航運價值最高' },
    { category:'water', icon:'fa-water', question:'中國最大的淡水湖', answer:'鄱陽湖', detail:'位於江西省，面積季節性變化大' },
    { category:'water', icon:'fa-water', question:'中國最大的湖泊（鹹水湖）', answer:'青海湖', detail:'位於青海省，面積約4500km²' },
    { category:'water', icon:'fa-water', question:'中國最長的內流河', answer:'塔里木河', detail:'全長約2137km，位於新疆' },
    { category:'climate', icon:'fa-cloud-sun', question:'中國降水量最多的地方', answer:'火燒寮', detail:'位於臺灣新北市，年均降水量超過6500mm' },
    { category:'climate', icon:'fa-cloud-sun', question:'中國最熱的地方', answer:'吐魯番盆地', detail:'極端最高氣溫49.6°C，有「火洲」之稱' },
    { category:'climate', icon:'fa-cloud-sun', question:'中國最冷的地方', answer:'漠河', detail:'極端最低氣溫-52.3°C，位於黑龍江省' },
    { category:'human', icon:'fa-users', question:'中國人口最多的省級行政區', answer:'廣東省', detail:'常住人口超過1.26億' },
    { category:'human', icon:'fa-users', question:'中國面積最大的省級行政區', answer:'新疆維吾爾自治區', detail:'面積約166萬km²，佔全國1/6' },
    { category:'human', icon:'fa-users', question:'中國少數民族最多的省', answer:'雲南省', detail:'有25個少數民族，少數民族人口約1563萬' },
    { category:'human', icon:'fa-users', question:'中國人口密度最高的城市', answer:'澳門', detail:'人口密度超過2萬人/km²，全球最高之一' }
];

// 易混淆對比資料
const confusedTermsData = [
    {
        title: '天氣 vs 氣候',
        left: { name: '天氣', desc: '短時間大氣狀況（如：今天晴天）。多變，不穩定。' },
        right: { name: '氣候', desc: '長時間天氣平均狀況（如：北京溫帶季風氣候）。相對穩定。' }
    },
    {
        title: '內流河 vs 外流河',
        left: { name: '內流河', desc: '最終不注入海洋，消失於內陸或注入內陸湖。如塔里木河。' },
        right: { name: '外流河', desc: '最終注入海洋。如長江注入東海，黃河注入渤海。' }
    },
    {
        title: '耕地 vs 林地',
        left: { name: '耕地', desc: '用於農業生產的土地，包括水田和旱地。佔國土面積約13%。' },
        right: { name: '林地', desc: '生長林木的土地。佔國土面積約25%，主要在東北、西南。' }
    },
    {
        title: '水土流失 vs 荒漠化',
        left: { name: '水土流失', desc: '水和風力帶走表土，黃土高原最嚴重。主因：植被破壞。' },
        right: { name: '荒漠化', desc: '土地退化為荒漠，西北最嚴重。主因：過度開墾、過度放牧。' }
    },
    {
        title: '寒潮 vs 颱風',
        left: { name: '寒潮', desc: '強冷空氣入侵，24h降溫≥8°C。冬半年影響，帶來大風降溫。' },
        right: { name: '颱風', desc: '熱帶氣旋，夏秋季影響東南沿海。帶來狂風暴雨。' }
    },
    {
        title: '自然資源 vs 自然環境',
        left: { name: '自然資源', desc: '人類可利用的自然物質和能量。如水資源、礦產資源。' },
        right: { name: '自然環境', desc: '人類生存的空間和自然條件總和。包括大氣、水、岩石、生物圈。' }
    }
];

// 口訣資料
const mnemonicsData = [
    {
        title: '三級階梯口訣',
        text: '一二三級階梯高，青藏內蒙東部低',
        zhuyin: [
            {base:'一',zhuyin:'ㄧ'},{base:'二',zhuyin:'ㄦˋ'},{base:'三',zhuyin:'ㄙㄢ'},
            {base:'級',zhuyin:'ㄐㄧˊ'},{base:'階',zhuyin:'ㄐㄧㄝ'},{base:'梯',zhuyin:'ㄊㄧ'},
            {base:'高',zhuyin:'ㄍㄠ'},{base:'青',zhuyin:'ㄑㄧㄥ'},{base:'藏',zhuyin:'ㄗㄤˋ'},
            {base:'內',zhuyin:'ㄋㄟˋ'},{base:'蒙',zhuyin:'ㄇㄥˊ'},{base:'東',zhuyin:'ㄉㄨㄥ'},
            {base:'部',zhuyin:'ㄅㄨˋ'},{base:'低',zhuyin:'ㄉㄧ'}
        ],
        pinyin: [
            {base:'一',pinyin:'yī'},{base:'二',pinyin:'èr'},{base:'三',pinyin:'sān'},
            {base:'級',pinyin:'jí'},{base:'階',pinyin:'jiē'},{base:'梯',pinyin:'tī'},
            {base:'高',pinyin:'gāo'},{base:'青',pinyin:'qīng'},{base:'藏',pinyin:'zàng'},
            {base:'內',pinyin:'nèi'},{base:'蒙',pinyin:'méng'},{base:'東',pinyin:'dōng'},
            {base:'部',pinyin:'bù'},{base:'低',pinyin:'dī'}
        ],
        explain: '第一級階梯為青藏高原（最高），第二級為內蒙古高原等，第三級為東部平原丘陵（最低）。'
    },
    {
        title: '四大高原口訣',
        text: '青藏內蒙黃土貴，屋脊平坦溝壑崎',
        zhuyin: [
            {base:'青',zhuyin:'ㄑㄧㄥ'},{base:'藏',zhuyin:'ㄗㄤˋ'},{base:'內',zhuyin:'ㄋㄟˋ'},
            {base:'蒙',zhuyin:'ㄇㄥˊ'},{base:'黃',zhuyin:'ㄏㄨㄤˊ'},{base:'土',zhuyin:'ㄊㄨˇ'},
            {base:'貴',zhuyin:'ㄍㄨㄟˋ'},{base:'屋',zhuyin:'ㄨ'},{base:'脊',zhuyin:'ㄐㄧˇ'},
            {base:'平',zhuyin:'ㄆㄧㄥˊ'},{base:'坦',zhuyin:'ㄊㄢˇ'},{base:'溝',zhuyin:'ㄍㄡ'},
            {base:'壑',zhuyin:'ㄏㄨㄛˋ'},{base:'崎',zhuyin:'ㄑㄧˊ'}
        ],
        pinyin: [
            {base:'青',pinyin:'qīng'},{base:'藏',pinyin:'zàng'},{base:'內',pinyin:'nèi'},
            {base:'蒙',pinyin:'méng'},{base:'黃',pinyin:'huáng'},{base:'土',pinyin:'tǔ'},
            {base:'貴',pinyin:'guì'},{base:'屋',pinyin:'wū'},{base:'脊',pinyin:'jǐ'},
            {base:'平',pinyin:'píng'},{base:'坦',pinyin:'tǎn'},{base:'溝',pinyin:'gōu'},
            {base:'壑',pinyin:'hè'},{base:'崎',pinyin:'qí'}
        ],
        explain: '青藏高原（世界屋脊）、內蒙古高原（平坦）、黃土高原（溝壑縱橫）、雲貴高原（崎嶇）。'
    },
    {
        title: '秦嶺淮河分界口訣',
        text: '秦嶺淮河一條線，南北氣候大不同',
        zhuyin: [
            {base:'秦',zhuyin:'ㄑㄧㄣˊ'},{base:'嶺',zhuyin:'ㄌㄧㄥˇ'},{base:'淮',zhuyin:'ㄏㄨㄞˊ'},
            {base:'河',zhuyin:'ㄏㄜˊ'},{base:'一',zhuyin:'ㄧ'},{base:'條',zhuyin:'ㄊㄧㄠˊ'},
            {base:'線',zhuyin:'ㄒㄧㄢˋ'},{base:'南',zhuyin:'ㄋㄢˊ'},{base:'北',zhuyin:'ㄅㄟˇ'},
            {base:'氣',zhuyin:'ㄑㄧˋ'},{base:'候',zhuyin:'ㄏㄡˋ'},{base:'大',zhuyin:'ㄉㄚˋ'},
            {base:'不',zhuyin:'ㄅㄨˋ'},{base:'同',zhuyin:'ㄊㄨㄥˊ'}
        ],
        pinyin: [
            {base:'秦',pinyin:'Qín'},{base:'嶺',pinyin:'lǐng'},{base:'淮',pinyin:'Huái'},
            {base:'河',pinyin:'hé'},{base:'一',pinyin:'yī'},{base:'條',pinyin:'tiáo'},
            {base:'線',pinyin:'xiàn'},{base:'南',pinyin:'nán'},{base:'北',pinyin:'běi'},
            {base:'氣',pinyin:'qì'},{base:'候',pinyin:'hòu'},{base:'大',pinyin:'dà'},
            {base:'不',pinyin:'bù'},{base:'同',pinyin:'tóng'}
        ],
        explain: '秦嶺—淮河是1月0°C等溫線、800mm等降水量線、暖溫帶與亞熱帶分界線。'
    },
    {
        title: '省級行政區口訣',
        text: '兩湖兩廣兩河山，五江雲貴福吉安',
        zhuyin: [
            {base:'兩',zhuyin:'ㄌㄧㄤˇ'},{base:'湖',zhuyin:'ㄏㄨˊ'},{base:'兩',zhuyin:'ㄌㄧㄤˇ'},
            {base:'廣',zhuyin:'ㄍㄨㄤˇ'},{base:'兩',zhuyin:'ㄌㄧㄤˇ'},{base:'河',zhuyin:'ㄏㄜˊ'},
            {base:'山',zhuyin:'ㄕㄢ'},{base:'五',zhuyin:'ㄨˇ'},{base:'江',zhuyin:'ㄐㄧㄤ'},
            {base:'雲',zhuyin:'ㄩㄣˊ'},{base:'貴',zhuyin:'ㄍㄨㄟˋ'},{base:'福',zhuyin:'ㄈㄨˊ'},
            {base:'吉',zhuyin:'ㄐㄧˊ'},{base:'安',zhuyin:'ㄢ'}
        ],
        pinyin: [
            {base:'兩',pinyin:'liǎng'},{base:'湖',pinyin:'hú'},{base:'兩',pinyin:'liǎng'},
            {base:'廣',pinyin:'guǎng'},{base:'兩',pinyin:'liǎng'},{base:'河',pinyin:'hé'},
            {base:'山',pinyin:'shān'},{base:'五',pinyin:'wǔ'},{base:'江',pinyin:'jiāng'},
            {base:'雲',pinyin:'yún'},{base:'貴',pinyin:'guì'},{base:'福',pinyin:'fú'},
            {base:'吉',pinyin:'jí'},{base:'安',pinyin:'ān'}
        ],
        explain: '湖南湖北、廣東廣西、河南河北、山東山西；五江指江蘇、浙江、江西、黑龍江、新疆。'
    }
];

function initCards() {
    renderGeoMost();
    renderConfusedTerms();
    renderMnemonics();
    initCardFilters();
}

// 地理之最
function renderGeoMost() {
    const container = document.getElementById('geoMostCards');
    if (!container) return;

    const data = csvData['geography-most'] || geoMostData;
    container.innerHTML = data.map(item => `
        <div class="flip-card" data-category="${item.category}" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="card-icon"><i class="fas ${item.icon}"></i></div>
                    <h4>${item.question}</h4>
                    <span class="card-hint">點擊翻轉查看答案</span>
                </div>
                <div class="flip-card-back">
                    <div class="card-answer">${item.answer}</div>
                    <div class="card-detail">${item.detail}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// 篩選
function initCardFilters() {
    document.querySelectorAll('.cards-filter .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cards-filter .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.flip-card').forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 易混淆對比
function renderConfusedTerms() {
    const container = document.getElementById('confusedCards');
    if (!container) return;

    const data = csvData['confused-terms'] || confusedTermsData;
    container.innerHTML = data.map(item => `
        <div class="vs-card">
            <div class="vs-card-header">${item.title}</div>
            <div class="vs-card-body">
                <div class="vs-item">
                    <h5>${item.left.name}</h5>
                    <p>${item.left.desc}</p>
                </div>
                <div class="vs-divider">VS</div>
                <div class="vs-item">
                    <h5>${item.right.name}</h5>
                    <p>${item.right.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// 口訣
function renderMnemonics() {
    const container = document.getElementById('mnemonicsCards');
    if (!container) return;

    const data = csvData['mnemonics'] || mnemonicsData;
    container.innerHTML = data.map(item => {
        const phoneticKey = currentPhoneticMode === 'zhuyin' ? 'zhuyin' : 'pinyin';
        const phoneticData = item[phoneticKey] || [];
        const annotatedText = phoneticData.map(p => {
            const annotation = p[phoneticKey] || '';
            return `<ruby>${p.base}<rt>${annotation}</rt></ruby>`;
        }).join('');

        return `
            <div class="mnemonic-card">
                <h4><i class="fas fa-lightbulb"></i> ${item.title}</h4>
                <div class="mnemonic-text">${annotatedText || item.text}</div>
                <div class="mnemonic-explain">${item.explain}</div>
            </div>
        `;
    }).join('');
}