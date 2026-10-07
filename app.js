// State Management
let appState = {
    classes: [],
    selectedClassId: null,
    currentWeekIndex: 0,
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
        "Võ Thị Kim Nguyên", "Võ Hùng Sanh", "Trần Thị Thanh Thảo", "Đặng Thị Kim Thoa", 
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
    ]
};

function loadState() {
    const saved = localStorage.getItem('attendance_app_v2');
    if (saved) {
        appState = JSON.parse(saved);
    }
    
    let stateChanged = false;
    if (ensureAllSeedClassesExist(appState)) {
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
    localStorage.setItem('attendance_app_v2', JSON.stringify(appState));
    
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
    ["CB210", "CB211", "CB213", "B212", "CB219"].forEach(clsName => {
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
        thNote.innerHTML = `
            <button class="btn btn-primary btn-small w-100" onclick="openLessonDetails('${dateStr}', ${globalLessonNum})">
                <i class="fa-solid fa-pen-to-square"></i> Soạn & Thông Báo
            </button>
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
btnCloseModals.forEach(btn => {
    btn.addEventListener('click', () => {
        addClassModal.classList.remove('active');
        manageStudentsModal.classList.remove('active');
        announcementModal.classList.remove('active');
        lessonDetailsModal.classList.remove('active');
    });
});

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
                appState = cloudData;
                const addedSeeds = ensureAllSeedClassesExist(appState);
                const migrated = ensureClassScheduleMigrations(appState);
                localStorage.setItem('attendance_app_v2', JSON.stringify(appState));
                if (addedSeeds || migrated) {
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

// Generate Announcement Logic
window.openLessonDetails = function(dateStr, globalLessonNum) {
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
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
    
    lessonDetailsModal.classList.add('active');
};

document.getElementById('btn-generate-structured').addEventListener('click', () => {
    const dateStr = document.getElementById('ld-date').value;
    const globalLessonNum = document.getElementById('ld-lesson-num').value;
    
    const classObj = appState.classes.find(c => c.id === appState.selectedClassId);
    const record = classObj.attendance[dateStr];
    
    const topic = document.getElementById('ld-topic').value.trim();
    const content = document.getElementById('ld-content').value.trim();
    const homework = document.getElementById('ld-homework').value.trim();
    const note = document.getElementById('ld-note').value.trim();
    const next = document.getElementById('ld-next').value.trim();
    
    // Save details
    record.details = { topic, content, homework, note, next };
    saveState();
    
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

document.addEventListener('DOMContentLoaded', init);
