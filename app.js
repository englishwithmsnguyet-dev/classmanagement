// State Management
let appState = {
    classes: [],
    selectedClassId: null,
    currentWeekIndex: 0,
    pet: null,
    lastModified: Date.now()
};

let syncTimeout = null;
let isSyncing = false;

// Generate unique ID
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Initial Data Seed
const SEED_CLASSES = [
    { name: "CB206", startDate: "2026-04-02", daysOfWeek: [2, 4, 6], duration: 4.5 },
    { 
        name: "CB210", 
        startDate: "2026-05-22", 
        daysOfWeek: [1, 3, 5], 
        duration: 4.5,
        timeSlot: "16g45 - 18g15",
        scheduleChanges: [
            { effectiveDate: "2026-10-05", daysOfWeek: [2, 4, 6], timeSlot: "16g45 - 18g15" }
        ],
        totalLessons: 85
    },
    { name: "CB211", startDate: "2026-06-17", daysOfWeek: [1, 3, 5], duration: 4.5 },
    { name: "CB213", startDate: "2026-06-27", daysOfWeek: [2, 4, 6], duration: 4.5 },
    { name: "CB219", startDate: "2026-10-02", daysOfWeek: [1, 3, 5], duration: 4.5, timeSlot: "20h15 - 21h45" },
    { name: "CB220", startDate: "2026-10-26", daysOfWeek: [1, 3, 5], duration: 4.5, timeSlot: "18h30 - 20h" },
    { name: "ONB103", startDate: "2026-06-17", daysOfWeek: [1, 3, 5], duration: 4.5 },
    { name: "B212", startDate: "2026-07-07", daysOfWeek: [2, 4, 6], duration: 6 }
];

const SEED_STUDENTS = {
    "ONB103": [
        "Nguyễn Thị Duy", "Phạm Trần Mỹ Hân", "Trịnh Thị Thu Hiền", "Nguyễn Hoàng Kha",
        "Phạm Thị Út Lua", "Lê Huỳnh Diễm My", "Nguyễn Thị Ngọc Mỹ", "Huỳnh Thị Kim Ngân",
        "Trần Thị Kim Ngân", "Nguyễn Thị Tiểu Phụng", "Trần Yến Phụng", "Phạm Ngọc Thạch",
        "Cao Thị Thu Trang", "Nguyễn Thị Thanh Tuyền", "Trần Phạm Phương Uyên", "Trần Ngô Mỹ Vy"
    ],
    "CB210": [
        "Nguyễn Võ Thành Đạt", "Lê Huỳnh Thanh Duy", "Nguyễn Cao Kỳ Duyên", "Đào Ngọc Hân", 
        "Trần Văn Hữu", "Trần Văn Kim Khoa", "Nguyễn Thanh Nâng", "Huỳnh Kỳ Nguyên", 
        "Võ Thị Kim Nguyên", "Võ Hùng Sanh", "Tiền Thị Thanh Thảo", "Trần Thị Thanh Thảo", "Đặng Thị Kim Thoa", 
        "Trần Thị Tiên Tiên", "Lê Kim Tuyền"
    ],
    "CB211": [
        "Hồ Anh Quân", "Lê Thành Nghiệp", "Lê Khánh Lâm", "Huỳnh Thị Ngọc Thắm", 
        "Mai Trần Xuân Mai", "Lê Thị Uyển Nhi", "Nguyễn Thụy Thanh Trúc"
    ],
    "CB213": [
        "Nguyễn Quốc Anh", "Hoàng Hợp Minh Châu", "Đặng Châu Gia Huy", "Trần Minh Tuệ Mẩn", 
        "Đặng Thị Trúc Măng", "Trương Thị Kha My", "Ngô Diễm My", "Chiêm Chúc Ngân", 
        "Huỳnh Thị Yến Nhi", "Phạm Nguyễn Tâm Như", "Phạm Nhựt Tiến", "Lê Thị Tú Trinh", 
        "Trần Ngọc Vinh"
    ],
    "B212": [
        "Nguyễn Duy Hồng Anh", "Nguyễn Ngọc Minh Anh", "Nguyễn Lê Mỹ Hân", "Nguyễn Hồng Minh Huy",
        "Nguyễn Quốc Khải", "Lê Nguyễn Gia Khánh", "Nguyễn Hữu Khánh", "Hồ Thị Ngọc Lan",
        "Trần Thị Hồng Lỉnh", "Võ Thị Triệu Minh", "Hứa Đình Nghi", "Võ Thị Bảo Ngọc",
        "Lê Tiến Phát", "Nguyễn Kim Tiền", "Lê Thị Bảo Trân", "Võ Thị Diễm Trinh",
        "Nguyễn Tấn Trung", "Trần Thị Ánh Tuyết", "Đặng Nguyễn Khánh Uyên", "Nguyễn Thị Chúc Yến"
    ],
    "CB206": [
        "Văn Như Anh", "Nguyễn Thị Vân Anh", "Nguyễn Thị Hồng Duyên", "Nguyễn Thị Thúy Hồng",
        "Trương Ngọc Nhi", "Nguyễn Phạm Như Quỳnh", "Trần Lê Quỳnh", "Thị Mỹ Tâm", "Ông Lê Thành",
        "Trần Nguyễn Thanh Thảo", "Phan Nhật Thiện", "Nguyễn Mỹ Tiên", "Trần Thị Cẩm Tiên",
        "Võ Trần Bảo Tính", "Trương Thanh Toàn", "Phạm Ngọc Trâm", "Nguyễn Võ Bảo Trân"
    ],
    "CB219": [
        "Lưu Thị Vân Anh", "Nguyễn Tuấn Anh", "Trần Thị Huỳnh Duy", "Duy Thị Huỳnh Hân",
        "Trần Thị Xuân Hoa", "Nguyễn Phạm Khang", "Đặng Văn Khánh", "Chim Nhật Luân",
        "Lư Vĩnh Phúc", "Nguyễn Chí Thiện", "Trần Thị Ngọc Thơ", "Huỳnh Yến Trang",
        "Thị Thu Trinh", "Nguyễn Thị Mỹ Xuyên", "Nguyễn Như Ý"
    ],
    "CB220": [
        "Lý Quốc Dũng", "Phan Minh Khôi", "Huỳnh Văn My", "Mai Thúy Ngân",
        "Võ Huỳnh Thảo Nguyên", "Đặng Dũ Nguyên", "Nguyễn Gia Nguyễn", "Trương Thị Thảo Như",
        "Huỳnh Nhật Phát", "Nguyễn Huỳnh Thanh Sơn", "Thái Nhựt Thịnh", "Trần Nguyễn Huỳnh Trâm",
        "Nguyễn Thị Tường Vi", "Lê Tường Vy", "Bùi Ngọc Như Ý"
    ]
};

// ==========================================
// INDEXEDDB PHOTO STORAGE (DUNG LƯỢNG LỚN, KHÔNG BỊ TRÀN BỘ NHỚ)
// ==========================================
const DB_NAME = 'AttendancePhotosDB';
const DB_STORE = 'photos';
let dbInstance = null;

function getPhotoDB() {
    if (dbInstance) return Promise.resolve(dbInstance);
    return new Promise((resolve) => {
        if (!window.indexedDB) {
            console.warn('IndexedDB không được hỗ trợ trên trình duyệt này');
            resolve(null);
            return;
        }
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(DB_STORE)) {
                db.createObjectStore(DB_STORE, { keyPath: 'key' });
            }
        };
        req.onsuccess = (e) => {
            dbInstance = e.target.result;
            resolve(dbInstance);
        };
        req.onerror = (e) => {
            console.error('IndexedDB open error:', e);
            resolve(null);
        };
    });
}

async function savePhotosToStorage(classId, dateStr, photos) {
    try {
        const db = await getPhotoDB();
        if (!db) return false;
        return new Promise((resolve) => {
            const tx = db.transaction(DB_STORE, 'readwrite');
            const store = tx.objectStore(DB_STORE);
            const key = `${classId}_${dateStr}`;
            if (!photos || photos.length === 0) {
                store.delete(key);
            } else {
                store.put({ key, photos, updatedAt: Date.now() });
            }
            tx.oncomplete = () => resolve(true);
            tx.onerror = (err) => {
                console.error('Save photos err:', err);
                resolve(false);
            };
        });
    } catch(err) {
        console.error('savePhotosToStorage error:', err);
        return false;
    }
}

async function loadPhotosFromStorage(classId, dateStr) {
    try {
        const db = await getPhotoDB();
        if (!db) return [];
        return new Promise((resolve) => {
            const tx = db.transaction(DB_STORE, 'readonly');
            const store = tx.objectStore(DB_STORE);
            const key = `${classId}_${dateStr}`;
            const req = store.get(key);
            req.onsuccess = () => {
                if (req.result && req.result.photos) {
                    resolve(req.result.photos);
                } else {
                    resolve([]);
                }
            };
            req.onerror = () => resolve([]);
        });
    } catch(err) {
        console.error('loadPhotosFromStorage error:', err);
        return [];
    }
}

function cleanHeavyDataFromState(state) {
    if (!state || !state.classes) return false;
    let cleaned = false;
    state.classes.forEach(cls => {
        if (!cls.attendance) return;
        Object.keys(cls.attendance).forEach(dateStr => {
            const rec = cls.attendance[dateStr];
            if (rec && rec.images && Array.isArray(rec.images) && rec.images.length > 0) {
                savePhotosToStorage(cls.id, dateStr, rec.images);
                rec.photoCount = rec.images.length;
                delete rec.images;
                cleaned = true;
            }
        });
    });
    return cleaned;
}

function loadState() {
    const saved = localStorage.getItem('attendance_app_v2');
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch(e) {
            console.error('Lỗi đọc dữ liệu cũ:', e);
        }
    }
    
    let stateChanged = false;
    if (cleanHeavyDataFromState(appState)) {
        stateChanged = true;
    }
    if (ensureAllSeedClassesExist(appState)) {
        stateChanged = true;
    }
    if (ensurePetState(appState)) {
        stateChanged = true;
    }

    // Migration: fix CB210 schedule (was mistakenly set to [2,4,6] instead of [1,3,5])
    const cb210 = appState.classes.find(c => c.name === 'CB210');
    if (cb210 && cb210.schedule.daysOfWeek.join(',') === '2,4,6') {
        cb210.schedule.daysOfWeek = [1, 3, 5];
        stateChanged = true;
    }

    // Migration: Fix totalLessons calculation to account for 4.4 weeks/month + holidays
    appState.classes.forEach(c => {
        const expectedLessons = Math.floor(c.schedule.durationMonths * 4.4 * c.schedule.daysOfWeek.length) + 6;
        if (c.schedule.totalLessons < expectedLessons) {
            c.schedule.totalLessons = expectedLessons;
            stateChanged = true;
        }
    });

    // Migration: Add 3 extra weeks (9 lessons) to CB206
    const cb206 = appState.classes.find(c => c.name === 'CB206');
    if (cb206 && !cb206.extended3Weeks) {
        cb206.schedule.totalLessons += 9;
        cb206.extended3Weeks = true;
        stateChanged = true;
    }

    // Migration: CB210 switches to 357 (16g45 - 18g15) from week of 2026-10-05
    if (ensureClassScheduleMigrations(appState)) {
        stateChanged = true;
    }

    if (stateChanged) {
        saveState();
    }
}

function ensureClassScheduleMigrations(state) {
    if (!state || !state.classes) return false;
    let changed = false;
    const cb210 = state.classes.find(c => c.name === 'CB210');
    if (cb210) {
        if (!cb210.schedule.scheduleChanges) {
            cb210.schedule.scheduleChanges = [];
        }
        const hasOctChange = cb210.schedule.scheduleChanges.some(c => c.effectiveDate === '2026-10-05');
        if (!hasOctChange) {
            cb210.schedule.scheduleChanges.push({
                effectiveDate: '2026-10-05',
                daysOfWeek: [2, 4, 6],
                timeSlot: '16g45 - 18g15'
            });
            cb210.schedule.timeSlot = '16g45 - 18g15';
            if (!cb210.schedule.totalLessons || cb210.schedule.totalLessons < 85) {
                cb210.schedule.totalLessons = 85;
            }
            changed = true;
        }
    }
    return changed;
}

function ensureAllSeedClassesExist(state) {
    if (!state || !state.classes) return false;
    let changed = false;
    SEED_CLASSES.forEach(seed => {
        const exists = state.classes.find(c => c.name === seed.name);
        if (!exists) {
            let initialStudents = [];
            if (SEED_STUDENTS[seed.name]) {
                initialStudents = SEED_STUDENTS[seed.name].map(name => ({ id: generateId(), name }));
            }
            
            state.classes.push({
                id: generateId(),
                name: seed.name,
                schedule: {
                    startDate: seed.startDate,
                    durationMonths: seed.duration,
                    daysOfWeek: seed.daysOfWeek,
                    timeSlot: seed.timeSlot || '',
                    scheduleChanges: seed.scheduleChanges || [],
                    totalLessons: seed.totalLessons || (Math.floor(seed.duration * 4.4 * seed.daysOfWeek.length) + 6)
                },
                students: initialStudents,
                attendance: {}
            });
            changed = true;
        }
    });
    return changed;
}

function saveState() {
    appState.lastModified = Date.now();
    try {
        localStorage.setItem('attendance_app_v2', JSON.stringify(appState));
    } catch (err) {
        console.warn('Lỗi localStorage (có thể do ảnh cũ làm đầy bộ nhớ), đang dọn dẹp...', err);
        cleanHeavyDataFromState(appState);
        try {
            localStorage.setItem('attendance_app_v2', JSON.stringify(appState));
        } catch (retryErr) {
            console.error('Không thể lưu localStorage:', retryErr);
        }
    }
    
    // Auto sync
    const scriptUrl = localStorage.getItem('googleAppsScriptUrl');
    if (scriptUrl) {
        updateCloudStatus('Đang lưu mây...', 'fa-spinner fa-spin');
        clearTimeout(syncTimeout);
        syncTimeout = setTimeout(() => {
            postToCloud(scriptUrl);
        }, 1500);
    }
}

