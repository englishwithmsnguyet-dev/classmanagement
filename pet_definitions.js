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
      "tailOrigin": "145px 145px",
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-nana\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    \n    <radialGradient id=\"nana-coat\" cx=\"42%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFBD59\"/>\n      <stop offset=\"40%\" stop-color=\"#FB923C\"/>\n      <stop offset=\"80%\" stop-color=\"#F97316\"/>\n      <stop offset=\"100%\" stop-color=\"#EA580C\"/>\n    </radialGradient>\n    <linearGradient id=\"nana-stripe\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#EA580C\"/>\n      <stop offset=\"100%\" stop-color=\"#C2410C\"/>\n    </linearGradient>\n    <linearGradient id=\"nana-iris\" x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#064E3B\"/>\n      <stop offset=\"40%\" stop-color=\"#047857\"/>\n      <stop offset=\"75%\" stop-color=\"#10B981\"/>\n      <stop offset=\"100%\" stop-color=\"#34D399\"/>\n    </linearGradient>\n    <linearGradient id=\"nana-bow\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F472B6\"/>\n      <stop offset=\"50%\" stop-color=\"#EC4899\"/>\n      <stop offset=\"100%\" stop-color=\"#DB2777\"/>\n    </linearGradient>\n    \n    <radialGradient id=\"nana-cream\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"85%\" stop-color=\"#FFFDF7\"/>\n      <stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n    </radialGradient>\n    <linearGradient id=\"nana-ear-pink\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#FBCFE8\"/>\n      <stop offset=\"100%\" stop-color=\"#F472B6\"/>\n    </linearGradient>\n    <radialGradient id=\"nana-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.85\"/>\n      <stop offset=\"70%\" stop-color=\"#FB7185\" stop-opacity=\"0.4\"/>\n      <stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- ==================== TAIL LAYER ==================== -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 145px 145px;\">\n    \n    <path d=\"M 142 148 C 176 142 190 114 180 82 C 174 68 156 72 164 86 C 170 100 162 124 138 135 Z\"\n          fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 180 82 C 174 68 156 72 164 86 C 170 83 176 80 180 82 Z\" fill=\"url(#nana-cream)\"/>\n    <path d=\"M 168 96 Q 176 98 174 104\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M 160 112 Q 168 114 164 120\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ==================== BODY & PAWS LAYER ==================== -->\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs (Thighs on the sides) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/>\n\n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#C2410C\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#C2410C\"/>\n\n    <!-- Main Torso: Chubby Pear-shaped Belly -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.4\"/>\n    <path d=\"M 78 120 Q 100 115 122 120 Q 132 150 100 168 Q 68 150 78 120 Z\" fill=\"url(#nana-cream)\"/>\n\n    <!-- 2 Front Legs & Soft Paws -->\n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#C2410C\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- ==================== HEAD & EXPRESSIONS LAYER ==================== -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!--\n      UNIFIED SEAMLESS HEAD AND EARS (KHÔNG CÓ ĐƯỜNG TÁCH TAI)\n      Continuous organic contour:\n      Cheek -> Outer ear -> Ear tip -> Inner ear -> Forehead crown -> Inner ear -> Ear tip -> Outer ear -> Cheek\n    -->\n    <path class=\"pet-head-base\" d=\"\n      M 100 126\n      C 80 126 62 124 50 112\n      C 38 100 38 82 46 68\n      C 48 64 48 58 46 48\n      C 42 34 36 24 34 16\n      C 37 15 44 19 54 28\n      C 64 36 72 42 78 44\n      C 86 47 114 47 122 44\n      C 128 42 136 36 146 28\n      C 156 19 163 15 166 16\n      C 164 24 158 34 154 48\n      C 152 58 152 64 154 68\n      C 162 82 162 100 150 112\n      C 138 124 120 126 100 126 Z\"\n      fill=\"url(#nana-coat)\" stroke=\"#C2410C\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n\n    <!-- Ears Sub-group for subtle independent twitch animations -->\n    <g class=\"pet-ears\">\n      <!-- Left Inner Ear Fluff & Tufts (Seamlessly inside the ear) -->\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n        <path d=\"M 44 48 C 42 36 38 25 38 22 C 44 24 54 32 64 40 C 58 46 48 50 44 48 Z\" fill=\"url(#nana-ear-pink)\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 44 42 Q 52 36 50 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 48 48 Q 56 42 54 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n\n      <!-- Right Inner Ear Fluff & Tufts -->\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n        <path d=\"M 156 48 C 158 36 162 25 162 22 C 156 24 146 32 136 40 C 142 46 152 50 156 48 Z\" fill=\"url(#nana-ear-pink)\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 156 42 Q 148 36 150 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 152 48 Q 144 42 146 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n    </g>\n\n    \n    <path d=\"M 90 52 L 95 64 L 100 55 L 105 64 L 110 52\"\n          stroke=\"url(#nana-stripe)\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n\n    <!-- Chubby Cream Muzzle Whisker Pads -->\n    <ellipse cx=\"88\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#nana-cream)\"/>\n    <ellipse cx=\"112\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#nana-cream)\"/>\n\n    <!-- Tiny Pink Heart Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n\n    <!-- Rosy Cheek Blush -->\n    <ellipse cx=\"58\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#nana-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#nana-blush)\" class=\"pet-blush\"/>\n\n    \n\n    <!-- Delicate Whiskers -->\n    <line x1=\"50\" y1=\"94\" x2=\"28\" y2=\"90\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"26\" y2=\"102\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"172\" y2=\"90\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"174\" y2=\"102\" stroke=\"#C2410C\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n\n    <!-- ==================== EYES EXPRESSION STATES ==================== -->\n    <g class=\"pet-eyes-group\">\n      <!-- 1. Open Eyes -->\n      <g class=\"pet-eyes-open\">\n        \n    <ellipse cx=\"74\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#064E3B\"/>\n    <ellipse cx=\"74\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#nana-iris)\"/>\n    <ellipse cx=\"74\" cy=\"80.5\" rx=\"4.5\" ry=\"8.5\" fill=\"#022C22\"/>\n    <circle cx=\"70\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/>\n    <circle cx=\"78\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n        \n    <ellipse cx=\"126\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#064E3B\"/>\n    <ellipse cx=\"126\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#nana-iris)\"/>\n    <ellipse cx=\"126\" cy=\"80.5\" rx=\"4.5\" ry=\"8.5\" fill=\"#022C22\"/>\n    <circle cx=\"122\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/>\n    <circle cx=\"130\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n      </g>\n\n      <!-- 2. Natural Blinking Eyelids -->\n      <g class=\"pet-eyes-blink\">\n        <path d=\"M 64 80 Q 74 86 84 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 86 136 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 3. Happy / Stroked Smiling Crescent Eyes -->\n      <g class=\"pet-eyes-happy\">\n        <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#047857\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#047857\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Eyes -->\n      <g class=\"pet-eyes-sleep\">\n        <path d=\"M 64 80 Q 74 88 84 80\" stroke=\"#7C2D12\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 88 136 80\" stroke=\"#7C2D12\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== MOUTH EXPRESSION STATES ==================== -->\n    <g class=\"pet-mouth-group\">\n      <!-- 1. Neutral Sweet :3 Smile -->\n      <g class=\"pet-mouth-neutral\">\n        <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\"\n              stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 2. Happy Smile with Rosy Tongue -->\n      <g class=\"pet-mouth-smile\">\n        <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#E11D48\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"100\" cy=\"104\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n\n      <!-- 3. Paw-Licking Grooming Mouth with Animated Tongue -->\n      <g class=\"pet-mouth-lick\">\n        <path d=\"M 94 98 Q 100 102 106 98\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path class=\"pet-tongue-lick\" d=\"M 97 99 C 97 106 105 108 108 102 C 109 99 103 97 97 99 Z\"\n              fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Mouth -->\n      <g class=\"pet-mouth-sleep\">\n        <path d=\"M 96 99 Q 100 101.5 104 99\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== ACCESSORY ==================== -->\n    \n    <g class=\"pet-collar-bow\" transform=\"translate(100, 126)\">\n      <polygon points=\"0,0 -16,-7 -14,5 0,0\" fill=\"url(#nana-bow)\" stroke=\"#9D174D\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/>\n      <polygon points=\"0,0 16,-7 14,5 0,0\" fill=\"url(#nana-bow)\" stroke=\"#9D174D\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"4.5\" fill=\"#FDE047\" stroke=\"#D97706\" stroke-width=\"1.4\"/>\n      <circle cx=\"0\" cy=\"1\" r=\"1.2\" fill=\"#78350F\"/>\n    </g>\n  </g>\n</svg>"  },
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-snowball\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    \n    <radialGradient id=\"snow-fur\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"85%\" stop-color=\"#F8FAFC\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </radialGradient>\n    <radialGradient id=\"snow-blue\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/><stop offset=\"50%\" stop-color=\"#0284C7\"/><stop offset=\"100%\" stop-color=\"#0369A1\"/>\n    </radialGradient>\n    <radialGradient id=\"snow-gold\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FDE047\"/><stop offset=\"50%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </radialGradient>\n    \n    <radialGradient id=\"snow-cream\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"100%\" stop-color=\"#F1F5F9\"/>\n    </radialGradient>\n    <linearGradient id=\"snowball-ear-pink\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#FBCFE8\"/>\n      <stop offset=\"100%\" stop-color=\"#F472B6\"/>\n    </linearGradient>\n    <radialGradient id=\"snowball-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.85\"/>\n      <stop offset=\"70%\" stop-color=\"#FB7185\" stop-opacity=\"0.4\"/>\n      <stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- ==================== TAIL LAYER ==================== -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 145px 145px;\">\n    \n    <path d=\"M 145 148 C 178 140 188 112 176 80 C 170 65 155 70 162 84 C 168 98 160 125 140 135 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n  </g>\n\n  <!-- ==================== BODY & PAWS LAYER ==================== -->\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs (Thighs on the sides) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#snow-cream)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#94A3B8\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#94A3B8\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#94A3B8\"/>\n\n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#snow-cream)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#94A3B8\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#94A3B8\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#94A3B8\"/>\n\n    <!-- Main Torso: Chubby Pear-shaped Belly -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.4\"/>\n    <ellipse cx=\"100\" cy=\"148\" rx=\"34\" ry=\"26\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n\n    <!-- 2 Front Legs & Soft Paws -->\n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#snow-cream)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#snow-cream)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- ==================== HEAD & EXPRESSIONS LAYER ==================== -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!--\n      UNIFIED SEAMLESS HEAD AND EARS (KHÔNG CÓ ĐƯỜNG TÁCH TAI)\n      Continuous organic contour:\n      Cheek -> Outer ear -> Ear tip -> Inner ear -> Forehead crown -> Inner ear -> Ear tip -> Outer ear -> Cheek\n    -->\n    <path class=\"pet-head-base\" d=\"\n      M 100 126\n      C 80 126 62 124 50 112\n      C 38 100 38 82 46 68\n      C 48 64 48 58 46 48\n      C 42 34 36 24 34 16\n      C 37 15 44 19 54 28\n      C 64 36 72 42 78 44\n      C 86 47 114 47 122 44\n      C 128 42 136 36 146 28\n      C 156 19 163 15 166 16\n      C 164 24 158 34 154 48\n      C 152 58 152 64 154 68\n      C 162 82 162 100 150 112\n      C 138 124 120 126 100 126 Z\"\n      fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n\n    <!-- Ears Sub-group for subtle independent twitch animations -->\n    <g class=\"pet-ears\">\n      <!-- Left Inner Ear Fluff & Tufts (Seamlessly inside the ear) -->\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n        <path d=\"M 44 48 C 42 36 38 25 38 22 C 44 24 54 32 64 40 C 58 46 48 50 44 48 Z\" fill=\"#FCE7F3\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 44 42 Q 52 36 50 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 48 48 Q 56 42 54 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n\n      <!-- Right Inner Ear Fluff & Tufts -->\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n        <path d=\"M 156 48 C 158 36 162 25 162 22 C 156 24 146 32 136 40 C 142 46 152 50 156 48 Z\" fill=\"#FCE7F3\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 156 42 Q 148 36 150 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 152 48 Q 144 42 146 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n    </g>\n\n    \n\n    <!-- Chubby Cream Muzzle Whisker Pads -->\n    <ellipse cx=\"88\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#snow-cream)\"/>\n    <ellipse cx=\"112\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#snow-cream)\"/>\n\n    <!-- Tiny Pink Heart Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n\n    <!-- Rosy Cheek Blush -->\n    <ellipse cx=\"58\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#snowball-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#snowball-blush)\" class=\"pet-blush\"/>\n\n    \n\n    <!-- Delicate Whiskers -->\n    <line x1=\"50\" y1=\"94\" x2=\"28\" y2=\"90\" stroke=\"#94A3B8\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"26\" y2=\"102\" stroke=\"#94A3B8\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"172\" y2=\"90\" stroke=\"#94A3B8\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"174\" y2=\"102\" stroke=\"#94A3B8\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n\n    <!-- ==================== EYES EXPRESSION STATES ==================== -->\n    <g class=\"pet-eyes-group\">\n      <!-- 1. Open Eyes -->\n      <g class=\"pet-eyes-open\">\n        \n    <ellipse cx=\"74\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#0C4A6E\"/>\n    <ellipse cx=\"74\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#snow-blue)\"/>\n    <ellipse cx=\"74\" cy=\"80.5\" rx=\"4.5\" ry=\"8.5\" fill=\"#082F49\"/>\n    <circle cx=\"70\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n        \n    <ellipse cx=\"126\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#78350F\"/>\n    <ellipse cx=\"126\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#snow-gold)\"/>\n    <ellipse cx=\"126\" cy=\"80.5\" rx=\"4.5\" ry=\"8.5\" fill=\"#451A03\"/>\n    <circle cx=\"122\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n      </g>\n\n      <!-- 2. Natural Blinking Eyelids -->\n      <g class=\"pet-eyes-blink\">\n        <path d=\"M 64 80 Q 74 86 84 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 86 136 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 3. Happy / Stroked Smiling Crescent Eyes -->\n      <g class=\"pet-eyes-happy\">\n        <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#0284C7\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#0284C7\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Eyes -->\n      <g class=\"pet-eyes-sleep\">\n        <path d=\"M 64 80 Q 74 88 84 80\" stroke=\"#64748B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 88 136 80\" stroke=\"#64748B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== MOUTH EXPRESSION STATES ==================== -->\n    <g class=\"pet-mouth-group\">\n      <!-- 1. Neutral Sweet :3 Smile -->\n      <g class=\"pet-mouth-neutral\">\n        <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\"\n              stroke=\"#94A3B8\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 2. Happy Smile with Rosy Tongue -->\n      <g class=\"pet-mouth-smile\">\n        <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#E11D48\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"100\" cy=\"104\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n\n      <!-- 3. Paw-Licking Grooming Mouth with Animated Tongue -->\n      <g class=\"pet-mouth-lick\">\n        <path d=\"M 94 98 Q 100 102 106 98\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path class=\"pet-tongue-lick\" d=\"M 97 99 C 97 106 105 108 108 102 C 109 99 103 97 97 99 Z\"\n              fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Mouth -->\n      <g class=\"pet-mouth-sleep\">\n        <path d=\"M 96 99 Q 100 101.5 104 99\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== ACCESSORY ==================== -->\n    \n    <path d=\"M 74 122 Q 100 130 126 122\" stroke=\"#DC2626\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <circle cx=\"100\" cy=\"127\" r=\"5.5\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1.4\"/>\n    <circle cx=\"100\" cy=\"128\" r=\"1.3\" fill=\"#78350F\"/>\n  </g>\n</svg>"
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-kuro\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    \n    <radialGradient id=\"kuro-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"60%\" stop-color=\"#0F172A\"/>\n      <stop offset=\"100%\" stop-color=\"#020617\"/>\n    </radialGradient>\n    <radialGradient id=\"kuro-amber\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FDE047\"/><stop offset=\"50%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </radialGradient>\n    \n    <radialGradient id=\"kuro-muzzle\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#1E293B\"/>\n      <stop offset=\"100%\" stop-color=\"#0F172A\"/>\n    </radialGradient>\n    <linearGradient id=\"kuro-ear-pink\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#FBCFE8\"/>\n      <stop offset=\"100%\" stop-color=\"#F472B6\"/>\n    </linearGradient>\n    <radialGradient id=\"kuro-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.85\"/>\n      <stop offset=\"70%\" stop-color=\"#FB7185\" stop-opacity=\"0.4\"/>\n      <stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- ==================== TAIL LAYER ==================== -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 145px 145px;\">\n    \n    <path d=\"M 145 148 C 178 140 188 112 176 80 C 170 65 155 70 162 84 C 168 98 160 125 140 135 Z\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n  </g>\n\n  <!-- ==================== BODY & PAWS LAYER ==================== -->\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs (Thighs on the sides) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#020617\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#020617\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#020617\"/>\n\n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#020617\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#020617\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#020617\"/>\n\n    <!-- Main Torso: Chubby Pear-shaped Belly -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.4\"/>\n    \n\n    <!-- 2 Front Legs & Soft Paws -->\n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#020617\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#020617\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#020617\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#020617\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- ==================== HEAD & EXPRESSIONS LAYER ==================== -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!--\n      UNIFIED SEAMLESS HEAD AND EARS (KHÔNG CÓ ĐƯỜNG TÁCH TAI)\n      Continuous organic contour:\n      Cheek -> Outer ear -> Ear tip -> Inner ear -> Forehead crown -> Inner ear -> Ear tip -> Outer ear -> Cheek\n    -->\n    <path class=\"pet-head-base\" d=\"\n      M 100 126\n      C 80 126 62 124 50 112\n      C 38 100 38 82 46 68\n      C 48 64 48 58 46 48\n      C 42 34 36 24 34 16\n      C 37 15 44 19 54 28\n      C 64 36 72 42 78 44\n      C 86 47 114 47 122 44\n      C 128 42 136 36 146 28\n      C 156 19 163 15 166 16\n      C 164 24 158 34 154 48\n      C 152 58 152 64 154 68\n      C 162 82 162 100 150 112\n      C 138 124 120 126 100 126 Z\"\n      fill=\"url(#kuro-coat)\" stroke=\"#020617\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n\n    <!-- Ears Sub-group for subtle independent twitch animations -->\n    <g class=\"pet-ears\">\n      <!-- Left Inner Ear Fluff & Tufts (Seamlessly inside the ear) -->\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n        <path d=\"M 44 48 C 42 36 38 25 38 22 C 44 24 54 32 64 40 C 58 46 48 50 44 48 Z\" fill=\"#334155\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 44 42 Q 52 36 50 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 48 48 Q 56 42 54 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n\n      <!-- Right Inner Ear Fluff & Tufts -->\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n        <path d=\"M 156 48 C 158 36 162 25 162 22 C 156 24 146 32 136 40 C 142 46 152 50 156 48 Z\" fill=\"#334155\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 156 42 Q 148 36 150 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 152 48 Q 144 42 146 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n    </g>\n\n    \n\n    <!-- Chubby Cream Muzzle Whisker Pads -->\n    <ellipse cx=\"88\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#kuro-muzzle)\"/>\n    <ellipse cx=\"112\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#kuro-muzzle)\"/>\n\n    <!-- Tiny Pink Heart Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n\n    <!-- Rosy Cheek Blush -->\n    <ellipse cx=\"58\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#kuro-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#kuro-blush)\" class=\"pet-blush\"/>\n\n    \n\n    <!-- Delicate Whiskers -->\n    <line x1=\"50\" y1=\"94\" x2=\"28\" y2=\"90\" stroke=\"#020617\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"26\" y2=\"102\" stroke=\"#020617\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"172\" y2=\"90\" stroke=\"#020617\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"174\" y2=\"102\" stroke=\"#020617\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n\n    <!-- ==================== EYES EXPRESSION STATES ==================== -->\n    <g class=\"pet-eyes-group\">\n      <!-- 1. Open Eyes -->\n      <g class=\"pet-eyes-open\">\n        \n    <ellipse cx=\"74\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#78350F\"/>\n    <ellipse cx=\"74\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#kuro-amber)\"/>\n    <ellipse cx=\"74\" cy=\"80.5\" rx=\"4.5\" ry=\"8.5\" fill=\"#020617\"/>\n    <circle cx=\"70\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n        \n    <ellipse cx=\"126\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#78350F\"/>\n    <ellipse cx=\"126\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#kuro-amber)\"/>\n    <ellipse cx=\"126\" cy=\"80.5\" rx=\"4.5\" ry=\"8.5\" fill=\"#020617\"/>\n    <circle cx=\"122\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n      </g>\n\n      <!-- 2. Natural Blinking Eyelids -->\n      <g class=\"pet-eyes-blink\">\n        <path d=\"M 64 80 Q 74 86 84 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 86 136 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 3. Happy / Stroked Smiling Crescent Eyes -->\n      <g class=\"pet-eyes-happy\">\n        <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#F59E0B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#F59E0B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Eyes -->\n      <g class=\"pet-eyes-sleep\">\n        <path d=\"M 64 80 Q 74 88 84 80\" stroke=\"#475569\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 88 136 80\" stroke=\"#475569\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== MOUTH EXPRESSION STATES ==================== -->\n    <g class=\"pet-mouth-group\">\n      <!-- 1. Neutral Sweet :3 Smile -->\n      <g class=\"pet-mouth-neutral\">\n        <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\"\n              stroke=\"#020617\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 2. Happy Smile with Rosy Tongue -->\n      <g class=\"pet-mouth-smile\">\n        <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#E11D48\" stroke=\"#020617\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"100\" cy=\"104\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n\n      <!-- 3. Paw-Licking Grooming Mouth with Animated Tongue -->\n      <g class=\"pet-mouth-lick\">\n        <path d=\"M 94 98 Q 100 102 106 98\" stroke=\"#020617\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path class=\"pet-tongue-lick\" d=\"M 97 99 C 97 106 105 108 108 102 C 109 99 103 97 97 99 Z\"\n              fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Mouth -->\n      <g class=\"pet-mouth-sleep\">\n        <path d=\"M 96 99 Q 100 101.5 104 99\" stroke=\"#020617\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== ACCESSORY ==================== -->\n    \n    <path d=\"M 76 122 Q 100 130 124 122\" stroke=\"#DC2626\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 130)\">\n      <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1.2\"/>\n      <path d=\"M -2 -3 C 2 -3 2 3 -2 3 C 0 2 0 -2 -2 -3 Z\" fill=\"#78350F\"/>\n    </g>\n  </g>\n</svg>"
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-calico\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    \n    <radialGradient id=\"calico-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"85%\" stop-color=\"#FFFDF7\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n    </radialGradient>\n    \n    <radialGradient id=\"calico-muzzle\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFFBEB\"/>\n    </radialGradient>\n    <linearGradient id=\"calico-ear-pink\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#FBCFE8\"/>\n      <stop offset=\"100%\" stop-color=\"#F472B6\"/>\n    </linearGradient>\n    <radialGradient id=\"calico-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.85\"/>\n      <stop offset=\"70%\" stop-color=\"#FB7185\" stop-opacity=\"0.4\"/>\n      <stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- ==================== TAIL LAYER ==================== -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 145px 145px;\">\n    \n    <path d=\"M 145 148 C 178 140 188 112 176 80 C 170 65 155 70 162 84 C 168 98 160 125 140 135 Z\" fill=\"#EA580C\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    <path d=\"M 166 102 C 168 98 160 125 140 135 Z\" fill=\"#1E293B\"/>\n  </g>\n\n  <!-- ==================== BODY & PAWS LAYER ==================== -->\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs (Thighs on the sides) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#calico-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#calico-muzzle)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#9A3412\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#9A3412\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#9A3412\"/>\n\n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#calico-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#calico-muzzle)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#9A3412\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#9A3412\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#9A3412\"/>\n\n    <!-- Main Torso: Chubby Pear-shaped Belly -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#calico-coat)\" stroke=\"#9A3412\" stroke-width=\"2.4\"/>\n    \n\n    <!-- 2 Front Legs & Soft Paws -->\n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#calico-muzzle)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#calico-muzzle)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- ==================== HEAD & EXPRESSIONS LAYER ==================== -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!--\n      UNIFIED SEAMLESS HEAD AND EARS (KHÔNG CÓ ĐƯỜNG TÁCH TAI)\n      Continuous organic contour:\n      Cheek -> Outer ear -> Ear tip -> Inner ear -> Forehead crown -> Inner ear -> Ear tip -> Outer ear -> Cheek\n    -->\n    <path class=\"pet-head-base\" d=\"\n      M 100 126\n      C 80 126 62 124 50 112\n      C 38 100 38 82 46 68\n      C 48 64 48 58 46 48\n      C 42 34 36 24 34 16\n      C 37 15 44 19 54 28\n      C 64 36 72 42 78 44\n      C 86 47 114 47 122 44\n      C 128 42 136 36 146 28\n      C 156 19 163 15 166 16\n      C 164 24 158 34 154 48\n      C 152 58 152 64 154 68\n      C 162 82 162 100 150 112\n      C 138 124 120 126 100 126 Z\"\n      fill=\"url(#calico-coat)\" stroke=\"#9A3412\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n\n    <!-- Ears Sub-group for subtle independent twitch animations -->\n    <g class=\"pet-ears\">\n      <!-- Left Inner Ear Fluff & Tufts (Seamlessly inside the ear) -->\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n        <path d=\"M 44 48 C 42 36 38 25 38 22 C 44 24 54 32 64 40 C 58 46 48 50 44 48 Z\" fill=\"#FCE7F3\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 44 42 Q 52 36 50 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 48 48 Q 56 42 54 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n\n      <!-- Right Inner Ear Fluff & Tufts -->\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n        <path d=\"M 156 48 C 158 36 162 25 162 22 C 156 24 146 32 136 40 C 142 46 152 50 156 48 Z\" fill=\"#FCE7F3\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 156 42 Q 148 36 150 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 152 48 Q 144 42 146 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n    </g>\n\n    \n    <!-- Calico orange patch over right ear & eye -->\n    <path d=\"M 112 45 C 130 43 148 26 166 16 C 164 24 158 34 154 48 C 150 64 146 72 144 86 C 134 88 126 78 120 68 Z\" fill=\"#EA580C\" opacity=\"0.95\"/>\n    <!-- Calico black patch over left ear -->\n    <path d=\"M 34 16 C 37 15 44 19 54 28 C 64 36 72 42 78 44 C 70 54 62 60 52 56 Z\" fill=\"#1E293B\" opacity=\"0.95\"/>\n\n    <!-- Chubby Cream Muzzle Whisker Pads -->\n    <ellipse cx=\"88\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#calico-muzzle)\"/>\n    <ellipse cx=\"112\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#calico-muzzle)\"/>\n\n    <!-- Tiny Pink Heart Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n\n    <!-- Rosy Cheek Blush -->\n    <ellipse cx=\"58\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#calico-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#calico-blush)\" class=\"pet-blush\"/>\n\n    \n\n    <!-- Delicate Whiskers -->\n    <line x1=\"50\" y1=\"94\" x2=\"28\" y2=\"90\" stroke=\"#9A3412\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"26\" y2=\"102\" stroke=\"#9A3412\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"172\" y2=\"90\" stroke=\"#9A3412\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"174\" y2=\"102\" stroke=\"#9A3412\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n\n    <!-- ==================== EYES EXPRESSION STATES ==================== -->\n    <g class=\"pet-eyes-group\">\n      <!-- 1. Open Eyes -->\n      <g class=\"pet-eyes-open\">\n        \n    <ellipse cx=\"74\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#0C4A6E\"/>\n    <ellipse cx=\"74\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"#0284C7\"/>\n    <circle cx=\"70\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n        \n    <ellipse cx=\"126\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#78350F\"/>\n    <ellipse cx=\"126\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"#D97706\"/>\n    <circle cx=\"122\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n      </g>\n\n      <!-- 2. Natural Blinking Eyelids -->\n      <g class=\"pet-eyes-blink\">\n        <path d=\"M 64 80 Q 74 86 84 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 86 136 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 3. Happy / Stroked Smiling Crescent Eyes -->\n      <g class=\"pet-eyes-happy\">\n        <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#D97706\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#D97706\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Eyes -->\n      <g class=\"pet-eyes-sleep\">\n        <path d=\"M 64 80 Q 74 88 84 80\" stroke=\"#9A3412\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 88 136 80\" stroke=\"#9A3412\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== MOUTH EXPRESSION STATES ==================== -->\n    <g class=\"pet-mouth-group\">\n      <!-- 1. Neutral Sweet :3 Smile -->\n      <g class=\"pet-mouth-neutral\">\n        <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\"\n              stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 2. Happy Smile with Rosy Tongue -->\n      <g class=\"pet-mouth-smile\">\n        <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#E11D48\" stroke=\"#9A3412\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"100\" cy=\"104\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n\n      <!-- 3. Paw-Licking Grooming Mouth with Animated Tongue -->\n      <g class=\"pet-mouth-lick\">\n        <path d=\"M 94 98 Q 100 102 106 98\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path class=\"pet-tongue-lick\" d=\"M 97 99 C 97 106 105 108 108 102 C 109 99 103 97 97 99 Z\"\n              fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Mouth -->\n      <g class=\"pet-mouth-sleep\">\n        <path d=\"M 96 99 Q 100 101.5 104 99\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== ACCESSORY ==================== -->\n    \n    <path d=\"M 74 122 Q 100 130 126 122\" stroke=\"#DC2626\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 130)\">\n      <ellipse cx=\"0\" cy=\"0\" rx=\"5.5\" ry=\"7\" fill=\"#FBBF24\" stroke=\"#B45309\" stroke-width=\"1.3\"/>\n      <rect x=\"-2.5\" y=\"-3.5\" width=\"5\" height=\"7\" rx=\"1.5\" fill=\"#FEF08A\"/>\n    </g>\n  </g>\n</svg>"
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-gray_cat\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    \n    <radialGradient id=\"gray-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#94A3B8\"/><stop offset=\"60%\" stop-color=\"#64748B\"/><stop offset=\"100%\" stop-color=\"#475569\"/>\n    </radialGradient>\n    \n    <radialGradient id=\"gray-muzzle\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#F1F5F9\"/>\n    </radialGradient>\n    <linearGradient id=\"gray_cat-ear-pink\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#FBCFE8\"/>\n      <stop offset=\"100%\" stop-color=\"#F472B6\"/>\n    </linearGradient>\n    <radialGradient id=\"gray_cat-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.85\"/>\n      <stop offset=\"70%\" stop-color=\"#FB7185\" stop-opacity=\"0.4\"/>\n      <stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- ==================== TAIL LAYER ==================== -->\n  <g class=\"pet-tail cat-tail\" style=\"transform-origin: 145px 145px;\">\n    \n    <path d=\"M 145 148 C 178 140 188 112 176 80 C 170 65 155 70 162 84 C 168 98 160 125 140 135 Z\" fill=\"url(#gray-coat)\" stroke=\"#334155\" stroke-width=\"2.2\"/>\n  </g>\n\n  <!-- ==================== BODY & PAWS LAYER ==================== -->\n  <g class=\"pet-body\">\n    <!-- 2 Hind Legs (Thighs on the sides) -->\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#gray-coat)\" stroke=\"#334155\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#gray-muzzle)\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#334155\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#334155\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#334155\"/>\n\n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#gray-coat)\" stroke=\"#334155\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#gray-muzzle)\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#334155\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#334155\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#334155\"/>\n\n    <!-- Main Torso: Chubby Pear-shaped Belly -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#gray-coat)\" stroke=\"#334155\" stroke-width=\"2.4\"/>\n    \n\n    <!-- 2 Front Legs & Soft Paws -->\n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#gray-muzzle)\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#334155\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#334155\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#gray-muzzle)\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#334155\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#334155\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- ==================== HEAD & EXPRESSIONS LAYER ==================== -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!--\n      UNIFIED SEAMLESS HEAD AND EARS (KHÔNG CÓ ĐƯỜNG TÁCH TAI)\n      Continuous organic contour:\n      Cheek -> Outer ear -> Ear tip -> Inner ear -> Forehead crown -> Inner ear -> Ear tip -> Outer ear -> Cheek\n    -->\n    <path class=\"pet-head-base\" d=\"\n      M 100 126\n      C 80 126 62 124 50 112\n      C 38 100 38 82 46 68\n      C 48 64 48 58 46 48\n      C 42 34 36 24 34 16\n      C 37 15 44 19 54 28\n      C 64 36 72 42 78 44\n      C 86 47 114 47 122 44\n      C 128 42 136 36 146 28\n      C 156 19 163 15 166 16\n      C 164 24 158 34 154 48\n      C 152 58 152 64 154 68\n      C 162 82 162 100 150 112\n      C 138 124 120 126 100 126 Z\"\n      fill=\"url(#gray-coat)\" stroke=\"#334155\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n\n    <!-- Ears Sub-group for subtle independent twitch animations -->\n    <g class=\"pet-ears\">\n      <!-- Left Inner Ear Fluff & Tufts (Seamlessly inside the ear) -->\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 65px;\">\n        <path d=\"M 44 48 C 42 36 38 25 38 22 C 44 24 54 32 64 40 C 58 46 48 50 44 48 Z\" fill=\"#FCE7F3\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 44 42 Q 52 36 50 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 48 48 Q 56 42 54 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n\n      <!-- Right Inner Ear Fluff & Tufts -->\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 65px;\">\n        <path d=\"M 156 48 C 158 36 162 25 162 22 C 156 24 146 32 136 40 C 142 46 152 50 156 48 Z\" fill=\"#FCE7F3\"/>\n        <!-- Soft White Fur Tufts Inside Ear -->\n        <path d=\"M 156 42 Q 148 36 150 28\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M 152 48 Q 144 42 146 34\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      </g>\n    </g>\n\n    \n    <path d=\"M 90 52 L 95 64 L 100 55 L 105 64 L 110 52\" stroke=\"#334155\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n\n    <!-- Chubby Cream Muzzle Whisker Pads -->\n    <ellipse cx=\"88\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#gray-muzzle)\"/>\n    <ellipse cx=\"112\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#gray-muzzle)\"/>\n\n    <!-- Tiny Pink Heart Nose -->\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#F43F5E\"/>\n\n    <!-- Rosy Cheek Blush -->\n    <ellipse cx=\"58\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#gray_cat-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#gray_cat-blush)\" class=\"pet-blush\"/>\n\n    \n\n    <!-- Delicate Whiskers -->\n    <line x1=\"50\" y1=\"94\" x2=\"28\" y2=\"90\" stroke=\"#334155\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"26\" y2=\"102\" stroke=\"#334155\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"172\" y2=\"90\" stroke=\"#334155\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"174\" y2=\"102\" stroke=\"#334155\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n\n    <!-- ==================== EYES EXPRESSION STATES ==================== -->\n    <g class=\"pet-eyes-group\">\n      <!-- 1. Open Eyes -->\n      <g class=\"pet-eyes-open\">\n        \n    <ellipse cx=\"74\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#78350F\"/>\n    <ellipse cx=\"74\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"#D97706\"/>\n    <circle cx=\"70\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n        \n    <ellipse cx=\"126\" cy=\"80\" rx=\"12.5\" ry=\"14\" fill=\"#78350F\"/>\n    <ellipse cx=\"126\" cy=\"81.5\" rx=\"10.5\" ry=\"12\" fill=\"#D97706\"/>\n    <circle cx=\"122\" cy=\"76\" r=\"4.2\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"86\" r=\"2\" fill=\"#FFFFFF\"/>\n      </g>\n\n      <!-- 2. Natural Blinking Eyelids -->\n      <g class=\"pet-eyes-blink\">\n        <path d=\"M 64 80 Q 74 86 84 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 86 136 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 3. Happy / Stroked Smiling Crescent Eyes -->\n      <g class=\"pet-eyes-happy\">\n        <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#D97706\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#D97706\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Eyes -->\n      <g class=\"pet-eyes-sleep\">\n        <path d=\"M 64 80 Q 74 88 84 80\" stroke=\"#334155\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 88 136 80\" stroke=\"#334155\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== MOUTH EXPRESSION STATES ==================== -->\n    <g class=\"pet-mouth-group\">\n      <!-- 1. Neutral Sweet :3 Smile -->\n      <g class=\"pet-mouth-neutral\">\n        <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\"\n              stroke=\"#334155\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n\n      <!-- 2. Happy Smile with Rosy Tongue -->\n      <g class=\"pet-mouth-smile\">\n        <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#E11D48\" stroke=\"#334155\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"100\" cy=\"104\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n\n      <!-- 3. Paw-Licking Grooming Mouth with Animated Tongue -->\n      <g class=\"pet-mouth-lick\">\n        <path d=\"M 94 98 Q 100 102 106 98\" stroke=\"#334155\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path class=\"pet-tongue-lick\" d=\"M 97 99 C 97 106 105 108 108 102 C 109 99 103 97 97 99 Z\"\n              fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\"/>\n      </g>\n\n      <!-- 4. Peaceful Sleeping Mouth -->\n      <g class=\"pet-mouth-sleep\">\n        <path d=\"M 96 99 Q 100 101.5 104 99\" stroke=\"#334155\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- ==================== ACCESSORY ==================== -->\n    \n    <g transform=\"translate(100, 126)\">\n      <polygon points=\"0,0 -16,-7 -14,5 0,0\" fill=\"#F472B6\" stroke=\"#DB2777\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/>\n      <polygon points=\"0,0 16,-7 14,5 0,0\" fill=\"#F472B6\" stroke=\"#DB2777\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"4.5\" fill=\"#FDE047\" stroke=\"#D97706\" stroke-width=\"1.2\"/>\n    </g>\n  </g>\n</svg>"
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-corgi\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <radialGradient id=\"corgi-body\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FBBF24\"/><stop offset=\"55%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#D97706\"/>\n    </radialGradient>\n    <radialGradient id=\"corgi-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.8\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- Cute Heart Butt Tail -->\n  <g class=\"pet-tail corgi-tail\" style=\"transform-origin: 145px 145px;\">\n    <ellipse cx=\"146\" cy=\"142\" rx=\"10\" ry=\"12\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2\" transform=\"rotate(-25 146 142)\"/>\n    <circle cx=\"144\" cy=\"136\" r=\"4.5\" fill=\"#FFFFFF\"/>\n  </g>\n\n  <!-- Body & Paws -->\n  <g class=\"pet-body\">\n    <ellipse cx=\"50\" cy=\"158\" rx=\"20\" ry=\"17\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#B45309\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#B45309\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#B45309\"/>\n\n    <ellipse cx=\"150\" cy=\"158\" rx=\"20\" ry=\"17\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#B45309\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#B45309\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#B45309\"/>\n\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.4\"/>\n    <path d=\"M 76 118 Q 100 114 124 118 Q 134 148 100 168 Q 66 148 76 118 Z\" fill=\"#FFFFFF\"/>\n\n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"142\" width=\"18\" height=\"38\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"178\" stroke=\"#B45309\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"178\" stroke=\"#B45309\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 145px;\">\n      <rect x=\"108\" y=\"142\" width=\"18\" height=\"38\" rx=\"9\" fill=\"#FFFFFF\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"178\" stroke=\"#B45309\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"178\" stroke=\"#B45309\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- Head & Expressions Layer -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- Large Rounded Upright Corgi Ears (NO DIVIDING LINE ACROSS SKULL) -->\n    <g class=\"pet-ears\">\n      <!-- Left Ear -->\n      <g class=\"pet-ear-l\" style=\"transform-origin: 50px 45px;\">\n        <path d=\"M 36 60 C 26 36 34 14 50 14 C 66 14 74 36 64 60\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.4\" stroke-linejoin=\"round\" transform=\"rotate(-15 50 40)\"/>\n        <path d=\"M 40 54 C 34 38 40 22 50 22 C 60 22 66 38 60 54\" fill=\"#FDE68A\" transform=\"rotate(-15 50 40)\"/>\n      </g>\n      <!-- Right Ear -->\n      <g class=\"pet-ear-r\" style=\"transform-origin: 150px 45px;\">\n        <path d=\"M 136 60 C 126 36 134 14 150 14 C 166 14 174 36 164 60\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.4\" stroke-linejoin=\"round\" transform=\"rotate(15 150 40)\"/>\n        <path d=\"M 140 54 C 134 38 140 22 150 22 C 160 22 166 38 160 54\" fill=\"#FDE68A\" transform=\"rotate(15 150 40)\"/>\n      </g>\n    </g>\n\n    <!-- Head Base Shape overlapping ear bases cleanly -->\n    <ellipse cx=\"100\" cy=\"85\" rx=\"46\" ry=\"38\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n\n    <!-- White Blaze on Forehead & Snout -->\n    <path d=\"M 100 52 C 94 66 74 72 74 94 C 74 114 126 114 126 94 C 126 72 106 66 100 52 Z\" fill=\"#FFFFFF\"/>\n    <ellipse cx=\"100\" cy=\"94\" rx=\"8\" ry=\"6\" fill=\"#18181B\"/>\n\n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"95\" rx=\"10\" ry=\"6.5\" fill=\"url(#corgi-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"10\" ry=\"6.5\" fill=\"url(#corgi-blush)\" class=\"pet-blush\"/>\n\n    <!-- Eyes -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n        <ellipse cx=\"76\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\"/>\n        <ellipse cx=\"76\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n        <ellipse cx=\"76\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#18181B\"/>\n        <circle cx=\"73\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/><circle cx=\"79.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n        <ellipse cx=\"124\" cy=\"78\" rx=\"10\" ry=\"12\" fill=\"#18181B\"/>\n        <ellipse cx=\"124\" cy=\"80\" rx=\"8\" ry=\"9.5\" fill=\"#78350F\"/>\n        <ellipse cx=\"124\" cy=\"79\" rx=\"4.5\" ry=\"6.5\" fill=\"#18181B\"/>\n        <circle cx=\"121\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/><circle cx=\"127.5\" cy=\"82.5\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      </g>\n      <g class=\"pet-eyes-blink\">\n        <path d=\"M 66 79 Q 76 83 86 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 114 79 Q 124 83 134 79\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-eyes-happy\">\n        <path d=\"M 66 80 Q 76 68 86 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 114 80 Q 124 68 134 80\" stroke=\"#18181B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-eyes-sleep\">\n        <path d=\"M 66 78 Q 76 85 86 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 114 78 Q 124 85 134 78\" stroke=\"#3F3F46\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- Mouth -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n        <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#18181B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-mouth-smile\">\n        <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#E11D48\" stroke=\"#18181B\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"100\" cy=\"104\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n      <g class=\"pet-mouth-lick\">\n        <path d=\"M 94 98 Q 100 102 106 98\" stroke=\"#18181B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path class=\"pet-tongue-lick\" d=\"M 97 99 C 97 106 105 108 108 102 C 109 99 103 97 97 99 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\"/>\n      </g>\n      <g class=\"pet-mouth-sleep\">\n        <path d=\"M 96 99 Q 100 101.5 104 99\" stroke=\"#18181B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- Red Bandana -->\n    <path d=\"M 72 120 Q 100 128 128 120\" stroke=\"#DC2626\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <polygon points=\"100,126 94,136 106,136\" fill=\"#DC2626\"/>\n  </g>\n</svg>"
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-shiba\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <radialGradient id=\"shiba-coat\" cx=\"42%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FBBF24\"/><stop offset=\"50%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#D97706\"/>\n    </radialGradient>\n    <linearGradient id=\"shiba-urajiro\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFFBEB\"/>\n    </linearGradient>\n    <radialGradient id=\"shiba-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.8\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- Curled Cinnamon Roll Shiba Tail -->\n  <g class=\"pet-tail shiba-tail\" style=\"transform-origin: 150px 140px;\">\n    <path d=\"M 142 145 C 168 138 184 116 172 92 C 162 72 142 82 146 102 C 150 122 174 126 182 108\" fill=\"none\" stroke=\"url(#shiba-coat)\" stroke-width=\"16\" stroke-linecap=\"round\"/>\n    <path d=\"M 172 92 C 162 72 142 82 146 102\" fill=\"none\" stroke=\"url(#shiba-urajiro)\" stroke-width=\"13\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Body & Paws -->\n  <g class=\"pet-body\">\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#shiba-urajiro)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#9A3412\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#9A3412\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#9A3412\"/>\n\n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"url(#shiba-urajiro)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#9A3412\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#9A3412\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#9A3412\"/>\n\n    <!-- Torso -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.4\"/>\n    <!-- Urajiro White Chest -->\n    <path d=\"M 76 118 Q 100 114 124 118 Q 134 148 100 168 Q 66 148 76 118 Z\" fill=\"url(#shiba-urajiro)\"/>\n\n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#shiba-urajiro)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"url(#shiba-urajiro)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#9A3412\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- Head & Expressions -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- UNIFIED SEAMLESS SHIBA HEAD + EARS (NO DETACHED EAR LINE) -->\n    <path class=\"pet-head-base\" d=\"\n      M 100 126\n      C 80 126 62 124 50 112\n      C 38 100 38 82 46 68\n      C 48 64 48 58 48 50\n      C 46 38 42 28 42 22\n      C 46 22 56 26 66 34\n      C 74 40 78 44 82 46\n      C 88 48 112 48 118 46\n      C 122 44 126 40 134 34\n      C 144 26 154 22 158 22\n      C 158 28 154 38 152 50\n      C 152 58 152 64 154 68\n      C 162 82 162 100 150 112\n      C 138 124 120 126 100 126 Z\"\n      fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n\n    <!-- Shiba Inner Ears with Soft Cream Fluff -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 56px 60px;\">\n        <path d=\"M 50 50 C 48 38 46 28 48 26 C 54 28 62 34 68 40 C 62 46 54 50 50 50 Z\" fill=\"#FED7AA\"/>\n        <path d=\"M 50 44 Q 58 38 56 30\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 144px 60px;\">\n        <path d=\"M 150 50 C 152 38 154 28 152 26 C 146 28 138 34 132 40 C 138 46 146 50 150 50 Z\" fill=\"#FED7AA\"/>\n        <path d=\"M 150 44 Q 142 38 144 30\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      </g>\n    </g>\n\n    <!-- White Eyebrow Dots (Maro Markings - Iconic Shiba Feature!) -->\n    <ellipse cx=\"76\" cy=\"64\" rx=\"4.5\" ry=\"3.5\" fill=\"#FFFFFF\"/>\n    <ellipse cx=\"124\" cy=\"64\" rx=\"4.5\" ry=\"3.5\" fill=\"#FFFFFF\"/>\n\n    <!-- Urajiro White Cheeks & Muzzle -->\n    <ellipse cx=\"88\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#shiba-urajiro)\"/>\n    <ellipse cx=\"112\" cy=\"98\" rx=\"14\" ry=\"10\" fill=\"url(#shiba-urajiro)\"/>\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#18181B\"/>\n\n    <!-- Rosy Cheek Blush -->\n    <ellipse cx=\"58\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#shiba-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"url(#shiba-blush)\" class=\"pet-blush\"/>\n\n    <!-- Eyes Group -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n        <ellipse cx=\"74\" cy=\"80\" rx=\"11.5\" ry=\"13\" fill=\"#18181B\"/>\n        <ellipse cx=\"74\" cy=\"81.5\" rx=\"9.5\" ry=\"11\" fill=\"#78350F\"/>\n        <ellipse cx=\"74\" cy=\"80.5\" rx=\"4\" ry=\"7.5\" fill=\"#18181B\"/>\n        <circle cx=\"70\" cy=\"76\" r=\"3.8\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"86\" r=\"1.8\" fill=\"#FFFFFF\"/>\n\n        <ellipse cx=\"126\" cy=\"80\" rx=\"11.5\" ry=\"13\" fill=\"#18181B\"/>\n        <ellipse cx=\"126\" cy=\"81.5\" rx=\"9.5\" ry=\"11\" fill=\"#78350F\"/>\n        <ellipse cx=\"126\" cy=\"80.5\" rx=\"4\" ry=\"7.5\" fill=\"#18181B\"/>\n        <circle cx=\"122\" cy=\"76\" r=\"3.8\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"86\" r=\"1.8\" fill=\"#FFFFFF\"/>\n      </g>\n      <g class=\"pet-eyes-blink\">\n        <path d=\"M 64 80 Q 74 86 84 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 86 136 80\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-eyes-happy\">\n        <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#9A3412\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#9A3412\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-eyes-sleep\">\n        <path d=\"M 64 80 Q 74 88 84 80\" stroke=\"#7C2D12\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 88 136 80\" stroke=\"#7C2D12\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- Mouth Group -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n        <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-mouth-smile\">\n        <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#E11D48\" stroke=\"#9A3412\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"100\" cy=\"104\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n      <g class=\"pet-mouth-lick\">\n        <path d=\"M 94 98 Q 100 102 106 98\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path class=\"pet-tongue-lick\" d=\"M 97 99 C 97 106 105 108 108 102 C 109 99 103 97 97 99 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\"/>\n      </g>\n      <g class=\"pet-mouth-sleep\">\n        <path d=\"M 96 99 Q 100 101.5 104 99\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- Japanese Green Karakusa Bandana (Furoshiki) -->\n    <path d=\"M 72 122 Q 100 130 128 122\" stroke=\"#16A34A\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 127)\">\n      <circle cx=\"-4\" cy=\"2\" r=\"3\" fill=\"#15803D\"/>\n      <circle cx=\"4\" cy=\"2\" r=\"3\" fill=\"#15803D\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"2.5\" fill=\"#FFFFFF\"/>\n    </g>\n  </g>\n</svg>"
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
      "headOrigin": "290px 240px"
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-fox\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <radialGradient id=\"fox-coat\" cx=\"42%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FB923C\"/><stop offset=\"60%\" stop-color=\"#EA580C\"/><stop offset=\"100%\" stop-color=\"#C2410C\"/>\n    </radialGradient>\n    <linearGradient id=\"fox-chest\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFFBEB\"/>\n    </linearGradient>\n    <radialGradient id=\"fox-amber\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FDE047\"/><stop offset=\"50%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </radialGradient>\n    <radialGradient id=\"fox-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.8\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- Big Fluffy Fox Tail with White Tip -->\n  <g class=\"pet-tail fox-tail\" style=\"transform-origin: 145px 150px;\">\n    <path d=\"M 140 152 C 185 146 205 108 190 68 C 178 45 152 52 162 74 C 172 96 160 128 135 138 Z\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 190 68 C 178 45 152 52 162 74 C 170 70 180 64 190 68 Z\" fill=\"#FFFFFF\"/>\n    <path d=\"M 174 86 Q 182 88 178 96\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Body & Paws -->\n  <g class=\"pet-body\">\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/>\n\n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/>\n\n    <!-- Torso -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.4\"/>\n    <!-- Fluffy White Chest Bib with Jagged Fur -->\n    <path d=\"M 76 118 Q 100 114 124 118 Q 134 148 100 168 Q 66 148 76 118 Z\" fill=\"url(#fox-chest)\"/>\n\n    <!-- 2 Front Black Legs/Paws (Fox Mittens) -->\n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- Head & Expressions -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 86px;\">\n    <!-- UNIFIED SEAMLESS FOX HEAD + EARS (NO DETACHED EAR LINE) -->\n    <path class=\"pet-head-base\" d=\"\n      M 100 126\n      C 80 126 62 124 48 110\n      C 36 96 36 78 44 64\n      C 46 60 46 54 42 42\n      C 38 28 32 18 30 12\n      C 34 11 44 16 56 26\n      C 66 34 74 38 80 40\n      C 86 43 114 43 120 40\n      C 126 38 134 34 144 26\n      C 156 16 166 11 170 12\n      C 168 18 162 28 158 42\n      C 154 54 154 60 156 64\n      C 164 78 164 96 152 110\n      C 138 124 120 126 100 126 Z\"\n      fill=\"url(#fox-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n\n    <!-- Fox Black Ear Tips & Inner Ear Tufts -->\n    <g class=\"pet-ears\">\n      <!-- Left Ear Tip (Black) & Inner White Fluff -->\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 55px;\">\n        <path d=\"M 30 12 C 34 11 40 14 48 22 C 44 28 38 32 34 26 Z\" fill=\"#1E293B\"/>\n        <path d=\"M 44 45 C 40 34 38 26 40 22 C 46 25 56 32 64 38 C 58 44 48 46 44 45 Z\" fill=\"#FFFFFF\"/>\n        <path d=\"M 44 40 Q 52 34 50 26\" stroke=\"#E2E8F0\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      </g>\n      <!-- Right Ear Tip (Black) & Inner White Fluff -->\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 55px;\">\n        <path d=\"M 170 12 C 166 11 160 14 152 22 C 156 28 162 32 166 26 Z\" fill=\"#1E293B\"/>\n        <path d=\"M 156 45 C 160 34 162 26 160 22 C 154 25 144 32 136 38 C 142 44 152 46 156 45 Z\" fill=\"#FFFFFF\"/>\n        <path d=\"M 156 40 Q 148 34 150 26\" stroke=\"#E2E8F0\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      </g>\n    </g>\n\n    <!-- Fluffy White Cheek Patches -->\n    <path d=\"M 50 82 C 42 90 42 108 56 118 C 72 126 82 118 84 104 C 84 94 66 84 50 82 Z\" fill=\"#FFFFFF\"/>\n    <path d=\"M 150 82 C 158 90 158 108 144 118 C 128 126 118 118 116 104 C 116 94 134 84 150 82 Z\" fill=\"#FFFFFF\"/>\n\n    <!-- Muzzle & Snout -->\n    <ellipse cx=\"100\" cy=\"98\" rx=\"16\" ry=\"12\" fill=\"#FFFFFF\"/>\n    <polygon points=\"96,92 104,92 100,96\" fill=\"#020617\"/>\n\n    <!-- Cheeks & Blush -->\n    <ellipse cx=\"58\" cy=\"94\" rx=\"10\" ry=\"6.5\" fill=\"url(#fox-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"94\" rx=\"10\" ry=\"6.5\" fill=\"url(#fox-blush)\" class=\"pet-blush\"/>\n\n    <!-- Eyes Group -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n        <ellipse cx=\"74\" cy=\"78\" rx=\"12\" ry=\"13.5\" fill=\"#78350F\"/>\n        <ellipse cx=\"74\" cy=\"79.5\" rx=\"10\" ry=\"11.5\" fill=\"url(#fox-amber)\"/>\n        <ellipse cx=\"74\" cy=\"78.5\" rx=\"4.2\" ry=\"8\" fill=\"#020617\"/>\n        <circle cx=\"70\" cy=\"74\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"84\" r=\"1.8\" fill=\"#FFFFFF\"/>\n\n        <ellipse cx=\"126\" cy=\"78\" rx=\"12\" ry=\"13.5\" fill=\"#78350F\"/>\n        <ellipse cx=\"126\" cy=\"79.5\" rx=\"10\" ry=\"11.5\" fill=\"url(#fox-amber)\"/>\n        <ellipse cx=\"126\" cy=\"78.5\" rx=\"4.2\" ry=\"8\" fill=\"#020617\"/>\n        <circle cx=\"122\" cy=\"74\" r=\"4\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"84\" r=\"1.8\" fill=\"#FFFFFF\"/>\n      </g>\n      <g class=\"pet-eyes-blink\">\n        <path d=\"M 64 78 Q 74 84 84 78\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 78 Q 126 84 136 78\" stroke=\"#18181B\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-eyes-happy\">\n        <path d=\"M 64 80 Q 74 66 84 80\" stroke=\"#B45309\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 66 136 80\" stroke=\"#B45309\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-eyes-sleep\">\n        <path d=\"M 64 78 Q 74 86 84 78\" stroke=\"#7C2D12\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 78 Q 126 86 136 78\" stroke=\"#7C2D12\" stroke-width=\"3.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- Mouth Group -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n        <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#9A3412\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-mouth-smile\">\n        <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#E11D48\" stroke=\"#9A3412\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"100\" cy=\"104\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n      <g class=\"pet-mouth-lick\">\n        <path d=\"M 94 98 Q 100 102 106 98\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path class=\"pet-tongue-lick\" d=\"M 97 99 C 97 106 105 108 108 102 C 109 99 103 97 97 99 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\"/>\n      </g>\n      <g class=\"pet-mouth-sleep\">\n        <path d=\"M 96 99 Q 100 101.5 104 99\" stroke=\"#9A3412\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- Whiskers -->\n    <line x1=\"50\" y1=\"94\" x2=\"30\" y2=\"90\" stroke=\"#9A3412\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"28\" y2=\"102\" stroke=\"#9A3412\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"170\" y2=\"90\" stroke=\"#9A3412\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"172\" y2=\"102\" stroke=\"#9A3412\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n\n    <!-- Sacred Kitsune Magatama Bell Collar -->\n    <path d=\"M 72 122 Q 100 130 128 122\" stroke=\"#DC2626\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 130)\">\n      <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1.3\"/>\n      <circle cx=\"0\" cy=\"1\" r=\"1.3\" fill=\"#78350F\"/>\n    </g>\n  </g>\n</svg>"
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-raccoon\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <radialGradient id=\"rac-coat\" cx=\"42%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#94A3B8\"/><stop offset=\"60%\" stop-color=\"#475569\"/><stop offset=\"100%\" stop-color=\"#334155\"/>\n    </radialGradient>\n    <radialGradient id=\"rac-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.7\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n\n  <!-- Striped Ringtail -->\n  <g class=\"pet-tail rac-tail\" style=\"transform-origin: 145px 145px;\">\n    <path d=\"M 140 148 C 175 142 192 115 182 85 C 176 70 158 74 164 88 C 170 102 162 125 138 135 Z\" fill=\"url(#rac-coat)\" stroke=\"#1E293B\" stroke-width=\"2.2\"/>\n    <path d=\"M 172 90 Q 180 94 176 100\" stroke=\"#0F172A\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <path d=\"M 164 106 Q 172 110 168 116\" stroke=\"#0F172A\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <path d=\"M 154 122 Q 162 126 158 132\" stroke=\"#0F172A\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Body & Paws -->\n  <g class=\"pet-body\">\n    <ellipse cx=\"52\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#rac-coat)\" stroke=\"#1E293B\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"44\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"38\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"44\" cy=\"180\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"50\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/>\n\n    <ellipse cx=\"148\" cy=\"160\" rx=\"20\" ry=\"17\" fill=\"url(#rac-coat)\" stroke=\"#1E293B\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"156\" cy=\"178\" rx=\"14\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"156\" cy=\"180\" r=\"1.5\" fill=\"#475569\"/><circle cx=\"162\" cy=\"178\" r=\"1.5\" fill=\"#475569\"/>\n\n    <ellipse cx=\"100\" cy=\"148\" rx=\"46\" ry=\"38\" fill=\"url(#rac-coat)\" stroke=\"#1E293B\" stroke-width=\"2.4\"/>\n    <path d=\"M 78 120 Q 100 115 122 120 Q 132 150 100 168 Q 68 150 78 120 Z\" fill=\"#F1F5F9\"/>\n\n    <g class=\"pet-paw-left\">\n      <rect x=\"74\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"86\" y1=\"172\" x2=\"86\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n    <g class=\"pet-paw-right pet-paw-groom\" style=\"transform-origin: 117px 142px;\">\n      <rect x=\"108\" y=\"138\" width=\"18\" height=\"42\" rx=\"9\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n      <line x1=\"114\" y1=\"172\" x2=\"114\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"120\" y1=\"172\" x2=\"120\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- Head & Expressions -->\n  <g class=\"pet-head\" style=\"transform-origin: 100px 85px;\">\n    <!-- UNIFIED SEAMLESS RACCOON HEAD + EARS (NO DETACHED EAR LINE) -->\n    <path class=\"pet-head-base\" d=\"\n      M 100 126\n      C 80 126 62 124 50 112\n      C 38 100 38 82 46 68\n      C 48 64 48 58 46 48\n      C 42 34 36 24 34 16\n      C 37 15 44 19 54 28\n      C 64 36 72 42 78 44\n      C 86 47 114 47 122 44\n      C 128 42 136 36 146 28\n      C 156 19 163 15 166 16\n      C 164 24 158 34 154 48\n      C 152 58 152 64 154 68\n      C 162 82 162 100 150 112\n      C 138 124 120 126 100 126 Z\"\n      fill=\"url(#rac-coat)\" stroke=\"#1E293B\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n\n    <!-- Ear White Edges & Dark Fluff -->\n    <g class=\"pet-ears\">\n      <g class=\"pet-ear-l\" style=\"transform-origin: 52px 55px;\">\n        <path d=\"M 34 16 C 38 18 44 26 40 32 C 36 28 34 22 34 16 Z\" fill=\"#FFFFFF\"/>\n        <path d=\"M 44 46 C 42 34 40 26 42 22 C 48 24 56 32 64 40 C 58 45 48 48 44 46 Z\" fill=\"#1E293B\"/>\n      </g>\n      <g class=\"pet-ear-r\" style=\"transform-origin: 148px 55px;\">\n        <path d=\"M 166 16 C 162 18 156 26 160 32 C 164 28 166 22 166 16 Z\" fill=\"#FFFFFF\"/>\n        <path d=\"M 156 46 C 158 34 160 26 158 22 C 152 24 144 32 136 40 C 142 45 152 48 156 46 Z\" fill=\"#1E293B\"/>\n      </g>\n    </g>\n\n    <!-- Iconic Bandit Black Eye Mask -->\n    <path d=\"M 52 72 C 60 68 86 70 94 82 C 90 92 68 96 52 90 C 44 86 46 76 52 72 Z\" fill=\"#0F172A\"/>\n    <path d=\"M 148 72 C 140 68 114 70 106 82 C 110 92 132 96 148 90 C 156 86 154 76 148 72 Z\" fill=\"#0F172A\"/>\n\n    <!-- White Snout & Nose -->\n    <ellipse cx=\"100\" cy=\"98\" rx=\"15\" ry=\"11\" fill=\"#FFFFFF\"/>\n    <polygon points=\"97,92 103,92 100,96\" fill=\"#0F172A\"/>\n\n    <!-- Blush -->\n    <ellipse cx=\"58\" cy=\"95\" rx=\"10\" ry=\"6.5\" fill=\"url(#rac-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"95\" rx=\"10\" ry=\"6.5\" fill=\"url(#rac-blush)\" class=\"pet-blush\"/>\n\n    <!-- Eyes -->\n    <g class=\"pet-eyes-group\">\n      <g class=\"pet-eyes-open\">\n        <ellipse cx=\"74\" cy=\"80\" rx=\"10\" ry=\"12\" fill=\"#78350F\"/>\n        <circle cx=\"70\" cy=\"76\" r=\"3.8\" fill=\"#FFFFFF\"/><circle cx=\"78\" cy=\"84\" r=\"1.6\" fill=\"#FFFFFF\"/>\n        <ellipse cx=\"126\" cy=\"80\" rx=\"10\" ry=\"12\" fill=\"#78350F\"/>\n        <circle cx=\"122\" cy=\"76\" r=\"3.8\" fill=\"#FFFFFF\"/><circle cx=\"130\" cy=\"84\" r=\"1.6\" fill=\"#FFFFFF\"/>\n      </g>\n      <g class=\"pet-eyes-blink\">\n        <path d=\"M 64 80 Q 74 86 84 80\" stroke=\"#FFFFFF\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 86 136 80\" stroke=\"#FFFFFF\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-eyes-happy\">\n        <path d=\"M 64 82 Q 74 68 84 82\" stroke=\"#F59E0B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 82 Q 126 68 136 82\" stroke=\"#F59E0B\" stroke-width=\"4.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-eyes-sleep\">\n        <path d=\"M 64 80 Q 74 88 84 80\" stroke=\"#94A3B8\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M 116 80 Q 126 88 136 80\" stroke=\"#94A3B8\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- Mouth -->\n    <g class=\"pet-mouth-group\">\n      <g class=\"pet-mouth-neutral\">\n        <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#1E293B\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n      <g class=\"pet-mouth-smile\">\n        <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#E11D48\" stroke=\"#1E293B\" stroke-width=\"1.8\"/>\n        <ellipse cx=\"100\" cy=\"104\" rx=\"4.5\" ry=\"3\" fill=\"#FDA4AF\"/>\n      </g>\n      <g class=\"pet-mouth-lick\">\n        <path d=\"M 94 98 Q 100 102 106 98\" stroke=\"#1E293B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path class=\"pet-tongue-lick\" d=\"M 97 99 C 97 106 105 108 108 102 C 109 99 103 97 97 99 Z\" fill=\"#FB7185\" stroke=\"#BE123C\" stroke-width=\"1.2\"/>\n      </g>\n      <g class=\"pet-mouth-sleep\">\n        <path d=\"M 96 99 Q 100 101.5 104 99\" stroke=\"#1E293B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\"/>\n      </g>\n    </g>\n\n    <!-- Whiskers -->\n    <line x1=\"50\" y1=\"94\" x2=\"30\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    <line x1=\"48\" y1=\"100\" x2=\"28\" y2=\"102\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    <line x1=\"150\" y1=\"94\" x2=\"170\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    <line x1=\"152\" y1=\"100\" x2=\"172\" y2=\"102\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n  </g>\n</svg>"
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
