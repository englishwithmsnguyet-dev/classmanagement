/**
 * LUCKY CLOVER GARDEN DEFINITIONS ("CHẬU CỎ 4 LÁ MAY MẮN CỦA CÔ NGUYỆT")
 * Dedicated exclusively to the magical 4-Leaf Lucky Clover (Cỏ 4 Lá May Mắn 🍀).
 * Features 4 handcrafted botanical SVG growth stages with emerald gradients,
 * twin-lobe M-curve chevrons, crystalline dewdrops, lucky ladybug (🐞),
 * fluttering fairy butterfly (🦋), and pure CSS animations.
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
      "bgGlow": "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(52, 211, 153, 0.15) 50%, transparent 75%)",
      "meaning": "May mắn ngập tràn, niềm tin, hy vọng và tình yêu vĩnh cửu. Món quà diệu kỳ của thiên nhiên ban tặng cho cô Nguyệt!",
      "quote": "Bé cỏ 4 lá mang đến vạn sự may mắn và mọi điều ước thành hiện thực cho cô Nguyệt! 🍀🌟",
      "growthDifficulty": "Hiếm có"
    }
  };

  /**
   * Universal Pot & Clover Plant Renderer
   * Generates complete SVG for Cỏ 4 Lá May Mắn across all 4 stages:
   * Stage 1 (0-24%): Mầm Ước Nguyện (Golden Seed & Fresh Emerald Shoot)
   * Stage 2 (25-59%): Cây Con 2 Lá Non (S-Curve Stem & 2 Welcoming Heart Leaves + Ladybug)
   * Stage 3 (60-99%): Cỏ 3 Lá Phát Triển (Tri-Leaf Shamrock with Glowing Golden Magic Bud)
   * Stage 4 (100%): Cỏ 4 Lá May Mắn Diệu Kỳ (Full 4-Leaf Bloom, Anime Sunburst Smile, Ladybug & Butterfly)
   */
  function renderFlowerPotSvg(flowerId, progress) {
    const p = Math.max(0, Math.min(100, progress || 0));

    let stage = 1;
    if (p >= 100) stage = 4;
    else if (p >= 60) stage = 3;
    else if (p >= 25) stage = 2;

    return `
<svg viewBox="0 0 240 240" class="clover-pot-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Soft Drop Shadows -->
    <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#064E3B" flood-opacity="0.16"/>
    </filter>
    <filter id="pot-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#7C2D12" flood-opacity="0.18"/>
    </filter>
    <filter id="glow-aura" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <!-- Emerald Leaf Gradients -->
    <linearGradient id="leaf-grad-main" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#065F46"/>
      <stop offset="25%" stop-color="#047857"/>
      <stop offset="60%" stop-color="#10B981"/>
      <stop offset="90%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#6EE7B7"/>
    </linearGradient>

    <!-- Stem Gradient -->
    <linearGradient id="stem-grad-v2" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="30%" stop-color="#059669"/>
      <stop offset="70%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient>

    <!-- Terracotta-Peach Pot Gradient -->
    <linearGradient id="pot-body-peach" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="20%" stop-color="#F97316"/>
      <stop offset="55%" stop-color="#FB923C"/>
      <stop offset="85%" stop-color="#FDBA74"/>
      <stop offset="100%" stop-color="#EA580C"/>
    </linearGradient>
    <linearGradient id="pot-rim-porcelain" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="25%" stop-color="#FED7AA"/>
      <stop offset="55%" stop-color="#FFFFFF"/>
      <stop offset="85%" stop-color="#FED7AA"/>
      <stop offset="100%" stop-color="#FB923C"/>
    </linearGradient>

    <!-- Rich Soil Gradient -->
    <radialGradient id="soil-dark-v2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#78350F"/>
      <stop offset="70%" stop-color="#451A03"/>
      <stop offset="100%" stop-color="#1F0A02"/>
    </radialGradient>

    <!-- Ground Contact Shadow -->
    <radialGradient id="ground-shadow-v2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#371E14" stop-opacity="0.32"/>
      <stop offset="60%" stop-color="#371E14" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#371E14" stop-opacity="0"/>
    </radialGradient>

    <!-- Golden Lucky Core -->
    <radialGradient id="gold-core-v2" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FEF08A"/>
      <stop offset="50%" stop-color="#FBBF24"/>
      <stop offset="85%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </radialGradient>

    <!-- Botanical Heart Clover Leaflet Unit -->
    <g id="leaf-unit">
      <!-- Outer Heart Shape -->
      <path d="M 0 0 C -22 -22 -35 -45 -20 -60 C -11 -67 -2 -60 0 -54 C 2 -60 11 -67 20 -60 C 35 -45 22 -22 0 0 Z"
            fill="url(#leaf-grad-main)" stroke="#047857" stroke-width="1.6" stroke-linejoin="round"/>
      <!-- Soft Depth Shading on Left Lobe -->
      <path d="M 0 0 C -15 -17 -25 -35 -20 -60 C -11 -67 -2 -60 0 -54 Z"
            fill="#064E3B" opacity="0.22"/>
      <!-- Botanical Chevron Watermark: Twin M-Curve following both lobes -->
      <path d="M -13 -32 Q -7 -40 0 -36 Q 7 -40 13 -32"
            stroke="#D1FAE5" stroke-width="2.6" stroke-linecap="round" fill="none" opacity="0.9"/>
      <path d="M -11 -32 Q -6 -39 0 -35.5 Q 6 -39 11 -32"
            stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.95"/>
      <!-- Subtle Center Vein Line -->
      <line x1="0" y1="0" x2="0" y2="-50" stroke="#047857" stroke-width="1.1" stroke-linecap="round" opacity="0.45"/>
      <!-- Specular Dewdrop with Light Highlight and Drop Shadow -->
      <ellipse cx="-10" cy="-45" rx="3" ry="3.8" fill="#FFFFFF" opacity="0.82"/>
      <circle cx="-11" cy="-46.5" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-10" cy="-42" rx="2.2" ry="1.1" fill="#047857" opacity="0.25"/>
    </g>
  </defs>

  <!-- Ground Contact Shadow beneath Pot -->
  <ellipse cx="120" cy="216" rx="68" ry="11" fill="url(#ground-shadow-v2)"/>

  <!-- ==================== PLANT STAGE LAYER ==================== -->
  <g transform="translate(120, 165)">
    <g class="${stage >= 2 ? 'anim-sway' : ''}">

      ${stage === 1 ? `
        <!-- STAGE 1: MẦM ƯỚC NGUYỆN (Seed & Fresh Green Sprout) -->
        <g>
          <!-- Soil Mound Base -->
          <ellipse cx="0" cy="0" rx="18" ry="6" fill="#5A280B"/>
          <!-- Golden Seed Cracking Open -->
          <ellipse cx="0" cy="-3" rx="7" ry="9" fill="url(#gold-core-v2)" stroke="#92400E" stroke-width="1.2"/>
          <path d="M -3 -6 Q 0 -10 3 -6" stroke="#FEF08A" stroke-width="1.5" fill="none"/>
          
          <!-- Twinkling Energy Rings -->
          <circle cx="0" cy="-12" r="14" fill="none" stroke="#FBBF24" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.8" class="anim-star"/>
          
          <!-- Curved Emerald Baby Shoot -->
          <path d="M 0 -8 C -5 -24 3 -40 7 -54" stroke="url(#stem-grad-v2)" stroke-width="4.2" stroke-linecap="round" fill="none"/>
          
          <!-- Unfurling Baby Heart Leaflet -->
          <g transform="translate(7, -54)" filter="url(#soft-shadow)">
            <path d="M 0 0 C -13 -13 -20 -28 -11 -37 C -5 -42 -1 -37 0 -33 C 1 -37 5 -42 11 -37 C 20 -28 13 -13 0 0 Z"
                  fill="url(#leaf-grad-main)" stroke="#047857" stroke-width="1.5"/>
            <path d="M -7 -22 Q 0 -16 7 -22" stroke="#D1FAE5" stroke-width="2" stroke-linecap="round" fill="none"/>
            <circle cx="4" cy="-26" r="2" fill="#FFFFFF"/>
          </g>
          
          <!-- Sparkles -->
          <path d="M -16 -32 L -14 -28 L -10 -26 L -14 -24 L -16 -20 L -18 -24 L -22 -26 L -18 -28 Z" fill="#FBBF24" class="anim-star"/>
          <path d="M 20 -46 L 21.5 -43 L 25 -41.5 L 21.5 -40 L 20 -37 L 18.5 -40 L 15 -41.5 L 18.5 -43 Z" fill="#34D399" class="anim-star"/>
        </g>
      ` : ''}

      ${stage === 2 ? `
        <!-- STAGE 2: CÂY CON 2 LÁ NON (S-Curved Stem & 2 Heart Leaves) -->
        <g>
          <!-- Elegant S-Curve Stem -->
          <path d="M 0 0 C -8 -26 6 -56 0 -82"
                stroke="url(#stem-grad-v2)" stroke-width="5" stroke-linecap="round" fill="none"/>
          
          <g transform="translate(0, -82)">
            <!-- Left Heart Leaf -->
            <g transform="rotate(-38)" filter="url(#soft-shadow)">
              <use href="#leaf-unit"/>
            </g>
            <!-- Right Heart Leaf -->
            <g transform="rotate(38)" filter="url(#soft-shadow)">
              <use href="#leaf-unit"/>
            </g>

            <!-- Center Golden Node -->
            <circle cx="0" cy="0" r="5.5" fill="url(#gold-core-v2)" stroke="#92400E" stroke-width="1.3"/>
            <circle cx="0" cy="0" r="2.8" fill="#FEF08A"/>
          </g>

          <!-- Little Baby Ladybug sitting on Pot Rim -->
          <g transform="translate(38, -3) scale(0.95)">
            <ellipse cx="0" cy="0" rx="4.5" ry="5.5" fill="#EF4444" stroke="#991B1B" stroke-width="0.8"/>
            <circle cx="0" cy="-4.2" r="2.4" fill="#18181B"/>
            <circle cx="-1.6" cy="-0.6" r="1" fill="#18181B"/>
            <circle cx="1.6" cy="-0.6" r="1" fill="#18181B"/>
            <circle cx="-1.3" cy="2.6" r="0.8" fill="#18181B"/>
            <circle cx="1.3" cy="2.6" r="0.8" fill="#18181B"/>
            <ellipse cx="-1.6" cy="-1.8" rx="0.9" ry="1.4" fill="#FFFFFF" opacity="0.7"/>
          </g>
        </g>
      ` : ''}

      ${stage === 3 ? `
        <!-- STAGE 3: CỎ 3 LÁ PHÁT TRIỂN (Tri-Leaf Shamrock with Magic Bud) -->
        <g>
          <!-- Strong Tall Main Stem -->
          <path d="M 0 0 C -6 -32 4 -68 0 -98"
                stroke="url(#stem-grad-v2)" stroke-width="5.5" stroke-linecap="round" fill="none"/>

          <!-- Lower Side Foliage Leaf for Depth -->
          <g transform="translate(-2, -45) rotate(-60) scale(0.68)" filter="url(#soft-shadow)">
            <use href="#leaf-unit"/>
          </g>

          <!-- 3 Crown Leaves Cluster -->
          <g transform="translate(0, -98)">
            <g class="anim-breathe">
              <!-- Top Leaf (0 deg) -->
              <g transform="rotate(0)" filter="url(#soft-shadow)">
                <use href="#leaf-unit"/>
              </g>
              <!-- Left Leaf (-120 deg) -->
              <g transform="rotate(-120)" filter="url(#soft-shadow)">
                <use href="#leaf-unit"/>
              </g>
              <!-- Right Leaf (120 deg) -->
              <g transform="rotate(120)" filter="url(#soft-shadow)">
                <use href="#leaf-unit"/>
              </g>

              <!-- Swelling Golden Magic Bud in Center (Teasing 4th Leaf) -->
              <g class="anim-aura">
                <circle cx="0" cy="0" r="17" fill="rgba(251, 191, 36, 0.3)"/>
              </g>
              <circle cx="0" cy="0" r="9.5" fill="url(#gold-core-v2)" stroke="#B45309" stroke-width="1.6"/>
              <circle cx="0" cy="0" r="5.5" fill="#FEF08A"/>
              <!-- Star Sparkle on Bud -->
              <path d="M 0 -12 L 2.5 -4.5 L 9.5 -2.5 L 2.5 0 L 0 7.5 L -2.5 0 L -9.5 -2.5 L -2.5 -4.5 Z" fill="#FDE047" class="anim-star"/>
            </g>
          </g>
        </g>
      ` : ''}

      ${stage === 4 ? `
        <!-- STAGE 4: CỎ 4 LÁ MAY MẮN DIỆU KỲ (Masterpiece 4-Leaf Bloom) -->
        <g>
          <!-- Stately Strong Stem -->
          <path d="M 0 0 C -5 -35 4 -75 0 -106"
                stroke="url(#stem-grad-v2)" stroke-width="6" stroke-linecap="round" fill="none"/>
          
          <!-- Lower Foliage Leaves -->
          <g transform="translate(-3, -50) rotate(-65) scale(0.72)" filter="url(#soft-shadow)">
            <use href="#leaf-unit"/>
          </g>
          <g transform="translate(3, -35) rotate(65) scale(0.68)" filter="url(#soft-shadow)">
            <use href="#leaf-unit"/>
          </g>

          <!-- 4-Leaf Master Crown -->
          <g transform="translate(0, -106)">
            <g class="anim-breathe">
              <!-- Radial Aura Glow behind Leaves -->
              <g class="anim-aura">
                <circle cx="0" cy="0" r="62" fill="rgba(52, 211, 153, 0.24)" filter="url(#glow-aura)"/>
                <circle cx="0" cy="0" r="46" fill="rgba(254, 240, 138, 0.32)"/>
              </g>

              <!-- 4 Perfect Heart Leaves at 0, 90, 180, 270 deg -->
              <!-- Top Leaf -->
              <g transform="rotate(0)" filter="url(#soft-shadow)">
                <use href="#leaf-unit"/>
              </g>
              <!-- Right Leaf -->
              <g transform="rotate(90)" filter="url(#soft-shadow)">
                <use href="#leaf-unit"/>
              </g>
              <!-- Bottom Leaf -->
              <g transform="rotate(180)" filter="url(#soft-shadow)">
                <use href="#leaf-unit"/>
              </g>
              <!-- Left Leaf -->
              <g transform="rotate(270)" filter="url(#soft-shadow)">
                <use href="#leaf-unit"/>
              </g>

              <!-- Golden Core Sunburst Base -->
              <circle cx="0" cy="0" r="14" fill="url(#gold-core-v2)" stroke="#92400E" stroke-width="1.8"/>
              <circle cx="0" cy="0" r="10" fill="#FEF08A"/>

              <!-- Golden Mini Petal Ray Ring -->
              ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => `
                <circle cx="0" cy="-13" r="2.2" fill="#FBBF24" transform="rotate(${deg} 0 0)"/>
              `).join('')}

              <!-- Kawaii Anime Face -->
              <!-- Big Anime Sparkling Eyes -->
              <ellipse cx="-4.5" cy="-1.5" rx="2" ry="2.8" fill="#1C1917"/>
              <circle cx="-5.2" cy="-2.5" r="0.9" fill="#FFFFFF"/>
              <circle cx="-3.8" cy="-0.6" r="0.5" fill="#FFFFFF"/>

              <ellipse cx="4.5" cy="-1.5" rx="2" ry="2.8" fill="#1C1917"/>
              <circle cx="3.8" cy="-2.5" r="0.9" fill="#FFFFFF"/>
              <circle cx="5.2" cy="-0.6" r="0.5" fill="#FFFFFF"/>

              <!-- Soft Blushing Rosy Cheeks -->
              <ellipse cx="-7.2" cy="1.8" rx="2.6" ry="1.5" fill="#FB7185" opacity="0.85"/>
              <ellipse cx="7.2" cy="1.8" rx="2.6" ry="1.5" fill="#FB7185" opacity="0.85"/>

              <!-- Sweet Kawaii Cat Smile :3 -->
              <path d="M -3.2 2 Q 0 4.8 3.2 2" stroke="#1C1917" stroke-width="1.4" stroke-linecap="round" fill="none"/>

              <!-- Lucky Ladybug on Bottom-Left Leaf -->
              <g transform="translate(-25, 21) rotate(-35) scale(1.15)">
                <ellipse cx="0" cy="0" rx="5" ry="6.2" fill="#EF4444" stroke="#7F1D1D" stroke-width="0.9"/>
                <circle cx="0" cy="-5" r="2.6" fill="#18181B"/>
                <circle cx="-1.8" cy="-0.8" r="1.1" fill="#18181B"/>
                <circle cx="1.8" cy="-0.8" r="1.1" fill="#18181B"/>
                <circle cx="-1.5" cy="2.8" r="0.9" fill="#18181B"/>
                <circle cx="1.5" cy="2.8" r="0.9" fill="#18181B"/>
                <!-- Specular Highlight -->
                <ellipse cx="-2" cy="-2" rx="1" ry="1.6" fill="#FFFFFF" opacity="0.7"/>
                <!-- Antennae -->
                <path d="M -1 -7 Q -2.5 -9 -4 -8 M 1 -7 Q 2.5 -9 4 -8" stroke="#18181B" stroke-width="0.7" fill="none"/>
              </g>
            </g>
          </g>

          <!-- Fluttering Fairy Butterfly -->
          <g transform="translate(58, -120)">
            <g class="anim-butterfly-group">
              <!-- Left Wing -->
              <g class="anim-wing-left">
                <path d="M 0 0 C -12 -14 -18 0 -4 7 C -14 15 -4 19 0 5 Z"
                      fill="#F472B6" stroke="#9D174D" stroke-width="0.9"/>
                <circle cx="-6" cy="3" r="2" fill="#FCE7F3" opacity="0.8"/>
              </g>
              <!-- Right Wing -->
              <g class="anim-wing-right">
                <path d="M 0 0 C 12 -14 18 0 4 7 C 14 15 4 19 0 5 Z"
                      fill="#F472B6" stroke="#9D174D" stroke-width="0.9"/>
                <circle cx="6" cy="3" r="2" fill="#FCE7F3" opacity="0.8"/>
              </g>
              <!-- Body -->
              <ellipse cx="0" cy="3" rx="1.6" ry="6" fill="#4A044E"/>
              <circle cx="0" cy="-3.5" r="1.5" fill="#4A044E"/>
              <!-- Antennae -->
              <path d="M -0.5 -4.5 Q -2 -7 -3 -6 M 0.5 -4.5 Q 2 -7 3 -6" stroke="#4A044E" stroke-width="0.7" fill="none"/>
              <!-- Stardust -->
              <circle cx="-4" cy="14" r="1.1" fill="#FDE047" opacity="0.85" class="anim-star"/>
              <circle cx="3" cy="18" r="0.9" fill="#FDE047" opacity="0.75" class="anim-star"/>
            </g>
          </g>
        </g>
      ` : ''}

    </g>
  </g>

  <!-- ==================== PREMIUM CERAMIC POT ==================== -->
  <g class="clover-pot-body" filter="url(#pot-shadow)">
    <!-- Soil Oval -->
    <ellipse cx="120" cy="165" rx="52" ry="13" fill="url(#soil-dark-v2)"/>

    <!-- Fresh Green Moss Accents on Soil -->
    <ellipse cx="100" cy="166" rx="8" ry="3.5" fill="#16A34A" opacity="0.9"/>
    <ellipse cx="140" cy="166" rx="7" ry="3" fill="#22C55E" opacity="0.9"/>
    <circle cx="110" cy="168" r="1.8" fill="#FBBF24" opacity="0.75"/>

    <!-- Pot Body -->
    <path d="M 68 165 L 80 208 C 82 212 158 212 160 208 L 172 165 Z"
          fill="url(#pot-body-peach)" stroke="#C2410C" stroke-width="2.2" stroke-linejoin="round"/>

    <!-- Shading Highlight on Pot -->
    <path d="M 85 166 L 94 207 C 102 209 116 209 118 209 L 115 166 Z"
          fill="#FED7AA" opacity="0.38"/>

    <!-- Embossed Golden 4-Leaf Clover Emblem on Pot -->
    <g transform="translate(120, 191) scale(0.48)">
      ${[0, 90, 180, 270].map(deg => `
        <path d="M 0 0 C -8 -8 -14 -16 -8 -21 C -4 -24 0 -21 0 -19 C 0 -21 4 -24 8 -21 C 14 -16 8 -8 0 0 Z"
              fill="#FEF08A" stroke="#B45309" stroke-width="1.2" transform="rotate(${deg} 0 0)"/>
      `).join('')}
      <circle cx="0" cy="0" r="3" fill="#F59E0B" stroke="#B45309" stroke-width="0.8"/>
    </g>

    <!-- Sweet Smiling Eyes & Rosy Cheeks on Pot -->
    <g class="pot-face">
      <!-- Left Eye -->
      <ellipse cx="104" cy="186" rx="2.5" ry="3.4" fill="#451A03"/>
      <circle cx="103" cy="185" r="1.1" fill="#FFFFFF"/>
      <!-- Right Eye -->
      <ellipse cx="136" cy="186" rx="2.5" ry="3.4" fill="#451A03"/>
      <circle cx="135" cy="185" r="1.1" fill="#FFFFFF"/>
      <!-- Soft Rosy Cheeks -->
      <ellipse cx="96" cy="190" rx="3.5" ry="2" fill="#FB7185" opacity="0.75"/>
      <ellipse cx="144" cy="190" rx="3.5" ry="2" fill="#FB7185" opacity="0.75"/>
      <!-- Sweet Smile -->
      <path d="M 117 189 Q 120 192.5 123 189" stroke="#451A03" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Glossy Rounded Rim with White/Cream Porcelain Edge -->
    <rect x="62" y="156" width="116" height="15" rx="7.5"
          fill="url(#pot-rim-porcelain)" stroke="#C2410C" stroke-width="2.2"/>
    <line x1="72" y1="160" x2="168" y2="160" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" opacity="0.85"/>
  </g>
</svg>
    `;
  }

  // Export to global scope
  root.FLOWER_CATALOG = FLOWER_CATALOG;
  root.renderFlowerPotSvg = renderFlowerPotSvg;

})(typeof window !== 'undefined' ? window : global);