// Logic: Calculate all lesson dates for a course
function getCourseDates(schedule) {
    const dates = [];
    let d = new Date(schedule.startDate);
    d.setHours(0,0,0,0);
    
    // Safety break
    let limit = 0;
    while (dates.length < schedule.totalLessons && limit < 1500) {
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const dateStr = `${yyyy}-${mm}-${dd}`;

        let currentDaysOfWeek = schedule.daysOfWeek;
        if (schedule.scheduleChanges && schedule.scheduleChanges.length > 0) {
            for (const ch of schedule.scheduleChanges) {
                if (dateStr >= ch.effectiveDate) {
                    currentDaysOfWeek = ch.daysOfWeek;
                }
            }
        }

        if (currentDaysOfWeek.includes(d.getDay())) {
            dates.push(dateStr);
        }
        d.setDate(d.getDate() + 1);
        limit++;
    }
    return dates;
}

// DOM Elements
const sidebarClassesList = document.getElementById('sidebar-classes-list');
const btnShowAddClassModal = document.getElementById('btn-show-add-class-modal');
const themeToggle = document.getElementById('theme-toggle');

const emptyStateView = document.getElementById('empty-state-view');
const classView = document.getElementById('class-view');

const pageTitle = document.getElementById('page-title');
const pageSubtitle = document.getElementById('page-subtitle');
const btnEditClass = document.getElementById('btn-edit-class');
const btnExportCSV = document.getElementById('btn-export-csv');
const btnSyncCloud = document.getElementById('btn-sync-cloud');
const btnSaveData = document.getElementById('btn-save-data');

const btnHomeNav = document.getElementById('btn-home-nav');
const homeView = document.getElementById('home-view');
const randomClassSelect = document.getElementById('random-class-select');
const btnPickRandom = document.getElementById('btn-pick-random');
const randomResultName = document.getElementById('random-result-name');
const randomResultBox = document.getElementById('random-result-box');

const tabSlot = document.getElementById('tab-slot');
const tabWheel = document.getElementById('tab-wheel');
const modeSlot = document.getElementById('mode-slot');
const modeWheel = document.getElementById('mode-wheel');
const luckyWheelCanvas = document.getElementById('lucky-wheel');
const btnSpinWheel = document.getElementById('btn-spin-wheel');
const wheelResultCenter = document.getElementById('wheel-result-center');

const memoryBoard = document.getElementById('memory-board');
const btnRestartGame = document.getElementById('btn-restart-game');
const gameMovesEl = document.getElementById('game-moves');
const gameLevelEl = document.getElementById('game-level');

const btnPrevWeek = document.getElementById('btn-prev-week');
const btnNextWeek = document.getElementById('btn-next-week');
const weekDisplayTitle = document.getElementById('week-display-title');
const weekDisplayDates = document.getElementById('week-display-dates');

const matrixNotesRow = document.getElementById('matrix-notes-row');
const matrixDatesRow = document.getElementById('matrix-dates-row');
const matrixBody = document.getElementById('matrix-body');

// Modals
const addClassModal = document.getElementById('add-class-modal');
const manageStudentsModal = document.getElementById('manage-students-modal');
const announcementModal = document.getElementById('announcement-modal');
const lessonDetailsModal = document.getElementById('lesson-details-modal');
const btnCloseModals = document.querySelectorAll('.close-modal');

// Init
function init() {
    loadState();
    
    // Data Migration: Fix ONB103 start date to 2026-06-17 based on new requirements
    const onb103 = appState.classes.find(c => c.name === "ONB103");
    if (onb103 && onb103.schedule.startDate === "2026-06-20") {
        onb103.schedule.startDate = "2026-06-17";
        saveState();
    }
    
    // Data Migration: Populate actual students and schedules for seeded classes
    ["CB210", "CB211", "CB213", "B212", "CB219", "CB220"].forEach(clsName => {
        const cls = appState.classes.find(c => c.name === clsName);
        if (cls) {
            const seedInfo = SEED_CLASSES.find(s => s.name === clsName);
            cls.schedule.startDate = seedInfo.startDate;
            cls.schedule.daysOfWeek = seedInfo.daysOfWeek;
            if (seedInfo.scheduleChanges) {
                cls.schedule.scheduleChanges = seedInfo.scheduleChanges;
            }
            if (seedInfo.timeSlot) {
                cls.schedule.timeSlot = seedInfo.timeSlot;
            }
            if (seedInfo.totalLessons && (!cls.schedule.totalLessons || cls.schedule.totalLessons < seedInfo.totalLessons)) {
                cls.schedule.totalLessons = seedInfo.totalLessons;
            }
            
            if (cls.students.length === 0) {
                cls.students = SEED_STUDENTS[clsName].map(name => ({ id: generateId(), name }));
            }
        }
    });
    
    // Data Migration: Pre-populate ONB103 Historical Data from Zalo posts
    if (onb103 && !onb103.historicalDataSeeded) {
        const history = [
            { date: "2026-06-19", absents: ["Nguyễn Hoàng Kha", "Lê Huỳnh Diễm My"], topic: "SPEAKING LESSON 01", content: "GETTING TO KNOW EACH OTHER", hw: "Không.", note: "Anh chị và các bạn nhớ xem lại nội dung bài đã học và luyện tập nói nhen. Có thể vào web cô đã thiết kế để ôn bài ạ.", next: "LISTENING" },
            { date: "2026-06-22", absents: ["Nguyễn Thị Thanh Tuyền"], topic: "LISTENING LESSON 01", content: "PART 01: SHORT TALKS/CONVERSATIONS - DẠNG 01: CÂU HỎI MỤC ĐÍCH GIAO TIẾP", hw: "Example 03 & 04", note: "- Anh chị và các bạn nhớ làm bài tập và nghe lại các ví dụ, sau đó ghi chú câu chứa đáp án vào tài liệu của mình nhen ạ.\n- Anh chị và các bạn sử dụng trang web để làm bài và học bài nhé.", next: "WRITING" },
            { date: "2026-06-24", absents: [], topic: "WRITING LESSON 01", content: "CÁC THÀNH PHẦN CÂU CƠ BẢN", hw: "XÁC ĐỊNH THÀNH PHẦN CÂU (10 câu)", note: "- Anh chị và các bạn vào trang web bên dưới để ôn lý thuyết và làm bài tập nhé. Mọi người xem HƯỚNG DẪN HỌC ở phần TRANG CHỦ ạ.\n- Làm bài tập xong anh chị và các bạn gửi kết quả lên nhóm Zalo để xác nhận nhen.", next: "READING LESSON 01" },
            { date: "2026-06-26", absents: ["Huỳnh Thị Kim Ngân"], topic: "READING LESSON 01", content: "TỔNG QUAN VỀ READING", hw: "0", note: "", next: "SPEAKING LESSON 02" },
            { date: "2026-06-29", absents: [], topic: "SPEAKING LESSON 02", content: "GETTING TO KNOW EACH OTHER (tiếp theo) & SPEAKING PART 01", hw: "Thực hành tự giới thiệu bản thân", note: "Anh chị và các bạn nhớ xem lại nội dung bài đã học và luyện tập nói nhen ạ.", next: "LISTENING" },
            { date: "2026-07-01", absents: ["Trần Phạm Phương Uyên"], topic: "LISTENING LESSON 02", content: "PART 01: SHORT TALKS/CONVERSATIONS - DẠNG 02: CÂU HỎI Ý CHÍNH", hw: "0", note: "- Anh chị và bạn nhớ nghe lại các ví dụ, sau đó ghi chú câu chứa đáp án vào tài liệu của mình nhen ạ.\n- Các bạn sử dụng trang web để làm bài và học bài nhé.", next: "WRITING" },
            { date: "2026-07-03", absents: ["Nguyễn Thị Thanh Tuyền"], topic: "WRITING LESSON 02", content: "CÁC CẤU TRÚC CÂU CƠ BẢN", hw: "Xác định cấu trúc câu (10 câu trong phần LUYỆN TẬP trên web)", note: "- Anh chị và các bạn vào trang web bên dưới để ôn lý thuyết và làm bài tập nhé.\n- Làm bài tập xong anh chị và các bạn gửi kết quả lên nhóm Zalo để xác nhận nhen!", next: "READING LESSON 02" }
        ];
        
        history.forEach(rec => {
            if (!onb103.attendance[rec.date]) {
                onb103.attendance[rec.date] = { absentIds: [], noHomeworkIds: [], noLessonIds: [], details: {} };
            }
            const att = onb103.attendance[rec.date];
            
            // Map student names to IDs
            rec.absents.forEach(name => {
                const s = onb103.students.find(st => st.name === name);
                if (s && !att.absentIds.includes(s.id)) {
                    att.absentIds.push(s.id);
                }
            });
            
            // Populate details
            att.details = {
                topic: rec.topic,
                content: rec.content,
                homework: rec.hw,
                note: rec.note,
                next: rec.next
            };
        });
        
        onb103.historicalDataSeeded = true;
    }
    
    // Data Migration: Pre-populate CB211 Historical Data from Zalo posts
    const cb211 = appState.classes.find(c => c.name === "CB211");
    if (cb211 && !cb211.historicalDataSeeded) {
        const historyCB211 = [
            { date: "2026-06-19", absents: ["Mai Trần Xuân Mai"], topic: "SPEAKING LESSON 01", content: "GETTING TO KNOW EACH OTHER", hw: "Không.", note: "Các bạn nhớ xem lại nội dung bài đã học và luyện tập nói nhen. Có thể vào web cô đã thiết kế để ôn bài ạ.", next: "LISTENING" },
            { date: "2026-06-22", absents: ["Nguyễn Thụy Thanh Trúc"], topic: "LISTENING LESSON 01", content: "PART 01: SHORT TALKS/CONVERSATIONS - DẠNG 01: CÂU HỎI MỤC ĐÍCH GIAO TIẾP", hw: "Không.", note: "- Các bạn nhớ nghe lại các ví dụ, sau đó ghi chú câu chứa đáp án vào tài liệu của mình nhen ạ.\n- Các bạn sử dụng trang web để làm bài và học bài nhé.", next: "WRITING" },
            { date: "2026-06-24", absents: [], topic: "WRITING LESSON 01", content: "CÁC THÀNH PHẦN CÂU CƠ BẢ", hw: "XÁC ĐỊNH THÀNH PHẦN CÂU (10 câu)", note: "- Các bạn vào trang web bên dưới để ôn lý thuyết và làm bài tập nhé. Mọi người xem HƯỚNG DẪN HỌC ở phần TRANG CHỦ nhen.\n- Làm bài tập xong các bạn gửi kết quả lên nhóm Zalo để xác nhận nhen.", next: "READING LESSON 01" },
            { date: "2026-06-26", absents: ["Lê Khánh Lâm", "Lê Thành Nghiệp", "Huỳnh Thị Ngọc Thắm"], topic: "READING LESSON 01", content: "TỔNG QUAN VỀ READING", hw: "0", note: "", next: "SPEAKING LESSON 02" },
            { date: "2026-07-01", absents: ["Mai Trần Xuân Mai"], topic: "LISTENING LESSON 02", content: "PART 01: SHORT TALKS/CONVERSATIONS - DẠNG 02: CÂU HỎI Ý CHÍNH + DẠNG 03: CÂU HỎI CHI TIẾT", hw: "EXAMPLE 03 & 04", note: "- Các bạn nhớ nghe lại các ví dụ, sau đó ghi chú câu chứa đáp án vào tài liệu của mình nhen ạ.\n- Các bạn sử dụng trang web để làm bài và học bài nhé.\n\nP/S thấy bài đăng thì tương tác các bạn ơi, cô nhắc nhiều quá rồi mà 🥹🥹🥹", next: "WRITING" },
            { date: "2026-07-03", absents: ["Nguyễn Thụy Thanh Trúc"], topic: "WRITING LESSON 02", content: "CÁC CẤU TRÚC CÂU CƠ BẢN", hw: "Xác định cấu trúc câu (10 câu trong phần LUYỆN TẬP trên web)", note: "- Các bạn vào trang web bên dưới để ôn lý thuyết và làm bài tập nhé.\n- Làm bài tập xong các bạn gửi kết quả lên nhóm Zalo để xác nhận nhen!\n\nP/S Mọi người lưu ý là link đã đổi rồi nhen!", next: "READING LESSON 02" },
            { date: "2026-07-06", absents: ["Huỳnh Thị Ngọc Thắm"], topic: "READING LESSON 02", content: "SKIMMING & SCANNING + DẠNG 01: CÂU HỎI TÌM Ý CHÍNH", hw: "PRACTICE 03 & 04", note: "Các bạn nhớ xem lại nội dung lý thuyết, làm bài tập và học từ vựng nhé!", next: "SPEAKING PART 01 (tiếp theo)" }
        ];
        
        historyCB211.forEach(rec => {
            if (!cb211.attendance[rec.date]) {
                cb211.attendance[rec.date] = { absentIds: [], noHomeworkIds: [], noLessonIds: [], details: {} };
            }
            const att = cb211.attendance[rec.date];
            
            rec.absents.forEach(name => {
                const s = cb211.students.find(st => st.name === name);
                if (s && !att.absentIds.includes(s.id)) {
                    att.absentIds.push(s.id);
                }
            });
            
            att.details = {
                topic: rec.topic,
                content: rec.content,
                homework: rec.hw,
                note: rec.note,
                next: rec.next
            };
        });
        
        cb211.historicalDataSeeded = true;
    }
    
    // Data Migration: Pre-populate CB213 Historical Data from Zalo posts
    const cb213 = appState.classes.find(c => c.name === "CB213");
    if (cb213 && !cb213.historicalDataSeeded) {
        const historyCB213 = [
            { date: "2026-06-30", absents: ["Trương Thị Kha My", "Trần Ngọc Vinh"], topic: "SPEAKING LESSON 01", content: "GETTING TO KNOW EACH OTHER", hw: "Thực hành tự giới thiệu bản thân.", note: "Các bạn nhớ xem lại nội dung bài đã học và luyện tập nói nhen. Có thể vào web cô đã thiết kế để ôn bài ạ.\n\nP/S Các bạn nhận thông báo nhớ \"react\" cho cô biết nhen!", next: "LISTENING" },
            { date: "2026-07-02", absents: [], topic: "LISTENING LESSON 01", content: "PART 01: SHORT TALKS/CONVERSATIONS - DẠNG 01: CÂU HỎI MỤC ĐÍCH GIAO TIẾP", hw: "Example 03 & 04", note: "- Các bạn nhớ làm bài tập và nghe lại các ví dụ, sau đó ghi chú câu chứa đáp án vào tài liệu của mình nhen ạ.\n- Các các bạn sử dụng trang web để làm bài và học bài nhé. (chỉ vào những phần đã học)", next: "WRITING" },
            { date: "2026-07-04", absents: ["Lê Thị Tú Trinh", "Hoàng Hợp Minh Châu"], topic: "WRITING LESSON 01", content: "CÁC THÀNH PHẦN CÂU CƠ BẢN", hw: "Không.", note: "- Học chưa xong chủ điểm này nên cô chưa đăng trang web nhen mọi người.", next: "READING LESSON 01" },
            { date: "2026-07-07", absents: ["Trần Minh Tuệ Mẩn"], topic: "READING LESSON 01", content: "", hw: "", note: "", next: "" }
        ];
        
        historyCB213.forEach(rec => {
            if (!cb213.attendance[rec.date]) {
                cb213.attendance[rec.date] = { absentIds: [], noHomeworkIds: [], noLessonIds: [], details: {} };
            }
            const att = cb213.attendance[rec.date];
            
            rec.absents.forEach(name => {
                const s = cb213.students.find(st => st.name === name);
                if (s && !att.absentIds.includes(s.id)) {
                    att.absentIds.push(s.id);
                }
            });
            
            att.details = {
                topic: rec.topic,
                content: rec.content,
                homework: rec.hw,
                note: rec.note,
                next: rec.next
            };
        });
        
        cb213.historicalDataSeeded = true;
    }
    
    saveState();
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    
    renderSidebar();
    
    // Default to Home View
    appState.selectedClassId = null;
    showHomeView();
    
    if (appState.classes.length > 0) {
        // Monthly Export Reminder
        const lastExportMonth = localStorage.getItem('lastExportMonth');
        const currentMonth = new Date().toISOString().substring(0, 7);
        if (lastExportMonth && lastExportMonth !== currentMonth) {
            setTimeout(() => {
                if (confirm(`Đã sang tháng mới (${currentMonth}), cô có muốn xuất file Excel điểm danh của tháng cũ không?`)) {
                    // Temporarily select the first class to export if no class selected
                    if (!appState.selectedClassId) appState.selectedClassId = appState.classes[0].id;
                    exportToCSV();
                }
                localStorage.setItem('lastExportMonth', currentMonth);
            }, 1000);
        } else if (!lastExportMonth) {
            localStorage.setItem('lastExportMonth', currentMonth);
        }
    }
    
    // Auto fetch from cloud on load
    fetchFromCloud();
}

