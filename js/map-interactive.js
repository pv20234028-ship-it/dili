/* ============================================
   map-interactive.js — 地圖互動模組（高德地圖 AMap）
   ============================================ */

// AMap 地圖實例
let fillMap = null, layerMap = null, hotspotMap = null, taiwanMap = null;

// 省份資料
const provincesData = [
    { id:'xinjiang', name:'新疆', abbr:'新', capital:'烏魯木齊', area:'166', pop:'2585', region:'西北', feature:'面積最大省級行政區，三山夾兩盆', lng:85.0, lat:41.0 },
    { id:'xizang', name:'西藏', abbr:'藏', capital:'拉薩', area:'123', pop:'365', region:'西南', feature:'平均海拔最高，青藏高原主體', lng:88.0, lat:31.5 },
    { id:'neimenggu', name:'內蒙古', abbr:'蒙', capital:'呼和浩特', area:'118', pop:'2405', region:'華北', feature:'東西跨度最大，草原畜牧業', lng:112.0, lat:44.0 },
    { id:'qinghai', name:'青海', abbr:'青', capital:'西寧', area:'72', pop:'594', region:'西北', feature:'青海湖、三江源', lng:96.0, lat:36.5 },
    { id:'sichuan', name:'四川', abbr:'川/蜀', capital:'成都', area:'49', pop:'8372', region:'西南', feature:'天府之國，地形西高東低', lng:103.0, lat:30.5 },
    { id:'heilongjiang', name:'黑龍江', abbr:'黑', capital:'哈爾濱', area:'47', pop:'3185', region:'東北', feature:'中國最北省份，冰雪資源豐富', lng:128.0, lat:47.0 },
    { id:'gansu', name:'甘肅', abbr:'甘/隴', capital:'蘭州', area:'43', pop:'2502', region:'西北', feature:'狹長地帶，河西走廊', lng:103.5, lat:36.0 },
    { id:'yunnan', name:'雲南', abbr:'雲/滇', capital:'昆明', area:'39', pop:'4721', region:'西南', feature:'少數民族最多，生物多樣性豐富', lng:101.5, lat:25.0 },
    { id:'guangxi', name:'廣西', abbr:'桂', capital:'南寧', area:'24', pop:'5013', region:'華南', feature:'喀斯特地貌，壯族自治區', lng:108.5, lat:23.5 },
    { id:'hunan', name:'湖南', abbr:'湘', capital:'長沙', area:'21', pop:'6644', region:'華中', feature:'魚米之鄉，洞庭湖平原', lng:112.0, lat:27.5 },
    { id:'shaanxi', name:'陝西', abbr:'陝/秦', capital:'西安', area:'21', pop:'3953', region:'西北', feature:'黃土高原，秦嶺橫亙', lng:109.0, lat:34.5 },
    { id:'hebei', name:'河北', abbr:'冀', capital:'石家莊', area:'19', pop:'7461', region:'華北', feature:'環繞京津，地形多樣', lng:115.5, lat:38.5 },
    { id:'jilin', name:'吉林', abbr:'吉', capital:'長春', area:'19', pop:'2407', region:'東北', feature:'長白山，商品糧基地', lng:126.5, lat:43.5 },
    { id:'hubei', name:'湖北', abbr:'鄂', capital:'武漢', area:'19', pop:'5775', region:'華中', feature:'九省通衢，長江穿境', lng:112.5, lat:31.0 },
    { id:'guangdong', name:'廣東', abbr:'粵', capital:'廣州', area:'18', pop:'12601', region:'華南', feature:'經濟總量第一，珠三角', lng:113.5, lat:23.0 },
    { id:'guizhou', name:'貴州', abbr:'貴/黔', capital:'貴陽', area:'18', pop:'3856', region:'西南', feature:'喀斯特地貌，多民族', lng:106.5, lat:26.5 },
    { id:'shandong', name:'山東', abbr:'魯', capital:'濟南', area:'16', pop:'10153', region:'華東', feature:'經濟強省，半島地形', lng:118.0, lat:36.5 },
    { id:'jiangxi', name:'江西', abbr:'贛', capital:'南昌', area:'17', pop:'4518', region:'華東', feature:'鄱陽湖，紅色搖籃', lng:116.0, lat:27.5 },
    { id:'henan', name:'河南', abbr:'豫', capital:'鄭州', area:'17', pop:'9937', region:'華中', feature:'中原腹地，人口大省', lng:113.5, lat:34.0 },
    { id:'liaoning', name:'遼寧', abbr:'遼', capital:'瀋陽', area:'15', pop:'4259', region:'東北', feature:'老工業基地，遼東半島', lng:123.0, lat:41.5 },
    { id:'shanxi', name:'山西', abbr:'晉', capital:'太原', area:'16', pop:'3492', region:'華北', feature:'煤炭大省，黃土高原東部', lng:112.0, lat:37.5 },
    { id:'anhui', name:'安徽', abbr:'皖', capital:'合肥', area:'14', pop:'6113', region:'華東', feature:'淮河穿境，南北過渡帶', lng:117.5, lat:31.5 },
    { id:'fujian', name:'福建', abbr:'閩', capital:'福州', area:'12', pop:'4154', region:'華東', feature:'東南沿海，閩臺淵源', lng:118.0, lat:26.0 },
    { id:'zhejiang', name:'浙江', abbr:'浙', capital:'杭州', area:'11', pop:'6457', region:'華東', feature:'民營經濟發達，魚米之鄉', lng:120.5, lat:29.5 },
    { id:'jiangsu', name:'江蘇', abbr:'蘇', capital:'南京', area:'11', pop:'8475', region:'華東', feature:'經濟強省，水網密布', lng:119.5, lat:33.0 },
    { id:'chongqing', name:'重慶', abbr:'渝', capital:'重慶', area:'8', pop:'3205', region:'西南', feature:'山城，長江上游經濟中心', lng:106.5, lat:29.5 },
    { id:'ningxia', name:'寧夏', abbr:'寧', capital:'銀川', area:'7', pop:'725', region:'西北', feature:'塞上江南，回族自治區', lng:106.0, lat:37.5 },
    { id:'taiwan', name:'臺灣', abbr:'臺', capital:'臺北', area:'3.6', pop:'2356', region:'華東', feature:'中國第一大島，中央山脈', lng:121.0, lat:23.5 },
    { id:'hainan', name:'海南', abbr:'瓊', capital:'海口', area:'4', pop:'1008', region:'華南', feature:'最大經濟特區，熱帶島嶼', lng:109.5, lat:19.0 },
    { id:'beijing', name:'北京', abbr:'京', capital:'北京', area:'1.6', pop:'2189', region:'華北', feature:'首都，政治文化中心', lng:116.4, lat:39.9 },
    { id:'tianjin', name:'天津', abbr:'津', capital:'天津', area:'1.2', pop:'1387', region:'華北', feature:'北方港口城市', lng:117.2, lat:39.1 },
    { id:'shanghai', name:'上海', abbr:'滬', capital:'上海', area:'0.6', pop:'2489', region:'華東', feature:'國際金融中心', lng:121.5, lat:31.2 },
    { id:'hongkong', name:'香港', abbr:'港', capital:'—', area:'0.11', pop:'750', region:'華南', feature:'國際金融中心，一國兩制', lng:114.2, lat:22.3 },
    { id:'macau', name:'澳門', abbr:'澳', capital:'—', area:'0.003', pop:'68', region:'華南', feature:'旅遊休閒中心，一國兩制', lng:113.5, lat:22.2 }
];

