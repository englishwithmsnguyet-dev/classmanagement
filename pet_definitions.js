/**
 * VIRTUAL PET REGISTRY & CHARACTER DEFINITIONS (V3.0 - MASTER ARTWORK ALIGNED)
 * Exactly aligned with Cô Nguyệt's master illustration sheet:
 * - 13 Original Characters with authentic artwork portraits & 3-state sprites (Idle, Action, Sleep)
 * - Trait descriptions in both English & Vietnamese
 * - Procedural acoustic formant audio synthesis
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
    "favoriteFood": "Hạt cá hồi giòn",
    "foodIcon": "🐟",
    "personality": "Nũng nịu, hay làm nũng, thích được xoa đầu và cực kỳ quấn quýt.",
    "description": "Bé mèo cam sọc vằn má bánh bao tròn xoe, nơ hồng điệu đà, mắt ngọc bích long lanh và 4 chân mập mạp.",
    "idleType": "cat-swish",
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
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-nana\">\n  <defs>\n    <radialGradient id=\"nana-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FDBA74\"/><stop offset=\"65%\" stop-color=\"#FB923C\"/><stop offset=\"100%\" stop-color=\"#EA580C\"/>\n    </radialGradient>\n    <radialGradient id=\"nana-cream\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"90%\" stop-color=\"#FFFBEB\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n    </radialGradient>\n    <radialGradient id=\"nana-emerald\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#6EE7B7\"/><stop offset=\"45%\" stop-color=\"#10B981\"/><stop offset=\"85%\" stop-color=\"#047857\"/><stop offset=\"100%\" stop-color=\"#064E3B\"/>\n    </radialGradient>\n    <radialGradient id=\"nana-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.8\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <g class=\"pet-tail nana-tail\" style=\"transform-origin: 148px 145px;\">\n    <path d=\"M 145 148 C 175 142 188 115 178 85 C 172 70 156 74 162 88 C 168 102 160 125 140 135 Z\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\"/>\n    <path d=\"M 178 85 C 172 70 156 74 162 88 C 168 85 174 82 178 85 Z\" fill=\"url(#nana-cream)\"/>\n    <path d=\"M 166 98 Q 174 100 172 106\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M 158 114 Q 166 116 162 122\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs (Bắp đùi & bàn chân sau ngồi hai bên) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/>\n    \n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/>\n\n    <!-- Main Torso & Belly -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\"/>\n    <path d=\"M 78 120 Q 100 115 122 120 Q 132 150 100 168 Q 68 150 78 120 Z\" fill=\"url(#nana-cream)\"/>\n    \n    <!-- 2 Front Legs (2 chân trước đứng song song ở giữa) -->\n    <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    \n    <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    \n    <path d=\"M 60 142 Q 68 145 68 154\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M 140 142 Q 132 145 132 154\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 65px;\">\n      <polygon points=\"52,65 34,16 76,42\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"50,60 38,24 70,44\" fill=\"#FCE7F3\"/>\n      <path d=\"M 45 52 Q 56 44 52 35\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <polygon points=\"148,65 166,16 124,42\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"150,60 162,24 130,44\" fill=\"#FCE7F3\"/>\n      <path d=\"M 155 52 Q 144 44 148 35\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    </g>\n    <path d=\"M 52 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.5\"/>\n    <path d=\"M 88 52 L 94 66 L 100 56 L 106 66 L 112 52\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n    <ellipse cx=\"88\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#nana-cream)\"/>\n    <ellipse cx=\"112\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#nana-cream)\"/>\n    <ellipse cx=\"100\" cy=\"104\" rx=\"10\" ry=\"7\" fill=\"url(#nana-cream)\"/>\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"74\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#064E3B\"/>\n      <ellipse cx=\"74\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#nana-emerald)\"/>\n      <ellipse cx=\"74\" cy=\"80.5\" rx=\"5.5\" ry=\"8\" fill=\"#022C22\"/>\n      <circle cx=\"70\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"78\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"126\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#064E3B\"/>\n      <ellipse cx=\"126\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#nana-emerald)\"/>\n      <ellipse cx=\"126\" cy=\"80.5\" rx=\"5.5\" ry=\"8\" fill=\"#022C22\"/>\n      <circle cx=\"122\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"130\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#C2410C\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#C2410C\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"58\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#nana-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#nana-blush)\" class=\"pet-blush\"/>\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n    <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#7C2D12\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 93 98 Q 100 110 107 98 Z\" fill=\"#991B1B\"/>\n      <path d=\"M 96 102 Q 100 109 104 102 Z\" fill=\"#FB7185\"/>\n    </g>\n    <line x1=\"50\" y1=\"94\" x2=\"30\" y2=\"90\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"28\" y2=\"102\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"170\" y2=\"90\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"172\" y2=\"102\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <g transform=\"translate(100, 126)\">\n      <polygon points=\"0,0 -16,-8 -14,6 0,0\" fill=\"#EC4899\" stroke=\"#BE185D\" stroke-width=\"1.5\"/>\n      <polygon points=\"0,0 16,-8 14,6 0,0\" fill=\"#EC4899\" stroke=\"#BE185D\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"1\" r=\"1.5\" fill=\"#78350F\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Orange Cat",
    "trait": "Friendly and playful",
    "traitVi": "Thân thiện & Tinh nghịch",
    "bgColor": "#FFE4BA",
    "accentColor": "#EA580C",
    "portraitImg": "assets/pet_cards/nana_portrait.png",
    "cardImg": "assets/pet_cards/nana_card.png",
    "idleSprite": "assets/pet_cards/nana_idle.png",
    "actionSprite": "assets/pet_cards/nana_action.png",
    "sleepSprite": "assets/pet_cards/nana_sleep.png"
  },
  "snowball": {
    "id": "snowball",
    "name": "Bạch Tuyết",
    "defaultName": "Bạch Tuyết",
    "title": "Tiểu Thư Mèo Trắng Dịu Dàng",
    "species": "Mèo Trắng Mắt Hai Màu",
    "category": "cat",
    "soundType": "meow",
    "favoriteFood": "Pate ức gà mềm",
    "foodIcon": "🍗",
    "personality": "Dịu dàng, thanh lịch, thích nằm cuộn tròn trong lòng và ngắm mưa rơi.",
    "description": "Bộ lông trắng muốt như tuyết đầu mùa, đôi mắt dị sắc (ngọc lam và hổ phách) quý phái cùng 4 chân trắng nõn nà.",
    "idleType": "cat-swish",
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "148px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Meo~ Tiểu thư Bạch Tuyết xin kính chào cô Nguyệt dịu hiền! 🌸✨",
        "Bộ lông trắng muốt của em hôm nay đã được chải chuốt tinh tươm rồi nè cô!",
        "Đôi mắt một xanh ngọc lam, một vàng hổ phách của em có làm cô mê mẩn hông? 🥰",
        "Chúc cô giáo có những giờ lên lớp thật ấm áp và ngập tràn niềm vui!"
      ],
      "feed": [
        "Chẹp chẹp! Pate ức gà mềm mịn thơm phức đúng khẩu vị tiểu thư luôn! 🍗💖",
        "Ăn xong Bạch Tuyết liếm mép sạch sẽ tinh tươm rồi nè, cảm ơn cô Nguyệt! ✨"
      ],
      "pet": [
        "Hừm purrr~ Lông em mượt như lụa đúng không cô? Được cô vuốt ve thích quá à! 💕",
        "Tiểu thư nằm ngoan ngoãn trong lòng cô để nạp năng lượng bình yên nè! 🥰"
      ],
      "hungry": [
        "Meo nhỏ... Bạch Tuyết giữ ý lắm nhưng bụng đói kêu nhỏ xíu rồi nè cô ơi! 🥺🍗",
        "Cho tiểu thư xin một đĩa pate thơm ngon tiếp sức nha cô giáo! 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-snowball\">\n  <defs>\n    <radialGradient id=\"snow-fur\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"85%\" stop-color=\"#F8FAFC\"/><stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </radialGradient>\n    <radialGradient id=\"snow-blue\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/><stop offset=\"60%\" stop-color=\"#0284C7\"/><stop offset=\"100%\" stop-color=\"#0369A1\"/>\n    </radialGradient>\n    <radialGradient id=\"snow-gold\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FDE047\"/><stop offset=\"60%\" stop-color=\"#D97706\"/><stop offset=\"100%\" stop-color=\"#92400E\"/>\n    </radialGradient>\n    <radialGradient id=\"snow-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FDA4AF\" stop-opacity=\"0.8\"/><stop offset=\"100%\" stop-color=\"#FDA4AF\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <g class=\"pet-tail snow-tail\" style=\"transform-origin: 148px 145px;\">\n    <path d=\"M 145 148 C 178 140 188 112 176 80 C 170 65 155 70 162 84 C 168 98 160 125 140 135 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs & Paws (4 LEGS TOTAL) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#FDA4AF\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#FDA4AF\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#FDA4AF\"/>\n    \n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#FDA4AF\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#FDA4AF\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#FDA4AF\"/>\n\n    <!-- Torso -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    \n    <!-- 2 Front Legs & Paws -->\n    <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    \n    <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 65px;\">\n      <polygon points=\"52,65 34,16 76,42\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"50,60 38,24 70,44\" fill=\"#FCE7F3\"/>\n      <polygon points=\"148,65 166,16 124,42\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"150,60 162,24 130,44\" fill=\"#FCE7F3\"/>\n    </g>\n    <!-- Chubby White Cheeks -->\n    <path d=\"M 52 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    <!-- Muzzle -->\n    <ellipse cx=\"89\" cy=\"98\" rx=\"13\" ry=\"9\" fill=\"#FFFFFF\"/>\n    <ellipse cx=\"111\" cy=\"98\" rx=\"13\" ry=\"9\" fill=\"#FFFFFF\"/>\n    <!-- Heterochromia Anime Eyes (Left: Cyan, Right: Gold) -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"74\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#0C4A6E\"/>\n      <ellipse cx=\"74\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#snow-blue)\"/>\n      <circle cx=\"70\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"126\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#78350F\"/>\n      <ellipse cx=\"126\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#snow-gold)\"/>\n      <circle cx=\"122\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#0284C7\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#D97706\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"58\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#snow-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#snow-blush)\" class=\"pet-blush\"/>\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n    <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 93 98 Q 100 108 107 98 Z\" fill=\"#F43F5E\"/>\n    </g>\n    <!-- Delicate Silver Whiskers -->\n    <line x1=\"50\" y1=\"94\" x2=\"30\" y2=\"90\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"28\" y2=\"102\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"170\" y2=\"90\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"172\" y2=\"102\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <!-- Pastel Pink Ribbon Collar -->\n    <g transform=\"translate(100, 126)\">\n      <polygon points=\"0,0 -16,-7 -14,5 0,0\" fill=\"#F472B6\" stroke=\"#DB2777\" stroke-width=\"1.5\"/>\n      <polygon points=\"0,0 16,-7 14,5 0,0\" fill=\"#F472B6\" stroke=\"#DB2777\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"4.5\" fill=\"#FDE047\" stroke=\"#D97706\" stroke-width=\"1.2\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "White Cat",
    "trait": "Gentle and sweet",
    "traitVi": "Dịu dàng & Ngọt ngào",
    "bgColor": "#FED7E2",
    "accentColor": "#DB2777",
    "portraitImg": "assets/pet_cards/snowball_portrait.png",
    "cardImg": "assets/pet_cards/snowball_card.png",
    "idleSprite": "assets/pet_cards/snowball_idle.png",
    "actionSprite": "assets/pet_cards/snowball_action.png",
    "sleepSprite": "assets/pet_cards/snowball_sleep.png"
  },
  "kuro": {
    "id": "kuro",
    "name": "Kuro",
    "defaultName": "Kuro",
    "title": "Hiệp Sĩ Mèo Đen Huyền Bí",
    "species": "Mèo Đen Bombay",
    "category": "cat",
    "soundType": "meow",
    "favoriteFood": "Cá ngừ đại dương",
    "foodIcon": "🍣",
    "personality": "Thông minh, điềm đạm, là thần hộ mệnh mang lại bình an và may mắn.",
    "description": "Bộ lông mun tuyền óng ả, mắt hổ phách phát sáng trong bóng đêm, 4 bàn chân nhung đen và chuông trăng khuyết vàng.",
    "idleType": "cat-swish",
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "148px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Meo~ Kuro kính chào cô Nguyệt! Hôm nay Kuro sẽ là hiệp sĩ bảo vệ cô suốt ngày dài! 🌙✨",
        "Mắt hổ phách của em phát sáng lấp lánh như hai vì sao nhỏ nè cô!",
        "Ở phương Tây hay phương Đông, mèo đen Kuro luôn mang lại may mắn tột đỉnh cho cô giáo!",
        "Chúc cô Nguyệt một ngày ngập tràn cảm hứng và niềm vui dạy học!"
      ],
      "feed": [
        "Ngoàm! Cá ngừ đại dương tươi ngon béo ngậy! Kuro cảm ơn cô Nguyệt nhiều lắm! 🍣💖",
        "No bụng rồi, năng lượng hiệp sĩ của Kuro đã được sạc đầy 100%! ✨"
      ],
      "pet": [
        "Purrr... Lông mun của Kuro ấm và mịn lắm đúng không cô? Được cô xoa đầu thật là thích! 🥰",
        "Kuro khẽ dụi đầu vào tay cô nè, bình an luôn ở bên cô nhé! 💕"
      ],
      "hungry": [
        "Meo... hiệp sĩ Kuro cũng có lúc đói bụng chứ bộ! Cho em xin lát cá ngừ đi cô ơi! 🥺🍣",
        "Chiếc chuông trăng khuyết rung rinh đòi ăn rồi nè cô Nguyệt ơi! 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-kuro\">\n  <defs>\n    <radialGradient id=\"kuro-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"60%\" stop-color=\"#0F172A\"/><stop offset=\"100%\" stop-color=\"#020617\"/>\n    </radialGradient>\n    <radialGradient id=\"kuro-amber\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FDE047\"/><stop offset=\"50%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </radialGradient>\n    <radialGradient id=\"kuro-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <g class=\"pet-tail kuro-tail\" style=\"transform-origin: 148px 145px;\">\n    <path d=\"M 145 148 C 178 140 188 112 176 80 C 170 65 155 70 162 84 C 168 98 160 125 140 135 Z\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs & Paws (4 LEGS TOTAL) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/>\n    \n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/>\n\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n    \n    <!-- 2 Front Legs & Paws -->\n    <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    \n    <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 65px;\">\n      <polygon points=\"52,65 34,16 76,42\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"50,60 40,26 70,44\" fill=\"#334155\"/>\n      <polygon points=\"148,65 166,16 124,42\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <polygon points=\"150,60 160,26 130,44\" fill=\"#334155\"/>\n    </g>\n    <!-- Chubby Head -->\n    <path d=\"M 52 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.5\"/>\n    <!-- Glowing Amber Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"74\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#78350F\"/>\n      <ellipse cx=\"74\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#kuro-amber)\"/>\n      <ellipse cx=\"74\" cy=\"80.5\" rx=\"4.5\" ry=\"8.5\" fill=\"#020617\"/>\n      <circle cx=\"70\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"126\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#78350F\"/>\n      <ellipse cx=\"126\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#kuro-amber)\"/>\n      <ellipse cx=\"126\" cy=\"80.5\" rx=\"4.5\" ry=\"8.5\" fill=\"#020617\"/>\n      <circle cx=\"122\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#F59E0B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#F59E0B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"58\" cy=\"95\" rx=\"10\" ry=\"6.5\" fill=\"url(#kuro-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"10\" ry=\"6.5\" fill=\"url(#kuro-blush)\" class=\"pet-blush\"/>\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n    <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 93 98 Q 100 108 107 98 Z\" fill=\"#E11D48\"/>\n    </g>\n    <line x1=\"50\" y1=\"94\" x2=\"30\" y2=\"90\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"28\" y2=\"102\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"170\" y2=\"90\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"172\" y2=\"102\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <!-- Red Silk Ribbon with Crescent Moon Gold Bell -->\n    <path d=\"M 76 122 Q 100 130 124 122\" stroke=\"#DC2626\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 130)\">\n      <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1.2\"/>\n      <path d=\"M -2 -3 C 2 -3 2 3 -2 3 C 0 2 0 -2 -2 -3 Z\" fill=\"#78350F\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Black Cat",
    "trait": "Curious and clever",
    "traitVi": "Tò mò & Thông minh",
    "bgColor": "#E9D5FF",
    "accentColor": "#7E22CE",
    "portraitImg": "assets/pet_cards/kuro_portrait.png",
    "cardImg": "assets/pet_cards/kuro_card.png",
    "idleSprite": "assets/pet_cards/kuro_idle.png",
    "actionSprite": "assets/pet_cards/kuro_action.png",
    "sleepSprite": "assets/pet_cards/kuro_sleep.png"
  },
  "calico": {
    "id": "calico",
    "name": "Tam Thể",
    "defaultName": "Tam Thể",
    "title": "Mèo May Mắn Chiêu Tài Lộc",
    "species": "Mèo Tam Thể Maneki-Neko",
    "category": "cat",
    "soundType": "meow",
    "favoriteFood": "Tôm hấp sả thơm",
    "foodIcon": "🍤",
    "personality": "Vui vẻ, hoạt bát, đem lại may mắn và nụ cười cho cả lớp học.",
    "description": "Bộ lông 3 màu trắng - cam - nâu đen may mắn, nơ tím pastel duyên dáng, đôi mắt xanh lục bích và 4 chân điệu nghệ.",
    "idleType": "cat-swish",
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "148px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Meo meo~ Mèo Tam Thể vẫy tay chiêu tài lộc đón chào cô Nguyệt! 🌸✨",
        "Có em ở bên, hôm nay lớp học của cô sẽ tràn đầy tiếng cười và may mắn!",
        "Lông 3 màu của em hiếm lắm đó cô ơi, cô vuốt ve lấy may nà!",
        "Chúc cô giáo một ngày giảng bài thật hay và đạt nhiều thành công!"
      ],
      "feed": [
        "Nham nham! Đĩa tôm hấp sả thơm phức giòn ngọt hết sẩy! 🍤💖",
        "Tam Thể no căng tròn bụng rồi, cảm ơn cô giáo tốt bụng nhiều lắm! ✨"
      ],
      "pet": [
        "Hì hì~ Bàn tay ấm áp của cô vuốt từ đầu đến đuôi làm em rù quyến rũ nè! 🥰",
        "Em giơ bàn chân tam thể chạm tay cô để truyền may mắn nhé! 💕"
      ],
      "hungry": [
        "Meo... chú mèo chiêu tài đói bụng quá rồi cô Nguyệt ơi! Cho em con tôm đi! 🥺🍤",
        "Bụng reo réo rắt rồi nè cô ơi, tiếp tế năng lượng cho Tam Thể nha! 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-calico\">\n  <defs>\n    <radialGradient id=\"calico-white\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"85%\" stop-color=\"#F8FAFC\"/><stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </radialGradient>\n    <radialGradient id=\"calico-orange\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FDBA74\"/><stop offset=\"70%\" stop-color=\"#EA580C\"/>\n    </radialGradient>\n    <radialGradient id=\"calico-black\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/><stop offset=\"70%\" stop-color=\"#0F172A\"/>\n    </radialGradient>\n    <radialGradient id=\"calico-eye\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#6EE7B7\"/><stop offset=\"60%\" stop-color=\"#059669\"/><stop offset=\"100%\" stop-color=\"#064E3B\"/>\n    </radialGradient>\n    <radialGradient id=\"calico-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FDA4AF\" stop-opacity=\"0.8\"/><stop offset=\"100%\" stop-color=\"#FDA4AF\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <g class=\"pet-tail calico-tail\" style=\"transform-origin: 148px 145px;\">\n    <path d=\"M 145 148 C 178 140 188 112 176 80 C 170 65 155 70 162 84 C 168 98 160 125 140 135 Z\" fill=\"url(#calico-white)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <path d=\"M 176 80 C 170 65 155 70 162 84 C 168 82 174 80 176 80 Z\" fill=\"url(#calico-orange)\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs & Paws (4 LEGS TOTAL) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#calico-orange)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    \n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#calico-black)\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n\n    <!-- Torso with Calico Patches -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#calico-white)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    <path d=\"M 64 125 C 60 145 80 155 75 168 C 65 162 60 140 64 125 Z\" fill=\"url(#calico-orange)\"/>\n    <path d=\"M 136 130 C 145 145 125 160 132 168 C 142 162 144 140 136 130 Z\" fill=\"url(#calico-black)\"/>\n    \n    <!-- 2 Front Legs & Paws -->\n    <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    \n    <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 65px;\">\n      <polygon points=\"52,65 34,16 76,42\" fill=\"url(#calico-orange)\" stroke=\"#C2410C\" stroke-width=\"2.2\"/>\n      <polygon points=\"50,60 38,24 70,44\" fill=\"#FCE7F3\"/>\n      <polygon points=\"148,65 166,16 124,42\" fill=\"url(#calico-black)\" stroke=\"#0F172A\" stroke-width=\"2.2\"/>\n      <polygon points=\"150,60 162,24 130,44\" fill=\"#334155\"/>\n    </g>\n    <!-- Chubby White Head with Patches -->\n    <path d=\"M 52 68 C 44 80 40 102 54 114 C 68 126 84 126 100 126 C 116 126 132 126 146 114 C 160 102 156 80 148 68 C 136 50 64 50 52 68 Z\" fill=\"url(#calico-white)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    <!-- Orange Left Head Patch -->\n    <path d=\"M 52 68 C 44 80 46 95 62 92 C 72 85 76 65 52 68 Z\" fill=\"url(#calico-orange)\"/>\n    <!-- Black Right Head Patch -->\n    <path d=\"M 148 68 C 156 80 154 95 138 92 C 128 85 124 65 148 68 Z\" fill=\"url(#calico-black)\"/>\n    \n    <!-- Muzzle -->\n    <ellipse cx=\"89\" cy=\"98\" rx=\"13\" ry=\"9\" fill=\"#FFFFFF\"/>\n    <ellipse cx=\"111\" cy=\"98\" rx=\"13\" ry=\"9\" fill=\"#FFFFFF\"/>\n    <!-- Emerald Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"74\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#064E3B\"/>\n      <ellipse cx=\"74\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#calico-eye)\"/>\n      <circle cx=\"70\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"126\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#064E3B\"/>\n      <ellipse cx=\"126\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#calico-eye)\"/>\n      <circle cx=\"122\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#059669\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#059669\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"58\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#calico-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#calico-blush)\" class=\"pet-blush\"/>\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n    <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 93 98 Q 100 108 107 98 Z\" fill=\"#F43F5E\"/>\n    </g>\n    <line x1=\"50\" y1=\"94\" x2=\"30\" y2=\"90\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"28\" y2=\"102\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"170\" y2=\"90\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"172\" y2=\"102\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <!-- Lilac Purple Bowtie -->\n    <g transform=\"translate(100, 126)\">\n      <polygon points=\"0,0 -16,-7 -14,5 0,0\" fill=\"#A855F7\" stroke=\"#7E22CE\" stroke-width=\"1.5\"/>\n      <polygon points=\"0,0 16,-7 14,5 0,0\" fill=\"#A855F7\" stroke=\"#7E22CE\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"4.5\" fill=\"#FDE047\" stroke=\"#D97706\" stroke-width=\"1.2\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Calico Cat",
    "trait": "Cheerful and affectionate",
    "traitVi": "Vui tươi & Quấn quýt",
    "bgColor": "#FED7AA",
    "accentColor": "#C2410C",
    "portraitImg": "assets/pet_cards/calico_portrait.png",
    "cardImg": "assets/pet_cards/calico_card.png",
    "idleSprite": "assets/pet_cards/calico_idle.png",
    "actionSprite": "assets/pet_cards/calico_action.png",
    "sleepSprite": "assets/pet_cards/calico_sleep.png"
  },
  "persian": {
    "id": "persian",
    "name": "Bông Bông",
    "defaultName": "Bông Bông",
    "title": "Mèo Ba Tư Lông Xù Hoàng Gia",
    "species": "Mèo Ba Tư Trắng",
    "category": "cat",
    "soundType": "purr",
    "favoriteFood": "Súp thưởng cá tuyết",
    "foodIcon": "🥣",
    "personality": "Kiêu kỳ nhưng cực kỳ mê được chải lông, bước đi nhẹ nhàng như một đám mây.",
    "description": "Bộ lông xù tròn như đám mây bồng bềnh, mặt tịt ngộ nghĩnh, mắt ngọc aquamarine và chuỗi ngọc trai ngôi sao.",
    "idleType": "cat-swish",
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "148px 145px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Purrr~ Đại tiểu thư Bông Bông xin chào cô Nguyệt ạ! 🌸✨",
        "Lông của em bông xù tròn vo như một chiếc bánh su kem ngọt ngào!",
        "Hôm nay cô nhớ chải lông cho Bông Bông để em luôn xinh đẹp nhé!",
        "Chúc cô giáo một ngày giảng dạy tràn đầy sự ngọt ngào và năng lượng!"
      ],
      "feed": [
        "Húp xì xụp! Bát súp cá tuyết hoàng gia béo ngậy ngon số một luôn! 🥣💖",
        "Bông Bông no căng bụng rồi, cọ cọ mũi vào tay cô cảm ơn nè! ✨"
      ],
      "pet": [
        "Purrr purrr~ Được cô xoa má bánh bao xù lông là em tan chảy luôn á! 🥰",
        "Cảm giác như đang chạm vào kẹo bông gòn đúng không cô? Yêu cô lắm! 💕"
      ],
      "hungry": [
        "Meo khẽ... Bát súp cá của Bông Bông hết sạch rồi cô ơi! Em đói bụng rồi! 🥺🥣",
        "Tiểu thư mèo Ba Tư xin chút súp thưởng thơm ngon nha cô giáo! 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-persian\">\n  <defs>\n    <radialGradient id=\"persian-cloud\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"85%\" stop-color=\"#F1F5F9\"/><stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </radialGradient>\n    <radialGradient id=\"persian-aqua\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#67E8F9\"/><stop offset=\"60%\" stop-color=\"#06B6D4\"/><stop offset=\"100%\" stop-color=\"#0E7490\"/>\n    </radialGradient>\n    <radialGradient id=\"persian-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FDA4AF\" stop-opacity=\"0.8\"/><stop offset=\"100%\" stop-color=\"#FDA4AF\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <!-- Huge Cloud Tail -->\n  <g class=\"pet-tail persian-tail\" style=\"transform-origin: 148px 145px;\">\n    <ellipse cx=\"160\" cy=\"120\" rx=\"28\" ry=\"34\" fill=\"url(#persian-cloud)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <circle cx=\"168\" cy=\"100\" r=\"14\" fill=\"#FFFFFF\"/>\n    <circle cx=\"174\" cy=\"125\" r=\"16\" fill=\"#FFFFFF\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs & Paws (4 LEGS TOTAL) -->\n    <ellipse cx=\"48\" cy=\"164\" rx=\"22\" ry=\"16\" fill=\"url(#persian-cloud)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <ellipse cx=\"40\" cy=\"180\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    \n    <ellipse cx=\"152\" cy=\"164\" rx=\"22\" ry=\"16\" fill=\"url(#persian-cloud)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <ellipse cx=\"160\" cy=\"180\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n\n    <!-- Round Puffy Cloud Body -->\n    <ellipse cx=\"100\" cy=\"150\" rx=\"54\" ry=\"40\" fill=\"url(#persian-cloud)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    <circle cx=\"80\" cy=\"142\" r=\"16\" fill=\"#FFFFFF\"/><circle cx=\"120\" cy=\"142\" r=\"16\" fill=\"#FFFFFF\"/>\n    \n    <!-- 2 Front Paws -->\n    <ellipse cx=\"78\" cy=\"182\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"122\" cy=\"182\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 65px;\">\n      <ellipse cx=\"58\" cy=\"54\" rx=\"13\" ry=\"16\" fill=\"url(#persian-cloud)\" stroke=\"#94A3B8\" stroke-width=\"2\" transform=\"rotate(-15 58 54)\"/>\n      <ellipse cx=\"58\" cy=\"54\" rx=\"8\" ry=\"10\" fill=\"#FCE7F3\" transform=\"rotate(-15 58 54)\"/>\n      <ellipse cx=\"142\" cy=\"54\" rx=\"13\" ry=\"16\" fill=\"url(#persian-cloud)\" stroke=\"#94A3B8\" stroke-width=\"2\" transform=\"rotate(15 142 54)\"/>\n      <ellipse cx=\"142\" cy=\"54\" rx=\"8\" ry=\"10\" fill=\"#FCE7F3\" transform=\"rotate(15 142 54)\"/>\n    </g>\n    <!-- Giant Fluffy Cheek Puffs -->\n    <circle cx=\"64\" cy=\"94\" r=\"24\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <circle cx=\"136\" cy=\"94\" r=\"24\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"100\" cy=\"85\" rx=\"46\" ry=\"38\" fill=\"url(#persian-cloud)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    <!-- Aquamarine Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"74\" cy=\"82\" rx=\"12.5\" ry=\"14\" fill=\"#164E63\"/>\n      <ellipse cx=\"74\" cy=\"83.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#persian-aqua)\"/>\n      <circle cx=\"70\" cy=\"78\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"87\" r=\"2\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"126\" cy=\"82\" rx=\"12.5\" ry=\"14\" fill=\"#164E63\"/>\n      <ellipse cx=\"126\" cy=\"83.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#persian-aqua)\"/>\n      <circle cx=\"122\" cy=\"78\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"87\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 64 84 Q 74 70 84 84\" stroke=\"#0891B2\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 116 84 Q 126 70 136 84\" stroke=\"#0891B2\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"58\" cy=\"94\" rx=\"12\" ry=\"9\" fill=\"url(#persian-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"94\" rx=\"12\" ry=\"9\" fill=\"url(#persian-blush)\" class=\"pet-blush\"/>\n    <!-- Flat Persian Button Nose & Mouth -->\n    <polygon points=\"98,88 102,88 100,92\" fill=\"#FB7185\"/>\n    <path d=\"M 96 94 Q 100 97 100 94 Q 100 97 104 94\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 96 95 Q 100 102 104 95 Z\" fill=\"#F43F5E\"/>\n    </g>\n    <!-- Pearl Necklace with Golden Star -->\n    <path d=\"M 72 120 Q 100 130 128 120\" stroke=\"#E2E8F0\" stroke-width=\"4\" stroke-dasharray=\"2,6\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 128)\">\n      <polygon points=\"0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Persian Cat",
    "trait": "Elegant and calm",
    "traitVi": "Thanh lịch & Điềm tĩnh",
    "bgColor": "#E0F2FE",
    "accentColor": "#0284C7",
    "portraitImg": "assets/pet_cards/persian_portrait.png",
    "cardImg": "assets/pet_cards/persian_card.png",
    "idleSprite": "assets/pet_cards/persian_idle.png",
    "actionSprite": "assets/pet_cards/persian_action.png",
    "sleepSprite": "assets/pet_cards/persian_sleep.png"
  },
  "corgi": {
    "id": "corgi",
    "name": "Bánh Mì",
    "defaultName": "Bánh Mì",
    "title": "Chú Corgi Lùn Mông Trái Tim",
    "species": "Corgi Welsh Pembroke",
    "category": "dog",
    "soundType": "bark",
    "favoriteFood": "Xúc xích phô mai nướng",
    "foodIcon": "🌭",
    "personality": "Năng động, thích chạy nhảy, mê đồ ăn và sở hữu bờ mông trái tim siêu cấp đáng yêu!",
    "description": "Chân ngắn cũn cỡn 4 chân vững vàng, tai to dựng đứng, bờ mông hình trái tim lắc lư tít mù và khăn bandana đỏ chấm bi.",
    "idleType": "corgi-bounce",
    "animationConfig": {
      "idleClass": "anim-corgi-bounce",
      "tailOrigin": "158px 146px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Gâu gâu! Em là Corgi Bánh Mì chân ngắn nhưng chạy siêu nhanh nè!",
        "Mông hình trái tim của em lắc có dẻo hông cô Nguyệt ơi? 🥰🐾",
        "Gâu! Chúc cô giáo một ngày giảng dạy ngập tràn niềm vui và năng lượng!",
        "Cô ơi em vừa chạy tuần tra 3 vòng quanh phòng học xong nè gâu gâu!"
      ],
      "feed": [
        "Ăm ắp! Xúc xích phô mai ngon đỉnh chóp luôn cô ơiii! Gâu gâu! 🌭💖",
        "Ngoàm một cái là hết veo! Bánh Mì no bụng rồi, em yêu cô Nguyệt nhất! ✨🐾"
      ],
      "pet": [
        "Gâu gâu~ Tay cô xoa mông trái tim của em là em thích mê ly! 🥰💕",
        "Chân ngắn nằm ngửa bụng cho cô gãi nè! Đã quá đi à~ 💖",
        "Gâu! Xoa tai to cho em nữa đi cô ơi, tai em mềm lắm!"
      ],
      "hungry": [
        "Bánh Mì đói meo rồi gâu gâu! Cho em xin một cây xúc xích đii cô Nguyệt! 🥺🌭",
        "Bụng ngắn reo réo rắt rồi gâu! Đồ ăn ngon đâu rồi cô ơiii? 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-corgi\">\n  <defs>\n    <radialGradient id=\"corgi-body\" cx=\"40%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FBBF24\"/><stop offset=\"65%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#D97706\"/>\n    </radialGradient>\n    <radialGradient id=\"corgi-cream\" cx=\"50%\" cy=\"40%\" r=\"60%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n    </radialGradient>\n    <radialGradient id=\"corgi-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FDA4AF\" stop-opacity=\"0.8\"/><stop offset=\"100%\" stop-color=\"#FDA4AF\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <!-- Tiny Stubby Wagging Tail on Fluffy Heart Butt -->\n  <g class=\"pet-tail corgi-tail\" style=\"transform-origin: 158px 146px;\">\n    <ellipse cx=\"164\" cy=\"142\" rx=\"14\" ry=\"11\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"170\" cy=\"140\" r=\"5\" fill=\"#FFFFFF\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 HIND DRUMSTICK LEGS (4 LEGS TOTAL - Rõ ràng 2 đùi sau và 2 bàn chân sau) -->\n    <ellipse cx=\"50\" cy=\"162\" rx=\"22\" ry=\"18\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"40\" cy=\"178\" rx=\"15\" ry=\"9\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"34\" cy=\"178\" r=\"1.5\" fill=\"#B45309\"/><circle cx=\"40\" cy=\"180\" r=\"1.5\" fill=\"#B45309\"/><circle cx=\"46\" cy=\"178\" r=\"1.5\" fill=\"#B45309\"/>\n    \n    <ellipse cx=\"150\" cy=\"162\" rx=\"22\" ry=\"18\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"160\" cy=\"178\" rx=\"15\" ry=\"9\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"154\" cy=\"178\" r=\"1.5\" fill=\"#B45309\"/><circle cx=\"160\" cy=\"180\" r=\"1.5\" fill=\"#B45309\"/><circle cx=\"166\" cy=\"178\" r=\"1.5\" fill=\"#B45309\"/>\n\n    <!-- Oblong Corgi Body with Heart Flanks -->\n    <ellipse cx=\"100\" cy=\"150\" rx=\"52\" ry=\"36\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"100\" cy=\"154\" rx=\"32\" ry=\"24\" fill=\"url(#corgi-cream)\"/>\n    \n    <!-- 2 FRONT STUBBY LEGS (Chân ngắn cưng xỉu phía trước) -->\n    <rect x=\"74\" y=\"142\" width=\"18\" height=\"38\" rx=\"9\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"178\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"178\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    \n    <rect x=\"108\" y=\"142\" width=\"18\" height=\"38\" rx=\"9\" fill=\"url(#corgi-cream)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"178\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"178\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n  </g>\n  <!-- AUTHENTIC FOXY CORGI HEAD -->\n  <g class=\"pet-head\">\n    <!-- Big Rounded Bat Ears -->\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 65px;\">\n      <ellipse cx=\"50\" cy=\"38\" rx=\"16\" ry=\"28\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.2\" transform=\"rotate(-20 50 38)\"/>\n      <ellipse cx=\"50\" cy=\"40\" rx=\"9\" ry=\"20\" fill=\"#FDE68A\" transform=\"rotate(-20 50 40)\"/>\n      <ellipse cx=\"150\" cy=\"38\" rx=\"16\" ry=\"28\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.2\" transform=\"rotate(20 150 38)\"/>\n      <ellipse cx=\"150\" cy=\"40\" rx=\"9\" ry=\"20\" fill=\"#FDE68A\" transform=\"rotate(20 150 40)\"/>\n    </g>\n    <!-- Foxy Head Base -->\n    <ellipse cx=\"100\" cy=\"85\" rx=\"46\" ry=\"38\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n    <!-- Iconic White Corgi Blaze & Muzzle -->\n    <path d=\"M 100 52 C 94 66 74 72 74 94 C 74 114 126 114 126 94 C 126 72 106 66 100 52 Z\" fill=\"url(#corgi-cream)\"/>\n    <!-- Doggy Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"78\" cy=\"82\" rx=\"8.5\" ry=\"11\" fill=\"#1E293B\"/>\n      <circle cx=\"75.5\" cy=\"78.5\" r=\"3.5\" fill=\"#FFFFFF\"/><circle cx=\"81\" cy=\"88\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"122\" cy=\"82\" rx=\"8.5\" ry=\"11\" fill=\"#1E293B\"/>\n      <circle cx=\"119.5\" cy=\"78.5\" r=\"3.5\" fill=\"#FFFFFF\"/><circle cx=\"125\" cy=\"88\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 70 82 Q 78 70 86 82\" stroke=\"#92400E\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 82 Q 122 70 130 82\" stroke=\"#92400E\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"62\" cy=\"94\" rx=\"10\" ry=\"6.5\" fill=\"url(#corgi-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"138\" cy=\"94\" rx=\"10\" ry=\"6.5\" fill=\"url(#corgi-blush)\" class=\"pet-blush\"/>\n    <!-- Black Snout & Mouth -->\n    <ellipse cx=\"100\" cy=\"94\" rx=\"6.5\" ry=\"5\" fill=\"#0F172A\"/>\n    <ellipse cx=\"98.5\" cy=\"92.5\" rx=\"2\" ry=\"1.2\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n    <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#92400E\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <!-- Happy Panting Mouth -->\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#991B1B\"/>\n      <path d=\"M 95 101 Q 100 114 105 101 Z\" fill=\"#FB7185\"/>\n    </g>\n    <!-- Red Polka-dot Bandana -->\n    <polygon points=\"76,118 124,118 100,138\" fill=\"#EF4444\" stroke=\"#B91C1C\" stroke-width=\"1.8\"/>\n    <circle cx=\"92\" cy=\"124\" r=\"2.2\" fill=\"#FFFFFF\"/><circle cx=\"108\" cy=\"124\" r=\"2.2\" fill=\"#FFFFFF\"/><circle cx=\"100\" cy=\"131\" r=\"2\" fill=\"#FFFFFF\"/>\n  </g>\n</svg>",
    "enName": "Corgi",
    "trait": "Energetic and friendly",
    "traitVi": "Năng động & Thân thiện",
    "bgColor": "#DCFCE7",
    "accentColor": "#16A34A",
    "portraitImg": "assets/pet_cards/corgi_portrait.png",
    "cardImg": "assets/pet_cards/corgi_card.png",
    "idleSprite": "assets/pet_cards/corgi_idle.png",
    "actionSprite": "assets/pet_cards/corgi_action.png",
    "sleepSprite": "assets/pet_cards/corgi_sleep.png"
  },
  "shiba": {
    "id": "shiba",
    "name": "Mochi",
    "defaultName": "Mochi",
    "title": "Chú Chó Shiba Inu Nụ Cười Triệu View",
    "species": "Shiba Inu Nhật Bản",
    "category": "dog",
    "soundType": "bark",
    "favoriteFood": "Thịt bò Wagyu áp chảo",
    "foodIcon": "🥩",
    "personality": "Ngoan ngoãn, kiên định, nụ cười toả nắng và chiếc đuôi cuộn tròn như chiếc bánh donut!",
    "description": "Má phúng phính bánh bao đặc trưng, vệt lông trắng Urajiro, đuôi cuộn tròn tít, 4 chân vững vàng và khăn quàng lá xanh.",
    "idleType": "shiba-wag",
    "animationConfig": {
      "idleClass": "anim-shiba-wag",
      "tailOrigin": "145px 125px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Gâu! Em là Shiba Inu Mochi nụ cười triệu view gửi lời chào cô Nguyệt!",
        "Đuôi em cuộn tròn tít như cái bánh donut luôn đó cô thấy hông? 🍩🐕",
        "Hôm nay cô Nguyệt thấy má bánh bao của em có tròn và ngoan hông nè?",
        "Chăm chỉ chấm bài nhé cô ơi, Mochi ngồi đây cười tươi tiếp thêm năng lượng!"
      ],
      "feed": [
        "Ngoàm! Miếng bò áp chảo thơm phức béo ngậy! Cảm ơn cô Nguyệt nhiều lắm! 🥩✨",
        "Gâu gâu! Món ruột của em đó! Mochi ăn sạch sành sanh không chừa một vụn nào!"
      ],
      "pet": [
        "Hì hì~ Má bánh bao của em mềm như cục mochi, cô bẹo má em thích ghê! 🥰🌸",
        "Gâu gâu! Mỗi lần cô xoa đầu là mắt em híp lại thành hình cầu vồng luôn! 💕",
        "Cảm giác được cô yêu thương thật là ấm áp quá đi à~"
      ],
      "hungry": [
        "Gâu... Mochi đói bụng rồi cô ơi, nụ cười triệu view sắp tắt rồi nè! 🥺🥩",
        "Bữa ăn trưa của em đâu rồi cô Nguyệt ơi? Cho em xin chút thịt bò nha! 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-shiba\">\n  <defs>\n    <radialGradient id=\"shiba-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FB923C\"/><stop offset=\"60%\" stop-color=\"#EA580C\"/><stop offset=\"100%\" stop-color=\"#C2410C\"/>\n    </radialGradient>\n    <radialGradient id=\"shiba-cream\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n    </radialGradient>\n    <radialGradient id=\"shiba-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#F43F5E\" stop-opacity=\"0.75\"/><stop offset=\"100%\" stop-color=\"#F43F5E\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <!-- Curled Donut Tail over Back -->\n  <g class=\"pet-tail shiba-tail\" style=\"transform-origin: 145px 125px;\">\n    <path d=\"M 140 135 C 165 105 180 125 165 145 C 150 155 135 138 148 122\" stroke=\"url(#shiba-coat)\" stroke-width=\"17\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 152 115 C 168 122 162 138 150 135\" stroke=\"#FFFBEB\" stroke-width=\"8\" stroke-linecap=\"round\" fill=\"none\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 Hind Sitting Legs & Paws (4 LEGS TOTAL) -->\n    <ellipse cx=\"50\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <ellipse cx=\"42\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#shiba-cream)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    \n    <ellipse cx=\"150\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <ellipse cx=\"158\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#shiba-cream)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n\n    <!-- Torso -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"48\" ry=\"38\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"100\" cy=\"150\" rx=\"28\" ry=\"28\" fill=\"url(#shiba-cream)\"/>\n    \n    <!-- 2 Front Legs & Paws -->\n    <rect x=\"74\" y=\"140\" width=\"18\" height=\"40\" rx=\"9\" fill=\"url(#shiba-cream)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    \n    <rect x=\"108\" y=\"140\" width=\"18\" height=\"40\" rx=\"9\" fill=\"url(#shiba-cream)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n  </g>\n  <!-- AUTHENTIC SHIBA HEAD (Phúng phính má bánh bao & Urajiro) -->\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 65px;\">\n      <polygon points=\"56,66 40,30 76,46\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n      <polygon points=\"56,60 46,36 72,48\" fill=\"#FEF3C7\"/>\n      <polygon points=\"40,30 45,26 49,32\" fill=\"#7C2D12\"/>\n      \n      <polygon points=\"144,66 160,30 124,46\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n      <polygon points=\"144,60 154,36 128,48\" fill=\"#FEF3C7\"/>\n      <polygon points=\"160,30 155,26 151,32\" fill=\"#7C2D12\"/>\n    </g>\n    <!-- Big Puffy Doughy Cheeks (Má phúng phính đặc trưng) -->\n    <path d=\"M 50 70 C 38 85 36 106 52 116 C 68 126 84 126 100 126 C 116 126 132 126 148 116 C 164 106 162 85 150 70 C 136 52 64 52 50 70 Z\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n    <!-- Urajiro White Mask -->\n    <path d=\"M 68 76 Q 84 82 100 82 Q 116 82 132 76 Q 150 102 120 116 Q 100 122 80 116 Q 50 102 68 76 Z\" fill=\"url(#shiba-cream)\"/>\n    <!-- White Eye Dots (Lông mày trắng Urajiro) -->\n    <ellipse cx=\"78\" cy=\"68\" rx=\"4.5\" ry=\"3\" fill=\"#FFFBEB\" transform=\"rotate(-10 78 68)\"/>\n    <ellipse cx=\"122\" cy=\"68\" rx=\"4.5\" ry=\"3\" fill=\"#FFFBEB\" transform=\"rotate(10 122 68)\"/>\n    <!-- Almond Smiling Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"78\" cy=\"82\" rx=\"8\" ry=\"10\" fill=\"#1C1917\"/>\n      <circle cx=\"76\" cy=\"79\" r=\"3.2\" fill=\"#FFFFFF\"/><circle cx=\"80\" cy=\"87\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"122\" cy=\"82\" rx=\"8\" ry=\"10\" fill=\"#1C1917\"/>\n      <circle cx=\"120\" cy=\"79\" r=\"3.2\" fill=\"#FFFFFF\"/><circle cx=\"124\" cy=\"87\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 70 82 Q 78 70 86 82\" stroke=\"#7C2D12\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 82 Q 122 70 130 82\" stroke=\"#7C2D12\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"62\" cy=\"94\" rx=\"10\" ry=\"7\" fill=\"url(#shiba-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"138\" cy=\"94\" rx=\"10\" ry=\"7\" fill=\"url(#shiba-blush)\" class=\"pet-blush\"/>\n    <polygon points=\"96,90 104,90 100,95\" fill=\"#1C1917\"/>\n    <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#7C2D12\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <!-- Classic Shiba Open Grin -->\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#991B1B\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4\" ry=\"3\" fill=\"#FB7185\"/>\n    </g>\n    <!-- Green Karakusa Japanese Bandana -->\n    <path d=\"M 76 118 Q 100 130 124 118 Q 100 144 76 118 Z\" fill=\"#16A34A\" stroke=\"#15803D\" stroke-width=\"1.8\"/>\n    <circle cx=\"94\" cy=\"125\" r=\"2\" fill=\"#FFFFFF\" opacity=\"0.9\"/><circle cx=\"106\" cy=\"125\" r=\"2\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n  </g>\n</svg>",
    "enName": "Shiba Inu",
    "trait": "Brave and confident",
    "traitVi": "Dũng cảm & Tự tin",
    "bgColor": "#FEF9C3",
    "accentColor": "#CA8A04",
    "portraitImg": "assets/pet_cards/shiba_portrait.png",
    "cardImg": "assets/pet_cards/shiba_card.png",
    "idleSprite": "assets/pet_cards/shiba_idle.png",
    "actionSprite": "assets/pet_cards/shiba_action.png",
    "sleepSprite": "assets/pet_cards/shiba_sleep.png"
  },
  "golden": {
    "id": "golden",
    "name": "Lucky",
    "defaultName": "Lucky",
    "title": "Cún Golden Trung Thành Ấm Áp",
    "species": "Golden Retriever",
    "category": "dog",
    "soundType": "bark",
    "favoriteFood": "Bánh thưởng giòn tan",
    "foodIcon": "🦴",
    "personality": "Hiền lành, tình cảm, luôn mỉm cười và luôn mang may mắn (Lucky) đến cho mọi người!",
    "description": "Đầu tròn tai cụp đung đưa, thè lưỡi cười tươi rói, mắt nâu đượm tình, 4 chân to mập và vòng cổ xanh mặt xương vàng.",
    "idleType": "golden-pant",
    "animationConfig": {
      "idleClass": "anim-golden-pant",
      "tailOrigin": "150px 140px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Gâu gâu! Em là Lucky, chú cún trung thành nhất của cô Nguyệt!",
        "Cô mệt không cô? Đưa bàn tay đây em đặt chân lên bắt tay cái nà! 🐾🤝",
        "Gâu gâu! Chúc cô Nguyệt và các bạn học sinh một ngày bội thu kiến thức!",
        "Lucky ngoan ngoãn nằm canh cửa lớp học cho cô nè gâu gâu!"
      ],
      "feed": [
        "Rộp rộp! Khúc xương bánh thưởng giòn tan ngon quá đi thôi! Gâu gâu! 🦴💖",
        "Đuôi em vẫy tít mù luôn rồi nè cô ơi! Bữa ăn ngon nhất trần đời! ✨"
      ],
      "pet": [
        "Gâu gâu~ Lucky gối đầu lên chân cô nè, ấm áp và bình yên quá chừng! 🥰",
        "Tai cụp của em mềm như nhung, cô vuốt làm em muốn ngủ một giấc luôn á! 💕",
        "Lucky yêu cô giáo nhiều nhất trên thế giới này luôn!"
      ],
      "hungry": [
        "Gâu ử... bụng Lucky sôi ùng ục rồi nè cô ơi! Cho em xin một khúc xương đi ạ! 🥺🦴",
        "Em ngoan từ sáng tới giờ rồi á, cô thưởng cho Lucky chút đồ ăn đi mà~ 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-golden\">\n  <defs>\n    <radialGradient id=\"golden-fur\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FEF08A\"/><stop offset=\"50%\" stop-color=\"#FBBF24\"/><stop offset=\"100%\" stop-color=\"#D97706\"/>\n    </radialGradient>\n    <radialGradient id=\"golden-ear\" cx=\"40%\" cy=\"30%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </radialGradient>\n    <radialGradient id=\"golden-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.7\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <g class=\"pet-tail golden-tail\" style=\"transform-origin: 150px 140px;\">\n    <path d=\"M 145 145 Q 185 125 175 95 Q 165 90 152 115 Z\" fill=\"url(#golden-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <path d=\"M 155 125 Q 180 115 172 100\" stroke=\"#FEF08A\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 Chunky Hind Legs & Paws (4 LEGS TOTAL) -->\n    <ellipse cx=\"50\" cy=\"160\" rx=\"22\" ry=\"18\" fill=\"url(#golden-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"40\" cy=\"178\" rx=\"16\" ry=\"9\" fill=\"#FEF3C7\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    \n    <ellipse cx=\"150\" cy=\"160\" rx=\"22\" ry=\"18\" fill=\"url(#golden-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"160\" cy=\"178\" rx=\"16\" ry=\"9\" fill=\"#FEF3C7\" stroke=\"#B45309\" stroke-width=\"2\"/>\n\n    <ellipse cx=\"100\" cy=\"150\" rx=\"54\" ry=\"40\" fill=\"url(#golden-fur)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"100\" cy=\"152\" rx=\"30\" ry=\"26\" fill=\"#FEF3C7\"/>\n    \n    <!-- 2 Thick Puppy Front Paws -->\n    <rect x=\"72\" y=\"140\" width=\"20\" height=\"42\" rx=\"10\" fill=\"#FEF3C7\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"77\" cy=\"176\" r=\"2\" fill=\"#D97706\"/><circle cx=\"82\" cy=\"178\" r=\"2\" fill=\"#D97706\"/><circle cx=\"87\" cy=\"176\" r=\"2\" fill=\"#D97706\"/>\n    \n    <rect x=\"108\" y=\"140\" width=\"20\" height=\"42\" rx=\"10\" fill=\"#FEF3C7\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"113\" cy=\"176\" r=\"2\" fill=\"#D97706\"/><circle cx=\"118\" cy=\"178\" r=\"2\" fill=\"#D97706\"/><circle cx=\"123\" cy=\"176\" r=\"2\" fill=\"#D97706\"/>\n  </g>\n  <!-- AUTHENTIC GOLDEN PUPPY HEAD (Droopy ears & lolling tongue) -->\n  <g class=\"pet-head\">\n    <g class=\"pet-ears golden-ears\" style=\"transform-origin: 100px 70px;\">\n      <path d=\"M 64 68 C 42 72 28 96 34 122 C 38 130 56 124 60 106 Z\" fill=\"url(#golden-ear)\" stroke=\"#92400E\" stroke-width=\"2.2\"/>\n      <path d=\"M 136 68 C 158 72 172 96 166 122 C 162 130 144 124 140 106 Z\" fill=\"url(#golden-ear)\" stroke=\"#92400E\" stroke-width=\"2.2\"/>\n    </g>\n    <!-- Big Dome Skull -->\n    <ellipse cx=\"100\" cy=\"85\" rx=\"48\" ry=\"40\" fill=\"url(#golden-fur)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"100\" cy=\"98\" rx=\"26\" ry=\"20\" fill=\"#FEF3C7\"/>\n    <!-- Liquid Chocolate Puppy Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"82\" rx=\"9\" ry=\"11\" fill=\"#451A03\"/>\n      <ellipse cx=\"76\" cy=\"84\" rx=\"7.5\" ry=\"9\" fill=\"#78350F\"/>\n      <circle cx=\"73\" cy=\"78\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"79\" cy=\"88\" r=\"2\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"82\" rx=\"9\" ry=\"11\" fill=\"#451A03\"/>\n      <ellipse cx=\"124\" cy=\"84\" rx=\"7.5\" ry=\"9\" fill=\"#78350F\"/>\n      <circle cx=\"121\" cy=\"78\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"127\" cy=\"88\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 82 Q 76 70 86 82\" stroke=\"#78350F\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 82 Q 124 70 134 82\" stroke=\"#78350F\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"60\" cy=\"96\" rx=\"11\" ry=\"7\" fill=\"url(#golden-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"140\" cy=\"96\" rx=\"11\" ry=\"7\" fill=\"url(#golden-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"100\" cy=\"92\" rx=\"7.5\" ry=\"5.5\" fill=\"#0F172A\"/>\n    <ellipse cx=\"98.5\" cy=\"90\" rx=\"2.5\" ry=\"1.5\" fill=\"#FFFFFF\" opacity=\"0.65\"/>\n    <path d=\"M 92 98 Q 100 102 100 98 Q 100 102 108 98\" stroke=\"#78350F\" stroke-width=\"2.4\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <!-- Lolling Tongue Panting Mouth -->\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 90 98 Q 100 108 110 98 Z\" fill=\"#991B1B\"/>\n      <path d=\"M 93 100 Q 100 118 107 100 Z\" fill=\"#FB7185\"/>\n      <line x1=\"100\" y1=\"102\" x2=\"100\" y2=\"114\" stroke=\"#F43F5E\" stroke-width=\"1.5\"/>\n    </g>\n    <!-- Royal Blue Collar with Golden Bone Tag -->\n    <path d=\"M 72 120 Q 100 134 128 120\" stroke=\"#2563EB\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 134)\">\n      <ellipse cx=\"-4\" cy=\"0\" rx=\"2\" ry=\"3\" fill=\"#FBBF24\"/><ellipse cx=\"4\" cy=\"0\" rx=\"2\" ry=\"3\" fill=\"#FBBF24\"/>\n      <rect x=\"-4\" y=\"-1.5\" width=\"8\" height=\"3\" fill=\"#FBBF24\"/><circle cx=\"0\" cy=\"0\" r=\"1.5\" fill=\"#D97706\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Golden Retriever",
    "trait": "Kind and loyal",
    "traitVi": "Hiền lành & Trung thành",
    "bgColor": "#FEF3C7",
    "accentColor": "#D97706",
    "portraitImg": "assets/pet_cards/golden_portrait.png",
    "cardImg": "assets/pet_cards/golden_card.png",
    "idleSprite": "assets/pet_cards/golden_idle.png",
    "actionSprite": "assets/pet_cards/golden_action.png",
    "sleepSprite": "assets/pet_cards/golden_sleep.png"
  },
  "rabbit": {
    "id": "rabbit",
    "name": "Mimi",
    "defaultName": "Mimi",
    "title": "Bé Thỏ Trắng Tai Dài Ngọt Ngào",
    "species": "Thỏ Hà Lan Tai Đứng",
    "category": "other",
    "soundType": "squeak",
    "favoriteFood": "Cà rốt giòn ngọt lịm",
    "foodIcon": "🥕",
    "personality": "Nhút nhát nhưng cực kỳ quấn người, đôi tai dài lúc nào cũng rung rinh và ôm khư khư củ cà rốt!",
    "description": "Thân hình tròn trĩnh như cục bông tuyết, đôi mắt hồng ngọc lấp lánh, tai dài vểnh cao, 4 chân tròn và củ cà rốt giòn ngọt.",
    "idleType": "rabbit-twitch",
    "animationConfig": {
      "idleClass": "anim-rabbit-twitch",
      "tailOrigin": "145px 150px",
      "headOrigin": "100px 94px"
    },
    "quotes": {
      "greetings": [
        "Khịt khịt! Đôi tai dài của Mimi vừa nghe thấy tiếng bước chân cô tới nè! 🐰✨",
        "Mimi gửi tặng cô Nguyệt một bông hoa và ngàn lời chúc tốt lành!",
        "Em vừa nhảy tưng tưng 5 vòng để khởi động ngày mới đó cô ơi!",
        "Mũi em cứ hít hà liên hồi vì nhận ra mùi hương dịu dàng của cô nè!"
      ],
      "feed": [
        "Rồm rộp! Cà rốt giòn ngọt lịm thơm ngon hết sẩy! Cảm ơn cô Nguyệt! 🥕💖",
        "Hai má em phồng to như hai quả bóng vì nhai cà rốt ngon quá kìa cô ơi! ✨"
      ],
      "pet": [
        "Khịt khịt~ Vuốt từ đỉnh tai xuống sống lưng êm ái thích mê ly luôn á cô! 🥰🌸",
        "Mimi dụi chiếc mũi nhỏ ươn ướt vào lòng bàn tay cô nè! Yêu cô quá! 💕",
        "Nhẹ nhàng và ngọt ngào quá, Mimi không muốn rời tay cô đâu!"
      ],
      "hungry": [
        "Khịt... củ cà rốt của Mimi hết veo rồi cô ơi! Em đói bụng quá đi! 🥺🥕",
        "Cô Nguyệt ơi, tiếp tế cho thỏ con một củ cà rốt tươi ngon với nha! 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-rabbit\">\n  <defs>\n    <radialGradient id=\"rabbit-white\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"75%\" stop-color=\"#F8FAFC\"/><stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </radialGradient>\n    <radialGradient id=\"rabbit-pink\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFF1F2\"/><stop offset=\"100%\" stop-color=\"#FECDD3\"/>\n    </radialGradient>\n    <radialGradient id=\"rabbit-ruby\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#F43F5E\"/><stop offset=\"60%\" stop-color=\"#BE185D\"/><stop offset=\"100%\" stop-color=\"#881337\"/>\n    </radialGradient>\n  </defs>\n  <g class=\"pet-tail rabbit-tail\" style=\"transform-origin: 145px 150px;\">\n    <circle cx=\"150\" cy=\"150\" r=\"14\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 Long Flat Bunny Hind Feet (4 LEGS TOTAL) -->\n    <ellipse cx=\"60\" cy=\"182\" rx=\"20\" ry=\"10\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"140\" cy=\"182\" rx=\"20\" ry=\"10\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n\n    <ellipse cx=\"100\" cy=\"152\" rx=\"46\" ry=\"38\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n    \n    <!-- Carrot Prop -->\n    <g class=\"pet-prop-carrot\">\n      <path d=\"M 90 135 C 94 135 116 160 110 172 C 106 178 95 158 90 135 Z\" fill=\"#EA580C\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n      <path d=\"M 90 135 Q 84 120 76 122 Q 84 130 88 136 Z\" fill=\"#22C55E\"/>\n      <path d=\"M 90 135 Q 90 116 88 116 Q 90 126 92 136 Z\" fill=\"#16A34A\"/>\n    </g>\n    <!-- 2 Cute Front Paws Hugging Carrot -->\n    <ellipse cx=\"84\" cy=\"146\" rx=\"9\" ry=\"7\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" transform=\"rotate(15 84 146)\"/>\n    <ellipse cx=\"114\" cy=\"148\" rx=\"9\" ry=\"7\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" transform=\"rotate(-20 114 148)\"/>\n  </g>\n  <!-- AUTHENTIC RABBIT HEAD & TALL EARS -->\n  <g class=\"pet-head\">\n    <g class=\"pet-ears rabbit-ears\" style=\"transform-origin: 100px 75px;\">\n      <g style=\"transform-origin: 75px 75px;\" class=\"rabbit-ear-l\">\n        <path d=\"M 70 75 C 50 45 52 10 74 6 C 88 10 85 45 78 75 Z\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n        <path d=\"M 72 70 C 60 45 60 18 73 14 C 80 18 80 45 76 70 Z\" fill=\"url(#rabbit-pink)\"/>\n      </g>\n      <g style=\"transform-origin: 125px 75px;\" class=\"rabbit-ear-r\">\n        <path d=\"M 122 75 C 115 45 112 10 126 6 C 148 10 150 45 130 75 Z\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n        <path d=\"M 124 70 C 120 45 120 18 127 14 C 140 18 140 45 128 70 Z\" fill=\"url(#rabbit-pink)\"/>\n      </g>\n    </g>\n    <!-- Chubby Head -->\n    <ellipse cx=\"100\" cy=\"94\" rx=\"44\" ry=\"36\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"75\" cy=\"90\" rx=\"9.5\" ry=\"12\" fill=\"url(#rabbit-ruby)\"/>\n      <circle cx=\"72\" cy=\"86\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"96\" r=\"2\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"125\" cy=\"90\" rx=\"9.5\" ry=\"12\" fill=\"url(#rabbit-ruby)\"/>\n      <circle cx=\"122\" cy=\"86\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"128\" cy=\"96\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 92 Q 75 80 84 92\" stroke=\"#BE185D\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 116 92 Q 125 80 134 92\" stroke=\"#BE185D\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"62\" cy=\"102\" rx=\"11\" ry=\"8\" fill=\"#F43F5E\" opacity=\"0.35\" class=\"pet-blush\"/>\n    <ellipse cx=\"138\" cy=\"102\" rx=\"11\" ry=\"8\" fill=\"#F43F5E\" opacity=\"0.35\" class=\"pet-blush\"/>\n    <!-- Twitching Y-Nose -->\n    <g class=\"rabbit-nose\" style=\"transform-origin: 100px 98px;\">\n      <polygon points=\"97,97 103,97 100,101\" fill=\"#F43F5E\"/>\n      <path d=\"M 97 103 Q 100 106 100 103 Q 100 106 103 103\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n      <line x1=\"56\" y1=\"100\" x2=\"42\" y2=\"98\" stroke=\"#CBD5E1\" stroke-width=\"1.4\"/>\n      <line x1=\"56\" y1=\"104\" x2=\"40\" y2=\"106\" stroke=\"#CBD5E1\" stroke-width=\"1.4\"/>\n      <line x1=\"144\" y1=\"100\" x2=\"158\" y2=\"98\" stroke=\"#CBD5E1\" stroke-width=\"1.4\"/>\n      <line x1=\"144\" y1=\"104\" x2=\"160\" y2=\"106\" stroke=\"#CBD5E1\" stroke-width=\"1.4\"/>\n    </g>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 96 103 Q 100 110 104 103 Z\" fill=\"#F43F5E\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Rabbit",
    "trait": "Lively and gentle",
    "traitVi": "Nhanh nhẹn & Dịu dàng",
    "bgColor": "#FCE7F3",
    "accentColor": "#BE185D",
    "portraitImg": "assets/pet_cards/rabbit_portrait.png",
    "cardImg": "assets/pet_cards/rabbit_card.png",
    "idleSprite": "assets/pet_cards/rabbit_idle.png",
    "actionSprite": "assets/pet_cards/rabbit_action.png",
    "sleepSprite": "assets/pet_cards/rabbit_sleep.png"
  },
  "panda": {
    "id": "panda",
    "name": "Bảo Bảo",
    "defaultName": "Bảo Bảo",
    "title": "Gấu Trúc Tròn Trĩnh Thích Trúc Xanh",
    "species": "Gấu Trúc Khổng Lồ",
    "category": "other",
    "soundType": "crunch",
    "favoriteFood": "Nhánh trúc non ngọt bùi",
    "foodIcon": "🎍",
    "personality": "Tròn lăn tăn như cục bột nếp, mê ngủ nướng và cực kỳ đam mê những nhánh tre trúc ngọt lịm!",
    "description": "Thân hình tròn vo đen trắng, quầng mắt đen thương hiệu, 4 chân gấu mập mạp và cành trúc xanh non trên tay.",
    "idleType": "panda-chew",
    "animationConfig": {
      "idleClass": "anim-panda-chew",
      "tailOrigin": "148px 150px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Rồm rộp! Bảo Bảo chào cô Nguyệt! Nhánh trúc hôm nay ngọt lịm luôn á! 🐼🎍",
        "Em tròn vo như một cục bột nếp, ngồi bệt trên thảm chào cô nè!",
        "Dạy học mệt thì cô chợp mắt 5 phút như em đi, đảm bảo tỉnh táo liền á!",
        "Bảo Bảo gửi cô Nguyệt một cái ôm gấu trúc bự chảng ấm áp!"
      ],
      "feed": [
        "Rộp rộp rộp! Nhánh trúc non xanh mơn mởn nhai đã cái răng gì đâu! 🎍💖",
        "Bụng Bảo Bảo tròn như quả bóng rồi nè cô ơi! Cảm ơn cô nhiều lắm! ✨🐼"
      ],
      "pet": [
        "Ôi chao~ Tay cô gãi chiếc bụng bự của em làm em muốn nằm lăn quay ra luôn! 🥰",
        "Lông gấu trúc dày và ấm lắm đúng không cô? Em dựa đầu vào cô nà! 💕",
        "Gãi tai tròn cho em nữa đi cô ơi, đã quá chừng chừng!"
      ],
      "hungry": [
        "Ục ục... chiếc bụng bự của gấu trúc đang kêu gào đòi trúc non kìa cô ơi! 🥺🎍",
        "Bảo Bảo nhai hết cả ngọn trúc rồi nè, cô cho em thêm một cành nữa nha! 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-panda\">\n  <defs>\n    <radialGradient id=\"panda-white\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"80%\" stop-color=\"#F1F5F9\"/><stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </radialGradient>\n    <radialGradient id=\"panda-black\" cx=\"35%\" cy=\"30%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"70%\" stop-color=\"#0F172A\"/><stop offset=\"100%\" stop-color=\"#020617\"/>\n    </radialGradient>\n    <radialGradient id=\"panda-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FDA4AF\" stop-opacity=\"0.7\"/><stop offset=\"100%\" stop-color=\"#FDA4AF\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <g class=\"pet-body\">\n    <!-- 2 Big Bear Hind Feet (Classic sitting bear pose - 4 LIMBS TOTAL) -->\n    <ellipse cx=\"50\" cy=\"178\" rx=\"22\" ry=\"14\" fill=\"url(#panda-black)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"176\" r=\"6\" fill=\"#64748B\" opacity=\"0.6\"/>\n    \n    <ellipse cx=\"150\" cy=\"178\" rx=\"22\" ry=\"14\" fill=\"url(#panda-black)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"176\" r=\"6\" fill=\"#64748B\" opacity=\"0.6\"/>\n    \n    <!-- White Belly & Black Shoulders -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"54\" ry=\"42\" fill=\"url(#panda-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.5\"/>\n    <path d=\"M 46 142 C 46 122 72 120 100 120 C 128 120 154 122 154 142 C 142 165 58 165 46 142 Z\" fill=\"url(#panda-black)\"/>\n    <ellipse cx=\"100\" cy=\"155\" rx=\"34\" ry=\"26\" fill=\"url(#panda-white)\"/>\n    \n    <!-- Bamboo Stalk -->\n    <g class=\"pet-prop-bamboo\">\n      <line x1=\"126\" y1=\"180\" x2=\"140\" y2=\"88\" stroke=\"#15803D\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n      <line x1=\"128\" y1=\"180\" x2=\"140\" y2=\"88\" stroke=\"#4ADE80\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n      <path d=\"M 139 96 Q 160 88 166 98 Q 152 104 139 96 Z\" fill=\"#22C55E\"/>\n      <path d=\"M 137 114 Q 158 116 162 126 Q 148 126 137 114 Z\" fill=\"#16A34A\"/>\n    </g>\n    <!-- 2 Chubby Front Arms (Holding bamboo) -->\n    <ellipse cx=\"70\" cy=\"142\" rx=\"14\" ry=\"18\" fill=\"url(#panda-black)\" transform=\"rotate(20 70 142)\"/>\n    <ellipse cx=\"126\" cy=\"140\" rx=\"14\" ry=\"18\" fill=\"url(#panda-black)\" transform=\"rotate(-25 126 140)\"/>\n  </g>\n  <!-- AUTHENTIC SPHERICAL PANDA HEAD -->\n  <g class=\"pet-head\">\n    <g class=\"pet-ears panda-ears\" style=\"transform-origin: 100px 65px;\">\n      <circle cx=\"56\" cy=\"46\" r=\"18\" fill=\"url(#panda-black)\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <circle cx=\"144\" cy=\"46\" r=\"18\" fill=\"url(#panda-black)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    </g>\n    <ellipse cx=\"100\" cy=\"85\" rx=\"50\" ry=\"42\" fill=\"url(#panda-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.5\"/>\n    <!-- Iconic Tilted Teardrop Eye Patches -->\n    <ellipse cx=\"74\" cy=\"82\" rx=\"15\" ry=\"18\" fill=\"url(#panda-black)\" transform=\"rotate(-15 74 82)\"/>\n    <ellipse cx=\"126\" cy=\"82\" rx=\"15\" ry=\"18\" fill=\"url(#panda-black)\" transform=\"rotate(15 126 82)\"/>\n    <!-- Anime Eyes inside Patches -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"75\" cy=\"81\" rx=\"8\" ry=\"9.5\" fill=\"#0F172A\"/>\n      <circle cx=\"73\" cy=\"78\" r=\"3.5\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"85\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"125\" cy=\"81\" rx=\"8\" ry=\"9.5\" fill=\"#0F172A\"/>\n      <circle cx=\"123\" cy=\"78\" r=\"3.5\" fill=\"#FFFFFF\"/><circle cx=\"128\" cy=\"85\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 82 Q 74 72 82 82\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 118 82 Q 126 72 134 82\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"58\" cy=\"98\" rx=\"10\" ry=\"7\" fill=\"url(#panda-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"98\" rx=\"10\" ry=\"7\" fill=\"url(#panda-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"100\" cy=\"94\" rx=\"7\" ry=\"5\" fill=\"#0F172A\"/>\n    <path d=\"M 94 100 Q 100 105 100 100 Q 100 105 106 100\" stroke=\"#334155\" stroke-width=\"2.4\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 92 100 Q 100 112 108 100 Z\" fill=\"#991B1B\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Panda",
    "trait": "Calm and adorable",
    "traitVi": "Bình yên & Đáng yêu",
    "bgColor": "#DCFCE7",
    "accentColor": "#15803D",
    "portraitImg": "assets/pet_cards/panda_portrait.png",
    "cardImg": "assets/pet_cards/panda_card.png",
    "idleSprite": "assets/pet_cards/panda_idle.png",
    "actionSprite": "assets/pet_cards/panda_action.png",
    "sleepSprite": "assets/pet_cards/panda_sleep.png"
  },
  "fox": {
    "id": "fox",
    "name": "Kiki",
    "defaultName": "Kiki",
    "title": "Hồ Ly Nhỏ Thông Thái Xinh Đẹp",
    "species": "Cáo Lửa Kitsune",
    "category": "other",
    "soundType": "squeak",
    "favoriteFood": "Đậu hũ chiên Inari ngọt bùi",
    "foodIcon": "🍙",
    "personality": "Lanh lợi, thông minh tuyệt đỉnh, sở hữu chiếc đuôi bồng bềnh như mây và đôi mắt thạch anh tím huyền bí!",
    "description": "Tai lớn viền lông tuyết, ấn ký chu sa trán, đuôi xù 2 màu cam-tuyết, 4 chân tất đen thanh nhã và mắt tím thạch anh.",
    "idleType": "fox-tail",
    "animationConfig": {
      "idleClass": "anim-fox-tail",
      "tailOrigin": "135px 135px",
      "headOrigin": "96px 85px"
    },
    "quotes": {
      "greetings": [
        "Đuôi bông của Kiki mềm hơn cả mây tuyết, em quấn quanh chân cô chào đón nè! 🦊✨",
        "Đôi mắt thạch anh tím của Kiki nhìn thấu hôm nay cô sẽ có một ngày tuyệt vời!",
        "Em vừa nghĩ ra một trò chơi tiếng Anh siêu thú vị cho lớp mình đó cô ơi!",
        "Hồ ly nhỏ thông thái chúc cô Nguyệt luôn tràn ngập cảm hứng giảng dạy!"
      ],
      "feed": [
        "Ngon tuyệt trần gian! Món đậu hũ Inari ngọt bùi đúng điệu Kitsune luôn! 🍙💖",
        "Kiki cảm ơn cô Nguyệt nhiều lắm! Ăn xong phép thuật tăng gấp bội luôn rồi nè! ✨"
      ],
      "pet": [
        "Hừm~ Tay cô ấm áp quá, Kiki khẽ nhắm mắt tận hưởng sự êm đềm này... 🥰🌸",
        "Được cô vuốt ve chiếc đuôi xù là niềm hạnh phúc lớn nhất của Kiki đó! 💕",
        "Hồ ly nhỏ nguyện mang lại may mắn và bình an cho cô suốt cả năm!"
      ],
      "hungry": [
        "Chiếc đuôi của em ủ rũ xuống rồi nè cô ơi... Kiki đói bụng rồi ạ! 🥺🍙",
        "Cô ơi, thưởng cho hồ ly nhỏ chút đậu hũ ngọt để em nạp lại năng lượng nha! 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-fox\">\n  <defs>\n    <radialGradient id=\"fox-orange\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FB923C\"/><stop offset=\"60%\" stop-color=\"#EA580C\"/><stop offset=\"100%\" stop-color=\"#9A3412\"/>\n    </radialGradient>\n    <radialGradient id=\"fox-white\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FEF2F2\"/>\n    </radialGradient>\n    <radialGradient id=\"fox-amethyst\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#C084FC\"/><stop offset=\"55%\" stop-color=\"#9333EA\"/><stop offset=\"100%\" stop-color=\"#581C87\"/>\n    </radialGradient>\n  </defs>\n  <!-- Huge Two-Tone Plume Tail -->\n  <g class=\"pet-tail fox-tail\" style=\"transform-origin: 135px 135px;\">\n    <path d=\"M 125 145 C 165 145 195 110 185 70 C 175 40 145 65 140 105 Z\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n    <path d=\"M 185 70 C 180 50 165 42 152 48 C 158 58 152 68 162 74 C 172 78 178 72 185 70 Z\" fill=\"url(#fox-white)\"/>\n  </g>\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs with Dark Stockings (4 LEGS TOTAL) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"18\" ry=\"16\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <ellipse cx=\"46\" cy=\"178\" rx=\"12\" ry=\"7\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n    \n    <ellipse cx=\"144\" cy=\"160\" rx=\"18\" ry=\"16\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <ellipse cx=\"150\" cy=\"178\" rx=\"12\" ry=\"7\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n\n    <ellipse cx=\"98\" cy=\"150\" rx=\"44\" ry=\"36\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    <path d=\"M 82 125 Q 98 118 114 125 Q 120 150 98 162 Q 76 150 82 125 Z\" fill=\"url(#fox-white)\"/>\n    \n    <!-- 2 Front Legs with Dark Stockings -->\n    <rect x=\"74\" y=\"140\" width=\"16\" height=\"40\" rx=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n    <rect x=\"106\" y=\"140\" width=\"16\" height=\"40\" rx=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  </g>\n  <!-- AUTHENTIC KITSUNE HEAD & HUGE EARS -->\n  <g class=\"pet-head\">\n    <g class=\"pet-ears fox-ears\" style=\"transform-origin: 98px 65px;\">\n      <polygon points=\"50,68 28,16 74,42\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n      <polygon points=\"50,64 36,26 68,46\" fill=\"#FFFFFF\"/>\n      <path d=\"M 46 54 Q 38 46 44 38\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <polygon points=\"146,68 168,16 122,42\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n      <polygon points=\"146,64 160,26 128,46\" fill=\"#FFFFFF\"/>\n      <path d=\"M 150 54 Q 158 46 152 38\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    </g>\n    <!-- Sleek Face Contour -->\n    <polygon points=\"56,76 98,120 140,76 124,62 72,62\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n    <polygon points=\"62,80 98,118 80,105\" fill=\"url(#fox-white)\"/>\n    <polygon points=\"134,80 98,118 116,105\" fill=\"url(#fox-white)\"/>\n    <!-- Red Kitsune Forehead Mark -->\n    <ellipse cx=\"98\" cy=\"68\" rx=\"3.5\" ry=\"5.5\" fill=\"#DC2626\"/>\n    <circle cx=\"98\" cy=\"76\" r=\"2\" fill=\"#DC2626\"/>\n    <!-- Amethyst Glowing Anime Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"78\" cy=\"84\" rx=\"8.5\" ry=\"11\" fill=\"url(#fox-amethyst)\"/>\n      <circle cx=\"75\" cy=\"80\" r=\"3.5\" fill=\"#FFFFFF\"/><circle cx=\"81\" cy=\"89\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"118\" cy=\"84\" rx=\"8.5\" ry=\"11\" fill=\"url(#fox-amethyst)\"/>\n      <circle cx=\"115\" cy=\"80\" r=\"3.5\" fill=\"#FFFFFF\"/><circle cx=\"121\" cy=\"89\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 70 84 Q 78 72 86 84\" stroke=\"#7E22CE\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 110 84 Q 118 72 126 84\" stroke=\"#7E22CE\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"64\" cy=\"94\" rx=\"8\" ry=\"5.5\" fill=\"#FDA4AF\" opacity=\"0.6\" class=\"pet-blush\"/>\n    <ellipse cx=\"132\" cy=\"94\" rx=\"8\" ry=\"5.5\" fill=\"#FDA4AF\" opacity=\"0.6\" class=\"pet-blush\"/>\n    <circle cx=\"98\" cy=\"113\" r=\"3.5\" fill=\"#0F172A\"/>\n    <path d=\"M 95 116 Q 98 118 101 116\" stroke=\"#7C2D12\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 94 116 Q 98 122 102 116 Z\" fill=\"#E11D48\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Fox",
    "trait": "Smart and playful",
    "traitVi": "Lanh lợi & Tinh nghịch",
    "bgColor": "#FFEDD5",
    "accentColor": "#EA580C",
    "portraitImg": "assets/pet_cards/fox_portrait.png",
    "cardImg": "assets/pet_cards/fox_card.png",
    "idleSprite": "assets/pet_cards/fox_idle.png",
    "actionSprite": "assets/pet_cards/fox_action.png",
    "sleepSprite": "assets/pet_cards/fox_sleep.png"
  },
  "penguin": {
    "id": "penguin",
    "name": "Pingu",
    "defaultName": "Pingu",
    "title": "Bé Chim Cánh Cụt Khăn Len Ấm Áp",
    "species": "Cánh Cụt Hoàng Đế Con",
    "category": "other",
    "soundType": "squeak",
    "favoriteFood": "Cá hồi tuyết tươi rói",
    "foodIcon": "🐟",
    "personality": "Lạch bà lạch bạch, thích trượt băng trên bụng và không bao giờ rời chiếc khăn quàng len ấm áp!",
    "description": "Âu phục tuxedo tròn xoe, 2 chân màng cam, 2 cánh cụt vỗ nhịp, khăn len đỏ trắng ấm áp và má ửng vàng rực rỡ.",
    "idleType": "penguin-waddle",
    "animationConfig": {
      "idleClass": "anim-penguin-waddle",
      "tailOrigin": "100px 180px",
      "headOrigin": "100px 80px"
    },
    "quotes": {
      "greetings": [
        "Lạch bạch lạch bạch! Pingu trượt băng từ Nam Cực tới chào cô Nguyệt nè! 🐧❄️",
        "Khăn len cô đan cho em ấm ơi là ấm, em không bao giờ cởi ra đâu!",
        "Ngoắc cánh sang trái, nghiêng đầu sang phải, tập thể dục buổi sáng thôi cô ơi!",
        "Pingu chúc cô giáo một ngày giảng dạy mát mẻ, vui vẻ và thuận buồm xuôi gió!"
      ],
      "feed": [
        "Chẹp chẹp! Con cá hồi tươi béo ngậy nhai đã miệng cực kỳ luôn! 🐟💖",
        "Pingu no tròn căng bụng rồi nè, chuẩn bị nằm trượt băng một vòng quanh lớp đây! ✨"
      ],
      "pet": [
        "Quác quác~ Hai chiếc cánh cụt nhỏ vỗ bành bạch vì được cô xoa đầu nè! 🥰🐧",
        "Bụng Pingu mềm mịn như tuyết xốp, cô xoa làm em nhột quá chừng! 💕",
        "Pingu cọ chiếc mỏ cam nhỏ xinh vào ngón tay cô để cảm ơn cô nè!"
      ],
      "hungry": [
        "Quác quác... bụng Pingu réo vang cả Nam Cực rồi cô ơi! Cho em xin con cá nha! 🥺🐟",
        "Trượt băng tốn calo quá, cô thưởng cho Pingu một bữa cá tươi với ạ! 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-penguin\">\n  <defs>\n    <radialGradient id=\"penguin-dark\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"70%\" stop-color=\"#0F172A\"/><stop offset=\"100%\" stop-color=\"#020617\"/>\n    </radialGradient>\n    <radialGradient id=\"penguin-belly\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"90%\" stop-color=\"#F1F5F9\"/><stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </radialGradient>\n    <radialGradient id=\"penguin-yellow\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FDE047\" stop-opacity=\"0.85\"/><stop offset=\"100%\" stop-color=\"#FDE047\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <g class=\"pet-body\">\n    <!-- 2 Flipper Wings -->\n    <g class=\"penguin-flipper-l\" style=\"transform-origin: 52px 115px;\">\n      <ellipse cx=\"44\" cy=\"130\" rx=\"12\" ry=\"26\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2\" transform=\"rotate(25 44 130)\"/>\n    </g>\n    <g class=\"penguin-flipper-r\" style=\"transform-origin: 148px 115px;\">\n      <ellipse cx=\"156\" cy=\"130\" rx=\"12\" ry=\"26\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2\" transform=\"rotate(-25 156 130)\"/>\n    </g>\n    <!-- 2 Bright Orange Webbed Feet -->\n    <ellipse cx=\"78\" cy=\"182\" rx=\"18\" ry=\"9\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"2\"/>\n    <ellipse cx=\"122\" cy=\"182\" rx=\"18\" ry=\"9\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"2\"/>\n    \n    <ellipse cx=\"100\" cy=\"135\" rx=\"54\" ry=\"48\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"100\" cy=\"142\" rx=\"36\" ry=\"36\" fill=\"url(#penguin-belly)\"/>\n  </g>\n  <g class=\"pet-head\">\n    <ellipse cx=\"100\" cy=\"80\" rx=\"42\" ry=\"36\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"64\" cy=\"82\" rx=\"14\" ry=\"12\" fill=\"url(#penguin-yellow)\"/>\n    <ellipse cx=\"136\" cy=\"82\" rx=\"14\" ry=\"12\" fill=\"url(#penguin-yellow)\"/>\n    <ellipse cx=\"78\" cy=\"78\" rx=\"14\" ry=\"16\" fill=\"#FFFFFF\"/>\n    <ellipse cx=\"122\" cy=\"78\" rx=\"14\" ry=\"16\" fill=\"#FFFFFF\"/>\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"80\" cy=\"78\" rx=\"8\" ry=\"10\" fill=\"#0F172A\"/>\n      <circle cx=\"78\" cy=\"75\" r=\"3.5\" fill=\"#FFFFFF\"/><circle cx=\"83\" cy=\"82\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"120\" cy=\"78\" rx=\"8\" ry=\"10\" fill=\"#0F172A\"/>\n      <circle cx=\"118\" cy=\"75\" r=\"3.5\" fill=\"#FFFFFF\"/><circle cx=\"123\" cy=\"82\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 72 78 Q 80 68 88 78\" stroke=\"#0F172A\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 112 78 Q 120 68 128 78\" stroke=\"#0F172A\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"60\" cy=\"88\" rx=\"9\" ry=\"6\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <ellipse cx=\"140\" cy=\"88\" rx=\"9\" ry=\"6\" fill=\"#FB7185\" opacity=\"0.65\" class=\"pet-blush\"/>\n    <g class=\"pet-mouth-default\">\n      <polygon points=\"94,86 106,86 100,98\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"1.8\"/>\n    </g>\n    <g class=\"pet-mouth-happy\">\n      <polygon points=\"92,84 108,84 100,93\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"1.8\"/>\n      <polygon points=\"94,93 106,93 100,102\" fill=\"#D97706\"/>\n      <ellipse cx=\"100\" cy=\"94\" rx=\"3.5\" ry=\"2\" fill=\"#DC2626\"/>\n    </g>\n    <!-- Red Striped Winter Scarf with Tassels -->\n    <path d=\"M 64 108 Q 100 120 136 108\" stroke=\"#DC2626\" stroke-width=\"12\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 64 108 Q 100 120 136 108\" stroke=\"#FFFFFF\" stroke-width=\"12\" stroke-dasharray=\"8,8\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(118, 114) rotate(15)\">\n      <rect x=\"0\" y=\"0\" width=\"14\" height=\"26\" rx=\"3\" fill=\"#DC2626\"/>\n      <line x1=\"0\" y1=\"8\" x2=\"14\" y2=\"8\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n      <line x1=\"0\" y1=\"18\" x2=\"14\" y2=\"18\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n      <line x1=\"2\" y1=\"26\" x2=\"2\" y2=\"30\" stroke=\"#FDE047\" stroke-width=\"2\"/>\n      <line x1=\"7\" y1=\"26\" x2=\"7\" y2=\"30\" stroke=\"#FDE047\" stroke-width=\"2\"/>\n      <line x1=\"12\" y1=\"26\" x2=\"12\" y2=\"30\" stroke=\"#FDE047\" stroke-width=\"2\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Penguin",
    "trait": "Cheerful and optimistic",
    "traitVi": "Vui vẻ & Lạc quan",
    "bgColor": "#E0F2FE",
    "accentColor": "#0369A1",
    "portraitImg": "assets/pet_cards/penguin_portrait.png",
    "cardImg": "assets/pet_cards/penguin_card.png",
    "idleSprite": "assets/pet_cards/penguin_idle.png",
    "actionSprite": "assets/pet_cards/penguin_action.png",
    "sleepSprite": "assets/pet_cards/penguin_sleep.png"
  },
  "capybara": {
    "id": "capybara",
    "name": "Cà Phê",
    "defaultName": "Cà Phê",
    "title": "Bộ Trưởng Ngoại Giao Capybara Siêu Chill",
    "species": "Chuột Lang Nước (Capybara)",
    "category": "other",
    "soundType": "chime",
    "favoriteFood": "Quả quýt Yuzu mọng nước vàng ươm",
    "foodIcon": "🍊",
    "personality": "Thánh điềm tĩnh, bạn thân của muôn loài, đầu đội quả quýt vàng Yuzu và luôn trong trạng thái thiền định cực chill!",
    "description": "Mõm vuông trầm mặc chuẩn capybara, quả quýt Yuzu vàng cân bằng trên đầu, 4 chân vững chãi và đôi mắt thiền định.",
    "idleType": "capy-zen",
    "animationConfig": {
      "idleClass": "anim-capy-zen",
      "tailOrigin": "100px 180px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Chill đi cô ơi... Chuyện gì khó rồi cũng sẽ qua hết thôi mà~ 🍊🧘‍♂️",
        "Quả quýt Yuzu trên đầu em giữ thăng bằng giỏi chưa kìa, không rơi một ly!",
        "Tâm bất biến giữa dòng đời vạn biến, Capybara ngồi đây đồng hành cùng cô.",
        "Bộ trưởng ngoại giao Cà Phê chúc cô Nguyệt một ngày thật bình an và thư thái."
      ],
      "feed": [
        "Chầm chậm nhai... Quả quýt Yuzu mọng nước chua ngọt thanh tao tuyệt đỉnh! 🍊✨",
        "Nạp đủ vitamin C rồi, Cà Phê tiếp tục tĩnh tâm thiền định tiếp đây... Thơm quá!"
      ],
      "pet": [
        "Hít vào một hơi... Thở ra một hơi... Bàn tay cô đặt lên lưng thật là êm dịu... 😌🌸",
        "Cà Phê khép hờ mắt lại, truyền trọn vẹn sự bình yên và năng lượng tích cực sang cho cô nhé. 💕",
        "Mọi căng thẳng mệt mỏi trong ngày của cô cứ để em gánh bớt cho nà."
      ],
      "hungry": [
        "Quả quýt trên đầu em sắp bị chiếc bụng đói hút vào rồi cô ơi... 🥺🍊",
        "Cho em xin một quả Yuzu ngọt mát để nạp năng lượng bình yên nha cô Nguyệt... 🥺"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-capybara\">\n  <defs>\n    <radialGradient id=\"capy-fur\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#D97706\"/><stop offset=\"60%\" stop-color=\"#B45309\"/><stop offset=\"100%\" stop-color=\"#78350F\"/>\n    </radialGradient>\n    <radialGradient id=\"capy-snout\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#92400E\"/><stop offset=\"100%\" stop-color=\"#451A03\"/>\n    </radialGradient>\n    <radialGradient id=\"yuzu-grad\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FEF08A\"/><stop offset=\"60%\" stop-color=\"#FACC15\"/><stop offset=\"100%\" stop-color=\"#EAB308\"/>\n    </radialGradient>\n  </defs>\n  <g class=\"pet-body\">\n    <!-- 2 Chunky Hind Loaf Paws (4 LEGS TOTAL) -->\n    <ellipse cx=\"46\" cy=\"176\" rx=\"18\" ry=\"11\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <ellipse cx=\"154\" cy=\"176\" rx=\"18\" ry=\"11\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n\n    <!-- Huge Loaf Barrel Body -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"60\" ry=\"42\" fill=\"url(#capy-fur)\" stroke=\"#78350F\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"100\" cy=\"154\" rx=\"40\" ry=\"28\" fill=\"#B45309\" opacity=\"0.6\"/>\n    \n    <!-- 2 Front Loaf Paws Resting in Front -->\n    <ellipse cx=\"76\" cy=\"180\" rx=\"14\" ry=\"9\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <ellipse cx=\"124\" cy=\"180\" rx=\"14\" ry=\"9\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n  </g>\n  <!-- AUTHENTIC BLOCKY CAPYBARA HEAD (Mõm hộp vuông trầm mặc) -->\n  <g class=\"pet-head\">\n    <!-- Tiny Round Ears Far Back -->\n    <g class=\"pet-ears capy-ears\" style=\"transform-origin: 100px 75px;\">\n      <ellipse cx=\"54\" cy=\"62\" rx=\"9\" ry=\"8\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"54\" cy=\"62\" rx=\"5\" ry=\"5\" fill=\"#B45309\"/>\n      <ellipse cx=\"146\" cy=\"62\" rx=\"9\" ry=\"8\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"146\" cy=\"62\" rx=\"5\" ry=\"5\" fill=\"#B45309\"/>\n    </g>\n    <!-- Blocky Capybara Head Base -->\n    <path d=\"M 64 68 C 64 56 136 56 136 68 C 146 88 142 124 128 128 C 100 134 72 134 72 128 C 58 124 54 88 64 68 Z\" fill=\"url(#capy-fur)\" stroke=\"#78350F\" stroke-width=\"2.5\"/>\n    <!-- Distinctive Rectangular Box Snout -->\n    <path d=\"M 74 94 C 74 84 126 84 126 94 C 128 116 118 126 100 126 C 82 126 72 116 74 94 Z\" fill=\"url(#capy-snout)\"/>\n    <!-- Tranquil Horizontal Zen Slit Eyes -->\n    <g class=\"pet-eyes-open\">\n      <path d=\"M 66 84 Q 76 80 86 84\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 84 Q 124 80 134 84\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"76\" cy=\"84\" r=\"2.5\" fill=\"#451A03\"/><circle cx=\"124\" cy=\"84\" r=\"2.5\" fill=\"#451A03\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 85 Q 76 72 86 85\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 85 Q 124 72 134 85\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"58\" cy=\"98\" rx=\"8\" ry=\"5\" fill=\"#FB7185\" opacity=\"0.5\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"98\" rx=\"8\" ry=\"5\" fill=\"#FB7185\" opacity=\"0.5\" class=\"pet-blush\"/>\n    <!-- Top-mounted Nostrils & Mouth -->\n    <ellipse cx=\"93\" cy=\"104\" rx=\"2.8\" ry=\"4.5\" fill=\"#1C1917\"/>\n    <ellipse cx=\"107\" cy=\"104\" rx=\"2.8\" ry=\"4.5\" fill=\"#1C1917\"/>\n    <path d=\"M 96 114 Q 100 117 104 114\" stroke=\"#1C1917\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 94 114 Q 100 120 106 114 Z\" fill=\"#991B1B\"/>\n    </g>\n    <!-- Ripe Yuzu Fruit with Green Leaf on Head -->\n    <g class=\"capy-yuzu\" style=\"transform-origin: 100px 50px;\">\n      <ellipse cx=\"106\" cy=\"38\" rx=\"6\" ry=\"3.5\" fill=\"#15803D\" transform=\"rotate(-20 106 38)\"/>\n      <path d=\"M 100 42 Q 101 36 103 35\" stroke=\"#14532D\" stroke-width=\"2\" fill=\"none\"/>\n      <circle cx=\"100\" cy=\"50\" r=\"14\" fill=\"url(#yuzu-grad)\" stroke=\"#CA8A04\" stroke-width=\"1.8\"/>\n      <circle cx=\"96\" cy=\"46\" r=\"3.5\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n      <circle cx=\"100\" cy=\"42\" r=\"1.5\" fill=\"#A16207\"/>\n    </g>\n  </g>\n</svg>",
    "enName": "Capybara",
    "trait": "Relaxed and easygoing",
    "traitVi": "Thư thái & Vô tư",
    "bgColor": "#FEF08A",
    "accentColor": "#854D0E",
    "portraitImg": "assets/pet_cards/capybara_portrait.png",
    "cardImg": "assets/pet_cards/capybara_card.png",
    "idleSprite": "assets/pet_cards/capybara_idle.png",
    "actionSprite": "assets/pet_cards/capybara_action.png",
    "sleepSprite": "assets/pet_cards/capybara_sleep.png"
  }
};

  const PET_SPECIES_LIST = Object.keys(PET_REGISTRY);

  const PET_CATEGORIES = {
    all: { label: 'Tất Cả Thú Cưng', count: 13 },
    cat: { label: 'Mèo Cưng (5)', count: 5 },
    dog: { label: 'Cún Cưng (3)', count: 3 },
    other: { label: 'Muông Thú Khác (5)', count: 5 }
  };

  const PetDefinitions = {
    PET_REGISTRY,
    PET_SPECIES_LIST,
    PET_CATEGORIES,
    getPet: function(id) {
      return PET_REGISTRY[id] || PET_REGISTRY['nana'];
    },
    getAllPets: function() {
      return Object.values(PET_REGISTRY);
    },
    getPetsByCategory: function(category) {
      if (!category || category === 'all') return Object.values(PET_REGISTRY);
      return Object.values(PET_REGISTRY).filter(function(p) { return p.category === category; });
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = PetDefinitions;
  }
  if (root) {
    root.PetDefinitions = PetDefinitions;
    root.PET_REGISTRY = PET_REGISTRY;
  }
})(typeof window !== 'undefined' ? window : global);
