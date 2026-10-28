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
const PET_DATA = {
  "nana": {
    "id": "nana",
    "species": "Mèo Vàng Na Na",
    "defaultName": "Na Na",
    "foodIcon": "🍲",
    "foodName": "Hạt cá hồi",
    "description": "Bé mèo cam sọc vằn đeo nơ hồng, mắt ngọc bích long lanh và đuôi vẫy duyên dáng.",
    "isAuthentic": true,
    "idleGif": "assets/pet/nana_stage_idle.gif",
    "lickGif": "assets/pet/nana_stage_lick.gif",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"nana-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FED7AA\"/><stop offset=\"50%\" stop-color=\"#FDBA74\"/><stop offset=\"100%\" stop-color=\"#FB923C\"/></linearGradient>\n    <linearGradient id=\"nana-fur-dark\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FB923C\"/><stop offset=\"100%\" stop-color=\"#EA580C\"/></linearGradient>\n    <linearGradient id=\"nana-cream\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFF7ED\"/></linearGradient>\n    <linearGradient id=\"nana-iris\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#14532D\"/><stop offset=\"45%\" stop-color=\"#16A34A\"/><stop offset=\"85%\" stop-color=\"#4ADE80\"/><stop offset=\"100%\" stop-color=\"#86EFAC\"/></linearGradient>\n    <linearGradient id=\"nana-ear\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#F472B6\"/><stop offset=\"100%\" stop-color=\"#FCE7F3\"/></linearGradient>\n    <linearGradient id=\"nana-bow\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#F472B6\"/><stop offset=\"50%\" stop-color=\"#EC4899\"/><stop offset=\"100%\" stop-color=\"#BE185D\"/></linearGradient>\n    <radialGradient id=\"nana-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#7C2D12\" opacity=\"0.15\"/>\n  <g class=\"pet-anim-tail\" style=\"transform-origin: 54px 156px;\">\n    <path d=\"M 54 152 C 32 142 16 112 22 84 C 25 66 40 64 45 76 C 48 86 38 102 42 120 C 45 135 50 146 56 156 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 22 84 C 25 66 40 64 45 76 C 40 82 30 84 22 84 Z\" fill=\"url(#nana-cream)\"/>\n    <path d=\"M 24 92 Q 32 90 38 96 M 27 106 Q 36 104 40 112 M 34 122 Q 44 120 46 128\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n  </g>\n  <g class=\"pet-hind-legs\">\n    <path d=\"M 38 140 C 34 120 54 116 62 136 C 66 146 64 162 48 162 C 38 162 36 150 38 140 Z\" fill=\"url(#nana-fur-dark)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <ellipse cx=\"40\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n    <path d=\"M 142 140 C 146 120 126 116 118 136 C 114 146 116 162 132 162 C 142 162 144 150 142 140 Z\" fill=\"url(#nana-fur-dark)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <ellipse cx=\"140\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-solid-body\">\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 120 122 126 142 126 162 C 126 169 118 171 112 171 C 105 171 101 166 101 156 L 101 126 C 101 120 97 116 90 116 C 83 116 79 120 79 126 L 79 156 C 79 166 75 171 68 171 C 62 171 54 169 54 162 C 54 142 60 122 58 106 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 74 100 C 66 114 70 134 90 134 C 110 134 114 114 106 100 C 100 98 80 98 74 100 Z\" fill=\"url(#nana-cream)\"/>\n    <path d=\"M 60 122 C 58 138 59 154 59 164 C 59 169 64 171 70 171 C 76 171 80 167 80 158 L 80 124\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"66\" y1=\"162\" x2=\"66\" y2=\"168\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"73\" y1=\"162\" x2=\"73\" y2=\"168\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <path d=\"M 120 122 C 122 138 121 154 121 164 C 121 169 116 171 110 171 C 104 171 100 167 100 158 L 100 124\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"107\" y1=\"162\" x2=\"107\" y2=\"168\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"114\" y1=\"162\" x2=\"114\" y2=\"168\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <path d=\"M 54 126 Q 63 128 63 135 M 126 126 Q 117 128 117 135\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 65px;\">\n      <path d=\"M 52 64 L 34 22 C 48 24 68 38 74 52 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <path d=\"M 50 56 L 39 30 C 49 33 62 44 67 50 Z\" fill=\"url(#nana-ear)\"/>\n      <path d=\"M 46 54 Q 56 46 52 38 M 52 56 Q 62 50 58 42\" stroke=\"#FFFFFF\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n      <path d=\"M 128 64 L 146 22 C 132 24 112 38 106 52 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <path d=\"M 130 56 L 141 30 C 131 33 118 44 113 50 Z\" fill=\"url(#nana-ear)\"/>\n      <path d=\"M 134 54 Q 124 46 128 38 M 128 56 Q 118 50 122 42\" stroke=\"#FFFFFF\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n    </g>\n    <path d=\"M 44 82 C 40 60 62 44 90 44 C 118 44 140 60 136 82 C 142 96 138 114 120 118 C 104 122 76 122 60 118 C 42 114 38 96 44 82 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2.2\"/>\n    <path d=\"M 43 82 L 35 88 L 44 92 L 37 98 L 48 102\" fill=\"none\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/>\n    <path d=\"M 137 82 L 145 88 L 136 92 L 143 98 L 132 102\" fill=\"none\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/>\n    <path d=\"M 90 48 L 90 58 M 82 50 Q 84 56 86 60 M 98 50 Q 96 56 94 60\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linecap=\"round\" opacity=\"0.7\"/>\n    <path d=\"M 68 88 C 66 78 78 76 84 82 C 87 78 93 78 96 82 C 102 76 114 78 112 88 C 112 104 68 104 68 88 Z\" fill=\"url(#nana-cream)\"/>\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 76px;\">\n      <ellipse cx=\"68\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#1C1917\"/>\n      <ellipse cx=\"68\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#nana-iris)\"/>\n      <ellipse cx=\"68\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#052E16\"/>\n      <ellipse cx=\"68\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#BBF7D0\" opacity=\"0.6\"/>\n      <circle cx=\"65\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"71\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"112\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#1C1917\"/>\n      <ellipse cx=\"112\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#nana-iris)\"/>\n      <ellipse cx=\"112\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#052E16\"/>\n      <ellipse cx=\"112\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#BBF7D0\" opacity=\"0.6\"/>\n      <circle cx=\"109\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"115\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n    <path d=\"M 60 63 Q 68 59 76 62\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 104 62 Q 112 59 120 63\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    <circle cx=\"58\" cy=\"85\" r=\"9\" fill=\"url(#nana-blush)\"/>\n    <circle cx=\"122\" cy=\"85\" r=\"9\" fill=\"url(#nana-blush)\"/>\n    <polygon points=\"88,83 92,83 90,86\" fill=\"#F43F5E\"/>\n    <path d=\"M 85 87 Q 90 90 90 87 Q 90 90 95 87\" stroke=\"#7C2D12\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 44 85 L 26 83 M 44 90 L 24 92 M 136 85 L 154 83 M 136 90 L 156 92\" stroke=\"#9A3412\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <g class=\"pet-bowtie\" transform=\"translate(90, 106)\">\n      <path d=\"M 0 0 L -18 -8 C -22 -1  -22 1 -18 8 Z\" fill=\"url(#nana-bow)\" stroke=\"#9D174D\" stroke-width=\"1.5\"/>\n      <path d=\"M 0 0 L 18 -8 C 22 -1 22 1 18 8 Z\" fill=\"url(#nana-bow)\" stroke=\"#9D174D\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"4.5\" fill=\"#FDF2F8\" stroke=\"#9D174D\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"2\" fill=\"#F472B6\"/>\n      <path d=\"M -2 3 L -7 14 M 2 3 L 7 14\" stroke=\"#BE185D\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Đừng đơ ra nữa, mau xoa đầu em đi! 🥰🐾",
        "Mèo nhà khác toàn được người ta sờ! Hừ 😾",
        "Meo meo~ Bé Na Na chào cô Nguyệt ạ! Chúc cô một ngày dạy học thật nhiều niềm vui! ✨🐾",
        "Cô Nguyệt ơi, Na Na đợi cô từ sớm nè! Hôm nay cô có mệt không? 🥰"
      ],
      "feed": [
        "Nham nham~ Bát hạt cá hồi thơm lừng giòn rụm! Na Na no căng bụng rồi, cảm ơn cô Nguyệt! 🍲💖",
        "Meo~ Món này ngon tuyệt đỉnh cô ơi! Na Na yêu cô Nguyệt nhất trên đời! ✨"
      ],
      "pet": [
        "Purrr... Tay cô Nguyệt xoa ấm quá đi à~ Na Na cọ cọ má vào tay cô nè! 🥰🌸",
        "Meo meo~ Đang được cô vuốt ve thì bao nhiêu mệt mỏi tan biến hết luôn! 💕",
        "Đừng dừng lại nha cô ơi, xoa thêm một xíu nữa đi ạ! 💖"
      ],
      "hungry": [
        "Mèo nhà khác toàn được ăn ngon! Hừ... Na Na đói meo rồi cô Nguyệt ơi! 🥺🍲",
        "Meo... bụng Na Na kêu rột rột rồi nè cô Nguyệt ơi! Cho Na Na xin chút hạt nha! 🥺🍲"
      ]
    }
  },
  "calico": {
    "id": "calico",
    "species": "Mèo Tam Thể Miu Miu",
    "defaultName": "Miu Miu",
    "foodIcon": "🐟",
    "foodName": "Cá hồi tươi",
    "description": "Mèo may mắn tam thể quý phái, mắt ngọc hổ phách long lanh, vòng cổ chuông vàng ngân vang.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"calico-cream\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFF7ED\"/></linearGradient>\n    <linearGradient id=\"calico-orange\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FDBA74\"/><stop offset=\"100%\" stop-color=\"#EA580C\"/></linearGradient>\n    <linearGradient id=\"calico-dark\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#374151\"/><stop offset=\"100%\" stop-color=\"#111827\"/></linearGradient>\n    <linearGradient id=\"calico-iris\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#78350F\"/><stop offset=\"45%\" stop-color=\"#D97706\"/><stop offset=\"85%\" stop-color=\"#FBBF24\"/><stop offset=\"100%\" stop-color=\"#FEF08A\"/></linearGradient>\n    <linearGradient id=\"calico-ear\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#F472B6\"/><stop offset=\"100%\" stop-color=\"#FCE7F3\"/></linearGradient>\n    <radialGradient id=\"calico-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.55\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"calico-bell\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FEF08A\"/><stop offset=\"60%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#B45309\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#374151\" opacity=\"0.15\"/>\n  <g class=\"pet-anim-tail\" style=\"transform-origin: 54px 156px;\">\n    <path d=\"M 54 152 C 32 142 16 112 22 84 C 25 66 40 64 45 76 C 48 86 38 102 42 120 C 45 135 50 146 56 156 Z\" fill=\"url(#calico-cream)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <path d=\"M 22 84 C 25 66 40 64 45 76 C 42 88 30 92 22 84 Z\" fill=\"url(#calico-dark)\"/>\n    <path d=\"M 36 102 C 44 112 40 126 44 136 C 40 134 32 120 36 102 Z\" fill=\"url(#calico-orange)\"/>\n  </g>\n  <g class=\"pet-hind-legs\">\n    <path d=\"M 38 140 C 34 120 54 116 62 136 C 66 146 64 162 48 162 C 38 162 36 150 38 140 Z\" fill=\"url(#calico-dark)\" stroke=\"#1F2937\" stroke-width=\"2\"/>\n    <ellipse cx=\"40\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#calico-cream)\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n    <path d=\"M 142 140 C 146 120 126 116 118 136 C 114 146 116 162 132 162 C 142 162 144 150 142 140 Z\" fill=\"url(#calico-orange)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <ellipse cx=\"140\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#calico-cream)\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-solid-body\">\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 120 122 126 142 126 162 C 126 169 118 171 112 171 C 105 171 101 166 101 156 L 101 126 C 101 120 97 116 90 116 C 83 116 79 120 79 126 L 79 156 C 79 166 75 171 68 171 C 62 171 54 169 54 162 C 54 142 60 122 58 106 Z\" fill=\"url(#calico-cream)\" stroke=\"#64748B\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 56 116 C 54 136 62 144 68 146 C 70 134 66 118 56 116 Z\" fill=\"url(#calico-orange)\"/>\n    <path d=\"M 124 116 C 126 136 118 144 112 146 C 110 134 114 118 124 116 Z\" fill=\"url(#calico-dark)\"/>\n    <path d=\"M 60 122 C 58 138 59 154 59 164 C 59 169 64 171 70 171 C 76 171 80 167 80 158 L 80 124\" fill=\"url(#calico-cream)\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M 120 122 C 122 138 121 154 121 164 C 121 169 116 171 110 171 C 104 171 100 167 100 158 L 100 124\" fill=\"url(#calico-cream)\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 65px;\">\n      <path d=\"M 52 64 L 34 22 C 48 24 68 38 74 52 Z\" fill=\"url(#calico-dark)\" stroke=\"#111827\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <path d=\"M 50 56 L 39 30 C 49 33 62 44 67 50 Z\" fill=\"url(#calico-ear)\"/>\n      <path d=\"M 128 64 L 146 22 C 132 24 112 38 106 52 Z\" fill=\"url(#calico-orange)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <path d=\"M 130 56 L 141 30 C 131 33 118 44 113 50 Z\" fill=\"url(#calico-ear)\"/>\n    </g>\n    <path d=\"M 44 82 C 40 60 62 44 90 44 C 118 44 140 60 136 82 C 142 96 138 114 120 118 C 104 122 76 122 60 118 C 42 114 38 96 44 82 Z\" fill=\"url(#calico-cream)\" stroke=\"#64748B\" stroke-width=\"2.2\"/>\n    <path d=\"M 44 76 C 42 56 62 46 76 46 C 72 64 60 84 44 76 Z\" fill=\"url(#calico-dark)\"/>\n    <path d=\"M 136 76 C 138 56 118 46 104 46 C 108 64 120 84 136 76 Z\" fill=\"url(#calico-orange)\"/>\n    <path d=\"M 43 82 L 35 88 L 44 92 L 37 98 L 48 102\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/>\n    <path d=\"M 137 82 L 145 88 L 136 92 L 143 98 L 132 102\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/>\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 76px;\">\n      <ellipse cx=\"68\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#1C1917\"/>\n      <ellipse cx=\"68\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#calico-iris)\"/>\n      <ellipse cx=\"68\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#451A03\"/>\n      <ellipse cx=\"68\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#FEF08A\" opacity=\"0.6\"/>\n      <circle cx=\"65\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"71\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"112\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#1C1917\"/>\n      <ellipse cx=\"112\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#calico-iris)\"/>\n      <ellipse cx=\"112\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#451A03\"/>\n      <ellipse cx=\"112\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#FEF08A\" opacity=\"0.6\"/>\n      <circle cx=\"109\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"115\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n    <circle cx=\"58\" cy=\"85\" r=\"9\" fill=\"url(#calico-blush)\"/>\n    <circle cx=\"122\" cy=\"85\" r=\"9\" fill=\"url(#calico-blush)\"/>\n    <polygon points=\"88,83 92,83 90,86\" fill=\"#F43F5E\"/>\n    <path d=\"M 85 87 Q 90 90 90 87 Q 90 90 95 87\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 44 85 L 26 83 M 44 90 L 24 92 M 136 85 L 154 83 M 136 90 L 156 92\" stroke=\"#64748B\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <path d=\"M 68 106 Q 90 114 112 106\" stroke=\"#DC2626\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(90, 114)\">\n      <circle cx=\"0\" cy=\"0\" r=\"6\" fill=\"url(#calico-bell)\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"2\" r=\"1.5\" fill=\"#78350F\"/>\n    </g>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Miu Miu tam thể mang vạn điều may mắn và niềm vui đến lớp học của cô Nguyệt ạ! 🍀🐱",
        "Chuông vàng leng keng mừng cô vào lớp! Cô Nguyệt nhớ giữ gìn sức khoẻ nhé! 🔔✨"
      ],
      "feed": [
        "Ngon mê ly cô ơi! Cá hồi béo ngậy ngọt lịm luôn! Cảm ơn cô Nguyệt! 🐟🥰"
      ],
      "pet": [
        "Ngọt ngào quá cô ơi~ Miu Miu nhắm mắt hưởng thụ cái xoa đầu ấm áp của cô nè! 💖"
      ],
      "hungry": [
        "Cô Nguyệt ơi, đĩa cá hồi của Miu Miu hết sạch rồi, cô cho Miu Miu xin thêm miếng nữa nha! 🥺🐟"
      ]
    }
  },
  "siamese": {
    "id": "siamese",
    "species": "Mèo Xiêm Koko",
    "defaultName": "Koko",
    "foodIcon": "🍗",
    "foodName": "Ức gà xé",
    "description": "Quý tộc hoàng gia Thái Lan, lông kem mịn màng, mặt nạ sô cô la và mắt xanh ngọc bích sâu thẳm.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"siamese-cream\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FAF5E8\"/><stop offset=\"100%\" stop-color=\"#E5D5C0\"/></linearGradient>\n    <linearGradient id=\"siamese-choco\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#4A3728\"/><stop offset=\"100%\" stop-color=\"#261A12\"/></linearGradient>\n    <linearGradient id=\"siamese-blue\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0369A1\"/><stop offset=\"45%\" stop-color=\"#0284C7\"/><stop offset=\"85%\" stop-color=\"#38BDF8\"/><stop offset=\"100%\" stop-color=\"#BAE6FD\"/></linearGradient>\n    <linearGradient id=\"siamese-tie\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#2DD4BF\"/><stop offset=\"100%\" stop-color=\"#0F766E\"/></linearGradient>\n    <radialGradient id=\"siamese-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.45\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#261A12\" opacity=\"0.15\"/>\n  <g class=\"pet-anim-tail\" style=\"transform-origin: 54px 156px;\">\n    <path d=\"M 54 152 C 32 142 16 112 22 84 C 25 66 40 64 45 76 C 48 86 38 102 42 120 C 45 135 50 146 56 156 Z\" fill=\"url(#siamese-choco)\" stroke=\"#1C1917\" stroke-width=\"2\"/>\n  </g>\n  <g class=\"pet-hind-legs\">\n    <path d=\"M 38 140 C 34 120 54 116 62 136 C 66 146 64 162 48 162 C 38 162 36 150 38 140 Z\" fill=\"url(#siamese-choco)\" stroke=\"#1C1917\" stroke-width=\"2\"/>\n    <ellipse cx=\"40\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#siamese-choco)\" stroke=\"#1C1917\" stroke-width=\"1.8\"/>\n    <path d=\"M 142 140 C 146 120 126 116 118 136 C 114 146 116 162 132 162 C 142 162 144 150 142 140 Z\" fill=\"url(#siamese-choco)\" stroke=\"#1C1917\" stroke-width=\"2\"/>\n    <ellipse cx=\"140\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#siamese-choco)\" stroke=\"#1C1917\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-solid-body\">\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 120 122 126 142 126 162 C 126 169 118 171 112 171 C 105 171 101 166 101 156 L 101 126 C 101 120 97 116 90 116 C 83 116 79 120 79 126 L 79 156 C 79 166 75 171 68 171 C 62 171 54 169 54 162 C 54 142 60 122 58 106 Z\" fill=\"url(#siamese-cream)\" stroke=\"#78350F\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 60 134 C 58 146 59 156 59 164 C 59 169 64 171 70 171 C 76 171 80 167 80 158 L 80 138\" fill=\"url(#siamese-choco)\" stroke=\"#1C1917\" stroke-width=\"1.8\"/>\n    <path d=\"M 120 134 C 122 146 121 156 121 164 C 121 169 116 171 110 171 C 104 171 100 167 100 158 L 100 138\" fill=\"url(#siamese-choco)\" stroke=\"#1C1917\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 65px;\">\n      <path d=\"M 52 64 L 30 18 C 46 22 66 38 74 52 Z\" fill=\"url(#siamese-choco)\" stroke=\"#1C1917\" stroke-width=\"2.2\"/>\n      <path d=\"M 128 64 L 150 18 C 134 22 114 38 106 52 Z\" fill=\"url(#siamese-choco)\" stroke=\"#1C1917\" stroke-width=\"2.2\"/>\n    </g>\n    <path d=\"M 44 82 C 40 60 62 44 90 44 C 118 44 140 60 136 82 C 142 96 138 114 120 118 C 104 122 76 122 60 118 C 42 114 38 96 44 82 Z\" fill=\"url(#siamese-cream)\" stroke=\"#78350F\" stroke-width=\"2.2\"/>\n    <!-- Chocolate Facial Mask -->\n    <path d=\"M 64 68 C 60 58 74 54 90 54 C 106 54 120 58 116 68 C 122 84 120 102 108 108 C 98 112 82 112 72 108 C 60 102 58 84 64 68 Z\" fill=\"url(#siamese-choco)\"/>\n    <circle cx=\"56\" cy=\"85\" r=\"8\" fill=\"url(#siamese-blush)\"/>\n    <circle cx=\"124\" cy=\"85\" r=\"8\" fill=\"url(#siamese-blush)\"/>\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 76px;\">\n      <ellipse cx=\"68\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#0C4A6E\"/>\n      <ellipse cx=\"68\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#siamese-blue)\"/>\n      <ellipse cx=\"68\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#082F49\"/>\n      <ellipse cx=\"68\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#BAE6FD\" opacity=\"0.6\"/>\n      <circle cx=\"65\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"71\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"112\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#0C4A6E\"/>\n      <ellipse cx=\"112\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#siamese-blue)\"/>\n      <ellipse cx=\"112\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#082F49\"/>\n      <ellipse cx=\"112\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#BAE6FD\" opacity=\"0.6\"/>\n      <circle cx=\"109\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"115\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n    <polygon points=\"88,83 92,83 90,86\" fill=\"#1C1917\"/>\n    <path d=\"M 85 87 Q 90 90 90 87 Q 90 90 95 87\" stroke=\"#1C1917\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 44 85 L 26 83 M 44 90 L 24 92 M 136 85 L 154 83 M 136 90 L 156 92\" stroke=\"#FAF5E8\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <g class=\"pet-bowtie\" transform=\"translate(90, 108)\">\n      <path d=\"M 0 0 L -16 -7 C -20 -1 -20 1 -16 7 Z\" fill=\"url(#siamese-tie)\" stroke=\"#115E59\" stroke-width=\"1.5\"/>\n      <path d=\"M 0 0 L 16 -7 C 20 -1 20 1 16 7 Z\" fill=\"url(#siamese-tie)\" stroke=\"#115E59\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"4\" fill=\"#99F6E4\" stroke=\"#115E59\" stroke-width=\"1.5\"/>\n    </g>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Quý tộc Koko cung kính chào cô Nguyệt! Hôm nay trông cô quý phái và rạng rỡ quá! 👑✨",
        "Đôi mắt sapphire của Koko luôn dõi theo từng bài giảng xuất sắc của cô! 💎"
      ],
      "feed": [
        "Thơm ngọt đúng chuẩn hoàng gia luôn cô ơi! Koko mê đĩa ức gà này xỉu! Cảm ơn cô Nguyệt! 🍗😋"
      ],
      "pet": [
        "Meo~ Cái xoa đầu nhẹ nhàng của cô làm lòng Koko ấm áp vô cùng! ✨"
      ],
      "hungry": [
        "Cô Nguyệt ơi... Bữa xế hoàng gia của Koko đã tới rồi ạ, cô cho Koko xin chút ức gà nha! 🥺🍗"
      ]
    }
  },
  "corgi": {
    "id": "corgi",
    "species": "Cún Corgi Mochi",
    "defaultName": "Mochi",
    "foodIcon": "🥩",
    "foodName": "Bò bít tết",
    "description": "Chú cún mông tròn siêu cấp đáng yêu, tai to vểnh cao và chiếc khăn đỏ chấm bi tinh nghịch.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"corgi-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FED7AA\"/><stop offset=\"50%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#D97706\"/></linearGradient>\n    <linearGradient id=\"corgi-cream\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFFBEB\"/></linearGradient>\n    <radialGradient id=\"corgi-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"corgi-ear\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#F472B6\"/><stop offset=\"100%\" stop-color=\"#FCE7F3\"/></linearGradient>\n    <linearGradient id=\"corgi-bandana\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#EF4444\"/><stop offset=\"100%\" stop-color=\"#991B1B\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#B45309\" opacity=\"0.15\"/>\n  <g class=\"pet-anim-tail\" style=\"transform-origin: 52px 148px;\">\n    <ellipse cx=\"48\" cy=\"144\" rx=\"8\" ry=\"8\" fill=\"url(#corgi-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"46\" cy=\"142\" rx=\"4\" ry=\"4\" fill=\"url(#corgi-cream)\"/>\n  </g>\n  <g class=\"pet-hind-legs\">\n    <ellipse cx=\"44\" cy=\"150\" rx=\"18\" ry=\"14\" fill=\"url(#corgi-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"40\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"136\" cy=\"150\" rx=\"18\" ry=\"14\" fill=\"url(#corgi-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"140\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-solid-body\">\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 120 122 126 142 126 162 C 126 169 118 171 112 171 C 105 171 101 166 101 156 L 101 126 C 101 120 97 116 90 116 C 83 116 79 120 79 126 L 79 156 C 79 166 75 171 68 171 C 62 171 54 169 54 162 C 54 142 60 122 58 106 Z\" fill=\"url(#corgi-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <!-- Huge Fluffy White Chest -->\n    <path d=\"M 72 102 C 64 116 66 138 90 138 C 114 138 116 116 108 102 Z\" fill=\"url(#corgi-cream)\"/>\n    <path d=\"M 60 126 C 58 140 59 154 59 164 C 59 169 64 171 70 171 C 76 171 80 167 80 158 L 80 128\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M 120 126 C 122 140 121 154 121 164 C 121 169 116 171 110 171 C 104 171 100 167 100 158 L 100 128\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 65px;\">\n      <ellipse cx=\"44\" cy=\"42\" rx=\"16\" ry=\"32\" fill=\"url(#corgi-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\" transform=\"rotate(-20 44 42)\"/>\n      <ellipse cx=\"44\" cy=\"42\" rx=\"10\" ry=\"24\" fill=\"url(#corgi-ear)\" transform=\"rotate(-20 44 42)\"/>\n      <ellipse cx=\"136\" cy=\"42\" rx=\"16\" ry=\"32\" fill=\"url(#corgi-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\" transform=\"rotate(20 136 42)\"/>\n      <ellipse cx=\"136\" cy=\"42\" rx=\"10\" ry=\"24\" fill=\"url(#corgi-ear)\" transform=\"rotate(20 136 42)\"/>\n    </g>\n    <path d=\"M 44 82 C 40 60 62 44 90 44 C 118 44 140 60 136 82 C 142 96 138 114 120 118 C 104 122 76 122 60 118 C 42 114 38 96 44 82 Z\" fill=\"url(#corgi-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\"/>\n    <!-- Corgi Heart Face Blaze -->\n    <path d=\"M 90 46 C 88 56 82 66 74 72 C 68 76 66 86 70 94 C 76 104 84 106 90 106 C 96 106 104 104 110 94 C 114 86 112 76 106 72 C 98 66 92 56 90 46 Z\" fill=\"url(#corgi-cream)\"/>\n    <circle cx=\"56\" cy=\"86\" r=\"9\" fill=\"url(#corgi-blush)\"/>\n    <circle cx=\"124\" cy=\"86\" r=\"9\" fill=\"url(#corgi-blush)\"/>\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 76px;\">\n      <ellipse cx=\"68\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#1C1917\"/>\n      <ellipse cx=\"68\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"#78350F\"/>\n      <circle cx=\"65\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"71\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"112\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#1C1917\"/>\n      <ellipse cx=\"112\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"#78350F\"/>\n      <circle cx=\"109\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"115\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n    <!-- Cute Black Nose -->\n    <ellipse cx=\"90\" cy=\"82\" rx=\"6.5\" ry=\"4.5\" fill=\"#1C1917\"/>\n    <ellipse cx=\"88.5\" cy=\"80.5\" rx=\"2\" ry=\"1.2\" fill=\"#FFFFFF\"/>\n    <path d=\"M 85 88 Q 90 92 95 88\" stroke=\"#1C1917\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 87 90 Q 90 98 93 90 Z\" fill=\"#F43F5E\"/>\n    <!-- Red Bandana with Polka Dots -->\n    <path d=\"M 66 104 Q 90 114 114 104 L 90 128 Z\" fill=\"url(#corgi-bandana)\" stroke=\"#7F1D1D\" stroke-width=\"1.8\"/>\n    <circle cx=\"90\" cy=\"116\" r=\"2\" fill=\"#FFFFFF\"/>\n    <circle cx=\"82\" cy=\"110\" r=\"1.8\" fill=\"#FFFFFF\"/>\n    <circle cx=\"98\" cy=\"110\" r=\"1.8\" fill=\"#FFFFFF\"/>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Gâu gâu! Mochi lắc mông tròn xoe mừng cô Nguyệt đến lớp ạ! 🐶🐾",
        "Cô Nguyệt ơi, hôm nay em ngoan lắm nè, cô nựng cằm em nha! 🥰✨"
      ],
      "feed": [
        "Ngon bá cháy bọ chét cô ơi! Thịt bò bít tết mọng nước đỉnh chóp! Gâu gâu! 🥩😋"
      ],
      "pet": [
        "Gâu gâu~ Mochi nằm ngửa bụng cho cô gãi nè! Thích quá đi à! 💕"
      ],
      "hungry": [
        "Cô Nguyệt ơi... Bụng Mochi réo inh ỏi rồi nè, cho em xin miếng bít tết nha cô! 🥺🥩"
      ]
    }
  },
  "shiba": {
    "id": "shiba",
    "species": "Shiba Inu Hachiko",
    "defaultName": "Hachiko",
    "foodIcon": "🍖",
    "foodName": "Xúc xích nướng",
    "description": "Chú chó trung thành xứ mặt trời mọc, má bánh bao phúng phính và nụ cười rạng rỡ như ánh ban mai.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"shiba-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FDE68A\"/><stop offset=\"50%\" stop-color=\"#D97706\"/><stop offset=\"100%\" stop-color=\"#B45309\"/></linearGradient>\n    <linearGradient id=\"shiba-white\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFFBEB\"/></linearGradient>\n    <radialGradient id=\"shiba-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"shiba-collar\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#DC2626\"/><stop offset=\"100%\" stop-color=\"#991B1B\"/></linearGradient>\n    <linearGradient id=\"shiba-bell\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FEF08A\"/><stop offset=\"100%\" stop-color=\"#D97706\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#B45309\" opacity=\"0.15\"/>\n  <g class=\"pet-anim-tail\" style=\"transform-origin: 52px 148px;\">\n    <!-- Shiba Cinnamon Curl Tail -->\n    <path d=\"M 52 148 C 30 138 24 108 44 96 C 58 88 68 104 56 114 C 48 120 44 134 52 148 Z\" fill=\"url(#shiba-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <path d=\"M 44 96 C 58 88 68 104 56 114 Z\" fill=\"url(#shiba-white)\"/>\n  </g>\n  <g class=\"pet-hind-legs\">\n    <ellipse cx=\"44\" cy=\"150\" rx=\"18\" ry=\"14\" fill=\"url(#shiba-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"40\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#shiba-white)\" stroke=\"#B45309\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"136\" cy=\"150\" rx=\"18\" ry=\"14\" fill=\"url(#shiba-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"140\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"url(#shiba-white)\" stroke=\"#B45309\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-solid-body\">\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 120 122 126 142 126 162 C 126 169 118 171 112 171 C 105 171 101 166 101 156 L 101 126 C 101 120 97 116 90 116 C 83 116 79 120 79 126 L 79 156 C 79 166 75 171 68 171 C 62 171 54 169 54 162 C 54 142 60 122 58 106 Z\" fill=\"url(#shiba-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 72 102 C 64 116 66 138 90 138 C 114 138 116 116 108 102 Z\" fill=\"url(#shiba-white)\"/>\n    <path d=\"M 60 126 C 58 140 59 154 59 164 C 59 169 64 171 70 171 C 76 171 80 167 80 158 L 80 128\" fill=\"url(#shiba-white)\" stroke=\"#B45309\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M 120 126 C 122 140 121 154 121 164 C 121 169 116 171 110 171 C 104 171 100 167 100 158 L 100 128\" fill=\"url(#shiba-white)\" stroke=\"#B45309\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 65px;\">\n      <path d=\"M 50 64 L 38 26 C 52 28 66 42 70 56 Z\" fill=\"url(#shiba-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\"/>\n      <path d=\"M 50 56 L 42 34 C 50 36 60 46 64 52 Z\" fill=\"#FCE7F3\"/>\n      <path d=\"M 130 64 L 142 26 C 128 28 114 42 110 56 Z\" fill=\"url(#shiba-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\"/>\n      <path d=\"M 130 56 L 138 34 C 130 36 120 46 116 52 Z\" fill=\"#FCE7F3\"/>\n    </g>\n    <path d=\"M 44 82 C 40 60 62 44 90 44 C 118 44 140 60 136 82 C 142 96 138 114 120 118 C 104 122 76 122 60 118 C 42 114 38 96 44 82 Z\" fill=\"url(#shiba-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\"/>\n    <!-- Shiba Urajiro White Cheeks & Eyebrow Dots -->\n    <ellipse cx=\"72\" cy=\"56\" rx=\"3.5\" ry=\"2.5\" fill=\"url(#shiba-white)\"/>\n    <ellipse cx=\"108\" cy=\"56\" rx=\"3.5\" ry=\"2.5\" fill=\"url(#shiba-white)\"/>\n    <path d=\"M 54 84 C 50 102 70 114 90 114 C 110 114 130 102 126 84 C 122 72 108 72 90 76 C 72 72 58 72 54 84 Z\" fill=\"url(#shiba-white)\"/>\n    <circle cx=\"56\" cy=\"88\" r=\"8\" fill=\"url(#shiba-blush)\"/>\n    <circle cx=\"124\" cy=\"88\" r=\"8\" fill=\"url(#shiba-blush)\"/>\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 76px;\">\n      <ellipse cx=\"68\" cy=\"74\" rx=\"9\" ry=\"8\" fill=\"#1C1917\"/>\n      <circle cx=\"66\" cy=\"72\" r=\"2.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"70\" cy=\"76\" r=\"1.4\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"112\" cy=\"74\" rx=\"9\" ry=\"8\" fill=\"#1C1917\"/>\n      <circle cx=\"110\" cy=\"72\" r=\"2.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"114\" cy=\"76\" r=\"1.4\" fill=\"#FFFFFF\"/>\n    </g>\n    <ellipse cx=\"90\" cy=\"82\" rx=\"6\" ry=\"4.5\" fill=\"#1C1917\"/>\n    <ellipse cx=\"88.5\" cy=\"80.5\" rx=\"1.8\" ry=\"1.2\" fill=\"#FFFFFF\"/>\n    <path d=\"M 85 88 Q 90 92 95 88\" stroke=\"#1C1917\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 86 90 Q 90 98 94 90 Z\" fill=\"#F43F5E\"/>\n    <path d=\"M 68 106 Q 90 114 112 106\" stroke=\"url(#shiba-collar)\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(90, 114)\">\n      <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"url(#shiba-bell)\" stroke=\"#B45309\" stroke-width=\"1.2\"/>\n    </g>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Woof! Hachiko trung thành vẫy đuôi tít mù chào đón cô Nguyệt ạ! 🐕✨",
        "Cô Nguyệt là số 1 trong lòng Hachiko! Chúc cô buổi lên lớp ngập tràn niềm vui! 🌸"
      ],
      "feed": [
        "Ngoạm một miếng xúc xích bốc khói thơm nức mũi! Hachiko cảm ơn cô Nguyệt nhiều lắm! 🍖😋"
      ],
      "pet": [
        "Má Hachiko mềm như bánh bao nè, cô nắn bóp thoải mái nha cô Nguyệt ơi! 🥰"
      ],
      "hungry": [
        "Hachiko đói rồi cô ơi... Cô cho Hachiko xin cây xúc xích để nạp năng lượng canh gác nha! 🥺🍖"
      ]
    }
  },
  "poodle": {
    "id": "poodle",
    "species": "Cún Poodle Nâu",
    "defaultName": "Gấu Con",
    "foodIcon": "🦴",
    "foodName": "Bánh quy giòn",
    "description": "Bộ lông xoăn bồng bềnh như kẹo bông sô cô la, chiếc nơ lụa hồng và đôi mắt hạt cườm ngây thơ.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"poodle-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#A16207\"/><stop offset=\"50%\" stop-color=\"#854D0E\"/><stop offset=\"100%\" stop-color=\"#451A03\"/></linearGradient>\n    <linearGradient id=\"poodle-highlight\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#CA8A04\"/><stop offset=\"100%\" stop-color=\"#A16207\"/></linearGradient>\n    <linearGradient id=\"poodle-iris\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#1C1917\"/><stop offset=\"60%\" stop-color=\"#451A03\"/><stop offset=\"100%\" stop-color=\"#9A3412\"/></linearGradient>\n    <radialGradient id=\"poodle-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.55\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"poodle-bow\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#F472B6\"/><stop offset=\"100%\" stop-color=\"#DB2777\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#451A03\" opacity=\"0.15\"/>\n  <g class=\"pet-anim-tail\" style=\"transform-origin: 48px 145px;\">\n    <line x1=\"48\" y1=\"145\" x2=\"36\" y2=\"128\" stroke=\"#451A03\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <circle cx=\"34\" cy=\"124\" r=\"11\" fill=\"url(#poodle-highlight)\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <circle cx=\"33\" cy=\"122\" r=\"5\" fill=\"#FEF08A\" opacity=\"0.5\"/>\n  </g>\n  <g class=\"pet-hind-legs\">\n    <ellipse cx=\"44\" cy=\"150\" rx=\"18\" ry=\"14\" fill=\"url(#poodle-fur)\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <ellipse cx=\"40\" cy=\"162\" rx=\"11\" ry=\"7\" fill=\"url(#poodle-highlight)\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"136\" cy=\"150\" rx=\"18\" ry=\"14\" fill=\"url(#poodle-fur)\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <ellipse cx=\"140\" cy=\"162\" rx=\"11\" ry=\"7\" fill=\"url(#poodle-highlight)\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-solid-body\">\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 120 122 126 142 126 162 C 126 169 118 171 112 171 C 105 171 101 166 101 156 L 101 126 C 101 120 97 116 90 116 C 83 116 79 120 79 126 L 79 156 C 79 166 75 171 68 171 C 62 171 54 169 54 162 C 54 142 60 122 58 106 Z\" fill=\"url(#poodle-fur)\" stroke=\"#451A03\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <!-- Fluffy Chest Curls -->\n    <circle cx=\"76\" cy=\"116\" r=\"11\" fill=\"url(#poodle-highlight)\"/>\n    <circle cx=\"104\" cy=\"116\" r=\"11\" fill=\"url(#poodle-highlight)\"/>\n    <circle cx=\"90\" cy=\"126\" r=\"12\" fill=\"url(#poodle-highlight)\"/>\n    <!-- Front Paws with Curly Tufts -->\n    <path d=\"M 60 124 C 58 140 59 154 59 164 C 59 169 64 171 70 171 C 76 171 80 167 80 158 L 80 126\" fill=\"url(#poodle-highlight)\" stroke=\"#451A03\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M 120 124 C 122 140 121 154 121 164 C 121 169 116 171 110 171 C 104 171 100 167 100 158 L 100 126\" fill=\"url(#poodle-highlight)\" stroke=\"#451A03\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 65px;\">\n      <!-- Fluffy Cloud Ears -->\n      <path d=\"M 46 64 C 30 64 24 84 26 104 C 28 116 42 116 46 102 C 50 92 52 76 56 64 Z\" fill=\"url(#poodle-fur)\" stroke=\"#451A03\" stroke-width=\"2.2\"/>\n      <circle cx=\"34\" cy=\"98\" r=\"9\" fill=\"url(#poodle-highlight)\"/>\n      <circle cx=\"38\" cy=\"84\" r=\"8\" fill=\"url(#poodle-highlight)\"/>\n      <path d=\"M 134 64 C 150 64 156 84 154 104 C 152 116 138 116 134 102 C 130 92 128 76 124 64 Z\" fill=\"url(#poodle-fur)\" stroke=\"#451A03\" stroke-width=\"2.2\"/>\n      <circle cx=\"146\" cy=\"98\" r=\"9\" fill=\"url(#poodle-highlight)\"/>\n      <circle cx=\"142\" cy=\"84\" r=\"8\" fill=\"url(#poodle-highlight)\"/>\n    </g>\n    <!-- Head with Curly Crown -->\n    <path d=\"M 44 82 C 40 60 62 44 90 44 C 118 44 140 60 136 82 C 142 96 138 114 120 118 C 104 122 76 122 60 118 C 42 114 38 96 44 82 Z\" fill=\"url(#poodle-fur)\" stroke=\"#451A03\" stroke-width=\"2.2\"/>\n    <!-- Top Knot Fluff -->\n    <circle cx=\"74\" cy=\"46\" r=\"14\" fill=\"url(#poodle-highlight)\"/>\n    <circle cx=\"106\" cy=\"46\" r=\"14\" fill=\"url(#poodle-highlight)\"/>\n    <circle cx=\"90\" cy=\"40\" r=\"16\" fill=\"url(#poodle-highlight)\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <!-- Muzzle Fluff -->\n    <ellipse cx=\"90\" cy=\"88\" rx=\"20\" ry=\"16\" fill=\"url(#poodle-highlight)\"/>\n    <circle cx=\"56\" cy=\"88\" r=\"8\" fill=\"url(#poodle-blush)\"/>\n    <circle cx=\"124\" cy=\"88\" r=\"8\" fill=\"url(#poodle-blush)\"/>\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 74px;\">\n      <ellipse cx=\"68\" cy=\"74\" rx=\"9\" ry=\"10\" fill=\"#1C1917\"/>\n      <ellipse cx=\"68\" cy=\"75\" rx=\"7.5\" ry=\"8\" fill=\"url(#poodle-iris)\"/>\n      <circle cx=\"65.5\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"70.5\" cy=\"77\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"112\" cy=\"74\" rx=\"9\" ry=\"10\" fill=\"#1C1917\"/>\n      <ellipse cx=\"112\" cy=\"75\" rx=\"7.5\" ry=\"8\" fill=\"url(#poodle-iris)\"/>\n      <circle cx=\"109.5\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"114.5\" cy=\"77\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n    <!-- Shiny Button Nose -->\n    <ellipse cx=\"90\" cy=\"83\" rx=\"6\" ry=\"4.5\" fill=\"#1C1917\"/>\n    <ellipse cx=\"88.5\" cy=\"81.5\" rx=\"2\" ry=\"1.2\" fill=\"#FFFFFF\"/>\n    <path d=\"M 85 89 Q 90 92 95 89\" stroke=\"#1C1917\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    <!-- Cute Pink Ribbon on Crown -->\n    <g transform=\"translate(90, 42)\">\n      <path d=\"M 0 0 L -12 -5 C -15 0 -15 2 -12 6 Z\" fill=\"url(#poodle-bow)\"/>\n      <path d=\"M 0 0 L 12 -5 C 15 0 15 2 12 6 Z\" fill=\"url(#poodle-bow)\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"3\" fill=\"#FDF2F8\"/>\n    </g>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Gâu gâu! Poodle Gấu Con lông xoăn tít chào cô Nguyệt ạ! 🐩✨",
        "Bộ lông em mềm mại như kẹo bông, cô xoa đầu em trước khi dạy nha! 🥰"
      ],
      "feed": [
        "Rôm rốp~ Bánh quy giòn tan thơm bơ béo ngậy! Gấu Con cảm ơn cô Nguyệt nhiều lắm ạ! 🦴😋"
      ],
      "pet": [
        "Sướng mê ly cô ơi! Gấu Con cuộn tròn làm gấu bông của cô Nguyệt mãi thôi! ✨"
      ],
      "hungry": [
        "Gâu... Cô Nguyệt ơi, cho em xin mẩu bánh quy giòn để em vẫy đuôi cho cô xem nha! 🥺🦴"
      ]
    }
  },
  "bunny": {
    "id": "bunny",
    "species": "Thỏ Tai Cụp Mochi",
    "defaultName": "Mochi",
    "foodIcon": "🥕",
    "foodName": "Cà rốt giòn",
    "description": "Bé thỏ trắng muốt mềm như bông tuyết, đôi mắt ngọc ruby long lanh và đôi tai cụp thắt hoa hồng.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"bunny-white\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#F1F5F9\"/></linearGradient>\n    <linearGradient id=\"bunny-ruby\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#831843\"/><stop offset=\"45%\" stop-color=\"#BE185D\"/><stop offset=\"85%\" stop-color=\"#F472B6\"/><stop offset=\"100%\" stop-color=\"#FBCFE8\"/></linearGradient>\n    <radialGradient id=\"bunny-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"bunny-ear\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FCE7F3\"/><stop offset=\"100%\" stop-color=\"#FBCFE8\"/></linearGradient>\n    <linearGradient id=\"bunny-carrot\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FB923C\"/><stop offset=\"100%\" stop-color=\"#EA580C\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#64748B\" opacity=\"0.15\"/>\n  <g class=\"pet-anim-tail\" style=\"transform-origin: 48px 145px;\">\n    <circle cx=\"44\" cy=\"144\" r=\"11\" fill=\"url(#bunny-white)\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n  </g>\n  <g class=\"pet-hind-legs\">\n    <ellipse cx=\"44\" cy=\"150\" rx=\"18\" ry=\"14\" fill=\"url(#bunny-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\" transform=\"rotate(-10 44 150)\"/>\n    <ellipse cx=\"40\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"136\" cy=\"150\" rx=\"18\" ry=\"14\" fill=\"url(#bunny-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\" transform=\"rotate(10 136 150)\"/>\n    <ellipse cx=\"140\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-solid-body\">\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 120 122 126 142 126 162 C 126 169 118 171 112 171 C 105 171 101 166 101 156 L 101 126 C 101 120 97 116 90 116 C 83 116 79 120 79 126 L 79 156 C 79 166 75 171 68 171 C 62 171 54 169 54 162 C 54 142 60 122 58 106 Z\" fill=\"url(#bunny-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <!-- Holding Juicy Baby Carrot -->\n    <g transform=\"translate(80, 122)\">\n      <path d=\"M 10 2 L 20 22 C 21 24 17 26 15 24 L 2 6 Z\" fill=\"url(#bunny-carrot)\" stroke=\"#C2410C\" stroke-width=\"1.5\"/>\n      <path d=\"M 5 10 L 12 11 M 9 16 L 15 17\" stroke=\"#EA580C\" stroke-width=\"1.2\" stroke-linecap=\"round\"/>\n      <path d=\"M 4 4 L -4 -2 M 6 3 L 4 -5 M 8 5 L 12 -3\" stroke=\"#16A34A\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n    </g>\n    <!-- Front Paws holding carrot -->\n    <circle cx=\"80\" cy=\"130\" r=\"6\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n    <circle cx=\"102\" cy=\"132\" r=\"6\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 65px;\">\n      <!-- Floppy Long Ears -->\n      <path d=\"M 52 56 C 36 56 26 78 28 108 C 30 122 42 122 48 106 C 52 92 54 68 58 56 Z\" fill=\"url(#bunny-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n      <path d=\"M 38 72 C 34 84 36 106 42 106 C 45 96 46 80 48 72 Z\" fill=\"url(#bunny-ear)\"/>\n      <path d=\"M 128 56 C 144 56 154 78 152 108 C 150 122 138 122 132 106 C 128 92 126 68 122 56 Z\" fill=\"url(#bunny-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n      <path d=\"M 142 72 C 146 84 144 106 138 106 C 135 96 134 80 132 72 Z\" fill=\"url(#bunny-ear)\"/>\n    </g>\n    <path d=\"M 44 82 C 40 60 62 44 90 44 C 118 44 140 60 136 82 C 142 96 138 114 120 118 C 104 122 76 122 60 118 C 42 114 38 96 44 82 Z\" fill=\"url(#bunny-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n    <circle cx=\"56\" cy=\"88\" r=\"9\" fill=\"url(#bunny-blush)\"/>\n    <circle cx=\"124\" cy=\"88\" r=\"9\" fill=\"url(#bunny-blush)\"/>\n    <!-- Ruby Anime Eyes -->\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 76px;\">\n      <ellipse cx=\"68\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#4C0519\"/>\n      <ellipse cx=\"68\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#bunny-ruby)\"/>\n      <ellipse cx=\"68\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#831843\"/>\n      <ellipse cx=\"68\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#FBCFE8\" opacity=\"0.65\"/>\n      <circle cx=\"65\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"71\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"112\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#4C0519\"/>\n      <ellipse cx=\"112\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#bunny-ruby)\"/>\n      <ellipse cx=\"112\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#831843\"/>\n      <ellipse cx=\"112\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#FBCFE8\" opacity=\"0.65\"/>\n      <circle cx=\"109\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"115\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n    <!-- Nose and Mouth -->\n    <polygon points=\"88,83 92,83 90,86\" fill=\"#FB7185\"/>\n    <path d=\"M 90 86 L 90 89 M 86 91 Q 90 89 94 91\" stroke=\"#64748B\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <!-- Flower Hairpin on Ear -->\n    <g transform=\"translate(126, 52)\">\n      <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#FB7185\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"2.2\" fill=\"#FEF08A\"/>\n    </g>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Bé thỏ Mochi cúi chào cô Nguyệt ạ! Hôm nay trông cô tươi tắn như bông hoa xuân! 🐰🌸",
        "Hai tai cụp của em đung đưa chào cô nè, chúc cô buổi dạy học tuyệt vời nhất! ✨"
      ],
      "feed": [
        "Rộp rộp~ Cà rốt giòn ngọt mê ly luôn cô ơi! Cảm ơn cô Nguyệt nhiều ạ! 🥕😋"
      ],
      "pet": [
        "Ôi~ Lông em mềm mượt được bàn tay ấm áp của cô vuốt ve thì sướng thích mê luôn! 🐰✨"
      ],
      "hungry": [
        "Cô Nguyệt ơi... Em đói meo rồi nè, cho em xin củ cà rốt cam giòn ngọt nha cô! 🥺🥕"
      ]
    }
  },
  "panda": {
    "id": "panda",
    "species": "Gấu Trúc Bảo Bảo",
    "defaultName": "Bảo Bảo",
    "foodIcon": "🎋",
    "foodName": "Măng trúc tươi",
    "description": "Gấu trúc tròn xoe béo ú ôm măng trúc giòn rụm, quầng mắt đen lấp lánh và má hồng phúng phính.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"panda-white\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#F1F5F9\"/></linearGradient>\n    <linearGradient id=\"panda-dark\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"100%\" stop-color=\"#0F172A\"/></linearGradient>\n    <linearGradient id=\"panda-bamboo\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#4ADE80\"/><stop offset=\"50%\" stop-color=\"#22C55E\"/><stop offset=\"100%\" stop-color=\"#15803D\"/></linearGradient>\n    <radialGradient id=\"panda-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"panda-iris\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#1C1917\"/><stop offset=\"60%\" stop-color=\"#451A03\"/><stop offset=\"100%\" stop-color=\"#9A3412\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#0F172A\" opacity=\"0.15\"/>\n  <g class=\"pet-hind-legs\">\n    <ellipse cx=\"44\" cy=\"152\" rx=\"19\" ry=\"15\" fill=\"url(#panda-dark)\" stroke=\"#0F172A\" stroke-width=\"2.2\" transform=\"rotate(-10 44 152)\"/>\n    <ellipse cx=\"40\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"136\" cy=\"152\" rx=\"19\" ry=\"15\" fill=\"url(#panda-dark)\" stroke=\"#0F172A\" stroke-width=\"2.2\" transform=\"rotate(10 136 152)\"/>\n    <ellipse cx=\"140\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-solid-body\">\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 120 122 126 142 126 162 C 126 169 118 171 112 171 C 105 171 101 166 101 156 L 101 126 C 101 120 97 116 90 116 C 83 116 79 120 79 126 L 79 156 C 79 166 75 171 68 171 C 62 171 54 169 54 162 C 54 142 60 122 58 106 Z\" fill=\"url(#panda-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <!-- Panda Vest Shoulders -->\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 118 116 104 120 90 120 C 76 120 62 116 58 106 Z\" fill=\"url(#panda-dark)\"/>\n    <!-- Fresh Leafy Bamboo Stalk -->\n    <g transform=\"translate(94, 110)\">\n      <path d=\"M 4 0 L 8 46\" stroke=\"url(#panda-bamboo)\" stroke-width=\"6.5\" stroke-linecap=\"round\"/>\n      <path d=\"M 6 12 L 18 6 M 7 24 L 20 20 M 6 36 L 18 34\" stroke=\"#22C55E\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>\n      <ellipse cx=\"19\" cy=\"5\" rx=\"5\" ry=\"2.5\" fill=\"#4ADE80\" transform=\"rotate(-20 19 5)\"/>\n      <ellipse cx=\"21\" cy=\"19\" rx=\"5\" ry=\"2.5\" fill=\"#4ADE80\" transform=\"rotate(-15 21 19)\"/>\n    </g>\n    <!-- Front Paws Hugging Bamboo -->\n    <circle cx=\"78\" cy=\"132\" r=\"10\" fill=\"url(#panda-dark)\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"106\" cy=\"135\" r=\"10\" fill=\"url(#panda-dark)\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 65px;\">\n      <circle cx=\"48\" cy=\"46\" r=\"15\" fill=\"url(#panda-dark)\" stroke=\"#0F172A\" stroke-width=\"2.2\"/>\n      <circle cx=\"132\" cy=\"46\" r=\"15\" fill=\"url(#panda-dark)\" stroke=\"#0F172A\" stroke-width=\"2.2\"/>\n    </g>\n    <path d=\"M 44 82 C 40 60 62 44 90 44 C 118 44 140 60 136 82 C 142 96 138 114 120 118 C 104 122 76 122 60 118 C 42 114 38 96 44 82 Z\" fill=\"url(#panda-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n    <!-- Iconic Dark Teardrop Eye Patches -->\n    <ellipse cx=\"68\" cy=\"76\" rx=\"14\" ry=\"12\" fill=\"url(#panda-dark)\" transform=\"rotate(-15 68 76)\"/>\n    <ellipse cx=\"112\" cy=\"76\" rx=\"14\" ry=\"12\" fill=\"url(#panda-dark)\" transform=\"rotate(15 112 76)\"/>\n    <circle cx=\"54\" cy=\"90\" r=\"9\" fill=\"url(#panda-blush)\"/>\n    <circle cx=\"126\" cy=\"90\" r=\"9\" fill=\"url(#panda-blush)\"/>\n    <!-- Sparkling Anime Eyes inside patches -->\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 76px;\">\n      <ellipse cx=\"70\" cy=\"75\" rx=\"8\" ry=\"9\" fill=\"#1C1917\"/>\n      <ellipse cx=\"70\" cy=\"76\" rx=\"6.5\" ry=\"7\" fill=\"url(#panda-iris)\"/>\n      <circle cx=\"68\" cy=\"73\" r=\"2.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"72\" cy=\"78\" r=\"1.4\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"110\" cy=\"75\" rx=\"8\" ry=\"9\" fill=\"#1C1917\"/>\n      <ellipse cx=\"110\" cy=\"76\" rx=\"6.5\" ry=\"7\" fill=\"url(#panda-iris)\"/>\n      <circle cx=\"108\" cy=\"73\" r=\"2.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"112\" cy=\"78\" r=\"1.4\" fill=\"#FFFFFF\"/>\n    </g>\n    <ellipse cx=\"90\" cy=\"83\" rx=\"5.5\" ry=\"4\" fill=\"#0F172A\"/>\n    <path d=\"M 85 88 Q 90 91 95 88\" stroke=\"#0F172A\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Chào cô Nguyệt! Em vừa ngủ trưa dậy nè, thấy cô là em tỉnh cả ngủ! 🐼✨",
        "Gấu trúc Bảo Bảo đang ngồi khoanh chân đợi cô vào tiết dạy đây ạ! 🎋"
      ],
      "feed": [
        "Rôm rốp~ Cành trúc non thơm ngọt giòn tan luôn cô ơi! Cảm ơn cô Nguyệt! 🎋😋"
      ],
      "pet": [
        "Ôi~ Bàn tay cô Nguyệt ấm áp ghê! Em cuộn tròn cho cô xoa đầu nè! 🐼💕"
      ],
      "hungry": [
        "Cô Nguyệt ơi... Em đói bụng rồi, cô cho em xin vài nhánh trúc giòn nha! 🥺🎋"
      ]
    }
  },
  "duck": {
    "id": "duck",
    "species": "Vịt Vàng Chíp Chíp",
    "defaultName": "Chíp Chíp",
    "foodIcon": "🌾",
    "foodName": "Ngô ngọt vàng",
    "description": "Chú vịt con tròn ủng lông vàng óng, mầm cây non trên đầu và đôi cánh nhỏ vỗ rộn ràng.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"duck-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FEF08A\"/><stop offset=\"50%\" stop-color=\"#FACC15\"/><stop offset=\"100%\" stop-color=\"#EAB308\"/></linearGradient>\n    <linearGradient id=\"duck-belly\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FEF9C3\"/></linearGradient>\n    <linearGradient id=\"duck-beak\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FB923C\"/><stop offset=\"100%\" stop-color=\"#EA580C\"/></linearGradient>\n    <radialGradient id=\"duck-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"duck-sprout\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#4ADE80\"/><stop offset=\"100%\" stop-color=\"#16A34A\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#CA8A04\" opacity=\"0.15\"/>\n  <!-- Webbed Orange Feet -->\n  <ellipse cx=\"68\" cy=\"164\" rx=\"15\" ry=\"7\" fill=\"url(#duck-beak)\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n  <ellipse cx=\"112\" cy=\"164\" rx=\"15\" ry=\"7\" fill=\"url(#duck-beak)\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n  <g class=\"pet-solid-body\">\n    <ellipse cx=\"90\" cy=\"132\" rx=\"42\" ry=\"38\" fill=\"url(#duck-fur)\" stroke=\"#CA8A04\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"90\" cy=\"136\" rx=\"28\" ry=\"24\" fill=\"url(#duck-belly)\"/>\n  </g>\n  <!-- Animated Flapping Wings -->\n  <g class=\"pet-anim-wings-left\" style=\"transform-origin: 46px 125px;\">\n    <ellipse cx=\"46\" cy=\"125\" rx=\"11\" ry=\"20\" fill=\"url(#duck-fur)\" stroke=\"#CA8A04\" stroke-width=\"2\" transform=\"rotate(22 46 125)\"/>\n  </g>\n  <g class=\"pet-anim-wings-right\" style=\"transform-origin: 134px 125px;\">\n    <ellipse cx=\"134\" cy=\"125\" rx=\"11\" ry=\"20\" fill=\"url(#duck-fur)\" stroke=\"#CA8A04\" stroke-width=\"2\" transform=\"rotate(-22 134 125)\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <!-- Cute Clover Sprout on Head -->\n    <path d=\"M 90 40 C 90 26 80 24 76 20 C 82 32 88 32 90 40 Z\" fill=\"url(#duck-sprout)\"/>\n    <path d=\"M 90 40 C 90 26 100 24 104 20 C 98 32 92 32 90 40 Z\" fill=\"url(#duck-sprout)\"/>\n    <circle cx=\"90\" cy=\"40\" r=\"2.5\" fill=\"#16A34A\"/>\n    <!-- Head -->\n    <ellipse cx=\"90\" cy=\"76\" rx=\"42\" ry=\"38\" fill=\"url(#duck-fur)\" stroke=\"#CA8A04\" stroke-width=\"2.2\"/>\n    <circle cx=\"56\" cy=\"86\" r=\"9\" fill=\"url(#duck-blush)\"/>\n    <circle cx=\"124\" cy=\"86\" r=\"9\" fill=\"url(#duck-blush)\"/>\n    <!-- Big Sparkling Anime Eyes -->\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 72px;\">\n      <ellipse cx=\"70\" cy=\"72\" rx=\"9\" ry=\"10\" fill=\"#1E293B\"/>\n      <ellipse cx=\"70\" cy=\"73\" rx=\"7.5\" ry=\"8\" fill=\"#0F766E\"/>\n      <circle cx=\"67.5\" cy=\"69.5\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"72.5\" cy=\"75.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"110\" cy=\"72\" rx=\"9\" ry=\"10\" fill=\"#1E293B\"/>\n      <ellipse cx=\"110\" cy=\"73\" rx=\"7.5\" ry=\"8\" fill=\"#0F766E\"/>\n      <circle cx=\"107.5\" cy=\"69.5\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"112.5\" cy=\"75.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n    <!-- Smooth Coral-Orange Beak -->\n    <ellipse cx=\"90\" cy=\"82\" rx=\"17\" ry=\"10\" fill=\"url(#duck-beak)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <circle cx=\"85\" cy=\"80\" r=\"1.4\" fill=\"#9A3412\"/>\n    <circle cx=\"95\" cy=\"80\" r=\"1.4\" fill=\"#9A3412\"/>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Quạc quạc! Bé Vịt Chíp Chíp vỗ cánh chúc cô Nguyệt một ngày vui vẻ tràn đầy năng lượng! 🐥✨",
        "Mầm cây may mắn trên đầu em đang lắc lư đón cô nè! 🥰🌾"
      ],
      "feed": [
        "Chíp chíp~ Hạt bắp ngọt thơm vàng ươm ngon tuyệt cú mèo cô ơi! Cảm ơn cô Nguyệt! 🌽😋"
      ],
      "pet": [
        "Bộ lông tơ mịn màng của em được cô vuốt ve thì ấm áp không gì bằng luôn! 💕"
      ],
      "hungry": [
        "Quạc quạc... Em đói meo rồi cô ơi, cô cho Chíp Chíp xin chút bắp ngọt nha! 🥺🌽"
      ]
    }
  },
  "hamster": {
    "id": "hamster",
    "species": "Chuột Hamster Béo Kiki",
    "defaultName": "Kiki",
    "foodIcon": "🌻",
    "foodName": "Hạt hướng dương",
    "description": "Bé chuột béo ú má phúng phính ôm hạt hướng dương khổng lồ, hai tai hồng rung rinh siêu đáng yêu.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"ham-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FDE68A\"/><stop offset=\"50%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#D97706\"/></linearGradient>\n    <linearGradient id=\"ham-cream\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFFBEB\"/></linearGradient>\n    <radialGradient id=\"ham-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.65\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"ham-seed\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#4B5563\"/><stop offset=\"100%\" stop-color=\"#1F2937\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#B45309\" opacity=\"0.15\"/>\n  <ellipse cx=\"68\" cy=\"164\" rx=\"11\" ry=\"6\" fill=\"url(#ham-cream)\" stroke=\"#B45309\" stroke-width=\"1.8\"/>\n  <ellipse cx=\"112\" cy=\"164\" rx=\"11\" ry=\"6\" fill=\"url(#ham-cream)\" stroke=\"#B45309\" stroke-width=\"1.8\"/>\n  <g class=\"pet-solid-body\">\n    <ellipse cx=\"90\" cy=\"132\" rx=\"42\" ry=\"38\" fill=\"url(#ham-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"90\" cy=\"136\" rx=\"30\" ry=\"26\" fill=\"url(#ham-cream)\"/>\n    <!-- Giant Roasted Sunflower Seed -->\n    <g transform=\"translate(90, 128) rotate(-15)\">\n      <ellipse cx=\"0\" cy=\"0\" rx=\"11\" ry=\"17\" fill=\"url(#ham-seed)\" stroke=\"#111827\" stroke-width=\"1.8\"/>\n      <path d=\"M 0 -15 L 0 15\" stroke=\"#FBBF24\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <path d=\"M -5 -10 L -5 10 M 5 -10 L 5 10\" stroke=\"#9CA3AF\" stroke-width=\"1.2\" stroke-linecap=\"round\"/>\n    </g>\n    <!-- Tiny Front Paws Clutching Seed -->\n    <circle cx=\"78\" cy=\"126\" r=\"6\" fill=\"url(#ham-cream)\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <circle cx=\"102\" cy=\"130\" r=\"6\" fill=\"url(#ham-cream)\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 60px;\">\n      <circle cx=\"48\" cy=\"52\" r=\"14\" fill=\"url(#ham-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <circle cx=\"48\" cy=\"52\" r=\"8\" fill=\"#FCE7F3\"/>\n      <circle cx=\"132\" cy=\"52\" r=\"14\" fill=\"url(#ham-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <circle cx=\"132\" cy=\"52\" r=\"8\" fill=\"#FCE7F3\"/>\n    </g>\n    <!-- Extra Chubby Stuffed Cheeks -->\n    <ellipse cx=\"90\" cy=\"80\" rx=\"44\" ry=\"36\" fill=\"url(#ham-fur)\" stroke=\"#B45309\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"48\" cy=\"85\" rx=\"15\" ry=\"16\" fill=\"url(#ham-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"132\" cy=\"85\" rx=\"15\" ry=\"16\" fill=\"url(#ham-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"90\" cy=\"88\" rx=\"30\" ry=\"24\" fill=\"url(#ham-cream)\"/>\n    <circle cx=\"48\" cy=\"88\" r=\"10\" fill=\"url(#ham-blush)\"/>\n    <circle cx=\"132\" cy=\"88\" r=\"10\" fill=\"url(#ham-blush)\"/>\n    <!-- Big Sparkling Black Eyes -->\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 74px;\">\n      <circle cx=\"68\" cy=\"74\" r=\"6.5\" fill=\"#1C1917\"/>\n      <circle cx=\"66\" cy=\"71.5\" r=\"2.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"70\" cy=\"76\" r=\"1.4\" fill=\"#FFFFFF\"/>\n      <circle cx=\"112\" cy=\"74\" r=\"6.5\" fill=\"#1C1917\"/>\n      <circle cx=\"110\" cy=\"71.5\" r=\"2.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"114\" cy=\"76\" r=\"1.4\" fill=\"#FFFFFF\"/>\n    </g>\n    <polygon points=\"88,81 92,81 90,84\" fill=\"#F43F5E\"/>\n    <path d=\"M 86 86 Q 90 89 94 86\" stroke=\"#78350F\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\"/>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Chít chít! Bé Hamster Kiki má bánh bao ngậm đầy hạt chúc cô Nguyệt ngày mới rạng ngời! 🐹✨",
        "Cô Nguyệt ơi, xem hai cái má phúng phính của em này, cô véo nhẹ một cái lấy hên nha! 🥰"
      ],
      "feed": [
        "Tách tách rôm rốp~ Hạt hướng dương bùi béo giòn thơm ngon tuyệt cú mèo cô ơi! Cảm ơn cô! 🌻😋"
      ],
      "pet": [
        "Chít~ Em nằm ngoan trong lòng bàn tay cô Nguyệt nè, ấm áp và bình yên vô cùng! 💕"
      ],
      "hungry": [
        "Chít chít... Hai má em rỗng tuếch rồi cô ơi, cô thưởng cho Kiki hạt hướng dương nha! 🥺🌻"
      ]
    }
  },
  "fennec": {
    "id": "fennec",
    "species": "Cáo Tuyết Yuki",
    "defaultName": "Yuki",
    "foodIcon": "🍓",
    "foodName": "Dâu rừng ngọt",
    "description": "Bạch hồ ly tuyết quý phái, đôi tai to thông tuệ, mắt thạch anh tím huyền ảo và chiếc đuôi bồng bềnh.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"fox-snow\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#EEF2FF\"/></linearGradient>\n    <linearGradient id=\"fox-eye\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#4C1D95\"/><stop offset=\"45%\" stop-color=\"#7C3AED\"/><stop offset=\"85%\" stop-color=\"#A78BFA\"/><stop offset=\"100%\" stop-color=\"#DDD6FE\"/></linearGradient>\n    <radialGradient id=\"fox-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#F472B6\" stop-opacity=\"0.55\"/><stop offset=\"100%\" stop-color=\"#F472B6\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"fox-ear-inner\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#FBCFE8\"/><stop offset=\"100%\" stop-color=\"#FFFFFF\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#4338CA\" opacity=\"0.12\"/>\n  <!-- Grand Fluffy Fox Tail -->\n  <g class=\"pet-anim-tail\" style=\"transform-origin: 54px 156px;\">\n    <path d=\"M 54 152 C 28 132 10 92 28 66 C 40 54 58 64 52 82 C 44 100 46 122 56 152 Z\" fill=\"url(#fox-snow)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n    <path d=\"M 28 66 C 34 80 44 84 52 82 Z\" fill=\"#FBCFE8\"/>\n  </g>\n  <g class=\"pet-hind-legs\">\n    <ellipse cx=\"44\" cy=\"150\" rx=\"17\" ry=\"13\" fill=\"url(#fox-snow)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\" transform=\"rotate(-8 44 150)\"/>\n    <ellipse cx=\"40\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"136\" cy=\"150\" rx=\"17\" ry=\"13\" fill=\"url(#fox-snow)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\" transform=\"rotate(8 136 150)\"/>\n    <ellipse cx=\"140\" cy=\"162\" rx=\"10\" ry=\"6\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-solid-body\">\n    <path d=\"M 58 106 C 54 94 68 90 90 90 C 112 90 126 94 122 106 C 120 122 126 142 126 162 C 126 169 118 171 112 171 C 105 171 101 166 101 156 L 101 126 C 101 120 97 116 90 116 C 83 116 79 120 79 126 L 79 156 C 79 166 75 171 68 171 C 62 171 54 169 54 162 C 54 142 60 122 58 106 Z\" fill=\"url(#fox-snow)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <!-- Elegant White Fluffy Chest -->\n    <path d=\"M 74 100 C 66 114 62 136 90 136 C 118 136 114 114 106 100 Z\" fill=\"#FFFFFF\"/>\n    <path d=\"M 60 124 C 58 140 59 154 59 164 C 59 169 64 171 70 171 C 76 171 80 167 80 158 L 80 126\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M 120 124 C 122 140 121 154 121 164 C 121 169 116 171 110 171 C 104 171 100 167 100 158 L 100 126\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <!-- Huge Magnificent Arctic Fox Ears -->\n    <g class=\"pet-anim-ears\" style=\"transform-origin: 90px 65px;\">\n      <path d=\"M 52 64 L 18 14 C 36 18 58 38 66 54 Z\" fill=\"url(#fox-snow)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n      <path d=\"M 50 56 L 28 26 C 42 28 54 42 58 50 Z\" fill=\"url(#fox-ear-inner)\"/>\n      <path d=\"M 128 64 L 162 14 C 144 18 122 38 114 54 Z\" fill=\"url(#fox-snow)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n      <path d=\"M 130 56 L 152 26 C 138 28 126 42 122 50 Z\" fill=\"url(#fox-ear-inner)\"/>\n    </g>\n    <path d=\"M 44 82 C 40 60 62 44 90 44 C 118 44 140 60 136 82 C 142 96 138 114 120 118 C 104 122 76 122 60 118 C 42 114 38 96 44 82 Z\" fill=\"url(#fox-snow)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n    <circle cx=\"56\" cy=\"88\" r=\"9\" fill=\"url(#fox-blush)\"/>\n    <circle cx=\"124\" cy=\"88\" r=\"9\" fill=\"url(#fox-blush)\"/>\n    <!-- Enchanting Amethyst Jewel Anime Eyes -->\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 76px;\">\n      <ellipse cx=\"68\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#2E1065\"/>\n      <ellipse cx=\"68\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#fox-eye)\"/>\n      <ellipse cx=\"68\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#1E1B4B\"/>\n      <ellipse cx=\"68\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#DDD6FE\" opacity=\"0.7\"/>\n      <circle cx=\"65\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"71\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"112\" cy=\"74\" rx=\"10\" ry=\"11.5\" fill=\"#2E1065\"/>\n      <ellipse cx=\"112\" cy=\"75.5\" rx=\"8.5\" ry=\"9.5\" fill=\"url(#fox-eye)\"/>\n      <ellipse cx=\"112\" cy=\"74.5\" rx=\"5\" ry=\"6.5\" fill=\"#1E1B4B\"/>\n      <ellipse cx=\"112\" cy=\"78\" rx=\"6\" ry=\"3.5\" fill=\"#DDD6FE\" opacity=\"0.7\"/>\n      <circle cx=\"109\" cy=\"71\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"115\" cy=\"78\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n    <!-- Cute Fox Nose and Mouth -->\n    <polygon points=\"88,81 92,81 90,84\" fill=\"#1E1B4B\"/>\n    <path d=\"M 86 86 Q 90 89 94 86\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\"/>\n    <!-- Red Forehead Bindi Dot -->\n    <circle cx=\"90\" cy=\"56\" r=\"2.5\" fill=\"#DC2626\"/>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Yuki kính chào cô Nguyệt! Hôm nay một ngày tuyệt vời và tràn đầy may mắn đang chờ đón cô nè! 🦊✨",
        "Đôi tai tuyết của em nghe thấy tiếng học bài rôm rả hào hứng từ lớp cô rồi đó! 🥰"
      ],
      "feed": [
        "Dâu rừng chín mọng thơm ngọt mát lành ngon quá cô ơi! Yuki cảm ơn cô Nguyệt nhiều lắm! 🍓😋"
      ],
      "pet": [
        "Chiếc đuôi tuyết bồng bềnh của em quấn quýt lấy tay cô nè! Sướng mê ly luôn! 💖"
      ],
      "hungry": [
        "Cô Nguyệt ơi... Em đói meo rồi nè, cô cho Yuki xin vài quả dâu rừng đỏ mọng nha! 🥺🍓"
      ]
    }
  },
  "penguin": {
    "id": "penguin",
    "species": "Chim Cánh Cụt Pingu",
    "defaultName": "Pingu",
    "foodIcon": "🐟",
    "foodName": "Cá tuyết tươi",
    "description": "Bé cánh cụt hoàng đế mũm mĩm quàng khăn len đỏ ấm áp, đôi cánh vẫy rộn ràng và bước đi lạch bạch.",
    "svg": "<svg viewBox=\"0 0 180 200\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"pen-dark\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"50%\" stop-color=\"#1E293B\"/><stop offset=\"100%\" stop-color=\"#0F172A\"/></linearGradient>\n    <linearGradient id=\"pen-belly\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#F1F5F9\"/></linearGradient>\n    <linearGradient id=\"pen-scarf\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#EF4444\"/><stop offset=\"50%\" stop-color=\"#DC2626\"/><stop offset=\"100%\" stop-color=\"#991B1B\"/></linearGradient>\n    <radialGradient id=\"pen-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n    <linearGradient id=\"pen-beak\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FB923C\"/><stop offset=\"100%\" stop-color=\"#EA580C\"/></linearGradient>\n  </defs>\n  <ellipse cx=\"90\" cy=\"178\" rx=\"58\" ry=\"12\" fill=\"#0F172A\" opacity=\"0.15\"/>\n  <!-- Webbed Coral Feet -->\n  <ellipse cx=\"68\" cy=\"164\" rx=\"15\" ry=\"7\" fill=\"url(#pen-beak)\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n  <ellipse cx=\"112\" cy=\"164\" rx=\"15\" ry=\"7\" fill=\"url(#pen-beak)\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n  <g class=\"pet-solid-body\">\n    <ellipse cx=\"90\" cy=\"130\" rx=\"42\" ry=\"40\" fill=\"url(#pen-dark)\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <!-- Snow Heart Belly -->\n    <ellipse cx=\"90\" cy=\"134\" rx=\"30\" ry=\"30\" fill=\"url(#pen-belly)\"/>\n  </g>\n  <!-- Animated Flipper Wings -->\n  <g class=\"pet-anim-wings-left\" style=\"transform-origin: 44px 120px;\">\n    <ellipse cx=\"44\" cy=\"120\" rx=\"10\" ry=\"22\" fill=\"url(#pen-dark)\" stroke=\"#0F172A\" stroke-width=\"2\" transform=\"rotate(22 44 120)\"/>\n  </g>\n  <g class=\"pet-anim-wings-right\" style=\"transform-origin: 136px 120px;\">\n    <ellipse cx=\"136\" cy=\"120\" rx=\"10\" ry=\"22\" fill=\"url(#pen-dark)\" stroke=\"#0F172A\" stroke-width=\"2\" transform=\"rotate(-22 136 120)\"/>\n  </g>\n  <g class=\"pet-anim-head\">\n    <ellipse cx=\"90\" cy=\"80\" rx=\"40\" ry=\"36\" fill=\"url(#pen-dark)\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <!-- Cute White Mask Rings -->\n    <ellipse cx=\"72\" cy=\"78\" rx=\"15\" ry=\"17\" fill=\"url(#pen-belly)\"/>\n    <ellipse cx=\"108\" cy=\"78\" rx=\"15\" ry=\"17\" fill=\"url(#pen-belly)\"/>\n    <circle cx=\"56\" cy=\"88\" r=\"8\" fill=\"url(#pen-blush)\"/>\n    <circle cx=\"124\" cy=\"88\" r=\"8\" fill=\"url(#pen-blush)\"/>\n    <!-- Deep Navy Anime Eyes with Stars -->\n    <g class=\"pet-anim-eyes\" style=\"transform-origin: 90px 78px;\">\n      <ellipse cx=\"72\" cy=\"78\" rx=\"9\" ry=\"10\" fill=\"#0F172A\"/>\n      <ellipse cx=\"72\" cy=\"79\" rx=\"7\" ry=\"8\" fill=\"#1E3A8A\"/>\n      <circle cx=\"69.5\" cy=\"75\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"74.5\" cy=\"81\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"108\" cy=\"78\" rx=\"9\" ry=\"10\" fill=\"#0F172A\"/>\n      <ellipse cx=\"108\" cy=\"79\" rx=\"7\" ry=\"8\" fill=\"#1E3A8A\"/>\n      <circle cx=\"105.5\" cy=\"75\" r=\"3.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"110.5\" cy=\"81\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n    <!-- Smooth Beak -->\n    <polygon points=\"84,81 96,81 90,92\" fill=\"url(#pen-beak)\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n    <!-- Cozy Striped Knitted Winter Scarf -->\n    <path d=\"M 58 98 C 72 106 108 106 122 98 C 124 107 110 114 90 114 C 70 114 56 107 58 98 Z\" fill=\"url(#pen-scarf)\" stroke=\"#7F1D1D\" stroke-width=\"2\"/>\n    <path d=\"M 100 108 L 106 136 L 94 136 Z\" fill=\"url(#pen-scarf)\" stroke=\"#7F1D1D\" stroke-width=\"1.8\"/>\n    <!-- Scarf Golden Stripes -->\n    <line x1=\"74\" y1=\"102\" x2=\"74\" y2=\"108\" stroke=\"#FEF08A\" stroke-width=\"2\"/>\n    <line x1=\"88\" y1=\"105\" x2=\"88\" y2=\"112\" stroke=\"#FEF08A\" stroke-width=\"2\"/>\n    <line x1=\"104\" y1=\"103\" x2=\"104\" y2=\"109\" stroke=\"#FEF08A\" stroke-width=\"2\"/>\n    <line x1=\"96\" y1=\"126\" x2=\"104\" y2=\"126\" stroke=\"#FEF08A\" stroke-width=\"2\"/>\n  </g>\n</svg>",
    "quotes": {
      "greetings": [
        "Noot noot! Cánh cụt Pingu lạch bạch chạy ra đón cô Nguyệt đây ạ! 🐧❄️",
        "Khăn ấm đã quàng, bài vở đã sẵn sàng, chúc cô Nguyệt một tiết dạy đại thành công! ✨"
      ],
      "feed": [
        "Nham nham~ Cá tuyết tươi rói ngọt lịm từ biển băng! Pingu cảm ơn cô Nguyệt nhiều lắm! 🐟😋"
      ],
      "pet": [
        "Noot~ Được cô xoa đầu thì bao nhiêu giá lạnh băng tuyết đều tan biến hết! Ấm quá đi à! 💕"
      ],
      "hungry": [
        "Noot noot... Pingu đói meo rồi cô Nguyệt ơi, cho em xin chú cá tuyết béo nha! 🥺🐟"
      ]
    }
  }
};

