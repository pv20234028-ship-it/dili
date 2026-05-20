/* ============================================
   chapters.js — 章節精講模組
   ============================================ */

// 章節內建資料
const chapterData = {
    terrain: {
        title: '地形與地勢',
        content: `
            <div class="chapter-detail">
                <h4>一、三級階梯概覽</h4>
                <table class="info-table">
                    <tr><th>階梯</th><th>海拔</th><th>主要地形</th><th>分界線</th></tr>
                    <tr><td>第一級</td><td>4000m 以上</td><td>青藏高原</td><td>—</td></tr>
                    <tr><td>第二級</td><td>1000-2000m</td><td>高原、盆地</td><td>崑崙山—祁連山—橫斷山</td></tr>
                    <tr><td>第三級</td><td>500m 以下</td><td>平原、丘陵</td><td>大興安嶺—太行山—巫山—雪峰山</td></tr>
                </table>

                <h4>二、四大高原</h4>
                <ul>
                    <li><strong>青藏高原</strong>：世界最高、面積最大的高原，號稱「世界屋脊」，雪山連綿，冰川廣布</li>
                    <li><strong>內蒙古高原</strong>：地勢平坦，一望無際，草原廣布，是我國第二大高原</li>
                    <li><strong>黃土高原</strong>：世界上面積最廣的黃土堆積區，溝壑縱橫，水土流失嚴重</li>
                    <li><strong>雲貴高原</strong>：喀斯特地貌廣布，崎嶇不平，「地無三里平」</li>
                </ul>

                <h4>三、四大盆地</h4>
                <ul>
                    <li><strong>塔里木盆地</strong>：面積最大，有塔克拉瑪干沙漠，邊緣有綠洲</li>
                    <li><strong>準噶爾盆地</strong>：緯度最高，受北冰洋水汽影響，降水較多</li>
                    <li><strong>柴達木盆地</strong>：地勢最高，礦產資源豐富，被稱「聚寶盆」</li>
                    <li><strong>四川盆地</strong>：氣候溫暖濕潤，被稱「紫色盆地」「天府之國」</li>
                </ul>

                <h4>四、三大平原</h4>
                <ul>
                    <li><strong>東北平原</strong>：面積最大，黑土地肥沃</li>
                    <li><strong>華北平原</strong>：又稱黃淮海平原，由黃河等沖積而成</li>
                    <li><strong>長江中下游平原</strong>：「魚米之鄉」，地勢低平，河湖密布</li>
                </ul>

                <h4>五、主要山脈</h4>
                <table class="info-table">
                    <tr><th>山脈</th><th>走向</th><th>地理意義</th></tr>
                    <tr><td>天山</td><td>東西</td><td>南疆與北疆分界線</td></tr>
                    <tr><td>崑崙山</td><td>東西</td><td>第一、二級階梯分界線</td></tr>
                    <tr><td>秦嶺</td><td>東西</td><td>南北分界線（800mm等降水量線）</td></tr>
                    <tr><td>大興安嶺</td><td>東北—西南</td><td>第二、三級階梯分界線</td></tr>
                    <tr><td>太行山</td><td>東北—西南</td><td>黃土高原與華北平原分界</td></tr>
                    <tr><td>巫山</td><td>東北—西南</td><td>四川盆地與長江中下游平原分界</td></tr>
                    <tr><td>橫斷山</td><td>南北</td><td>第一、二級階梯分界線</td></tr>
                    <tr><td>臺灣山脈</td><td>南北</td><td>我國東部最高峰玉山</td></tr>
                </table>
            </div>
        `
    },
    climate: {
        title: '氣候特徵',
        content: `
            <div class="chapter-detail">
                <h4>一、氣候基本特徵</h4>
                <ul>
                    <li><strong>季風氣候顯著</strong>：冬季偏北風，寒冷乾燥；夏季偏南風，高溫多雨</li>
                    <li><strong>氣候複雜多樣</strong>：從熱帶到寒溫帶，從溼潤到乾旱，類型齊全</li>
                    <li><strong>大陸性強</strong>：氣溫年較差大，降水季節分配不均</li>
                </ul>

                <h4>二、秦嶺—淮河一線的意義</h4>
                <table class="info-table">
                    <tr><th>項目</th><th>秦嶺—淮河以北</th><th>秦嶺—淮河以南</th></tr>
                    <tr><td>1月均溫</td><td>&lt;0°C</td><td>&gt;0°C</td></tr>
                    <tr><td>溫度帶</td><td>暖溫帶</td><td>亞熱帶</td></tr>
                    <tr><td>年降水量</td><td>&lt;800mm</td><td>&gt;800mm</td></tr>
                    <tr><td>乾濕地區</td><td>半濕潤區</td><td>濕潤區</td></tr>
                    <tr><td>耕作制度</td><td>一年一熟/兩年三熟</td><td>一年兩熟到三熟</td></tr>
                    <tr><td>主要糧食</td><td>小麥</td><td>水稻</td></tr>
                </table>

                <h4>三、溫度帶</h4>
                <ul>
                    <li><strong>熱帶</strong>：北回歸線以南，全年高溫</li>
                    <li><strong>亞熱帶</strong>：秦嶺—淮河以南，夏季高溫多雨</li>
                    <li><strong>暖溫帶</strong>：秦嶺—淮河以北至長城一線</li>
                    <li><strong>中溫帶</strong>：長城以北至大興安嶺</li>
                    <li><strong>寒溫帶</strong>：大興安嶺北部</li>
                    <li><strong>高原氣候區</strong>：青藏高原</li>
                </ul>

                <h4>四、乾濕地區</h4>
                <ul>
                    <li><strong>濕潤區</strong>：年降水量 &gt;800mm，東南部</li>
                    <li><strong>半濕潤區</strong>：400-800mm，東北平原、華北平原</li>
                    <li><strong>半乾旱區</strong>：200-400mm，內蒙古高原、黃土高原</li>
                    <li><strong>乾旱區</strong>：&lt;200mm，西北內陸</li>
                </ul>
            </div>
        `
    },
    hydrology: {
        title: '河流與湖泊',
        content: `
            <div class="chapter-detail">
                <h4>一、外流區與內流區</h4>
                <ul>
                    <li><strong>外流區</strong>：約佔全國面積2/3，河流最終注入海洋</li>
                    <li><strong>內流區</strong>：約佔1/3，河流不入海，最終消失或注入內陸湖</li>
                </ul>

                <h4>二、長江</h4>
                <table class="info-table">
                    <tr><th>項目</th><th>內容</th></tr>
                    <tr><td>長度</td><td>6300公里，全國最長，世界第三</td></tr>
                    <tr><td>發源地</td><td>唐古拉山脈主峰格拉丹東</td></tr>
                    <tr><td>注入</td><td>東海</td></tr>
                    <tr><td>上中下游分界</td><td>宜昌、湖口</td></tr>
                    <tr><td>水能資源</td><td>集中在上游（三峽、葛洲壩）</td></tr>
                    <tr><td>航運價值</td><td>「黃金水道」，航運價值最高</td></tr>
                </table>

                <h4>三、黃河</h4>
                <table class="info-table">
                    <tr><th>項目</th><th>內容</th></tr>
                    <tr><td>長度</td><td>5464公里，全國第二長河</td></tr>
                    <tr><td>發源地</td><td>巴顏喀拉山脈</td></tr>
                    <tr><td>注入</td><td>渤海</td></tr>
                    <tr><td>上中下游分界</td><td>河口、桃花峪</td></tr>
                    <tr><td>上游</td><td>水能豐富（青銅峽、劉家峽）</td></tr>
                    <tr><td>中游</td><td>含沙量大（穿過黃土高原）</td></tr>
                    <tr><td>下游</td><td>「地上河」，泥沙淤積</td></tr>
                </table>

                <h4>四、主要湖泊</h4>
                <ul>
                    <li><strong>鄱陽湖</strong>：我國最大淡水湖（江西）</li>
                    <li><strong>洞庭湖</strong>：第二大淡水湖（湖南）</li>
                    <li><strong>太湖</strong>：第三大淡水湖（江蘇）</li>
                    <li><strong>青海湖</strong>：我國最大湖泊、最大鹹水湖（青海）</li>
                    <li><strong>納木錯</strong>：海拔最高的大湖（西藏）</li>
                </ul>
            </div>
        `
    },
    population: {
        title: '人口與民族',
        content: `
            <div class="chapter-detail">
                <h4>一、人口分佈特點</h4>
                <ul>
                    <li><strong>胡煥庸線</strong>（黑河—騰衝線）：東南部人口密集，西北部人口稀疏</li>
                    <li>東南部佔43%的面積，聚集94%的人口</li>
                    <li>人口密度：東部 &gt; 中部 &gt; 西部</li>
                </ul>

                <h4>二、民族分佈</h4>
                <ul>
                    <li>漢族：遍佈全國，主要集中在東部和中部</li>
                    <li>少數民族：大散居、小聚居、交錯雜居</li>
                    <li>少數民族主要分佈在西南、西北和東北地區</li>
                    <li>壯族：人口最多的少數民族（廣西）</li>
                </ul>

                <h4>三、人口問題</h4>
                <ul>
                    <li>人口老齡化加速</li>
                    <li>城鎮化率持續提高</li>
                    <li>出生率下降</li>
                    <li>人口遷移：農村→城市，內陸→沿海</li>
                </ul>
            </div>
        `
    },
    agriculture: {
        title: '農業與糧食',
        content: `
            <div class="chapter-detail">
                <h4>一、南北農業差異</h4>
                <table class="info-table">
                    <tr><th>項目</th><th>南方</th><th>北方</th></tr>
                    <tr><td>耕地類型</td><td>水田為主</td><td>旱地為主</td></tr>
                    <tr><td>主要糧食</td><td>水稻</td><td>小麥、玉米</td></tr>
                    <tr><td>作物熟制</td><td>一年兩熟到三熟</td><td>一年一熟/兩年三熟</td></tr>
                    <tr><td>經濟作物</td><td>甘蔗、油菜、棉花</td><td>甜菜、大豆、花生</td></tr>
                </table>

                <h4>二、三大平原農業</h4>
                <ul>
                    <li><strong>東北平原</strong>：黑土地，商品糧基地，大豆、玉米、春小麥</li>
                    <li><strong>華北平原</strong>：冬小麥、玉米、棉花，缺水問題</li>
                    <li><strong>長江中下游平原</strong>：水稻、油菜、淡水養殖</li>
                </ul>

                <h4>三、畜牧業</h4>
                <ul>
                    <li>牧區畜牧業：內蒙古、新疆、青海、西藏四大牧區</li>
                    <li>農耕區畜牧業：養豬為主，分佈廣泛</li>
                </ul>
            </div>
        `
    },
    industry: {
        title: '工業與交通',
        content: `
            <div class="chapter-detail">
                <h4>一、四大工業基地</h4>
                <table class="info-table">
                    <tr><th>工業基地</th><th>特色</th><th>中心城市</th></tr>
                    <tr><td>遼中南</td><td>重工業基地</td><td>瀋陽、大連</td></tr>
                    <tr><td>京津唐</td><td>北方綜合性工業基地</td><td>北京、天津、唐山</td></tr>
                    <tr><td>滬寧杭</td><td>全國最大綜合性工業基地</td><td>上海、南京、杭州</td></tr>
                    <tr><td>珠江三角洲</td><td>以輕工業為主的綜合性基地</td><td>廣州、深圳</td></tr>
                </table>

                <h4>二、主要鐵路幹線</h4>
                <ul>
                    <li><strong>「五縱」</strong>：京哈—京廣、京九、京滬、焦柳、寶成—成昆</li>
                    <li><strong>「三橫」</strong>：京包—包蘭、隴海—蘭新、滬杭—浙贛—湘黔—貴昆</li>
                </ul>

                <h4>三、資源分佈</h4>
                <ul>
                    <li><strong>煤炭</strong>：山西、陝西、內蒙古（「晉陝蒙」）</li>
                    <li><strong>石油</strong>：大慶、勝利、遼河、克拉瑪依</li>
                    <li><strong>天然氣</strong>：塔里木盆地、四川盆地</li>
                    <li><strong>鐵礦</strong>：遼寧鞍山、河北遷安、四川攀枝花</li>
                </ul>
            </div>
        `
    },
    hongkong: {
        title: '香港特別行政區',
        content: `
            <div class="chapter-detail">
                <h4>一、地理位置</h4>
                <ul>
                    <li>位於珠江口東側，南臨南海</li>
                    <li>由香港島、九龍半島、新界及離島組成</li>
                    <li>陸地面積約1107平方公里</li>
                    <li>人口約750萬，人口密度極高</li>
                </ul>
                <h4>二、經濟特色</h4>
                <ul>
                    <li>國際金融中心、貿易中心、航運中心</li>
                    <li>轉口貿易發達，是內地對外貿易的重要通道</li>
                    <li>服務業佔GDP超過90%</li>
                </ul>
                <h4>三、與內地聯繫</h4>
                <ul>
                    <li>粵港澳大灣區建設：與深圳、廣州等城市協同發展</li>
                    <li>港珠澳大橋：連接香港、珠海、澳門</li>
                    <li>廣深港高鐵：香港融入國家高鐵網絡</li>
                    <li>東江水供港：香港淡水主要來自廣東東江</li>
                </ul>
            </div>
        `
    },
    macau: {
        title: '澳門特別行政區',
        content: `
            <div class="chapter-detail">
                <h4>一、地理位置</h4>
                <ul>
                    <li>位於珠江口西側，與珠海相鄰</li>
                    <li>由澳門半島、氹仔、路環及填海區組成</li>
                    <li>陸地面積約33平方公里（持續填海擴大）</li>
                    <li>人口約68萬，人口密度全球最高之一</li>
                </ul>
                <h4>二、經濟特色</h4>
                <ul>
                    <li>世界旅遊休閒中心，博彩業為支柱產業</li>
                    <li>中西文化交融：澳門歷史城區為世界文化遺產</li>
                    <li>中國與葡語國家商貿合作服務平臺</li>
                </ul>
                <h4>三、填海造地</h4>
                <ul>
                    <li>澳門半島面積已較原始擴大一倍以上</li>
                    <li>新城填海區持續推進</li>
                    <li>港珠澳大橋連接香港與珠海</li>
                </ul>
            </div>
        `
    },
    taiwan: {
        title: '臺灣地區',
        content: `
            <div class="chapter-detail">
                <h4>一、地理位置</h4>
                <ul>
                    <li>位於中國東南海域，臺灣海峽與福建相望</li>
                    <li>由臺灣島、澎湖列島、釣魚島等組成</li>
                    <li>臺灣島面積約3.6萬平方公里，為中國第一大島</li>
                </ul>
                <h4>二、地形特徵</h4>
                <ul>
                    <li>中央山脈縱貫南北，佔島面積2/3</li>
                    <li>玉山主峰3952m，中國東部最高峰</li>
                    <li>西部平原狹長，東部為縱谷</li>
                    <li>地處環太平洋火山地震帶</li>
                </ul>
                <h4>三、氣候</h4>
                <ul>
                    <li>北回歸線穿過中部</li>
                    <li>北部：亞熱帶季風；南部：熱帶季風</li>
                    <li>降水豐富，山區可達3000mm以上</li>
                    <li>颱風頻繁（夏秋季）</li>
                </ul>
                <h4>四、與大陸的淵源</h4>
                <ul>
                    <li>地質上同屬歐亞板塊</li>
                    <li>臺灣海峽原為陸地，後因地殼運動與海平面上升形成</li>
                    <li>居民主要來自福建、廣東移民</li>
                    <li>語言文化同根同源</li>
                </ul>
            </div>
        `
    }
};