// 山脈座標
const mountainsData = [
    { name:'天山', lng:82.0, lat:42.5, desc:'東西走向，南疆北疆分界' },
    { name:'崑崙山', lng:82.0, lat:36.0, desc:'東西走向，第一二級階梯分界' },
    { name:'秦嶺', lng:108.0, lat:33.5, desc:'東西走向，南北地理分界線' },
    { name:'大興安嶺', lng:122.0, lat:48.0, desc:'東北—西南走向，第二三階梯分界' },
    { name:'太行山', lng:114.0, lat:37.5, desc:'東北—西南走向，黃土高原與華北平原分界' },
    { name:'巫山', lng:110.0, lat:31.0, desc:'東北—西南走向，四川盆地與長江中下游分界' },
    { name:'雪峰山', lng:110.0, lat:27.5, desc:'東北—西南走向，第二三階梯分界' },
    { name:'橫斷山', lng:100.0, lat:28.0, desc:'南北走向，第一二階梯分界' },
    { name:'南嶺', lng:112.0, lat:25.5, desc:'東西走向，長江與珠江分水嶺' },
    { name:'祁連山', lng:99.0, lat:38.0, desc:'西北—東南走向，河西走廊南側' },
    { name:'長白山', lng:128.0, lat:42.0, desc:'東北—西南走向，中朝界山' },
    { name:'阿爾泰山', lng:89.0, lat:47.5, desc:'西北—東南走向，中蒙界山' }
];