// DOM References for Pet
const petStage = document.getElementById('pet-stage');
const petAvatarWrapper = document.getElementById('pet-avatar-wrapper');
const petFoodBowl = document.getElementById('pet-food-bowl');
const foodBowlCount = document.getElementById('food-bowl-count');
const petNameEl = document.getElementById('pet-name');
const petSpeciesEl = document.getElementById('pet-species-name');
const petLevelEl = document.getElementById('pet-level');
const petStreakEl = document.getElementById('pet-streak');
const petSpeechEl = document.getElementById('pet-speech');
const petHungerSegments = document.getElementById('pet-hunger-segments');
const petHappinessSegments = document.getElementById('pet-happiness-segments');
const petHungerText = document.getElementById('pet-hunger-text');
const petHappinessText = document.getElementById('pet-happiness-text');
const petMoodBadge = document.getElementById('pet-mood-badge');
const petFeedIcon = document.getElementById('pet-feed-icon');
const btnFeedPet = document.getElementById('btn-feed-pet');
const btnStrokePet = document.getElementById('btn-stroke-pet');
const btnOpenPetModal = document.getElementById('btn-open-pet-modal');
const petSelectionGrid = document.getElementById('pet-selection-grid');
const inputPetName = document.getElementById('input-pet-name');
const btnConfirmPet = document.getElementById('btn-confirm-pet');

