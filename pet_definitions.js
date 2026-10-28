/**
 * VIRTUAL PET REGISTRY & CHARACTER DEFINITIONS (V4.0 - 18 CHARACTERS MASTER SHEET ALIGNED)
 * Exactly aligned with Cô Nguyệt's master illustration sheet (18 original characters)
 * Featuring 2D bold clean vector outlines, independent movable limbs, irregular blinking,
 * paw-licking grooming animations, and sleeping state machine.
 */
(function(root) {
  'use strict';

  const PET_REGISTRY = {
  "nana": {
    "id": "nana",
    "name": "Na Na",
    "defaultName": "Na Na",
    "title": "Bé Mèo Mướp Cam Tinh Nghịch",
    "species": "Mèo Mướp Cam",
    "category": "cat",
    "soundType": "meow",
    "favoriteFood": "Hạt cá hồi giòn rụm",
    "foodIcon": "🐟",
    "personality": "Nũng nịu, hay làm nũng, thích được xoa đầu và cực kỳ quấn quýt.",
    "description": "Bé mèo cam sọc vằn má bánh bao tròn xoe, nơ hồng điệu đà, mắt ngọc bích long lanh và 4 chân mập mạp.",
    "idleType": "cat-swish",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "148px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Meo meo~ Bé Na Na chào cô Nguyệt ạ! Chúc cô một ngày dạy học thật nhiều niềm vui! ✨🐾",
        "Đừng đơ ra nữa, mau xoa đầu em đi! 🥰🐾",
        "Mèo nhà khác toàn được người ta sờ! Hừ 😾",
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
        "Meo... bụng Na Na kêu rột rột rồi nè cô Nguyệt ơi! Cho Na Na xin chút hạt nha! 🥺"
      ],
      "sleep": [
        "Khò khò... Na Na nằm cuộn tròn ngủ ngoan một xíu nha cô giáo... 💤",
        "Zzz... trong mơ Na Na thấy cả một ngọn núi cá hồi giòn rụm... 🐟💤"
      ],
      "wake": [
        "Oáp~ Na Na vươn vai dậy rồi nè! Na Na sẵn sàng cổ vũ cô Nguyệt dạy học tiếp đây! ✨🐾"
      ]
    },
    "enName": "Orange Cat",
    "trait": "Friendly and playful",
    "traitVi": "Thân thiện & Tinh nghịch",
    "bgColor": "#FFE4BA",
    "accentColor": "#EA580C",
    "portraitImg": "assets/pet_cards/nana_portrait.png",
    "cardImg": "assets/pet_cards/nana_card.png",
    "idleSprite": "assets/pet_cards/nana_idle.png",
    "actionSprite": "assets/pet_cards/nana_action.png",
    "sleepSprite": "assets/pet_cards/nana_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-nana\">\n  <defs>\n      <radialGradient id=\"nana-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#FDBA74\"/><stop offset=\"65%\" stop-color=\"#FB923C\"/><stop offset=\"100%\" stop-color=\"#EA580C\"/>\n      </radialGradient>\n      <radialGradient id=\"nana-cream\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"90%\" stop-color=\"#FFFBEB\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 148px 145px;\">\n    \n      <path d=\"M 145 148 C 175 142 188 115 178 85 C 172 70 156 74 162 88 C 168 102 160 125 140 135 Z\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\"/>\n      <path d=\"M 178 85 C 172 70 156 74 162 88 C 168 85 174 82 178 85 Z\" fill=\"url(#nana-cream)\"/>\n      <path d=\"M 166 98 Q 174 100 172 106\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <path d=\"M 158 114 Q 166 116 162 122\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/>\n      \n      <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\"/>\n      <path d=\"M 78 120 Q 100 115 122 120 Q 132 150 100 168 Q 68 150 78 120 Z\" fill=\"url(#nana-cream)\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n      <polygon points=\"52,65 34,16 76,42\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"50,60 38,24 70,44\" fill=\"#FCE7F3\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n      <polygon points=\"148,65 166,16 124,42\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"150,60 162,24 130,44\" fill=\"#FCE7F3\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 52 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"88\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#nana-cream)\"/>\n      <ellipse cx=\"112\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#nana-cream)\"/>\n      <ellipse cx=\"100\" cy=\"104\" rx=\"10\" ry=\"7\" fill=\"url(#nana-cream)\"/>\n    \n    \n      <path d=\"M 88 52 L 94 66 L 100 56 L 106 66 L 112 52\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n      <line x1=\"50\" y1=\"94\" x2=\"30\" y2=\"90\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n      <line x1=\"48\" y1=\"100\" x2=\"28\" y2=\"102\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n      <line x1=\"150\" y1=\"94\" x2=\"170\" y2=\"90\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n      <line x1=\"152\" y1=\"100\" x2=\"172\" y2=\"102\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#10B981\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#10B981\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#7C2D12\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#7C2D12\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#7C2D12\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n      <g transform=\"translate(100, 126)\">\n        <polygon points=\"0,0 -16,-8 -14,6 0,0\" fill=\"#EC4899\" stroke=\"#BE185D\" stroke-width=\"1.5\"/>\n        <polygon points=\"0,0 16,-8 14,6 0,0\" fill=\"#EC4899\" stroke=\"#BE185D\" stroke-width=\"1.5\"/>\n        <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1.5\"/>\n      </g>\n    \n  </g>\n</svg>"
  },
  "snowball": {
    "id": "snowball",
    "name": "Bạch Tuyết",
    "defaultName": "Bạch Tuyết",
    "title": "Tiểu Thư Mèo Trắng Quý Phái",
    "species": "Mèo Trắng Mắt Hai Màu",
    "category": "cat",
    "soundType": "meow",
    "favoriteFood": "Pate ức gà mềm thơm",
    "foodIcon": "🍗",
    "personality": "Dịu dàng, thanh lịch, thích nằm cuộn tròn trong lòng và nghe tiếng giảng bài.",
    "description": "Bộ lông trắng muốt như tuyết đầu mùa, đôi mắt dị sắc quý phái, đeo vòng cổ đỏ chuông vàng may mắn.",
    "idleType": "cat-swish",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "148px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Meo~ Bạch Tuyết kính chào cô Nguyệt! 🌸 Chúc cô một ngày dạy học thật rạng rỡ!",
        "Đôi mắt một xanh ngọc, một hổ phách của em có làm cô mê mẩn hông? 🥰",
        "Tiểu thư Bạch Tuyết xin phép được ở bên cạnh cô suốt buổi dạy hôm nay nhé!"
      ],
      "feed": [
        "Chẹp chẹp! Pate ức gà mềm mịn thơm phức đúng chuẩn khẩu vị tiểu thư! 🍗✨",
        "Ăn xong Bạch Tuyết liếm mép sạch sẽ tinh tươm rồi nè, cảm ơn cô Nguyệt! 💖"
      ],
      "pet": [
        "Purrr... Lông Bạch Tuyết mượt mà như mây trắng đúng không cô? Thích quá à! 💕"
      ],
      "hungry": [
        "Meo nhỏ... Bạch Tuyết giữ ý lắm nhưng bụng đói kêu rồi nè cô ơi! 🥺🍗"
      ],
      "sleep": [
        "Zzz... Bạch Tuyết cuộn tròn ngủ ngoan như một cục bông tuyết nhỏ... 💤"
      ],
      "wake": [
        "Meo~ Em dậy rồi nè! Chiếc chuông vàng kêu leng keng chào ngày mới của cô! 🔔✨"
      ]
    },
    "enName": "White Cat",
    "trait": "Gentle and sweet",
    "traitVi": "Dịu dàng & Ngọt ngào",
    "bgColor": "#FED7E2",
    "accentColor": "#DB2777",
    "portraitImg": "assets/pet_cards/snowball_portrait.png",
    "cardImg": "assets/pet_cards/snowball_card.png",
    "idleSprite": "assets/pet_cards/snowball_idle.png",
    "actionSprite": "assets/pet_cards/snowball_action.png",
    "sleepSprite": "assets/pet_cards/snowball_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-snowball\">\n  <defs>\n      <radialGradient id=\"snow-fur\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"85%\" stop-color=\"#F8FAFC\"/><stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 148px 145px;\">\n    \n      <path d=\"M 145 148 C 178 140 188 112 176 80 C 170 65 155 70 162 84 C 168 98 160 125 140 135 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n      <polygon points=\"52,65 34,16 76,42\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"50,60 38,24 70,44\" fill=\"#FCE7F3\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n      <polygon points=\"148,65 166,16 124,42\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"150,60 162,24 130,44\" fill=\"#FCE7F3\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 52 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    \n    \n      <line x1=\"50\" y1=\"94\" x2=\"30\" y2=\"90\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n      <line x1=\"48\" y1=\"100\" x2=\"28\" y2=\"102\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n      <line x1=\"150\" y1=\"94\" x2=\"170\" y2=\"90\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n      <line x1=\"152\" y1=\"100\" x2=\"172\" y2=\"102\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <!-- Left Eye: Cyan Blue -->\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#0C4A6E\" stroke=\"#082F49\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#0284C7\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#082F49\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      <!-- Right Eye: Golden Amber -->\n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#D97706\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#451A03\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#0284C7\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#D97706\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#64748B\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#64748B\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n      <!-- Red Collar with Golden Bell matching reference image -->\n      <path d=\"M 72 120 Q 100 128 128 120\" stroke=\"#DC2626\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"100\" cy=\"126\" r=\"6\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1.5\"/>\n      <circle cx=\"100\" cy=\"127\" r=\"1.5\" fill=\"#78350F\"/>\n    \n  </g>\n</svg>"
  },
  "kuro": {
    "id": "kuro",
    "name": "Kuro",
    "defaultName": "Kuro",
    "title": "Hiệp Sĩ Mèo Đen Thông Minh",
    "species": "Mèo Đen Bombay",
    "category": "cat",
    "soundType": "meow",
    "favoriteFood": "Cá ngừ đại dương tươi rói",
    "foodIcon": "🍣",
    "personality": "Thông minh, tò mò, thích bảo vệ cô giáo và xua tan mọi xui xẻo.",
    "description": "Bộ lông mun bóng mượt, đôi mắt hổ phách sáng ngời, đeo vòng cổ đỏ chuông vàng may mắn.",
    "idleType": "cat-swish",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "148px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Meo! Hiệp sĩ Kuro điểm danh bảo vệ cô Nguyệt ạ! ⚔️🐾",
        "Đôi mắt hổ phách của em có thể nhìn thấu mọi mệt mỏi của cô đó!"
      ],
      "feed": [
        "Ngon tuyệt! Đĩa cá ngừ đại dương tươi rói nạp đầy năng lượng cho hiệp sĩ! 🍣💖"
      ],
      "pet": [
        "Purrr... Kuro rất thích được cô vuốt ve dọc sống lưng óng ánh nè! ✨"
      ],
      "hungry": [
        "Meo đói... Hiệp sĩ Kuro xin cô một lát cá ngừ tiếp sức nhé! 🥺"
      ],
      "sleep": [
        "Zzz... Kuro nhắm mắt nghỉ ngơi nhưng đôi tai vẫn nghe ngóng canh gác cho cô... 💤"
      ],
      "wake": [
        "Meo! Kuro đã tỉnh táo 100%, sẵn sàng làm nhiệm vụ hộ tống cô giáo! 🐾"
      ]
    },
    "enName": "Black Cat",
    "trait": "Curious and clever",
    "traitVi": "Tò mò & Thông minh",
    "bgColor": "#E9D5FF",
    "accentColor": "#7E22CE",
    "portraitImg": "assets/pet_cards/kuro_portrait.png",
    "cardImg": "assets/pet_cards/kuro_card.png",
    "idleSprite": "assets/pet_cards/kuro_idle.png",
    "actionSprite": "assets/pet_cards/kuro_action.png",
    "sleepSprite": "assets/pet_cards/kuro_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-kuro\">\n  <defs>\n      <radialGradient id=\"kuro-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"70%\" stop-color=\"#0F172A\"/><stop offset=\"100%\" stop-color=\"#020617\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 148px 145px;\">\n    \n      <path d=\"M 145 148 C 178 140 188 112 176 80 C 170 65 155 70 162 84 C 168 98 160 125 140 135 Z\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n      <polygon points=\"52,65 34,16 76,42\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"50,60 38,24 70,44\" fill=\"#881337\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n      <polygon points=\"148,65 166,16 124,42\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"150,60 162,24 130,44\" fill=\"#881337\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 52 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#F59E0B\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#F59E0B\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#475569\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#94A3B8\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n      <!-- Red Collar with Gold Bell matching reference -->\n      <path d=\"M 72 120 Q 100 128 128 120\" stroke=\"#DC2626\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"100\" cy=\"126\" r=\"6\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1.5\"/>\n      <circle cx=\"100\" cy=\"127\" r=\"1.5\" fill=\"#78350F\"/>\n    \n  </g>\n</svg>"
  },
  "calico": {
    "id": "calico",
    "name": "Tam Thể",
    "defaultName": "Tam Thể",
    "title": "Mèo Tam Thể Chiêu Tài Đón Lộc",
    "species": "Mèo Tam Thể Maneki-Neko",
    "category": "cat",
    "soundType": "meow",
    "favoriteFood": "Tôm hấp sả thơm lừng",
    "foodIcon": "🍤",
    "personality": "Vui vẻ, hoạt bát, mang lại may mắn và bình an cho cả lớp học.",
    "description": "Bộ lông 3 màu tài lộc, một bên tai cam một bên tai đen, mắt ngọc lục bảo trong veo.",
    "idleType": "cat-swish",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "148px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Meo meo! Mèo Tam Thể vẫy tay chiêu tài chúc cô Nguyệt vạn sự như ý! 🍀✨",
        "Hôm nay cô có tiết dạy thật thành công nhé cô ơi! 🥰"
      ],
      "feed": [
        "Ngon quá cô ơi! Đĩa tôm ngọt lịm làm Tam Thể no căng tròn! 🍤💖"
      ],
      "pet": [
        "Purrr... Được cô xoa đầu là may mắn nhân đôi luôn nè! 🌸"
      ],
      "hungry": [
        "Meo đói... Cho Tam Thể xin con tôm để nạp may mắn tiếp tục nha cô! 🥺"
      ],
      "sleep": [
        "Zzz... Tam Thể ngủ một giấc lấy sức đón lộc cho lớp học nè... 💤"
      ],
      "wake": [
        "Oáp~ Tam Thể dậy vẫy tay chiêu lộc cho cô Nguyệt ngay đây! 🐾🍀"
      ]
    },
    "enName": "Calico Cat",
    "trait": "Cheerful and affectionate",
    "traitVi": "Vui tươi & Quấn quýt",
    "bgColor": "#FEF3C7",
    "accentColor": "#D97706",
    "portraitImg": "assets/pet_cards/calico_portrait.png",
    "cardImg": "assets/pet_cards/calico_card.png",
    "idleSprite": "assets/pet_cards/calico_idle.png",
    "actionSprite": "assets/pet_cards/calico_action.png",
    "sleepSprite": "assets/pet_cards/calico_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-calico\">\n  <defs>\n      <radialGradient id=\"calico-base\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"90%\" stop-color=\"#FFFBEB\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 148px 145px;\">\n    \n      <path d=\"M 145 148 C 175 142 188 115 178 85 C 172 70 156 74 162 88 C 168 102 160 125 140 135 Z\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"2.2\"/>\n      <path d=\"M 178 85 C 172 70 156 74 162 88 Z\" fill=\"#1E293B\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n      <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n      <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#calico-base)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n      <path d=\"M 60 130 C 65 145 60 160 75 160 C 85 160 75 135 60 130 Z\" fill=\"#1E293B\"/>\n      <path d=\"M 135 130 C 125 145 130 160 120 160 C 110 160 120 135 135 130 Z\" fill=\"#F59E0B\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n      <polygon points=\"52,65 34,16 76,42\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"50,60 38,24 70,44\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n      <polygon points=\"148,65 166,16 124,42\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"150,60 162,24 130,44\" fill=\"#FDA4AF\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 52 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#calico-base)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n      <!-- Right Cheek Orange Patch -->\n      <path d=\"M 120 62 C 145 62 148 95 135 110 C 125 105 125 80 120 62 Z\" fill=\"#F59E0B\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#10B981\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#10B981\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#7C2D12\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#7C2D12\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#7C2D12\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "gray_cat": {
    "id": "gray_cat",
    "name": "Mèo Xám",
    "defaultName": "Mèo Xám",
    "title": "Mèo Xám Lông Ngắn Anh Điềm Đạm",
    "species": "Mèo Xám Lông Ngắn",
    "category": "cat",
    "soundType": "meow",
    "favoriteFood": "Thịt bò xé sợi mềm",
    "foodIcon": "🥩",
    "personality": "Điềm đạm, thanh lịch, thích nằm lặng lẽ bên bàn giáo viên nghe cô giảng.",
    "description": "Bộ lông xám khói mềm mại, sọc vằn xám đậm tinh tế, mắt hổ phách sáng lấp lánh.",
    "idleType": "cat-swish",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "148px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Meo~ Mèo Xám chúc cô Nguyệt có một buổi học thật yên bình và năng suất! 🌸",
        "Mèo Xám ngồi ngoan ngoãn ngắm cô giảng bài nè cô giáo! 🥰"
      ],
      "feed": [
        "Ngon lắm ạ! Thịt bò thơm mềm đúng sở thích của Mèo Xám, cảm ơn cô! 🥩💖"
      ],
      "pet": [
        "Purrr... Bộ lông xám nhung của em sờ ấm và mềm lắm đúng không cô? 💕"
      ],
      "sleep": [
        "Zzz... Mèo Xám chợp mắt một lát, cô mệt thì cũng nhớ nghỉ tay nha... 💤"
      ],
      "wake": [
        "Meo~ Em thức rồi! Lại được ngắm nụ cười tươi của cô Nguyệt rồi! ✨"
      ]
    },
    "enName": "Gray Cat",
    "trait": "Calm and elegant",
    "traitVi": "Điềm tĩnh & Thanh lịch",
    "bgColor": "#E2E8F0",
    "accentColor": "#475569",
    "portraitImg": "assets/pet_cards/gray_cat_portrait.png",
    "cardImg": "assets/pet_cards/gray_cat_card.png",
    "idleSprite": "assets/pet_cards/gray_cat_idle.png",
    "actionSprite": "assets/pet_cards/gray_cat_action.png",
    "sleepSprite": "assets/pet_cards/gray_cat_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-gray_cat\">\n  <defs>\n      <radialGradient id=\"gray-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#CBD5E1\"/><stop offset=\"70%\" stop-color=\"#94A3B8\"/><stop offset=\"100%\" stop-color=\"#64748B\"/>\n      </radialGradient>\n      <radialGradient id=\"gray-cream\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#F1F5F9\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 148px 145px;\">\n    \n      <path d=\"M 145 148 C 175 142 188 115 178 85 C 172 70 156 74 162 88 C 168 102 160 125 140 135 Z\" fill=\"url(#gray-coat)\" stroke=\"#475569\" stroke-width=\"2.2\"/>\n      <path d=\"M 166 98 Q 174 100 172 106\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <path d=\"M 158 114 Q 166 116 162 122\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#gray-coat)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#gray-cream)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#gray-coat)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#gray-cream)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#gray-coat)\" stroke=\"#475569\" stroke-width=\"2.2\"/>\n      <path d=\"M 80 122 Q 100 118 120 122 Q 128 148 100 165 Q 72 148 80 122 Z\" fill=\"url(#gray-cream)\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#gray-cream)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#gray-cream)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n      <polygon points=\"52,65 34,16 76,42\" fill=\"url(#gray-coat)\" stroke=\"#475569\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"50,60 38,24 70,44\" fill=\"#FCE7F3\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n      <polygon points=\"148,65 166,16 124,42\" fill=\"url(#gray-coat)\" stroke=\"#475569\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"150,60 162,24 130,44\" fill=\"#FCE7F3\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 52 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#gray-coat)\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"88\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#gray-cream)\"/>\n      <ellipse cx=\"112\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#gray-cream)\"/>\n    \n    \n      <path d=\"M 90 52 L 95 64 L 100 55 L 105 64 L 110 52\" stroke=\"#475569\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <line x1=\"50\" y1=\"94\" x2=\"30\" y2=\"90\" stroke=\"#64748B\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n      <line x1=\"48\" y1=\"100\" x2=\"28\" y2=\"102\" stroke=\"#64748B\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n      <line x1=\"150\" y1=\"94\" x2=\"170\" y2=\"90\" stroke=\"#64748B\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n      <line x1=\"152\" y1=\"100\" x2=\"172\" y2=\"102\" stroke=\"#64748B\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#D97706\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#D97706\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#334155\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#334155\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#334155\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "corgi": {
    "id": "corgi",
    "name": "Bánh Mì",
    "defaultName": "Bánh Mì",
    "title": "Cún Corgi Mông Trái Tim",
    "species": "Corgi Welsh Pembroke",
    "category": "dog",
    "soundType": "bark",
    "favoriteFood": "Xúc xích phô mai giòn",
    "foodIcon": "🌭",
    "personality": "Năng động, lúc nào cũng nhún nhảy vui vẻ, lắc mông trái tim siêu tít mù!",
    "description": "Tai dơi to dựng đứng, vệt trắng giữa trán, chân ngắn ngủn và mông trái tim lắc tít mù.",
    "idleType": "corgi-bounce",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-corgi-bounce",
      "tailOrigin": "158px 146px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Gâu gâu! Bánh Mì lắc mông trái tim chào cô Nguyệt tràn đầy năng lượng! 🐾💖",
        "Cô ơi ra chơi với em một tí xíu đi mà! Em đợi cô mãi nè! 🥰"
      ],
      "feed": [
        "Gâu! Cây xúc xích phô mai béo ngậy ngon số một luôn cô ơi! 🌭✨"
      ],
      "pet": [
        "Gâu gâu~ Được cô xoa tai dơi và xoa lưng là Bánh Mì thích nhất trần đời! 💕"
      ],
      "hungry": [
        "Gâu ẳng... Bánh Mì nhảy tốn năng lượng quá, cho em xin xúc xích nạp pin nha cô! 🥺"
      ],
      "sleep": [
        "Khò khò... Bánh Mì nằm bẹp dạng 4 chân ngủ ngon lành như ổ bánh mì nướng... 🍞💤"
      ],
      "wake": [
        "Gâu gâu! Bánh Mì bật dậy nhảy tưng tưng chào cô giáo đây! 🐾"
      ]
    },
    "enName": "Corgi",
    "trait": "Energetic and friendly",
    "traitVi": "Năng động & Thân thiện",
    "bgColor": "#FEF08A",
    "accentColor": "#CA8A04",
    "portraitImg": "assets/pet_cards/corgi_portrait.png",
    "cardImg": "assets/pet_cards/corgi_card.png",
    "idleSprite": "assets/pet_cards/corgi_idle.png",
    "actionSprite": "assets/pet_cards/corgi_action.png",
    "sleepSprite": "assets/pet_cards/corgi_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-corgi\">\n  <defs>\n      <radialGradient id=\"corgi-body\" cx=\"40%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#FBBF24\"/><stop offset=\"65%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#D97706\"/>\n      </radialGradient>\n      <radialGradient id=\"corgi-cream\" cx=\"50%\" cy=\"40%\" r=\"60%\">\n        <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail corgi-tail\" style=\"transform-origin: 158px 146px;\">\n    \n      <ellipse cx=\"164\" cy=\"142\" rx=\"14\" ry=\"11\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <circle cx=\"170\" cy=\"140\" r=\"5\" fill=\"#FFFFFF\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"50\" cy=\"162\" rx=\"22\" ry=\"18\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <ellipse cx=\"40\" cy=\"178\" rx=\"15\" ry=\"9\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <ellipse cx=\"150\" cy=\"162\" rx=\"22\" ry=\"18\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <ellipse cx=\"160\" cy=\"178\" rx=\"15\" ry=\"9\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"150\" rx=\"52\" ry=\"36\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"154\" rx=\"32\" ry=\"24\" fill=\"url(#corgi-cream)\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"142\" width=\"18\" height=\"38\" rx=\"9\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"178\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"178\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 145px;\">\n      <rect x=\"108\" y=\"142\" width=\"18\" height=\"38\" rx=\"9\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"178\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"178\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 50px 38px;\">\n      <ellipse cx=\"50\" cy=\"38\" rx=\"16\" ry=\"28\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.2\" transform=\"rotate(-20 50 38)\"/>\n      <ellipse cx=\"50\" cy=\"40\" rx=\"9\" ry=\"20\" fill=\"#FDE68A\" transform=\"rotate(-20 50 40)\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 150px 38px;\">\n      <ellipse cx=\"150\" cy=\"38\" rx=\"16\" ry=\"28\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.2\" transform=\"rotate(20 150 38)\"/>\n      <ellipse cx=\"150\" cy=\"40\" rx=\"9\" ry=\"20\" fill=\"#FDE68A\" transform=\"rotate(20 150 40)\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <ellipse cx=\"100\" cy=\"85\" rx=\"46\" ry=\"38\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n      <path d=\"M 100 52 C 94 66 74 72 74 94 C 74 114 126 114 126 94 C 126 72 106 66 100 52 Z\" fill=\"url(#corgi-cream)\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#92400E\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#92400E\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    \n      <ellipse cx=\"100\" cy=\"94\" rx=\"6.5\" ry=\"5\" fill=\"#0F172A\"/>\n      <ellipse cx=\"98.5\" cy=\"92.5\" rx=\"2\" ry=\"1.2\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n    \n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#92400E\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#92400E\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#92400E\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "shiba": {
    "id": "shiba",
    "name": "Mochi",
    "defaultName": "Mochi",
    "title": "Chó Shiba Inu Dũng Cảm",
    "species": "Shiba Inu Nhật Bản",
    "category": "dog",
    "soundType": "bark",
    "favoriteFood": "Thịt bò Wagyu thái mỏng",
    "foodIcon": "🥩",
    "personality": "Dũng cảm, tự tin, nụ cười toả nắng đem lại niềm vui bất tận cho mọi người.",
    "description": "Gương mặt Urajiro rạng rỡ, đuôi cuộn tròn donut, hai đốm mày trắng đáng yêu.",
    "idleType": "shiba-wag",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-shiba-wag",
      "tailOrigin": "150px 140px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Gâu! Shiba Mochi cười toả nắng chào cô Nguyệt tràn đầy năng lượng! 🐕☀️",
        "Cô giáo ơi, hôm nay lớp học của mình sẽ đạt 100 điểm xuất sắc luôn! ✨"
      ],
      "feed": [
        "Ngon tuyệt cú mèo! Miếng thịt bò Wagyu thơm lừng tiếp lửa cho Mochi! 🥩💖"
      ],
      "pet": [
        "Gâu gâu~ Mochi cười tít mắt khi được cô Nguyệt gãi cằm nè! 🥰"
      ],
      "sleep": [
        "Khò khò... Mochi cuộn tròn đuôi donut ngủ một giấc êm đềm... 💤"
      ],
      "wake": [
        "Gâu! Mochi tỉnh dậy nhe răng cười tươi như hoa chào cô giáo! ✨"
      ]
    },
    "enName": "Shiba Inu",
    "trait": "Brave and confident",
    "traitVi": "Dũng cảm & Tự tin",
    "bgColor": "#FFEDD5",
    "accentColor": "#EA580C",
    "portraitImg": "assets/pet_cards/shiba_portrait.png",
    "cardImg": "assets/pet_cards/shiba_card.png",
    "idleSprite": "assets/pet_cards/shiba_idle.png",
    "actionSprite": "assets/pet_cards/shiba_action.png",
    "sleepSprite": "assets/pet_cards/shiba_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-shiba\">\n  <defs>\n      <radialGradient id=\"shiba-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#FDBA74\"/><stop offset=\"60%\" stop-color=\"#F97316\"/><stop offset=\"100%\" stop-color=\"#C2410C\"/>\n      </radialGradient>\n      <radialGradient id=\"shiba-urajiro\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFFBEB\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail shiba-tail\" style=\"transform-origin: 150px 140px;\">\n    \n      <path d=\"M 148 142 C 168 135 180 115 174 96 C 168 80 148 84 148 98 C 148 108 162 108 160 118 C 158 126 148 132 144 135 Z\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"50\" cy=\"162\" rx=\"22\" ry=\"18\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <ellipse cx=\"40\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#shiba-urajiro)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <ellipse cx=\"150\" cy=\"162\" rx=\"22\" ry=\"18\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <ellipse cx=\"160\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#shiba-urajiro)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"150\" rx=\"48\" ry=\"38\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"154\" rx=\"30\" ry=\"24\" fill=\"url(#shiba-urajiro)\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"140\" width=\"18\" height=\"40\" rx=\"9\" fill=\"url(#shiba-urajiro)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 145px;\">\n      <rect x=\"108\" y=\"140\" width=\"18\" height=\"40\" rx=\"9\" fill=\"url(#shiba-urajiro)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 56px 60px;\">\n      <polygon points=\"58,62 42,22 80,44\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"56,58 46,28 74,45\" fill=\"url(#shiba-urajiro)\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 144px 60px;\">\n      <polygon points=\"142,62 158,22 120,44\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"144,58 154,28 126,45\" fill=\"url(#shiba-urajiro)\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 54 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 146 68 C 134 50 66 50 54 68 Z\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n      <!-- Urajiro Markings -->\n      <path d=\"M 56 102 C 60 122 80 124 100 124 C 120 124 140 122 144 102 C 140 90 125 96 100 96 C 75 96 60 90 56 102 Z\" fill=\"url(#shiba-urajiro)\"/>\n    \n    \n      <!-- White Eyebrow Dots -->\n      <circle cx=\"75\" cy=\"66\" r=\"4\" fill=\"url(#shiba-urajiro)\"/>\n      <circle cx=\"125\" cy=\"66\" r=\"4\" fill=\"url(#shiba-urajiro)\"/>\n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <ellipse cx=\"100\" cy=\"93\" rx=\"6.5\" ry=\"5\" fill=\"#0F172A\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#9A3412\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "golden": {
    "id": "golden",
    "name": "Lucky",
    "defaultName": "Lucky",
    "title": "Cún Vàng Golden Trung Thành",
    "species": "Golden Retriever",
    "category": "dog",
    "soundType": "bark",
    "favoriteFood": "Bánh thưởng giòn tan vị sữa",
    "foodIcon": "🦴",
    "personality": "Hiền lành, trung thành tuyệt đối, ánh mắt ấm áp luôn luôn yêu thương cô giáo.",
    "description": "Đôi tai cụp mềm mại đung đưa theo nhịp thở, mắt nâu trìu mến, chiếc đuôi vàng quạt gió vui vẻ.",
    "idleType": "golden-pant",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-golden-pant",
      "tailOrigin": "152px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Gâu gâu! Cún Lucky vẫy đuôi tít mù mừng cô Nguyệt đến lớp học ạ! 🦮💖",
        "Lucky luôn ở cạnh bên để bảo vệ và tiếp thêm niềm vui cho cô giáo!"
      ],
      "feed": [
        "Gâu! Bánh thưởng giòn rụm thơm mùi sữa ngon tuyệt cú mèo! 🦴✨"
      ],
      "pet": [
        "Gâu gâu~ Được cô vuốt ve đôi tai mềm là Lucky hạnh phúc nhất trần đời! 🥰"
      ],
      "sleep": [
        "Khò khò... Lucky đặt đầu lên chân cô ngủ một giấc thật bình yên... 💤"
      ],
      "wake": [
        "Gâu! Lucky thức dậy vẫy đuôi rối rít bên cạnh cô ngay lập tức! ✨🐾"
      ]
    },
    "enName": "Golden Retriever",
    "trait": "Kind and loyal",
    "traitVi": "Hiền lành & Trung thành",
    "bgColor": "#FEF3C7",
    "accentColor": "#B45309",
    "portraitImg": "assets/pet_cards/golden_portrait.png",
    "cardImg": "assets/pet_cards/golden_card.png",
    "idleSprite": "assets/pet_cards/golden_idle.png",
    "actionSprite": "assets/pet_cards/golden_action.png",
    "sleepSprite": "assets/pet_cards/golden_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-golden\">\n  <defs>\n      <radialGradient id=\"golden-fur\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#FDE047\"/><stop offset=\"60%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#B45309\"/>\n      </radialGradient>\n      <radialGradient id=\"golden-cream\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail golden-tail\" style=\"transform-origin: 152px 145px;\">\n    \n      <path d=\"M 148 145 C 178 138 188 110 178 80 C 170 65 155 70 162 85 C 168 100 162 125 142 135 Z\" fill=\"url(#golden-fur)\" stroke=\"#92400E\" stroke-width=\"2.2\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"50\" cy=\"162\" rx=\"22\" ry=\"18\" fill=\"url(#golden-fur)\" stroke=\"#92400E\" stroke-width=\"2\"/>\n      <ellipse cx=\"40\" cy=\"178\" rx=\"15\" ry=\"9\" fill=\"url(#golden-cream)\" stroke=\"#92400E\" stroke-width=\"2\"/>\n      <ellipse cx=\"150\" cy=\"162\" rx=\"22\" ry=\"18\" fill=\"url(#golden-fur)\" stroke=\"#92400E\" stroke-width=\"2\"/>\n      <ellipse cx=\"160\" cy=\"178\" rx=\"15\" ry=\"9\" fill=\"url(#golden-cream)\" stroke=\"#92400E\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"150\" rx=\"50\" ry=\"38\" fill=\"url(#golden-fur)\" stroke=\"#92400E\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"154\" rx=\"32\" ry=\"24\" fill=\"url(#golden-cream)\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"140\" width=\"18\" height=\"40\" rx=\"9\" fill=\"url(#golden-cream)\" stroke=\"#92400E\" stroke-width=\"2\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 145px;\">\n      <rect x=\"108\" y=\"140\" width=\"18\" height=\"40\" rx=\"9\" fill=\"url(#golden-cream)\" stroke=\"#92400E\" stroke-width=\"2\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n      <!-- Soft Floppy Left Drop Ear -->\n      <path d=\"M 54 62 C 34 65 30 102 46 112 C 58 118 64 100 58 75 Z\" fill=\"url(#golden-fur)\" stroke=\"#92400E\" stroke-width=\"2.2\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n      <!-- Soft Floppy Right Drop Ear -->\n      <path d=\"M 146 62 C 166 65 170 102 154 112 C 142 118 136 100 142 75 Z\" fill=\"url(#golden-fur)\" stroke=\"#92400E\" stroke-width=\"2.2\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 54 68 C 44 80 42 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 158 102 156 80 146 68 C 134 50 66 50 54 68 Z\" fill=\"url(#golden-fur)\" stroke=\"#92400E\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"98\" rx=\"24\" ry=\"16\" fill=\"url(#golden-cream)\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    \n      <ellipse cx=\"100\" cy=\"93\" rx=\"7\" ry=\"5\" fill=\"#1C1917\"/>\n      <circle cx=\"98\" cy=\"91.5\" r=\"1.5\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n    \n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#78350F\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#78350F\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#78350F\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "rabbit": {
    "id": "rabbit",
    "name": "Mimi",
    "defaultName": "Mimi",
    "title": "Bé Thỏ Trắng Hoạt Bát",
    "species": "Thỏ Hà Lan Tai Đứng",
    "category": "other",
    "soundType": "squeak",
    "favoriteFood": "Củ cà rốt tươi giòn ngọt",
    "foodIcon": "🥕",
    "personality": "Lanh lợi, dịu dàng, chiếc mũi hồng giật giật liên tục và hai tai dài ngoe nguẩy.",
    "description": "Bộ lông trắng muốt như kẹo bông, hai tai dài hồng hào, ôm củ cà rốt tươi ngon.",
    "idleType": "rabbit-twitch",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-rabbit-twitch",
      "tailOrigin": "150px 158px",
      "headOrigin": "100px 90px"
    },
    "quotes": {
      "greetings": [
        "Chíp chíp~ Bé thỏ Mimi giật giật chiếc mũi hồng chào cô Nguyệt! 🐰🥕",
        "Mimi mang theo một củ cà rốt giòn ngọt chúc cô một ngày dạy học thật ngọt ngào! ✨"
      ],
      "feed": [
        "Rộp rộp! Cà rốt giòn tan ngọt lịm nhai đã miệng quá cô Nguyệt ơi! 🥕💖"
      ],
      "pet": [
        "Chíp chíp~ Hai chiếc tai dài của Mimi rung rinh sung sướng khi được cô xoa đầu nè! 🥰"
      ],
      "sleep": [
        "Zzz... Mimi ôm củ cà rốt ngủ khì, chiếc mũi hồng thi thoảng lại khịt khịt... 💤"
      ],
      "wake": [
        "Bé thỏ Mimi bật dậy ngoe nguẩy đôi tai dài chào ngày mới của cô! 🐰✨"
      ]
    },
    "enName": "Rabbit",
    "trait": "Lively and gentle",
    "traitVi": "Hoạt bát & Dịu dàng",
    "bgColor": "#FCE7F3",
    "accentColor": "#DB2777",
    "portraitImg": "assets/pet_cards/rabbit_portrait.png",
    "cardImg": "assets/pet_cards/rabbit_card.png",
    "idleSprite": "assets/pet_cards/rabbit_idle.png",
    "actionSprite": "assets/pet_cards/rabbit_action.png",
    "sleepSprite": "assets/pet_cards/rabbit_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-rabbit\">\n  <defs></defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail rabbit-tail\" style=\"transform-origin: 150px 158px;\">\n    \n      <circle cx=\"152\" cy=\"156\" r=\"14\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"50\" cy=\"164\" rx=\"20\" ry=\"16\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <ellipse cx=\"42\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <ellipse cx=\"150\" cy=\"164\" rx=\"20\" ry=\"16\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <ellipse cx=\"158\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"150\" rx=\"46\" ry=\"38\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    \n    <g class=\"pet-paw-left\">\n      <ellipse cx=\"80\" cy=\"148\" rx=\"10\" ry=\"15\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\" transform=\"rotate(-15 80 148)\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 120px 148px;\">\n      <ellipse cx=\"120\" cy=\"148\" rx=\"10\" ry=\"15\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\" transform=\"rotate(15 120 148)\"/>\n    </g>\n    \n      <!-- Crunchy Carrot held in paws -->\n      <g class=\"rabbit-carrot\" transform=\"translate(100, 150) rotate(15)\">\n        <polygon points=\"-7,-15 7,-15 0,18\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n        <!-- Carrot creases -->\n        <line x1=\"-4\" y1=\"-8\" x2=\"2\" y2=\"-8\" stroke=\"#EA580C\" stroke-width=\"1.2\"/>\n        <line x1=\"-2\" y1=\"-2\" x2=\"4\" y2=\"-2\" stroke=\"#EA580C\" stroke-width=\"1.2\"/>\n        <line x1=\"-3\" y1=\"4\" x2=\"2\" y2=\"4\" stroke=\"#EA580C\" stroke-width=\"1.2\"/>\n        <!-- Green Leaves -->\n        <path d=\"M -2 -15 Q -10 -25 -14 -22 Q -8 -16 -2 -15\" fill=\"#22C55E\"/>\n        <path d=\"M 0 -15 Q 0 -28 3 -28 Q 4 -18 0 -15\" fill=\"#16A34A\"/>\n        <path d=\"M 2 -15 Q 10 -25 14 -22 Q 8 -16 2 -15\" fill=\"#22C55E\"/>\n      </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 90px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 65px 70px;\">\n      <g class=\"rabbit-ear-l\">\n        <ellipse cx=\"65\" cy=\"35\" rx=\"13\" ry=\"32\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2.2\" transform=\"rotate(-8 65 35)\"/>\n        <ellipse cx=\"65\" cy=\"36\" rx=\"7\" ry=\"24\" fill=\"#FDA4AF\" transform=\"rotate(-8 65 36)\"/>\n      </g>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 135px 70px;\">\n      <g class=\"rabbit-ear-r\">\n        <ellipse cx=\"135\" cy=\"35\" rx=\"13\" ry=\"32\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2.2\" transform=\"rotate(8 135 35)\"/>\n        <ellipse cx=\"135\" cy=\"36\" rx=\"7\" ry=\"24\" fill=\"#FDA4AF\" transform=\"rotate(8 135 36)\"/>\n      </g>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 52 70 C 44 82 42 104 54 116 C 68 128 84 128 100 128 C 116 128 132 128 146 116 C 158 104 156 82 148 70 C 136 52 64 52 52 70 Z\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2.5\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#DB2777\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#DB2777\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    \n      <g class=\"rabbit-nose\" style=\"transform-origin: 100px 93px;\">\n        <polygon points=\"96,91 104,91 100,95\" fill=\"#F43F5E\"/>\n      </g>\n    \n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#64748B\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#64748B\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "panda": {
    "id": "panda",
    "name": "Bảo Bảo",
    "defaultName": "Bảo Bảo",
    "title": "Gấu Trúc Bảo Bảo Điềm Đạm",
    "species": "Gấu Trúc Khổng Lồ",
    "category": "other",
    "soundType": "crunch",
    "favoriteFood": "Cành trúc xanh non giòn ngọt",
    "foodIcon": "🎍",
    "personality": "Điềm đạm, mũm mĩm, đáng yêu, vừa gặm trúc vừa ngồi ngoan trông chừng lớp học.",
    "description": "Bộ lông trắng đen biểu tượng, quầng mắt đen tròn xoe, ôm cành trúc xanh tươi.",
    "idleType": "panda-chew",
    "canGroom": false,
    "animationConfig": {
      "idleClass": "anim-panda-chew",
      "tailOrigin": "150px 160px",
      "headOrigin": "100px 88px"
    },
    "quotes": {
      "greetings": [
        "Ụ à~ Gấu trúc Bảo Bảo ôm cành trúc chào cô Nguyệt ạ! 🐼🎍",
        "Bảo Bảo ngồi ngoan ngoãn cổ vũ cô giáo dạy thật vui nhé!"
      ],
      "feed": [
        "Rôm rốp! Cành trúc non thơm mát nhai giòn rụm đã miệng quá! 🎍💖"
      ],
      "pet": [
        "Ụ à~ Được cô xoa chiếc bụng bự và hai tai tròn là Bảo Bảo thích mê! 🥰"
      ],
      "sleep": [
        "Zzz... Bảo Bảo ôm chặt cành trúc lăn ra ngủ tròn xoe như quả bóng... 💤"
      ],
      "wake": [
        "Ụ à~ Bảo Bảo chớp mắt thức dậy rồi nè cô ơi! ✨🐼"
      ]
    },
    "enName": "Panda",
    "trait": "Calm and adorable",
    "traitVi": "Điềm đạm & Đáng yêu",
    "bgColor": "#D1FAE5",
    "accentColor": "#059669",
    "portraitImg": "assets/pet_cards/panda_portrait.png",
    "cardImg": "assets/pet_cards/panda_card.png",
    "idleSprite": "assets/pet_cards/panda_idle.png",
    "actionSprite": "assets/pet_cards/panda_action.png",
    "sleepSprite": "assets/pet_cards/panda_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-panda\">\n  <defs>\n      <radialGradient id=\"panda-dark\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"70%\" stop-color=\"#0F172A\"/><stop offset=\"100%\" stop-color=\"#020617\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail \" style=\"transform-origin: 150px 150px;\">\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"50\" cy=\"164\" rx=\"22\" ry=\"18\" fill=\"url(#panda-dark)\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <ellipse cx=\"150\" cy=\"164\" rx=\"22\" ry=\"18\" fill=\"url(#panda-dark)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"150\" rx=\"52\" ry=\"40\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"132\" rx=\"48\" ry=\"18\" fill=\"url(#panda-dark)\"/>\n    \n    <g class=\"pet-paw-left\">\n      <ellipse cx=\"72\" cy=\"144\" rx=\"14\" ry=\"20\" fill=\"url(#panda-dark)\" stroke=\"#020617\" stroke-width=\"2\" transform=\"rotate(15 72 144)\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 115px 145px;\">\n      <ellipse cx=\"128\" cy=\"144\" rx=\"14\" ry=\"20\" fill=\"url(#panda-dark)\" stroke=\"#020617\" stroke-width=\"2\" transform=\"rotate(-15 128 144)\"/>\n    </g>\n    \n      <!-- Fresh Green Bamboo Stalk -->\n      <g class=\"pet-prop-bamboo\" style=\"transform-origin: 130px 175px;\">\n        <path d=\"M 125 185 C 135 150 145 110 135 70\" stroke=\"#16A34A\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n        <line x1=\"128\" y1=\"145\" x2=\"134\" y2=\"147\" stroke=\"#14532D\" stroke-width=\"3\"/>\n        <line x1=\"133\" y1=\"110\" x2=\"139\" y2=\"112\" stroke=\"#14532D\" stroke-width=\"3\"/>\n        <!-- Bamboo Leaves -->\n        <path d=\"M 134 110 C 150 102 165 112 165 112 C 150 118 134 110 134 110 Z\" fill=\"#22C55E\"/>\n        <path d=\"M 137 78 C 155 68 170 76 170 76 C 155 84 137 78 137 78 Z\" fill=\"#22C55E\"/>\n        <path d=\"M 134 72 C 130 50 140 42 140 42 C 145 55 134 72 134 72 Z\" fill=\"#4ADE80\"/>\n      </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 88px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 50px 42px;\">\n      <circle cx=\"50\" cy=\"42\" r=\"18\" fill=\"url(#panda-dark)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 150px 42px;\">\n      <circle cx=\"150\" cy=\"42\" r=\"18\" fill=\"url(#panda-dark)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <ellipse cx=\"100\" cy=\"88\" rx=\"52\" ry=\"42\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2.5\"/>\n    \n    \n      <!-- Black Eye Patches -->\n      <ellipse cx=\"74\" cy=\"80\" rx=\"16\" ry=\"14\" fill=\"url(#panda-dark)\" transform=\"rotate(-15 74 80)\"/>\n      <ellipse cx=\"126\" cy=\"80\" rx=\"16\" ry=\"14\" fill=\"url(#panda-dark)\" transform=\"rotate(15 126 80)\"/>\n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      \n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      \n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <ellipse cx=\"100\" cy=\"94\" rx=\"7\" ry=\"5\" fill=\"#0F172A\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#334155\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#334155\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#334155\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "fox": {
    "id": "fox",
    "name": "Kiki",
    "defaultName": "Kiki",
    "title": "Cáo Lửa Thông Minh Tinh Anh",
    "species": "Cáo Lửa Kitsune",
    "category": "other",
    "soundType": "squeak",
    "favoriteFood": "Quả mọng rừng mọng nước",
    "foodIcon": "🍓",
    "personality": "Thông minh, lanh lợi, chiếc đuôi xù bồng bềnh uốn lượn như ngọn lửa.",
    "description": "Bộ lông cam đỏ rực rỡ, má trắng tinh khôi, đôi tai nhọn chỏm đen và đuôi xù viền trắng.",
    "idleType": "fox-tail",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-fox-tail",
      "tailOrigin": "145px 150px",
      "headOrigin": "100px 86px"
    },
    "quotes": {
      "greetings": [
        "Chào cô Nguyệt! Cáo nhỏ Kiki vẫy chiếc đuôi xù ấm áp chào cô ạ! 🦊✨",
        "Đôi mắt tinh anh của Kiki sẽ giúp cô quản lý lớp học thật xuất sắc!"
      ],
      "feed": [
        "Nham nham! Đĩa dâu mọng nước ngọt ngào đúng khẩu vị Kiki luôn! 🍓💖"
      ],
      "pet": [
        "Gừ gừ~ Chiếc đuôi xù của Kiki quấn quanh cổ cô để sưởi ấm cho cô nè! 🥰"
      ],
      "sleep": [
        "Zzz... Kiki cuộn tròn giấu chiếc mũi nhọn dưới chùm đuôi lông xù ngủ ngon... 💤"
      ],
      "wake": [
        "Kiki thức dậy vươn vai, chiếc đuôi xù lại bồng bềnh như ngọn lửa! ✨🦊"
      ]
    },
    "enName": "Fox",
    "trait": "Smart and playful",
    "traitVi": "Thông minh & Tinh nghịch",
    "bgColor": "#FFEDD5",
    "accentColor": "#EA580C",
    "portraitImg": "assets/pet_cards/fox_portrait.png",
    "cardImg": "assets/pet_cards/fox_card.png",
    "idleSprite": "assets/pet_cards/fox_idle.png",
    "actionSprite": "assets/pet_cards/fox_action.png",
    "sleepSprite": "assets/pet_cards/fox_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-fox\">\n  <defs>\n      <radialGradient id=\"fox-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#FB923C\"/><stop offset=\"60%\" stop-color=\"#EA580C\"/><stop offset=\"100%\" stop-color=\"#C2410C\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail fox-tail\" style=\"transform-origin: 145px 150px;\">\n    \n      <path d=\"M 140 150 C 180 145 198 105 185 68 C 170 45 140 65 152 90 C 160 110 155 130 135 140 Z\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n      <path d=\"M 185 68 C 170 45 140 65 152 90 Z\" fill=\"#FFFFFF\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"50\" cy=\"162\" rx=\"20\" ry=\"17\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <ellipse cx=\"42\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n      <ellipse cx=\"150\" cy=\"162\" rx=\"20\" ry=\"17\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <ellipse cx=\"158\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n      <path d=\"M 76 120 Q 100 115 124 120 Q 132 150 100 168 Q 68 150 76 120 Z\" fill=\"#FFFFFF\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 145px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 86px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 55px;\">\n      <polygon points=\"56,65 30,12 78,40\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"30,12 40,24 48,18\" fill=\"#1E293B\"/>\n      <polygon points=\"54,60 38,24 72,42\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 55px;\">\n      <polygon points=\"144,65 170,12 122,40\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"170,12 160,24 152,18\" fill=\"#1E293B\"/>\n      <polygon points=\"146,60 162,24 128,42\" fill=\"#FFFFFF\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 52 68 C 42 78 36 100 52 114 C 68 126 84 126 100 126 C 116 126 132 126 148 114 C 164 100 158 78 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n      <!-- Cream Cheeks -->\n      <path d=\"M 46 95 C 46 118 78 124 100 124 C 122 124 154 118 154 95 C 130 92 115 108 100 108 C 85 108 70 92 46 95 Z\" fill=\"#FFFFFF\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <ellipse cx=\"100\" cy=\"94\" rx=\"5\" ry=\"4\" fill=\"#0F172A\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#9A3412\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "penguin": {
    "id": "penguin",
    "name": "Pingu",
    "defaultName": "Pingu",
    "title": "Chim Cánh Cụt Lạc Quan",
    "species": "Cánh Cụt Hoàng Đế Con",
    "category": "other",
    "soundType": "squeak",
    "favoriteFood": "Cá tuyết Nam Cực tươi rói",
    "foodIcon": "🐟",
    "personality": "Lạc quan, yêu đời, đi đứng lắc lư lạch bạch và vỗ 2 cánh cụt tí xíu bành bạch!",
    "description": "Bộ tuxedo xanh đen tuyền, bụng trắng tròn vo, đôi má vàng óng và bước đi lạch bạch siêu cưng.",
    "idleType": "penguin-waddle",
    "canGroom": false,
    "animationConfig": {
      "idleClass": "anim-penguin-waddle",
      "tailOrigin": "100px 185px",
      "headOrigin": "100px 80px"
    },
    "quotes": {
      "greetings": [
        "Quác quác~ Pingu lắc lư lạch bạch chào cô Nguyệt ạ! 🐧❄️",
        "Pingu mang theo gió mát Nam Cực để xua tan mọi mệt mỏi cho cô giáo nè!"
      ],
      "feed": [
        "Chẹp chẹp! Con cá tuyết béo ngậy nhai đã miệng cực kỳ luôn! 🐟💖"
      ],
      "pet": [
        "Quác quác~ Hai chiếc cánh cụt nhỏ vỗ bành bạch vì được cô xoa đầu nè! 🥰🐧"
      ],
      "sleep": [
        "Zzz... Pingu giấu mỏ cam vào ngực ngủ ngoan ngoãn trên lớp tuyết mềm... 💤"
      ],
      "wake": [
        "Pingu tỉnh dậy vỗ cánh bành bạch sẵn sàng đồng hành cùng cô giáo! ✨🐧"
      ]
    },
    "enName": "Penguin",
    "trait": "Cheerful and optimistic",
    "traitVi": "Vui vẻ & Lạc quan",
    "bgColor": "#E0F2FE",
    "accentColor": "#0369A1",
    "portraitImg": "assets/pet_cards/penguin_portrait.png",
    "cardImg": "assets/pet_cards/penguin_card.png",
    "idleSprite": "assets/pet_cards/penguin_idle.png",
    "actionSprite": "assets/pet_cards/penguin_action.png",
    "sleepSprite": "assets/pet_cards/penguin_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-penguin\">\n  <defs>\n      <radialGradient id=\"penguin-dark\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"70%\" stop-color=\"#0F172A\"/><stop offset=\"100%\" stop-color=\"#020617\"/>\n      </radialGradient>\n      <radialGradient id=\"penguin-yellow\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n        <stop offset=\"0%\" stop-color=\"#FDE047\" stop-opacity=\"0.85\"/><stop offset=\"100%\" stop-color=\"#FDE047\" stop-opacity=\"0\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail \" style=\"transform-origin: 150px 150px;\">\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <!-- 2 Bright Orange Webbed Feet -->\n      <ellipse cx=\"78\" cy=\"182\" rx=\"18\" ry=\"9\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"2\"/>\n      <ellipse cx=\"122\" cy=\"182\" rx=\"18\" ry=\"9\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"135\" rx=\"54\" ry=\"48\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"142\" rx=\"36\" ry=\"36\" fill=\"#FFFFFF\"/>\n    \n    <g class=\"pet-paw-left\">\n      <g class=\"penguin-flipper-l\" style=\"transform-origin: 52px 115px;\">\n        <ellipse cx=\"44\" cy=\"130\" rx=\"12\" ry=\"26\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2\" transform=\"rotate(25 44 130)\"/>\n      </g>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 115px 145px;\">\n      <g class=\"penguin-flipper-r\" style=\"transform-origin: 148px 115px;\">\n        <ellipse cx=\"156\" cy=\"130\" rx=\"12\" ry=\"26\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2\" transform=\"rotate(-25 156 130)\"/>\n      </g>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 80px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 55px 55px;\"></g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 145px 55px;\"></g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <ellipse cx=\"100\" cy=\"80\" rx=\"42\" ry=\"36\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n      <ellipse cx=\"64\" cy=\"82\" rx=\"14\" ry=\"12\" fill=\"url(#penguin-yellow)\"/>\n      <ellipse cx=\"136\" cy=\"82\" rx=\"14\" ry=\"12\" fill=\"url(#penguin-yellow)\"/>\n      <ellipse cx=\"78\" cy=\"78\" rx=\"14\" ry=\"16\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"122\" cy=\"78\" rx=\"14\" ry=\"16\" fill=\"#FFFFFF\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#0F172A\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#0F172A\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n     \n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <polygon points=\"92,86 108,86 100,98\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <polygon points=\"90,84 110,84 100,93\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n      <polygon points=\"93,93 107,93 100,102\" fill=\"#EA580C\"/>\n      <ellipse cx=\"100\" cy=\"94\" rx=\"4\" ry=\"2.2\" fill=\"#E11D48\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <polygon points=\"90,84 110,84 100,94\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <polygon points=\"94,88 106,88 100,96\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.5\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "capybara": {
    "id": "capybara",
    "name": "Cà Phê",
    "defaultName": "Cà Phê",
    "title": "Bộ Trưởng Capybara Siêu Chill",
    "species": "Chuột Lang Nước (Capybara)",
    "category": "other",
    "soundType": "chime",
    "favoriteFood": "Quả quýt Yuzu vàng ươm mọng nước",
    "foodIcon": "🍊",
    "personality": "Thánh điềm tĩnh, bạn thân của muôn loài, đầu đội quả quýt vàng và thiền định cực chill!",
    "description": "Mõm vuông trầm mặc, quả quýt Yuzu cân bằng trên đầu, đôi mắt thiền định bình an.",
    "idleType": "capy-zen",
    "canGroom": false,
    "animationConfig": {
      "idleClass": "anim-capy-zen",
      "tailOrigin": "100px 180px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Chill đi cô ơi... Chuyện gì khó rồi cũng sẽ qua hết thôi mà~ 🍊🧘‍♂️",
        "Quả quýt Yuzu trên đầu em giữ thăng bằng giỏi chưa kìa, không rơi một ly!"
      ],
      "feed": [
        "Ngon lành~ Vị quýt Yuzu thơm thanh làm tâm hồn Capybara thanh tịnh tuyệt đối! 🍊✨"
      ],
      "pet": [
        "Mắt nhắm nghiền thư thái... Được cô vuốt ve thì tâm bất biến giữa dòng đời vạn biến! 🥰"
      ],
      "sleep": [
        "Zzz... Cà Phê thở sâu thiền định trong giấc ngủ êm đềm... 💤"
      ],
      "wake": [
        "Capybara khẽ chớp mắt, quả quýt trên đầu vẫn thăng bằng hoàn hảo chào cô! 🍊✨"
      ]
    },
    "enName": "Capybara",
    "trait": "Relaxed and easygoing",
    "traitVi": "Thư thái & Vô tư",
    "bgColor": "#FEF08A",
    "accentColor": "#854D0E",
    "portraitImg": "assets/pet_cards/capybara_portrait.png",
    "cardImg": "assets/pet_cards/capybara_card.png",
    "idleSprite": "assets/pet_cards/capybara_idle.png",
    "actionSprite": "assets/pet_cards/capybara_action.png",
    "sleepSprite": "assets/pet_cards/capybara_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-capybara\">\n  <defs>\n      <radialGradient id=\"capy-fur\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#D97706\"/><stop offset=\"60%\" stop-color=\"#B45309\"/><stop offset=\"100%\" stop-color=\"#78350F\"/>\n      </radialGradient>\n      <radialGradient id=\"capy-snout\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#92400E\"/><stop offset=\"100%\" stop-color=\"#451A03\"/>\n      </radialGradient>\n      <radialGradient id=\"yuzu-grad\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#FEF08A\"/><stop offset=\"60%\" stop-color=\"#FACC15\"/><stop offset=\"100%\" stop-color=\"#EAB308\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail \" style=\"transform-origin: 150px 150px;\">\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"46\" cy=\"176\" rx=\"18\" ry=\"11\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n      <ellipse cx=\"154\" cy=\"176\" rx=\"18\" ry=\"11\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"148\" rx=\"60\" ry=\"42\" fill=\"url(#capy-fur)\" stroke=\"#78350F\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"154\" rx=\"40\" ry=\"28\" fill=\"#B45309\" opacity=\"0.6\"/>\n    \n    <g class=\"pet-paw-left\">\n      <ellipse cx=\"76\" cy=\"180\" rx=\"14\" ry=\"9\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 115px 145px;\">\n      <ellipse cx=\"124\" cy=\"180\" rx=\"14\" ry=\"9\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 54px 62px;\">\n      <ellipse cx=\"54\" cy=\"62\" rx=\"9\" ry=\"8\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 146px 62px;\">\n      <ellipse cx=\"146\" cy=\"62\" rx=\"9\" ry=\"8\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 64 68 C 64 56 136 56 136 68 C 146 88 142 124 128 128 C 100 134 72 134 72 128 C 58 124 54 88 64 68 Z\" fill=\"url(#capy-fur)\" stroke=\"#78350F\" stroke-width=\"2.5\"/>\n      <path d=\"M 74 94 C 74 84 126 84 126 94 C 128 116 118 126 100 126 C 82 126 72 116 74 94 Z\" fill=\"url(#capy-snout)\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <path d=\"M 66 82 Q 76 79 86 82\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"76\" cy=\"82\" r=\"2.8\" fill=\"#451A03\"/>\n      <path d=\"M 114 82 Q 124 79 134 82\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"124\" cy=\"82\" r=\"2.8\" fill=\"#451A03\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 82 Q 76 84 86 82\" stroke=\"#451A03\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 82 Q 124 84 134 82\" stroke=\"#451A03\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 82 Q 76 70 86 82\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 82 Q 124 70 134 82\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 81 Q 76 86 86 81\" stroke=\"#451A03\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 81 Q 124 86 134 81\" stroke=\"#451A03\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    \n      <ellipse cx=\"93\" cy=\"104\" rx=\"2.8\" ry=\"4.5\" fill=\"#1C1917\"/>\n      <ellipse cx=\"107\" cy=\"104\" rx=\"2.8\" ry=\"4.5\" fill=\"#1C1917\"/>\n    \n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\"><path d=\"M 96 114 Q 100 117 104 114\" stroke=\"#1C1917\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/></g>\n      <g class=\"pet-mouth-smile\"><path d=\"M 94 114 Q 100 122 106 114 Z\" fill=\"#991B1B\"/></g>\n      <g class=\"pet-mouth-lick\"><path d=\"M 94 114 Q 100 117 106 114\" stroke=\"#1C1917\" stroke-width=\"2.2\" fill=\"none\"/></g>\n      <g class=\"pet-mouth-sleep\"><path d=\"M 96 114 Q 100 116 104 114\" stroke=\"#1C1917\" stroke-width=\"1.8\" fill=\"none\"/></g>\n    </g>\n    <!-- Accessories / Props -->\n    \n      <!-- Ripe Yuzu Fruit with Green Leaf on Head -->\n      <g class=\"capy-yuzu\" style=\"transform-origin: 100px 50px;\">\n        <ellipse cx=\"106\" cy=\"38\" rx=\"6\" ry=\"3.5\" fill=\"#15803D\" transform=\"rotate(-20 106 38)\"/>\n        <path d=\"M 100 42 Q 101 36 103 35\" stroke=\"#14532D\" stroke-width=\"2\" fill=\"none\"/>\n        <circle cx=\"100\" cy=\"50\" r=\"14\" fill=\"url(#yuzu-grad)\" stroke=\"#CA8A04\" stroke-width=\"1.8\"/>\n        <circle cx=\"96\" cy=\"46\" r=\"3.5\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n        <circle cx=\"100\" cy=\"42\" r=\"1.5\" fill=\"#A16207\"/>\n      </g>\n    \n  </g>\n</svg>"
  },
  "hamster": {
    "id": "hamster",
    "name": "Hạt Tiêu",
    "defaultName": "Hạt Tiêu",
    "title": "Bé Chuột Hamster Mập Mạp",
    "species": "Chuột Hamster Bánh Mì",
    "category": "other",
    "soundType": "crunch",
    "favoriteFood": "Hạt hướng dương béo ngậy",
    "foodIcon": "🌻",
    "personality": "Nhỏ nhắn, hiếu động, hai má phính lúc nào cũng phồng to chứa đầy hạt hướng dương.",
    "description": "Thân hình tròn vo như cục bột vàng, hai má phúng phính, ôm hạt hướng dương siêu to khổng lồ.",
    "idleType": "corgi-bounce",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-corgi-bounce",
      "tailOrigin": "100px 175px",
      "headOrigin": "100px 90px"
    },
    "quotes": {
      "greetings": [
        "Chít chít! Bé Hamster Hạt Tiêu chào cô Nguyệt ạ! 🐹🌻",
        "Hai má Hạt Tiêu chứa đầy hạt hướng dương thơm lừng tặng cô nè!"
      ],
      "feed": [
        "Rốp rốp! Hạt hướng dương béo ngậy nhai tanh tách vui tai quá! 🌻💖"
      ],
      "pet": [
        "Chít chít~ Được cô xoa hai chiếc má phúng phính là Hạt Tiêu thích nhất! 🥰"
      ],
      "sleep": [
        "Zzz... Hạt Tiêu cuộn tròn thành một cục bông vàng óng ngủ ngon lành... 💤"
      ],
      "wake": [
        "Chít chít! Hamster thức dậy gặm hạt tí tách chào ngày mới! ✨🐹"
      ]
    },
    "enName": "Hamster",
    "trait": "Small and active",
    "traitVi": "Nhỏ nhắn & Hiếu động",
    "bgColor": "#FED7AA",
    "accentColor": "#D97706",
    "portraitImg": "assets/pet_cards/hamster_portrait.png",
    "cardImg": "assets/pet_cards/hamster_card.png",
    "idleSprite": "assets/pet_cards/hamster_idle.png",
    "actionSprite": "assets/pet_cards/hamster_action.png",
    "sleepSprite": "assets/pet_cards/hamster_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-hamster\">\n  <defs>\n      <radialGradient id=\"ham-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#FDE047\"/><stop offset=\"60%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#D97706\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail \" style=\"transform-origin: 150px 150px;\">\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"56\" cy=\"172\" rx=\"16\" ry=\"10\" fill=\"#FFFFFF\" stroke=\"#D97706\" stroke-width=\"2\"/>\n      <ellipse cx=\"144\" cy=\"172\" rx=\"16\" ry=\"10\" fill=\"#FFFFFF\" stroke=\"#D97706\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"145\" rx=\"54\" ry=\"42\" fill=\"url(#ham-coat)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"150\" rx=\"36\" ry=\"28\" fill=\"#FFFFFF\"/>\n    \n    <g class=\"pet-paw-left\">\n      <ellipse cx=\"80\" cy=\"142\" rx=\"9\" ry=\"14\" fill=\"#FFFFFF\" stroke=\"#D97706\" stroke-width=\"2\" transform=\"rotate(-20 80 142)\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 120px 142px;\">\n      <ellipse cx=\"120\" cy=\"142\" rx=\"9\" ry=\"14\" fill=\"#FFFFFF\" stroke=\"#D97706\" stroke-width=\"2\" transform=\"rotate(20 120 142)\"/>\n    </g>\n    \n      <!-- Giant Sunflower Seed held in paws -->\n      <g class=\"hamster-seed\" transform=\"translate(100, 145)\">\n        <ellipse cx=\"0\" cy=\"0\" rx=\"13\" ry=\"18\" fill=\"#1C1917\" stroke=\"#44403C\" stroke-width=\"1.8\"/>\n        <!-- Seed White Stripes -->\n        <path d=\"M 0 -16 Q -5 0 0 16\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" fill=\"none\"/>\n        <path d=\"M -6 -12 Q -9 0 -5 12\" stroke=\"#FFFFFF\" stroke-width=\"1.2\" fill=\"none\"/>\n        <path d=\"M 6 -12 Q 9 0 5 12\" stroke=\"#FFFFFF\" stroke-width=\"1.2\" fill=\"none\"/>\n      </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 88px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 55px 45px;\">\n      <circle cx=\"55\" cy=\"45\" r=\"14\" fill=\"url(#ham-coat)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <circle cx=\"55\" cy=\"45\" r=\"8\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 145px 45px;\">\n      <circle cx=\"145\" cy=\"45\" r=\"14\" fill=\"url(#ham-coat)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <circle cx=\"145\" cy=\"45\" r=\"8\" fill=\"#FDA4AF\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <ellipse cx=\"100\" cy=\"88\" rx=\"54\" ry=\"40\" fill=\"url(#ham-coat)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n      <!-- Chubby Cheeks -->\n      <ellipse cx=\"70\" cy=\"98\" rx=\"20\" ry=\"15\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"130\" cy=\"98\" rx=\"20\" ry=\"15\" fill=\"#FFFFFF\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <polygon points=\"97,91 103,91 100,95\" fill=\"#F43F5E\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#92400E\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#92400E\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#92400E\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "raccoon": {
    "id": "raccoon",
    "name": "Meo Meo",
    "defaultName": "Meo Meo",
    "title": "Gấu Mèo Raccoon Tinh Nghịch",
    "species": "Gấu Mèo Bắc Mỹ",
    "category": "other",
    "soundType": "squeak",
    "favoriteFood": "Bánh quy bơ giòn rụm",
    "foodIcon": "🍪",
    "personality": "Tinh nghịch, tò mò, đôi tay khéo léo thích rửa sạch đồ ăn trước khi thưởng thức.",
    "description": "Mặt nạ đen hiệp sĩ bí ẩn, chiếc đuôi sọc vòng đen xám bồng bềnh, bàn tay khéo léo.",
    "idleType": "fox-tail",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-fox-tail",
      "tailOrigin": "145px 150px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Chít chít! Raccoon Meo Meo đeo mặt nạ bí ẩn chào cô Nguyệt ạ! 🦝✨",
        "Hôm nay cô có bài tập bí ẩn nào cần Raccoon khám phá không ạ? 🥰"
      ],
      "feed": [
        "Ngon tuyệt! Chiếc bánh quy bơ ngọt ngào được Raccoon rửa sạch sẽ rồi ăn nè! 🍪💖"
      ],
      "pet": [
        "Gừ gừ~ Đôi tai viền trắng của Raccoon rung rinh vì được cô vuốt ve nè! 💕"
      ],
      "sleep": [
        "Zzz... Raccoon cuộn đuôi sọc ngủ ngoan một giấc sau chuyến thám hiểm... 💤"
      ],
      "wake": [
        "Chít! Raccoon mở to mắt đeo mặt nạ sẵn sàng thám hiểm cùng cô! 🦝✨"
      ]
    },
    "enName": "Raccoon",
    "trait": "Mischievous and curious",
    "traitVi": "Tinh nghịch & Tò mò",
    "bgColor": "#E2E8F0",
    "accentColor": "#334155",
    "portraitImg": "assets/pet_cards/raccoon_portrait.png",
    "cardImg": "assets/pet_cards/raccoon_card.png",
    "idleSprite": "assets/pet_cards/raccoon_idle.png",
    "actionSprite": "assets/pet_cards/raccoon_action.png",
    "sleepSprite": "assets/pet_cards/raccoon_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-raccoon\">\n  <defs>\n      <radialGradient id=\"rac-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#CBD5E1\"/><stop offset=\"60%\" stop-color=\"#94A3B8\"/><stop offset=\"100%\" stop-color=\"#64748B\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail raccoon-tail\" style=\"transform-origin: 145px 150px;\">\n    \n      <path d=\"M 140 150 C 180 145 198 105 185 68 C 170 45 140 65 152 90 C 160 110 155 130 135 140 Z\" fill=\"url(#rac-coat)\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <!-- Ring stripes -->\n      <path d=\"M 172 80 C 164 90 156 82 148 74\" stroke=\"#1E293B\" stroke-width=\"7\" fill=\"none\"/>\n      <path d=\"M 176 105 C 168 115 160 108 152 100\" stroke=\"#1E293B\" stroke-width=\"7\" fill=\"none\"/>\n      <path d=\"M 166 128 C 158 135 150 130 142 122\" stroke=\"#1E293B\" stroke-width=\"7\" fill=\"none\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"50\" cy=\"162\" rx=\"20\" ry=\"17\" fill=\"url(#rac-coat)\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <ellipse cx=\"42\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n      <ellipse cx=\"150\" cy=\"162\" rx=\"20\" ry=\"17\" fill=\"url(#rac-coat)\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <ellipse cx=\"158\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#rac-coat)\" stroke=\"#334155\" stroke-width=\"2.2\"/>\n      <ellipse cx=\"100\" cy=\"154\" rx=\"30\" ry=\"24\" fill=\"#F1F5F9\"/>\n    \n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 145px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 55px;\">\n      <polygon points=\"56,65 30,16 78,42\" fill=\"url(#rac-coat)\" stroke=\"#334155\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"30,16 38,26 46,20\" fill=\"#FFFFFF\"/>\n      <polygon points=\"54,60 38,28 72,44\" fill=\"#1E293B\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 55px;\">\n      <polygon points=\"144,65 170,16 122,42\" fill=\"url(#rac-coat)\" stroke=\"#334155\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"170,16 162,26 154,20\" fill=\"#FFFFFF\"/>\n      <polygon points=\"146,60 162,28 128,44\" fill=\"#1E293B\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <path d=\"M 52 68 C 42 78 36 100 52 114 C 68 126 84 126 100 126 C 116 126 132 126 148 114 C 164 100 158 78 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#rac-coat)\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n      <!-- Iconic Bandit Mask -->\n      <path d=\"M 54 84 C 65 72 88 74 100 84 C 112 74 135 72 146 84 C 148 96 136 102 124 96 C 100 92 100 92 76 96 C 64 102 52 96 54 84 Z\" fill=\"#1E293B\"/>\n      <!-- White Muzzle -->\n      <ellipse cx=\"100\" cy=\"104\" rx=\"18\" ry=\"12\" fill=\"#FFFFFF\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      \n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      \n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <ellipse cx=\"100\" cy=\"98\" rx=\"6\" ry=\"4.5\" fill=\"#0F172A\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#1E293B\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#1E293B\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#1E293B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "otter": {
    "id": "otter",
    "name": "Bắp Rang",
    "defaultName": "Bắp Rang",
    "title": "Rái Cá Biển Ôm Cá Tung Tăng",
    "species": "Rái Cá Biển",
    "category": "other",
    "soundType": "squeak",
    "favoriteFood": "Chú cá xanh nhỏ tươi rói",
    "foodIcon": "🐟",
    "personality": "Nghịch ngợm, thân thiện, thích nằm ngửa thả trôi trên mặt nước và ôm chú cá nhỏ.",
    "description": "Bộ lông nâu bóng mượt, nằm ngửa bơi lội thảnh thơi, ôm chú cá xanh nhỏ trên bụng.",
    "idleType": "corgi-bounce",
    "canGroom": true,
    "animationConfig": {
      "idleClass": "anim-corgi-bounce",
      "tailOrigin": "155px 155px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Chíp chíp! Rái cá Bắp Rang ôm chú cá nhỏ chào cô Nguyệt ạ! 🦦🐟",
        "Bắp Rang thả trôi bồng bềnh mang theo ngàn niềm vui đến lớp học nè!"
      ],
      "feed": [
        "Nham nham! Chú cá tươi ngon tuyệt cú mèo! Cảm ơn cô Nguyệt đã thưởng cho em! 🐟💖"
      ],
      "pet": [
        "Chíp chíp~ Bắp Rang giơ hai tay nhỏ lên cọ má vào tay cô giáo nè! 🥰"
      ],
      "sleep": [
        "Zzz... Bắp Rang nằm ngửa nổi trên mặt nước ngủ say sưa... 💤"
      ],
      "wake": [
        "Bắp Rang quẫy đuôi nước bập bùng thức dậy chào cô giáo! ✨🦦"
      ]
    },
    "enName": "Otter",
    "trait": "Playful and friendly",
    "traitVi": "Vui vẻ & Thân thiện",
    "bgColor": "#BAE6FD",
    "accentColor": "#0284C7",
    "portraitImg": "assets/pet_cards/otter_portrait.png",
    "cardImg": "assets/pet_cards/otter_card.png",
    "idleSprite": "assets/pet_cards/otter_idle.png",
    "actionSprite": "assets/pet_cards/otter_action.png",
    "sleepSprite": "assets/pet_cards/otter_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-otter\">\n  <defs>\n      <radialGradient id=\"otter-fur\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#A16207\"/><stop offset=\"70%\" stop-color=\"#854D0E\"/><stop offset=\"100%\" stop-color=\"#713F12\"/>\n      </radialGradient>\n      <radialGradient id=\"otter-cream\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#FEF3C7\"/><stop offset=\"100%\" stop-color=\"#FDE68A\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail otter-tail\" style=\"transform-origin: 155px 155px;\">\n    \n      <path d=\"M 148 152 C 172 155 186 142 178 126 C 170 114 156 122 150 138 Z\" fill=\"url(#otter-fur)\" stroke=\"#5A320F\" stroke-width=\"2\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"48\" cy=\"166\" rx=\"18\" ry=\"12\" fill=\"url(#otter-fur)\" stroke=\"#5A320F\" stroke-width=\"2\"/>\n      <ellipse cx=\"152\" cy=\"166\" rx=\"18\" ry=\"12\" fill=\"url(#otter-fur)\" stroke=\"#5A320F\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"148\" rx=\"54\" ry=\"40\" fill=\"url(#otter-fur)\" stroke=\"#5A320F\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"150\" rx=\"36\" ry=\"26\" fill=\"url(#otter-cream)\"/>\n    \n    <g class=\"pet-paw-left\">\n      <ellipse cx=\"76\" cy=\"142\" rx=\"12\" ry=\"16\" fill=\"url(#otter-fur)\" stroke=\"#5A320F\" stroke-width=\"2\" transform=\"rotate(-25 76 142)\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 124px 142px;\">\n      <ellipse cx=\"124\" cy=\"142\" rx=\"12\" ry=\"16\" fill=\"url(#otter-fur)\" stroke=\"#5A320F\" stroke-width=\"2\" transform=\"rotate(25 124 142)\"/>\n    </g>\n    \n      <!-- Cute Little Blue Fish held on belly -->\n      <g class=\"otter-fish\" transform=\"translate(100, 150) rotate(-10)\">\n        <ellipse cx=\"0\" cy=\"0\" rx=\"16\" ry=\"10\" fill=\"#38BDF8\" stroke=\"#0284C7\" stroke-width=\"1.8\"/>\n        <!-- Fish Tail -->\n        <polygon points=\"-14,0 -24,-8 -22,0 -24,8\" fill=\"#38BDF8\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n        <circle cx=\"8\" cy=\"-2\" r=\"2\" fill=\"#0F172A\"/>\n        <circle cx=\"8.5\" cy=\"-2.5\" r=\"0.8\" fill=\"#FFFFFF\"/>\n        <path d=\"M 0 -4 Q 4 0 0 4\" stroke=\"#0284C7\" stroke-width=\"1.2\" fill=\"none\"/>\n      </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 55px 60px;\">\n      <ellipse cx=\"55\" cy=\"60\" rx=\"8\" ry=\"7\" fill=\"url(#otter-fur)\" stroke=\"#5A320F\" stroke-width=\"1.8\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 145px 60px;\">\n      <ellipse cx=\"145\" cy=\"60\" rx=\"8\" ry=\"7\" fill=\"url(#otter-fur)\" stroke=\"#5A320F\" stroke-width=\"1.8\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <ellipse cx=\"100\" cy=\"85\" rx=\"48\" ry=\"38\" fill=\"url(#otter-fur)\" stroke=\"#5A320F\" stroke-width=\"2.5\"/>\n      <ellipse cx=\"100\" cy=\"98\" rx=\"28\" ry=\"18\" fill=\"url(#otter-cream)\"/>\n    \n    \n      <!-- Tiny Whiskers -->\n      <line x1=\"68\" y1=\"96\" x2=\"52\" y2=\"94\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n      <line x1=\"68\" y1=\"100\" x2=\"50\" y2=\"102\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n      <line x1=\"132\" y1=\"96\" x2=\"148\" y2=\"94\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n      <line x1=\"132\" y1=\"100\" x2=\"150\" y2=\"102\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <ellipse cx=\"100\" cy=\"92\" rx=\"6\" ry=\"4.5\" fill=\"#1C1917\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#78350F\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#78350F\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#78350F\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "hedgehog": {
    "id": "hedgehog",
    "name": "Gai Nhỏ",
    "defaultName": "Gai Nhỏ",
    "title": "Bé Nhím Gai Lưng Tròn Hiền Lành",
    "species": "Nhím Gai Cảnh",
    "category": "other",
    "soundType": "squeak",
    "favoriteFood": "Táo đỏ giòn ngọt ngào",
    "foodIcon": "🍎",
    "personality": "Hiền lành, nhút nhát nhưng cực kỳ tình cảm, khi vui sẽ xòe gai tròn xoe như quả bóng.",
    "description": "Vòm gai nâu tròn xoe mềm mại, gương mặt màu kem ngây thơ, chiếc mũi đen hếch hếch.",
    "idleType": "cat-swish",
    "canGroom": false,
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "100px 165px",
      "headOrigin": "100px 92px"
    },
    "quotes": {
      "greetings": [
        "Chít chít~ Bé Nhím Gai Nhỏ xòe lưng tròn chào cô Nguyệt ạ! 🦔🍎",
        "Gai của em mềm mại như nhung chứ không làm cô đau đâu ạ!"
      ],
      "feed": [
        "Rộp rộp! Miếng táo đỏ giòn ngọt thơm lừng làm Gai Nhỏ no căng! 🍎💖"
      ],
      "pet": [
        "Chít chít~ Được cô xoa chiếc bụng kem mềm là Gai Nhỏ nằm ngửa ra tận hưởng! 🥰"
      ],
      "sleep": [
        "Zzz... Gai Nhỏ cuộn tròn thành quả bóng gai êm ái ngủ ngoan... 💤"
      ],
      "wake": [
        "Gai Nhỏ vươn 4 chân ngắn cũn thức dậy chào cô giáo! ✨🦔"
      ]
    },
    "enName": "Hedgehog",
    "trait": "Calm and gentle",
    "traitVi": "Điềm đạm & Hiền lành",
    "bgColor": "#FED7AA",
    "accentColor": "#9A3412",
    "portraitImg": "assets/pet_cards/hedgehog_portrait.png",
    "cardImg": "assets/pet_cards/hedgehog_card.png",
    "idleSprite": "assets/pet_cards/hedgehog_idle.png",
    "actionSprite": "assets/pet_cards/hedgehog_action.png",
    "sleepSprite": "assets/pet_cards/hedgehog_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-hedgehog\">\n  <defs>\n      <radialGradient id=\"quill-grad\" cx=\"45%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#9A3412\"/><stop offset=\"70%\" stop-color=\"#78350F\"/><stop offset=\"100%\" stop-color=\"#451A03\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail \" style=\"transform-origin: 150px 150px;\">\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <ellipse cx=\"58\" cy=\"172\" rx=\"14\" ry=\"9\" fill=\"#FEF3C7\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <ellipse cx=\"142\" cy=\"172\" rx=\"14\" ry=\"9\" fill=\"#FEF3C7\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    \n    \n      <!-- Dome of Round Cute Spiky Quills -->\n      <path d=\"M 40 140 C 25 110 35 60 70 45 C 100 35 140 40 165 65 C 185 85 185 125 165 155 C 145 175 65 175 40 140 Z\" fill=\"url(#quill-grad)\" stroke=\"#451A03\" stroke-width=\"2.5\"/>\n      <!-- Soft Cream Face and Belly -->\n      <ellipse cx=\"100\" cy=\"130\" rx=\"46\" ry=\"34\" fill=\"#FEF3C7\"/>\n    \n    <g class=\"pet-paw-left\">\n      <ellipse cx=\"76\" cy=\"158\" rx=\"10\" ry=\"12\" fill=\"#FEF3C7\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 115px 145px;\">\n      <ellipse cx=\"124\" cy=\"158\" rx=\"10\" ry=\"12\" fill=\"#FEF3C7\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 92px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 55px 78px;\">\n      <ellipse cx=\"55\" cy=\"78\" rx=\"9\" ry=\"8\" fill=\"#FDA4AF\" stroke=\"#9A3412\" stroke-width=\"1.8\"/>\n    </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 145px 78px;\">\n      <ellipse cx=\"145\" cy=\"78\" rx=\"9\" ry=\"8\" fill=\"#FDA4AF\" stroke=\"#9A3412\" stroke-width=\"1.8\"/>\n    </g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <ellipse cx=\"100\" cy=\"94\" rx=\"42\" ry=\"32\" fill=\"#FEF3C7\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#451A03\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#451A03\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n    <ellipse cx=\"100\" cy=\"98\" rx=\"5\" ry=\"4\" fill=\"#1C1917\"/>\n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n      <path d=\"M 94 96 Q 100 100 100 96 Q 100 100 106 96\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-mouth-smile\">\n      <path d=\"M 92 96 Q 100 109 108 96 Z\" fill=\"#E11D48\" stroke=\"#9A3412\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n    </g>\n      <g class=\"pet-mouth-lick\">\n      <path d=\"M 94 96 Q 100 101 106 96\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 97 97 C 97 104 105 106 108 100 C 109 97 103 95 97 97 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\" class=\"pet-tongue-lick\"/>\n    </g>\n      <g class=\"pet-mouth-sleep\">\n      <path d=\"M 96 97 Q 100 99 104 97\" stroke=\"#52525B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  },
  "duck": {
    "id": "duck",
    "name": "Cạp Cạp",
    "defaultName": "Cạp Cạp",
    "title": "Vịt Con Lông Vàng Tung Tăng",
    "species": "Vịt Con Lông Vàng",
    "category": "other",
    "soundType": "quack",
    "favoriteFood": "Hạt ngô ngọt bùi vàng tươi",
    "foodIcon": "🌽",
    "personality": "Vui vẻ, hoạt bát, mỏ cam tròn trịa lúc nào cũng cạp cạp rộn ràng khắp sân trường.",
    "description": "Bộ lông vàng óng như tơ, chiếc mỏ cam to tròn ngộ nghĩnh, hai chân màng lạch bạch.",
    "idleType": "penguin-waddle",
    "canGroom": false,
    "animationConfig": {
      "idleClass": "anim-penguin-waddle",
      "tailOrigin": "145px 145px",
      "headOrigin": "100px 80px"
    },
    "quotes": {
      "greetings": [
        "Cạp cạp! Vịt con Cạp Cạp vẫy hai cánh vàng tươi chào cô Nguyệt ạ! 🐥🌽",
        "Cạp cạp! Hôm nay tiết học tiếng Anh của cô sẽ vui như ngày hội luôn!"
      ],
      "feed": [
        "Ngon quá cô ơi! Mấy hạt ngô ngọt bùi nhai cạp cạp đã miệng ghê! 🌽💖"
      ],
      "pet": [
        "Cạp cạp~ Được cô xoa chiếc chỏm lông trên đầu là Cạp Cạp thích nhất! 🥰"
      ],
      "sleep": [
        "Zzz... Vịt con rúc chiếc mỏ cam vào cánh ngủ khò... 💤"
      ],
      "wake": [
        "Cạp cạp! Vịt con vỗ cánh bành bạch thức dậy chào ngày mới! ✨🐥"
      ]
    },
    "enName": "Duck",
    "trait": "Cheerful and lively",
    "traitVi": "Vui vẻ & Hoạt bát",
    "bgColor": "#FEF08A",
    "accentColor": "#EAB308",
    "portraitImg": "assets/pet_cards/duck_portrait.png",
    "cardImg": "assets/pet_cards/duck_card.png",
    "idleSprite": "assets/pet_cards/duck_idle.png",
    "actionSprite": "assets/pet_cards/duck_action.png",
    "sleepSprite": "assets/pet_cards/duck_sleep.png",
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-duck\">\n  <defs>\n      <radialGradient id=\"duck-yellow\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#FEF08A\"/><stop offset=\"60%\" stop-color=\"#FACC15\"/><stop offset=\"100%\" stop-color=\"#EAB308\"/>\n      </radialGradient>\n    </defs>\n  <!-- Tail Layer -->\n  <g class=\"pet-tail duck-tail\" style=\"transform-origin: 145px 145px;\">\n    \n      <polygon points=\"140,145 168,135 155,152\" fill=\"url(#duck-yellow)\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n    \n  </g>\n  <!-- Body & Paws Layer -->\n  <g class=\"pet-body\">\n    \n      <!-- Orange Webbed Feet -->\n      <ellipse cx=\"76\" cy=\"180\" rx=\"18\" ry=\"9\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      <ellipse cx=\"124\" cy=\"180\" rx=\"18\" ry=\"9\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    \n    \n      <ellipse cx=\"100\" cy=\"142\" rx=\"52\" ry=\"40\" fill=\"url(#duck-yellow)\" stroke=\"#CA8A04\" stroke-width=\"2.5\"/>\n    \n    <g class=\"pet-paw-left\">\n      <!-- Left Wing -->\n      <ellipse cx=\"65\" cy=\"138\" rx=\"14\" ry=\"24\" fill=\"url(#duck-yellow)\" stroke=\"#CA8A04\" stroke-width=\"2\" transform=\"rotate(20 65 138)\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 115px 145px;\">\n      <!-- Right Wing -->\n      <ellipse cx=\"135\" cy=\"138\" rx=\"14\" ry=\"24\" fill=\"url(#duck-yellow)\" stroke=\"#CA8A04\" stroke-width=\"2\" transform=\"rotate(-20 135 138)\"/>\n    </g>\n    \n  </g>\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 80px;\">\n    <!-- Ears -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 55px 55px;\"></g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 145px 55px;\"></g>\n    </g>\n    <!-- Head Base & Markings -->\n    \n      <ellipse cx=\"100\" cy=\"80\" rx=\"46\" ry=\"38\" fill=\"url(#duck-yellow)\" stroke=\"#CA8A04\" stroke-width=\"2.5\"/>\n      <!-- Cute Tuft Feather on Head -->\n      <path d=\"M 100 42 Q 95 28 102 24 Q 106 34 100 42\" fill=\"url(#duck-yellow)\" stroke=\"#CA8A04\" stroke-width=\"1.8\"/>\n    \n    \n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"93\" rx=\"10\" ry=\"6.5\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <!-- Expressive Eyes: Open, Blink, Happy, Sleep -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\" stroke=\"#09090B\" stroke-width=\"1\"/>\n      <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n      <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#09090B\"/>\n      <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n    </g>\n      <g class=\"pet-eyes-blink\">\n      <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n      <g class=\"pet-eyes-sleep\">\n      <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    </g>\n    <!-- Snout & Nose -->\n     \n    <!-- Flexible Mouth: Neutral, Smile, Paw-Licking, Sleep -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n        <ellipse cx=\"100\" cy=\"94\" rx=\"22\" ry=\"12\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n        <line x1=\"84\" y1=\"94\" x2=\"116\" y2=\"94\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"94\" cy=\"90\" rx=\"1.8\" ry=\"2.5\" fill=\"#7C2D12\"/>\n        <ellipse cx=\"106\" cy=\"90\" rx=\"1.8\" ry=\"2.5\" fill=\"#7C2D12\"/>\n      </g>\n      <g class=\"pet-mouth-smile\">\n        <ellipse cx=\"100\" cy=\"92\" rx=\"22\" ry=\"10\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n        <path d=\"M 86 92 Q 100 106 114 92 Z\" fill=\"#DC2626\"/>\n        <ellipse cx=\"100\" cy=\"96\" rx=\"6\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n      <g class=\"pet-mouth-lick\">\n        <ellipse cx=\"100\" cy=\"94\" rx=\"22\" ry=\"12\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      </g>\n      <g class=\"pet-mouth-sleep\">\n        <ellipse cx=\"100\" cy=\"94\" rx=\"20\" ry=\"10\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n        <line x1=\"86\" y1=\"94\" x2=\"114\" y2=\"94\" stroke=\"#C2410C\" stroke-width=\"1.5\"/>\n      </g>\n    </g>\n    <!-- Accessories / Props -->\n    \n  </g>\n</svg>"
  }
};

  const PetDefinitions = {
    getAllPets() {
      return Object.values(PET_REGISTRY);
    },
    getPet(id) {
      return PET_REGISTRY[id] || null;
    },
    getRegistry() {
      return PET_REGISTRY;
    }
  };

  root.PET_REGISTRY = PET_REGISTRY;
  root.PetDefinitions = PetDefinitions;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = PetDefinitions;
  }
})(typeof window !== 'undefined' ? window : global);