// 河流座標
const riversData = [
    { name:'長江', lng:112.0, lat:30.5, desc:'6300km，全國最長河流' },
    { name:'黃河', lng:106.0, lat:36.0, desc:'5464km，「母親河」' },
    { name:'珠江', lng:113.0, lat:23.5, desc:'南方最大水系' },
    { name:'黑龍江', lng:128.0, lat:50.0, desc:'中俄界河' },
    { name:'松花江', lng:128.0, lat:46.0, desc:'東北最大河流' },
    { name:'淮河', lng:117.0, lat:33.0, desc:'南北分界線之一' },
    { name:'海河', lng:117.0, lat:39.0, desc:'華北最大水系' },
    { name:'塔里木河', lng:82.0, lat:40.0, desc:'最長內流河' },
    { name:'雅魯藏布江', lng:93.0, lat:29.5, desc:'世界最深峽谷' },
    { name:'瀾滄江', lng:100.0, lat:25.0, desc:'國際河流（湄公河上游）' }
];

// 高原盆地座標
const plateausData = [
    { name:'青藏高原', lng:88.0, lat:33.0, desc:'世界屋脊' },
    { name:'內蒙古高原', lng:112.0, lat:43.0, desc:'地勢平坦' },
    { name:'黃土高原', lng:109.0, lat:36.0, desc:'溝壑縱橫' },
    { name:'雲貴高原', lng:104.0, lat:25.5, desc:'喀斯特地貌' },
    { name:'塔里木盆地', lng:82.0, lat:40.0, desc:'面積最大盆地' },
    { name:'準噶爾盆地', lng:87.0, lat:45.0, desc:'緯度最高盆地' },
    { name:'柴達木盆地', lng:95.0, lat:37.5, desc:'聚寶盆' },
    { name:'四川盆地', lng:106.0, lat:30.0, desc:'天府之國' }
];

// 填圖狀態
let fillState = {
    selectedWord: null,
    answers: {},
    correct: 0,
    wrong: 0,
    markers: {},
    markerOverlays: []
};

// 安全建立 AMap 地圖
function createAMap(containerId, center, zoom) {
    if (typeof AMap === 'undefined') {
        console.warn('AMap SDK 未載入，地圖功能不可用');
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#7f8c8d;font-size:0.95rem;">地圖服務載入中...<br><small>請確認網路連線正常，且已設定高德地圖 API Key</small></div>';
        }
        return null;
    }
    const map = new AMap.Map(containerId, {
        zoom: zoom || 4,
        center: center ? [center[1], center[0]] : [105.0, 35.0],
        mapStyle: 'amap://styles/whitesmoke',
        viewMode: '2D',
        zooms: [3, 18],
        features: ['bg', 'road', 'building', 'point']
    });
    // 添加縮放工具列
    map.addControl(new AMap.Scale());
    map.addControl(new AMap.ToolBar({ position: 'RT' }));
    return map;
}

function initMapInteractive() {
    renderFillMap();
    renderLayerMap();
    renderHotspotMap();
}

// === 空白填圖 ===
function renderFillMap() {
    const container = document.getElementById('fillMapContainer');
    if (!container) return;

    if (fillMap) { fillMap.destroy(); fillMap = null; }
    fillMap = createAMap('fillMapContainer', [35.0, 105.0], 4);
    if (!fillMap) return;

    fillState = { selectedWord: null, answers: {}, correct: 0, wrong: 0, markers: {}, markerOverlays: [] };
    changeFillCategory('mountains');
}