let tempSelectedPetId = 'nana';

function ensurePetState(state) {
    if (!state) return false;
    const todayStr = new Date().toISOString().substring(0, 10);
    let changed = false;

    if (!state.pet) {
        state.pet = {
            id: 'nana',
            name: 'Na Na',
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

    // Migrate old 'cat' ID to 'nana'
    if (state.pet.id === 'cat') {
        state.pet.id = 'nana';
        if (state.pet.name === 'Miu Miu') state.pet.name = 'Na Na';
        changed = true;
    }

    if (!state.pet.id || !PET_DATA[state.pet.id]) { state.pet.id = 'nana'; changed = true; }
    if (!state.pet.name) { state.pet.name = 'Na Na'; changed = true; }
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
    const pet = appState.pet;

    if (petHungerText) petHungerText.textContent = `${pet.hunger}`;
    if (petHappinessText) petHappinessText.textContent = `${pet.happiness}`;
    if (petLevelEl) petLevelEl.textContent = pet.level || 1;
    if (petStreakEl) petStreakEl.textContent = pet.streak || 1;

    // Segmented Hunger bar (10 blocks)
    if (petHungerSegments) {
        petHungerSegments.innerHTML = '';
        const activeCount = Math.min(10, Math.max(0, Math.round(pet.hunger / 10)));
        for (let i = 0; i < 10; i++) {
            const block = document.createElement('div');
            block.className = `segment-block ${i < activeCount ? 'active-hunger' : ''}`;
            petHungerSegments.appendChild(block);
        }
    }

    // Segmented Happiness bar (10 blocks)
    if (petHappinessSegments) {
        petHappinessSegments.innerHTML = '';
        const activeCount = Math.min(10, Math.max(0, Math.round(pet.happiness / 10)));
        for (let i = 0; i < 10; i++) {
            const block = document.createElement('div');
            block.className = `segment-block ${i < activeCount ? 'active-happiness' : ''}`;
            petHappinessSegments.appendChild(block);
        }
    }

    // Mood badge
    if (petMoodBadge) {
        if (pet.hunger < 30) {
            petMoodBadge.textContent = 'Đang Đói Bụng 🥺';
            petMoodBadge.style.color = '#c05621';
            petMoodBadge.style.background = '#feebc8';
            petMoodBadge.style.borderColor = '#fbd38d';
        } else if (pet.happiness >= 80) {
            petMoodBadge.textContent = 'Rất Vui Vẻ 🥰';
            petMoodBadge.style.color = '#276749';
            petMoodBadge.style.background = '#c6f6d5';
            petMoodBadge.style.borderColor = '#9ae6b4';
        } else if (pet.happiness >= 50) {
            petMoodBadge.textContent = 'Thư Thái 🌸';
            petMoodBadge.style.color = '#2b6cb0';
            petMoodBadge.style.background = '#ebf8ff';
            petMoodBadge.style.borderColor = '#bee3f8';
        } else {
            petMoodBadge.textContent = 'Cần Vuốt Ve 💕';
            petMoodBadge.style.color = '#97266d';
            petMoodBadge.style.background = '#fed7e2';
            petMoodBadge.style.borderColor = '#fbb6ce';
        }
    }

    if (foodBowlCount) {
        foodBowlCount.textContent = pet.hunger;
    }
}

function renderPetView() {
    if (!petAvatarWrapper) return;
    ensurePetState(appState);

    const pet = appState.pet;
    const petData = PET_DATA[pet.id] || PET_DATA['nana'];
    const petPawMat = document.querySelector('.pet-paw-mat');

    if (petData.isAuthentic) {
        if (petPawMat) petPawMat.style.display = 'none';
        if (petFoodBowl) petFoodBowl.classList.add('authentic-mode');
        if (petStage) petStage.classList.add('authentic-stage');
        petAvatarWrapper.classList.add('authentic-mode');
        petAvatarWrapper.innerHTML = `<img src="${petData.idleGif}" class="authentic-stage-img" id="authentic-stage-img" alt="${petData.species}">`;
    } else {
        if (petPawMat) petPawMat.style.display = 'block';
        if (petFoodBowl) petFoodBowl.classList.remove('authentic-mode');
        if (petStage) petStage.classList.remove('authentic-stage');
        petAvatarWrapper.classList.remove('authentic-mode');
        petAvatarWrapper.innerHTML = petData.svg;
    }

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

function triggerAuthenticReaction(petData) {
    if (!petData.isAuthentic) return;
    const petImg = document.getElementById('authentic-stage-img');
    if (petImg && petData.lickGif) {
        petImg.src = petData.lickGif;
        if (window._petLickTimer) clearTimeout(window._petLickTimer);
        window._petLickTimer = setTimeout(() => {
            const currentPet = appState.pet;
            const currentData = PET_DATA[currentPet ? currentPet.id : 'nana'] || PET_DATA['nana'];
            if (currentData.isAuthentic) {
                const img = document.getElementById('authentic-stage-img');
                if (img) img.src = currentData.idleGif;
            }
        }, 2400);
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
    particle.style.bottom = '50px';
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
    void petAvatarWrapper.offsetWidth;
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
    const petData = PET_DATA[pet.id] || PET_DATA['nana'];

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
    triggerAuthenticReaction(petData);
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
    const petData = PET_DATA[pet.id] || PET_DATA['nana'];

    pet.happiness = Math.min(100, pet.happiness + 20);
    pet.lastPettedDate = new Date().toISOString();
    addPetExp(10);

    triggerPetAnimation('wiggling');
    triggerAuthenticReaction(petData);
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
    tempSelectedPetId = appState.pet.id || 'nana';

    if (inputPetName) {
        inputPetName.value = appState.pet.name || PET_DATA[tempSelectedPetId].defaultName;
    }

    petSelectionGrid.innerHTML = '';
    Object.values(PET_DATA).forEach(p => {
        const card = document.createElement('div');
        card.className = `pet-select-card ${p.id === tempSelectedPetId ? 'active' : ''}`;
        card.dataset.id = p.id;
        const avatarHtml = p.isAuthentic
            ? `<img src="${p.idleGif}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`
            : p.svg;
        card.innerHTML = `
            <div class="card-avatar">${avatarHtml}</div>
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
    const chosenPetData = PET_DATA[tempSelectedPetId] || PET_DATA['nana'];
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

if (petFoodBowl) {
    petFoodBowl.addEventListener('click', (e) => {
        e.stopPropagation();
        handleFeedPet();
    });
}

if (petStage) {
    petStage.addEventListener('click', (e) => {
        if (e.target.closest('#pet-food-bowl')) return;
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
