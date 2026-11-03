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
   * KHO CÂU TRUYỀN CẢM HỨNG BILINGUAL DÀNH CHO "THÔNG ĐIỆP HÔM NAY"
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
   * BẢNG LỢI ÍCH VẠN NĂNG (VSTEP BENEFITS MATRIX)
   * Hệ thống 6 trụ cột ý tưởng kinh điển giúp học viên giải quyết mọi đề thi
   * Speaking Part 2, Part 3 và Writing Task 2 của Cô Nguyệt.
   */
  const VSTEP_BENEFITS_MATRIX = [
    {
      id: "health",
      title: "1. Sức Khỏe & Tinh Thần (Health & Well-being)",
      icon: "💪",
      color: "#10B981",
      coreIdea: "Tăng cường sức đề kháng, xả stress, duy trì sức bền và nâng cao sự tỉnh táo, minh mẫn.",
      collocations: [
        { en: "boost immune system", vi: "tăng cường hệ miễn dịch" },
        { en: "relieve chronic stress / unwind after a hectic day", vi: "giải tỏa căng thẳng sau ngày bận rộn" },
        { en: "reduce the risk of cardiovascular illnesses", vi: "giảm thiểu nguy cơ mắc bệnh tim mạch" },
        { en: "recharge one's batteries / refresh the mind", vi: "nạp lại năng lượng cho trí óc và thể chất" },
        { en: "enhance mental clarity / stay sharp", vi: "giữ cho đầu óc minh mẫn, sắc bén" }
      ],
      speakingTip: "Dùng cho Speaking Part 2 khi chọn hoạt động thể thao/du lịch; Speaking Part 3 khi nói về lối sống lành mạnh.",
      sampleSpeaking: "Weighing all options, playing outdoor sports stands out because it helps students relieve stress and recharge their batteries after strenuous exams.",
      sampleWriting: "First and foremost, maintaining an active workout regimen plays an indispensable role in reducing the risk of chronic illnesses."
    },
    {
      id: "finance",
      title: "2. Kinh Tế & Chi Phí (Finance & Economy)",
      icon: "💰",
      color: "#F59E0B",
      coreIdea: "Tiết kiệm tiền bạc, chi phí hợp lý, tối ưu hóa ngân sách, tránh gánh nặng tài chính.",
      collocations: [
        { en: "cost-effective / budget-friendly", vi: "tiết kiệm chi phí, hợp túi tiền" },
        { en: "save a significant amount of money", vi: "tiết kiệm một khoản tiền đáng kể" },
        { en: "cut down on living / commuting expenses", vi: "cắt giảm chi phí sinh hoạt / đi lại" },
        { en: "financially prohibitive / exorbitant price", vi: "giá quá đắt đỏ (dùng phản biện bác bỏ)" },
        { en: "impose a financial burden on families", vi: "tạo gánh nặng tài chính lên gia đình" }
      ],
      speakingTip: "Dùng để so sánh giá cả trong Speaking Part 2 và bác bỏ phương án đắt đỏ.",
      sampleSpeaking: "I strongly recommend Option A since it is remarkably budget-friendly, enabling us to save a substantial amount of money for other necessities.",
      sampleWriting: "Another compelling advantage of public transportation is that commuters can drastically cut down on monthly commuting expenses."
    },
    {
      id: "convenience",
      title: "3. Thời Gian & Tiện Lợi (Time & Convenience)",
      icon: "⏱️",
      color: "#3B82F6",
      coreIdea: "Tiết kiệm thời gian, lịch trình linh hoạt, dễ dàng tiếp cận mọi lúc mọi nơi.",
      collocations: [
        { en: "time-saving / streamline daily routine", vi: "tiết kiệm thời gian, tối ưu quy trình" },
        { en: "flexible schedule / at one's own pace", vi: "lịch trình linh hoạt, theo tốc độ cá nhân" },
        { en: "accessible at one's fingertips", vi: "tiếp cận dễ dàng ngay trong tầm tay" },
        { en: "avoid rush-hour traffic congestion", vi: "tránh được tình trạng kẹt xe giờ cao điểm" },
        { en: "time-consuming / cumbersome procedure", vi: "tốn thời gian / quy trình rườm rà (bác bỏ)" }
      ],
      speakingTip: "Đặc biệt hữu hiệu cho chủ đề học online, mua sắm qua mạng, làm việc từ xa.",
      sampleSpeaking: "Studying via e-learning platforms is extremely time-saving as lectures are accessible at students' fingertips 24/7.",
      sampleWriting: "Online services enable busy individuals to streamline their daily routines and manage their schedules at their own pace."
    },
    {
      id: "knowledge",
      title: "4. Kiến Thức & Kỹ Năng (Knowledge & Skills)",
      icon: "🧠",
      color: "#8B5CF6",
      coreIdea: "Mở rộng tầm nhìn, tích lũy kinh nghiệm thực tế, rèn giũa tư duy phản biện.",
      collocations: [
        { en: "broaden one's horizons / expand knowledge base", vi: "mở rộng tầm nhìn / làm giàu vốn hiểu biết" },
        { en: "acquire hands-on experience / practical skills", vi: "tích lũy kinh nghiệm thực tiễn" },
        { en: "cultivate critical thinking & problem solving", vi: "trau dồi tư duy phản biện & giải quyết vấn đề" },
        { en: "brighten career prospects / climb the ladder", vi: "làm sáng sủa cơ hội nghề nghiệp / thăng tiến" },
        { en: "enrich cultural and social awareness", vi: "làm sâu sắc hiểu biết về văn hóa và xã hội" }
      ],
      speakingTip: "Áp dụng triệt để cho đề tài đọc sách, du học, học ngoại ngữ, thực tập.",
      sampleSpeaking: "Taking part in an exchange program serves as a prime catalyst to broaden one's horizons and gain invaluable hands-on experience.",
      sampleWriting: "University graduates who possess solid critical thinking skills consistently enjoy brighter career prospects in the competitive job market."
    },
    {
      id: "social",
      title: "5. Mối Quan Hệ & Xã Hội (Social & Relationships)",
      icon: "🤝",
      color: "#EC4899",
      coreIdea: "Thắt chặt tình cảm gia đình, mở rộng mạng lưới giao tiếp, gắn kết cộng đồng.",
      collocations: [
        { en: "strengthen family bonds / deepen friendship", vi: "thắt chặt tình cảm gia đình / bạn bè" },
        { en: "expand one's social network / forge connections", vi: "mở rộng mạng lưới quan hệ xã hội" },
        { en: "foster teamwork and community cohesion", vi: "thúc đẩy tinh thần làm việc nhóm và gắn kết" },
        { en: "hone interpersonal and communicative skills", vi: "rèn giũa kỹ năng giao tiếp ứng xử" },
        { en: "bridge the generation gap", vi: "thu hẹp khoảng cách giữa các thế hệ" }
      ],
      speakingTip: "Dùng khi nói về hoạt động tình nguyện, câu lạc bộ, ăn tối gia đình, teambuilding.",
      sampleSpeaking: "Cooking dinner together provides a golden opportunity to strengthen family bonds and bridge the generation gap.",
      sampleWriting: "Extracurricular clubs allow students to hone their interpersonal skills while expanding a supportive social network."
    },
    {
      id: "environment",
      title: "6. Môi Trường & Đời Sống Xanh (Environment & Sustainability)",
      icon: "🌱",
      color: "#059669",
      coreIdea: "Bảo vệ sinh thái, giảm phát thải khí nhà kính, xây dựng thói quen sống xanh bền vững.",
      collocations: [
        { en: "eco-friendly / environmentally sustainable", vi: "thân thiện với môi trường / bền vững" },
        { en: "minimize carbon footprint / curb greenhouse emissions", vi: "giảm thiểu dấu chân carbon / cắt giảm khí thải" },
        { en: "conserve finite natural resources", vi: "tiết kiệm nguồn tài nguyên thiên nhiên hữu hạn" },
        { en: "combat global warming and air pollution", vi: "chống lại biến đổi khí hậu và ô nhiễm không khí" },
        { en: "promote sustainable lifestyle habits", vi: "hình thành thói quen sống xanh và bền vững" }
      ],
      speakingTip: "Rất hay gặp trong đề thi VSTEP về phương tiện công cộng, năng lượng tái tạo, rác thải nhựa.",
      sampleSpeaking: "Cycling is completely eco-friendly because it directly minimizes our carbon footprint while keeping the city air cleaner.",
      sampleWriting: "Switching to green energy sources plays a pivotal role in curbing toxic emissions and safeguarding natural habitats."
    }
  ];

  /**
   * BẢNG TỪ VỰNG & MẪU CÂU SPEAKING VSTEP THỰC CHIẾN (VSTEP SPEAKING GUIDE)
   * Chia rõ công thức ăn điểm theo 3 phần thi Speaking: Part 1, Part 2, Part 3.
   */
  const VSTEP_SPEAKING_VOCAB_GUIDE = {
    part1: {
      title: "Speaking Part 1: Giao Tiếp Đời Sống (Social Interaction)",
      overview: "3 phút trả lời 3-6 câu hỏi đời thường (Hobby, Hometown, Work/Study). Cần trả lời trôi chảy, tự nhiên và dùng Idioms nhẹ nhàng.",
      idioms: [
        { phrase: "have a knack for [something]", meaning: "có năng khiếu bẩm sinh về việc gì", example: "I have a knack for picking up foreign languages quite quickly." },
        { phrase: "unwind / recharge my batteries", meaning: "thư giãn, nạp lại năng lượng sau giờ học/làm", example: "Listening to acoustic melodies is my go-to way to unwind after a hectic day." },
        { phrase: "once in a blue moon", meaning: "rất hiếm khi làm điều gì", example: "Because of my tight work schedule, I only go to the cinema once in a blue moon." },
        { phrase: "hit the books", meaning: "tập trung cao độ vào việc ôn bài", example: "With the VSTEP exam right around the corner, I have to hit the books every evening." },
        { phrase: "right up my alley", meaning: "rất đúng với sở thích / gu của tôi", example: "Taking photos and exploring street foods is definitely right up my alley." },
        { phrase: "a real page-turner", meaning: "cuốn sách quá hấp dẫn không dứt ra được", example: "The novel I bought last weekend was a real page-turner; I finished it in one sitting." }
      ]
    },
    part2: {
      title: "Speaking Part 2: Thảo Luận Giải Pháp (Solution Discussion)",
      overview: "4 phút (1 phút chuẩn bị, 3 phút nói). Cho 1 tình huống và 3 phương án. BẮT BUỘC thực hiện 3 bước: Chốt phương án tốt nhất -> Chứng minh 2 lý do -> Bác bỏ 2 phương án còn lại.",
      formula: [
        {
          step: "Bước 1: Mở đầu & Khẳng định lựa chọn",
          phrases: [
            "Weighing all three alternatives, I firmly believe that [Option A] is the most viable solution.",
            "In my perspective, among the three choices presented, [Option A] definitely stands out as the most optimal approach.",
            "After considering the pros and cons of each option, my top recommendation would undeniably be [Option A]."
          ]
        },
        {
          step: "Bước 2: Chứng minh 2 lợi ích cốt lõi (Áp dụng Bảng Lợi Ích)",
          phrases: [
            "First and foremost, it offers remarkable [financial / health / time] advantages because...",
            "In addition, another compelling rationale is that it enables participants to broaden their horizons and hone practical skills.",
            "Furthermore, it is exceptionally budget-friendly / time-saving, which perfectly fits our current circumstances."
          ]
        },
        {
          step: "Bước 3: Công thức bác bỏ 2 phương án còn lại (Rebuttal Formula)",
          phrases: [
            "Turning to [Option B], although it seems tempting at first glance, its primary drawback lies in its exorbitant cost.",
            "As for [Option C], I would rule it out immediately because it is far too time-consuming and impractical for our group.",
            "While [Option B] has its own merits, it is clearly outweighed by the safety concerns and cumbersome logistics."
          ]
        }
      ]
    },
    part3: {
      title: "Speaking Part 3: Phát Triển Chủ Đề (Topic Development)",
      overview: "5 phút (1 phút chuẩn bị, 3 phút nói + 1 phút trả lời câu hỏi mở rộng). Cho 1 sơ đồ mindmap với 3 nhánh ý. Cần mở rộng bằng giải thích, dẫn chứng và từ nối nâng band.",
      discourseMarkers: [
        { marker: "It is widely acknowledged that...", usage: "Khẳng định một sự thật/chân lý được công nhận rộng rãi" },
        { marker: "It serves as a prime catalyst for...", usage: "Nêu vai trò là chất xúc tác hàng đầu cho việc gì" },
        { marker: "To substantiate this viewpoint,...", usage: "Dẫn chứng hoặc số liệu chứng minh cho luận điểm vừa nêu" },
        { marker: "Another noteworthy dimension to consider is...", usage: "Chuyển sang một nhánh/khía cạnh ý mới trong mindmap" },
        { marker: "In a nutshell, the merits are indisputable.", usage: "Tóm gọn lại toàn bài khẳng định lợi ích vượt trội" }
      ]
    }
  };

  /**
   * CẨM NANG NHẬN DẠNG DẠNG THƯ & LUẬN VSTEP (VSTEP WRITING IDENTIFICATION GUIDE)
   * Giúp thí sinh nhận diện tức thì đề bài Task 1 và Task 2 để chọn đúng văn phong và cấu trúc dàn ý.
   */
  const VSTEP_WRITING_IDENTIFICATION_GUIDE = {
    task1: {
      title: "Writing Task 1: Nhận Dạng Dạng Thư (120 từ - 1/3 điểm viết)",
      timeAdvice: "20 phút. Đọc kỹ người nhận để xác định Văn phong (Formal / Semi / Informal).",
      registers: [
        {
          type: "Thư Trang Trọng (Formal)",
          recipient: "Gửi Giám đốc, Quản lý khách sạn, Hiệu trưởng, Công ty (người không quen)",
          salutation: "Dear Sir or Madam, (nếu chưa biết tên) HOẶC Dear Mr. / Ms. Smith,",
          signOff: "Yours faithfully, (nếu Dear Sir/Madam) HOẶC Yours sincerely, (nếu có tên riêng)",
          rule: "Tuyệt đối KHÔNG viết tắt (dùng 'cannot', không dùng 'can't'). Dùng câu bị động và từ vựng trang trọng."
        },
        {
          type: "Thư Bán Trang Trọng (Semi-formal)",
          recipient: "Gửi Giáo viên quen biết, Đồng nghiệp, Chủ nhà trọ, Hàng xóm",
          salutation: "Dear Ms. Nga, / Dear Mr. Brown,",
          signOff: "Best regards, / Warm regards, / Kind regards,",
          rule: "Giọng văn lịch sự, tôn trọng nhưng tự nhiên và ấm áp hơn."
        },
        {
          type: "Thư Thân Mật (Informal)",
          recipient: "Gửi Bạn thân, Người nhà, Thành viên trong gia đình",
          salutation: "Dear Nam, / Hi Linh, / Dearest Mai,",
          signOff: "Best wishes, / Warmly, / Love, / All the best,",
          rule: "Được phép viết tắt (I'm, don't, can't), dùng thành ngữ và lời hỏi thăm thân tình."
        }
      ],
      types: [
        {
          name: "1. Thư Khiếu Nại (Complaint Letter)",
          keywords: "complain about, express dissatisfaction with, substandard service, damaged item",
          starter: "I am writing to express my strong dissatisfaction with the poor service and damaged facilities I encountered at your hotel on November 1st."
        },
        {
          name: "2. Thư Yêu Cầu Thông Tin (Inquiry / Request Letter)",
          keywords: "ask for information, inquire about, request details, want to know",
          starter: "I am writing to inquire about the course curriculum, tuition fees, and admission requirements for your upcoming IELTS preparation program."
        },
        {
          name: "3. Thư Xin Lỗi (Apology Letter)",
          keywords: "apologize for, explain why you missed, express regret",
          starter: "Please accept my sincere apologies for failing to attend the scheduled project meeting yesterday due to an unexpected medical emergency."
        },
        {
          name: "4. Thư Cảm Ơn (Thank-you / Gratitude Letter)",
          keywords: "thank someone for, express gratitude, appreciate assistance",
          starter: "I am writing this letter to express my heartfelt gratitude for your warm hospitality and tremendous assistance during my recent visit to Da Nang."
        },
        {
          name: "5. Thư Mời (Invitation Letter)",
          keywords: "invite someone to attend, join our event, celebrate",
          starter: "I would like to cordially invite you to attend our school's 20th Anniversary Gala Dinner, which is scheduled to take place on Sunday evening."
        },
        {
          name: "6. Thư Cho Lời Khuyên (Advice Letter)",
          keywords: "give advice, recommend, suggest what to do",
          starter: "I was delighted to receive your letter asking for advice on choosing a career path. If I were in your shoes, I would strongly consider..."
        }
      ]
    },
    task2: {
      title: "Writing Task 2: Nhận Dạng 4 Dạng Luận VSTEP (250 từ - 2/3 điểm viết)",
      timeAdvice: "40 phút. Cần nhận diện đúng dạng để viết câu Thesis Statement và phân bổ thân bài chuẩn xác.",
      essayTypes: [
        {
          type: "1. Luận Quan Điểm (Opinion / Agree or Disagree)",
          questionClues: "Do you agree or disagree? / To what extent do you agree or disagree?",
          trapWarning: "Cần nêu rõ lập trường (Đồng ý hay Không đồng ý) ngay cuối Mở bài và giữ vững xuyên suốt bài.",
          bodyStructure: "Body 1: Luận điểm ủng hộ thứ nhất kèm dẫn chứng. Body 2: Luận điểm ủng hộ thứ hai kèm dẫn chứng.",
          thesisTemplate: "In my perspective, I completely agree with this view because of several compelling reasons."
        },
        {
          type: "2. Luận Thảo Luận 2 Mặt (Discuss Both Views & Give Opinion)",
          questionClues: "Discuss both views and give your opinion.",
          trapWarning: "BẮT BUỘC phải phân tích CẢ HAI quan điểm ở 2 thân bài (Body 1: Quan điểm 1; Body 2: Quan điểm 2), không được bỏ quên bên nào!",
          bodyStructure: "Body 1: Phân tích vì sao một số người ủng hộ quan điểm A. Body 2: Phân tích quan điểm B và nêu rõ lý do tôi nghiêng về phía B.",
          thesisTemplate: "While there are justifiable reasons to support [View A], I am personally more inclined toward [View B]."
        },
        {
          type: "3. Luận Ưu & Nhược Điểm (Advantages vs Disadvantages / Outweigh)",
          questionClues: "Do the advantages outweigh the disadvantages? / What are the pros and cons?",
          trapWarning: "Nếu đề hỏi 'outweigh', phải khẳng định rõ mặt nào lớn hơn và tại sao ở cả Mở bài, Thân bài và Kết bài.",
          bodyStructure: "Body 1: Phân tích 2 ưu điểm nổi trội. Body 2: Phân tích nhược điểm nhưng chứng minh ưu điểm vẫn chiếm ưu thế áp đảo.",
          thesisTemplate: "Despite certain undeniable drawbacks, I firmly believe that the benefits of this trend far outweigh its shortcomings."
        },
        {
          type: "4. Luận Nguyên Nhân - Giải Pháp (Causes & Solutions / Problems & Solutions)",
          questionClues: "What are the causes of this issue and suggest practical solutions? / What problems does it cause?",
          trapWarning: "Giải pháp ở Body 2 phải tương ứng trực tiếp để giải quyết đúng các nguyên nhân/vấn đề đã nêu ở Body 1.",
          bodyStructure: "Body 1: Nêu 2 nguyên nhân gốc rễ (Root causes). Body 2: Đề xuất 2 giải pháp khả thi tương ứng (Chính phủ & Cá nhân).",
          thesisTemplate: "This essay will delve into the primary catalysts behind this troubling phenomenon and put forward viable solutions."
        }
      ]
    }
  };

  /**
   * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM VSTEP CHUẨN THỰC CHIẾN (24+ CÂU HỎI THEO 4 CHUYÊN ĐỀ)
   * 1. benefit-matrix: Áp dụng Bảng Lợi Ích vào phòng thi
   * 2. speaking-vocab: Từ vựng, Idioms, Công thức Part 1, 2, 3
   * 3. writing-letter: Nhận dạng dạng thư Task 1 & Quy chuẩn Formal/Informal
   * 4. writing-essay: Nhận dạng dạng luận Task 2 & Cấu trúc dàn ý chuẩn
   */
  const EXAM_QUIZ_QUESTIONS = [
    // ==========================================
    // CHUYÊN ĐỀ 1: BẢNG LỢI ÍCH (BENEFIT MATRIX)
    // ==========================================
    {
      id: "bm-1",
      category: "benefit-matrix",
      categoryName: "📊 Bảng Lợi Ích",
      skill: "Speaking",
      level: "B1-B2",
      topic: "Bảng Lợi Ích — Tiêu Chí Kinh Tế (Finance)",
      question: "Trong Speaking Part 2 khi chọn học online thay vì học trực tiếp, luận điểm 'save money on daily commuting and cut down on apartment rent' thuộc nhóm lợi ích nào trong Bảng Lợi Ích?",
      options: [
        "Kinh tế & Chi phí (Finance & Economy)",
        "Sức khỏe & Tinh thần (Health & Well-being)",
        "Môi trường & Đời sống xanh (Environment)",
        "Mối quan hệ & Xã hội (Social bonds)"
      ],
      answer: 0,
      explain: "Luận điểm về tiết kiệm tiền xăng xe và tiền thuê trọ thuộc trực tiếp nhóm lợi ích 'Kinh tế & Chi phí' (cost-effective / cut down on expenses). Áp dụng nhóm này giúp bạn đạt điểm thuyết phục ngay trong Speaking Part 2!"
    },
    {
      id: "bm-2",
      category: "benefit-matrix",
      categoryName: "📊 Bảng Lợi Ích",
      skill: "Writing",
      level: "B2-C1",
      topic: "Bảng Lợi Ích — Sức Khỏe & Tinh Thần (Health)",
      question: "Cặp cụm từ học thuật nào sau đây diễn tả trọn vẹn nhóm lợi ích 'Sức khỏe & Tinh thần' trong bài luận Task 2 về rèn luyện thể thao?",
      options: [
        "boost immune system & relieve chronic stress",
        "save a significant amount of money & cut living expenses",
        "streamline daily routines & flexible schedule",
        "foster teamwork & expand one's social network"
      ],
      answer: 0,
      explain: "'boost immune system' (tăng sức đề kháng) và 'relieve chronic stress' (giải tỏa căng thẳng) là 2 luận điểm vàng thuộc nhóm Sức khỏe thể chất và tinh thần trong Bảng Lợi Ích của Cô Nguyệt."
    },
    {
      id: "bm-3",
      category: "benefit-matrix",
      categoryName: "📊 Bảng Lợi Ích",
      skill: "Speaking",
      level: "B2-C1",
      topic: "Bảng Lợi Ích — Kiến Thức & Kỹ Năng (Knowledge)",
      question: "Khi nói về lợi ích của việc đọc sách hoặc đi du lịch trong Speaking Part 3, cụm từ nào thể hiện xuất sắc nhóm lợi ích 'Kiến thức & Kỹ năng'?",
      options: [
        "broaden one's horizons & acquire practical knowledge",
        "avoid rush-hour traffic jams & streamline routine",
        "impose a heavy financial burden on family",
        "minimize carbon footprint & save energy"
      ],
      answer: 0,
      explain: "'broaden one's horizons' (mở rộng tầm hiểu biết) và 'acquire practical knowledge' (tích lũy kiến thức thực tế) là những collocation đắt giá nhất của nhóm Kiến thức & Kỹ năng!"
    },
    {
      id: "bm-4",
      category: "benefit-matrix",
      categoryName: "📊 Bảng Lợi Ích",
      skill: "Speaking",
      level: "B2",
      topic: "Bảng Lợi Ích — Tiêu Chí Bác Bỏ (Rebuttal Formula)",
      question: "Trong VSTEP Speaking Part 2, lý do loại bỏ (rebuttal): 'The tuition fee is exorbitant, which imposes a heavy financial burden on low-income students' vận dụng tiêu chí nào trong Bảng Lợi Ích?",
      options: [
        "Khía cạnh Kinh tế & Chi phí (Bác bỏ phương án quá đắt đỏ)",
        "Khía cạnh Thời gian (Bác bỏ phương án tốn thời gian)",
        "Khía cạnh Sức khỏe (Bác bỏ phương án gây mệt mỏi)",
        "Khía cạnh Môi trường (Bác bỏ phương án gây ô nhiễm)"
      ],
      answer: 0,
      explain: "'Exorbitant fee' (học phí đắt đỏ) và 'financial burden' (gánh nặng tài chính) là vũ khí phản biện cực mạnh thuộc nhóm Kinh tế để loại trừ các phương án tốn kém trong Speaking Part 2."
    },
    {
      id: "bm-5",
      category: "benefit-matrix",
      categoryName: "📊 Bảng Lợi Ích",
      skill: "Writing",
      level: "B2-C1",
      topic: "Bảng Lợi Ích — Thời Gian & Tiện Lợi (Time & Convenience)",
      question: "Cụm từ nào sau đây mô tả sự vượt trội về 'Thời gian & Tiện lợi' khi sử dụng ứng dụng thanh toán điện tử (E-wallets)?",
      options: [
        "accessible at one's fingertips & time-saving",
        "bridge the generation gap & deepen friendship",
        "conserve finite natural resources & eco-friendly",
        "reduce risks of cardiovascular illnesses"
      ],
      answer: 0,
      explain: "'accessible at one's fingertips' (tiện lợi ngay trong tầm tay) và 'time-saving' (tiết kiệm thời gian) là cặp bài trùng của nhóm Thời gian & Tiện lợi trong Bảng Lợi Ích."
    },
    {
      id: "bm-6",
      category: "benefit-matrix",
      categoryName: "📊 Bảng Lợi Ích",
      skill: "Writing",
      level: "B2-C1",
      topic: "Bảng Lợi Ích — Môi Trường (Environment)",
      question: "Luận điểm 'curb toxic emissions and minimize individual carbon footprint' thuộc nhóm lợi ích nào khi viết luận về việc sử dụng xe điện?",
      options: [
        "Môi trường & Đời sống xanh (Environment & Sustainability)",
        "Kinh tế & Chi phí (Finance & Economy)",
        "Quan hệ xã hội (Social networking)",
        "Thời gian & Tiện lợi (Convenience)"
      ],
      answer: 0,
      explain: "'curb toxic emissions' (cắt giảm khí thải độc hại) và 'minimize carbon footprint' (giảm dấu chân carbon) thuộc nhóm Môi trường & Đời sống xanh, rất được giám khảo VSTEP đánh giá cao."
    },

    // ==========================================
    // CHUYÊN ĐỀ 2: BẢNG TỪ VỰNG SPEAKING (SPEAKING VOCAB)
    // ==========================================
    {
      id: "sv-1",
      category: "speaking-vocab",
      categoryName: "🗣️ Từ Vựng Speaking",
      skill: "Speaking",
      level: "B1-B2",
      topic: "Speaking Part 1 — Idioms Thư Giãn Đời Sống",
      question: "Trong Speaking Part 1 chủ đề 'Hobby / Daily Routine', thành ngữ nào mang nghĩa 'thư giãn và xả hơi sau những giờ học căng thẳng' giúp bạn ghi điểm tự nhiên?",
      options: [
        "unwind and recharge my batteries",
        "burn the midnight oil",
        "hit the books with no pause",
        "cost an arm and a leg"
      ],
      answer: 0,
      explain: "'unwind and recharge my batteries' là thành ngữ cực kỳ tự nhiên, mô tả việc nghỉ ngơi nạp lại năng lượng sau những giờ học tập hay làm việc căng thẳng."
    },
    {
      id: "sv-2",
      category: "speaking-vocab",
      categoryName: "🗣️ Từ Vựng Speaking",
      skill: "Speaking",
      level: "B2-C1",
      topic: "Speaking Part 2 — Công Thức Mở Đầu Lựa Chọn Tối Ưu",
      question: "Trong VSTEP Speaking Part 2, câu mở đầu nào sau đây thể hiện năng lực so sánh đa chiều và chọn phương án tối ưu chuẩn band B2-C1?",
      options: [
        "Weighing all three alternatives, I firmly believe that Option A is the most viable solution.",
        "I like Option A because it is very good and nice.",
        "There are three options, and my choice is Option A, thank you.",
        "Option A is better than Option B and C."
      ],
      answer: 0,
      explain: "'Weighing all three alternatives, I firmly believe that [Option] is the most viable solution' là mẫu câu mở đầu kinh điển trong giáo trình của Cô Nguyệt, giúp bạn mở màn đầy đĩnh đạc và học thuật."
    },
    {
      id: "sv-3",
      category: "speaking-vocab",
      categoryName: "🗣️ Từ Vựng Speaking",
      skill: "Speaking",
      level: "B2-C1",
      topic: "Speaking Part 2 — Mẫu Câu Bác Bỏ Tinh Tế (Rebuttal)",
      question: "Khi cần bác bỏ phương án B trong Speaking Part 2, câu nào vừa công nhận ưu điểm vừa chỉ ra nhược điểm cốt lõi để loại trừ một cách khéo léo?",
      options: [
        "Turning to Option B, although it seems tempting at first glance, its primary drawback lies in its prohibitive cost.",
        "Option B is completely bad and nobody should ever choose it.",
        "I hate Option B because it is very ugly.",
        "Option B has zero benefits and should be deleted."
      ],
      answer: 0,
      explain: "Mẫu câu nhượng bộ 'Although [Option B] seems tempting at first glance, its primary drawback lies in...' thể hiện tư duy phản biện cao cấp, được giám khảo chấm điểm rất cao!"
    },
    {
      id: "sv-4",
      category: "speaking-vocab",
      categoryName: "🗣️ Từ Vựng Speaking",
      skill: "Speaking",
      level: "B1-B2",
      topic: "Speaking Part 1 — Thành Ngữ Tần Suất",
      question: "Trong Speaking Part 1, khi giám khảo hỏi 'How often do you go swimming?', câu trả lời nào dùng idiom chỉ tần suất 'rất hiếm khi' một cách tự nhiên?",
      options: [
        "To be honest, I only go swimming once in a blue moon due to my busy study schedule.",
        "I swim every five minutes every day.",
        "I always go swimming once in a red sun.",
        "Swimming is not my blue moon."
      ],
      answer: 0,
      explain: "'once in a blue moon' là thành ngữ chỉ một việc rất hiếm khi xảy ra (= very rarely). Câu trả lời này thể hiện sự lưu loát và tự nhiên."
    },
    {
      id: "sv-5",
      category: "speaking-vocab",
      categoryName: "🗣️ Từ Vựng Speaking",
      skill: "Speaking",
      level: "B2-C1",
      topic: "Speaking Part 3 — Discourse Marker Khẳng Định Chân Lý",
      question: "Trong Speaking Part 3 (Phát triển chủ đề), cụm từ nào dùng để nhấn mạnh một sự thật hoặc luận điểm chắc chắn không thể bàn cãi?",
      options: [
        "It is widely acknowledged that... / It is indisputable that...",
        "Maybe perhaps I guess that...",
        "You know what I mean, bro...",
        "By the way, let me tell you..."
      ],
      answer: 0,
      explain: "'It is widely acknowledged that...' hoặc 'It is indisputable that...' (= Điều không thể bàn cãi là...) giúp câu nói của bạn mang tính học thuật và sức nặng vững chãi."
    },
    {
      id: "sv-6",
      category: "speaking-vocab",
      categoryName: "🗣️ Từ Vựng Speaking",
      skill: "Speaking",
      level: "B2-C1",
      topic: "Speaking Part 3 — Cụm Từ 'Chất Xúc Tác Hàng Đầu'",
      question: "Điền cụm từ nâng band vào chỗ trống: 'Quality higher education serves as a prime ______ for national economic development.'",
      options: ["catalyst", "obstacle", "barrier", "detriment"],
      answer: 0,
      explain: "'serve as a prime catalyst for...' (= đóng vai trò là chất xúc tác hàng đầu cho...). Cụm collocation đắt giá giúp nâng điểm Lexical Resource trong Speaking Part 3!"
    },

    // ==========================================
    // CHUYÊN ĐỀ 3: NHẬN DẠNG DẠNG THƯ VSTEP TASK 1
    // ==========================================
    {
      id: "wl-1",
      category: "writing-letter",
      categoryName: "✉️ Nhận Dạng Thư",
      skill: "Writing",
      level: "B1-B2",
      topic: "VSTEP Task 1 — Nhận Dạng Thư Khiếu Nại (Complaint Letter)",
      question: "Đề bài: 'You recently stayed at a seaside hotel and found the room noisy, dirty and the staff unhelpful. Write a letter to the manager.' Đây là dạng thư nào?",
      options: [
        "Letter of Complaint (Thư khiếu nại / phàn nàn)",
        "Letter of Apology (Thư xin lỗi)",
        "Letter of Invitation (Thư mời)",
        "Letter of Thank-you (Thư cảm ơn)"
      ],
      answer: 0,
      explain: "Dấu hiệu 'noisy, dirty, unhelpful staff' và yêu cầu viết cho 'the manager' xác định ngay đây là Thư Khiếu Nại (Letter of Complaint). Cần mở đầu bằng: 'I am writing to express my strong dissatisfaction with...'"
    },
    {
      id: "wl-2",
      category: "writing-letter",
      categoryName: "✉️ Nhận Dạng Thư",
      skill: "Writing",
      level: "B1-B2",
      topic: "VSTEP Task 1 — Quy Chuẩn Kết Thư Trang Trọng (Formal)",
      question: "Trong VSTEP Task 1, nếu thư bắt đầu bằng lời chào không biết tên: 'Dear Sir or Madam,', quy chuẩn kết thư bắt buộc phải là gì?",
      options: [
        "Yours faithfully,",
        "Yours sincerely,",
        "Best wishes,",
        "Cheers,"
      ],
      answer: 0,
      explain: "Quy tắc vàng thư tín tiếng Anh: Không biết tên người nhận (Dear Sir or Madam) -> kết bằng 'Yours faithfully,'. Biết tên người nhận (Dear Mr. White) -> kết bằng 'Yours sincerely,'."
    },
    {
      id: "wl-3",
      category: "writing-letter",
      categoryName: "✉️ Nhận Dạng Thư",
      skill: "Writing",
      level: "B1-B2",
      topic: "VSTEP Task 1 — Nhận Dạng Thư Yêu Cầu Thông Tin (Inquiry)",
      question: "Mẫu câu: 'I would be immensely grateful if you could furnish me with further information regarding tuition fees and course dates.' là dấu hiệu của dạng thư nào?",
      options: [
        "Letter of Inquiry / Request (Thư hỏi thông tin / yêu cầu)",
        "Letter of Complaint (Thư khiếu nại)",
        "Letter of Apology (Thư xin lỗi)",
        "Letter of Condolence (Thư chia buồn)"
      ],
      answer: 0,
      explain: "'furnish me with further information regarding...' (= cung cấp thêm thông tin về...) là câu kinh điển trong Thư Hỏi Thông Tin (Letter of Inquiry / Request)."
    },
    {
      id: "wl-4",
      category: "writing-letter",
      categoryName: "✉️ Nhận Dạng Thư",
      skill: "Writing",
      level: "B1-B2",
      topic: "VSTEP Task 1 — Phân Biệt Formal vs Informal",
      question: "Đặc điểm nào sau đây là điều CẤM KỴ trong Thư Trang Trọng (Formal Letter) của bài thi VSTEP Task 1?",
      options: [
        "Sử dụng các từ viết tắt như 'don't', 'can't', 'I'm'",
        "Sử dụng câu bị động (Passive voice)",
        "Sử dụng từ vựng học thuật trang trọng",
        "Chào đầu bằng 'Dear Sir or Madam,'"
      ],
      answer: 0,
      explain: "Trong Formal Letter của VSTEP, tuyệt đối không được viết tắt (phải viết đầy đủ 'cannot', 'do not', 'I am'). Viết tắt sẽ bị trừ điểm văn phong (Register & Tone)!"
    },
    {
      id: "wl-5",
      category: "writing-letter",
      categoryName: "✉️ Nhận Dạng Thư",
      skill: "Writing",
      level: "B1-B2",
      topic: "VSTEP Task 1 — Nhận Dạng Thư Xin Lỗi (Apology Letter)",
      question: "Đề bài: 'Write a letter to your professor explaining why you missed yesterday's midterm exam and request a make-up test.' Câu mở đầu chuẩn mực nhất là:",
      options: [
        "Please accept my sincere apologies for failing to attend yesterday's exam due to an unexpected illness.",
        "Hey teacher, I didn't go to your test yesterday because I was lazy.",
        "I am writing to invite you to my make-up test tomorrow.",
        "I am extremely angry that you gave a test yesterday."
      ],
      answer: 0,
      explain: "'Please accept my sincere apologies for failing to attend...' là lời mở đầu chuẩn mực, lịch sự và trang trọng cho Thư Xin Lỗi gửi giáo viên trong VSTEP Task 1."
    },
    {
      id: "wl-6",
      category: "writing-letter",
      categoryName: "✉️ Nhận Dạng Thư",
      skill: "Writing",
      level: "B1-B2",
      topic: "VSTEP Task 1 — Nhận Dạng Thư Cho Lời Khuyên (Advice Letter)",
      question: "Khi viết thư thân mật (Informal) khuyên bạn thân nên chọn học đại học hay đi làm ngay, cấu trúc nào thể hiện lời khuyên tự nhiên và đạt điểm cao?",
      options: [
        "If I were in your shoes, I would definitely consider...",
        "You must follow my order right now.",
        "I order you to apply for university immediately.",
        "It is prohibited for you to go to work."
      ],
      answer: 0,
      explain: "'If I were in your shoes, I would definitely consider...' (= Nếu mình ở trong hoàn cảnh của bạn, mình chắc chắn sẽ cân nhắc...) là mẫu câu cho lời khuyên ấm áp, tự nhiên nhất."
    },

    // ==========================================
    // CHUYÊN ĐỀ 4: NHẬN DẠNG DẠNG LUẬN VSTEP TASK 2
    // ==========================================
    {
      id: "we-1",
      category: "writing-essay",
      categoryName: "📝 Nhận Dạng Luận",
      skill: "Writing",
      level: "B2-C1",
      topic: "VSTEP Task 2 — Dạng Luận Quan Điểm (Opinion / Agree or Disagree)",
      question: "Đề bài kết thúc bằng câu lệnh: 'To what extent do you agree or disagree?' Đây là dạng bài luận nào và yêu cầu cốt lõi là gì?",
      options: [
        "Opinion Essay: Phải tuyên bố rõ ràng lập trường (Đồng ý/Không đồng ý) ngay cuối Mở bài và giữ vững quan điểm đó.",
        "Discussion Essay: Phải phân tích cả 2 mặt và không được đưa ra ý kiến riêng.",
        "Problem-Solution Essay: Phải phân tích nguyên nhân ô nhiễm môi trường.",
        "Letter of Complaint: Viết thư khiếu nại giám khảo."
      ],
      answer: 0,
      explain: "Câu lệnh 'To what extent do you agree or disagree?' là dạng Opinion Essay. Thí sinh bắt buộc phải có câu Thesis Statement ở Mở bài khẳng định rõ lập trường của mình."
    },
    {
      id: "we-2",
      category: "writing-essay",
      categoryName: "📝 Nhận Dạng Luận",
      skill: "Writing",
      level: "B2-C1",
      topic: "VSTEP Task 2 — Bẫy Chết Người Dạng Thảo Luận 2 Mặt (Discuss Both Views)",
      question: "Đề bài có câu lệnh: 'Discuss both views and give your opinion.' Lỗi sai nghiêm trọng nào khiến thí sinh bị tụt điểm Task Response nhiều nhất?",
      options: [
        "Chỉ phân tích 1 quan điểm mà mình đồng ý, bỏ quên hoàn toàn quan điểm còn lại.",
        "Phân tích quan điểm thứ nhất ở Thân bài 1 và quan điểm thứ hai ở Thân bài 2.",
        "Nêu rõ quan điểm của bản thân ở phần Kết bài.",
        "Sử dụng các liên từ chuyển ý như 'On the one hand' và 'On the other hand'."
      ],
      answer: 0,
      explain: "Bẫy lớn nhất của 'Discuss both views' là thí sinh chỉ viết về phía mình thích. Đề bài yêu cầu 'Discuss both views' nghĩa là BẮT BUỘC phải phân tích công bằng cả 2 quan điểm ở 2 thân bài rồi mới kết luận ủng hộ bên nào!"
    },
    {
      id: "we-3",
      category: "writing-essay",
      categoryName: "📝 Nhận Dạng Luận",
      skill: "Writing",
      level: "B2-C1",
      topic: "VSTEP Task 2 — Dạng Ưu & Nhược Điểm (Outweigh)",
      question: "Đề bài: 'Do the advantages of distance learning outweigh the disadvantages?' Mẫu câu Thesis Statement nào ở Mở bài thể hiện rõ ràng mặt ưu thế vượt trội?",
      options: [
        "Despite certain undeniable drawbacks, I firmly believe that the benefits of distance learning far outweigh its shortcomings.",
        "Distance learning has many things to discuss in this essay.",
        "I will tell you both advantages and disadvantages, you choose.",
        "There are no disadvantages to online study."
      ],
      answer: 0,
      explain: "'Despite certain undeniable drawbacks, I firmly believe that the benefits... far outweigh its shortcomings' là câu thesis kinh điển khẳng định dứt khoát ưu điểm chiếm ưu thế áp đảo."
    },
    {
      id: "we-4",
      category: "writing-essay",
      categoryName: "📝 Nhận Dạng Luận",
      skill: "Writing",
      level: "B2-C1",
      topic: "VSTEP Task 2 — Dạng Nguyên Nhân & Giải Pháp (Causes & Solutions)",
      question: "Đề bài: 'Air pollution in urban areas has reached alarming levels. What are the causes of this issue and suggest practical solutions.' Cấu trúc 2 thân bài chuẩn nhất là:",
      options: [
        "Body 1: Phân tích 2 nguyên nhân cốt lõi. Body 2: Đề xuất 2 giải pháp trực tiếp giải quyết 2 nguyên nhân đó.",
        "Body 1: Nêu ưu điểm của ô nhiễm. Body 2: Nêu nhược điểm của ô nhiễm.",
        "Body 1: Kể câu chuyện cá nhân bị ho. Body 2: Kêu gọi mọi người chuyển nhà về quê.",
        "Body 1: Thảo luận ý kiến người khác. Body 2: Bác bỏ phương án B."
      ],
      answer: 0,
      explain: "Với dạng Causes & Solutions: Body 1 phân tích nguyên nhân gốc rễ (giao thông và khí thải công nghiệp); Body 2 đề xuất giải pháp trực tiếp tương ứng (phát triển xe điện và ban hành luật phạt nghiêm khắc)."
    },
    {
      id: "we-5",
      category: "writing-essay",
      categoryName: "📝 Nhận Dạng Luận",
      skill: "Writing",
      level: "B2-C1",
      topic: "VSTEP Task 2 — Thesis Statement Cho Dạng 'Discuss Both Views'",
      question: "Trong bài luận 'Discuss both views and give your opinion', câu nào sau đây là câu mở bài (Thesis) chuẩn mực thể hiện sự cân bằng và lựa chọn cá nhân?",
      options: [
        "While there are valid arguments supporting View A, I am personally more convinced that View B is a superior approach.",
        "Some people say A, some say B, I don't know.",
        "Both sides are 100% wrong.",
        "I will talk about A in body 1 and stop."
      ],
      answer: 0,
      explain: "'While there are valid arguments supporting View A, I am personally more convinced that View B is a superior approach' vừa công nhận lý lẽ của quan điểm A, vừa khẳng định lập trường cá nhân nghiêng về quan điểm B."
    },
    {
      id: "we-6",
      category: "writing-essay",
      categoryName: "📝 Nhận Dạng Luận",
      skill: "Writing",
      level: "B2-C1",
      topic: "VSTEP Task 2 — Tiêu Chí Coherence & Cohesion",
      question: "Liên từ nào sau đây thích hợp nhất để mở đầu cho đoạn Thân bài 2 khi muốn đưa ra một góc nhìn tương phản hoàn toàn so với Thân bài 1?",
      options: [
        "On the other hand, / Conversely,",
        "Furthermore,",
        "In addition,",
        "Likewise,"
      ],
      answer: 0,
      explain: "'On the other hand,' hoặc 'Conversely,' dùng để bắt đầu một đoạn văn mang ý nghĩa đối lập/tương phản mạnh mẽ so với đoạn trước, giúp tăng điểm tiêu chí Coherence & Cohesion."
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
  root.VSTEP_BENEFITS_MATRIX = VSTEP_BENEFITS_MATRIX;
  root.VSTEP_SPEAKING_VOCAB_GUIDE = VSTEP_SPEAKING_VOCAB_GUIDE;
  root.VSTEP_WRITING_IDENTIFICATION_GUIDE = VSTEP_WRITING_IDENTIFICATION_GUIDE;
  root.EXAM_QUIZ_QUESTIONS = EXAM_QUIZ_QUESTIONS;
  root.getCloverStage = getCloverStage;
  root.renderFlowerPotSvg = renderFlowerPotSvg;

})(typeof window !== 'undefined' ? window : global);