function changeFillCategory(category) {
    let items = [];
    let markers = [];

    // 清除舊覆蓋物
    if (fillState.markerOverlays) {
        fillState.markerOverlays.forEach(o => fillMap.remove(o));
    }
    fillState = { selectedWord: null, answers: {}, correct: 0, wrong: 0, markers: {}, markerOverlays: [] };

    switch(category) {
        case 'mountains':
            items = mountainsData.map(m => m.name);
            markers = mountainsData;
            break;
        case 'rivers':
            items = riversData.map(r => r.name);
            markers = riversData;
            break;
        case 'provinces':
            items = provincesData.slice(0, 12).map(p => p.name);
            markers = provincesData.slice(0, 12);
            break;
        case 'plateaus':
            items = plateausData.map(p => p.name);
            markers = plateausData;
            break;
    }

    document.getElementById('correctCount').textContent = '0';
    document.getElementById('wrongCount').textContent = '0';

    // 渲染詞彙庫
    const wordItems = document.getElementById('wordItems');
    wordItems.innerHTML = items.map(item =>
        `<span class="word-item" data-word="${item}" onclick="selectFillWord(this)">${item}</span>`
    ).join('');

    // 渲染地圖標記
    markers.forEach((m, i) => {
        const lng = m.lng || 0;
        const lat = m.lat || 0;
        if (!lat || !lng) return;

        const markerContent = document.createElement('div');
        markerContent.className = 'fill-map-marker';
        markerContent.dataset.index = i;
        markerContent.dataset.answer = m.name;
        markerContent.textContent = '?';

        const amapMarker = new AMap.Marker({
            position: [lng, lat],
            content: markerContent,
            offset: new AMap.Pixel(-12, -12),
            zIndex: 100
        });

        amapMarker.on('click', () => placeFillWord(i, { name: m.name, lng, lat }));
        amapMarker.setMap(fillMap);
        fillState.markers[i] = amapMarker;
        fillState.markerOverlays.push(amapMarker);
    });
}

function selectFillWord(el) {
    if (el.classList.contains('placed')) return;
    document.querySelectorAll('.word-item').forEach(w => w.classList.remove('selected'));
    el.classList.add('selected');
    fillState.selectedWord = el.dataset.word;
}

function placeFillWord(index, markerData) {
    if (!fillState.selectedWord) {
        showNotification('請先從詞彙庫選擇一個詞彙', 'warning');
        return;
    }
    if (fillState.answers[index] !== undefined) return;

    const isCorrect = fillState.selectedWord === markerData.name;
    fillState.answers[index] = fillState.selectedWord;

    const amapMarker = fillState.markers[index];
    if (amapMarker) {
        const el = amapMarker.getContentDom && amapMarker.getContentDom();
        const div = el ? el.querySelector('.fill-map-marker') || el : null;
        if (div) {
            if (isCorrect) {
                div.classList.add('placed');
                div.textContent = fillState.selectedWord.charAt(0);
            } else {
                div.classList.add('wrong-marker');
                div.textContent = '✕';
                setTimeout(() => {
                    div.classList.remove('wrong-marker');
                    div.textContent = '?';
                    delete fillState.answers[index];
                }, 1200);
            }
        }
    }

    if (isCorrect) {
        fillState.correct++;
        const wordEl = document.querySelector(`.word-item[data-word="${fillState.selectedWord}"]`);
        if (wordEl) wordEl.classList.add('placed');
    } else {
        fillState.wrong++;
    }

    document.getElementById('correctCount').textContent = fillState.correct;
    document.getElementById('wrongCount').textContent = fillState.wrong;
    fillState.selectedWord = null;
    document.querySelectorAll('.word-item').forEach(w => w.classList.remove('selected'));
}

function resetFillMap() {
    const cat = document.getElementById('fillCategory').value;
    changeFillCategory(cat);
}

function checkFillAnswers() {
    const total = Object.keys(fillState.markers).length;
    if (fillState.correct === total) {
        showNotification('全部正確！太棒了！', 'success');
    } else {
        showNotification(`正確 ${fillState.correct}/${total}，繼續加油！`, 'info');
    }
}

// === 疊圖對比 ===
const layerConfigs = {
    terrain: {
        title: '地形圖',
        items: [
            { color: '#8B4513', label: '高原（>1000m）' },
            { color: '#DAA520', label: '盆地（500-1000m）' },
            { color: '#90EE90', label: '平原（<500m）' },
            { color: '#F5F5DC', label: '丘陵' },
            { color: '#FFFFFF', label: '雪山冰川' }
        ]
    },
    temperature: {
        title: '氣溫帶分佈',
        items: [
            { color: '#FF0000', label: '熱帶' },
            { color: '#FF6600', label: '亞熱帶' },
            { color: '#FFCC00', label: '暖溫帶' },
            { color: '#66CCFF', label: '中溫帶' },
            { color: '#0066FF', label: '寒溫帶' },
            { color: '#9966CC', label: '高原氣候區' }
        ]
    },
    precipitation: {
        title: '降水量分佈',
        items: [
            { color: '#003366', label: '>1600mm 濕潤' },
            { color: '#336699', label: '800-1600mm 濕潤' },
            { color: '#6699CC', label: '400-800mm 半濕潤' },
            { color: '#CC9966', label: '200-400mm 半乾旱' },
            { color: '#CC6633', label: '<200mm 乾旱' }
        ]
    },
    population: {
        title: '人口密度',
        items: [
            { color: '#660000', label: '>500人/km²' },
            { color: '#CC0000', label: '200-500人/km²' },
            { color: '#FF6600', label: '50-200人/km²' },
            { color: '#FFCC00', label: '10-50人/km²' },
            { color: '#FFFFCC', label: '<10人/km²' }
        ]
    }
};

