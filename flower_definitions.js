/**
 * FLOWER GARDEN DEFINITIONS ("VƯỜN HOA CỦA CÔ NGUYỆT")
 * Rich collection of 10 lovable flowers with distinct growth stages,
 * uplifting meanings, SVG petal art, and harmonic color palettes.
 */
(function(root) {
  'use strict';

  const FLOWER_CATALOG = {
    "sunflower": {
      "id": "sunflower",
      "name": "Hoa Hướng Dương",
      "scientific": "Helianthus annuus",
      "icon": "🌻",
      "rarity": "Phổ biến",
      "color": "#F59E0B",
      "accentColor": "#D97706",
      "bgGlow": "rgba(245, 158, 11, 0.25)",
      "meaning": "Luôn hướng về ánh mặt trời, rực rỡ, kiên cường và tràn đầy năng lượng tích cực!",
      "quote": "Mỗi ngày mới là một cơ hội để cô Nguyệt tỏa sáng rực rỡ như hoa hướng dương! ☀️✨",
      "petals": 12,
      "growthDifficulty": "Dễ trồng",
      "bloomSvg": function() {
        return `
          <!-- Sunflower Bloom -->
          <g class="flower-bloom-head" style="transform-origin: 100px 75px;">
            <!-- Outer Golden Petals (12 petals radiating) -->
            <g class="sunflower-petals">
              ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => `
                <path d="M 100 75 C 93 50 96 30 100 22 C 104 30 107 50 100 75 Z"
                      fill="#FBBF24" stroke="#D97706" stroke-width="1.2"
                      transform="rotate(${deg} 100 75)"/>
              `).join('')}
              ${[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map(deg => `
                <path d="M 100 75 C 95 55 97 38 100 32 C 103 38 105 55 100 75 Z"
                      fill="#F59E0B" opacity="0.9"
                      transform="rotate(${deg} 100 75)"/>
              `).join('')}
            </g>
            <!-- Center Seed Disc with Cute Kawaii Face -->
            <circle cx="100" cy="75" r="22" fill="#78350F" stroke="#451A03" stroke-width="2"/>
            <circle cx="100" cy="75" r="18" fill="#92400E"/>
            <!-- Texture dots -->
            <circle cx="93" cy="68" r="1.5" fill="#B45309"/>
            <circle cx="107" cy="68" r="1.5" fill="#B45309"/>
            <circle cx="100" cy="82" r="1.5" fill="#B45309"/>
            <circle cx="94" cy="78" r="1.2" fill="#B45309"/>
            <circle cx="106" cy="78" r="1.2" fill="#B45309"/>
            <!-- Cute Kawaii Eyes and Smile -->
            <circle cx="93" cy="73" r="2.8" fill="#FFFFFF"/>
            <circle cx="93" cy="73" r="1.8" fill="#1C1917"/>
            <circle cx="92" cy="72" r="0.8" fill="#FFFFFF"/>
            <circle cx="107" cy="73" r="2.8" fill="#FFFFFF"/>
            <circle cx="107" cy="73" r="1.8" fill="#1C1917"/>
            <circle cx="106" cy="72" r="0.8" fill="#FFFFFF"/>
            <!-- Rosy Cheeks -->
            <ellipse cx="88" cy="77" rx="2.5" ry="1.5" fill="#FB7185" opacity="0.8"/>
            <ellipse cx="112" cy="77" rx="2.5" ry="1.5" fill="#FB7185" opacity="0.8"/>
            <!-- Sweet Smile -->
            <path d="M 97 78 Q 100 81 103 78" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" fill="none"/>
          </g>
        `;
      }
    },

    "tulip": {
      "id": "tulip",
      "name": "Hoa Tulip Hồng",
      "scientific": "Tulipa gesneriana",
      "icon": "🌷",
      "rarity": "Phổ biến",
      "color": "#EC4899",
      "accentColor": "#DB2777",
      "bgGlow": "rgba(236, 72, 153, 0.25)",
      "meaning": "Dịu dàng, thanh khiết, tượng trưng cho tình yêu thương và sự gắn kết chân thành.",
      "quote": "Bông tulip dịu dàng như nụ cười ngọt ngào của cô Nguyệt mỗi khi vào lớp! 💖🌷",
      "growthDifficulty": "Dễ trồng",
      "bloomSvg": function() {
        return `
          <!-- Tulip Bloom -->
          <g class="flower-bloom-head" style="transform-origin: 100px 75px;">
            <!-- Outer Cup Petals -->
            <path d="M 100 90 C 70 85 65 50 82 35 C 92 48 98 70 100 90 Z"
                  fill="#F472B6" stroke="#BE123C" stroke-width="1.5"/>
            <path d="M 100 90 C 130 85 135 50 118 35 C 108 48 102 70 100 90 Z"
                  fill="#F472B6" stroke="#BE123C" stroke-width="1.5"/>
            <!-- Center Main Petal -->
            <path d="M 82 45 C 90 30 110 30 118 45 C 115 75 100 92 100 92 C 100 92 85 75 82 45 Z"
                  fill="#FB7185" stroke="#BE123C" stroke-width="1.5"/>
            <!-- Front Petal Overlay with Highlights -->
            <path d="M 88 52 C 94 40 106 40 112 52 C 108 78 100 90 100 90 C 100 90 92 78 88 52 Z"
                  fill="#FDA4AF" opacity="0.85"/>
            <!-- Kawaii Face on Tulip -->
            <circle cx="95" cy="65" r="2.2" fill="#881337"/>
            <circle cx="94" cy="64" r="0.7" fill="#FFFFFF"/>
            <circle cx="105" cy="65" r="2.2" fill="#881337"/>
            <circle cx="104" cy="64" r="0.7" fill="#FFFFFF"/>
            <ellipse cx="91" cy="68" rx="2" ry="1.2" fill="#F43F5E" opacity="0.7"/>
            <ellipse cx="109" cy="68" rx="2" ry="1.2" fill="#F43F5E" opacity="0.7"/>
            <path d="M 98 68 Q 100 70.5 102 68" stroke="#881337" stroke-width="1.2" stroke-linecap="round" fill="none"/>
          </g>
        `;
      }
    },

    "rose": {
      "id": "rose",
      "name": "Hoa Hồng Đỏ",
      "scientific": "Rosa rubiginosa",
      "icon": "🌹",
      "rarity": "Đặc biệt",
      "color": "#E11D48",
      "accentColor": "#BE123C",
      "bgGlow": "rgba(225, 29, 72, 0.25)",
      "meaning": "Kiêu sa, nhiệt huyết, nồng thắm và niềm say mê bất tận trong công việc giảng dạy.",
      "quote": "Hoa hồng rực rỡ tôn vinh tâm huyết và tình cảm ấm áp cô dành cho từng thế hệ học trò! 🌹✨",
      "growthDifficulty": "Vừa phải",
      "bloomSvg": function() {
        return `
          <!-- Rose Bloom -->
          <g class="flower-bloom-head" style="transform-origin: 100px 75px;">
            <!-- Outer Velvet Petals -->
            <path d="M 100 92 C 60 90 55 58 75 42 C 85 58 95 80 100 92 Z" fill="#BE123C" stroke="#881337" stroke-width="1.5"/>
            <path d="M 100 92 C 140 90 145 58 125 42 C 115 58 105 80 100 92 Z" fill="#BE123C" stroke="#881337" stroke-width="1.5"/>
            <!-- Mid Petals -->
            <path d="M 72 56 C 75 38 125 38 128 56 C 122 84 100 92 100 92 C 100 92 78 84 72 56 Z" fill="#E11D48" stroke="#9F1239" stroke-width="1.5"/>
            <!-- Inner Spiral Core -->
            <path d="M 85 50 C 90 40 110 40 115 50 C 112 68 100 75 100 75 C 100 75 88 68 85 50 Z" fill="#F43F5E"/>
            <path d="M 92 48 Q 100 42 108 48 Q 104 56 100 56 Q 96 56 92 48" fill="#FDA4AF" stroke="#BE123C" stroke-width="1"/>
            <!-- Morning Dewdrop -->
            <ellipse cx="112" cy="62" rx="2.5" ry="3.5" fill="#E0F2FE" opacity="0.9"/>
            <circle cx="111" cy="61" r="1" fill="#FFFFFF"/>
            <!-- Happy Smiling Face -->
            <path d="M 94 62 Q 97 59 100 62" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" fill="none"/>
            <path d="M 100 62 Q 103 59 106 62" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" fill="none"/>
            <ellipse cx="91" cy="65" rx="1.8" ry="1" fill="#FFE4E6"/>
            <ellipse cx="109" cy="65" rx="1.8" ry="1" fill="#FFE4E6"/>
          </g>
        `;
      }
    },

    "lotus": {
      "id": "lotus",
      "name": "Hoa Sen Hồng",
      "scientific": "Nelumbo nucifera",
      "icon": "🪷",
      "rarity": "Đặc biệt",
      "color": "#F472B6",
      "accentColor": "#EC4899",
      "bgGlow": "rgba(244, 114, 182, 0.25)",
      "meaning": "Thanh cao, an yên, tâm hồn tĩnh lặng và lan tỏa sự bình an đến mọi người xung quanh.",
      "quote": "Gần bùn mà chẳng hôi tanh mùi bùn — thanh tao, an yên và thuần khiết như hoa sen! 🪷🍃",
      "growthDifficulty": "Vừa phải",
      "bloomSvg": function() {
        return `
          <!-- Lotus Bloom -->
          <g class="flower-bloom-head" style="transform-origin: 100px 75px;">
            <!-- Outer Lateral Petals -->
            <path d="M 100 88 C 65 85 45 65 52 48 C 68 55 85 75 100 88 Z" fill="#FBCFE8" stroke="#DB2777" stroke-width="1.4"/>
            <path d="M 100 88 C 135 85 155 65 148 48 C 132 55 115 75 100 88 Z" fill="#FBCFE8" stroke="#DB2777" stroke-width="1.4"/>
            <!-- Mid Petals -->
            <path d="M 100 88 C 75 80 62 55 74 38 C 88 50 96 72 100 88 Z" fill="#F472B6" stroke="#BE123C" stroke-width="1.4"/>
            <path d="M 100 88 C 125 80 138 55 126 38 C 112 50 104 72 100 88 Z" fill="#F472B6" stroke="#BE123C" stroke-width="1.4"/>
            <!-- Center Standing Petal -->
            <path d="M 100 24 C 92 45 90 75 100 88 C 110 75 108 45 100 24 Z" fill="#FFFFFF" stroke="#DB2777" stroke-width="1.4"/>
            <path d="M 100 32 C 95 48 94 72 100 85 C 106 72 105 48 100 32 Z" fill="#FDF2F8"/>
            <!-- Golden Stamen Radiance -->
            <ellipse cx="100" cy="72" rx="9" ry="5" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
            <!-- Cute Peaceful Face -->
            <path d="M 95 62 Q 97 60 99 62" stroke="#831843" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <path d="M 101 62 Q 103 60 105 62" stroke="#831843" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <circle cx="100" cy="66" r="1.2" fill="#F43F5E"/>
          </g>
        `;
      }
    },

    "daisy": {
      "id": "daisy",
      "name": "Hoa Cúc Họa Mi",
      "scientific": "Bellis perennis",
      "icon": "🌼",
      "rarity": "Phổ biến",
      "color": "#FBBF24",
      "accentColor": "#E2E8F0",
      "bgGlow": "rgba(251, 191, 36, 0.25)",
      "meaning": "Nhẹ nhàng, trong sáng, ngây thơ và mang lại niềm vui giản dị mỗi ngày.",
      "quote": "Bé cúc họa mi trắng trong xinh xắn như lời chúc đầu ngày bình yên gửi đến cô Nguyệt! 🌼🤍",
      "growthDifficulty": "Dễ trồng",
      "bloomSvg": function() {
        return `
          <!-- Daisy Bloom -->
          <g class="flower-bloom-head" style="transform-origin: 100px 75px;">
            <!-- Pure White Radiating Petals (16 petals) -->
            <g class="daisy-petals">
              ${[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(deg => `
                <path d="M 100 75 C 96 55 97 32 100 24 C 103 32 104 55 100 75 Z"
                      fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"
                      transform="rotate(${deg} 100 75)"/>
              `).join('')}
            </g>
            <!-- Sunny Yellow Center -->
            <circle cx="100" cy="75" r="17" fill="#FBBF24" stroke="#D97706" stroke-width="1.8"/>
            <circle cx="100" cy="75" r="14" fill="#F59E0B"/>
            <!-- Sparkly Anime Eyes -->
            <circle cx="94" cy="73" r="2.5" fill="#1C1917"/>
            <circle cx="93.5" cy="72" r="1" fill="#FFFFFF"/>
            <circle cx="106" cy="73" r="2.5" fill="#1C1917"/>
            <circle cx="105.5" cy="72" r="1" fill="#FFFFFF"/>
            <!-- Rosy Cheeks -->
            <ellipse cx="90" cy="77" rx="2.5" ry="1.5" fill="#FB7185" opacity="0.8"/>
            <ellipse cx="110" cy="77" rx="2.5" ry="1.5" fill="#FB7185" opacity="0.8"/>
            <!-- Cute Open Smile :D -->
            <path d="M 97 76 Q 100 81 103 76 Z" fill="#DC2626"/>
            <ellipse cx="100" cy="78" rx="1.5" ry="1" fill="#FDA4AF"/>
          </g>
        `;
      }
    },

    "cherry": {
      "id": "cherry",
      "name": "Hoa Anh Đào",
      "scientific": "Prunus serrulata",
      "icon": "🌸",
      "rarity": "Hiếm",
      "color": "#F472B6",
      "accentColor": "#EC4899",
      "bgGlow": "rgba(244, 114, 182, 0.3)",
      "meaning": "Ngọt ngào, khởi đầu may mắn, thanh xuân tươi đẹp và ước mơ nở hoa.",
      "quote": "Mùa xuân luôn ở lại trong tim cô với sắc hoa anh đào rạng rỡ và dịu ngọt! 🌸✨",
      "growthDifficulty": "Cần chăm chút",
      "bloomSvg": function() {
        return `
          <!-- Cherry Blossom Sakura -->
          <g class="flower-bloom-head" style="transform-origin: 100px 75px;">
            <!-- 5 Heart-notched Petals -->
            <g class="sakura-petals">
              ${[0, 72, 144, 216, 288].map(deg => `
                <path d="M 100 75 C 80 50 82 28 94 24 C 98 28 100 32 100 32 C 100 32 102 28 106 24 C 118 28 120 50 100 75 Z"
                      fill="#FCE7F3" stroke="#F472B6" stroke-width="1.3"
                      transform="rotate(${deg} 100 75)"/>
              `).join('')}
            </g>
            <!-- Center Star and Stamens -->
            <circle cx="100" cy="75" r="8" fill="#F43F5E" opacity="0.8"/>
            ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => `
              <line x1="100" y1="75" x2="100" y2="63" stroke="#BE123C" stroke-width="1" transform="rotate(${deg} 100 75)"/>
              <circle cx="100" cy="62" r="1.2" fill="#FBBF24" transform="rotate(${deg} 100 75)"/>
            `).join('')}
            <!-- Cute Face -->
            <circle cx="97" cy="74" r="1.5" fill="#4C0519"/>
            <circle cx="103" cy="74" r="1.5" fill="#4C0519"/>
            <path d="M 98 77 Q 100 79 102 77" stroke="#4C0519" stroke-width="1" stroke-linecap="round" fill="none"/>
          </g>
        `;
      }
    },

    "lavender": {
      "id": "lavender",
      "name": "Hoa Oải Hương",
      "scientific": "Lavandula angustifolia",
      "icon": "🌾",
      "rarity": "Hiếm",
      "color": "#8B5CF6",
      "accentColor": "#7C3AED",
      "bgGlow": "rgba(139, 92, 246, 0.25)",
      "meaning": "Thư giãn, xoa dịu mệt mỏi, hương thơm thanh khiết mang lại giấc ngủ ngon và bình yên.",
      "quote": "Hương hoa oải hương dịu nhẹ xua tan mọi âu lo, giúp cô giáo luôn thư thái và nhẹ lòng! 💜🌾",
      "growthDifficulty": "Cần chăm chút",
      "bloomSvg": function() {
        return `
          <!-- Lavender Bloom Spike -->
          <g class="flower-bloom-head" style="transform-origin: 100px 75px;">
            <!-- Vertical Spikes of Purple Florets -->
            <path d="M 100 95 L 100 25" stroke="#15803D" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Tiered Florets -->
            ${[30, 42, 54, 66, 78, 90].map((y, i) => `
              <g transform="translate(0, 0)">
                <ellipse cx="91" cy="${y}" rx="6" ry="4" fill="#A78BFA" stroke="#6D28D9" stroke-width="1" transform="rotate(-20 91 ${y})"/>
                <ellipse cx="109" cy="${y}" rx="6" ry="4" fill="#A78BFA" stroke="#6D28D9" stroke-width="1" transform="rotate(20 109 ${y})"/>
                <circle cx="100" cy="${y - 3}" r="4" fill="#C4B5FD" stroke="#7C3AED" stroke-width="1"/>
              </g>
            `).join('')}
            <!-- Top bud crown -->
            <ellipse cx="100" cy="22" rx="4" ry="5" fill="#DDD6FE" stroke="#7C3AED" stroke-width="1"/>
            <!-- Cute Face on central tier -->
            <circle cx="98" cy="53" r="1.4" fill="#4C1D95"/>
            <circle cx="102" cy="53" r="1.4" fill="#4C1D95"/>
            <path d="M 98 56 Q 100 58 102 56" stroke="#4C1D95" stroke-width="1" stroke-linecap="round" fill="none"/>
          </g>
        `;
      }
    },

    "clover": {
      "id": "clover",
      "name": "Cỏ 4 Lá May Mắn",
      "scientific": "Trifolium repens",
      "icon": "🍀",
      "rarity": "Thần kỳ",
      "color": "#10B981",
      "accentColor": "#059669",
      "bgGlow": "rgba(16, 185, 129, 0.3)",
      "meaning": "May mắn, niềm tin, hy vọng và tình yêu vĩnh cửu. Báu vật diệu kỳ của thiên nhiên!",
      "quote": "Bé cỏ 4 lá mang đến vạn sự may mắn và mọi điều ước thành hiện thực cho cô Nguyệt! 🍀🌟",
      "growthDifficulty": "Hiếm có",
      "bloomSvg": function() {
        return `
          <!-- 4-Leaf Lucky Clover -->
          <g class="flower-bloom-head" style="transform-origin: 100px 75px;">
            <!-- 4 Heart Shaped Emerald Leaves -->
            ${[0, 90, 180, 270].map(deg => `
              <path d="M 100 75 C 80 55 75 35 90 28 C 96 25 100 32 100 35 C 100 32 104 25 110 28 C 125 35 120 55 100 75 Z"
                    fill="#34D399" stroke="#047857" stroke-width="1.5"
                    transform="rotate(${deg} 100 75)"/>
              <!-- Inner Chevron Stripe -->
              <path d="M 94 48 Q 100 42 106 48" stroke="#A7F3D0" stroke-width="1.5" stroke-linecap="round" fill="none"
                    transform="rotate(${deg} 100 75)"/>
            `).join('')}
            <!-- Center Lucky Sparkle -->
            <circle cx="100" cy="75" r="4" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
            <circle cx="100" cy="75" r="2" fill="#FFFFFF"/>
            <!-- Winking Cute Face -->
            <path d="M 96 73 Q 98 71 100 73" stroke="#064E3B" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <circle cx="104" cy="73" r="1.2" fill="#064E3B"/>
            <path d="M 99 76 Q 100 77.5 102 76" stroke="#064E3B" stroke-width="1" stroke-linecap="round" fill="none"/>
          </g>
        `;
      }
    }
  };

  /**
   * Universal Pot & Stem Renderer
   * Generates complete SVG for any flower at any of the 4 stages.
   */
  function renderFlowerPotSvg(flowerId, progress) {
    const flower = FLOWER_CATALOG[flowerId] || FLOWER_CATALOG.sunflower;
    const p = Math.max(0, Math.min(100, progress || 0));

    // Determine Stage
    let stage = 1;
    if (p >= 100) stage = 4;
    else if (p >= 60) stage = 3;
    else if (p >= 25) stage = 2;

    // Stem height calculation based on progress
    const stemTopY = 145 - (p * 0.7); // from 145 down to 75

    return `
<svg viewBox="0 0 200 200" class="garden-pot-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Ceramic Terracotta Pot Gradients -->
    <linearGradient id="pot-body-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FB923C"/>
      <stop offset="35%" stop-color="#FDBA74"/>
      <stop offset="70%" stop-color="#FB923C"/>
      <stop offset="100%" stop-color="#EA580C"/>
    </linearGradient>
    <linearGradient id="pot-rim-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FDBA74"/>
      <stop offset="50%" stop-color="#FED7AA"/>
      <stop offset="100%" stop-color="#FB923C"/>
    </linearGradient>
    <!-- Potting Soil Gradient -->
    <radialGradient id="soil-grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#78350F"/>
      <stop offset="70%" stop-color="#451A03"/>
      <stop offset="100%" stop-color="#271003"/>
    </radialGradient>
    <!-- Soft Contact Shadow -->
    <radialGradient id="pot-ground-shadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#371E14" stop-opacity="0.25"/>
      <stop offset="65%" stop-color="#371E14" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#371E14" stop-opacity="0"/>
    </radialGradient>
    <!-- Plant Stem Gradient -->
    <linearGradient id="stem-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#16A34A"/>
      <stop offset="50%" stop-color="#4ADE80"/>
      <stop offset="100%" stop-color="#15803D"/>
    </linearGradient>
  </defs>

  <!-- Ground Ambient Contact Shadow beneath Pot -->
  <ellipse cx="100" cy="188" rx="55" ry="9" fill="url(#pot-ground-shadow)"/>

  <!-- ==================== STAGE-DEPENDENT PLANT LAYER ==================== -->
  <g class="garden-plant-stage stage-${stage}">
    ${stage === 1 ? `
      <!-- STAGE 1: SEED IN SOIL (0% - 24%) -->
      <g class="plant-stage-seed" style="transform-origin: 100px 145px;">
        <!-- Little mound of fresh soil -->
        <ellipse cx="100" cy="144" rx="14" ry="5" fill="#92400E"/>
        <!-- Golden Seed sprouting -->
        <ellipse cx="100" cy="142" rx="4.5" ry="6" fill="#D97706" stroke="#78350F" stroke-width="1"/>
        <path d="M 98 140 Q 100 137 102 140" stroke="#FEF08A" stroke-width="1.2" fill="none"/>
        <!-- Tiny Green Micro-Sprout Tip -->
        <path d="M 100 137 C 98 132 101 129 103 128 C 103 131 101 135 100 137 Z"
              fill="#4ADE80" stroke="#16A34A" stroke-width="0.8" class="seed-sprout-pulse"/>
        <!-- Sparkle of life -->
        <circle cx="106" cy="130" r="1.2" fill="#FBBF24" opacity="0.9"/>
      </g>
    ` : ''}

    ${stage === 2 ? `
      <!-- STAGE 2: FRESH SPROUT (25% - 59%) -->
      <g class="plant-stage-sprout anim-sprout-sway" style="transform-origin: 100px 145px;">
        <!-- Growing Young Stem -->
        <path d="M 100 145 C 99 135 101 120 100 108"
              stroke="url(#stem-grad)" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <!-- Left Baby Leaf -->
        <path d="M 99 122 C 82 120 78 108 84 104 C 92 108 97 116 99 122 Z"
              fill="#22C55E" stroke="#15803D" stroke-width="1.2"/>
        <path d="M 85 107 Q 92 114 98 120" stroke="#86EFAC" stroke-width="0.8" fill="none"/>
        <!-- Right Baby Leaf -->
        <path d="M 101 116 C 118 114 122 102 116 98 C 108 102 103 110 101 116 Z"
              fill="#22C55E" stroke="#15803D" stroke-width="1.2"/>
        <path d="M 115 101 Q 108 108 102 114" stroke="#86EFAC" stroke-width="0.8" fill="none"/>
        <!-- Tiny Top Leaflet -->
        <ellipse cx="100" cy="106" rx="3.5" ry="5.5" fill="#4ADE80" stroke="#16A34A" stroke-width="1"/>
      </g>
    ` : ''}

    ${stage === 3 ? `
      <!-- STAGE 3: TALL BUDDING PLANT (60% - 99%) -->
      <g class="plant-stage-bud anim-bud-breathe" style="transform-origin: 100px 145px;">
        <!-- Main Strong Stem -->
        <path d="M 100 145 C 98 125 102 105 100 82"
              stroke="url(#stem-grad)" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <!-- Lower Left Leaf -->
        <path d="M 99 130 C 72 128 66 112 76 106 C 88 112 96 122 99 130 Z"
              fill="#16A34A" stroke="#14532D" stroke-width="1.3"/>
        <!-- Lower Right Leaf -->
        <path d="M 101 122 C 128 120 134 104 124 98 C 112 104 104 114 101 122 Z"
              fill="#16A34A" stroke="#14532D" stroke-width="1.3"/>
        <!-- Upper Leaf Pair -->
        <path d="M 99 104 C 84 98 80 88 88 84 C 95 88 98 96 99 104 Z"
              fill="#22C55E" stroke="#15803D" stroke-width="1.2"/>
        <path d="M 101 98 C 116 92 120 82 112 78 C 105 82 102 90 101 98 Z"
              fill="#22C55E" stroke="#15803D" stroke-width="1.2"/>
        <!-- Swelling Colorful Flower Bud -->
        <g class="flower-bud-wrapper" style="transform-origin: 100px 80px;">
          <!-- Green Calyx Sepals wrapping bud -->
          <path d="M 100 85 C 90 82 92 68 96 64 C 97 72 99 80 100 85 Z" fill="#15803D"/>
          <path d="M 100 85 C 110 82 108 68 104 64 C 103 72 101 80 100 85 Z" fill="#15803D"/>
          <!-- Peeking Petal Color -->
          <ellipse cx="100" cy="72" rx="8" ry="11" fill="${flower.color}" stroke="${flower.accentColor}" stroke-width="1.2"/>
          <path d="M 96 74 Q 100 66 104 74" fill="${flower.accentColor}" opacity="0.6"/>
          <!-- Calyx Base Cup -->
          <path d="M 94 80 C 94 85 106 85 106 80 C 104 84 96 84 94 80 Z" fill="#14532D"/>
        </g>
      </g>
    ` : ''}

    ${stage === 4 ? `
      <!-- STAGE 4: FULL BLOOM MASTERPIECE (100%) -->
      <g class="plant-stage-bloom anim-bloom-sway" style="transform-origin: 100px 145px;">
        <!-- Tall Stately Stem -->
        <path d="M 100 145 C 98 125 102 100 100 75"
              stroke="url(#stem-grad)" stroke-width="5" stroke-linecap="round" fill="none"/>
        <!-- Lush Foliage Leaves -->
        <path d="M 98 132 C 68 128 62 110 74 104 C 86 110 95 122 98 132 Z"
              fill="#16A34A" stroke="#14532D" stroke-width="1.4"/>
        <path d="M 102 120 C 132 116 138 98 126 92 C 114 98 105 110 102 120 Z"
              fill="#16A34A" stroke="#14532D" stroke-width="1.4"/>
        <!-- Full Bloom Flower Head -->
        ${flower.bloomSvg()}

        <!-- Friendly Hovering Butterfly / Bumblebee -->
        <g class="garden-creature anim-creature-flutter" style="transform-origin: 135px 45px;">
          <!-- Butterfly Wing Left -->
          <ellipse cx="130" cy="40" rx="6" ry="8" fill="#F472B6" stroke="#BE123C" stroke-width="0.8" transform="rotate(-25 130 40)"/>
          <!-- Butterfly Wing Right -->
          <ellipse cx="140" cy="40" rx="6" ry="8" fill="#F472B6" stroke="#BE123C" stroke-width="0.8" transform="rotate(25 140 40)"/>
          <!-- Little Body -->
          <ellipse cx="135" cy="42" rx="1.5" ry="5" fill="#4C0519"/>
          <!-- Antennae -->
          <path d="M 134 38 Q 132 34 130 35 M 136 38 Q 138 34 140 35" stroke="#4C0519" stroke-width="0.8" fill="none"/>
        </g>
      </g>
    ` : ''}
  </g>

  <!-- ==================== CERAMIC FLOWER POT LAYER ==================== -->
  <g class="garden-pot-body" id="pot-body">
    <!-- Inner Dark Soil Surface (Oval) -->
    <ellipse cx="100" cy="145" rx="44" ry="11" fill="url(#soil-grad)"/>

    <!-- Pot Trapezoid Main Body -->
    <path d="M 58 145 L 68 182 C 70 185 130 185 132 182 L 142 145 Z"
          fill="url(#pot-body-grad)" stroke="#C2410C" stroke-width="2" stroke-linejoin="round"/>

    <!-- Subtle Pot Volume Shading Highlight -->
    <path d="M 72 146 L 78 181 C 82 183 95 183 96 183 L 94 146 Z"
          fill="#FED7AA" opacity="0.45"/>

    <!-- Cute Kawaii Pot Smiling Face -->
    <g class="pot-kawaii-face">
      <!-- Left Eye -->
      <ellipse cx="91" cy="164" rx="2.4" ry="3.2" fill="#7C2D12"/>
      <circle cx="90" cy="163" r="1" fill="#FFFFFF"/>
      <!-- Right Eye -->
      <ellipse cx="109" cy="164" rx="2.4" ry="3.2" fill="#7C2D12"/>
      <circle cx="108" cy="163" r="1" fill="#FFFFFF"/>
      <!-- Soft Rosy Cheeks -->
      <ellipse cx="85" cy="168" rx="3.5" ry="2" fill="#FB7185" opacity="0.75"/>
      <ellipse cx="115" cy="168" rx="3.5" ry="2" fill="#FB7185" opacity="0.75"/>
      <!-- Sweet Smile :3 -->
      <path d="M 97 167 Q 100 170.5 103 167"
            stroke="#7C2D12" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Pot Top Overhanging Rim (Rounded Lip) -->
    <rect x="52" y="137" width="96" height="13" rx="6.5"
          fill="url(#pot-rim-grad)" stroke="#C2410C" stroke-width="2"/>
    <!-- Rim Top Highlight -->
    <line x1="60" y1="140" x2="140" y2="140" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
  </g>
</svg>
    `;
  }

  // Export to global scope
  root.FLOWER_CATALOG = FLOWER_CATALOG;
  root.renderFlowerPotSvg = renderFlowerPotSvg;

})(typeof window !== 'undefined' ? window : global);
