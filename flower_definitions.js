/**
 * LUCKY CLOVER GARDEN DEFINITIONS ("CHẬU CỎ 4 LÁ MAY MẮN CỦA CÔ NGUYỆT")
 * Dedicated exclusively to Cỏ 4 Lá May Mắn (Trifolium repens 🍀).
 * Lifelike Painterly Botanical Edition with Exam Motivation Engine:
 * - High-resolution hand-painted botanical illustrations across all 4 growth stages
 * - Exam Motivation Fortune Cards (Thông điệp truyền động lực ôn thi)
 * - Quick Exam Drills (Câu đố ôn thi nhận giọt nước nỗ lực)
 */
(function(root) {
  'use strict';

  const FLOWER_CATALOG = {
    "clover": {
      "id": "clover",
      "name": "Cỏ 4 Lá May Mắn",
      "scientific": "Trifolium repens",
      "icon": "🍀",
      "rarity": "Thần kỳ",
      "color": "#10B981",
      "accentColor": "#059669",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(254, 240, 138, 0.55) 0%, rgba(52, 211, 153, 0.24) 45%, transparent 76%)",
      "meaning": "May mắn ngập tràn, niềm tin, hy vọng và tình yêu vĩnh cửu. Món quà diệu kỳ của thiên nhiên ban tặng cho cô Nguyệt!",
      "quote": "Bé cỏ 4 lá mang đến vạn sự may mắn và mọi điều ước thành hiện thực cho cô Nguyệt! 🍀🌟",
      "growthDifficulty": "Hiếm có"
    }
  };

  /**
   * Kho thông điệp truyền động lực sâu sắc dành riêng cho giai đoạn ôn thi của học viên Cô Nguyệt
   */
  const EXAM_MOTIVATION_QUOTES = [
    {
      id: "quote-1",
      tag: "Ý Chí & Kiên Trì",
      title: "Mỗi Bước Nhỏ Tạo Nên Kỳ Tích",
      content: "Mọi sự kiên trì của ngày hôm nay đều là nền móng vững chắc cho kỳ tích ngày mai. Đừng nản lòng khi thấy bài vở còn nhiều; chỉ cần mỗi ngày tiến một bước nhỏ, cánh cửa ước mơ chắc chắn sẽ mở ra!",
      advice: "Hãy chia nhỏ mục tiêu ôn tập hôm nay thành 3 phần vừa sức và hoàn thành từng phần nhé!"
    },
    {
      id: "quote-2",
      tag: "Bản Lĩnh Vượt Khó",
      title: "Áp Lực Tạo Nên Kim Cương",
      content: "Áp lực thi cử là hòn đá mài giũa bản lĩnh. Kỳ thi này không chỉ là một bài kiểm tra kiến thức, mà là cơ hội tuyệt vời để em chứng minh mình đã dũng cảm, kiên cường và trưởng thành đến nhường nào!",
      advice: "Khi thấy căng thẳng, hãy hít thở sâu 3 nhịp và nhắc nhở bản thân: 'Mình đang lớn lên từng ngày!'"
    },
    {
      id: "quote-3",
      tag: "Niềm Tin Bản Thân",
      title: "Nỗ Lực Không Bao Giờ Phản Bội Em",
      content: "Những đêm miệt mài bên trang sách, những giọt mồ hôi rơi xuống sẽ không bao giờ phản bội em. Hãy đặt trọn niềm tin vào quá trình em đã đi qua và bản lĩnh mà em đã tích lũy!",
      advice: "Ghi nhớ rằng: kiến thức em đã học thật sự là tài sản nằm trong đầu em, không ai lấy đi được."
    },
    {
      id: "quote-4",
      tag: "Tự Tin Tỏa Sáng",
      title: "Mỗi Loài Hoa Đều Có Mùa Nở Riêng",
      content: "Đừng so sánh bước đi của mình với bất kỳ ai khác. Mỗi loài hoa đều có thời khắc bung nở của riêng mình. Chỉ cần em không bỏ cuộc, bông hoa cỏ 4 lá may mắn trong tim em sẽ rực rỡ nhất!",
      advice: "Tập trung vào tiến bộ của chính mình so với ngày hôm qua thay vì nhìn sang người khác."
    },
    {
      id: "quote-5",
      tag: "Lời Nhắn Từ Cô Nguyệt",
      title: "Cô Luôn Tin Tưởng Ở Em",
      content: "Hít một hơi thật sâu, mỉm cười và tự nhủ: 'Mình nhất định làm được!'. Cô Nguyệt luôn dõi theo, tự hào và đồng hành cùng em trên từng trang bài giảng. Vững tin lên nhé!",
      advice: "Cô luôn ở đây sẵn sàng giải đáp mọi thắc mắc và tiếp thêm năng lượng cho em!"
    },
    {
      id: "quote-6",
      tag: "Kỷ Luật & Bền Bỉ",
      title: "Đích Đến Đang Ở Rất Gần",
      content: "Học tập là một chặng đua tiếp sức của ý chí. Khi thấy thấm mệt, hãy cho phép mình nghỉ ngơi một chút rồi lại đứng lên bước tiếp. Thành công luôn dành trọn phần thưởng cho người không bỏ cuộc!",
      advice: "Uống một ngụm nước ấm, chớp mắt thư giãn 5 phút rồi tiếp tục chinh phục bài học tiếp theo nhé."
    },
    {
      id: "quote-7",
      tag: "Tư Duy Tích Cực",
      title: "Không Có Lỗi Sai, Chỉ Có Bài Học",
      content: "Đừng sợ làm sai khi luyện đề! Mỗi câu sai hôm nay là một lỗ hổng vừa được em lấp đầy kịp thời, giúp em vững vàng hơn gấp bội khi bước vào phòng thi chính thức.",
      advice: "Mở ngay sổ tay ghi lại lỗi sai và quy tắc ngữ pháp/từ vựng của câu vừa rồi nhé."
    },
    {
      id: "quote-8",
      tag: "Chăm Sóc Bản Thân",
      title: "Cơ Thể Khỏe Mạnh Là Vũ Khí Tối Thượng",
      content: "Trí óc minh mẫn chỉ đến từ một cơ thể khỏe mạnh. Đừng thức quá khuya, hãy ăn uống đủ chất, ngủ đủ giấc. Sự tỉnh táo trong phòng thi giá trị hơn 10 trang bài học vội trong cơn buồn ngủ!",
      advice: "Tối nay hãy sắp xếp đi ngủ đúng giờ để não bộ có thời gian nạp lại năng lượng nhé."
    },
    {
      id: "quote-9",
      tag: "Bí Quyết May Mắn",
      title: "May Mắn Đến Từ Sự Chuẩn Bị Kỹ Càng",
      content: "May mắn không phải là phép màu ngẫu nhiên rơi từ trên trời xuống. May mắn chính là khi cơ hội gặp được sự chuẩn bị kỹ lưỡng của em. Em đang chuẩn bị rất tốt, hãy yên tâm tiến bước!",
      advice: "Ôn lại các dạng bài quen thuộc, làm chắc chắn những câu cơ bản trước khi sang câu nâng cao."
    },
    {
      id: "quote-10",
      tag: "Khát Vọng Tương Lai",
      title: "Mở Ra Cánh Cửa Thế Giới Rộng Lớn",
      content: "Mỗi từ vựng, mỗi cấu trúc tiếng Anh em ghi nhớ hôm nay đều là một chiếc chìa khóa vạn năng mở ra cánh cửa học bổng, trường đại học mơ ước và tương lai rực rỡ mai sau!",
      advice: "Hãy tưởng tượng khoảnh khắc nhận được kết quả xuất sắc để tiếp thêm ngọn lửa nhiệt huyết!"
    },
    {
      id: "quote-11",
      tag: "Sự Tập Trung",
      title: "Sức Mạnh Của 1 Giờ Trọn Vẹn",
      content: "60 phút học với 100% sự tập trung có giá trị hơn 5 tiếng ngồi học vừa lướt mạng vừa lo âu. Hãy cất điện thoại sang một bên, dành trọn trái tim cho bài học, em sẽ thấy điều kỳ diệu!",
      advice: "Thử phương pháp Pomodoro: 25 phút học tập trung tuyệt đối và 5 phút giải lao."
    },
    {
      id: "quote-12",
      tag: "Tâm Lý Phòng Thi",
      title: "Bước Vào Phòng Thi Bằng Nụ Cười",
      content: "Tự tin là một nửa chiến thắng. Hãy bước vào kỳ thi với tâm thế của một người đã chiến đấu hết mình trong suốt quá trình vừa qua. Không việc gì phải sợ hãi, em đã sẵn sàng rồi!",
      advice: "Trước khi làm bài, nhắm mắt lại 10 giây, mỉm cười và tự gửi một lời chúc may mắn cho chính mình."
    }
  ];

  /**
   * Bộ câu hỏi trắc nghiệm tiếng Anh ôn thi nhanh để tích lũy Giọt Nước Nỗ Lực (+10💧)
   */
  const EXAM_QUIZ_QUESTIONS = [
    {
      id: "q-1",
      topic: "Từ Vựng Ôn Thi (Vocabulary)",
      question: "Choose the word CLOSEST in meaning to 'perseverance':",
      options: ["Persistence & determination", "Hesitation & doubt", "Sudden luck", "Carelessness"],
      answer: 0,
      explain: "'Perseverance' có nghĩa là sự kiên trì, bền bỉ vượt khó (= persistence & determination)."
    },
    {
      id: "q-2",
      topic: "Thành Ngữ Ôn Thi (Idioms)",
      question: "What does the idiom 'hit the books' mean?",
      options: ["To buy new books", "To begin studying seriously", "To damage books", "To read novels"],
      answer: 1,
      explain: "'Hit the books' là thành ngữ quen thuộc có nghĩa là bắt đầu học bài một cách chăm chỉ, nghiêm túc."
    },
    {
      id: "q-3",
      topic: "Cụm Động Từ (Phrasal Verbs)",
      question: "Never ______ your dreams, no matter how tough the exam preparation gets!",
      options: ["give up", "take after", "look into", "break into"],
      answer: 0,
      explain: "'Give up' nghĩa là từ bỏ. 'Never give up your dreams' = Đừng bao giờ từ bỏ ước mơ của bạn!"
    },
    {
      id: "q-4",
      topic: "Ngữ Pháp (Collocations)",
      question: "If you want to achieve high scores, you must ______ an effort every single day.",
      options: ["do", "make", "create", "take"],
      answer: 1,
      explain: "Cụm cố định luôn là 'make an effort' (nỗ lực, cố gắng), không dùng 'do an effort'."
    },
    {
      id: "q-5",
      topic: "Ngữ Pháp (Grammar)",
      question: "The harder you practice, ______ your exam result will be.",
      options: ["the good", "the better", "better", "the best"],
      answer: 1,
      explain: "Cấu trúc so sánh kép: The + comparative..., the + comparative... (Càng luyện tập chăm chỉ, kết quả càng tốt hơn)."
    },
    {
      id: "q-6",
      topic: "Từ Vựng Ôn Thi (Vocabulary)",
      question: "Which word means 'capable of recovering quickly from difficult situations'?",
      options: ["Fragile", "Resilient", "Lazy", "Trivial"],
      answer: 1,
      explain: "'Resilient' có nghĩa là kiên cường, có khả năng phục hồi và đứng dậy nhanh chóng sau thử thách."
    },
    {
      id: "q-7",
      topic: "Thành Ngữ Ôn Thi (Idioms)",
      question: "When students 'burn the midnight oil', they are ______.",
      options: ["cooking dinner", "working or studying late into the night", "wasting electricity", "sleeping early"],
      answer: 1,
      explain: "'Burn the midnight oil' có nghĩa là thức khuya miệt mài học tập hoặc làm việc."
    },
    {
      id: "q-8",
      topic: "Giới Từ (Prepositions)",
      question: "Believe ______ yourself and all that you are capable of achieving!",
      options: ["at", "on", "in", "with"],
      answer: 2,
      explain: "Động từ 'believe' đi với giới từ 'in': 'Believe in yourself' = Hãy tin vào chính bản thân em!"
    },
    {
      id: "q-9",
      topic: "Từ Vựng Ôn Thi (Vocabulary)",
      question: "Choose the word OPPOSITE in meaning to 'pessimistic':",
      options: ["Hopeful & optimistic", "Hopeless", "Worried", "Anxious"],
      answer: 0,
      explain: "'Pessimistic' là bi quan, trái nghĩa với 'optimistic / hopeful' (lạc quan, tràn đầy hy vọng)."
    },
    {
      id: "q-10",
      topic: "Thành Ngữ Ôn Thi (Idioms)",
      question: "The teacher wished her students: 'Break a leg on your test tomorrow!' - What does it mean?",
      options: ["Be careful not to fall", "Good luck and do well", "Cancel the test", "Work harder"],
      answer: 1,
      explain: "'Break a leg' là lời chúc 'Chúc may mắn, làm bài thật tốt nhé!' trong văn hóa tiếng Anh."
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
               alt="Cỏ 4 Lá May Mắn - Giai đoạn ${stage}"
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
  root.EXAM_QUIZ_QUESTIONS = EXAM_QUIZ_QUESTIONS;
  root.getCloverStage = getCloverStage;
  root.renderFlowerPotSvg = renderFlowerPotSvg;

})(typeof window !== 'undefined' ? window : global);