const layerRegions = {
    terrain: [
        { name:'青藏高原', color:'#8B4513', path:[[36,73],[28,73],[28,104],[36,104]] },
        { name:'內蒙古高原', color:'#DAA520', path:[[42,105],[48,105],[48,120],[42,120]] },
        { name:'黃土高原', color:'#CD853F', path:[[34,104],[38,104],[38,112],[34,112]] },
        { name:'雲貴高原', color:'#9ACD32', path:[[23,100],[28,100],[28,108],[23,108]] },
        { name:'東部平原', color:'#90EE90', path:[[28,112],[42,112],[42,122],[28,122]] }
    ],
    temperature: [
        { name:'熱帶', color:'#FF0000', path:[[18,108],[24,108],[24,120],[18,120]] },
        { name:'亞熱帶', color:'#FF6600', path:[[24,104],[34,104],[34,122],[24,122]] },
        { name:'暖溫帶', color:'#FFCC00', path:[[34,104],[42,104],[42,122],[34,122]] },
        { name:'中溫帶', color:'#66CCFF', path:[[42,100],[52,100],[52,130],[42,130]] },
        { name:'寒溫帶', color:'#0066FF', path:[[52,118],[54,118],[54,130],[52,130]] },
        { name:'高原氣候區', color:'#9966CC', path:[[28,73],[36,73],[36,104],[28,104]] }
    ],
    precipitation: [
        { name:'>1600mm', color:'#003366', path:[[22,108],[26,108],[26,120],[22,120]] },
        { name:'800-1600mm', color:'#336699', path:[[26,108],[34,108],[34,122],[26,122]] },
        { name:'400-800mm', color:'#6699CC', path:[[34,104],[42,104],[42,122],[34,122]] },
        { name:'200-400mm', color:'#CC9966', path:[[38,95],[46,95],[46,110],[38,110]] },
        { name:'<200mm', color:'#CC6633', path:[[36,73],[46,73],[46,100],[36,100]] }
    ],
    population: [
        { name:'>500人/km²', color:'#660000', path:[[30,116],[36,116],[36,122],[30,122]] },
        { name:'200-500人/km²', color:'#CC0000', path:[[24,112],[36,112],[36,122],[24,122]] },
        { name:'50-200人/km²', color:'#FF6600', path:[[36,100],[50,100],[50,125],[36,125]] },
        { name:'10-50人/km²', color:'#FFCC00', path:[[38,88],[50,88],[50,108],[38,108]] },
        { name:'<10人/km²', color:'#FFFFCC', path:[[36,73],[48,73],[48,95],[36,95]] }
    ]
};

let currentLayerOverlays = [];

function renderLayerMap() {
    const container = document.getElementById('layerMapContainer');
    if (!container) return;
    if (layerMap) { layerMap.destroy(); layerMap = null; }
    layerMap = createAMap('layerMapContainer', [35.0, 105.0], 4);
    if (!layerMap) return;
    changeLayer('terrain');
}