// Theme
themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Sidebar Rendering
function renderSidebar() {
    sidebarClassesList.innerHTML = '';
    const sortedClasses = [...appState.classes].sort((a, b) => {
        if (a.name.toUpperCase() === 'B212') return 1;
        if (b.name.toUpperCase() === 'B212') return -1;
        return a.name.localeCompare(b.name, 'vi', { numeric: true });
    });
    
    sortedClasses.forEach(c => {
        const item = document.createElement('div');
        item.className = `class-nav-item ${appState.selectedClassId === c.id ? 'active' : ''}`;
        
        const titleSpan = document.createElement('span');
        titleSpan.textContent = c.name;
        
        const delBtn = document.createElement('i');
        delBtn.className = 'fa-solid fa-trash delete-class';
        delBtn.onclick = (e) => {
            e.stopPropagation();
            if (confirm(`Bạn có chắc muốn xóa lớp ${c.name}? Mọi dữ liệu sẽ bị mất.`)) {
                appState.classes = appState.classes.filter(cls => cls.id !== c.id);
                if (appState.selectedClassId === c.id) {
                    appState.selectedClassId = null;
                    showClassView();
                }
                saveState();
                renderSidebar();
            }
        };
        
        item.onclick = () => {
            appState.selectedClassId = c.id;
            appState.currentWeekIndex = getCurrentWeekIndexForClass(c); // Go to current week automatically
            btnHomeNav.classList.remove('active');
            renderSidebar();
            showClassView();
        };
        
        item.appendChild(titleSpan);
        item.appendChild(delBtn);
        sidebarClassesList.appendChild(item);
    });
}

btnHomeNav.addEventListener('click', () => {
    appState.selectedClassId = null;
    btnHomeNav.classList.add('active');
    renderSidebar();
    showHomeView();
});

function showHomeView() {
    emptyStateView.classList.add('hidden');
    classView.classList.add('hidden');
    homeView.classList.remove('hidden');
    
    // Populate Random Picker class select
    randomClassSelect.innerHTML = '<option value="">-- Chọn lớp --</option>';
    const sortedClasses = [...appState.classes].sort((a, b) => {
        if (a.name.toUpperCase() === 'B212') return 1;
        if (b.name.toUpperCase() === 'B212') return -1;
        return a.name.localeCompare(b.name, 'vi', { numeric: true });
    });
    
    sortedClasses.forEach(c => {
        const option = document.createElement('option');
        option.value = c.id;
        option.textContent = c.name;
        randomClassSelect.appendChild(option);
    });
    
    initGame();
    renderPetView();
}

function showClassView() {
    homeView.classList.add('hidden');
    if (!appState.selectedClassId) {
        emptyStateView.classList.remove('hidden');
        classView.classList.add('hidden');
        return;
    }
    
    emptyStateView.classList.add('hidden');
    classView.classList.remove('hidden');
    
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
    pageTitle.textContent = `Lớp ${classObj.name}`;
    pageSubtitle.textContent = `Sĩ số: ${classObj.students.length} học viên | Ngày khai giảng: ${formatDate(classObj.schedule.startDate)} | Lịch học: ${getClassScheduleInfo(classObj.schedule)}`;
    
    renderMatrix();
}

// Matrix Rendering
function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    return `${parts[2]}/${parts[1]}`;
}

function formatShortDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    return `${parts[2]}/${parts[1]}`;
}

function formatSchedule(daysArr) {
    const map = { 1: 'T2', 2: 'T3', 3: 'T4', 4: 'T5', 5: 'T6', 6: 'T7', 0: 'CN' };
    return daysArr.map(d => map[d]).join(', ');
}

function getClassScheduleInfo(schedule) {
    let days = schedule.daysOfWeek;
    let time = schedule.timeSlot || '';
    if (schedule.scheduleChanges && schedule.scheduleChanges.length > 0) {
        const latest = schedule.scheduleChanges[schedule.scheduleChanges.length - 1];
        days = latest.daysOfWeek;
        if (latest.timeSlot) time = latest.timeSlot;
    }
    const daysText = formatSchedule(days);
    return time ? `${daysText} (${time})` : daysText;
}

// Group dates into calendar weeks (Mon - Sun)
function groupDatesByCalendarWeek(dates) {
    const weeks = [];
    let currentWeek = [];
    let currentMonday = null;
    
    function getMonday(dStr) {
        const d = new Date(dStr);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.getFullYear(), d.getMonth(), diff).getTime();
    }
    
    dates.forEach(dateStr => {
        const monday = getMonday(dateStr);
        if (currentMonday === null) {
            currentMonday = monday;
            currentWeek.push(dateStr);
        } else if (monday === currentMonday) {
            currentWeek.push(dateStr);
        } else {
            weeks.push(currentWeek);
            currentWeek = [dateStr];
            currentMonday = monday;
        }
    });
    
    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }
    
    return weeks;
}

function getCurrentWeekIndexForClass(classObj) {
    if (!classObj || !classObj.schedule) return 0;
    const allDates = getCourseDates(classObj.schedule);
    if (allDates.length === 0) return 0;
    const calendarWeeks = groupDatesByCalendarWeek(allDates);
    
    const today = new Date();
    today.setHours(0,0,0,0);
    const todayTime = today.getTime();
    
    let closestIndex = 0;
    let minDiff = Infinity;
    
    calendarWeeks.forEach((week, idx) => {
        week.forEach(dateStr => {
            const dTime = new Date(dateStr).getTime();
            const diff = Math.abs(dTime - todayTime);
            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = idx;
            }
        });
    });
    
    return closestIndex;
}

function sortStudentsByFirstName(a, b) {
    const getFirstName = (name) => {
        const parts = name.trim().split(' ');
        return parts[parts.length - 1];
    };
    const firstA = getFirstName(a.name);
    const firstB = getFirstName(b.name);
    
    const cmp = firstA.localeCompare(firstB, 'vi');
    if (cmp !== 0) return cmp;
    return a.name.localeCompare(b.name, 'vi');
}

