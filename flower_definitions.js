/**
 * LUCKY CLOVER GARDEN DEFINITIONS ("CHẬU CỎ 4 LÁ MAY MẮN CỦA CÔ NGUYỆT")
 * Dedicated exclusively to Cỏ 4 Lá May Mắn (Trifolium repens 🍀).
 * Lifelike Painterly Botanical Edition:
 * - High-resolution hand-painted botanical illustrations across all 4 growth stages
 *   (assets/garden/clover_stage_1.png .. clover_stage_4.png)
 * - Unified warm terracotta clay pot & rich dark crumbly soil with exact baseline registration
 * - Grounded pot contact shadow + bottom-anchored natural breeze rig (zero pot sliding)
 * - Synchronized morning dewdrop specular glints & sunlit botanical aura
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
  root.getCloverStage = getCloverStage;
  root.renderFlowerPotSvg = renderFlowerPotSvg;

})(typeof window !== 'undefined' ? window : global);
