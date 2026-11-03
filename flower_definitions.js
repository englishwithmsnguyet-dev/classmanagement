/**
 * LUCKY CLOVER GARDEN DEFINITIONS ("CHẬU CỎ 4 LÁ MAY MẮN CỦA CÔ NGUYỆT")
 * Dedicated exclusively to Cỏ 4 Lá May Mắn (Trifolium repens 🍀).
 * VSTEP Mastery Edition:
 * - Lifelike Painterly Botanical Illustrations (Stage 1..4)
 * - VSTEP 4-Skills Exam Motivation Cards (Listening, Reading, Writing, Speaking)
 * - VSTEP Standard Question Bank (B1 - B2 - C1 theo Khung Năng Lực Ngoại Ngữ 6 Bậc)
 */
(function(root) {
  'use strict';

  const FLOWER_CATALOG = {
    "clover": {
      "id": "clover",
      "name": "Cỏ 4 Lá May Mắn VSTEP",
      "scientific": "Trifolium repens",
      "icon": "🍀",
      "rarity": "Thần kỳ",
      "color": "#10B981",
      "accentColor": "#059669",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(254, 240, 138, 0.55) 0%, rgba(52, 211, 153, 0.24) 45%, transparent 76%)",
      "meaning": "May mắn ngập tràn, niềm tin, hy vọng và tình yêu vĩnh cửu. Món quà diệu kỳ tiếp lửa cho học viên chinh phục chứng chỉ VSTEP B1-B2-C1 cùng cô Nguyệt!",
      "quote": "Bé cỏ 4 lá mang đến vạn sự may mắn và mọi điều ước thành hiện thực cho cô Nguyệt! 🍀🌟",
      "growthDifficulty": "Hiếm có"
    }
  };

  /**
   * KHO CÂU TRUYỀN CẢM HỨNG BILINGUAL DÀNH CHO "THÔNG TIN CỦA NGÀY HÔM NAY"
   * Tiếng Anh + Bản dịch tiếng Việt (in nghiêng) + "From Miss Nguyet with LOVE ❤️"
   */
  const DAILY_INSPIRATION_QUOTES = [
    {
      id: "quote-1",
      english: "The expert in anything was once a beginner.",
      vietnamese: "Người chuyên gia trong bất kỳ lĩnh vực nào cũng từng là một người mới bắt đầu.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-2",
      english: "Small daily improvements over time lead to stunning results.",
      vietnamese: "Những tiến bộ nhỏ mỗi ngày theo thời gian sẽ tạo nên kết quả đáng kinh ngạc.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-3",
      english: "Believe you can and you're halfway there.",
      vietnamese: "Hãy tin rằng bạn có thể làm được, và bạn đã đi được nửa chặng đường rồi.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-4",
      english: "It does not matter how slowly you go as long as you do not stop.",
      vietnamese: "Không quan trọng bạn đi chậm thế nào, miễn là bạn không dừng lại.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-5",
      english: "Your only limit is you. Push yourself, because no one else is going to do it for you.",
      vietnamese: "Giới hạn duy nhất chính là bản thân bạn. Hãy nỗ lực hết mình, vì không ai có thể cố gắng thay bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-6",
      english: "Every accomplishment starts with the decision to try.",
      vietnamese: "Mọi thành tựu vĩ đại đều bắt đầu từ quyết định dám thử sức.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-7",
      english: "Don't watch the clock; do what it does. Keep going.",
      vietnamese: "Đừng nhìn kim đồng hồ; hãy làm như nó đang làm: không ngừng tiến về phía trước.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-8",
      english: "Success is the sum of small efforts, repeated day in and day out.",
      vietnamese: "Thành công là tổng của những nỗ lực nhỏ bé, được lặp đi lặp lại ngày này qua ngày khác.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-9",
      english: "The future belongs to those who believe in the beauty of their dreams.",
      vietnamese: "Tương lai thuộc về những ai vững tin vào vẻ đẹp của ước mơ mình.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-10",
      english: "Mistakes are proof that you are trying and learning.",
      vietnamese: "Những sai sót chính là bằng chứng cho thấy bạn đang nỗ lực và không ngừng học hỏi.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-11",
      english: "You don't have to be great to start, but you have to start to be great.",
      vietnamese: "Bạn không cần phải xuất chúng để bắt đầu, nhưng bạn phải bắt đầu để trở nên xuất chúng.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-12",
      english: "Difficult roads often lead to beautiful destinations.",
      vietnamese: "Những con đường gian nan thường dẫn đến những đích đến tuyệt đẹp.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-13",
      english: "Learning English is a journey of patience, passion, and pride.",
      vietnamese: "Học tiếng Anh là một hành trình của sự kiên nhẫn, niềm đam mê và lòng tự hào.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-14",
      english: "Stay positive, work hard, and make it happen.",
      vietnamese: "Hãy luôn lạc quan, chăm chỉ và biến ước mơ thành hiện thực.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-15",
      english: "One word, one phrase, one sentence a day will change your future.",
      vietnamese: "Mỗi ngày một từ, một cụm từ, một câu nói sẽ thay đổi cả tương lai của bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-16",
      english: "Courage is not the absence of fear, but the triumph over it.",
      vietnamese: "Dũng cảm không phải là không sợ hãi, mà là chiến thắng nỗi sợ ấy.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-17",
      english: "Study hard today so tomorrow you can live the life you dream of.",
      vietnamese: "Hãy miệt mài học tập hôm nay để ngày mai được sống cuộc đời mà bạn hằng mơ ước.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-18",
      english: "Trust the process. Your hard work will never betray you.",
      vietnamese: "Hãy tin tưởng vào hành trình. Sự chăm chỉ của bạn không bao giờ phản bội bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-19",
      english: "Wake up with determination, go to bed with satisfaction.",
      vietnamese: "Thức dậy với lòng quyết tâm, và đi ngủ với niềm mãn nguyện.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-20",
      english: "A winner is a dreamer who never gives up.",
      vietnamese: "Người chiến thắng là một kẻ mộng mơ không bao giờ từ bỏ.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-21",
      english: "Hard work beats talent when talent doesn't work hard.",
      vietnamese: "Sự chăm chỉ sẽ đánh bại tài năng khi tài năng không chịu nỗ lực.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-22",
      english: "Your mind is a powerful thing. When you fill it with positive thoughts, your life will change.",
      vietnamese: "Tâm trí bạn là một sức mạnh phi thường. Khi lấp đầy nó bằng những suy nghĩ tích cực, cuộc sống của bạn sẽ đổi thay.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-23",
      english: "Great things never come from comfort zones.",
      vietnamese: "Những điều tuyệt vời không bao giờ đến từ vùng an toàn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-24",
      english: "The best way to predict your future is to create it.",
      vietnamese: "Cách tốt nhất để dự đoán tương lai là tự tay kiến tạo nên nó.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-25",
      english: "Be proud of how far you have come, and have faith in how far you can go.",
      vietnamese: "Hãy tự hào về chặng đường bạn đã đi qua, và tin tưởng vào chặng đường bạn có thể vươn tới.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-26",
      english: "Success doesn't come to you, you go to it.",
      vietnamese: "Thành công không tự tìm đến bạn, chính bạn phải bước tới để chinh phục nó.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-27",
      english: "Consistency is what transforms average into excellence.",
      vietnamese: "Sự kiên trì đều đặn chính là điều biến sự bình thường thành phi thường.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-28",
      english: "You are capable of more than you know. Strive to be the best version of yourself.",
      vietnamese: "Bạn có thể làm được nhiều hơn những gì bạn nghĩ. Hãy nỗ lực để trở thành phiên bản tốt nhất của chính mình.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-29",
      english: "Keep your face always toward the sunshine, and shadows will fall behind you.",
      vietnamese: "Hãy luôn hướng về phía ánh mặt trời, và bóng tối sẽ ngả lại phía sau lưng bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-30",
      english: "Doubt kills more dreams than failure ever will.",
      vietnamese: "Sự nghi ngờ giết chết nhiều ước mơ hơn bất kỳ thất bại nào từng làm.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-31",
      english: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      vietnamese: "Học tập là tấm hộ chiếu cho tương lai, bởi ngày mai thuộc về những ai chuẩn bị cho nó ngay từ hôm nay.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-32",
      english: "Every morning is a fresh start to write a brilliant chapter in your learning journey.",
      vietnamese: "Mỗi buổi sáng là một khởi đầu mới mẻ để viết nên một chương rực rỡ trong hành trình học tập của bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    }
  ];

  /**
   * Thuật toán lấy ngẫu nhiên KHÔNG TRÙNG LẶP (Non-repeating Shuffle Deck)
   * Sử dụng localStorage để ghi nhớ các câu đã xem, lặp lại chu kỳ mới khi đã xem hết 100%.
   */
  const DAILY_QUOTES_STORAGE_KEY = 'miss_nguyet_daily_quotes_seen_v1';

  function getRandomNonRepeatingQuote() {
    const quotes = DAILY_INSPIRATION_QUOTES;
    if (!quotes || quotes.length === 0) return null;

    let seenIds = [];
    try {
      const saved = localStorage.getItem(DAILY_QUOTES_STORAGE_KEY);
      if (saved) {
        seenIds = JSON.parse(saved);
        if (!Array.isArray(seenIds)) seenIds = [];
      }
    } catch (e) {
      seenIds = [];
    }

    // Lọc các câu chưa xem
    let available = quotes.filter(q => !seenIds.includes(q.id));

    // Nếu đã xem hết toàn bộ, làm mới danh sách nhưng giữ lại câu vừa xem gần nhất để không bị lặp liên tiếp
    if (available.length === 0) {
      const lastSeenId = seenIds[seenIds.length - 1];
      seenIds = lastSeenId ? [lastSeenId] : [];
      available = quotes.filter(q => !seenIds.includes(q.id));
      if (available.length === 0) available = quotes;
    }

    // Chọn ngẫu nhiên từ kho câu chưa xem
    const randomIndex = Math.floor(Math.random() * available.length);
    const chosen = available[randomIndex];

    // Ghi nhớ câu đã xem
    seenIds.push(chosen.id);
    try {
      localStorage.setItem(DAILY_QUOTES_STORAGE_KEY, JSON.stringify(seenIds));
    } catch (e) {}

    return chosen;
  }

  /**
   * Kho thông điệp truyền động lực ôn thi bám sát kỳ thi VSTEP (Listening, Reading, Writing, Speaking)
   */
  const EXAM_MOTIVATION_QUOTES = [
    {
      id: "vstep-q-1",
      tag: "VSTEP Reading (Đọc Hiểu)",
      title: "60 Phút Bền Bỉ — Không Bỏ Sót Từ Khóa",
      content: "4 bài đọc VSTEP với 40 câu hỏi là thử thách lớn về sức bền. Đừng hoảng sợ trước bài đọc dài hay nhiều từ mới chuyên ngành! Hãy áp dụng triệt để kỹ năng Skimming & Scanning, định vị từ khóa và đọc kỹ câu trước/sau câu hỏi.",
      advice: "Mẹo VSTEP: Phân bổ 15 phút cho mỗi bài đọc. Nếu gặp câu hỏi suy luận khó, hãy tạm đánh dấu và quay lại sau khi đã làm hết các câu hỏi chi tiết!"
    },
    {
      id: "vstep-q-2",
      tag: "VSTEP Listening (Kỹ Năng Nghe)",
      title: "Bình Tĩnh Bắt Nhịp — Lỡ Một Câu Không Buông Cả Bài",
      content: "3 phần thi Nghe VSTEP diễn ra liên tục trong khoảng 40 phút. Nếu vô tình lỡ mất một thông tin, hãy dũng cảm chọn đáp án khả dĩ nhất và hướng ngay sự tập trung sang câu kế tiếp. Tuyệt đối không để cảm giác tiếc nuối làm đứt mạch nghe!",
      advice: "Mẹo VSTEP: Luôn tận dụng thời gian nghỉ giữa các phần để đọc trước câu hỏi và gạch chân các từ khóa cốt lõi (keywords)."
    },
    {
      id: "vstep-q-3",
      tag: "VSTEP Writing (Viết Luận & Thư)",
      title: "Bố Cục Rõ Ràng — Cấu Trúc Đa Dạng Ghi Điểm",
      content: "Viết VSTEP gồm Task 1 (Thư 120 từ - 20 phút) và Task 2 (Luận 250 từ - 40 phút). Bố cục 4 đoạn mạch lạc, liên từ chuyển ý mượt mà (Furthermore, On the other hand, Consequently) và 1-2 câu phức hoặc đảo ngữ sẽ giúp em bứt phá điểm số B2/C1!",
      advice: "Mẹo VSTEP: Luôn dành 3 phút lập dàn ý trước khi viết và 3 phút cuối để kiểm tra lỗi chính tả, chia động từ và số ít/số nhiều."
    },
    {
      id: "vstep-q-4",
      tag: "VSTEP Speaking (Kỹ Năng Nói)",
      title: "Tự Tin Trước Microphone — Phát Âm Rõ Ràng",
      content: "Thi Nói VSTEP trên máy tính đòi hỏi em phải làm chủ thời gian: Part 1 tương tác tự nhiên, Part 2 cân nhắc 3 lựa chọn và giải thích rõ vì sao chọn/bỏ, Part 3 phát triển chủ đề mạch lạc. Đừng lo lắng về ngữ điệu bản xứ, quan trọng nhất là phát âm rõ ràng, nói đủ ý và không ngập ngừng quá lâu!",
      advice: "Mẹo VSTEP: Nếu cần 2 giây suy nghĩ, hãy dùng filler tự nhiên: 'That's a thought-provoking question, let me consider...' thay vì im lặng."
    },
    {
      id: "vstep-q-5",
      tag: "Chiến Lược Toàn Diện",
      title: "Mục Tiêu B1, B2 hay C1 Đều Bắt Đầu Từ Hôm Nay",
      content: "Mỗi đề VSTEP em giải quyết hôm nay, mỗi bài tập nghe và viết em hoàn thành đều là một viên gạch vững chắc đưa em đến gần hơn với tấm bằng chứng chỉ mong ước. Cô Nguyệt luôn đồng hành, chấm chữa bài và tiếp thêm dũng khí cho em!",
      advice: "Mẹo VSTEP: Giữ thói quen luyện đề đúng áp lực thời gian thực ít nhất 2 lần/tuần trước ngày thi."
    },
    {
      id: "vstep-q-6",
      tag: "Bản Lĩnh Vượt Khó",
      title: "Áp Lực Tạo Nên Kim Cương",
      content: "Áp lực thi cử là hòn đá mài giũa bản lĩnh. Kỳ thi này không chỉ là một bài kiểm tra kiến thức, mà là cơ hội tuyệt vời để em chứng minh mình đã dũng cảm, kiên cường và trưởng thành đến nhường nào!",
      advice: "Mẹo VSTEP: Khi thấy căng thẳng, hãy hít thở sâu 3 nhịp và nhắc nhở bản thân: 'Mình đã chuẩn bị rất kỹ, mình hoàn toàn làm được!'"
    },
    {
      id: "vstep-q-7",
      tag: "Tâm Lý Phòng Thi",
      title: "Giữ Vững Bình Tĩnh — Tự Tin Tỏa Sáng",
      content: "Khi bước vào phòng thi VSTEP, hãy mỉm cười và tự nhủ: 'Mình đã nỗ lực hết sức suốt thời gian qua'. Sự tự tin và bình tĩnh sẽ giúp não bộ hoạt động tối ưu nhất, giúp em nhớ lại toàn bộ từ vựng và cấu trúc mà cô Nguyệt đã hướng dẫn!",
      advice: "Mẹo VSTEP: Ngủ đủ giấc đêm trước ngày thi, ăn nhẹ và đến phòng thi sớm 30 phút để tâm lý thật thoải mái."
    },
    {
      id: "vstep-q-8",
      tag: "Từ Vựng Học Thuật",
      title: "Mở Rộng Vốn Từ — Chìa Khóa Nâng Band",
      content: "Từ vựng học thuật (Academic Word List) chính là xương sống của cả 4 kỹ năng VSTEP. Nắm chắc collocations và các cặp từ đồng nghĩa/trái nghĩa sẽ giúp em đọc hiểu nhanh gấp đôi và viết luận sâu sắc hơn rất nhiều!",
      advice: "Mẹo VSTEP: Học từ vựng theo cụm (collocations) và ngữ cảnh câu, tránh học từ đơn lẻ."
    }
  ];

  /**
   * Ngân hàng câu hỏi trắc nghiệm tiếng Anh CHUẨN ĐỊNH DẠNG VSTEP (B1 - B2 - C1)
   * Bao quát đầy đủ 4 kỹ năng: Reading, Listening, Writing, Speaking & Grammar/Lexical Resource
   */
  const EXAM_QUIZ_QUESTIONS = [
    // --- 1. VSTEP READING ---
    {
      id: "vstep-read-1",
      skill: "Reading",
      level: "B2-C1",
      topic: "VSTEP Reading — Từ Đồng Nghĩa Học Thuật",
      question: "In VSTEP academic texts, which word is CLOSEST in meaning to 'UBIQUITOUS'?",
      options: ["Omnipresent / Found everywhere", "Hazardous and toxic", "Rare and precious", "Temporary"],
      answer: 0,
      explain: "'Ubiquitous' = có mặt ở khắp mọi nơi (= omnipresent / found everywhere). Đây là từ vựng học thuật B2-C1 rất hay gặp trong bài đọc chủ đề công nghệ, truyền thông và đời sống."
    },
    {
      id: "vstep-read-2",
      skill: "Reading",
      level: "B1-B2",
      topic: "VSTEP Reading — Ngữ Cảnh Kinh Tế & Xã Hội",
      question: "Choose the word CLOSEST in meaning to 'ALLEVIATE' in: 'The initiative was launched to alleviate traffic congestion.'",
      options: ["Relieve / Reduce", "Worsen", "Investigate", "Prohibit"],
      answer: 0,
      explain: "'Alleviate' = làm dịu, làm giảm bớt (= reduce / relieve / ease). Rất phổ biến trong bài đọc VSTEP chủ đề môi trường, y tế và giao thông."
    },
    {
      id: "vstep-read-3",
      skill: "Reading",
      level: "B2-C1",
      topic: "VSTEP Reading — Từ Trái Nghĩa (Antonym)",
      question: "Which word is OPPOSITE in meaning to 'DETRIMENTAL' in 'detrimental consequences for biodiversity'?",
      options: ["Beneficial", "Catastrophic", "Damaging", "Irreversible"],
      answer: 0,
      explain: "'Detrimental' = gây hại (= harmful). Trái nghĩa của nó là 'beneficial' (có lợi, bổ ích)."
    },
    {
      id: "vstep-read-4",
      skill: "Reading",
      level: "B2",
      topic: "VSTEP Reading — Kỹ Năng Đoán Nghĩa Từ Mới",
      question: "In a VSTEP reading passage, the word 'DISMANTLE' in 'dismantle the outdated factory' most likely means:",
      options: ["Take apart / Disassemble", "Renovate and repaint", "Purchase and sell", "Expand and enlarge"],
      answer: 0,
      explain: "'Dismantle' = tháo dỡ, dẹp bỏ các bộ phận của một cỗ máy, công trình hoặc hệ thống (= take apart)."
    },

    // --- 2. VSTEP LISTENING ---
    {
      id: "vstep-lis-1",
      skill: "Listening",
      level: "B1-B2",
      topic: "VSTEP Listening Part 1 — Nhận Diện Ngụ Ý Hội Thoại",
      question: "In VSTEP Listening Part 1, when a speaker replies: 'I wouldn't say no to a cup of coffee', what do they mean?",
      options: ["They gladly accept the offer", "They politely refuse the coffee", "They dislike hot drinks", "They want to sleep"],
      answer: 0,
      explain: "'I wouldn't say no to...' là cách nói thành ngữ mang nghĩa đồng ý và sẵn lòng đón nhận lời mời (= I'd love to have one). Đây là bẫy nghe rất hay gặp!"
    },
    {
      id: "vstep-lis-2",
      skill: "Listening",
      level: "B2",
      topic: "VSTEP Listening Part 2 — Thông Báo & Chỉ Dẫn",
      question: "Which signal phrase in VSTEP Listening Part 2 announcements indicates a change or cancellation of flight/train schedule?",
      options: ["Due to unforeseen circumstances", "As scheduled on your boarding pass", "In accordance with standard policy", "Without further ado"],
      answer: 0,
      explain: "'Due to unforeseen circumstances' (= Do tình huống bất ngờ / bất khả kháng) là cụm từ người thông báo dùng để giải thích lý do hoãn hoặc hủy chuyến."
    },
    {
      id: "vstep-lis-3",
      skill: "Listening",
      level: "B2-C1",
      topic: "VSTEP Listening Part 3 — Bài Giảng Học Thuật (Lecture)",
      question: "During a VSTEP Part 3 academic lecture, when the professor says 'THAT BEING SAID, ...', what is coming next?",
      options: ["A contrasting point or qualification", "A repetition of the previous point", "A joke for entertainment", "The end of the lecture"],
      answer: 0,
      explain: "'That being said' (= Dù là như vậy, tuy nhiên) là từ nối chuyển ý mang tính nhượng bộ/đối lập, báo hiệu luận điểm sau có sự khác biệt so với nhận định vừa nêu."
    },

    // --- 3. VSTEP WRITING ---
    {
      id: "vstep-wri-1",
      skill: "Writing",
      level: "B1-B2",
      topic: "VSTEP Writing Task 1 — Quy Chuẩn Viết Thư Trang Trọng",
      question: "When writing a formal letter in VSTEP Task 1 starting with 'Dear Sir or Madam', which closing salutation is correct?",
      options: ["Yours faithfully,", "Yours sincerely,", "Best regards,", "Cheers,"],
      answer: 0,
      explain: "Quy chuẩn thư tín VSTEP: Nếu không biết tên người nhận (Dear Sir or Madam) -> kết thư bằng 'Yours faithfully,'. Nếu biết tên (Dear Mr. White) -> kết bằng 'Yours sincerely,'."
    },
    {
      id: "vstep-wri-2",
      skill: "Writing",
      level: "B2-C1",
      topic: "VSTEP Writing Task 2 — Liên Từ Chuyển Ý (Transitional Linkers)",
      question: "Which linker is best used to introduce a strong contrasting argument in VSTEP Essay Task 2?",
      options: ["On the contrary, / Conversely,", "Furthermore,", "Likewise,", "In addition to,"],
      answer: 0,
      explain: "'Conversely,' hoặc 'On the contrary,' dùng để đưa ra luận điểm trái ngược một cách trang trọng, giúp nâng điểm tiêu chí Coherence & Cohesion."
    },
    {
      id: "vstep-wri-3",
      skill: "Writing",
      level: "C1",
      topic: "VSTEP Writing Task 2 — Cấu Trúc Đảo Ngữ Nâng Band",
      question: "Choose the grammatically correct inversion structure to boost your Grammar score in VSTEP Writing Task 2:",
      options: [
        "Only by implementing strict laws can we protect the environment.",
        "Only by implementing strict laws we can protect the environment.",
        "Only by implementing strict laws can protect we the environment.",
        "We can only by implementing strict laws protect the environment."
      ],
      answer: 0,
      explain: "Cấu trúc đảo ngữ: 'Only by + V-ing + Modal verb (can) + S + V-bare'. Đây là cấu trúc ngữ pháp đắt giá được giám khảo VSTEP đánh giá rất cao ở thang điểm B2-C1!"
    },
    {
      id: "vstep-wri-4",
      skill: "Writing",
      level: "B2-C1",
      topic: "VSTEP Writing Task 2 — Collocation Học Thuật",
      question: "Complete the academic collocation: 'Renewable energy should ______ priority over fossil fuels.'",
      options: ["take", "give", "make", "bring"],
      answer: 0,
      explain: "Cụm collocation chuẩn: 'take priority over something' (= được ưu tiên hàng đầu hơn cái gì)."
    },

    // --- 4. VSTEP SPEAKING ---
    {
      id: "vstep-spk-1",
      skill: "Speaking",
      level: "B2-C1",
      topic: "VSTEP Speaking Part 2 — Thảo Luận Giải Pháp (Solution Discussion)",
      question: "In VSTEP Speaking Part 2, which introductory sentence best states your choice among the 3 provided options?",
      options: [
        "Weighing all three options, I firmly believe that option A is the most viable solution.",
        "I like option A because it is good.",
        "Option A is my answer, thank you.",
        "All three options are okay, I don't care."
      ],
      answer: 0,
      explain: "'Weighing all three options, I firmly believe that... is the most viable solution' thể hiện năng lực so sánh đa chiều và vốn từ phong phú đạt chuẩn B2-C1."
    },
    {
      id: "vstep-spk-2",
      skill: "Speaking",
      level: "B2-C1",
      topic: "VSTEP Speaking Part 2 — Bác Bỏ Phương Án (Rebuttal)",
      question: "In VSTEP Speaking Part 2, how should you explain why you reject an alternative in an academic way?",
      options: [
        "Although option B seems appealing, its primary drawback lies in its prohibitive cost.",
        "Option B is totally bad and boring.",
        "I reject B because I don't want it.",
        "Nobody chooses B in real life."
      ],
      answer: 0,
      explain: "'Although option B seems appealing, its primary drawback lies in...' là cách phản biện tinh tế: vừa công nhận ưu điểm trước vừa nêu rõ nhược điểm cốt lõi để loại bỏ."
    },
    {
      id: "vstep-spk-3",
      skill: "Speaking",
      level: "C1",
      topic: "VSTEP Speaking Part 3 — Phát Triển Chủ Đề (Topic Development)",
      question: "In VSTEP Speaking Part 3, which discourse marker best emphasizes an undeniable argument?",
      options: ["It is indisputable that ...", "Maybe I guess that ...", "You know what, ...", "By the way, ..."],
      answer: 0,
      explain: "'It is indisputable that...' (= Không thể bàn cãi rằng...) là discourse marker cao cấp giúp câu nói có sức nặng và tính học thuật cao."
    },

    // --- 5. VSTEP GRAMMAR & LEXICAL RESOURCE ---
    {
      id: "vstep-gram-1",
      skill: "Grammar",
      level: "B2",
      topic: "VSTEP Grammar — Mệnh Đề Nhượng Bộ (Concession)",
      question: "Complete the sentence: '______ the fact that the tuition fees were high, thousands of students applied.'",
      options: ["Despite", "Although", "Even though", "Because of"],
      answer: 0,
      explain: "'Despite / In spite of + the fact that + Clause' (= Mặc dù thực tế là...). 'Although / Even though' đi trực tiếp với mệnh đề mà không cần 'the fact that'."
    },
    {
      id: "vstep-gram-2",
      skill: "Lexical",
      level: "B2-C1",
      topic: "VSTEP Lexical Resource — Collocation 'Đóng Vai Trò'",
      question: "Complete the C1 collocation: 'Extensive reading plays an ______ role in enriching vocabulary.'",
      options: ["indispensable", "unnecessary", "avoidable", "insignificant"],
      answer: 0,
      explain: "'Play an indispensable role in...' (= Đóng một vai trò không thể thiếu / cực kỳ quan trọng đối với...). Cụm từ đắt giá cho cả bài thi Viết và Nói VSTEP!"
    }
  ];

  /**
   * Computes growth stage index (1..4) from progress percentage (0..100).
   */
  function getCloverStage(progress) {
    const p = Math.max(0, Math.min(100, progress || 0));
    if (p >= 100) return 4;
    if (p >= 60) return 3;
    if (p >= 25) return 2;
    return 1;
  }

  // Exact mapped dewdrop & sunlight glint coordinates (0..100 viewBox) per stage
  const STAGE_DEW_GLINTS = {
    1: [
      { x: 46.0, y: 48.7, r: 1.5, d: '0s' },
      { x: 52.8, y: 44.5, r: 1.1, d: '1.3s' }
    ],
    2: [
      { x: 44.2, y: 19.8, r: 1.6, d: '0s' },
      { x: 55.6, y: 24.5, r: 1.4, d: '0.9s' },
      { x: 33.7, y: 31.8, r: 1.4, d: '1.7s' },
      { x: 61.8, y: 35.2, r: 1.3, d: '2.4s' }
    ],
    3: [
      { x: 37.6, y: 25.4, r: 1.5, d: '0.2s' },
      { x: 51.0, y: 30.2, r: 1.6, d: '1.1s' },
      { x: 67.0, y: 41.2, r: 1.4, d: '1.9s' },
      { x: 41.5, y: 65.0, r: 1.5, d: '2.6s' }
    ],
    4: [
      { x: 37.3, y: 14.2, r: 1.9, d: '0s' },
      { x: 36.5, y: 25.9, r: 1.7, d: '0.8s' },
      { x: 61.9, y: 26.7, r: 1.8, d: '1.6s' },
      { x: 66.8, y: 41.4, r: 1.6, d: '2.2s' },
      { x: 41.8, y: 65.2, r: 1.5, d: '1.2s' }
    ]
  };

  /**
   * Renders the lifelike painterly potted clover stage with grounded shadow,
   * bottom-anchored organic wind sway, and synchronized morning dewdrop glints.
   */
  function renderFlowerPotSvg(flowerId, progress) {
    const stage = getCloverStage(progress);
    const glints = STAGE_DEW_GLINTS[stage] || STAGE_DEW_GLINTS[1];

    const glintMarkup = glints.map((g) => `
      <g transform="translate(${g.x}, ${g.y})">
        <g class="clover-dew-glint" style="animation-delay: ${g.d};">
          <circle cx="0" cy="0" r="${(g.r * 1.35).toFixed(2)}" fill="#FFFFFF" opacity="0.45"/>
          <path d="M 0 ${(-g.r * 2.1).toFixed(2)} L ${(g.r * 0.45).toFixed(2)} ${(-g.r * 0.45).toFixed(2)} L ${(g.r * 2.1).toFixed(2)} 0 L ${(g.r * 0.45).toFixed(2)} ${(g.r * 0.45).toFixed(2)} L 0 ${(g.r * 2.1).toFixed(2)} L ${(-g.r * 0.45).toFixed(2)} ${(g.r * 0.45).toFixed(2)} L ${(-g.r * 2.1).toFixed(2)} 0 L ${(-g.r * 0.45).toFixed(2)} ${(-g.r * 0.45).toFixed(2)} Z"
                fill="#FFFFFF"/>
        </g>
      </g>
    `).join('');

    // Delicate sunlit fairy butterfly visiting the blooming Stage 4 clover
    const stage4Accents = stage === 4 ? `
      <g transform="translate(76, 17)" class="clover-sun-butterfly-path">
        <g class="clover-bfly-bob">
          <g class="clover-bfly-wing-l">
            <path d="M 0 0 C -3.8 -4.4 -5.8 -0.2 -1.3 2.1 C -4.2 4.6 -1.1 5.8 0 1.6 Z"
                  fill="#FEF3C7" stroke="#B45309" stroke-width="0.35"/>
            <circle cx="-1.9" cy="0.8" r="0.65" fill="#FDE68A" opacity="0.9"/>
          </g>
          <g class="clover-bfly-wing-r">
            <path d="M 0 0 C 3.8 -4.4 5.8 -0.2 1.3 2.1 C 4.2 4.6 1.1 5.8 0 1.6 Z"
                  fill="#FEF3C7" stroke="#B45309" stroke-width="0.35"/>
            <circle cx="1.9" cy="0.8" r="0.65" fill="#FDE68A" opacity="0.9"/>
          </g>
          <ellipse cx="0" cy="0.9" rx="0.45" ry="1.8" fill="#78350F"/>
        </g>
      </g>
    ` : '';

    return `
      <div class="clover-living-stage clover-stage-${stage}" data-stage="${stage}">
        <div class="clover-ground-shadow" aria-hidden="true"></div>
        <div class="clover-aura-halo" aria-hidden="true"></div>
        <div class="clover-breeze-rig">
          <img src="assets/garden/clover_stage_${stage}.png"
               alt="Cỏ 4 Lá May Mắn VSTEP - Giai đoạn ${stage}"
               class="clover-living-art"
               draggable="false" />
          <svg viewBox="0 0 100 100" class="clover-dew-overlay" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            ${glintMarkup}
            ${stage4Accents}
          </svg>
        </div>
      </div>
    `;
  }

  root.FLOWER_CATALOG = FLOWER_CATALOG;
  root.EXAM_MOTIVATION_QUOTES = EXAM_MOTIVATION_QUOTES;
  root.DAILY_INSPIRATION_QUOTES = DAILY_INSPIRATION_QUOTES;
  root.getRandomNonRepeatingQuote = getRandomNonRepeatingQuote;
  root.EXAM_QUIZ_QUESTIONS = EXAM_QUIZ_QUESTIONS;
  root.getCloverStage = getCloverStage;
  root.renderFlowerPotSvg = renderFlowerPotSvg;

})(typeof window !== 'undefined' ? window : global);