function renderMatrix() {
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
    if (!classObj) return;
    
    const allDates = getCourseDates(classObj.schedule);
    const calendarWeeks = groupDatesByCalendarWeek(allDates);
    
    // Bounds check
    if (appState.currentWeekIndex < 0) appState.currentWeekIndex = 0;
    if (appState.currentWeekIndex >= calendarWeeks.length) appState.currentWeekIndex = Math.max(0, calendarWeeks.length - 1);
    
    const weekDates = calendarWeeks[appState.currentWeekIndex] || [];
    
    // Calculate global lesson number offset for the current week
    let lessonOffset = 0;
    for (let i = 0; i < appState.currentWeekIndex; i++) {
        lessonOffset += calendarWeeks[i].length;
    }
    
    // Update Week Header
    weekDisplayTitle.textContent = `Tuần ${appState.currentWeekIndex + 1}`;
    if (weekDates.length > 0) {
        const first = weekDates[0];
        const last = weekDates[weekDates.length - 1];
        weekDisplayDates.textContent = `${formatDate(first)} - ${formatDate(last)}`;
    } else {
        weekDisplayDates.textContent = 'Chưa có lịch học';
    }
    
    btnPrevWeek.disabled = appState.currentWeekIndex === 0;
    btnPrevWeek.style.opacity = appState.currentWeekIndex === 0 ? 0.3 : 1;
    btnNextWeek.disabled = appState.currentWeekIndex >= calendarWeeks.length - 1;
    btnNextWeek.style.opacity = appState.currentWeekIndex >= calendarWeeks.length - 1 ? 0.3 : 1;
    
    // Render Table Headers (Notes Row)
    matrixNotesRow.innerHTML = `
        <th colspan="2" style="text-align: right; vertical-align: middle;">
            <strong>Thông báo buổi học:</strong>
        </th>
    `;
    
    // Render Table Headers (Dates Row)
    matrixDatesRow.innerHTML = `
        <th class="col-stt">STT</th>
        <th class="col-name">Họ và Tên</th>
    `;
    
    // Populate Columns based on week dates
    weekDates.forEach((dateStr, idx) => {
        const globalLessonNum = lessonOffset + idx + 1;
        const record = classObj.attendance[dateStr] || { absentIds: [], details: {} };
        
        // Notes cell
        const thNote = document.createElement('th');
        const photoCount = record.photoCount || (record.images ? record.images.length : 0);
        const photoBadgeHtml = photoCount > 0 ? `
            <button class="btn-photo-badge" onclick="event.stopPropagation(); openImageViewer('${dateStr}', ${globalLessonNum})" title="Xem ${photoCount} ảnh điểm danh">
                <i class="fa-solid fa-camera"></i> ${photoCount} ảnh
            </button>
        ` : '';

        thNote.innerHTML = `
            <button class="btn btn-primary btn-small w-100" onclick="openLessonDetails('${dateStr}', ${globalLessonNum})">
                <i class="fa-solid fa-pen-to-square"></i> Soạn & Thông Báo
            </button>
            ${photoBadgeHtml}
        `;
        matrixNotesRow.appendChild(thNote);
        
        // Date cell
        const thDate = document.createElement('th');
        thDate.innerHTML = `
            ${formatDate(dateStr)}
            <span class="lesson-number">Buổi ${globalLessonNum}</span>
        `;
        matrixDatesRow.appendChild(thDate);
    });
    
    // Render Students Body
    matrixBody.innerHTML = '';
    const sortedStudents = [...classObj.students].sort(sortStudentsByFirstName);
    
    if (sortedStudents.length === 0) {
        matrixBody.innerHTML = `<tr><td colspan="${2 + weekDates.length}" class="text-center">Chưa có học viên nào trong lớp này.</td></tr>`;
        return;
    }
    
    sortedStudents.forEach((student, sIdx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center">${sIdx + 1}</td>
            <td style="font-weight: 500; white-space: nowrap;">${student.name}</td>
        `;
        
        weekDates.forEach(dateStr => {
            const td = document.createElement('td');
            td.className = 'checkbox-cell';
            
            const record = classObj.attendance[dateStr] || { absentIds: [], noHomeworkIds: [], noLessonIds: [], details: {} };
            
            const group = document.createElement('div');
            group.className = 'checkbox-group';
            
            const createCheckbox = (typeClass, title, listKey) => {
                const cb = document.createElement('div');
                const isChecked = (record[listKey] || []).includes(student.id);
                cb.className = `matrix-checkbox ${typeClass} ${isChecked ? 'checked' : ''}`;
                cb.title = title;
                cb.onclick = () => {
                    if (!classObj.attendance[dateStr]) {
                        classObj.attendance[dateStr] = { absentIds: [], noHomeworkIds: [], noLessonIds: [], details: {} };
                    }
                    const curRecord = classObj.attendance[dateStr];
                    if (!curRecord.noHomeworkIds) curRecord.noHomeworkIds = [];
                    if (!curRecord.noLessonIds) curRecord.noLessonIds = [];
                    
                    const list = curRecord[listKey];
                    if (list.includes(student.id)) {
                        curRecord[listKey] = list.filter(id => id !== student.id);
                        cb.classList.remove('checked');
                    } else {
                        list.push(student.id);
                        cb.classList.add('checked');
                    }
                    saveState();
                };
                return cb;
            };
            
            group.appendChild(createCheckbox('cb-absent', 'Vắng', 'absentIds'));
            group.appendChild(createCheckbox('cb-hw', 'Không làm bài', 'noHomeworkIds'));
            group.appendChild(createCheckbox('cb-lesson', 'Không thuộc bài', 'noLessonIds'));
            
            td.appendChild(group);
            tr.appendChild(td);
        });
        
        matrixBody.appendChild(tr);
    });
}

btnPrevWeek.addEventListener('click', () => {
    appState.currentWeekIndex--;
    renderMatrix();
});

btnNextWeek.addEventListener('click', () => {
    appState.currentWeekIndex++;
    renderMatrix();
});

// Modals Handling
const imageViewerModal = document.getElementById('image-viewer-modal');
const petModal = document.getElementById('pet-modal');
btnCloseModals.forEach(btn => {
    btn.addEventListener('click', () => {
        addClassModal.classList.remove('active');
        manageStudentsModal.classList.remove('active');
        announcementModal.classList.remove('active');
        lessonDetailsModal.classList.remove('active');
        if (imageViewerModal) imageViewerModal.classList.remove('active');
        if (petModal) petModal.classList.remove('active');
    });
});

if (imageViewerModal) {
    imageViewerModal.addEventListener('click', (e) => {
        if (e.target === imageViewerModal) {
            imageViewerModal.classList.remove('active');
        }
    });
}

if (petModal) {
    petModal.addEventListener('click', (e) => {
        if (e.target === petModal) {
            petModal.classList.remove('active');
        }
    });
}

// Add Class Logic
btnShowAddClassModal.addEventListener('click', () => {
    addClassModal.classList.add('active');
});

document.getElementById('btn-add-class-submit').addEventListener('click', () => {
    const name = document.getElementById('new-class-name').value.trim();
    const startDate = document.getElementById('new-class-start').value;
    const duration = parseFloat(document.getElementById('new-class-duration').value) || 0;
    const checkboxes = document.querySelectorAll('#new-class-days input[type="checkbox"]:checked');
    const daysOfWeek = Array.from(checkboxes).map(cb => parseInt(cb.value));
    
    if (!name || !startDate || daysOfWeek.length === 0) {
        showToast('Vui lòng nhập tên lớp, ngày khai giảng và chọn lịch học!');
        return;
    }
    
    const totalLessons = Math.round(duration * 4.333 * daysOfWeek.length);
    
    appState.classes.push({
        id: generateId(),
        name: name,
        schedule: {
            startDate,
            durationMonths: duration,
            daysOfWeek,
            totalLessons
        },
        students: [],
        attendance: {}
    });
    
    saveState();
    renderSidebar();
    addClassModal.classList.remove('active');
    
    // Reset Form
    document.getElementById('new-class-name').value = '';
    document.getElementById('new-class-start').value = '';
    document.querySelectorAll('#new-class-days input[type="checkbox"]').forEach(c => c.checked = false);
    
    showToast('Đã thêm lớp thành công!');
});

// Manage Students Logic
btnEditClass.addEventListener('click', () => {
    renderEditStudentList();
    manageStudentsModal.classList.add('active');
});

btnExportCSV.addEventListener('click', () => {
    exportToCSV();
    const currentMonth = new Date().toISOString().substring(0, 7);
    localStorage.setItem('lastExportMonth', currentMonth);
});

function exportToCSV() {
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
    if (!classObj) return;

    const allDates = getCourseDates(classObj.schedule);

    if (allDates.length === 0) {
        alert('Lớp này chưa có lịch học để xuất.');
        return;
    }

    let csvContent = '\uFEFF'; // BOM for UTF-8 Excel support
    
    // Header
    const headerRow = ["STT", "Họ Tên", ...allDates.map(d => formatShortDate(d))];
    csvContent += headerRow.map(h => `"${h}"`).join(',') + '\n';

    const sortedStudents = [...classObj.students].sort(sortStudentsByFirstName);

    // Rows
    sortedStudents.forEach((student, idx) => {
        const row = [idx + 1, `"${student.name}"`];
        allDates.forEach(dateStr => {
            const record = classObj.attendance[dateStr];
            if (record) {
                const marks = [];
                if ((record.absentIds || []).includes(student.id)) marks.push('V');
                if ((record.noHomeworkIds || []).includes(student.id)) marks.push('KLBT');
                if ((record.noLessonIds || []).includes(student.id)) marks.push('KTB');
                row.push(`"${marks.join(' - ')}"`);
            } else {
                row.push('""');
            }
        });
        csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    const today = new Date().toISOString().split('T')[0];
    link.setAttribute("download", `DiemDanh_${classObj.name}_${today}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

if (btnSyncCloud) {
    btnSyncCloud.addEventListener('click', () => {
        let scriptUrl = localStorage.getItem('googleAppsScriptUrl');
        if (!scriptUrl) {
            scriptUrl = prompt('Lần đầu sử dụng Đám Mây! Vui lòng dán Link Web App (Google Apps Script) của cô vào đây:');
            if (scriptUrl) {
                localStorage.setItem('googleAppsScriptUrl', scriptUrl);
                fetchFromCloud();
            }
        } else {
            if (confirm('Cô có muốn đổi đường link cấu hình Đám Mây không? Nếu không, bấm Cancel để tải dữ liệu mới nhất.')) {
                scriptUrl = prompt('Nhập Link Web App mới:', scriptUrl);
                if (scriptUrl) {
                    localStorage.setItem('googleAppsScriptUrl', scriptUrl);
                    fetchFromCloud();
                }
            } else {
                fetchFromCloud();
            }
        }
    });
}

function updateCloudStatus(text, iconClass) {
    if (btnSyncCloud) {
        btnSyncCloud.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span id="cloud-status-text">${text}</span>`;
    }
}

async function postToCloud(scriptUrl) {
    if (isSyncing) return;
    isSyncing = true;
    try {
        const response = await fetch(scriptUrl, {
            method: 'POST',
            body: JSON.stringify(appState)
        });
        updateCloudStatus('Đã đồng bộ', 'fa-check');
    } catch(e) {
        console.error(e);
        updateCloudStatus('Lỗi đồng bộ', 'fa-triangle-exclamation');
    } finally {
        isSyncing = false;
        setTimeout(() => updateCloudStatus('Đám mây: Bật', 'fa-cloud'), 3000);
    }
}

async function fetchFromCloud() {
    const scriptUrl = localStorage.getItem('googleAppsScriptUrl');
    if (!scriptUrl) return;
    
    updateCloudStatus('Đang tải mây...', 'fa-spinner fa-spin');
    try {
        const response = await fetch(scriptUrl);
        const cloudData = await response.json();
        
        if (cloudData && cloudData.classes && cloudData.lastModified) {
            // Overwrite local state if cloud data is newer
            if (!appState.lastModified || cloudData.lastModified > appState.lastModified) {
                const localPet = appState.pet;
                appState = cloudData;
                if (!appState.pet && localPet) {
                    appState.pet = localPet;
                }
                const petChanged = ensurePetState(appState);
                const addedSeeds = ensureAllSeedClassesExist(appState);
                const migrated = ensureClassScheduleMigrations(appState);
                localStorage.setItem('attendance_app_v2', JSON.stringify(appState));
                if (addedSeeds || migrated || petChanged) {
                    saveState();
                }
                
                if (appState.selectedClassId) {
                    renderSidebar();
                    showClassView();
                } else {
                    renderSidebar();
                    showHomeView();
                }
            }
        }
        updateCloudStatus('Đã đồng bộ', 'fa-check');
    } catch(e) {
        console.error(e);
        updateCloudStatus('Lỗi kết nối', 'fa-triangle-exclamation');
    } finally {
        setTimeout(() => updateCloudStatus('Đám mây: Bật', 'fa-cloud'), 3000);
    }
}

if (btnSaveData) {
    btnSaveData.addEventListener('click', () => {
        saveState();
        showToast('Đã lưu dữ liệu thành công!');
    });
}

function renderEditStudentList() {
    const listEl = document.getElementById('edit-student-list');
    listEl.innerHTML = '';
    
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
    if (!classObj) return;
    
    const sorted = [...classObj.students].sort(sortStudentsByFirstName);
    
    if(sorted.length === 0) {
        listEl.innerHTML = '<p class="text-secondary text-center">Chưa có học viên.</p>';
        return;
    }
    
    sorted.forEach(s => {
        const item = document.createElement('div');
        item.className = 'edit-student-item';
        item.innerHTML = `
            <span>${s.name}</span>
            <button onclick="removeStudent('${s.id}')"><i class="fa-solid fa-trash"></i></button>
        `;
        listEl.appendChild(item);
    });
}

window.removeStudent = function(studentId) {
    if(confirm('Bạn có chắc muốn xóa học viên này?')) {
        const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
        classObj.students = classObj.students.filter(s => s.id !== studentId);
        saveState();
        renderEditStudentList();
        renderMatrix();
        
        pageSubtitle.textContent = `Sĩ số: ${classObj.students.length} học viên | Ngày khai giảng: ${formatDate(classObj.schedule.startDate)} | Lịch học: ${getClassScheduleInfo(classObj.schedule)}`;
    }
};

document.getElementById('btn-save-students').addEventListener('click', () => {
    const input = document.getElementById('batch-student-names').value;
    const names = input.split('\n').map(n => n.trim()).filter(n => n);
    
    if (names.length === 0) return;
    
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
    
    names.forEach(name => {
        classObj.students.push({ id: generateId(), name: name });
    });
    
    saveState();
    renderEditStudentList();
    renderMatrix();
    
    pageSubtitle.textContent = `Sĩ số: ${classObj.students.length} học viên | Ngày khai giảng: ${formatDate(classObj.schedule.startDate)} | Lịch học: ${getClassScheduleInfo(classObj.schedule)}`;
    
    document.getElementById('batch-student-names').value = '';
    showToast(`Đã thêm ${names.length} học viên!`);
});

function formatEnglishDate(dateStr) {
    const d = new Date(dateStr);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    const dateNum = d.getDate();
    const year = d.getFullYear();
    
    let suffix = "th";
    if (dateNum % 10 === 1 && dateNum !== 11) suffix = "st";
    else if (dateNum % 10 === 2 && dateNum !== 12) suffix = "nd";
    else if (dateNum % 10 === 3 && dateNum !== 13) suffix = "rd";
    
    return `${dayName}, ${monthName} ${dateNum}${suffix}, ${year}`;
}

// Image Compression (Resize & optimize JPEG)
function compressImage(file, maxWidth = 1000, quality = 0.72) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                resolve(dataUrl);
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Attendance Photo Management
let currentEditingPhotos = [];

function renderEditingPhotoGrid() {
    const grid = document.getElementById('ld-photo-grid');
    if (!grid) return;
    grid.innerHTML = '';
    currentEditingPhotos.forEach((src, idx) => {
        const item = document.createElement('div');
        item.className = 'photo-preview-item';
        item.innerHTML = `
            <img src="${src}" alt="Ảnh ${idx + 1}" title="Bấm để xem phóng to">
            <button type="button" class="photo-remove-btn" title="Xóa ảnh này">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        item.querySelector('img').onclick = () => previewSinglePhoto(src);
        item.querySelector('.photo-remove-btn').onclick = (e) => {
            e.stopPropagation();
            removeEditingPhoto(idx);
        };
        grid.appendChild(item);
    });
}

window.removeEditingPhoto = function(idx) {
    currentEditingPhotos.splice(idx, 1);
    renderEditingPhotoGrid();
};

window.previewSinglePhoto = function(src) {
    currentViewerImages = [src];
    currentViewerIndex = 0;
    renderImageViewer();
    if (imageViewerModal) imageViewerModal.classList.add('active');
};

async function processAndAddPhotos(files) {
    if (!files || files.length === 0) return;
    showToast(`Đang nén ${files.length} ảnh...`);
    for (const file of files) {
        try {
            const compressed = await compressImage(file, 1280, 0.78);
            currentEditingPhotos.push(compressed);
        } catch (err) {
            console.error('Lỗi khi nén ảnh:', err);
            showToast(`Không thể đọc ảnh: ${file.name || 'clipboard'}`);
        }
    }
    renderEditingPhotoGrid();
    showToast('Đã thêm ảnh thành công! 📸');
}

const photoInput = document.getElementById('ld-photo-input');
if (photoInput) {
    photoInput.addEventListener('change', async (e) => {
        const files = Array.from(e.target.files);
        await processAndAddPhotos(files);
        photoInput.value = '';
    });
}

// Drag & Drop Photo onto Dropzone
const dropzone = document.getElementById('ld-photo-dropzone');
if (dropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropzone.classList.add('dragover');
        });
    });
    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropzone.classList.remove('dragover');
        });
    });
    dropzone.addEventListener('drop', async (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files.length > 0) {
            const imageFiles = Array.from(dt.files).filter(f => f.type.startsWith('image/'));
            if (imageFiles.length > 0) {
                await processAndAddPhotos(imageFiles);
            }
        }
    });
}