// 區域資料
const regionData = {
    northeast: {
        title: '東北地區',
        content: `
            <div class="chapter-detail">
                <h4>範圍</h4><p>黑龍江、吉林、遼寧</p>
                <h4>自然特徵</h4>
                <ul>
                    <li>緯度高，冬季寒冷漫長，夏季溫暖短促</li>
                    <li>山環水繞：大興安嶺、小興安嶺、長白山環抱</li>
                    <li>黑土地肥沃，有機質含量高</li>
                    <li>松花江、遼河等水系</li>
                </ul>
                <h4>經濟特色</h4>
                <ul>
                    <li>我國重要的商品糧基地（大豆、玉米、水稻）</li>
                    <li>老工業基地：鋼鐵、機械、石油</li>
                    <li>林業資源：大興安嶺、長白山林區</li>
                </ul>
            </div>`
    },
    north: {
        title: '華北地區',
        content: `
            <div class="chapter-detail">
                <h4>範圍</h4><p>北京、天津、河北、山西、內蒙古</p>
                <h4>自然特徵</h4>
                <ul>
                    <li>黃土高原水土流失嚴重</li>
                    <li>華北平原是黃河沖積平原</li>
                    <li>溫帶季風氣候，春旱嚴重</li>
                    <li>跨流域調水（南水北調）</li>
                </ul>
                <h4>經濟特色</h4>
                <ul>
                    <li>京津冀城市群：政治文化中心</li>
                    <li>煤炭資源豐富（山西）</li>
                    <li>鋼鐵工業：首鋼、唐山鋼鐵</li>
                </ul>
            </div>`
    },
    east: {
        title: '華東地區',
        content: `
            <div class="chapter-detail">
                <h4>範圍</h4><p>上海、江蘇、浙江、安徽、福建、江西、山東</p>
                <h4>自然特徵</h4>
                <ul>
                    <li>長江三角洲平原</li>
                    <li>亞熱帶季風氣候，雨熱同期</li>
                    <li>河網密布，水運便利</li>
                    <li>海岸線長，港口眾多</li>
                </ul>
                <h4>經濟特色</h4>
                <ul>
                    <li>長三角經濟圈：全國經濟最發達地區</li>
                    <li>上海：國際金融、航運中心</li>
                    <li>民營經濟活躍（浙江）</li>
                    <li>對外開放程度最高</li>
                </ul>
            </div>`
    },
    central: {
        title: '華中地區',
        content: `
            <div class="chapter-detail">
                <h4>範圍</h4><p>河南、湖北、湖南</p>
                <h4>自然特徵</h4>
                <ul>
                    <li>地處中國中部，「九省通衢」</li>
                    <li>長江橫穿，洞庭湖、鄱陽湖等</li>
                    <li>南北氣候過渡帶</li>
                    <li>大別山、武陵山等</li>
                </ul>
                <h4>經濟特色</h4>
                <ul>
                    <li>交通樞紐：武漢、鄭州</li>
                    <li>農業大省：糧食、棉花、油料</li>
                    <li>武漢城市圈、長株潭城市群</li>
                </ul>
            </div>`
    },
    south: {
        title: '華南地區',
        content: `
            <div class="chapter-detail">
                <h4>範圍</h4><p>廣東、廣西、海南</p>
                <h4>自然特徵</h4>
                <ul>
                    <li>緯度最低，熱帶和亞熱帶季風氣候</li>
                    <li>珠江水系，水量豐富</li>
                    <li>海岸線曲折，島嶼眾多</li>
                    <li>颱風影響頻繁</li>
                </ul>
                <h4>經濟特色</h4>
                <ul>
                    <li>珠三角經濟圈：改革開放前沿</li>
                    <li>對外貿易發達</li>
                    <li>海南自貿港建設</li>
                    <li>熱帶農業：橡膠、椰子、甘蔗</li>
                </ul>
            </div>`
    },
    southwest: {
        title: '西南地區',
        content: `
            <div class="chapter-detail">
                <h4>範圍</h4><p>重慶、四川、貴州、雲南、西藏</p>
                <h4>自然特徵</h4>
                <ul>
                    <li>地形複雜：高原、山地、盆地、峽谷</li>
                    <li>橫斷山脈山河相間</li>
                    <li>氣候垂直變化顯著</li>
                    <li>生物多樣性豐富</li>
                </ul>
                <h4>經濟特色</h4>
                <ul>
                    <li>成渝雙城經濟圈</li>
                    <li>水能資源豐富（三峽、溪洛渡）</li>
                    <li>旅遊資源：九寨溝、麗江、布達拉宮</li>
                    <li>少數民族眾多</li>
                </ul>
            </div>`
    },
    northwest: {
        title: '西北地區',
        content: `
            <div class="chapter-detail">
                <h4>範圍</h4><p>陝西、甘肅、青海、寧夏、新疆</p>
                <h4>自然特徵</h4>
                <ul>
                    <li>乾旱半乾旱為主，降水稀少</li>
                    <li>沙漠戈壁廣布（塔克拉瑪干沙漠）</li>
                    <li>綠洲農業</li>
                    <li>內流河為主，塔里木河最長</li>
                </ul>
                <h4>經濟特色</h4>
                <ul>
                    <li>絲綢之路經濟帶</li>
                    <li>能源資源：石油、天然氣、風能、太陽能</li>
                    <li>畜牧業：新疆細毛羊、寧夏灘羊</li>
                    <li>特色農產：吐魯番葡萄、哈密瓜</li>
                </ul>
            </div>`
    },
    'qinghai-tibet': {
        title: '青藏地區',
        content: `
            <div class="chapter-detail">
                <h4>範圍</h4><p>青海、西藏</p>
                <h4>自然特徵</h4>
                <ul>
                    <li>世界屋脊，平均海拔4000m以上</li>
                    <li>高原山地氣候：高寒缺氧</li>
                    <li>雪山冰川廣布，大江大河發源地</li>
                    <li>太陽輻射強，晝夜溫差大</li>
                </ul>
                <h4>經濟特色</h4>
                <ul>
                    <li>高原牧業：犛牛、藏綿羊</li>
                    <li>三江源自然保護區</li>
                    <li>旅遊資源：布達拉宮、納木錯</li>
                    <li>清潔能源：太陽能、地熱</li>
                    <li>青藏鐵路：世界海拔最高鐵路</li>
                </ul>
            </div>`
    }
};

