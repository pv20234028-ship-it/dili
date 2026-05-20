/* ============================================
   hktw.js — 港澳臺視角專區模組（高德地圖 AMap）
   ============================================ */

// 兩岸名詞對照資料
const terminologyData = [
    { category:'地理', mainland:'大陸架', taiwan:'大陸棚', note:'指大陸向海洋延伸的淺海地帶' },
    { category:'地理', mainland:'板塊構造', taiwan:'板塊構造', note:'兩岸用語相同' },
    { category:'地理', mainland:'喀斯特地貌', taiwan:'石灰岩地形/喀斯特地形', note:'臺灣常用「石灰岩地形」' },
    { category:'地理', mainland:'沖積扇', taiwan:'沖積扇', note:'兩岸用語相同' },
    { category:'地理', mainland:'三角洲', taiwan:'三角洲', note:'兩岸用語相同' },
    { category:'地理', mainland:'海拔', taiwan:'海拔', note:'兩岸用語相同' },
    { category:'氣候', mainland:'季風氣候', taiwan:'季風氣候', note:'兩岸用語相同' },
    { category:'氣候', mainland:'寒潮', taiwan:'寒流', note:'大陸稱「寒潮」，臺灣稱「寒流」' },
    { category:'氣候', mainland:'臺風', taiwan:'颱風', note:'大陸簡化字寫法不同' },
    { category:'氣候', mainland:'降水量', taiwan:'降雨量', note:'大陸常用「降水量」，臺灣常用「降雨量」' },
    { category:'水文', mainland:'水利樞紐', taiwan:'水庫/水壩', note:'大陸稱大型水利工程為「水利樞紐」' },
    { category:'水文', mainland:'內流河', taiwan:'內陸河', note:'指不入海的河流' },
    { category:'水文', mainland:'外流河', taiwan:'外流河', note:'兩岸用語相同' },
    { category:'行政', mainland:'省會', taiwan:'省會', note:'兩岸用語相同' },
    { category:'行政', mainland:'自治區', taiwan:'自治區', note:'兩岸用語相同' },
    { category:'行政', mainland:'直轄市', taiwan:'直轄市', note:'兩岸用語相同' },
    { category:'行政', mainland:'特別行政區', taiwan:'特別行政區', note:'兩岸用語相同' },
    { category:'經濟', mainland:'珠三角', taiwan:'珠三角', note:'兩岸用語相同' },
    { category:'經濟', mainland:'長三角', taiwan:'長三角', note:'兩岸用語相同' },
    { category:'經濟', mainland:'高新技術', taiwan:'高科技', note:'大陸稱「高新技術」，臺灣稱「高科技」' },
    { category:'經濟', mainland:'軟件', taiwan:'軟體', note:'大陸稱「軟件」，臺灣稱「軟體」' },
    { category:'經濟', mainland:'網絡', taiwan:'網路', note:'大陸稱「網絡」，臺灣稱「網路」' },
    { category:'經濟', mainland:'信息', taiwan:'資訊', note:'大陸稱「信息」，臺灣稱「資訊」' },
    { category:'交通', mainland:'高速公路', taiwan:'國道/高速公路', note:'臺灣國道即高速公路' },
    { category:'交通', mainland:'鐵路', taiwan:'鐵路/鐵道', note:'臺灣亦稱「鐵道」' },
    { category:'交通', mainland:'地鐵', taiwan:'捷運', note:'大陸稱「地鐵」，臺灣稱「捷運」' },
    { category:'度量', mainland:'公里', taiwan:'公里', note:'兩岸用語相同' },
    { category:'度量', mainland:'平方米', taiwan:'平方公尺', note:'大陸稱「平方米」，臺灣稱「平方公尺」' },
    { category:'度量', mainland:'攝氏度', taiwan:'攝氏度', note:'兩岸用語相同' },
    { category:'度量', mainland:'千瓦時', taiwan:'度（電）', note:'大陸稱「千瓦時」，臺灣口語稱「度」' }
];

function initHKTW() {
    renderTerminology();
    if (typeof initTaiwanMap === 'function') initTaiwanMap();
}

function renderTerminology() {
    const body = document.getElementById('terminologyBody');
    if (!body) return;

    const data = csvData['terminology'] || terminologyData;
    body.innerHTML = data.map(item => `
        <tr>
            <td class="term-category">${item.category}</td>
            <td class="term-mainland">${item.mainland}</td>
            <td class="term-taiwan">${item.taiwan}</td>
            <td>${item.note}</td>
        </tr>
    `).join('');
}

function searchTerm(keyword) {
    const rows = document.querySelectorAll('#terminologyBody tr');
    const kw = keyword.toLowerCase();
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(kw) ? '' : 'none';
    });
}

function renderTaiwanMap() {
    if (typeof initTaiwanMap === 'function') initTaiwanMap();
}
