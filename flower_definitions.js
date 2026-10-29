/**
 * LUCKY CLOVER GARDEN DEFINITIONS ("CHẬU CỎ 4 LÁ MAY MẮN CỦA CÔ NGUYỆT")
 * Dedicated exclusively to the magical 4-Leaf Lucky Clover (Cỏ 4 Lá May Mắn 🍀).
 * Professional Kawaii Game Art Edition:
 * - Natural organic botanical growth (non-symmetrical, multi-stem, varied leaf sizes)
 * - Heart-shaped lush emerald leaves with M-curve chevron watermarks & crystalline dewdrops
 * - Central delicate pink-white clover blossom with joyful kawaii anime face
 * - Animated companion ladybug (🐞) and fluttering fairy butterfly (🦋)
 * - Peach-terracotta ceramic pot with embossed golden clover crest & smiling blush face
 * - Layered for independent CSS animations (stem sway, leaf breathe, baby flutter, dew glint)
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
   * Universal Pot & Organic Clover Plant Renderer
   * Generates complete SVG for Cỏ 4 Lá May Mắn across all 4 stages:
   * Stage 1 (0-24%): Hạt Giống & Nảy Mầm (Golden Seed, Curved Sprout & Tender Heart Shoot)
   * Stage 2 (25-59%): Cây Con 2-3 Nhánh (Natural Curved Stems, Varied Leaf Sizes + Baby Ladybug)
   * Stage 3 (60-99%): Cây Trưởng Thành Nhiều Tầng (Lush Shamrock Cluster + Glowing Golden Magic Bud)
   * Stage 4 (100%): Cỏ Bốn Lá Nở Hoa Rực Rỡ (Botanical 4-Leaf Crown, Clover Blossom, Kawaii Smile, Ladybug & Butterfly)
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
    <!-- Soft Shadows -->
    <filter id="leaf-shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#064E3B" flood-opacity="0.18"/>
    </filter>
    <filter id="pot-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#7C2D12" flood-opacity="0.18"/>
    </filter>
    <filter id="aura-glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <!-- Emerald Leaf Gradients -->
    <linearGradient id="leaf-grad-rich" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#064E3B"/>
      <stop offset="25%" stop-color="#047857"/>
      <stop offset="60%" stop-color="#10B981"/>
      <stop offset="90%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#6EE7B7"/>
    </linearGradient>

    <!-- Tender Leaf Gradient (for smaller/younger leaves) -->
    <linearGradient id="leaf-grad-tender" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="40%" stop-color="#10B981"/>
      <stop offset="85%" stop-color="#4ADE80"/>
      <stop offset="100%" stop-color="#A7F3D0"/>
    </linearGradient>

    <!-- Stem Gradient -->
    <linearGradient id="stem-grad-v3" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="35%" stop-color="#059669"/>
      <stop offset="75%" stop-color="#10B981"/>
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

    <!-- Soil Gradient -->
    <radialGradient id="soil-dark-v3" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#78350F"/>
      <stop offset="70%" stop-color="#451A03"/>
      <stop offset="100%" stop-color="#1F0A02"/>
    </radialGradient>

    <!-- Ground Contact Shadow -->
    <radialGradient id="ground-shadow-v3" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#371E14" stop-opacity="0.32"/>
      <stop offset="60%" stop-color="#371E14" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#371E14" stop-opacity="0"/>
    </radialGradient>

    <!-- Golden Lucky Core -->
    <radialGradient id="gold-core-v3" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FEF08A"/>
      <stop offset="50%" stop-color="#FBBF24"/>
      <stop offset="85%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </radialGradient>

    <!-- Blossom Petal Gradient -->
    <linearGradient id="blossom-grad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#FDA4AF"/>
      <stop offset="50%" stop-color="#FCE7F3"/>
      <stop offset="100%" stop-color="#FFFFFF"/>
    </linearGradient>

    <!-- Botanical Heart Leaf Unit (Medium-Large, Highly Organic) -->
    <g id="organic-leaf">
      <!-- Main Heart Contour -->
      <path d="M 0 0 C -20 -20 -32 -42 -18 -55 C -10 -62 -2 -55 0 -49 C 2 -55 10 -62 18 -55 C 32 -42 20 -20 0 0 Z"
            fill="url(#leaf-grad-rich)" stroke="#047857" stroke-width="1.6" stroke-linejoin="round"/>
      <!-- Soft Depth Shading on Left Lobe -->
      <path d="M 0 0 C -13 -15 -22 -32 -18 -55 C -10 -62 -2 -55 0 -49 Z"
            fill="#064E3B" opacity="0.22"/>
      <!-- Botanical M-Curve Chevron Watermark -->
      <path d="M -12 -30 Q -6 -37 0 -33 Q 6 -37 12 -30"
            stroke="#D1FAE5" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.9"/>
      <path d="M -10 -30 Q -5 -36 0 -32.5 Q 5 -36 10 -30"
            stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.95"/>
      <!-- Fine Center Vein -->
      <line x1="0" y1="0" x2="0" y2="-45" stroke="#047857" stroke-width="1" stroke-linecap="round" opacity="0.45"/>
      <!-- Crystal Dewdrop -->
      <ellipse cx="-9" cy="-40" rx="2.8" ry="3.5" fill="#FFFFFF" opacity="0.82" class="anim-dew"/>
      <circle cx="-10" cy="-41.5" r="1.1" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-37" rx="2" ry="1" fill="#047857" opacity="0.22"/>
    </g>

    <!-- Tender Baby Leaflet Unit (Smaller, Fresh Lime Tones) -->
    <g id="tender-leaflet">
      <path d="M 0 0 C -14 -14 -22 -28 -12 -37 C -6 -41 -1 -37 0 -33 C 1 -37 6 -41 12 -37 C 22 -28 14 -14 0 0 Z"
            fill="url(#leaf-grad-tender)" stroke="#059669" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M -7 -20 Q 0 -15 7 -20" stroke="#D1FAE5" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.9"/>
      <circle cx="4" cy="-24" r="1.8" fill="#FFFFFF"/>
    </g>
  </defs>

  <!-- Ground Contact Shadow beneath Pot -->
  <ellipse cx="120" cy="216" rx="68" ry="11" fill="url(#ground-shadow-v3)"/>

  <!-- ==================== PLANT STAGE LAYER ==================== -->
  <g transform="translate(120, 165)">

    ${stage === 1 ? `
      <!-- STAGE 1: HẠT GIỐNG & NẢY MẦM (0% - 24%) -->
      <g>
        <!-- Rich Soil Mound -->
        <ellipse cx="0" cy="0" rx="18" ry="6" fill="#5A280B"/>
        <!-- Golden Seed Cracking Open with Magical Spark -->
        <ellipse cx="0" cy="-3" rx="7" ry="9" fill="url(#gold-core-v3)" stroke="#92400E" stroke-width="1.2"/>
        <path d="M -3 -6 Q 0 -10 3 -6" stroke="#FEF08A" stroke-width="1.5" fill="none"/>
        
        <!-- Shimmering Magic Rings -->
        <circle cx="0" cy="-12" r="14" fill="none" stroke="#FBBF24" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.8" class="anim-star"/>
        
        <!-- Curved Springy Baby Shoot -->
        <path d="M 0 -8 C -5 -24 3 -40 7 -54" stroke="url(#stem-grad-v3)" stroke-width="4.2" stroke-linecap="round" fill="none"/>
        
        <!-- Tender Unfurling Baby Leaflet with Smile -->
        <g transform="translate(7, -54)" filter="url(#leaf-shadow)">
          <use href="#tender-leaflet"/>
          <!-- Sweet Micro Smile on Leaf -->
          <path d="M -2 -14 Q 0 -12 2 -14" stroke="#064E3B" stroke-width="1" stroke-linecap="round" fill="none"/>
        </g>
        
        <!-- Floating Sparkle Stars -->
        <path d="M -16 -32 L -14 -28 L -10 -26 L -14 -24 L -16 -20 L -18 -24 L -22 -26 L -18 -28 Z" fill="#FBBF24" class="anim-star"/>
        <path d="M 20 -46 L 21.5 -43 L 25 -41.5 L 21.5 -40 L 20 -37 L 18.5 -40 L 15 -41.5 L 18.5 -43 Z" fill="#34D399" class="anim-star"/>
      </g>
    ` : ''}

    ${stage === 2 ? `
      <!-- STAGE 2: CÂY CON 2-3 NHÁNH TỰ NHIÊN (25% - 59%) -->
      <!-- Organic Non-Symmetrical Growth: Main stem + side shoot -->
      <g>
        <!-- Main Elegant Left-Curved Stem -->
        <g class="anim-stem-l">
          <path d="M 0 0 C -10 -28 -2 -58 -8 -82"
                stroke="url(#stem-grad-v3)" stroke-width="5" stroke-linecap="round" fill="none"/>
          <g transform="translate(-8, -82)">
            <!-- Left Primary Mature Heart Leaf (tilted natural angle -22 deg) -->
            <g transform="rotate(-22)" filter="url(#leaf-shadow)" class="anim-leaf-breathe">
              <use href="#organic-leaf"/>
            </g>
            <!-- Secondary Leaf peeking right (+32 deg) -->
            <g transform="rotate(32) scale(0.85)" filter="url(#leaf-shadow)">
              <use href="#organic-leaf"/>
            </g>
            <!-- Center Node -->
            <circle cx="0" cy="0" r="5" fill="url(#gold-core-v3)" stroke="#92400E" stroke-width="1.2"/>
            <circle cx="0" cy="0" r="2.5" fill="#FEF08A"/>
          </g>
        </g>

        <!-- Right Shorter Natural Shoot (Emerging Tender Leaflet) -->
        <g class="anim-stem-r">
          <path d="M 0 0 C 8 -18 16 -34 18 -48"
                stroke="url(#stem-grad-v3)" stroke-width="3.6" stroke-linecap="round" fill="none"/>
          <g transform="translate(18, -48) rotate(42)" class="anim-baby-leaf" filter="url(#leaf-shadow)">
            <use href="#tender-leaflet"/>
          </g>
        </g>

        <!-- Cute Baby Ladybug on Pot Rim -->
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
      <!-- STAGE 3: CỎ 3 LÁ TRƯỞNG THÀNH NHIỀU TẦNG (60% - 99%) -->
      <!-- Multi-stem cluster, non-symmetrical botanical arrangement -->
      <g>
        <!-- Background Leaf for 3D Depth -->
        <g transform="translate(14, -62) rotate(35) scale(0.72)" filter="url(#leaf-shadow)">
          <use href="#organic-leaf"/>
        </g>

        <!-- Main Arching Stem to Crown -->
        <g class="anim-stem-l">
          <path d="M 0 0 C -8 -34 2 -68 -4 -98"
                stroke="url(#stem-grad-v3)" stroke-width="5.5" stroke-linecap="round" fill="none"/>

          <!-- Lower Forward Leaflet -->
          <g transform="translate(-12, -45) rotate(-55) scale(0.68)" class="anim-baby-leaf" filter="url(#leaf-shadow)">
            <use href="#organic-leaf"/>
          </g>

          <!-- 3-Leaf Crown Cluster (Natural Organic Angles, not mechanical!) -->
          <g transform="translate(-4, -98)">
            <g class="anim-leaf-breathe">
              <!-- Top Left Leaf (-20 deg, slightly larger) -->
              <g transform="rotate(-20) scale(1.05)" filter="url(#leaf-shadow)">
                <use href="#organic-leaf"/>
              </g>
              <!-- Bottom Left Leaf (-110 deg) -->
              <g transform="rotate(-110) scale(0.92)" filter="url(#leaf-shadow)">
                <use href="#organic-leaf"/>
              </g>
              <!-- Right Leaf (45 deg) -->
              <g transform="rotate(45) scale(0.98)" filter="url(#leaf-shadow)">
                <use href="#organic-leaf"/>
              </g>

              <!-- Central Golden Magic Bud with Star Flare (Teasing 4th leaf) -->
              <g class="anim-aura-glow">
                <circle cx="0" cy="0" r="18" fill="rgba(251, 191, 36, 0.32)"/>
              </g>
              <circle cx="0" cy="0" r="9.5" fill="url(#gold-core-v3)" stroke="#B45309" stroke-width="1.6"/>
              <circle cx="0" cy="0" r="5.5" fill="#FEF08A"/>
              <path d="M 0 -12 L 2.5 -4.5 L 9.5 -2.5 L 2.5 0 L 0 7.5 L -2.5 0 L -9.5 -2.5 L -2.5 -4.5 Z" fill="#FDE047" class="anim-star"/>
            </g>
          </g>
        </g>
      </g>
    ` : ''}

    ${stage === 4 ? `
      <!-- STAGE 4: CỎ 4 LÁ MAY MẮN BỪNG SÁNG VỚI HOA & BỌ RÙA (100%) -->
      <!-- Natural botanical canopy with multi-stem cluster, non-symmetrical arrangement -->
      <g>
        <!-- Background Foliage Leaves for Rich Depth -->
        <g transform="translate(18, -68) rotate(48) scale(0.75)" filter="url(#leaf-shadow)">
          <use href="#organic-leaf"/>
        </g>
        <g transform="translate(-20, -55) rotate(-62) scale(0.7)" filter="url(#leaf-shadow)">
          <use href="#organic-leaf"/>
        </g>

        <!-- Strong Main Central Stem -->
        <g class="anim-stem-l">
          <path d="M 0 0 C -6 -35 2 -74 -3 -106"
                stroke="url(#stem-grad-v3)" stroke-width="6" stroke-linecap="round" fill="none"/>
          
          <!-- Mid-level Lower Sprout Leaflet -->
          <g transform="translate(6, -42) rotate(28) scale(0.65)" class="anim-baby-leaf" filter="url(#leaf-shadow)">
            <use href="#tender-leaflet"/>
          </g>

          <!-- Grand 4-Leaf Botanical Crown (Natural Angles & Varying Scales) -->
          <g transform="translate(-3, -106)">
            <g class="anim-leaf-breathe">
              <!-- Soft Magical Aurora behind Canopy -->
              <g class="anim-aura-glow">
                <circle cx="0" cy="0" r="64" fill="rgba(52, 211, 153, 0.25)" filter="url(#aura-glow)"/>
                <circle cx="0" cy="0" r="48" fill="rgba(254, 240, 138, 0.35)"/>
              </g>

              <!-- Leaf 1: Top Major Leaf (Tilted -6 deg, full scale 1.08) -->
              <g transform="rotate(-6) scale(1.08)" filter="url(#leaf-shadow)">
                <use href="#organic-leaf"/>
              </g>
              <!-- Leaf 2: Right Leaf (Tilted 78 deg, scale 1.0) -->
              <g transform="rotate(78) scale(1.0)" filter="url(#leaf-shadow)">
                <use href="#organic-leaf"/>
              </g>
              <!-- Leaf 3: Bottom Leaf (Tilted 172 deg, scale 0.95) -->
              <g transform="rotate(172) scale(0.95)" filter="url(#leaf-shadow)">
                <use href="#organic-leaf"/>
              </g>
              <!-- Leaf 4: Left Leaf (Tilted 262 deg, scale 1.02) -->
              <g transform="rotate(262) scale(1.02)" filter="url(#leaf-shadow)">
                <use href="#organic-leaf"/>
              </g>

              <!-- Central Sweet Clover Blossom & Kawaii Face -->
              <!-- 6 White-Pink Blossom Petals Radiating Outward -->
              ${[0, 60, 120, 180, 240, 300].map(deg => `
                <path d="M 0 0 C -4 -6 -6 -14 0 -17 C 6 -14 4 -6 0 0 Z"
                      fill="url(#blossom-grad)" stroke="#FB7185" stroke-width="0.7"
                      transform="rotate(${deg} 0 0)"/>
              `).join('')}

              <!-- Golden Blossom Core with Kawaii Smile -->
              <circle cx="0" cy="0" r="12" fill="url(#gold-core-v3)" stroke="#92400E" stroke-width="1.6"/>
              <circle cx="0" cy="0" r="8.5" fill="#FEF08A"/>

              <!-- Kawaii Sparkling Eyes -->
              <ellipse cx="-3.8" cy="-1.2" rx="1.8" ry="2.5" fill="#1C1917"/>
              <circle cx="-4.4" cy="-2.1" r="0.8" fill="#FFFFFF"/>
              <circle cx="-3.2" cy="-0.4" r="0.4" fill="#FFFFFF"/>

              <ellipse cx="3.8" cy="-1.2" rx="1.8" ry="2.5" fill="#1C1917"/>
              <circle cx="3.2" cy="-2.1" r="0.8" fill="#FFFFFF"/>
              <circle cx="4.4" cy="-0.4" r="0.4" fill="#FFFFFF"/>

              <!-- Soft Blushing Rosy Cheeks -->
              <ellipse cx="-6.2" cy="1.6" rx="2.2" ry="1.3" fill="#FB7185" opacity="0.85"/>
              <ellipse cx="6.2" cy="1.6" rx="2.2" ry="1.3" fill="#FB7185" opacity="0.85"/>

              <!-- Sweet Cat-like Smile :3 -->
              <path d="M -2.8 1.8 Q 0 4.2 2.8 1.8" stroke="#1C1917" stroke-width="1.3" stroke-linecap="round" fill="none"/>

              <!-- Lucky Ladybug Perched on Left Leaf (Natural position) -->
              <g transform="translate(-26, 16) rotate(-40) scale(1.15)">
                <ellipse cx="0" cy="0" rx="4.8" ry="6" fill="#EF4444" stroke="#7F1D1D" stroke-width="0.9"/>
                <circle cx="0" cy="-4.8" r="2.5" fill="#18181B"/>
                <circle cx="-1.7" cy="-0.8" r="1" fill="#18181B"/>
                <circle cx="1.7" cy="-0.8" r="1" fill="#18181B"/>
                <circle cx="-1.4" cy="2.6" r="0.8" fill="#18181B"/>
                <circle cx="1.4" cy="2.6" r="0.8" fill="#18181B"/>
                <ellipse cx="-1.8" cy="-2" rx="0.9" ry="1.5" fill="#FFFFFF" opacity="0.7"/>
                <path d="M -1 -6.5 Q -2.5 -8.5 -3.8 -7.5 M 1 -6.5 Q 2.5 -8.5 3.8 -7.5" stroke="#18181B" stroke-width="0.7" fill="none"/>
              </g>
            </g>
          </g>

          <!-- Fluttering Fairy Butterfly -->
          <g transform="translate(60, -118)">
            <g class="anim-bfly-bob">
              <g class="anim-wing-l">
                <path d="M 0 0 C -12 -14 -18 0 -4 7 C -14 15 -4 19 0 5 Z"
                      fill="#F472B6" stroke="#9D174D" stroke-width="0.9"/>
                <circle cx="-6" cy="3" r="2" fill="#FCE7F3" opacity="0.8"/>
              </g>
              <g class="anim-wing-r">
                <path d="M 0 0 C 12 -14 18 0 4 7 C 14 15 4 19 0 5 Z"
                      fill="#F472B6" stroke="#9D174D" stroke-width="0.9"/>
                <circle cx="6" cy="3" r="2" fill="#FCE7F3" opacity="0.8"/>
              </g>
              <ellipse cx="0" cy="3" rx="1.6" ry="6" fill="#4A044E"/>
              <circle cx="0" cy="-3.5" r="1.5" fill="#4A044E"/>
              <path d="M -0.5 -4.5 Q -2 -7 -3 -6 M 0.5 -4.5 Q 2 -7 3 -6" stroke="#4A044E" stroke-width="0.7" fill="none"/>
              <circle cx="-4" cy="14" r="1.1" fill="#FDE047" opacity="0.85" class="anim-star"/>
              <circle cx="3" cy="18" r="0.9" fill="#FDE047" opacity="0.75" class="anim-star"/>
            </g>
          </g>
        </g>
      </g>
    ` : ''}

  </g>

  <!-- ==================== PREMIUM CERAMIC POT ==================== -->
  <g class="clover-pot-body" filter="url(#pot-shadow)">
    <!-- Soil Oval -->
    <ellipse cx="120" cy="165" rx="52" ry="13" fill="url(#soil-dark-v3)"/>

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