function initChapters() {
    // 章節模組由 HTML 中的 onclick 事件驅動
}

// === 章節小練習 ===
const chapterQuizData = {
    terrain: [
        { q:'我國地勢第三級階梯的主要地形是？', opts:['高原','盆地','平原和丘陵','山地'], ans:2 },
        { q:'「三山夾兩盆」描述的是哪個省區？', opts:['西藏','內蒙古','新疆','青海'], ans:2 },
        { q:'判斷：太行山是第一二級階梯的分界線。', opts:['正確','錯誤'], ans:1 },
        { q:'我國面積最大的平原是？', opts:['華北平原','長江中下游平原','東北平原','珠江三角洲'], ans:2 }
    ],
    climate: [
        { q:'我國冬季氣溫分佈特點是？', opts:['全國普遍低溫','南北溫差大','東西溫差大','南方比北方冷'], ans:1 },
        { q:'我國降水量空間分佈規律是？', opts:['從南向北遞減','從東向西遞減','從東南向西北遞減','從北向南遞減'], ans:2 },
        { q:'判斷：我國夏季南北普遍高溫。', opts:['正確','錯誤'], ans:0 },
        { q:'我國溫度帶劃分的主要依據是？', opts:['降水量','≥10°C積溫','1月均溫','7月均溫'], ans:1 }
    ],
    hydrology: [
        { q:'我國最大的鹹水湖是？', opts:['鄱陽湖','洞庭湖','青海湖','納木錯'], ans:2 },
        { q:'長江的水能資源主要集中在？', opts:['上游','中游','下游','河口'], ans:0 },
        { q:'判斷：我國所有的河流都注入海洋。', opts:['正確','錯誤'], ans:1 },
        { q:'唯一注入北冰洋的河流是？', opts:['黑龍江','額爾齊斯河','塔里木河','雅魯藏布江'], ans:1 }
    ],
    population: [
        { q:'胡煥庸線以東面積約佔全國？', opts:['43%','57%','30%','70%'], ans:0 },
        { q:'我國人口最多的少數民族是？', opts:['回族','壯族','滿族','維吾爾族'], ans:1 },
        { q:'判斷：我國人口已呈現負增長趨勢。', opts:['正確','錯誤'], ans:1 },
        { q:'我國城鎮化率持續提高，目前約為？', opts:['40%','50%','65%','80%'], ans:2 }
    ],
    agriculture: [
        { q:'我國南方主要的耕地類型是？', opts:['旱地','水田','草地','林地'], ans:1 },
        { q:'「南稻北麥」的分界線是？', opts:['長城','秦嶺—淮河','南嶺','大興安嶺'], ans:1 },
        { q:'判斷：華北平原是我國最大的商品糧基地。', opts:['正確','錯誤'], ans:1 },
        { q:'我國糖料作物「南甘北甜」中「甜」指的是？', opts:['甘蔗','甜菜','蜂蜜','糖楓'], ans:1 }
    ],
    industry: [
        { q:'以輕工業為主的工業基地是？', opts:['遼中南','京津唐','滬寧杭','珠江三角洲'], ans:3 },
        { q:'我國「五縱三橫」鐵路網中，京廣線屬於？', opts:['五縱之一','三橫之一'], ans:0 },
        { q:'判斷：我國的工業分佈總體東密西疏。', opts:['正確','錯誤'], ans:0 },
        { q:'西氣東輸的氣源主要來自？', opts:['四川盆地','塔里木盆地','柴達木盆地','鄂爾多斯盆地'], ans:1 }
    ],
    hongkong: [
        { q:'香港位於珠江口的哪一側？', opts:['東側','西側','北側','南側'], ans:0 },
        { q:'港珠澳大橋全長約多少公里？', opts:['35','45','55','65'], ans:2 },
        { q:'判斷：香港的淡水主要依靠本地水庫供應。', opts:['正確','錯誤'], ans:1 },
        { q:'香港服務業佔GDP的比例約為？', opts:['70%','80%','90%','95%'], ans:2 }
    ],
    macau: [
        { q:'澳門由哪幾部分組成？', opts:['半島和離島','只有半島','島嶼群','大陸延伸'], ans:0 },
        { q:'澳門擴大陸地面積的主要方式是？', opts:['佔海','填海造地','購買土地','圍湖造田'], ans:1 },
        { q:'判斷：澳門歷史城區是世界文化遺產。', opts:['正確','錯誤'], ans:0 },
        { q:'澳門的支柱產業是？', opts:['金融業','製造業','博彩旅遊業','漁業'], ans:2 }
    ],
    taiwan: [
        { q:'臺灣島最高的山峰是？', opts:['阿里山','玉山','雪山','中央山脈主峰'], ans:1 },
        { q:'臺灣島屬於什麼氣候？', opts:['熱帶季風','亞熱帶季風','亞熱帶和熱帶季風','溫帶季風'], ans:2 },
        { q:'判斷：臺灣海峽是連接東海和南海的通道。', opts:['正確','錯誤'], ans:0 },
        { q:'臺灣最長的河流是？', opts:['高屏溪','濁水溪','淡水河','曾文溪'], ans:1 }
    ]
};