function changeLayer(layer) {
    const config = layerConfigs[layer];
    if (!config) return;

    // 更新圖例
    const legend = document.getElementById('legendContent');
    legend.innerHTML = config.items.map(item =>
        `<div class="legend-item"><span class="legend-color" style="background:${item.color}"></span><span>${item.label}</span></div>`
    ).join('');

    // 清除舊覆蓋物
    if (currentLayerOverlays.length) {
        currentLayerOverlays.forEach(o => layerMap.remove(o));
        currentLayerOverlays = [];
    }

    // 添加新圖層（使用 AMap.Polygon）
    const regions = layerRegions[layer] || [];
    const opacityVal = (document.getElementById('layerOpacity').value || 70) / 100;

    regions.forEach(r => {
        const path = r.path.map(p => [p[1], p[0]]); // [lng, lat]
        const polygon = new AMap.Polygon({
            path: path,
            fillColor: r.color,
            fillOpacity: opacityVal * 0.5,
            strokeColor: '#fff',
            strokeWeight: 1,
            strokeOpacity: 0.6,
            zIndex: 50
        });
        polygon.setMap(layerMap);

        // 添加名稱標記
        const centerLng = path.reduce((s, p) => s + p[0], 0) / path.length;
        const centerLat = path.reduce((s, p) => s + p[1], 0) / path.length;
        const textMarker = new AMap.Text({
            text: r.name,
            position: [centerLng, centerLat],
            style: {
                'background': 'transparent',
                'border': 'none',
                'color': '#333',
                'font-size': '12px',
                'font-weight': 'bold',
                'text-shadow': '1px 1px 2px #fff, -1px -1px 2px #fff'
            },
            zIndex: 60
        });
        textMarker.setMap(layerMap);

        currentLayerOverlays.push(polygon, textMarker);
    });
}

function updateLayerOpacity(val) {
    document.getElementById('opacityValue').textContent = val + '%';
    // 重新繪製當前圖層
    const layerSelect = document.getElementById('layerSelect');
    if (layerSelect) changeLayer(layerSelect.value);
}

// === 熱區點擊 ===
let hotspotMarkerOverlays = [];

function renderHotspotMap() {
    const container = document.getElementById('hotspotMapContainer');
    if (!container) return;
    if (hotspotMap) { hotspotMap.destroy(); hotspotMap = null; }
    hotspotMap = createAMap('hotspotMapContainer', [35.0, 105.0], 4);
    if (!hotspotMap) return;

    hotspotMarkerOverlays = [];
    provincesData.forEach(prov => {
        // 使用自定義 HTML 標記
        const markerContent = document.createElement('div');
        markerContent.style.cssText = "background:rgba(26,82,118,0.8);color:#fff;padding:3px 7px;border-radius:6px;font-size:10px;cursor:pointer;font-family:'Noto Sans TC',sans-serif;white-space:nowrap;transition:transform 0.2s;text-align:center;";
        markerContent.textContent = prov.abbr;

        const amapMarker = new AMap.Marker({
            position: [prov.lng, prov.lat],
            content: markerContent,
            offset: new AMap.Pixel(-15, -10),
            zIndex: 100
        });

        // 信息窗體
        const infoWindow = new AMap.InfoWindow({
            content: `<div style="padding:6px 10px;font-family:'Noto Sans TC',sans-serif;">
                <h4 style="margin:0 0 4px;color:#1a5276;font-size:14px;">${prov.name}</h4>
                <div style="font-size:12px;color:#555;line-height:1.6;">${prov.feature}</div>
            </div>`,
            offset: new AMap.Pixel(0, -20)
        });

        amapMarker.on('click', () => {
            showProvinceInfo(prov.id);
            infoWindow.open(hotspotMap, [prov.lng, prov.lat]);
        });
        amapMarker.on('mouseover', () => {
            infoWindow.open(hotspotMap, [prov.lng, prov.lat]);
        });
        amapMarker.on('mouseout', () => {
            infoWindow.close();
        });

        amapMarker.setMap(hotspotMap);
        hotspotMarkerOverlays.push({ id: prov.id, marker: amapMarker, infoWindow });
    });
}

function showProvinceInfo(provinceId) {
    const prov = provincesData.find(p => p.id === provinceId);
    if (!prov) return;
    const detail = document.getElementById('provinceDetail');
    detail.innerHTML = `
        <div class="info-row"><span class="info-label">簡稱</span><span class="info-value">${prov.abbr}</span></div>
        <div class="info-row"><span class="info-label">省會</span><span class="info-value">${prov.capital}</span></div>
        <div class="info-row"><span class="info-label">面積</span><span class="info-value">${prov.area} 萬 km²</span></div>
        <div class="info-row"><span class="info-label">人口</span><span class="info-value">${prov.pop} 萬</span></div>
        <div class="info-row"><span class="info-label">區域</span><span class="info-value">${prov.region}</span></div>
        <div class="info-row"><span class="info-label">特色</span><span class="info-value">${prov.feature}</span></div>
    `;
    // 飛行到省份
    if (hotspotMap) hotspotMap.setZoomAndCenter(6, [prov.lng, prov.lat], false, 800);
}