// Copy & Paste (Ctrl+V / Cmd+V) image directly from clipboard
window.addEventListener('paste', async (e) => {
    // Only handle image paste if lessonDetailsModal is open
    if (!lessonDetailsModal || !lessonDetailsModal.classList.contains('active')) return;

    const clipboardData = e.clipboardData || window.clipboardData;
    if (!clipboardData || !clipboardData.items) return;

    const imageFiles = [];
    for (const item of clipboardData.items) {
        if (item.type.startsWith('image/')) {
            const file = item.getAsFile();
            if (file) {
                imageFiles.push(file);
            }
        }
    }

    if (imageFiles.length > 0) {
        e.preventDefault(); // Prevent inserting image binary into text inputs
        showToast('Đang xử lý ảnh vừa dán (Ctrl+V)... 📋');
        await processAndAddPhotos(imageFiles);
    }
});

// Image Viewer Lightbox
let currentViewerImages = [];
let currentViewerIndex = 0;

window.openImageViewer = async function(dateStr, globalLessonNum) {
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
    if (!classObj) return;
    const record = classObj.attendance[dateStr];

    let photos = await loadPhotosFromStorage(classObj.id, dateStr);
    if ((!photos || photos.length === 0) && record && record.images && record.images.length > 0) {
        photos = [...record.images];
    }

    if (!photos || photos.length === 0) {
        showToast('Buổi học này chưa có ảnh điểm danh.');
        return;
    }

    currentViewerImages = [...photos];
    currentViewerIndex = 0;

    const titleEl = document.getElementById('iv-title');
    if (titleEl) {
        titleEl.innerHTML = `<i class="fa-solid fa-camera" style="color: var(--primary);"></i> Ảnh Điểm Danh - Buổi ${globalLessonNum} (${formatDate(dateStr)})`;
    }

    renderImageViewer();
    if (imageViewerModal) imageViewerModal.classList.add('active');
};

function renderImageViewer() {
    if (currentViewerImages.length === 0) return;
    if (currentViewerIndex >= currentViewerImages.length) currentViewerIndex = 0;

    const currentSrc = currentViewerImages[currentViewerIndex];
    const mainImg = document.getElementById('iv-main-img');
    const counterEl = document.getElementById('iv-counter');
    const downloadBtn = document.getElementById('iv-download-btn');
    const thumbsBar = document.getElementById('iv-thumbs-bar');

    if (mainImg) mainImg.src = currentSrc;
    if (counterEl) counterEl.textContent = `Ảnh ${currentViewerIndex + 1} / ${currentViewerImages.length}`;
    if (downloadBtn) {
        downloadBtn.href = currentSrc;
        downloadBtn.download = `diem_danh_${currentViewerIndex + 1}.jpg`;
    }

    if (thumbsBar) {
        thumbsBar.innerHTML = '';
        currentViewerImages.forEach((src, idx) => {
            const thumb = document.createElement('img');
            thumb.className = `iv-thumb ${idx === currentViewerIndex ? 'active' : ''}`;
            thumb.src = src;
            thumb.onclick = () => {
                currentViewerIndex = idx;
                renderImageViewer();
            };
            thumbsBar.appendChild(thumb);
        });
    }
}

// Helper: Save lesson details and photos to IndexedDB
async function saveLessonDetailsData(dateStr, globalLessonNum) {
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
    if (!classObj) {
        showToast('Không tìm thấy lớp học!');
        return null;
    }
    if (!classObj.attendance[dateStr]) {
        classObj.attendance[dateStr] = { absentIds: [], details: {} };
    }
    const record = classObj.attendance[dateStr];
    
    const topic = document.getElementById('ld-topic').value.trim();
    const content = document.getElementById('ld-content').value.trim();
    const homework = document.getElementById('ld-homework').value.trim();
    const note = document.getElementById('ld-note').value.trim();
    const next = document.getElementById('ld-next').value.trim();
    
    // Save details
    record.details = { topic, content, homework, note, next };
    
    // Save photos to IndexedDB (unlimited capacity) and record photoCount
    record.photoCount = currentEditingPhotos.length;
    if (record.images) delete record.images; // Free up localStorage!
    await savePhotosToStorage(classObj.id, dateStr, currentEditingPhotos);
    
    saveState();
    renderMatrix();
    return { classObj, record, topic, content, homework, note, next };
}

// Generate Announcement Logic
window.openLessonDetails = async function(dateStr, globalLessonNum) {
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
    if (!classObj) return;
    if (!classObj.attendance[dateStr]) {
        classObj.attendance[dateStr] = { absentIds: [], details: {} };
        saveState();
    }
    
    const record = classObj.attendance[dateStr];
    const details = record.details || {};
    
    document.getElementById('ld-date').value = dateStr;
    document.getElementById('ld-lesson-num').value = globalLessonNum;
    
    document.getElementById('ld-topic').value = details.topic || '';
    document.getElementById('ld-content').value = details.content || '';
    document.getElementById('ld-homework').value = details.homework || '';
    document.getElementById('ld-note').value = details.note || '';
    document.getElementById('ld-next').value = details.next || '';
    
    // Load existing photos from IndexedDB or fallback
    let photos = await loadPhotosFromStorage(classObj.id, dateStr);
    if ((!photos || photos.length === 0) && record && record.images && record.images.length > 0) {
        photos = [...record.images];
    }
    currentEditingPhotos = photos ? [...photos] : [];
    renderEditingPhotoGrid();
    
    lessonDetailsModal.classList.add('active');
};

// Button "Lưu" (chỉ lưu nội dung & ảnh, không mở khung thông báo)
const btnSaveLessonOnly = document.getElementById('btn-save-lesson-only');
if (btnSaveLessonOnly) {
    btnSaveLessonOnly.addEventListener('click', async () => {
        const dateStr = document.getElementById('ld-date').value;
        const globalLessonNum = document.getElementById('ld-lesson-num').value;
        const res = await saveLessonDetailsData(dateStr, globalLessonNum);
        if (res) {
            lessonDetailsModal.classList.remove('active');
            showToast('Đã lưu nội dung buổi học thành công! 💾');
        }
    });
}

// Button "Lưu & Tạo Thông Báo"
document.getElementById('btn-generate-structured').addEventListener('click', async () => {
    const dateStr = document.getElementById('ld-date').value;
    const globalLessonNum = document.getElementById('ld-lesson-num').value;
    
    const res = await saveLessonDetailsData(dateStr, globalLessonNum);
    if (!res) return;
    
    const { classObj, record, topic, content, homework, note, next } = res;
    
    // Format Date: Friday, June 19th, 2026
    const englishDate = formatEnglishDate(dateStr);
    
    // Get lists
    const absentNames = classObj.students
        .filter(s => (record.absentIds || []).includes(s.id))
        .map(s => s.name);
        
    const hwNames = classObj.students
        .filter(s => (record.noHomeworkIds || []).includes(s.id))
        .map(s => s.name);
        
    const lessonNames = classObj.students
        .filter(s => (record.noLessonIds || []).includes(s.id))
        .map(s => s.name);
    
    // Build Announcement using the exact requested template
    const displayTopic = topic ? ` - ${topic}` : '';
    let announcement = `${classObj.name}${displayTopic} - ${englishDate}\n`;
    
    announcement += `🍄 Vắng: ${absentNames.length > 0 ? absentNames.join(', ') : 'Không có'}\n`;
    if (hwNames.length > 0) announcement += `🍄 Không làm bài: ${hwNames.join(', ')}\n`;
    if (lessonNames.length > 0) announcement += `🍄 Không thuộc bài: ${lessonNames.join(', ')}\n`;
    
    announcement += `🍄 Nội dung buổi học: ${content || 'Không có'}\n`;
    announcement += `🍄 Bài tập: ${homework || 'Không.'}\n`;
    announcement += `🍄 Lưu ý chung: ${note || 'Không có.'}\n`;
    
    if (next) {
        announcement += `🌱 Tiết tới chúng ta sẽ học ${next}.\n`;
    }
    
    lessonDetailsModal.classList.remove('active');
    document.getElementById('announcement-preview').textContent = announcement;
    announcementModal.classList.add('active');
    showToast('Đã lưu và tạo bài thông báo! ✨');
});

document.getElementById('btn-copy-announcement').addEventListener('click', () => {
    const text = document.getElementById('announcement-preview').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('btn-copy-announcement');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Đã Copy';
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
    });
});

// --- RANDOM STUDENT PICKER LOGIC ---
let isRolling = false;
// Use MP3 for better Safari compatibility
const applauseSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');

// Tab Switching
tabSlot.addEventListener('click', () => {
    tabSlot.classList.add('active');
    tabWheel.classList.remove('active');
    modeSlot.classList.remove('hidden');
    modeWheel.classList.add('hidden');
});

tabWheel.addEventListener('click', () => {
    tabWheel.classList.add('active');
    tabSlot.classList.remove('active');
    modeWheel.classList.remove('hidden');
    modeSlot.classList.add('hidden');
    drawWheel();
});

// Re-draw wheel if class changes
randomClassSelect.addEventListener('change', drawWheel);

btnPickRandom.addEventListener('click', () => {
    if (isRolling) return;
    
    // Unlock Audio for browsers (Safari/Chrome) by playing and pausing immediately during user interaction
    applauseSound.volume = 0;
    applauseSound.play().then(() => {
        applauseSound.pause();
        applauseSound.currentTime = 0;
        applauseSound.volume = 1;
    }).catch(e => console.log('Audio unlock failed:', e));
    
    const classId = randomClassSelect.value;
    if (!classId) {
        alert('Vui lòng chọn một lớp để bốc thăm!');
        return;
    }
    
    const classObj = appState.classes.find(c => c.id === classId);
    if (!classObj || classObj.students.length === 0) {
        alert('Lớp này chưa có học viên nào!');
        return;
    }
    
    const students = classObj.students.map(s => s.name);
    isRolling = true;
    randomResultBox.classList.add('rolling');
    
    let rollCount = 0;
    const maxRolls = 30; // Number of times it switches names
    const intervalTime = 50; // ms per switch
    
    // Play a "rolling" effect
    const rollInterval = setInterval(() => {
        const randomName = students[Math.floor(Math.random() * students.length)];
        randomResultName.textContent = randomName;
        randomResultName.style.color = 'var(--text-secondary)';
        rollCount++;
        
        if (rollCount >= maxRolls) {
            clearInterval(rollInterval);
            isRolling = false;
            randomResultBox.classList.remove('rolling');
            
            // Final Pick
            const finalPick = students[Math.floor(Math.random() * students.length)];
            randomResultName.textContent = `🎉 ${finalPick} 🎉`;
            randomResultName.style.color = 'var(--primary)';
            
            // Audio & Visual Effects
            applauseSound.currentTime = 0;
            applauseSound.play().catch(e => console.log('Audio autoplay prevented'));
            
            if (typeof confetti === 'function') {
                const rect = randomResultBox.getBoundingClientRect();
                const xOrigin = (rect.left + rect.width / 2) / window.innerWidth;
                const yOrigin = (rect.top + rect.height / 2) / window.innerHeight;
                
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { x: xOrigin, y: yOrigin },
                    colors: ['#f2a6a6', '#a3d9b1', '#ffd1a9', '#cbaacb']
                });
            }
        }
    }, intervalTime);
});

// --- LUCKY WHEEL LOGIC ---
let wheelRotation = 0;
const wheelColors = ['#f2a6a6', '#a3d9b1', '#ffd1a9', '#cbaacb', '#fdf2f2', '#eee4e4'];

function drawWheel() {
    const classId = randomClassSelect.value;
    const ctx = luckyWheelCanvas.getContext('2d');
    const radius = luckyWheelCanvas.width / 2;
    ctx.clearRect(0, 0, luckyWheelCanvas.width, luckyWheelCanvas.height);
    
    if (!classId) return;
    const classObj = appState.classes.find(c => c.id === classId);
    if (!classObj || classObj.students.length === 0) return;
    
    const students = classObj.students.map(s => s.name);
    const numSlices = students.length;
    const arc = (2 * Math.PI) / numSlices;
    
    for (let i = 0; i < numSlices; i++) {
        const angle = i * arc;
        ctx.beginPath();
        ctx.fillStyle = wheelColors[i % wheelColors.length];
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, angle, angle + arc);
        ctx.lineTo(radius, radius);
        ctx.fill();
        
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(angle + arc / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#5c4f4f';
        ctx.font = '14px Roboto Serif';
        
        // Truncate name if too long
        let displayName = students[i];
        if (displayName.length > 15) displayName = displayName.substring(0, 15) + '...';
        
        ctx.fillText(displayName, radius - 10, 5);
        ctx.restore();
    }
}