function openChapterQuiz(chapterId) {
    const questions = chapterQuizData[chapterId];
    if (!questions) {
        showNotification('該章節暫無小練習', 'warning');
        return;
    }

    const titles = {
        terrain:'地形與地勢', climate:'氣候特徵', hydrology:'河流與湖泊',
        population:'人口與民族', agriculture:'農業與糧食', industry:'工業與交通',
        hongkong:'香港', macau:'澳門', taiwan:'臺灣'
    };

    const modal = document.getElementById('chapterQuizModal');
    document.getElementById('chapterQuizTitle').innerHTML = `<i class="fas fa-pen"></i> ${titles[chapterId] || chapterId} — 小練習`;

    const body = document.getElementById('chapterQuizBody');
    body.innerHTML = questions.map((q, i) => `
        <div class="chapter-quiz-card" id="cq${i}">
            <div class="cq-question">${i+1}. ${q.q}</div>
            <div class="cq-options">
                ${q.opts.map((opt, j) => `
                    <div class="cq-option" data-q="${i}" data-v="${j}" onclick="selectCQ(${i},${j})">${opt}</div>
                `).join('')}
            </div>
        </div>
    `).join('') + `
        <div class="quiz-actions" style="justify-content:center;margin-top:16px;">
            <button class="btn-primary" onclick="submitCQ('${chapterId}')"><i class="fas fa-check"></i> 提交答案</button>
        </div>
        <div class="chapter-quiz-result" id="cqResult"></div>
    `;

    // 存儲臨時作答
    window._cqAnswers = {};
    modal.classList.add('active');
}

