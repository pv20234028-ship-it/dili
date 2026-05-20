/* ============================================
   app.js — 主應用程式邏輯
   ============================================ */

// 全域變數
let csvData = {};
let currentPhoneticMode = 'zhuyin';

// CSV 載入
async function loadCSV(filename) {
    try {
        const resp = await fetch(`data/${filename}`);
        if (!resp.ok) throw new Error(`Failed to load ${filename}`);
        const text = await resp.text();
        return parseCSV(text);
    } catch (e) {
        console.warn(`CSV ${filename} 載入失敗，使用內建資料`, e);
        return null;
    }
}

function parseCSV(text) {
    const lines = text.trim().split('\n');
    if (lines.length < 2) return [];
    const headers = lines[0].split(',').map(h => h.trim());
    const data = [];
    for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        if (values.length === headers.length) {
            const obj = {};
            headers.forEach((h, idx) => obj[h] = values[idx].trim());
            data.push(obj);
        }
    }
    return data;
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            inQuotes = !inQuotes;
        } else if (ch === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += ch;
        }
    }
    result.push(current);
    return result;
}

// 初始化
document.addEventListener('DOMContentLoaded', async () => {
    initNavbar();
    initTabs();
    initScrollEffects();
    initHeroAnimation();
    await loadAllData();
    initAllModules();
});

async function loadAllData() {
    const files = [
        'provinces.csv', 'mountains.csv', 'rivers.csv', 'climate.csv',
        'geography-most.csv', 'confused-terms.csv', 'mnemonics.csv', 'quizzes.csv',
        'terminology.csv'
    ];
    const promises = files.map(f => loadCSV(f));
    const results = await Promise.allSettled(promises);
    files.forEach((f, i) => {
        if (results[i].status === 'fulfilled' && results[i].value) {
            csvData[f.replace('.csv', '')] = results[i].value;
        }
    });
}

function initAllModules() {
    if (typeof initChapters === 'function') initChapters();
    if (typeof initMapInteractive === 'function') initMapInteractive();
    if (typeof initCards === 'function') initCards();
    if (typeof initQuiz === 'function') initQuiz();
    if (typeof initHKTW === 'function') initHKTW();
}

// 導航列
function initNavbar() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });
    // 點擊連結時關閉選單
    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => links.classList.remove('open'));
    });
}

// 標籤頁切換
function initTabs() {
    document.querySelectorAll('.tab-nav').forEach(nav => {
        const group = nav.dataset.tabGroup;
        nav.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                nav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const target = btn.dataset.tab;
                const container = nav.nextElementSibling;
                if (container) {
                    container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
                    const panel = container.querySelector(`[data-panel="${target}"]`);
                    if (panel) panel.classList.add('active');
                // 省份填圖延遲初始化
                if (target === 'province-fill' && typeof initProvinceFillMap === 'function') {
                    setTimeout(() => initProvinceFillMap(), 100);
                }
                }
            });
        });
    });
}

// 捲動效果
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        // 導航列陰影
        navbar.classList.toggle('scrolled', scrollY > 50);
        // 回到頂部按鈕
        backToTop.classList.toggle('visible', scrollY > 400);
        // 活動連結
        const sections = document.querySelectorAll('.section');
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 100;
            if (scrollY >= top) current = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// 英雄數字動畫
function initHeroAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);
}

function animateNumbers() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = current;
        }, 30);
    });
}

// 工具函數
function showNotification(msg, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = msg;
    notification.style.cssText = `
        position: fixed; top: 80px; right: 20px; z-index: 3000;
        padding: 12px 24px; border-radius: 8px; color: #fff;
        font-size: 0.9rem; font-weight: 500; animation: fadeIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    const colors = { info: '#3498db', success: '#27ae60', warning: '#e67e22', error: '#e74c3c' };
    notification.style.background = colors[type] || colors.info;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// 注音/拼音模式
function setPhoneticMode(mode) {
    currentPhoneticMode = mode;
    document.querySelectorAll('.phonetic-toggle .toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    // 更新口訣顯示
    if (typeof renderMnemonics === 'function') renderMnemonics();
}

// LocalStorage 工具
function saveToStorage(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
}

function loadFromStorage(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
}