btnSpinWheel.addEventListener('click', () => {
    if (isRolling) return;
    
    const classId = randomClassSelect.value;
    if (!classId) {
        alert('Vui lòng chọn một lớp để bốc thăm!');
        return;
    }
    const classObj = appState.classes.find(c => c.id === classId);
    if (!classObj || classObj.students.length === 0) {
        alert('Lớp này chưa có học viên nào!');
        return;
    }
    
    // Unlock Audio
    applauseSound.volume = 0;
    applauseSound.play().then(() => {
        applauseSound.pause();
        applauseSound.currentTime = 0;
        applauseSound.volume = 1;
    }).catch(e => console.log('Audio unlock failed:', e));
    
    const students = classObj.students.map(s => s.name);
    isRolling = true;
    btnSpinWheel.disabled = true;
    wheelResultCenter.classList.remove('show');
    
    // Spin formula
    const numSlices = students.length;
    const spinSpins = Math.floor(Math.random() * 5) + 5; // 5 to 10 full spins
    const spinDegrees = Math.floor(Math.random() * 360);
    const totalRotation = wheelRotation + (spinSpins * 360) + spinDegrees;
    wheelRotation = totalRotation;
    
    luckyWheelCanvas.style.transform = `rotate(${wheelRotation}deg)`;
    
    setTimeout(() => {
        isRolling = false;
        btnSpinWheel.disabled = false;
        
        // Calculate winner
        const actualRotation = wheelRotation % 360;
        // The pointer is at top (270 degrees in canvas coords). 
        // We calculate which slice is at 270 degrees after the rotation.
        const sliceAngle = 360 / numSlices;
        const pointerAngle = (360 - actualRotation + 270) % 360;
        const winningIndex = Math.floor(pointerAngle / sliceAngle);
        const finalPick = students[winningIndex];
        
        // Audio & Visual Effects
        applauseSound.currentTime = 0;
        applauseSound.play().catch(e => console.log('Audio autoplay prevented'));
        
        if (typeof confetti === 'function') {
            const rect = luckyWheelCanvas.getBoundingClientRect();
            const xOrigin = (rect.left + rect.width / 2) / window.innerWidth;
            const yOrigin = (rect.top + rect.height / 2) / window.innerHeight;
            
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { x: xOrigin, y: yOrigin },
                colors: ['#f2a6a6', '#a3d9b1', '#ffd1a9', '#cbaacb']
            });
        }
        
        wheelResultCenter.textContent = finalPick;
        wheelResultCenter.classList.add('show');
        
    }, 3000); // 3 seconds matching the CSS transition
});

// Run Init
// --- MEMORY GAME LOGIC ---
const levelEmojis = [
    ['🐼', '🍓', '🚀', '🌻', '🐶', '🍎', '🎸', '🌟'], // Vòng 1
    ['🍔', '🍕', '🍩', '🍦', '🍟', '🍭', '🌭', '🍬'], // Vòng 2
    ['🚗', '✈️', '🚲', '⛵', '🚁', '🚂', '🏍️', '🛸'], // Vòng 3
    ['🐯', '🦁', '🐸', '🐙', '🐵', '🦉', '🐧', '🐢'], // Vòng 4
    ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🎱', '🏓']  // Vòng 5
];

let currentLevel = 0;
let gameCards = [];
let flippedCards = [];
let matchedCount = 0;
let moves = 0;

const matchSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3');
const wrongSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
const winSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');

function unlockAudio(audioObj) {
    audioObj.volume = 0;
    audioObj.play().then(() => {
        audioObj.pause();
        audioObj.currentTime = 0;
        audioObj.volume = 1;
    }).catch(e => {});
}