function searchProvince(keyword) {
    if (!keyword) return;
    const prov = provincesData.find(p => p.name.includes(keyword) || p.abbr.includes(keyword));
    if (prov) showProvinceInfo(prov.id);
}

// === 臺灣地圖（SVG 互動式） ===
let twSvgInited = false;

function initTaiwanMap() {
    const container = document.getElementById('taiwanMapContainer');
    if (!container) return;
    if (twSvgInited) return;
    twSvgInited = true;

    // 臺灣島 SVG 輪廓（簡化路徑）
    const taiwanSVG = `
    <svg viewBox="0 0 300 700" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;background:linear-gradient(180deg,#d6eaf8 0%,#eaf2f8 50%,#f5f8fa 100%);" id="taiwanSvgMap">
        <!-- 海洋背景 -->
        <rect x="0" y="0" width="300" height="700" fill="url(#oceanGrad)" rx="8"/>
        <defs>
            <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#d6eaf8"/>
                <stop offset="100%" stop-color="#f5f8fa"/>
            </linearGradient>
            <filter id="islandShadow" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#8ba4b8" flood-opacity="0.35"/>
            </filter>
        </defs>

        <!-- 臺灣島輪廓（南北狹長形，更精確） -->
        <path d="M148,30 
                 C158,32 172,38 180,50 
                 C188,62 192,80 192,100
                 C192,120 188,145 182,170
                 C176,195 168,220 160,245
                 C152,270 146,295 142,320
                 C138,345 136,370 136,395
                 C136,420 138,445 142,470
                 C146,495 152,520 160,545
                 C168,570 175,590 178,610
                 C181,630 180,650 175,665
                 C170,680 160,690 148,695
                 C136,690 128,678 125,660
                 C122,642 124,620 128,595
                 C132,570 135,545 130,520
                 C125,495 118,470 115,445
                 C112,420 112,395 114,370
                 C116,345 118,320 116,295
                 C114,270 110,245 108,220
                 C106,195 108,170 112,145
                 C116,120 122,95 128,70
                 C134,45 140,32 148,30 Z"
              fill="#c8e6c9" stroke="#5d8a5e" stroke-width="2"
              filter="url(#islandShadow)" id="taiwanIsland" style="cursor:pointer;"/>

        <!-- 中央山脈 -->
        <path d="M155,80 C158,120 162,170 165,220 C168,270 170,320 168,370 C166,420 162,470 158,510 C154,550 150,580 148,600"
              fill="none" stroke="#8d6e63" stroke-width="2.5" stroke-dasharray="6,3" opacity="0.6"/>
        <text x="172" y="350" font-size="9" fill="#8d6e63" font-family="'Noto Sans TC',sans-serif" opacity="0.7"
              transform="rotate(-6,172,350)">中央山脈</text>

        <!-- 北回歸線 -->
        <line x1="35" y1="380" x2="265" y2="380" stroke="#e67e22" stroke-width="1.8" stroke-dasharray="8,4" opacity="0.8"/>
        <rect x="186" y="370" width="76" height="18" rx="9" fill="rgba(230,126,34,0.85)"/>
        <text x="224" y="383" text-anchor="middle" font-size="9" fill="#fff" font-family="'Noto Sans TC',sans-serif" font-weight="500">北回歸線</text>

        <!-- 西部平原標記 -->
        <rect x="72" y="240" width="48" height="22" rx="4" fill="rgba(200,230,201,0.7)" stroke="#81c784" stroke-width="0.8"/>
        <text x="96" y="255" text-anchor="middle" font-size="8" fill="#2e7d32" font-family="'Noto Sans TC',sans-serif">西部平原</text>
    </svg>`;

    // 標記點資料
    const twMarkers = [
        { name:'臺北', cx:152, cy:100, desc:'首都，政治經濟中心', color:'#e74c3c', icon:'🏙️' },
        { name:'玉山', cx:158, cy:340, desc:'海拔3952m，中國東部最高峰', color:'#8d6e63', icon:'🏔️' },
        { name:'高雄', cx:135, cy:540, desc:'南部最大港口城市', color:'#3498db', icon:'🚢' },
        { name:'花蓮', cx:195, cy:295, desc:'東部面臨太平洋', color:'#27ae60', icon:'🌊' },
        { name:'臺中', cx:135, cy:245, desc:'中部核心城市', color:'#9b59b6', icon:'🌆' },
        { name:'日月潭', cx:152, cy:320, desc:'最大天然湖泊', color:'#1abc9c', icon:'💎' },
        { name:'臺南', cx:118, cy:445, desc:'歷史文化古都', color:'#e67e22', icon:'🏛️' },
        { name:'新竹', cx:145, cy:155, desc:'科技重鎮（新竹科學園區）', color:'#2ecc71', icon:'💡' }
    ];

    let svgWithMarkers = taiwanSVG;

    // 插入標記點到 SVG
    twMarkers.forEach((m, i) => {
        // 脈衝圓
        svgWithMarkers += `
        <circle cx="${m.cx}" cy="${m.cy}" r="8" fill="${m.color}" opacity="0.2" class="tw-pulse-circle" data-idx="${i}">
            <animate attributeName="r" values="8;16;8" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite"/>
        </circle>`;
        // 主圓點
        svgWithMarkers += `
        <g class="tw-marker-group" data-idx="${i}" style="cursor:pointer;" 
           onmouseenter="showTwInfo(${i})" onmouseleave="hideTwInfo()" onclick="showTwInfo(${i})">
            <circle cx="${m.cx}" cy="${m.cy}" r="7" fill="${m.color}" stroke="#fff" stroke-width="2.5" class="tw-marker-dot"/>
            <text x="${m.cx}" y="${m.cy - 14}" text-anchor="middle" font-size="10" fill="#1a5276" 
                  font-family="'Noto Sans TC',sans-serif" font-weight="600" class="tw-marker-label">${m.name}</text>
        </g>`;
    });

    // 資訊彈出框容器
    svgWithMarkers += `
    <g id="twInfoPopup" opacity="0" style="transition:opacity 0.3s;">
        <rect id="twInfoBg" x="0" y="0" width="160" height="52" rx="8" fill="rgba(26,82,118,0.92)" stroke="none"/>
        <text id="twInfoTitle" x="0" y="0" font-size="13" fill="#fff" font-weight="700" font-family="'Noto Sans TC',sans-serif"></text>
        <text id="twInfoDesc" x="0" y="0" font-size="10" fill="rgba(255,255,255,0.85)" font-family="'Noto Sans TC',sans-serif"></text>
        <polygon id="twInfoArrow" points="0,0 6,0 3,6" fill="rgba(26,82,118,0.92)"/>
    </g>`;

    // 關閉 SVG 標籤
    svgWithMarkers = svgWithMarkers.replace('</svg>', '') + '</svg>';

    container.innerHTML = svgWithMarkers;

    // 存儲標記資料到全域
    window._twMarkers = twMarkers;
}