function selectCQ(qIdx, optIdx) {
    window._cqAnswers[qIdx] = optIdx;
    document.querySelectorAll(`.cq-option[data-q="${qIdx}"]`).forEach(el => {
        el.classList.remove('selected');
        if (parseInt(el.dataset.v) === optIdx) el.classList.add('selected');
    });
}

function submitCQ(chapterId) {
    const questions = chapterQuizData[chapterId];
    let correct = 0;
    questions.forEach((q, i) => {
        const userAns = window._cqAnswers[i];
        const opts = document.querySelectorAll(`.cq-option[data-q="${i}"]`);
        opts.forEach(el => {
            const v = parseInt(el.dataset.v);
            if (v === q.ans) el.classList.add('correct');
            else if (v === userAns && v !== q.ans) el.classList.add('wrong');
        });
        if (userAns === q.ans) correct++;
    });

    document.getElementById('cqResult').innerHTML =
        `<div style="font-size:1.2rem;margin-top:12px;">答對 ${correct}/${questions.length} 題${correct === questions.length ? ' 🎉 完美！' : '，繼續加油！'}</div>`;
}

function closeChapterQuizModal() {
    document.getElementById('chapterQuizModal').classList.remove('active');
}

function loadChapter(chapterId) {
    const data = chapterData[chapterId];
    if (!data) return;
    const modal = document.getElementById('chapterModal');
    document.getElementById('chapterModalTitle').textContent = data.title;
    document.getElementById('chapterModalBody').innerHTML = data.content;
    modal.classList.add('active');
}