function initGame(resetLevel = false) {
    if (resetLevel) {
        currentLevel = 0;
    }
    
    // Safety check if they beat all levels
    if (currentLevel >= levelEmojis.length) {
        currentLevel = 0;
    }
    
    memoryBoard.innerHTML = '';
    const emojis = levelEmojis[currentLevel];
    gameCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    flippedCards = [];
    matchedCount = 0;
    moves = 0;
    
    gameMovesEl.textContent = moves;
    gameLevelEl.textContent = currentLevel + 1;

    gameCards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front"></div>
                <div class="card-back">${emoji}</div>
            </div>
        `;
        
        card.addEventListener('click', () => flipCard(card));
        memoryBoard.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length === 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;

    if (moves === 0 && flippedCards.length === 0) {
        unlockAudio(matchSound);
        unlockAudio(wrongSound);
        unlockAudio(winSound);
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        gameMovesEl.textContent = moves;
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const match = card1.dataset.emoji === card2.dataset.emoji;

    if (match) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCount += 2;
        flippedCards = [];
        
        matchSound.currentTime = 0;
        matchSound.play().catch(e=>{});
        
        if (matchedCount === gameCards.length) {
            setTimeout(() => {
                winSound.currentTime = 0;
                winSound.play().catch(e=>{});
                
                if (currentLevel < levelEmojis.length - 1) {
                    if (confirm(`Tuyệt vời! Cô đã qua Vòng ${currentLevel + 1} với ${moves} lượt lật. Cô có muốn sang Vòng tiếp theo không?`)) {
                        currentLevel++;
                        initGame();
                    }
                } else {
                    alert(`CHÚC MỪNG PHÁ ĐẢO! Cô đã xuất sắc vượt qua tất cả ${levelEmojis.length} vòng chơi! 🎉`);
                    initGame(true); // Reset to level 1
                }
            }, 600);
        }
    } else {
        wrongSound.currentTime = 0;
        wrongSound.play().catch(e=>{});
        
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 800); // Slightly faster flip back to make it snappy
    }
}

btnRestartGame.addEventListener('click', () => initGame(true));

// ==========================================
// VIRTUAL PET COMPANION ("Nuôi thú cưng")
// ==========================================
const PET_DATA = {
    cat: {
        id: 'cat',
        species: 'Mèo Munchkin',
        defaultName: 'Miu Miu',
        foodIcon: '🐟',
        foodName: 'Cá hồi tươi',
        description: 'Bé mèo chân ngắn tròn xoe, thích nằm lười và quấn quýt bên cô Nguyệt.',
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28 48 L18 20 L44 32 Z" fill="#F6AD55" stroke="#DD6B20" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M26 42 L21 24 L38 32 Z" fill="#FED7E2"/>
  <path d="M92 48 L102 20 L76 32 Z" fill="#F6AD55" stroke="#DD6B20" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M94 42 L99 24 L82 32 Z" fill="#FED7E2"/>
  <ellipse cx="60" cy="65" rx="42" ry="38" fill="#FBD38D" stroke="#DD6B20" stroke-width="2.5"/>
  <ellipse cx="60" cy="74" rx="26" ry="22" fill="#FFFAF0"/>
  <circle cx="44" cy="58" r="6" fill="#2D3748"/>
  <circle cx="76" cy="58" r="6" fill="#2D3748"/>
  <circle cx="42" cy="56" r="2.2" fill="#FFFFFF"/>
  <circle cx="74" cy="56" r="2.2" fill="#FFFFFF"/>
  <circle cx="46" cy="60" r="1" fill="#FFFFFF"/>
  <circle cx="78" cy="60" r="1" fill="#FFFFFF"/>
  <ellipse cx="36" cy="67" rx="6" ry="3.5" fill="#FEB2B2" opacity="0.8"/>
  <ellipse cx="84" cy="67" rx="6" ry="3.5" fill="#FEB2B2" opacity="0.8"/>
  <polygon points="57,65 63,65 60,68" fill="#E53E3E"/>
  <path d="M54 70 Q57 73 60 70 Q63 73 66 70" stroke="#744210" stroke-width="2" stroke-linecap="round" fill="none"/>
  <path d="M24 62 L10 60 M24 67 L10 68" stroke="#DD6B20" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M96 62 L110 60 M96 67 L110 68" stroke="#DD6B20" stroke-width="1.8" stroke-linecap="round"/>
  <ellipse cx="46" cy="95" rx="9" ry="6" fill="#FFFAF0" stroke="#DD6B20" stroke-width="2"/>
  <ellipse cx="74" cy="95" rx="9" ry="6" fill="#FFFAF0" stroke="#DD6B20" stroke-width="2"/>
  <circle cx="60" cy="87" r="4.5" fill="#ECC94B" stroke="#B7791F" stroke-width="1.5"/>
</svg>`,
        quotes: {
            greetings: [
                "Chào cô Nguyệt ạ! Hôm nay cô có tiết dạy nào không nè? Chúc cô một ngày tràn ngập niềm vui! ✨",
                "Cô Nguyệt ơi, em nhớ cô quá chừng! Hôm nay học viên có làm bài tập đầy đủ không cô? 🥰",
                "Em đợi cô Nguyệt mãi thôi! Cô nhớ uống nước ấm giữ giọng dạy học nha cô! 🍵",
                "Cô Nguyệt tuyệt vời nhất! Dạy học xong cô nhớ nghỉ ngơi đôi mắt xíu nha! 💕"
            ],
            feed: [
                "Ngon tuyệt cú mèo luôn! Cảm ơn cô Nguyệt đã tẩm bổ món cá hồi cho em nha! 🐟😋",
                "Măm măm~ No căng bụng rồi cô ơi, em được tiếp thêm 100% năng lượng! ⚡",
                "Yum yum! Thức ăn cô cho là số một trần đời luôn á! 🎉",
                "Bụng em tròn vo rồi nè cô ơi! Giờ em ngồi ngoan canh lớp cho cô dạy nghen! 🐾"
            ],
            pet: [
                "Purr purr~ Thích quá à! Em yêu cô Nguyệt nhất trên đời! 💖",
                "Được cô vuốt ve sướng mê ly luôn~ Em gửi cô ngàn nụ hôn nè! ✨",
                "Meo meo~ Đã ghê cô ơi! Cô là cô giáo dịu dàng nhất quả đất! 🌸",
                "Hí hí nhột quá cô ơi! Mà em thích lắm, cô xoa đầu em thêm miếng nữa đi! 🥰"
            ],
            hungry: [
                "Cô Nguyệt ơi... bụng em đang sôi ùng ục nè, cô cho em xin chút cá hồi nha! 🥺🐟",
                "Đói quá đói quá cô ơi... Cho em một miếng thôi cũng được ạ! 🐟"
            ]
        }
    },
    corgi: {
        id: 'corgi',
        species: 'Cún Corgi',
        defaultName: 'Bơ Bơ',
        foodIcon: '🍖',
        foodName: 'Xương thơm ngon',
        description: 'Chú cún mông trái tim siêu năng lượng, luôn vẫy đuôi mừng rỡ đón cô.',
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 50 L12 12 C24 16 38 28 42 42 Z" fill="#ED8936" stroke="#C05621" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M22 44 L16 20 C24 23 33 30 36 38 Z" fill="#FED7E2"/>
  <path d="M96 50 L108 12 C96 16 82 28 78 42 Z" fill="#ED8936" stroke="#C05621" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M98 44 L104 20 C96 23 87 30 84 38 Z" fill="#FED7E2"/>
  <ellipse cx="60" cy="65" rx="42" ry="38" fill="#ED8936" stroke="#C05621" stroke-width="2.5"/>
  <path d="M52 35 C52 48 40 55 40 72 C40 85 50 92 60 92 C70 92 80 85 80 72 C80 55 68 48 68 35 Z" fill="#FFFFFF"/>
  <circle cx="42" cy="58" r="5.5" fill="#2D3748"/>
  <circle cx="78" cy="58" r="5.5" fill="#2D3748"/>
  <circle cx="40.5" cy="56" r="2" fill="#FFFFFF"/>
  <circle cx="76.5" cy="56" r="2" fill="#FFFFFF"/>
  <ellipse cx="33" cy="68" rx="5" ry="3" fill="#FEB2B2" opacity="0.8"/>
  <ellipse cx="87" cy="68" rx="5" ry="3" fill="#FEB2B2" opacity="0.8"/>
  <ellipse cx="60" cy="66" rx="5" ry="3.5" fill="#2D3748"/>
  <path d="M56 74 C56 81 64 81 64 74 Z" fill="#FC8181" stroke="#E53E3E" stroke-width="1.5"/>
  <path d="M53 71 Q60 74 67 71" stroke="#2D3748" stroke-width="2" stroke-linecap="round" fill="none"/>
  <ellipse cx="44" cy="96" rx="8" ry="5.5" fill="#FFFFFF" stroke="#C05621" stroke-width="2"/>
  <ellipse cx="76" cy="96" rx="8" ry="5.5" fill="#FFFFFF" stroke="#C05621" stroke-width="2"/>
</svg>`,
        quotes: {
            greetings: [
                "Gâu gâu! Cô Nguyệt đã tới rồi! Em quẩy đuôi mừng cô muốn rụng luôn nè! 🐶✨",
                "Cô Nguyệt ơi! Hôm nay cô có mang nguồn năng lượng vui tươi nào cho các bạn học viên hông? 🌟",
                "Em đang ngồi đợi cô để cùng học bài đây! Cô sẵn sàng vào tiết chưa nè? 📚",
                "Corgi chào cô giáo xinh xắn nhất trung tâm ạ! Chúc cô dạy học thật vui! 💖"
            ],
            feed: [
                "Gâu! Khúc xương ngon đỉnh chóp luôn cô ơi! Cảm ơn cô Nguyệt nhiều lắm! 🍖🤤",
                "Ngon bá cháy luôn! Em no căng cái bụng tròn vo rồi nè! 🐕",
                "Măm măm~ Có đồ ăn của cô là em hăng hái trực lớp 10/10 luôn! ⚡",
                "Thơm lừng luôn cô ơi! Em xin phép ăn sạch bách không chừa xíu nào! 🍗"
            ],
            pet: [
                "Gâu gâu~ Được cô gãi cằm sướng ngất ngây luôn! 🐶💕",
                "Thích quá à cô ơi! Cho em dựa vào chân cô một chút nhé! 🥰",
                "Đuôi em đang lắc tít mù vì sung sướng nè! Yêu cô Nguyệt nhất! ✨",
                "Cô cưng chiều em ghê! Em hứa sẽ làm chú cún ngoan nhất của cô! 💖"
            ],
            hungry: [
                "Gâu... Cô Nguyệt ơi, bụng em reo như sấm rồi nè, cho em xin mẩu xương nha cô! 🥺🍖",
                "Đói muốn xỉu luôn... Cô Nguyệt cứu đói cho em với ạ! 🦴"
            ]
        }
    },
    bunny: {
        id: 'bunny',
        species: 'Thỏ Mochi',
        defaultName: 'Mochi',
        foodIcon: '🥕',
        foodName: 'Cà rốt giòn ngọt',
        description: 'Bé thỏ trắng muốt mềm như bông tuyết, đeo nơ hoa điệu đà.',
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="42" cy="30" rx="10" ry="24" fill="#FFFFFF" stroke="#CBD5E0" stroke-width="2.5" transform="rotate(-8 42 30)"/>
  <ellipse cx="42" cy="30" rx="5.5" ry="17" fill="#FED7E2" transform="rotate(-8 42 30)"/>
  <ellipse cx="78" cy="30" rx="10" ry="24" fill="#FFFFFF" stroke="#CBD5E0" stroke-width="2.5" transform="rotate(8 78 30)"/>
  <ellipse cx="78" cy="30" rx="5.5" ry="17" fill="#FED7E2" transform="rotate(8 78 30)"/>
  <circle cx="78" cy="46" r="4.5" fill="#FC8181"/>
  <circle cx="78" cy="46" r="2" fill="#FEFCBF"/>
  <ellipse cx="60" cy="72" rx="40" ry="35" fill="#FFFFFF" stroke="#CBD5E0" stroke-width="2.5"/>
  <circle cx="44" cy="67" r="6" fill="#4A5568"/>
  <circle cx="76" cy="67" r="6" fill="#4A5568"/>
  <circle cx="42" cy="64.5" r="2.2" fill="#FFFFFF"/>
  <circle cx="74" cy="64.5" r="2.2" fill="#FFFFFF"/>
  <circle cx="46" cy="69" r="1.1" fill="#FFFFFF"/>
  <circle cx="78" cy="69" r="1.1" fill="#FFFFFF"/>
  <ellipse cx="34" cy="74" rx="6" ry="3.5" fill="#FED7E2" opacity="0.9"/>
  <ellipse cx="86" cy="74" rx="6" ry="3.5" fill="#FED7E2" opacity="0.9"/>
  <ellipse cx="60" cy="73" rx="3" ry="2" fill="#F687B3"/>
  <path d="M60 75 L60 78 M57 80 L60 78 L63 80" stroke="#718096" stroke-width="1.8" stroke-linecap="round"/>
  <ellipse cx="48" cy="98" rx="7" ry="5" fill="#FFFFFF" stroke="#CBD5E0" stroke-width="2"/>
  <ellipse cx="72" cy="98" rx="7" ry="5" fill="#FFFFFF" stroke="#CBD5E0" stroke-width="2"/>
</svg>`,
        quotes: {
            greetings: [
                "Bé thỏ Mochi cúi chào cô Nguyệt ạ! Hôm nay trông cô tươi tắn quá! 🐰🌸",
                "Cô Nguyệt ơi, em vừa nhảy nhót quanh lớp điểm danh học viên giúp cô nè! ✨",
                "Chúc cô Nguyệt một buổi dạy học nhẹ nhàng, học sinh tiếp thu bài vèo vèo nha! 💕",
                "Em ngoan ngoãn ngồi đây chờ cô rồi nè, hôm nay mình cùng cố gắng cô nha! 🌿"
            ],
            feed: [
                "Rộp rộp~ Cà rốt giòn ngọt mê ly luôn cô ơi! Cảm ơn cô Nguyệt nhiều ạ! 🥕😋",
                "Ngon quá nè cô! Bụng em phúng phính như chiếc bánh bao mochi rồi! 🥟",
                "Măm măm~ Thỏ no bụng rồi, thỏ gửi cô một ngàn ngôi sao may mắn nha! ⭐",
                "Cà rốt của cô là ngọt nhất quả đất luôn á cô Nguyệt ơi! 🥕💕"
            ],
            pet: [
                "Ôi~ Lông em mềm mượt được cô vuốt thích mê luôn! 🐰✨",
                "Em giật giật hai tai vì sung sướng nè! Cô xoa thêm tí nữa đi cô! 💕",
                "Cô Nguyệt cưng em quá đi thôi, em yêu cô ngập tràn con tim! 💖",
                "Êm ái như mây trôi vậy á cô ơi~ Cảm giác hạnh phúc ngập tràn luôn! 🌸"
            ],
            hungry: [
                "Cô Nguyệt ơi... Em đói meo rồi nè, cho em xin củ cà rốt giòn giòn nha cô! 🥺🥕",
                "Bụng bé thỏ teo tóp rồi nè cô... Cứu đói em với ạ! 🐰"
            ]
        }
    },
    panda: {
        id: 'panda',
        species: 'Gấu Trúc',
        defaultName: 'Bánh Bao',
        foodIcon: '🎋',
        foodName: 'Trúc non tươi',
        description: 'Chú gấu trúc béo ú đáng yêu, thích ăn trúc non và cuộn tròn ngủ trưa.',
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="28" cy="34" r="15" fill="#2D3748" stroke="#1A202C" stroke-width="2"/>
  <circle cx="92" cy="34" r="15" fill="#2D3748" stroke="#1A202C" stroke-width="2"/>
  <ellipse cx="60" cy="68" rx="42" ry="38" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2.5"/>
  <ellipse cx="43" cy="62" rx="11" ry="9" fill="#2D3748" transform="rotate(-15 43 62)"/>
  <ellipse cx="77" cy="62" rx="11" ry="9" fill="#2D3748" transform="rotate(15 77 62)"/>
  <circle cx="44" cy="62" r="4.5" fill="#FFFFFF"/>
  <circle cx="76" cy="62" r="4.5" fill="#FFFFFF"/>
  <circle cx="45" cy="62" r="2.5" fill="#1A202C"/>
  <circle cx="75" cy="62" r="2.5" fill="#1A202C"/>
  <circle cx="44" cy="61" r="1" fill="#FFFFFF"/>
  <circle cx="74" cy="61" r="1" fill="#FFFFFF"/>
  <ellipse cx="32" cy="74" rx="5.5" ry="3.5" fill="#FED7E2" opacity="0.9"/>
  <ellipse cx="88" cy="74" rx="5.5" ry="3.5" fill="#FED7E2" opacity="0.9"/>
  <ellipse cx="60" cy="72" rx="4.5" ry="3" fill="#2D3748"/>
  <path d="M55 77 Q60 80 65 77" stroke="#2D3748" stroke-width="2" stroke-linecap="round" fill="none"/>
  <ellipse cx="36" cy="96" rx="9" ry="7" fill="#2D3748"/>
  <ellipse cx="84" cy="96" rx="9" ry="7" fill="#2D3748"/>
</svg>`,
        quotes: {
            greetings: [
                "Chào cô Nguyệt! Em vừa thức dậy sau giấc ngủ ngắn nè, thấy cô là em tỉnh cả ngủ! 🐼✨",
                "Cô Nguyệt ơi, hôm nay ai đi học trễ cô cứ giao cho em 'dọa' bằng sự đáng yêu này nha! 🐾",
                "Chúc cô giáo một ngày làm việc siêu hiệu quả và tràn đầy tiếng cười! 💕",
                "Em đang ngồi khoanh chân học bài chờ cô vào lớp nè! 🎋"
            ],
            feed: [
                "Rôm rốp~ Cành trúc non thơm ngọt xịn sò luôn cô ơi! Cảm ơn cô Nguyệt! 🎋😋",
                "Bụng gấu bự no căng rồi nè cô ơi! Giờ em chỉ muốn lăn tròn một vòng thôi! 🐼",
                "Măm măm~ Thức ăn ngon làm em tăng 200% độ dễ thương rồi! ✨",
                "No nê quá cô ơi! Em hứa sẽ ngồi trật tự không quậy phá lớp của cô đâu! 💖"
            ],
            pet: [
                "Ôi~ Bàn tay cô Nguyệt ấm áp ghê! Em cuộn tròn cho cô xoa đầu nè! 🐼💕",
                "Thích mê li luôn cô ơi! Em gửi cô một cái ôm gấu trúc siêu to khổng lồ nè! 🤗✨",
                "Cô xoa má bánh bao của em mềm không nè? Em thương cô Nguyệt nhất luôn! 🥰",
                "Ưm ưm~ Sướng quá đi! Được cô cưng thế này em không muốn rời nửa bước! 🌸"
            ],
            hungry: [
                "Cô Nguyệt ơi... Em đói bụng rồi, cô cho em xin vài nhánh trúc non nha! 🥺🎋",
                "Bụng gấu đang đánh trống múa lân rồi cô ơi... Cứu bé gấu với ạ! 🐼"
            ]
        }
    },
    duck: {
        id: 'duck',
        species: 'Vịt Ducky',
        defaultName: 'Quack Quack',
        foodIcon: '🍞',
        foodName: 'Bánh mì mềm',
        description: 'Chú vịt vàng lí lắc đội mầm cây may mắn trên đầu, đi lạch bạch đón cô.',
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M60 25 C60 16 52 14 50 12 C54 20 58 20 60 25 Z" fill="#48BB78"/>
  <path d="M60 25 C60 16 68 14 70 12 C66 20 62 20 60 25 Z" fill="#38A169"/>
  <ellipse cx="60" cy="68" rx="40" ry="37" fill="#FEEBC8" stroke="#DD6B20" stroke-width="2.5"/>
  <ellipse cx="23" cy="72" rx="7" ry="14" fill="#FBD38D" stroke="#DD6B20" stroke-width="2" transform="rotate(15 23 72)"/>
  <ellipse cx="97" cy="72" rx="7" ry="14" fill="#FBD38D" stroke="#DD6B20" stroke-width="2" transform="rotate(-15 97 72)"/>
  <circle cx="44" cy="58" r="5.5" fill="#2D3748"/>
  <circle cx="76" cy="58" r="5.5" fill="#2D3748"/>
  <circle cx="42.5" cy="56" r="2" fill="#FFFFFF"/>
  <circle cx="74.5" cy="56" r="2" fill="#FFFFFF"/>
  <ellipse cx="35" cy="67" rx="5.5" ry="3" fill="#FEB2B2" opacity="0.8"/>
  <ellipse cx="85" cy="67" rx="5.5" ry="3" fill="#FEB2B2" opacity="0.8"/>
  <ellipse cx="60" cy="68" rx="14" ry="8" fill="#F6AD55" stroke="#DD6B20" stroke-width="2.2"/>
  <circle cx="56" cy="66" r="1.2" fill="#C05621"/>
  <circle cx="64" cy="66" r="1.2" fill="#C05621"/>
  <ellipse cx="48" cy="99" rx="8" ry="4" fill="#F6AD55" stroke="#DD6B20" stroke-width="2"/>
  <ellipse cx="72" cy="99" rx="8" ry="4" fill="#F6AD55" stroke="#DD6B20" stroke-width="2"/>
</svg>`,
        quotes: {
            greetings: [
                "Cạp cạp! Vịt Ducky xin chào cô Nguyệt thân thương! Chúc cô một ngày rực rỡ! 🦆✨",
                "Mầm cây trên đầu em báo hiệu hôm nay cô sẽ có một ngày dạy học thật nhiều điều may mắn! 🌱💖",
                "Cô Nguyệt ơi! Em đã chuẩn bị tinh thần cổ vũ cô nhiệt tình hôm nay rồi nè! 📣",
                "Lạch bạch lạch bạch~ Em chạy ra đón cô đây, hôm nay cô có vui không nè? 🥰"
            ],
            feed: [
                "Cạp cạp ngon quá cô ơi! Bánh mì mềm xốp thơm phức luôn! Cảm ơn cô Nguyệt! 🍞😋",
                "Măm măm~ Bụng vịt tròn ủng rồi nè cô! Đã cái nư dễ sợ! 🦆",
                "Được cô cho ăn bánh mì là năng lượng tràn trề luôn á cô ơi! ⚡",
                "Ngon xỉu lên xỉu xuống luôn! Em yêu mến cô Nguyệt vô cùng! 💕"
            ],
            pet: [
                "Cạp~ Được cô xoa chiếc đầu có mầm cây thích ơi là thích! 🌱✨",
                "Em vỗ cánh phành phạch mừng cô nè! Cưng cô Nguyệt nhất trên đời! 🦆💖",
                "Cảm giác được cô yêu thương ấm áp như ánh nắng mai vậy đó cô! ☀️",
                "Hi hi! Bàn tay cô mềm mại quá, em muốn được vuốt ve cả ngày luôn! 🥰"
            ],
            hungry: [
                "Cạp... Cô Nguyệt ơi, em đói xẹp bụng rồi nè, cho em xin mẩu bánh mì nha cô! 🥺🍞",
                "Vịt đói muốn ngất xỉu rồi cô ơi... Cứu đói em với ạ! 🦆"
            ]
        }
    },
    hamster: {
        id: 'hamster',
        species: 'Bé Hamster',
        defaultName: 'Hạt Dẻ',
        foodIcon: '🌻',
        foodName: 'Hạt hướng dương',
        description: 'Chú chuột hamster 2 má phúng phính ôm hạt hướng dương, tò mò và lanh lợi.',
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="28" cy="38" r="13" fill="#ED8936" stroke="#C05621" stroke-width="2"/>
  <circle cx="28" cy="38" r="7" fill="#FED7E2"/>
  <circle cx="92" cy="38" r="13" fill="#ED8936" stroke="#C05621" stroke-width="2"/>
  <circle cx="92" cy="38" r="7" fill="#FED7E2"/>
  <ellipse cx="60" cy="70" rx="42" ry="36" fill="#FBD38D" stroke="#C05621" stroke-width="2.5"/>
  <ellipse cx="60" cy="76" rx="28" ry="24" fill="#FFFFFF"/>
  <ellipse cx="26" cy="72" rx="10" ry="12" fill="#FBD38D" stroke="#C05621" stroke-width="2"/>
  <ellipse cx="94" cy="72" rx="10" ry="12" fill="#FBD38D" stroke="#C05621" stroke-width="2"/>
  <circle cx="43" cy="58" r="5.5" fill="#2D3748"/>
  <circle cx="77" cy="58" r="5.5" fill="#2D3748"/>
  <circle cx="41.5" cy="56" r="2" fill="#FFFFFF"/>
  <circle cx="75.5" cy="56" r="2" fill="#FFFFFF"/>
  <ellipse cx="34" cy="68" rx="5.5" ry="3.5" fill="#FEB2B2" opacity="0.8"/>
  <ellipse cx="86" cy="68" rx="5.5" ry="3.5" fill="#FEB2B2" opacity="0.8"/>
  <polygon points="58,66 62,66 60,69" fill="#E53E3E"/>
  <path d="M56 71 Q60 74 64 71" stroke="#7B341E" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  <ellipse cx="60" cy="85" rx="7" ry="11" fill="#4A5568" stroke="#2D3748" stroke-width="1.5" transform="rotate(-15 60 85)"/>
  <path d="M57 78 L63 92" stroke="#ED8936" stroke-width="1.2"/>
  <circle cx="52" cy="84" r="4.5" fill="#FFFAF0" stroke="#C05621" stroke-width="1.5"/>
  <circle cx="68" cy="84" r="4.5" fill="#FFFAF0" stroke="#C05621" stroke-width="1.5"/>
  <ellipse cx="46" cy="99" rx="7" ry="4" fill="#FFFAF0" stroke="#C05621" stroke-width="1.8"/>
  <ellipse cx="74" cy="99" rx="7" ry="4" fill="#FFFAF0" stroke="#C05621" stroke-width="1.8"/>
</svg>`,
        quotes: {
            greetings: [
                "Chít chít! Bé hamster ôm hạt hướng dương chào cô Nguyệt ạ! 🐹✨",
                "Cô Nguyệt ơi! Em vừa giấu sẵn 1 bọc kẹo may mắn cho cô bắt đầu tiết dạy nè! 🍬",
                "Nhìn hai cái má phúng phính của em có giúp cô xua tan mệt mỏi hông nè? 🥰",
                "Chúc cô Nguyệt hôm nay dạy lớp nào cũng rôm rả và học sinh tiếp thu tốt nha! 🌻"
            ],
            feed: [
                "Chít chít~ Hạt hướng dương bùi béo tuyệt hảo luôn cô ơi! 🌻😋",
                "Nhồm nhoàm~ Em nhét đầy 2 túi má luôn rồi nè, cảm ơn cô Nguyệt nhiều lắm! 🐹",
                "No nê quá xá luôn! Có năng lượng rồi em chạy bánh xe quay tít mù cho cô xem nha! ⚡",
                "Hạt ngon xuất sắc luôn cô ơi! Cô chăm em khéo số một thiên hạ luôn! 💕"
            ],
            pet: [
                "Chít chít~ Hai má em phồng to được cô nắn nhẹ thích mê luôn! 🐹💕",
                "Người em tròn như cục bông được cô âu yếm sướng ghê! ✨",
                "Cô Nguyệt là người nuôi tuyệt vời nhất trên đời luôn á! 🥰",
                "Yêu cô Nguyệt quá đi thôi! Em dụi cái mũi nhỏ vào tay cô nè! 💖"
            ],
            hungry: [
                "Cô Nguyệt ơi... Túi má em rỗng tuếch rồi nè, cô cho em xin vài hạt hướng dương nha! 🥺🌻",
                "Đói quá chừng cô ơi... Cứu đói cho bé hamster tròn xoe với ạ! 🐹"
            ]
        }
    }
};

// DOM References for Pet
const petStage = document.getElementById('pet-stage');
const petAvatarWrapper = document.getElementById('pet-avatar-wrapper');
const petNameEl = document.getElementById('pet-name');
const petSpeciesEl = document.getElementById('pet-species-name');
const petLevelEl = document.getElementById('pet-level');
const petStreakEl = document.getElementById('pet-streak');
const petSpeechEl = document.getElementById('pet-speech');
const petHungerText = document.getElementById('pet-hunger-text');
const petHungerBar = document.getElementById('pet-hunger-bar');
const petHappinessText = document.getElementById('pet-happiness-text');
const petHappinessBar = document.getElementById('pet-happiness-bar');
const petFeedIcon = document.getElementById('pet-feed-icon');
const btnFeedPet = document.getElementById('btn-feed-pet');
const btnStrokePet = document.getElementById('btn-stroke-pet');
const btnOpenPetModal = document.getElementById('btn-open-pet-modal');
const petSelectionGrid = document.getElementById('pet-selection-grid');
const inputPetName = document.getElementById('input-pet-name');
const btnConfirmPet = document.getElementById('btn-confirm-pet');

let tempSelectedPetId = 'cat';

function ensurePetState(state) {
    if (!state) return false;
    const todayStr = new Date().toISOString().substring(0, 10);
    let changed = false;

    if (!state.pet) {
        state.pet = {
            id: 'cat',
            name: 'Miu Miu',
            hunger: 80,
            happiness: 90,
            level: 1,
            exp: 0,
            streak: 1,
            lastVisitDate: todayStr,
            lastFedDate: null,
            lastPettedDate: null
        };
        return true;
    }

    if (!state.pet.id || !PET_DATA[state.pet.id]) { state.pet.id = 'cat'; changed = true; }
    if (!state.pet.name) { state.pet.name = 'Miu Miu'; changed = true; }
    if (typeof state.pet.hunger !== 'number') { state.pet.hunger = 80; changed = true; }
    if (typeof state.pet.happiness !== 'number') { state.pet.happiness = 90; changed = true; }
    if (typeof state.pet.level !== 'number') { state.pet.level = 1; changed = true; }
    if (typeof state.pet.exp !== 'number') { state.pet.exp = 0; changed = true; }
    if (typeof state.pet.streak !== 'number') { state.pet.streak = 1; changed = true; }

    // Daily streak & decay check
    if (state.pet.lastVisitDate !== todayStr) {
        if (state.pet.lastVisitDate) {
            const lastDate = new Date(state.pet.lastVisitDate + 'T00:00:00');
            const today = new Date(todayStr + 'T00:00:00');
            const diffDays = Math.round((today - lastDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                state.pet.streak = (state.pet.streak || 0) + 1;
            } else if (diffDays > 1) {
                state.pet.streak = 1;
            }
            
            if (diffDays >= 1) {
                state.pet.hunger = Math.max(15, state.pet.hunger - (diffDays * 25));
                state.pet.happiness = Math.max(15, state.pet.happiness - (diffDays * 20));
            }
        }
        state.pet.lastVisitDate = todayStr;
        changed = true;
    }

    return changed;
}

function updatePetStatusBars() {
    if (!appState.pet) return;
    if (petHungerText) petHungerText.textContent = `${appState.pet.hunger}%`;
    if (petHungerBar) petHungerBar.style.width = `${appState.pet.hunger}%`;
    if (petHappinessText) petHappinessText.textContent = `${appState.pet.happiness}%`;
    if (petHappinessBar) petHappinessBar.style.width = `${appState.pet.happiness}%`;
    if (petLevelEl) petLevelEl.textContent = appState.pet.level || 1;
    if (petStreakEl) petStreakEl.textContent = appState.pet.streak || 1;
}

function renderPetView() {
    if (!petAvatarWrapper) return;
    ensurePetState(appState);

    const pet = appState.pet;
    const petData = PET_DATA[pet.id] || PET_DATA['cat'];

    petAvatarWrapper.innerHTML = petData.svg;
    if (petNameEl) petNameEl.textContent = pet.name;
    if (petSpeciesEl) petSpeciesEl.textContent = petData.species;
    if (petFeedIcon) petFeedIcon.textContent = petData.foodIcon;

    updatePetStatusBars();

    // Set speech bubble message
    if (petSpeechEl) {
        if (pet.hunger < 35 && petData.quotes.hungry && petData.quotes.hungry.length > 0) {
            const randIdx = Math.floor(Math.random() * petData.quotes.hungry.length);
            petSpeechEl.textContent = petData.quotes.hungry[randIdx];
        } else if (petData.quotes.greetings && petData.quotes.greetings.length > 0) {
            const randIdx = Math.floor(Math.random() * petData.quotes.greetings.length);
            petSpeechEl.textContent = petData.quotes.greetings[randIdx];
        }
    }
}

function spawnPetParticle(emoji) {
    const container = document.getElementById('pet-floating-effects');
    if (!container) return;
    const particle = document.createElement('span');
    particle.className = 'floating-particle';
    particle.textContent = emoji;
    const randomX = (Math.random() - 0.5) * 60;
    particle.style.left = `calc(50% + ${randomX}px)`;
    particle.style.bottom = '40px';
    const driftX = (Math.random() - 0.5) * 50;
    particle.style.setProperty('--tx', `${driftX}px`);
    container.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 1200);
}

function triggerPetAnimation(animClass) {
    if (!petAvatarWrapper) return;
    petAvatarWrapper.classList.remove('bouncing', 'wiggling');
    void petAvatarWrapper.offsetWidth; // Force reflow
    petAvatarWrapper.classList.add(animClass);
    setTimeout(() => {
        if (petAvatarWrapper) petAvatarWrapper.classList.remove(animClass);
    }, 600);
}

function addPetExp(amount) {
    const pet = appState.pet;
    if (!pet) return;
    pet.exp = (pet.exp || 0) + amount;
    if (pet.exp >= 100) {
        pet.level = (pet.level || 1) + 1;
        pet.exp = pet.exp - 100;
        showToast(`🎉 Tuyệt vời! Bé ${pet.name} đã thăng cấp lên Cấp ${pet.level}!`);
        if (petSpeechEl) {
            petSpeechEl.textContent = `WOOHOO! Em đã lên Cấp ${pet.level} rồi cô Nguyệt ơi! 🎉✨ Cảm ơn cô đã chăm sóc em thật tốt! 🥰`;
        }
    }
}

function handleFeedPet() {
    if (!appState.pet) return;
    const pet = appState.pet;
    const petData = PET_DATA[pet.id] || PET_DATA['cat'];

    if (pet.hunger >= 100) {
        if (petSpeechEl) {
            petSpeechEl.textContent = `Em no căng tròn bụng rồi cô Nguyệt ơi! Lát nữa cô hãy cho em ăn tiếp nha! 😋`;
        }
        triggerPetAnimation('bouncing');
        spawnPetParticle('😋');
        return;
    }

    pet.hunger = Math.min(100, pet.hunger + 25);
    pet.happiness = Math.min(100, pet.happiness + 5);
    pet.lastFedDate = new Date().toISOString();
    addPetExp(15);

    triggerPetAnimation('bouncing');
    spawnPetParticle(petData.foodIcon);

    if (petSpeechEl && petData.quotes.feed) {
        const randIdx = Math.floor(Math.random() * petData.quotes.feed.length);
        petSpeechEl.textContent = petData.quotes.feed[randIdx];
    }

    updatePetStatusBars();
    saveState();
}

function handleStrokePet() {
    if (!appState.pet) return;
    const pet = appState.pet;
    const petData = PET_DATA[pet.id] || PET_DATA['cat'];

    pet.happiness = Math.min(100, pet.happiness + 20);
    pet.lastPettedDate = new Date().toISOString();
    addPetExp(10);

    triggerPetAnimation('wiggling');
    const heartEmojis = ['💖', '💕', '✨', '🥰', '🌸'];
    spawnPetParticle(heartEmojis[Math.floor(Math.random() * heartEmojis.length)]);

    if (petSpeechEl && petData.quotes.pet) {
        const randIdx = Math.floor(Math.random() * petData.quotes.pet.length);
        petSpeechEl.textContent = petData.quotes.pet[randIdx];
    }

    updatePetStatusBars();
    saveState();
}

function openPetModal() {
    if (!petModal || !petSelectionGrid) return;
    ensurePetState(appState);
    tempSelectedPetId = appState.pet.id || 'cat';

    if (inputPetName) {
        inputPetName.value = appState.pet.name || PET_DATA[tempSelectedPetId].defaultName;
    }

    petSelectionGrid.innerHTML = '';
    Object.values(PET_DATA).forEach(p => {
        const card = document.createElement('div');
        card.className = `pet-select-card ${p.id === tempSelectedPetId ? 'active' : ''}`;
        card.dataset.id = p.id;
        card.innerHTML = `
            <div class="card-avatar">${p.svg}</div>
            <h4>${p.species}</h4>
            <p>${p.description}</p>
            <div style="margin-top: 6px; font-size: 11px; color: #b45309; font-weight: 600;">
                Khoái khẩu: ${p.foodIcon} ${p.foodName}
            </div>
        `;

        card.addEventListener('click', () => {
            tempSelectedPetId = p.id;
            petSelectionGrid.querySelectorAll('.pet-select-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            // If name is default of another pet or empty, suggest new default name
            const currentVal = inputPetName ? inputPetName.value.trim() : '';
            const isAnyDefault = Object.values(PET_DATA).some(item => item.defaultName === currentVal);
            if (!currentVal || isAnyDefault) {
                if (inputPetName) inputPetName.value = p.defaultName;
            }
        });

        petSelectionGrid.appendChild(card);
    });

    petModal.classList.add('active');
}

function confirmPetSelection() {
    if (!appState.pet) return;
    const chosenPetData = PET_DATA[tempSelectedPetId] || PET_DATA['cat'];
    appState.pet.id = tempSelectedPetId;

    const newName = inputPetName ? inputPetName.value.trim() : '';
    appState.pet.name = newName || chosenPetData.defaultName;

    if (petModal) petModal.classList.remove('active');
    renderPetView();
    saveState();
    showToast(`Đã lưu bé ${appState.pet.name} (${chosenPetData.species})! 🐾`);
}

// Event Listeners for Pet
if (btnFeedPet) {
    btnFeedPet.addEventListener('click', (e) => {
        e.stopPropagation();
        handleFeedPet();
    });
}

if (btnStrokePet) {
    btnStrokePet.addEventListener('click', (e) => {
        e.stopPropagation();
        handleStrokePet();
    });
}

if (petStage) {
    petStage.addEventListener('click', () => {
        handleStrokePet();
    });
}

if (btnOpenPetModal) {
    btnOpenPetModal.addEventListener('click', openPetModal);
}

if (btnConfirmPet) {
    btnConfirmPet.addEventListener('click', confirmPetSelection);
}

document.addEventListener('DOMContentLoaded', init);
