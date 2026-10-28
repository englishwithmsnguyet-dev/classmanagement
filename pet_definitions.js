/**
 * VIRTUAL PET REGISTRY & CHARACTER DEFINITIONS
 * Handcrafted vector artwork, animations, sounds, and personality systems for Cô Nguyệt's Class Management.
 * 
 * 13 Distinct Characters:
 * - 5 Cats: Na Na, Bạch Tuyết, Kuro, Tam Thể, Bông Bông
 * - 3 Dogs: Bánh Mì (Corgi), Mochi (Shiba), Lucky (Golden Retriever)
 * - 5 Other: Mimi (Thỏ), Bảo Bảo (Gấu Trúc), Kiki (Hồ Ly Kitsune), Pingu (Cánh Cụt), Cà Phê (Capybara)
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
    "description": "Bé mèo cam sọc vằn tròn xoe, nơ hồng điệu đà, mắt ngọc bích long lanh và đuôi vẫy duyên dáng.",
    "idleType": "cat-swish",
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "58px 156px",
      "headOrigin": "100px 115px"
    },
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
    },
    "svg": "<svg viewBox=\"0 0 200 210\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"nana-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FED7AA\"/><stop offset=\"35%\" stop-color=\"#FDBA74\"/><stop offset=\"75%\" stop-color=\"#FB923C\"/><stop offset=\"100%\" stop-color=\"#EA580C\"/></linearGradient>\n    <linearGradient id=\"nana-stripe\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#EA580C\"/><stop offset=\"100%\" stop-color=\"#C2410C\"/></linearGradient>\n    <linearGradient id=\"nana-cream\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"80%\" stop-color=\"#FFFBEB\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/></linearGradient>\n    <linearGradient id=\"nana-iris\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#064E3B\"/><stop offset=\"35%\" stop-color=\"#047857\"/><stop offset=\"70%\" stop-color=\"#10B981\"/><stop offset=\"90%\" stop-color=\"#34D399\"/><stop offset=\"100%\" stop-color=\"#6EE7B7\"/></linearGradient>\n    <linearGradient id=\"nana-ear\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#F472B6\"/><stop offset=\"100%\" stop-color=\"#FCE7F3\"/></linearGradient>\n    <linearGradient id=\"nana-bow\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#F472B6\"/><stop offset=\"40%\" stop-color=\"#EC4899\"/><stop offset=\"85%\" stop-color=\"#DB2777\"/><stop offset=\"100%\" stop-color=\"#9D174D\"/></linearGradient>\n    <radialGradient id=\"nana-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.75\"/><stop offset=\"70%\" stop-color=\"#FB7185\" stop-opacity=\"0.3\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n  </defs>\n  <ellipse cx=\"100\" cy=\"192\" rx=\"66\" ry=\"12\" fill=\"#78350F\" opacity=\"0.18\"/>\n  <g class=\"pet-tail\" style=\"transform-origin: 58px 156px;\">\n    <path d=\"M 58 156 C 36 150 18 122 20 88 C 22 66 38 62 46 76 C 52 88 40 108 46 130 C 49 140 56 150 62 158 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n    <path d=\"M 20 88 C 22 66 38 62 46 76 C 41 82 30 84 20 88 Z\" fill=\"url(#nana-cream)\"/>\n    <path d=\"M 22 100 Q 32 98 38 106 M 28 118 Q 39 116 44 126\" stroke=\"url(#nana-stripe)\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.7\"/>\n  </g>\n  <g class=\"pet-hind\">\n    <ellipse cx=\"50\" cy=\"166\" rx=\"20\" ry=\"16\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <ellipse cx=\"44\" cy=\"180\" rx=\"12\" ry=\"7\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"150\" cy=\"166\" rx=\"20\" ry=\"16\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <ellipse cx=\"156\" cy=\"180\" rx=\"12\" ry=\"7\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-body\">\n    <path d=\"M 64 116 C 56 104 70 98 100 98 C 130 98 144 104 136 116 C 134 136 142 162 142 182 C 142 190 132 192 124 192 C 114 192 110 186 110 174 L 110 138 C 110 132 106 128 100 128 C 94 128 90 132 90 138 L 90 174 C 90 186 86 192 76 192 C 68 192 58 190 58 182 C 58 162 66 136 64 116 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n    <path d=\"M 80 106 C 70 122 76 148 100 148 C 124 148 130 122 120 106 Z\" fill=\"url(#nana-cream)\"/>\n    <path d=\"M 64 134 C 62 154 64 172 64 184 C 64 190 70 192 76 192 C 84 192 88 186 88 176 L 88 136\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n    <line x1=\"71\" y1=\"180\" x2=\"71\" y2=\"188\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"79\" y1=\"180\" x2=\"79\" y2=\"188\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M 136 134 C 138 154 136 172 136 184 C 136 190 130 192 124 192 C 116 192 112 186 112 176 L 112 136\" fill=\"url(#nana-cream)\" stroke=\"#C2410C\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n    <line x1=\"120\" y1=\"180\" x2=\"120\" y2=\"188\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"128\" y1=\"180\" x2=\"128\" y2=\"188\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M 60 138 Q 71 140 72 150 M 61 158 Q 72 160 74 168\" stroke=\"url(#nana-stripe)\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n    <path d=\"M 140 138 Q 129 140 128 150 M 139 158 Q 128 160 126 168\" stroke=\"url(#nana-stripe)\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 55px;\">\n      <path d=\"M 56 62 L 36 14 C 54 16 76 32 84 48 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n      <path d=\"M 54 54 L 42 24 C 53 27 68 38 74 45 Z\" fill=\"url(#nana-ear)\"/>\n      <path d=\"M 50 52 Q 62 44 58 32 M 58 54 Q 70 48 66 38\" stroke=\"#FFFFFF\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>\n      <path d=\"M 144 62 L 164 14 C 146 16 124 32 116 48 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n      <path d=\"M 146 54 L 158 24 C 147 27 132 38 126 45 Z\" fill=\"url(#nana-ear)\"/>\n      <path d=\"M 150 52 Q 138 44 142 32 M 142 54 Q 130 48 134 38\" stroke=\"#FFFFFF\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>\n    </g>\n    <path d=\"M 44 85 C 40 58 66 40 100 40 C 134 40 160 58 156 85 C 164 102 158 124 136 130 C 118 135 82 135 64 130 C 42 124 36 102 44 85 Z\" fill=\"url(#nana-fur)\" stroke=\"#C2410C\" stroke-width=\"2.5\"/>\n    <path d=\"M 43 86 L 33 93 L 44 98 L 35 105 L 49 110\" fill=\"none\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 157 86 L 167 93 L 156 98 L 165 105 L 151 110\" fill=\"none\" stroke=\"#C2410C\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 100 44 L 100 56 M 90 47 Q 93 54 95 59 M 110 47 Q 107 54 105 59\" stroke=\"url(#nana-stripe)\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.75\"/>\n    <path d=\"M 72 92 C 70 80 84 78 92 84 C 96 80 104 80 108 84 C 116 78 130 80 128 92 C 128 112 72 112 72 92 Z\" fill=\"url(#nana-cream)\"/>\n    <ellipse cx=\"60\" cy=\"90\" rx=\"14\" ry=\"11\" fill=\"url(#nana-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"140\" cy=\"90\" rx=\"14\" ry=\"11\" fill=\"url(#nana-blush)\" class=\"pet-blush\"/>\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"74\" cy=\"78\" rx=\"13\" ry=\"15\" fill=\"#1C1917\"/>\n      <ellipse cx=\"74\" cy=\"79.5\" rx=\"11\" ry=\"13\" fill=\"url(#nana-iris)\"/>\n      <ellipse cx=\"74\" cy=\"78\" rx=\"6.5\" ry=\"8.5\" fill=\"#022C22\"/>\n      <ellipse cx=\"74\" cy=\"84\" rx=\"8\" ry=\"4.5\" fill=\"#6EE7B7\" opacity=\"0.7\"/>\n      <circle cx=\"69.5\" cy=\"73.5\" r=\"4.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"78\" cy=\"83\" r=\"2.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"69\" cy=\"81\" r=\"1.3\" fill=\"#FFFFFF\"/>\n      <path d=\"M 60 75 C 64 64 84 64 88 74\" stroke=\"#1C1917\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n      <ellipse cx=\"126\" cy=\"78\" rx=\"13\" ry=\"15\" fill=\"#1C1917\"/>\n      <ellipse cx=\"126\" cy=\"79.5\" rx=\"11\" ry=\"13\" fill=\"url(#nana-iris)\"/>\n      <ellipse cx=\"126\" cy=\"78\" rx=\"6.5\" ry=\"8.5\" fill=\"#022C22\"/>\n      <ellipse cx=\"126\" cy=\"84\" rx=\"8\" ry=\"4.5\" fill=\"#6EE7B7\" opacity=\"0.7\"/>\n      <circle cx=\"121.5\" cy=\"73.5\" r=\"4.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"130\" cy=\"83\" r=\"2.2\" fill=\"#FFFFFF\"/>\n      <circle cx=\"121\" cy=\"81\" r=\"1.3\" fill=\"#FFFFFF\"/>\n      <path d=\"M 112 74 C 116 64 136 64 140 75\" stroke=\"#1C1917\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 62 80 Q 74 66 86 80\" stroke=\"#9A3412\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 126 66 138 80\" stroke=\"#9A3412\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <polygon points=\"97,86 103,86 100,91\" fill=\"#F43F5E\"/>\n    <path d=\"M 94 92 Q 100 96 100 92 Q 100 96 106 92\" stroke=\"#7C2D12\" stroke-width=\"2.4\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 94 93 Q 100 104 106 93 Z\" fill=\"#991B1B\" stroke=\"#7C2D12\" stroke-width=\"2\"/>\n      <path d=\"M 97 97 Q 100 104 103 97 Z\" fill=\"#FB7185\"/>\n    </g>\n    <path d=\"M 44 89 L 22 86 M 44 96 L 20 99 M 156 89 L 178 86 M 156 96 L 180 99\" stroke=\"#EA580C\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <g class=\"pet-bowtie\" transform=\"translate(100, 116)\">\n      <path d=\"M 0 0 C -12 -12 -28 -12 -26 4 C -25 18 -12 14 0 0 Z\" fill=\"url(#nana-bow)\" stroke=\"#9D174D\" stroke-width=\"1.8\"/>\n      <path d=\"M 0 0 C 12 -12 28 -12 26 4 C 25 18 12 14 0 0 Z\" fill=\"url(#nana-bow)\" stroke=\"#9D174D\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"0\" cy=\"0\" rx=\"6.5\" ry=\"5.5\" fill=\"#FDF2F8\" stroke=\"#9D174D\" stroke-width=\"2\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"3\" fill=\"#EC4899\"/>\n      <path d=\"M -3 4 L -11 18 M 3 4 L 11 18\" stroke=\"#BE185D\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Bộ lông trắng muốt như tuyết đầu mùa, đôi mắt dị sắc (một bên xanh ngọc lam, một bên vàng hổ phách) quý phái.",
    "idleType": "cat-swish",
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "58px 156px",
      "headOrigin": "100px 115px"
    },
    "quotes": {
      "greetings": [
        "Mew~ Tuyết Bông quý phái kính chào cô Nguyệt ạ! ❄️🐱",
        "Đôi mắt ngọc hai màu của em đang dõi theo từng nét phấn của cô đó! ✨"
      ],
      "feed": [
        "Liếm láp ngọt ngào~ Sữa ấm thanh mát tuyệt vời! Tuyết Bông cảm ơn cô Nguyệt! 🥛🥰"
      ],
      "pet": [
        "Mew mew~ Bộ lông trắng muốt như nhung được cô xoa nhẹ thích thật đấy! 💕"
      ],
      "hungry": [
        "Mew... Bát sữa của Tuyết Bông cạn rồi, cô cho em thêm một chén nhỏ nha! 🥺🥛"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 210\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"snow-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"85%\" stop-color=\"#F8FAFC\"/><stop offset=\"100%\" stop-color=\"#E2E8F0\"/></linearGradient>\n    <linearGradient id=\"snow-blue-eye\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0369A1\"/><stop offset=\"50%\" stop-color=\"#0284C7\"/><stop offset=\"100%\" stop-color=\"#38BDF8\"/></linearGradient>\n    <linearGradient id=\"snow-gold-eye\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#854D0E\"/><stop offset=\"50%\" stop-color=\"#D97706\"/><stop offset=\"100%\" stop-color=\"#FBBF24\"/></linearGradient>\n    <linearGradient id=\"snow-ear\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#FBCFE8\"/><stop offset=\"100%\" stop-color=\"#FFFFFF\"/></linearGradient>\n    <linearGradient id=\"snow-ribbon\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#C084FC\"/><stop offset=\"100%\" stop-color=\"#7E22CE\"/></linearGradient>\n    <radialGradient id=\"snow-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#F472B6\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#F472B6\" stop-opacity=\"0\"/></radialGradient>\n  </defs>\n  <ellipse cx=\"100\" cy=\"192\" rx=\"64\" ry=\"12\" fill=\"#475569\" opacity=\"0.12\"/>\n  <g class=\"pet-tail\" style=\"transform-origin: 58px 156px;\">\n    <path d=\"M 58 156 C 34 148 16 118 20 86 C 22 68 38 66 44 80 C 48 94 38 114 46 134 C 50 144 56 152 62 158 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <ellipse cx=\"21\" cy=\"85\" rx=\"7\" ry=\"9\" fill=\"#FFFFFF\"/>\n  </g>\n  <g class=\"pet-hind\">\n    <ellipse cx=\"50\" cy=\"166\" rx=\"19\" ry=\"15\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <ellipse cx=\"44\" cy=\"180\" rx=\"11\" ry=\"6.5\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"150\" cy=\"166\" rx=\"19\" ry=\"15\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <ellipse cx=\"156\" cy=\"180\" rx=\"11\" ry=\"6.5\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-body\">\n    <path d=\"M 66 116 C 58 104 72 98 100 98 C 128 98 142 104 134 116 C 132 136 140 162 140 182 C 140 190 130 192 122 192 C 114 192 110 186 110 174 L 110 138 C 110 132 106 128 100 128 C 94 128 90 132 90 138 L 90 174 C 90 186 86 192 78 192 C 70 192 60 190 60 182 C 60 162 68 136 66 116 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 64 136 C 62 154 64 172 64 184 C 64 190 70 192 76 192 C 84 192 88 186 88 176 L 88 138\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"71\" y1=\"180\" x2=\"71\" y2=\"188\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <line x1=\"79\" y1=\"180\" x2=\"79\" y2=\"188\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <path d=\"M 136 136 C 138 154 136 172 136 184 C 136 190 130 192 124 192 C 116 192 112 186 112 176 L 112 138\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"120\" y1=\"180\" x2=\"120\" y2=\"188\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <line x1=\"128\" y1=\"180\" x2=\"128\" y2=\"188\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 55px;\">\n      <path d=\"M 56 62 L 36 16 C 54 18 74 34 82 50 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <path d=\"M 54 54 L 42 26 C 52 28 66 40 72 46 Z\" fill=\"url(#snow-ear)\"/>\n      <path d=\"M 144 62 L 164 16 C 146 18 126 34 118 50 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n      <path d=\"M 146 54 L 158 26 C 148 28 134 40 128 46 Z\" fill=\"url(#snow-ear)\"/>\n    </g>\n    <path d=\"M 46 86 C 42 60 68 42 100 42 C 132 42 158 60 154 86 C 162 102 156 124 136 130 C 118 135 82 135 64 130 C 44 124 38 102 46 86 Z\" fill=\"url(#snow-fur)\" stroke=\"#94A3B8\" stroke-width=\"2.2\"/>\n    <!-- Heterochromia: Left Eye Sapphire Blue, Right Eye Topaz Gold -->\n    <g class=\"pet-eyes-open\">\n      <!-- Left Eye Blue -->\n      <ellipse cx=\"74\" cy=\"78\" rx=\"12.5\" ry=\"14\" fill=\"#0C4A6E\"/>\n      <ellipse cx=\"74\" cy=\"79.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#snow-blue-eye)\"/>\n      <ellipse cx=\"74\" cy=\"78\" rx=\"6\" ry=\"7.5\" fill=\"#082F49\"/>\n      <circle cx=\"70\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"78\" cy=\"83\" r=\"1.8\" fill=\"#FFFFFF\"/>\n      <!-- Right Eye Gold -->\n      <ellipse cx=\"126\" cy=\"78\" rx=\"12.5\" ry=\"14\" fill=\"#451A03\"/>\n      <ellipse cx=\"126\" cy=\"79.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#snow-gold-eye)\"/>\n      <ellipse cx=\"126\" cy=\"78\" rx=\"6\" ry=\"7.5\" fill=\"#291102\"/>\n      <circle cx=\"122\" cy=\"74\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"130\" cy=\"83\" r=\"1.8\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 64 80 Q 74 68 84 80\" stroke=\"#64748B\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 116 80 Q 126 68 136 80\" stroke=\"#64748B\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"60\" cy=\"90\" rx=\"13\" ry=\"10\" fill=\"url(#snow-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"140\" cy=\"90\" rx=\"13\" ry=\"10\" fill=\"url(#snow-blush)\" class=\"pet-blush\"/>\n    <polygon points=\"98,86 102,86 100,90\" fill=\"#FB7185\"/>\n    <path d=\"M 95 92 Q 100 95 100 92 Q 100 95 105 92\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 95 93 Q 100 102 105 93 Z\" fill=\"#F43F5E\"/>\n    </g>\n    <!-- Lavender Silk Ribbon with Pearl Bell -->\n    <g transform=\"translate(100, 116)\">\n      <path d=\"M 0 0 C -12 -10 -24 -10 -22 4 C -21 15 -10 12 0 0 Z\" fill=\"url(#snow-ribbon)\" stroke=\"#581C87\" stroke-width=\"1.5\"/>\n      <path d=\"M 0 0 C 12 -10 24 -10 22 4 C 21 15 10 12 0 0 Z\" fill=\"url(#snow-ribbon)\" stroke=\"#581C87\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#FAF5FF\" stroke=\"#581C87\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"2.2\" fill=\"#E9D5FF\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Bộ lông mun tuyền óng ả, mắt hổ phách phát sáng trong bóng đêm, đeo vòng cổ chuông trăng khuyết vàng lấp lánh.",
    "idleType": "cat-swish",
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "58px 156px",
      "headOrigin": "100px 115px"
    },
    "quotes": {
      "greetings": [
        "Mya~ Chú mèo đen may mắn Kuro kính chào cô Nguyệt! 🌙🐾",
        "Người ta bảo mèo đen mang lại may mắn lớn đó cô Nguyệt ơi! ✨"
      ],
      "feed": [
        "Ngoạm ngoạm~ Cá hồi thơm nức mũi! Kuro cảm ơn cô Nguyệt rất nhiều! 🐟😋"
      ],
      "pet": [
        "Purrr... Mèo mun dụi đầu vào tay cô nè, sướng rơn cả người luôn! 💕"
      ],
      "hungry": [
        "Mya... Kuro đói meo rồi cô ơi, cô cho Kuro xin miếng cá hồi nha! 🥺🐟"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 210\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"kuro-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"30%\" stop-color=\"#1E293B\"/><stop offset=\"70%\" stop-color=\"#0F172A\"/><stop offset=\"100%\" stop-color=\"#020617\"/></linearGradient>\n    <linearGradient id=\"kuro-eye\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#78350F\"/><stop offset=\"30%\" stop-color=\"#D97706\"/><stop offset=\"70%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#FEF08A\"/></linearGradient>\n    <linearGradient id=\"kuro-collar\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#DC2626\"/><stop offset=\"100%\" stop-color=\"#991B1B\"/></linearGradient>\n    <radialGradient id=\"kuro-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.45\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n  </defs>\n  <ellipse cx=\"100\" cy=\"192\" rx=\"66\" ry=\"12\" fill=\"#020617\" opacity=\"0.25\"/>\n  <g class=\"pet-tail\" style=\"transform-origin: 58px 156px;\">\n    <path d=\"M 58 156 C 34 148 14 118 18 86 C 20 68 36 66 42 80 C 46 94 36 114 44 134 C 48 144 54 152 62 158 Z\" fill=\"url(#kuro-fur)\" stroke=\"#0F172A\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  </g>\n  <g class=\"pet-hind\">\n    <ellipse cx=\"50\" cy=\"166\" rx=\"20\" ry=\"16\" fill=\"url(#kuro-fur)\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <ellipse cx=\"44\" cy=\"180\" rx=\"12\" ry=\"7\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"150\" cy=\"166\" rx=\"20\" ry=\"16\" fill=\"url(#kuro-fur)\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <ellipse cx=\"156\" cy=\"180\" rx=\"12\" ry=\"7\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-body\">\n    <path d=\"M 64 116 C 56 104 70 98 100 98 C 130 98 144 104 136 116 C 134 136 142 162 142 182 C 142 190 132 192 124 192 C 114 192 110 186 110 174 L 110 138 C 110 132 106 128 100 128 C 94 128 90 132 90 138 L 90 174 C 90 186 86 192 76 192 C 68 192 58 190 58 182 C 58 162 66 136 64 116 Z\" fill=\"url(#kuro-fur)\" stroke=\"#0F172A\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n    <path d=\"M 64 134 C 62 154 64 172 64 184 C 64 190 70 192 76 192 C 84 192 88 186 88 176 L 88 136\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <path d=\"M 136 134 C 138 154 136 172 136 184 C 136 190 130 192 124 192 C 116 192 112 186 112 176 L 112 136\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 55px;\">\n      <path d=\"M 56 62 L 34 12 C 54 16 76 32 84 48 Z\" fill=\"url(#kuro-fur)\" stroke=\"#0F172A\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n      <path d=\"M 54 54 L 42 22 C 52 26 66 38 72 44 Z\" fill=\"#F472B6\" opacity=\"0.4\"/>\n      <path d=\"M 144 62 L 166 12 C 146 16 124 32 116 48 Z\" fill=\"url(#kuro-fur)\" stroke=\"#0F172A\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n      <path d=\"M 146 54 L 158 22 C 148 26 134 38 128 44 Z\" fill=\"#F472B6\" opacity=\"0.4\"/>\n    </g>\n    <path d=\"M 44 85 C 40 58 66 40 100 40 C 134 40 160 58 156 85 C 164 102 158 124 136 130 C 118 135 82 135 64 130 C 42 124 36 102 44 85 Z\" fill=\"url(#kuro-fur)\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <!-- Glowing Amber Cat Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"74\" cy=\"78\" rx=\"13.5\" ry=\"15\" fill=\"#451A03\"/>\n      <ellipse cx=\"74\" cy=\"79.5\" rx=\"11.5\" ry=\"13\" fill=\"url(#kuro-eye)\"/>\n      <!-- Slit pupil -->\n      <ellipse cx=\"74\" cy=\"78\" rx=\"4\" ry=\"10\" fill=\"#020617\"/>\n      <circle cx=\"70\" cy=\"73\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"78\" cy=\"83\" r=\"1.8\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"126\" cy=\"78\" rx=\"13.5\" ry=\"15\" fill=\"#451A03\"/>\n      <ellipse cx=\"126\" cy=\"79.5\" rx=\"11.5\" ry=\"13\" fill=\"url(#kuro-eye)\"/>\n      <ellipse cx=\"126\" cy=\"78\" rx=\"4\" ry=\"10\" fill=\"#020617\"/>\n      <circle cx=\"122\" cy=\"73\" r=\"3.8\" fill=\"#FFFFFF\"/>\n      <circle cx=\"130\" cy=\"83\" r=\"1.8\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 62 80 Q 74 66 86 80\" stroke=\"#F59E0B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 126 66 138 80\" stroke=\"#F59E0B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"60\" cy=\"90\" rx=\"13\" ry=\"10\" fill=\"url(#kuro-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"140\" cy=\"90\" rx=\"13\" ry=\"10\" fill=\"url(#kuro-blush)\" class=\"pet-blush\"/>\n    <polygon points=\"97,86 103,86 100,91\" fill=\"#FB7185\"/>\n    <path d=\"M 94 92 Q 100 96 100 92 Q 100 96 106 92\" stroke=\"#94A3B8\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 94 93 Q 100 104 106 93 Z\" fill=\"#E11D48\"/>\n    </g>\n    <!-- White Whiskers on Black Fur -->\n    <path d=\"M 44 89 L 22 86 M 44 96 L 20 99 M 156 89 L 178 86 M 156 96 L 180 99\" stroke=\"#E2E8F0\" stroke-width=\"1.8\" stroke-linecap=\"round\" opacity=\"0.8\"/>\n    <!-- Red Collar with Gold Crescent Moon -->\n    <path d=\"M 72 116 Q 100 124 128 116\" stroke=\"url(#kuro-collar)\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 126)\">\n      <path d=\"M 0 -8 C 5 -8 8 -4 8 2 C 8 8 2 12 -4 10 C 2 8 4 3 2 -2 C 0 -6 -2 -7 -4 -8 C -2 -8 0 -8 0 -8 Z\" fill=\"#FBBF24\" stroke=\"#B45309\" stroke-width=\"1.2\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Bộ lông 3 màu trắng - cam - nâu đen may mắn, nơ tím pastel duyên dáng, đôi mắt xanh lục bích tinh tường.",
    "idleType": "cat-swish",
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "58px 156px",
      "headOrigin": "100px 115px"
    },
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
    },
    "svg": "<svg viewBox=\"0 0 200 210\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"calico-cream\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"100%\" stop-color=\"#FFF7ED\"/></linearGradient>\n    <linearGradient id=\"calico-orange\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FDBA74\"/><stop offset=\"100%\" stop-color=\"#EA580C\"/></linearGradient>\n    <linearGradient id=\"calico-dark\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#374151\"/><stop offset=\"100%\" stop-color=\"#111827\"/></linearGradient>\n    <linearGradient id=\"calico-iris\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#78350F\"/><stop offset=\"45%\" stop-color=\"#D97706\"/><stop offset=\"85%\" stop-color=\"#FBBF24\"/><stop offset=\"100%\" stop-color=\"#FEF08A\"/></linearGradient>\n    <linearGradient id=\"calico-bell\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FEF08A\"/><stop offset=\"60%\" stop-color=\"#F59E0B\"/><stop offset=\"100%\" stop-color=\"#B45309\"/></linearGradient>\n    <radialGradient id=\"calico-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.65\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n  </defs>\n  <ellipse cx=\"100\" cy=\"192\" rx=\"66\" ry=\"12\" fill=\"#374151\" opacity=\"0.16\"/>\n  <g class=\"pet-tail\" style=\"transform-origin: 58px 156px;\">\n    <path d=\"M 58 156 C 36 150 18 122 20 88 C 22 66 38 62 46 76 C 52 88 40 108 46 130 C 49 140 56 150 62 158 Z\" fill=\"url(#calico-cream)\" stroke=\"#475569\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n    <path d=\"M 20 88 C 22 66 38 62 46 76 C 41 84 32 88 20 88 Z\" fill=\"url(#calico-dark)\"/>\n    <path d=\"M 34 104 C 42 114 38 128 44 138 C 40 136 32 122 34 104 Z\" fill=\"url(#calico-orange)\"/>\n  </g>\n  <g class=\"pet-hind\">\n    <ellipse cx=\"50\" cy=\"166\" rx=\"20\" ry=\"16\" fill=\"url(#calico-dark)\" stroke=\"#1F2937\" stroke-width=\"2\"/>\n    <ellipse cx=\"44\" cy=\"180\" rx=\"12\" ry=\"7\" fill=\"url(#calico-cream)\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"150\" cy=\"166\" rx=\"20\" ry=\"16\" fill=\"url(#calico-orange)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <ellipse cx=\"156\" cy=\"180\" rx=\"12\" ry=\"7\" fill=\"url(#calico-cream)\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-body\">\n    <path d=\"M 64 116 C 56 104 70 98 100 98 C 130 98 144 104 136 116 C 134 136 142 162 142 182 C 142 190 132 192 124 192 C 114 192 110 186 110 174 L 110 138 C 110 132 106 128 100 128 C 94 128 90 132 90 138 L 90 174 C 90 186 86 192 76 192 C 68 192 58 190 58 182 C 58 162 66 136 64 116 Z\" fill=\"url(#calico-cream)\" stroke=\"#64748B\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n    <path d=\"M 58 126 C 56 146 64 154 70 156 C 72 144 68 128 58 126 Z\" fill=\"url(#calico-orange)\"/>\n    <path d=\"M 142 126 C 144 146 136 154 130 156 C 128 144 132 128 142 126 Z\" fill=\"url(#calico-dark)\"/>\n    <path d=\"M 64 134 C 62 154 64 172 64 184 C 64 190 70 192 76 192 C 84 192 88 186 88 176 L 88 136\" fill=\"url(#calico-cream)\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <path d=\"M 136 134 C 138 154 136 172 136 184 C 136 190 130 192 124 192 C 116 192 112 186 112 176 L 112 136\" fill=\"url(#calico-cream)\" stroke=\"#64748B\" stroke-width=\"2\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 55px;\">\n      <path d=\"M 56 62 L 36 14 C 54 16 76 32 84 48 Z\" fill=\"url(#calico-dark)\" stroke=\"#111827\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n      <path d=\"M 54 54 L 42 24 C 53 27 68 38 74 45 Z\" fill=\"#FBCFE8\"/>\n      <path d=\"M 144 62 L 164 14 C 146 16 124 32 116 48 Z\" fill=\"url(#calico-orange)\" stroke=\"#C2410C\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n      <path d=\"M 146 54 L 158 24 C 147 27 132 38 126 45 Z\" fill=\"#FBCFE8\"/>\n    </g>\n    <path d=\"M 44 85 C 40 58 66 40 100 40 C 134 40 160 58 156 85 C 164 102 158 124 136 130 C 118 135 82 135 64 130 C 42 124 36 102 44 85 Z\" fill=\"url(#calico-cream)\" stroke=\"#64748B\" stroke-width=\"2.5\"/>\n    <!-- Calico Eye Patches -->\n    <path d=\"M 44 80 C 42 60 62 48 76 48 C 72 66 60 86 44 80 Z\" fill=\"url(#calico-dark)\"/>\n    <path d=\"M 156 80 C 158 60 138 48 124 48 C 128 66 140 86 156 80 Z\" fill=\"url(#calico-orange)\"/>\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"74\" cy=\"78\" rx=\"13\" ry=\"15\" fill=\"#1C1917\"/>\n      <ellipse cx=\"74\" cy=\"79.5\" rx=\"11\" ry=\"13\" fill=\"url(#calico-iris)\"/>\n      <ellipse cx=\"74\" cy=\"78\" rx=\"6\" ry=\"8\" fill=\"#451A03\"/>\n      <circle cx=\"70\" cy=\"74\" r=\"4\" fill=\"#FFFFFF\"/>\n      <circle cx=\"78\" cy=\"83\" r=\"2\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"126\" cy=\"78\" rx=\"13\" ry=\"15\" fill=\"#1C1917\"/>\n      <ellipse cx=\"126\" cy=\"79.5\" rx=\"11\" ry=\"13\" fill=\"url(#calico-iris)\"/>\n      <ellipse cx=\"126\" cy=\"78\" rx=\"6\" ry=\"8\" fill=\"#451A03\"/>\n      <circle cx=\"122\" cy=\"74\" r=\"4\" fill=\"#FFFFFF\"/>\n      <circle cx=\"130\" cy=\"83\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 62 80 Q 74 66 86 80\" stroke=\"#78350F\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 80 Q 126 66 138 80\" stroke=\"#78350F\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"60\" cy=\"90\" rx=\"13\" ry=\"10\" fill=\"url(#calico-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"140\" cy=\"90\" rx=\"13\" ry=\"10\" fill=\"url(#calico-blush)\" class=\"pet-blush\"/>\n    <polygon points=\"97,86 103,86 100,91\" fill=\"#F43F5E\"/>\n    <path d=\"M 94 92 Q 100 96 100 92 Q 100 96 106 92\" stroke=\"#475569\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 94 93 Q 100 104 106 93 Z\" fill=\"#F43F5E\"/>\n    </g>\n    <path d=\"M 72 116 Q 100 124 128 116\" stroke=\"#DC2626\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 126)\">\n      <circle cx=\"0\" cy=\"0\" r=\"6\" fill=\"url(#calico-bell)\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n      <circle cx=\"0\" cy=\"2\" r=\"1.5\" fill=\"#78350F\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Bộ lông xù tròn như đám mây bồng bềnh, mặt tịt ngộ nghĩnh, đeo chuỗi ngọc trai ngôi sao lấp lánh.",
    "idleType": "cat-swish",
    "animationConfig": {
      "idleClass": "anim-cat-swish",
      "tailOrigin": "58px 156px",
      "headOrigin": "100px 115px"
    },
    "quotes": {
      "greetings": [
        "Công Chúa Ba Tư khẽ gật đầu chào cô Nguyệt ạ! 👑🐱",
        "Bộ lông xù quý phái này chỉ cho cô Nguyệt chạm vào thôi đó nha! ✨"
      ],
      "feed": [
        "Món tôm hấp hoàng gia thật vừa miệng! Công Chúa ưng ý lắm cô Nguyệt ơi! 🍤🥰"
      ],
      "pet": [
        "Purrr rừ rừ... Tay cô Nguyệt vuốt lông xù mềm như lụa sướng ghê! 💕"
      ],
      "hungry": [
        "Meo meo... Bữa trưa hoàng gia của Công Chúa đã đến giờ rồi cô ơi! 🥺🍤"
      ]
    },
    "svg": "<svg viewBox=\"0 0 200 210\" class=\"fullbody-pet-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"persian-fur\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#FFFFFF\"/><stop offset=\"60%\" stop-color=\"#FFFBEB\"/><stop offset=\"100%\" stop-color=\"#FEF3C7\"/></linearGradient>\n    <linearGradient id=\"persian-aqua\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0E7490\"/><stop offset=\"50%\" stop-color=\"#06B6D4\"/><stop offset=\"100%\" stop-color=\"#67E8F9\"/></linearGradient>\n    <radialGradient id=\"persian-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.6\"/><stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/></radialGradient>\n  </defs>\n  <ellipse cx=\"100\" cy=\"192\" rx=\"72\" ry=\"14\" fill=\"#78350F\" opacity=\"0.12\"/>\n  <!-- Giant Majestic Fluffy Cloud Tail -->\n  <g class=\"pet-tail\" style=\"transform-origin: 50px 150px;\">\n    <ellipse cx=\"38\" cy=\"116\" rx=\"24\" ry=\"34\" fill=\"url(#persian-fur)\" stroke=\"#E2E8F0\" stroke-width=\"2\" transform=\"rotate(-15 38 116)\"/>\n    <circle cx=\"28\" cy=\"98\" r=\"14\" fill=\"#FFFFFF\"/>\n    <circle cx=\"44\" cy=\"130\" r=\"16\" fill=\"#FFFFFF\"/>\n  </g>\n  <!-- Cloud-like Round Body -->\n  <g class=\"pet-body\">\n    <ellipse cx=\"100\" cy=\"154\" rx=\"54\" ry=\"42\" fill=\"url(#persian-fur)\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <!-- Puffy Chest Tufts -->\n    <circle cx=\"80\" cy=\"142\" r=\"16\" fill=\"#FFFFFF\"/>\n    <circle cx=\"120\" cy=\"142\" r=\"16\" fill=\"#FFFFFF\"/>\n    <circle cx=\"100\" cy=\"150\" r=\"18\" fill=\"#FFFFFF\"/>\n    <!-- Tiny Cute Front Paws Peeking Out -->\n    <ellipse cx=\"78\" cy=\"186\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"122\" cy=\"186\" rx=\"14\" ry=\"8\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n  </g>\n  <g class=\"pet-head\">\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 65px;\">\n      <ellipse cx=\"58\" cy=\"54\" rx=\"12\" ry=\"16\" fill=\"url(#persian-fur)\" stroke=\"#CBD5E1\" stroke-width=\"2\" transform=\"rotate(-15 58 54)\"/>\n      <ellipse cx=\"58\" cy=\"54\" rx=\"7\" ry=\"10\" fill=\"#FCE7F3\" transform=\"rotate(-15 58 54)\"/>\n      <ellipse cx=\"142\" cy=\"54\" rx=\"12\" ry=\"16\" fill=\"url(#persian-fur)\" stroke=\"#CBD5E1\" stroke-width=\"2\" transform=\"rotate(15 142 54)\"/>\n      <ellipse cx=\"142\" cy=\"54\" rx=\"7\" ry=\"10\" fill=\"#FCE7F3\" transform=\"rotate(15 142 54)\"/>\n    </g>\n    <!-- Giant Fluffy Cheek Puffs -->\n    <circle cx=\"64\" cy=\"95\" r=\"22\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n    <circle cx=\"136\" cy=\"95\" r=\"22\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"100\" cy=\"85\" rx=\"46\" ry=\"38\" fill=\"url(#persian-fur)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n    <!-- Aquamarine Anime Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"74\" cy=\"82\" rx=\"12.5\" ry=\"14\" fill=\"#164E63\"/>\n      <ellipse cx=\"74\" cy=\"83.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#persian-aqua)\"/>\n      <circle cx=\"70\" cy=\"78\" r=\"4\" fill=\"#FFFFFF\"/>\n      <circle cx=\"78\" cy=\"87\" r=\"2\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"126\" cy=\"82\" rx=\"12.5\" ry=\"14\" fill=\"#164E63\"/>\n      <ellipse cx=\"126\" cy=\"83.5\" rx=\"10.5\" ry=\"12\" fill=\"url(#persian-aqua)\"/>\n      <circle cx=\"122\" cy=\"78\" r=\"4\" fill=\"#FFFFFF\"/>\n      <circle cx=\"130\" cy=\"87\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 64 84 Q 74 72 84 84\" stroke=\"#0891B2\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 116 84 Q 126 72 136 84\" stroke=\"#0891B2\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"58\" cy=\"94\" rx=\"12\" ry=\"9\" fill=\"url(#persian-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"94\" rx=\"12\" ry=\"9\" fill=\"url(#persian-blush)\" class=\"pet-blush\"/>\n    <!-- Flat Cute Persian Nose -->\n    <polygon points=\"98,87 102,87 100,90\" fill=\"#FB7185\"/>\n    <path d=\"M 96 92 Q 100 95 100 92 Q 100 95 104 92\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 96 93 Q 100 100 104 93 Z\" fill=\"#F43F5E\"/>\n    </g>\n    <!-- Pearl Necklace with Star Pendant -->\n    <path d=\"M 72 120 Q 100 130 128 120\" stroke=\"#E2E8F0\" stroke-width=\"4\" stroke-dasharray=\"2,6\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 128)\">\n      <polygon points=\"0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"1\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Chân ngắn cũn cỡn, tai to dựng đứng, bờ mông hình trái tim lắc lư tít mù và chiếc khăn bandana đỏ chấm bi.",
    "idleType": "corgi-bounce",
    "animationConfig": {
      "idleClass": "anim-corgi-bounce",
      "tailOrigin": "155px 148px",
      "headOrigin": "88px 88px"
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-corgi\">\n  <defs>\n    <radialGradient id=\"corgi-body\" cx=\"40%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FBBF24\"/>\n      <stop offset=\"65%\" stop-color=\"#F59E0B\"/>\n      <stop offset=\"100%\" stop-color=\"#D97706\"/>\n    </radialGradient>\n    <radialGradient id=\"corgi-white\" cx=\"50%\" cy=\"40%\" r=\"60%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n    </radialGradient>\n    <radialGradient id=\"corgi-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FDA4AF\" stop-opacity=\"0.8\"/>\n      <stop offset=\"100%\" stop-color=\"#FDA4AF\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <!-- Tiny Stubby Corgi Tail Wagging Rapidly -->\n  <g class=\"pet-tail corgi-tail\" style=\"transform-origin: 155px 148px;\">\n    <ellipse cx=\"160\" cy=\"146\" rx=\"14\" ry=\"12\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"165\" cy=\"144\" r=\"6\" fill=\"#FFFFFF\"/>\n  </g>\n  <!-- Short Oblong Corgi Body with Heart Flanks -->\n  <g class=\"pet-body\">\n    <!-- Back Paws (Stubby) -->\n    <ellipse cx=\"145\" cy=\"172\" rx=\"15\" ry=\"10\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <ellipse cx=\"145\" cy=\"174\" rx=\"12\" ry=\"7\" fill=\"url(#corgi-white)\"/>\n    <!-- Main Chubby Body -->\n    <ellipse cx=\"106\" cy=\"145\" rx=\"56\" ry=\"36\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n    <!-- Heart-shaped White Belly/Flank Patch -->\n    <ellipse cx=\"95\" cy=\"150\" rx=\"34\" ry=\"24\" fill=\"url(#corgi-white)\"/>\n    <!-- Front Stubby Paws -->\n    <g>\n      <ellipse cx=\"68\" cy=\"176\" rx=\"14\" ry=\"9\" fill=\"url(#corgi-white)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <line x1=\"64\" y1=\"174\" x2=\"64\" y2=\"182\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"72\" y1=\"174\" x2=\"72\" y2=\"182\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <ellipse cx=\"112\" cy=\"176\" rx=\"14\" ry=\"9\" fill=\"url(#corgi-white)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n      <line x1=\"108\" y1=\"174\" x2=\"108\" y2=\"182\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"116\" y1=\"174\" x2=\"116\" y2=\"182\" stroke=\"#D97706\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n  <!-- Head with Big Foxy Ears & Cream Blaze -->\n  <g class=\"pet-head\">\n    <!-- Big Rounded Ears with Foxy Tips -->\n    <g class=\"pet-ears\" style=\"transform-origin: 88px 60px;\">\n      <!-- Left Ear -->\n      <ellipse cx=\"50\" cy=\"42\" rx=\"16\" ry=\"28\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.2\" transform=\"rotate(-22 50 42)\"/>\n      <ellipse cx=\"50\" cy=\"44\" rx=\"9\" ry=\"20\" fill=\"#FDE68A\" transform=\"rotate(-22 50 44)\"/>\n      <!-- Right Ear -->\n      <ellipse cx=\"126\" cy=\"42\" rx=\"16\" ry=\"28\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.2\" transform=\"rotate(22 126 42)\"/>\n      <ellipse cx=\"126\" cy=\"44\" rx=\"9\" ry=\"20\" fill=\"#FDE68A\" transform=\"rotate(22 126 44)\"/>\n    </g>\n    <!-- Head Base -->\n    <ellipse cx=\"88\" cy=\"88\" rx=\"46\" ry=\"38\" fill=\"url(#corgi-body)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n    <!-- White Corgi Blaze & Muzzle -->\n    <path d=\"M 88 56 C 84 70 66 74 66 94 C 66 112 110 112 110 94 C 110 74 92 70 88 56 Z\" fill=\"url(#corgi-white)\"/>\n    <!-- Sparkling Doggy Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"68\" cy=\"85\" rx=\"8\" ry=\"11\" fill=\"#1E293B\"/>\n      <circle cx=\"65.5\" cy=\"81.5\" r=\"3.5\" fill=\"#FFFFFF\"/>\n      <circle cx=\"71\" cy=\"90\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"108\" cy=\"85\" rx=\"8\" ry=\"11\" fill=\"#1E293B\"/>\n      <circle cx=\"105.5\" cy=\"81.5\" r=\"3.5\" fill=\"#FFFFFF\"/>\n      <circle cx=\"111\" cy=\"90\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 60 86 Q 68 76 76 86\" stroke=\"#92400E\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 100 86 Q 108 76 116 86\" stroke=\"#92400E\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <!-- Rosy Cheeks -->\n    <ellipse cx=\"55\" cy=\"96\" rx=\"9\" ry=\"6\" fill=\"url(#corgi-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"121\" cy=\"96\" rx=\"9\" ry=\"6\" fill=\"url(#corgi-blush)\" class=\"pet-blush\"/>\n    <!-- Black Snout & Mouth -->\n    <ellipse cx=\"88\" cy=\"95\" rx=\"6\" ry=\"4.5\" fill=\"#0F172A\"/>\n    <ellipse cx=\"87\" cy=\"93.5\" rx=\"2\" ry=\"1.2\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n    <!-- Default Mouth -->\n    <path d=\"M 84 99 Q 88 103 88 99 Q 88 103 92 99\" stroke=\"#92400E\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <!-- Happy Panting Mouth with Tongue -->\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 82 99 Q 88 108 94 99 Z\" fill=\"#991B1B\"/>\n      <path d=\"M 85 101 Q 88 113 91 101 Z\" fill=\"#FB7185\"/>\n    </g>\n    <!-- Red Polka-dot Bandana -->\n    <polygon points=\"68,118 108,118 88,136\" fill=\"#EF4444\" stroke=\"#B91C1C\" stroke-width=\"1.5\"/>\n    <circle cx=\"82\" cy=\"123\" r=\"2\" fill=\"#FFFFFF\"/>\n    <circle cx=\"94\" cy=\"123\" r=\"2\" fill=\"#FFFFFF\"/>\n    <circle cx=\"88\" cy=\"130\" r=\"1.8\" fill=\"#FFFFFF\"/>\n  </g>\n</svg>"
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
    "description": "Bộ lông đỏ sesame óng mượt, vệt lông trắng Urajiro thanh nhã, đuôi cuộn tròn tít và khăn quàng lá xanh truyền thống.",
    "idleType": "shiba-wag",
    "animationConfig": {
      "idleClass": "anim-shiba-wag",
      "tailOrigin": "140px 115px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Gâu! Em là Shiba Inu Mochi nụ cười triệu view gửi lời chào cô Nguyệt!",
        "Đuôi em cuộn tròn tít như cái bánh donut luôn đó cô thấy hông? 🍩🐕",
        "Hôm nay cô Nguyệt thấy em có ngoan và đẹp trai hông nè?",
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-shiba\">\n  <defs>\n    <radialGradient id=\"shiba-coat\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FB923C\"/>\n      <stop offset=\"60%\" stop-color=\"#EA580C\"/>\n      <stop offset=\"100%\" stop-color=\"#C2410C\"/>\n    </radialGradient>\n    <radialGradient id=\"shiba-cream\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"100%\" stop-color=\"#FEF3C7\"/>\n    </radialGradient>\n    <radialGradient id=\"shiba-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#F43F5E\" stop-opacity=\"0.75\"/>\n      <stop offset=\"100%\" stop-color=\"#F43F5E\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <!-- Curled Donut Tail over Back -->\n  <g class=\"pet-tail shiba-tail\" style=\"transform-origin: 140px 115px;\">\n    <path d=\"M 135 125 C 155 100 170 120 155 140 C 145 150 130 135 142 120\" stroke=\"url(#shiba-coat)\" stroke-width=\"16\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 148 112 C 160 118 156 132 146 130\" stroke=\"#FFFBEB\" stroke-width=\"8\" stroke-linecap=\"round\" fill=\"none\"/>\n  </g>\n  <!-- Body (Sitting Proudly) -->\n  <g class=\"pet-body\">\n    <ellipse cx=\"100\" cy=\"148\" rx=\"52\" ry=\"40\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n    <!-- Snowy Chest (Urajiro) -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"32\" ry=\"32\" fill=\"url(#shiba-cream)\"/>\n    <!-- Neat Shiba Paws -->\n    <ellipse cx=\"78\" cy=\"180\" rx=\"13\" ry=\"9\" fill=\"url(#shiba-cream)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n    <ellipse cx=\"122\" cy=\"180\" rx=\"13\" ry=\"9\" fill=\"url(#shiba-cream)\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n  </g>\n  <!-- Shiba Head with Urajiro Mask -->\n  <g class=\"pet-head\">\n    <!-- Perky Triangular Ears with Dark Edge Tips -->\n    <g class=\"pet-ears\" style=\"transform-origin: 100px 65px;\">\n      <polygon points=\"56,66 40,32 74,48\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n      <polygon points=\"56,60 46,38 70,50\" fill=\"#FEF3C7\"/>\n      <polygon points=\"40,32 44,28 48,34\" fill=\"#7C2D12\"/>\n      \n      <polygon points=\"144,66 160,32 126,48\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.2\"/>\n      <polygon points=\"144,60 154,38 130,50\" fill=\"#FEF3C7\"/>\n      <polygon points=\"160,32 156,28 152,34\" fill=\"#7C2D12\"/>\n    </g>\n    <!-- Rounded Face -->\n    <ellipse cx=\"100\" cy=\"85\" rx=\"46\" ry=\"38\" fill=\"url(#shiba-coat)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n    <!-- Distinctive Urajiro White Mask -->\n    <path d=\"M 68 76 Q 84 82 100 82 Q 116 82 132 76 Q 146 102 120 114 Q 100 120 80 114 Q 54 102 68 76 Z\" fill=\"url(#shiba-cream)\"/>\n    <!-- White Eye Dots (Urajiro brows) -->\n    <ellipse cx=\"78\" cy=\"68\" rx=\"4\" ry=\"2.5\" fill=\"#FFFBEB\" transform=\"rotate(-10 78 68)\"/>\n    <ellipse cx=\"122\" cy=\"68\" rx=\"4\" ry=\"2.5\" fill=\"#FFFBEB\" transform=\"rotate(10 122 68)\"/>\n    <!-- Almond Smiling Shiba Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"78\" cy=\"82\" rx=\"7.5\" ry=\"9\" fill=\"#1C1917\"/>\n      <circle cx=\"76\" cy=\"79\" r=\"3\" fill=\"#FFFFFF\"/>\n      <circle cx=\"80\" cy=\"86\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      <ellipse cx=\"122\" cy=\"82\" rx=\"7.5\" ry=\"9\" fill=\"#1C1917\"/>\n      <circle cx=\"120\" cy=\"79\" r=\"3\" fill=\"#FFFFFF\"/>\n      <circle cx=\"124\" cy=\"86\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 70 82 Q 78 72 86 82\" stroke=\"#7C2D12\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 82 Q 122 72 130 82\" stroke=\"#7C2D12\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"64\" cy=\"94\" rx=\"10\" ry=\"6.5\" fill=\"url(#shiba-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"136\" cy=\"94\" rx=\"10\" ry=\"6.5\" fill=\"url(#shiba-blush)\" class=\"pet-blush\"/>\n    <!-- Black Triangle Snout -->\n    <polygon points=\"96,90 104,90 100,95\" fill=\"#1C1917\"/>\n    <path d=\"M 94 98 Q 100 102 100 98 Q 100 102 106 98\" stroke=\"#7C2D12\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <!-- Classic Shiba Open Grin -->\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 92 98 Q 100 110 108 98 Z\" fill=\"#991B1B\"/>\n      <ellipse cx=\"100\" cy=\"103\" rx=\"4\" ry=\"3\" fill=\"#FB7185\"/>\n    </g>\n    <!-- Green Karakusa Japanese Swirl Bandana -->\n    <path d=\"M 76 116 Q 100 128 124 116 Q 100 142 76 116 Z\" fill=\"#16A34A\" stroke=\"#15803D\" stroke-width=\"1.8\"/>\n    <circle cx=\"94\" cy=\"123\" r=\"2\" fill=\"#FFFFFF\" opacity=\"0.85\"/>\n    <circle cx=\"106\" cy=\"123\" r=\"2\" fill=\"#FFFFFF\" opacity=\"0.85\"/>\n    <circle cx=\"100\" cy=\"130\" r=\"2\" fill=\"#FFFFFF\" opacity=\"0.85\"/>\n  </g>\n</svg>"
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
    "description": "Lông vàng óng ả mềm mượt, tai cụp lúc lắc, mắt nâu đượm tình, đeo vòng cổ da xanh với mặt xương vàng sáng bóng.",
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-golden\">\n  <defs>\n    <radialGradient id=\"golden-fur\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FEF08A\"/>\n      <stop offset=\"50%\" stop-color=\"#FBBF24\"/>\n      <stop offset=\"100%\" stop-color=\"#D97706\"/>\n    </radialGradient>\n    <radialGradient id=\"golden-ear\" cx=\"40%\" cy=\"30%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#F59E0B\"/>\n      <stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </radialGradient>\n    <radialGradient id=\"golden-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FB7185\" stop-opacity=\"0.7\"/>\n      <stop offset=\"100%\" stop-color=\"#FB7185\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <!-- Big Fluffy Golden Tail Swishing -->\n  <g class=\"pet-tail golden-tail\" style=\"transform-origin: 150px 140px;\">\n    <path d=\"M 145 145 Q 185 125 175 95 Q 165 90 152 115 Z\" fill=\"url(#golden-fur)\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <path d=\"M 155 125 Q 180 115 172 100\" stroke=\"#FEF08A\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n  </g>\n  <!-- Warm Chunky Puppy Body -->\n  <g class=\"pet-body\">\n    <ellipse cx=\"100\" cy=\"150\" rx=\"56\" ry=\"42\" fill=\"url(#golden-fur)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"100\" cy=\"152\" rx=\"34\" ry=\"28\" fill=\"#FEF3C7\"/>\n    <!-- Chunky Front Puppy Paws -->\n    <ellipse cx=\"74\" cy=\"182\" rx=\"16\" ry=\"10\" fill=\"#FEF3C7\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"68\" cy=\"182\" r=\"2\" fill=\"#D97706\"/>\n    <circle cx=\"74\" cy=\"184\" r=\"2\" fill=\"#D97706\"/>\n    <circle cx=\"80\" cy=\"182\" r=\"2\" fill=\"#D97706\"/>\n    \n    <ellipse cx=\"126\" cy=\"182\" rx=\"16\" ry=\"10\" fill=\"#FEF3C7\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <circle cx=\"120\" cy=\"182\" r=\"2\" fill=\"#D97706\"/>\n    <circle cx=\"126\" cy=\"184\" r=\"2\" fill=\"#D97706\"/>\n    <circle cx=\"132\" cy=\"182\" r=\"2\" fill=\"#D97706\"/>\n  </g>\n  <!-- Head with Big Droopy Floppy Ears -->\n  <g class=\"pet-head\">\n    <!-- Big Floppy Ears (swaying gently) -->\n    <g class=\"pet-ears golden-ears\" style=\"transform-origin: 100px 70px;\">\n      <path d=\"M 64 68 C 45 72 32 95 38 120 C 42 128 58 122 62 105 Z\" fill=\"url(#golden-ear)\" stroke=\"#92400E\" stroke-width=\"2.2\"/>\n      <path d=\"M 136 68 C 155 72 168 95 162 120 C 158 128 142 122 138 105 Z\" fill=\"url(#golden-ear)\" stroke=\"#92400E\" stroke-width=\"2.2\"/>\n    </g>\n    <!-- Big Round Head -->\n    <ellipse cx=\"100\" cy=\"85\" rx=\"48\" ry=\"40\" fill=\"url(#golden-fur)\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n    <!-- Light Muzzle Area -->\n    <ellipse cx=\"100\" cy=\"98\" rx=\"26\" ry=\"20\" fill=\"#FEF3C7\"/>\n    <!-- Dark Melt-your-heart Puppy Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"82\" rx=\"9\" ry=\"11\" fill=\"#451A03\"/>\n      <ellipse cx=\"76\" cy=\"84\" rx=\"7.5\" ry=\"9\" fill=\"#78350F\"/>\n      <circle cx=\"73\" cy=\"78\" r=\"4\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79\" cy=\"88\" r=\"1.8\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"124\" cy=\"82\" rx=\"9\" ry=\"11\" fill=\"#451A03\"/>\n      <ellipse cx=\"124\" cy=\"84\" rx=\"7.5\" ry=\"9\" fill=\"#78350F\"/>\n      <circle cx=\"121\" cy=\"78\" r=\"4\" fill=\"#FFFFFF\"/>\n      <circle cx=\"127\" cy=\"88\" r=\"1.8\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 82 Q 76 72 86 82\" stroke=\"#78350F\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 82 Q 124 72 134 82\" stroke=\"#78350F\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"60\" cy=\"96\" rx=\"10\" ry=\"7\" fill=\"url(#golden-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"140\" cy=\"96\" rx=\"10\" ry=\"7\" fill=\"url(#golden-blush)\" class=\"pet-blush\"/>\n    <!-- Big Shiny Black Nose -->\n    <ellipse cx=\"100\" cy=\"92\" rx=\"7\" ry=\"5.5\" fill=\"#0F172A\"/>\n    <ellipse cx=\"98.5\" cy=\"90\" rx=\"2.5\" ry=\"1.5\" fill=\"#FFFFFF\" opacity=\"0.65\"/>\n    <!-- Gentle Mouth -->\n    <path d=\"M 92 98 Q 100 102 100 98 Q 100 102 108 98\" stroke=\"#78350F\" stroke-width=\"2.4\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <!-- Happy Panting Tongue -->\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 90 98 Q 100 108 110 98 Z\" fill=\"#991B1B\"/>\n      <path d=\"M 93 100 Q 100 118 107 100 Z\" fill=\"#FB7185\"/>\n      <line x1=\"100\" y1=\"102\" x2=\"100\" y2=\"114\" stroke=\"#F43F5E\" stroke-width=\"1.5\"/>\n    </g>\n    <!-- Royal Blue Leather Collar with Golden Bone Tag -->\n    <path d=\"M 72 120 Q 100 134 128 120\" stroke=\"#2563EB\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <g transform=\"translate(100, 134)\">\n      <ellipse cx=\"-4\" cy=\"0\" rx=\"2\" ry=\"3\" fill=\"#FBBF24\"/>\n      <ellipse cx=\"4\" cy=\"0\" rx=\"2\" ry=\"3\" fill=\"#FBBF24\"/>\n      <rect x=\"-4\" y=\"-1.5\" width=\"8\" height=\"3\" fill=\"#FBBF24\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"1.5\" fill=\"#D97706\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Thân hình tròn trĩnh như cục bông tuyết, đôi mắt hồng ngọc lấp lánh, tai dài vểnh cao và hai má ửng hồng e thẹn.",
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-rabbit\">\n  <defs>\n    <radialGradient id=\"rabbit-white\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"75%\" stop-color=\"#F8FAFC\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </radialGradient>\n    <radialGradient id=\"rabbit-pink\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFF1F2\"/>\n      <stop offset=\"100%\" stop-color=\"#FECDD3\"/>\n    </radialGradient>\n    <radialGradient id=\"rabbit-ruby\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#F43F5E\"/>\n      <stop offset=\"60%\" stop-color=\"#BE185D\"/>\n      <stop offset=\"100%\" stop-color=\"#881337\"/>\n    </radialGradient>\n  </defs>\n  <!-- Tiny Cotton Ball Tail -->\n  <g class=\"pet-tail rabbit-tail\" style=\"transform-origin: 145px 150px;\">\n    <circle cx=\"150\" cy=\"150\" r=\"14\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <circle cx=\"147\" cy=\"147\" r=\"10\" fill=\"#F8FAFC\"/>\n  </g>\n  <!-- Pear-shaped Chubby Body -->\n  <g class=\"pet-body\">\n    <ellipse cx=\"100\" cy=\"152\" rx=\"48\" ry=\"40\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n    <ellipse cx=\"100\" cy=\"154\" rx=\"28\" ry=\"24\" fill=\"#FFFFFF\"/>\n    <!-- Chunky Bunny Feet -->\n    <ellipse cx=\"72\" cy=\"184\" rx=\"15\" ry=\"9\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"128\" cy=\"184\" rx=\"15\" ry=\"9\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <!-- Little Paws Holding Fresh Carrot -->\n    <g class=\"pet-prop-carrot\">\n      <!-- Carrot Body -->\n      <path d=\"M 88 135 C 92 135 118 160 112 172 C 108 178 95 158 88 135 Z\" fill=\"#EA580C\" stroke=\"#C2410C\" stroke-width=\"1.8\"/>\n      <!-- Carrot Texture Ridges -->\n      <line x1=\"94\" y1=\"145\" x2=\"102\" y2=\"148\" stroke=\"#F97316\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n      <line x1=\"98\" y1=\"155\" x2=\"106\" y2=\"158\" stroke=\"#F97316\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n      <!-- Leafy Green Carrot Top -->\n      <path d=\"M 88 135 Q 82 120 74 122 Q 82 130 86 136 Z\" fill=\"#22C55E\"/>\n      <path d=\"M 88 135 Q 88 116 86 116 Q 88 126 90 136 Z\" fill=\"#16A34A\"/>\n      <path d=\"M 90 135 Q 98 120 102 124 Q 96 130 92 136 Z\" fill=\"#22C55E\"/>\n    </g>\n    <!-- Cute Rabbit Front Paws hugging carrot -->\n    <ellipse cx=\"82\" cy=\"146\" rx=\"9\" ry=\"7\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" transform=\"rotate(15 82 146)\"/>\n    <ellipse cx=\"112\" cy=\"148\" rx=\"9\" ry=\"7\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.8\" transform=\"rotate(-20 112 148)\"/>\n  </g>\n  <!-- Head with Tall Twitching Ears -->\n  <g class=\"pet-head\">\n    <!-- Tall Twitching Bunny Ears -->\n    <g class=\"pet-ears rabbit-ears\" style=\"transform-origin: 100px 75px;\">\n      <!-- Left Long Ear -->\n      <g style=\"transform-origin: 75px 75px;\" class=\"rabbit-ear-l\">\n        <path d=\"M 70 75 C 50 45 52 10 74 6 C 88 10 85 45 78 75 Z\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n        <path d=\"M 72 70 C 60 45 60 18 73 14 C 80 18 80 45 76 70 Z\" fill=\"url(#rabbit-pink)\"/>\n      </g>\n      <!-- Right Long Ear (Slightly tilted) -->\n      <g style=\"transform-origin: 125px 75px;\" class=\"rabbit-ear-r\">\n        <path d=\"M 122 75 C 115 45 112 10 126 6 C 148 10 150 45 130 75 Z\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n        <path d=\"M 124 70 C 120 45 120 18 127 14 C 140 18 140 45 128 70 Z\" fill=\"url(#rabbit-pink)\"/>\n      </g>\n    </g>\n    <!-- Chubby Round Face -->\n    <ellipse cx=\"100\" cy=\"94\" rx=\"44\" ry=\"36\" fill=\"url(#rabbit-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.2\"/>\n    <!-- Ruby Gem Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"75\" cy=\"90\" rx=\"9.5\" ry=\"12\" fill=\"url(#rabbit-ruby)\"/>\n      <circle cx=\"72\" cy=\"86\" r=\"4\" fill=\"#FFFFFF\"/>\n      <circle cx=\"78\" cy=\"96\" r=\"2\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"125\" cy=\"90\" rx=\"9.5\" ry=\"12\" fill=\"url(#rabbit-ruby)\"/>\n      <circle cx=\"122\" cy=\"86\" r=\"4\" fill=\"#FFFFFF\"/>\n      <circle cx=\"128\" cy=\"96\" r=\"2\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 92 Q 75 80 84 92\" stroke=\"#BE185D\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 116 92 Q 125 80 134 92\" stroke=\"#BE185D\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <!-- Big Soft Pink Cheeks -->\n    <ellipse cx=\"62\" cy=\"102\" rx=\"11\" ry=\"8\" fill=\"#F43F5E\" opacity=\"0.35\" class=\"pet-blush\"/>\n    <ellipse cx=\"138\" cy=\"102\" rx=\"11\" ry=\"8\" fill=\"#F43F5E\" opacity=\"0.35\" class=\"pet-blush\"/>\n    <!-- Twitching Y-Nose & Whiskers -->\n    <g class=\"rabbit-nose\" style=\"transform-origin: 100px 98px;\">\n      <polygon points=\"97,97 103,97 100,101\" fill=\"#F43F5E\"/>\n      <path d=\"M 97 103 Q 100 106 100 103 Q 100 106 103 103\" stroke=\"#94A3B8\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n      <!-- Delicate Whiskers -->\n      <line x1=\"56\" y1=\"100\" x2=\"42\" y2=\"98\" stroke=\"#CBD5E1\" stroke-width=\"1.4\"/>\n      <line x1=\"56\" y1=\"104\" x2=\"40\" y2=\"106\" stroke=\"#CBD5E1\" stroke-width=\"1.4\"/>\n      <line x1=\"144\" y1=\"100\" x2=\"158\" y2=\"98\" stroke=\"#CBD5E1\" stroke-width=\"1.4\"/>\n      <line x1=\"144\" y1=\"104\" x2=\"160\" y2=\"106\" stroke=\"#CBD5E1\" stroke-width=\"1.4\"/>\n    </g>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 96 103 Q 100 110 104 103 Z\" fill=\"#F43F5E\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Thân hình tròn vo đen trắng, quầng mắt đen thương hiệu, hai tai tròn ngộ nghĩnh và tay ôm chặt cành trúc xanh non.",
    "idleType": "panda-chew",
    "animationConfig": {
      "idleClass": "anim-panda-chew",
      "tailOrigin": "148px 150px",
      "headOrigin": "100px 85px"
    },
    "quotes": {
      "greetings": [
        "Rồm rộp! Bảo Bảo chào cô Nguyệt! Nhánh trúc hôm nay ngọt lịm luôn á! 🐼🎍",
        "Em tròn vo như một cục bột nếp, lăn từ góc phòng tới chào cô nè!",
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-panda\">\n  <defs>\n    <radialGradient id=\"panda-white\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"80%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </radialGradient>\n    <radialGradient id=\"panda-black\" cx=\"35%\" cy=\"30%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"70%\" stop-color=\"#0F172A\"/>\n      <stop offset=\"100%\" stop-color=\"#020617\"/>\n    </radialGradient>\n    <radialGradient id=\"panda-blush\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FDA4AF\" stop-opacity=\"0.7\"/>\n      <stop offset=\"100%\" stop-color=\"#FDA4AF\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <!-- Tiny Stubby Black Tail -->\n  <g class=\"pet-tail panda-tail\" style=\"transform-origin: 148px 150px;\">\n    <circle cx=\"150\" cy=\"150\" r=\"10\" fill=\"url(#panda-black)\"/>\n  </g>\n  <!-- Roly-Poly Body -->\n  <g class=\"pet-body\">\n    <!-- Big Black Paws (Feet) -->\n    <ellipse cx=\"64\" cy=\"178\" rx=\"18\" ry=\"12\" fill=\"url(#panda-black)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <ellipse cx=\"136\" cy=\"178\" rx=\"18\" ry=\"12\" fill=\"url(#panda-black)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <circle cx=\"64\" cy=\"176\" r=\"4\" fill=\"#64748B\" opacity=\"0.6\"/>\n    <circle cx=\"136\" cy=\"176\" r=\"4\" fill=\"#64748B\" opacity=\"0.6\"/>\n    \n    <!-- White Belly -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"56\" ry=\"42\" fill=\"url(#panda-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.5\"/>\n    <!-- Black Vest / Shoulders -->\n    <path d=\"M 46 142 C 46 122 72 120 100 120 C 128 120 154 122 154 142 C 142 165 58 165 46 142 Z\" fill=\"url(#panda-black)\"/>\n    <ellipse cx=\"100\" cy=\"155\" rx=\"34\" ry=\"26\" fill=\"url(#panda-white)\"/>\n    \n    <!-- Left Hand Holding Bamboo Stalk -->\n    <g class=\"pet-prop-bamboo\">\n      <!-- Stalk -->\n      <line x1=\"126\" y1=\"180\" x2=\"140\" y2=\"88\" stroke=\"#15803D\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n      <line x1=\"128\" y1=\"180\" x2=\"140\" y2=\"88\" stroke=\"#4ADE80\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n      <!-- Bamboo Joints -->\n      <line x1=\"130\" y1=\"150\" x2=\"135\" y2=\"151\" stroke=\"#166534\" stroke-width=\"3\"/>\n      <line x1=\"134\" y1=\"120\" x2=\"139\" y2=\"121\" stroke=\"#166534\" stroke-width=\"3\"/>\n      <!-- Green Leaves -->\n      <path d=\"M 139 96 Q 160 88 166 98 Q 152 104 139 96 Z\" fill=\"#22C55E\"/>\n      <path d=\"M 137 114 Q 158 116 162 126 Q 148 126 137 114 Z\" fill=\"#16A34A\"/>\n      <path d=\"M 135 130 Q 118 126 114 134 Q 126 138 135 130 Z\" fill=\"#22C55E\"/>\n    </g>\n    <!-- Cute Chubby Black Arms -->\n    <ellipse cx=\"70\" cy=\"142\" rx=\"14\" ry=\"18\" fill=\"url(#panda-black)\" transform=\"rotate(20 70 142)\"/>\n    <ellipse cx=\"126\" cy=\"140\" rx=\"14\" ry=\"18\" fill=\"url(#panda-black)\" transform=\"rotate(-25 126 140)\"/>\n  </g>\n  <!-- Huge Chubby Panda Head -->\n  <g class=\"pet-head\">\n    <!-- Round Black Ears (Twitching) -->\n    <g class=\"pet-ears panda-ears\" style=\"transform-origin: 100px 65px;\">\n      <circle cx=\"56\" cy=\"46\" r=\"18\" fill=\"url(#panda-black)\" stroke=\"#020617\" stroke-width=\"2\"/>\n      <circle cx=\"144\" cy=\"46\" r=\"18\" fill=\"url(#panda-black)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    </g>\n    <!-- Round Snowy Face -->\n    <ellipse cx=\"100\" cy=\"85\" rx=\"50\" ry=\"42\" fill=\"url(#panda-white)\" stroke=\"#CBD5E1\" stroke-width=\"2.5\"/>\n    <!-- Iconic Teardrop Eye Patches -->\n    <ellipse cx=\"74\" cy=\"82\" rx=\"15\" ry=\"18\" fill=\"url(#panda-black)\" transform=\"rotate(-15 74 82)\"/>\n    <ellipse cx=\"126\" cy=\"82\" rx=\"15\" ry=\"18\" fill=\"url(#panda-black)\" transform=\"rotate(15 126 82)\"/>\n    <!-- Big Sparkling Innocent Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"75\" cy=\"81\" rx=\"8\" ry=\"9.5\" fill=\"#0F172A\"/>\n      <circle cx=\"73\" cy=\"78\" r=\"3.5\" fill=\"#FFFFFF\"/>\n      <circle cx=\"78\" cy=\"85\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"125\" cy=\"81\" rx=\"8\" ry=\"9.5\" fill=\"#0F172A\"/>\n      <circle cx=\"123\" cy=\"78\" r=\"3.5\" fill=\"#FFFFFF\"/>\n      <circle cx=\"128\" cy=\"85\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 82 Q 74 72 82 82\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 118 82 Q 126 72 134 82\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"58\" cy=\"98\" rx=\"10\" ry=\"7\" fill=\"url(#panda-blush)\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"98\" rx=\"10\" ry=\"7\" fill=\"url(#panda-blush)\" class=\"pet-blush\"/>\n    <!-- Round Black Snout -->\n    <ellipse cx=\"100\" cy=\"94\" rx=\"7\" ry=\"5\" fill=\"#0F172A\"/>\n    <path d=\"M 94 100 Q 100 105 100 100 Q 100 105 106 100\" stroke=\"#334155\" stroke-width=\"2.4\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <!-- Happy Bamboo Munching Mouth -->\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 92 100 Q 100 112 108 100 Z\" fill=\"#991B1B\"/>\n      <ellipse cx=\"100\" cy=\"105\" rx=\"4\" ry=\"2.5\" fill=\"#FB7185\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Bộ lông cam rực rỡ pha tuyết trắng, ấn ký đỏ son trên trán, đuôi xù khổng lồ và đôi mắt thạch anh tím ánh sao.",
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-fox\">\n  <defs>\n    <radialGradient id=\"fox-orange\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FB923C\"/>\n      <stop offset=\"60%\" stop-color=\"#EA580C\"/>\n      <stop offset=\"100%\" stop-color=\"#9A3412\"/>\n    </radialGradient>\n    <radialGradient id=\"fox-white\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"100%\" stop-color=\"#FEF2F2\"/>\n    </radialGradient>\n    <radialGradient id=\"fox-amethyst\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#C084FC\"/>\n      <stop offset=\"55%\" stop-color=\"#9333EA\"/>\n      <stop offset=\"100%\" stop-color=\"#581C87\"/>\n    </radialGradient>\n  </defs>\n  <!-- Huge Bushy Two-Tone Plume Tail -->\n  <g class=\"pet-tail fox-tail\" style=\"transform-origin: 135px 135px;\">\n    <!-- Orange Part of Tail -->\n    <path d=\"M 125 145 C 165 145 195 110 185 70 C 175 40 145 65 140 105 Z\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n    <!-- Big Snowy White Fluffy Tip -->\n    <path d=\"M 185 70 C 180 50 165 42 152 48 C 158 58 152 68 162 74 C 172 78 178 72 185 70 Z\" fill=\"url(#fox-white)\"/>\n    <!-- Fur Strands on Tail -->\n    <path d=\"M 155 72 Q 170 85 165 110\" stroke=\"#FDBA74\" stroke-width=\"2\" fill=\"none\"/>\n  </g>\n  <!-- Lithe Sitting Body -->\n  <g class=\"pet-body\">\n    <ellipse cx=\"96\" cy=\"150\" rx=\"46\" ry=\"38\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n    <!-- Fluffy Snow White Chest (Bib) -->\n    <path d=\"M 80 125 Q 96 118 112 125 Q 120 150 96 162 Q 72 150 80 125 Z\" fill=\"url(#fox-white)\"/>\n    <!-- Front Paws with Black Stockings -->\n    <ellipse cx=\"80\" cy=\"180\" rx=\"11\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n    <ellipse cx=\"112\" cy=\"180\" rx=\"11\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  </g>\n  <!-- Sleek Head with Giant Fluffy Ears -->\n  <g class=\"pet-head\">\n    <!-- Big Fennec / Kitsune Ears with White Tuft Insides -->\n    <g class=\"pet-ears fox-ears\" style=\"transform-origin: 96px 65px;\">\n      <!-- Left Ear -->\n      <polygon points=\"50,68 28,16 74,42\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n      <polygon points=\"50,64 36,26 68,46\" fill=\"#FFFFFF\"/>\n      <!-- Feathery Ear Fluff -->\n      <path d=\"M 46 54 Q 38 46 44 38 Q 50 48 54 58 Z\" fill=\"#FFFFFF\"/>\n      <!-- Right Ear -->\n      <polygon points=\"142,68 164,16 118,42\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n      <polygon points=\"142,64 156,26 124,46\" fill=\"#FFFFFF\"/>\n      <path d=\"M 146 54 Q 154 46 148 38 Q 142 48 138 58 Z\" fill=\"#FFFFFF\"/>\n    </g>\n    <!-- Sleek Face Contour -->\n    <polygon points=\"56,76 96,120 136,76 120,62 72,62\" fill=\"url(#fox-orange)\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>\n    <!-- White Cheek Chevrons -->\n    <polygon points=\"62,80 96,118 78,105\" fill=\"url(#fox-white)\"/>\n    <polygon points=\"130,80 96,118 114,105\" fill=\"url(#fox-white)\"/>\n    <!-- Forehead Red Kitsune Bindi Mark -->\n    <ellipse cx=\"96\" cy=\"68\" rx=\"3.5\" ry=\"5.5\" fill=\"#DC2626\"/>\n    <circle cx=\"96\" cy=\"76\" r=\"2\" fill=\"#DC2626\"/>\n    <!-- Amethyst Glowing Anime Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"76\" cy=\"84\" rx=\"8.5\" ry=\"11\" fill=\"url(#fox-amethyst)\"/>\n      <circle cx=\"73\" cy=\"80\" r=\"3.5\" fill=\"#FFFFFF\"/>\n      <circle cx=\"79\" cy=\"89\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"116\" cy=\"84\" rx=\"8.5\" ry=\"11\" fill=\"url(#fox-amethyst)\"/>\n      <circle cx=\"113\" cy=\"80\" r=\"3.5\" fill=\"#FFFFFF\"/>\n      <circle cx=\"119\" cy=\"89\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 68 84 Q 76 72 84 84\" stroke=\"#7E22CE\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 108 84 Q 116 72 124 84\" stroke=\"#7E22CE\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <ellipse cx=\"62\" cy=\"94\" rx=\"8\" ry=\"5.5\" fill=\"#FDA4AF\" opacity=\"0.6\" class=\"pet-blush\"/>\n    <ellipse cx=\"130\" cy=\"94\" rx=\"8\" ry=\"5.5\" fill=\"#FDA4AF\" opacity=\"0.6\" class=\"pet-blush\"/>\n    <!-- Cute Sharp Black Nose -->\n    <circle cx=\"96\" cy=\"113\" r=\"3.5\" fill=\"#0F172A\"/>\n    <path d=\"M 93 116 Q 96 118 99 116\" stroke=\"#7C2D12\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 92 116 Q 96 122 100 116 Z\" fill=\"#E11D48\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Thân hình giọt nước mặc âu phục tuxedo, bụng trắng phau tròn xoe, quàng khăn len sọc đỏ trắng ấm áp và chân màng cam.",
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-penguin\">\n  <defs>\n    <radialGradient id=\"penguin-dark\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"70%\" stop-color=\"#0F172A\"/>\n      <stop offset=\"100%\" stop-color=\"#020617\"/>\n    </radialGradient>\n    <radialGradient id=\"penguin-belly\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"90%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </radialGradient>\n    <radialGradient id=\"penguin-yellow\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FDE047\" stop-opacity=\"0.85\"/>\n      <stop offset=\"100%\" stop-color=\"#FDE047\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <!-- Pear-shaped Tuxedo Body & Flippers -->\n  <g class=\"pet-body\">\n    <!-- Left Flipper (Wing) -->\n    <g class=\"penguin-flipper-l\" style=\"transform-origin: 52px 115px;\">\n      <ellipse cx=\"44\" cy=\"130\" rx=\"12\" ry=\"26\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2\" transform=\"rotate(25 44 130)\"/>\n    </g>\n    <!-- Right Flipper (Wing) -->\n    <g class=\"penguin-flipper-r\" style=\"transform-origin: 148px 115px;\">\n      <ellipse cx=\"156\" cy=\"130\" rx=\"12\" ry=\"26\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2\" transform=\"rotate(-25 156 130)\"/>\n    </g>\n    <!-- Bright Orange Webbed Feet -->\n    <ellipse cx=\"78\" cy=\"182\" rx=\"18\" ry=\"9\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"2\"/>\n    <ellipse cx=\"122\" cy=\"182\" rx=\"18\" ry=\"9\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"2\"/>\n    <!-- Main Oval Body -->\n    <ellipse cx=\"100\" cy=\"135\" rx=\"54\" ry=\"48\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2.5\"/>\n    <!-- Snowy White Round Belly -->\n    <ellipse cx=\"100\" cy=\"142\" rx=\"36\" ry=\"36\" fill=\"url(#penguin-belly)\"/>\n  </g>\n  <!-- Penguin Head with Beak & Cheerful Cheeks -->\n  <g class=\"pet-head\">\n    <!-- Head Oval -->\n    <ellipse cx=\"100\" cy=\"80\" rx=\"42\" ry=\"36\" fill=\"url(#penguin-dark)\" stroke=\"#020617\" stroke-width=\"2.2\"/>\n    <!-- Yellow Emperor Penguin Auroral Cheek Blushes -->\n    <ellipse cx=\"64\" cy=\"82\" rx=\"14\" ry=\"12\" fill=\"url(#penguin-yellow)\"/>\n    <ellipse cx=\"136\" cy=\"82\" rx=\"14\" ry=\"12\" fill=\"url(#penguin-yellow)\"/>\n    <!-- White Eye Mask -->\n    <ellipse cx=\"78\" cy=\"78\" rx=\"14\" ry=\"16\" fill=\"#FFFFFF\"/>\n    <ellipse cx=\"122\" cy=\"78\" rx=\"14\" ry=\"16\" fill=\"#FFFFFF\"/>\n    <!-- Twinkling Eyes -->\n    <g class=\"pet-eyes-open\">\n      <ellipse cx=\"80\" cy=\"78\" rx=\"8\" ry=\"10\" fill=\"#0F172A\"/>\n      <circle cx=\"78\" cy=\"75\" r=\"3.5\" fill=\"#FFFFFF\"/>\n      <circle cx=\"83\" cy=\"82\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      \n      <ellipse cx=\"120\" cy=\"78\" rx=\"8\" ry=\"10\" fill=\"#0F172A\"/>\n      <circle cx=\"118\" cy=\"75\" r=\"3.5\" fill=\"#FFFFFF\"/>\n      <circle cx=\"123\" cy=\"82\" r=\"1.5\" fill=\"#FFFFFF\"/>\n    </g>\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 72 78 Q 80 68 88 78\" stroke=\"#0F172A\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 112 78 Q 120 68 128 78\" stroke=\"#0F172A\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <!-- Rosy Cheek Dots -->\n    <ellipse cx=\"62\" cy=\"92\" rx=\"8\" ry=\"5.5\" fill=\"#FDA4AF\" opacity=\"0.6\" class=\"pet-blush\"/>\n    <ellipse cx=\"138\" cy=\"92\" rx=\"8\" ry=\"5.5\" fill=\"#FDA4AF\" opacity=\"0.6\" class=\"pet-blush\"/>\n    <!-- Orange Beak -->\n    <polygon points=\"94,86 106,86 100,98\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"1.8\"/>\n    <!-- Cozy Red Striped Winter Scarf -->\n    <path d=\"M 64 108 Q 100 120 136 108\" stroke=\"#DC2626\" stroke-width=\"12\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M 64 108 Q 100 120 136 108\" stroke=\"#FFFFFF\" stroke-width=\"12\" stroke-dasharray=\"8,8\" stroke-linecap=\"round\" fill=\"none\"/>\n    <!-- Scarf Dangle Tail with Tassels -->\n    <g transform=\"translate(118, 114) rotate(15)\">\n      <rect x=\"0\" y=\"0\" width=\"14\" height=\"26\" rx=\"3\" fill=\"#DC2626\"/>\n      <line x1=\"0\" y1=\"8\" x2=\"14\" y2=\"8\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n      <line x1=\"0\" y1=\"18\" x2=\"14\" y2=\"18\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n      <line x1=\"2\" y1=\"26\" x2=\"2\" y2=\"30\" stroke=\"#FDE047\" stroke-width=\"2\"/>\n      <line x1=\"7\" y1=\"26\" x2=\"7\" y2=\"30\" stroke=\"#FDE047\" stroke-width=\"2\"/>\n      <line x1=\"12\" y1=\"26\" x2=\"12\" y2=\"30\" stroke=\"#FDE047\" stroke-width=\"2\"/>\n    </g>\n  </g>\n</svg>"
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
    "description": "Thân hình củ khoai tây khổng lồ trầm mặc, mõm vuông hiền từ, quả quýt Yuzu vàng rực cân bằng trên đỉnh đầu trong sự tĩnh lặng.",
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
    "svg": "<svg viewBox=\"0 0 200 200\" class=\"pet-svg-character\" id=\"pet-svg-capybara\">\n  <defs>\n    <radialGradient id=\"capy-fur\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#D97706\"/>\n      <stop offset=\"60%\" stop-color=\"#B45309\"/>\n      <stop offset=\"100%\" stop-color=\"#78350F\"/>\n    </radialGradient>\n    <radialGradient id=\"capy-snout\" cx=\"50%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#92400E\"/>\n      <stop offset=\"100%\" stop-color=\"#451A03\"/>\n    </radialGradient>\n    <radialGradient id=\"yuzu-grad\" cx=\"40%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FEF08A\"/>\n      <stop offset=\"60%\" stop-color=\"#FACC15\"/>\n      <stop offset=\"100%\" stop-color=\"#EAB308\"/>\n    </radialGradient>\n  </defs>\n  <!-- Barrel-shaped Zen Body -->\n  <g class=\"pet-body\">\n    <!-- Chill Loaf Paws -->\n    <ellipse cx=\"68\" cy=\"180\" rx=\"16\" ry=\"10\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <ellipse cx=\"132\" cy=\"180\" rx=\"16\" ry=\"10\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <!-- Huge Round Loaf Body -->\n    <ellipse cx=\"100\" cy=\"148\" rx=\"60\" ry=\"42\" fill=\"url(#capy-fur)\" stroke=\"#78350F\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"100\" cy=\"154\" rx=\"40\" ry=\"28\" fill=\"#B45309\" opacity=\"0.6\"/>\n  </g>\n  <!-- Distinctive Rectangular/Blocky Capybara Head -->\n  <g class=\"pet-head\">\n    <!-- Tiny Round Ears (Twitching lazily) -->\n    <g class=\"pet-ears capy-ears\" style=\"transform-origin: 100px 75px;\">\n      <ellipse cx=\"54\" cy=\"62\" rx=\"8\" ry=\"7\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"54\" cy=\"62\" rx=\"4\" ry=\"4\" fill=\"#B45309\"/>\n      <ellipse cx=\"146\" cy=\"62\" rx=\"8\" ry=\"7\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n      <ellipse cx=\"146\" cy=\"62\" rx=\"4\" ry=\"4\" fill=\"#B45309\"/>\n    </g>\n    <!-- Broad Rounded Head Base -->\n    <path d=\"M 64 68 C 64 56 136 56 136 68 C 146 88 142 124 128 128 C 100 134 72 134 72 128 C 58 124 54 88 64 68 Z\" fill=\"url(#capy-fur)\" stroke=\"#78350F\" stroke-width=\"2.5\"/>\n    <!-- Broad Rounded Square Snout -->\n    <path d=\"M 76 96 C 76 86 124 86 124 96 C 126 116 118 126 100 126 C 82 126 74 116 76 96 Z\" fill=\"url(#capy-snout)\"/>\n    <!-- Tranquil Zen Slit Eyes (Chill State) -->\n    <g class=\"pet-eyes-open\">\n      <!-- Calm horizontal almond eyes -->\n      <path d=\"M 66 84 Q 76 80 86 84\" stroke=\"#451A03\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 84 Q 124 80 134 84\" stroke=\"#451A03\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"76\" cy=\"85\" r=\"2.2\" fill=\"#451A03\"/>\n      <circle cx=\"124\" cy=\"85\" r=\"2.2\" fill=\"#451A03\"/>\n    </g>\n    <!-- Ultra Happy Smiling Arch Eyes -->\n    <g class=\"pet-eyes-happy\">\n      <path d=\"M 66 85 Q 76 75 86 85\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 114 85 Q 124 75 134 85\" stroke=\"#451A03\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n    <!-- Rosy Cheeks -->\n    <ellipse cx=\"58\" cy=\"98\" rx=\"8\" ry=\"5\" fill=\"#FB7185\" opacity=\"0.5\" class=\"pet-blush\"/>\n    <ellipse cx=\"142\" cy=\"98\" rx=\"8\" ry=\"5\" fill=\"#FB7185\" opacity=\"0.5\" class=\"pet-blush\"/>\n    <!-- Distinctive Broad Capybara Nostrils & Mouth -->\n    <ellipse cx=\"94\" cy=\"106\" rx=\"2.5\" ry=\"4\" fill=\"#1C1917\"/>\n    <ellipse cx=\"106\" cy=\"106\" rx=\"2.5\" ry=\"4\" fill=\"#1C1917\"/>\n    <path d=\"M 96 114 Q 100 117 104 114\" stroke=\"#1C1917\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\" class=\"pet-mouth-default\"/>\n    <g class=\"pet-mouth-happy\">\n      <path d=\"M 94 114 Q 100 120 106 114 Z\" fill=\"#991B1B\"/>\n    </g>\n    <!-- Iconic Yellow Yuzu Fruit with Green Leaf on Head -->\n    <g class=\"capy-yuzu\" style=\"transform-origin: 100px 50px;\">\n      <!-- Green Stem & Leaf -->\n      <ellipse cx=\"106\" cy=\"38\" rx=\"6\" ry=\"3.5\" fill=\"#15803D\" transform=\"rotate(-20 106 38)\"/>\n      <path d=\"M 100 42 Q 101 36 103 35\" stroke=\"#14532D\" stroke-width=\"2\" fill=\"none\"/>\n      <!-- Bright Round Yuzu -->\n      <circle cx=\"100\" cy=\"50\" r=\"14\" fill=\"url(#yuzu-grad)\" stroke=\"#CA8A04\" stroke-width=\"1.8\"/>\n      <!-- Yuzu Dimple & Highlight -->\n      <circle cx=\"96\" cy=\"46\" r=\"3.5\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n      <circle cx=\"100\" cy=\"42\" r=\"1.5\" fill=\"#A16207\"/>\n    </g>\n  </g>\n</svg>"
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