function closeChapterModal() {
    document.getElementById('chapterModal').classList.remove('active');
}

function openRegionModal(regionId) {
    const data = regionData[regionId];
    if (!data) return;
    const modal = document.getElementById('regionModal');
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalBody').innerHTML = data.content;
    modal.classList.add('active');
}

function closeRegionModal() {
    document.getElementById('regionModal').classList.remove('active');
}

// 點擊 overlay 關閉 modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});

// 章節詳情表格樣式（注入）
(function() {
    const style = document.createElement('style');
    style.textContent = `
        .chapter-detail h4 { font-family: var(--font-serif); color: var(--primary); margin: 18px 0 10px; font-size: 1.05rem; }
        .chapter-detail h4:first-child { margin-top: 0; }
        .chapter-detail ul { margin-left: 20px; margin-bottom: 12px; }
        .chapter-detail li { margin-bottom: 6px; font-size: 0.92rem; line-height: 1.7; }
        .chapter-detail p { font-size: 0.92rem; margin-bottom: 8px; }
        .info-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 0.88rem; }
        .info-table th { background: var(--primary); color: #fff; padding: 8px 12px; text-align: left; }
        .info-table td { padding: 8px 12px; border-bottom: 1px solid var(--border); }
        .info-table tr:hover td { background: rgba(41,128,185,0.05); }
    `;
    document.head.appendChild(style);
})();