// 顯示臺灣標記資訊
function showTwInfo(idx) {
    const markers = window._twMarkers;
    if (!markers || !markers[idx]) return;
    const m = markers[idx];

    const popup = document.getElementById('twInfoPopup');
    const bg = document.getElementById('twInfoBg');
    const title = document.getElementById('twInfoTitle');
    const desc = document.getElementById('twInfoDesc');
    const arrow = document.getElementById('twInfoArrow');
    if (!popup) return;

    const px = m.cx;
    const py = m.cy - 24;
    const boxW = 160;
    const boxH = 48;
    const bx = Math.max(10, Math.min(px - boxW/2, 290 - boxW));
    const by = Math.max(5, py - boxH - 8);

    bg.setAttribute('x', bx);
    bg.setAttribute('y', by);
    bg.setAttribute('width', boxW);
    bg.setAttribute('height', boxH);

    title.setAttribute('x', bx + 10);
    title.setAttribute('y', by + 18);
    title.textContent = `${m.icon} ${m.name}`;

    desc.setAttribute('x', bx + 10);
    desc.setAttribute('y', by + 35);
    desc.textContent = m.desc;

    const arrowX = px;
    const arrowY = by + boxH;
    arrow.setAttribute('points', `${arrowX-5},${arrowY} ${arrowX+5},${arrowY} ${arrowX},${arrowY+6}`);

    popup.setAttribute('opacity', '1');
}

function hideTwInfo() {
    const popup = document.getElementById('twInfoPopup');
    if (popup) popup.setAttribute('opacity', '0');
}
