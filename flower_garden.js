/**
 * LUCKY CLOVER GARDEN INTERACTION & ANIMATION ENGINE ("CHẬU CỎ 4 LÁ MAY MẮN CỦA CÔ NGUYỆT")
 * Dedicated exclusively to growing and caring for Cỏ 4 Lá May Mắn (🍀).
 * Features interactive plant care (water, sun, fertilize, touch),
 * procedural Web Audio synthesis, 4 visual growth stages, lucky harvest celebration,
 * and persistent clover harvest records.
 */
(function(root) {
  'use strict';

  // ==========================================
  // 1. PROCEDURAL WEB AUDIO SYNTHESIZER
  // ==========================================
  const GardenAudio = (function() {
    let ctx = null;

    function getCtx() {
      if (!ctx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) ctx = new AudioClass();
      }
      if (ctx && ctx.state === 'suspended') {
        ctx.resume();
      }
      return ctx;
    }

    // Water droplet trickle sound
    function playWater() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      [0, 0.08, 0.16, 0.24].forEach((delay, idx) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sine';
        const startFreq = 800 + idx * 120 + (Math.random() * 80 - 40);
        osc.frequency.setValueAtTime(startFreq, now + delay);
        osc.frequency.exponentialRampToValueAtTime(startFreq + 450, now + delay + 0.06);

        gain.gain.setValueAtTime(0.12, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.07);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.08);
      });
    }

    // Warm Sunbeam Shimmer Sound
    function playSun() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      const freqs = [523.25, 659.25, 783.99, 987.77, 1046.50];
      freqs.forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0.08, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.45);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.5);
      });
    }

    // Fertilizer Growth Pop Sound
    function playFertilize() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.15);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(c.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    }

    // Joyous Lucky Harvest Fanfare
    function playHarvest() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      const notes = [
        { f: 783.99, t: 0 },
        { f: 1046.50, t: 0.1 },
        { f: 1318.51, t: 0.2 },
        { f: 1567.98, t: 0.32 },
        { f: 2093.00, t: 0.48 }
      ];

      notes.forEach(n => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, now + n.t);

        gain.gain.setValueAtTime(0.15, now + n.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + 0.6);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(now + n.t);
        osc.stop(now + n.t + 0.65);
      });
    }

    return { playWater, playSun, playFertilize, playHarvest };
  })();

  // ==========================================
  // 2. LUCKY CLOVER GARDEN ENGINE
  // ==========================================
  const FlowerGarden = {
    STORAGE_KEY: 'flower_garden_data_v1',
    state: {
      currentFlowerId: 'clover',
      progress: 30, // 0 to 100
      moisture: 75,
      sunlight: 80,
      harvestCount: 0,
      basket: {
        'clover': 0
      },
      history: []
    },

    init() {
      this.loadState();
      this.bindEvents();
      this.render();
      this.startAmbientDecay();
    },

    loadState() {
      try {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          this.state = Object.assign(this.state, parsed);
        }
      } catch (e) {
        console.warn('Could not load garden state from localStorage', e);
      }
      // Guarantee single plant is always clover
      this.state.currentFlowerId = 'clover';
      const cloverCount = (this.state.basket && (this.state.basket.clover || this.state.basket.sunflower || this.state.harvestCount)) || 0;
      this.state.basket = { clover: cloverCount };
      if (!this.state.harvestCount) {
        this.state.harvestCount = cloverCount;
      }
    },

    saveState() {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
      } catch (e) {
        console.warn('Could not save garden state to localStorage', e);
      }
    },

    bindEvents() {
      // Care action buttons
      const btnWater = document.getElementById('btn-water-flower');
      const btnSun = document.getElementById('btn-sun-flower');
      const btnFertilize = document.getElementById('btn-fertilize-flower');
      const btnHarvest = document.getElementById('btn-harvest-flower');

      if (btnWater) btnWater.addEventListener('click', () => this.water());
      if (btnSun) btnSun.addEventListener('click', () => this.sunbathe());
      if (btnFertilize) btnFertilize.addEventListener('click', () => this.fertilize());
      if (btnHarvest) btnHarvest.addEventListener('click', () => this.harvest());

      // Header modal button for clover basket
      const btnOpenBasket = document.getElementById('btn-open-flower-basket');
      if (btnOpenBasket) btnOpenBasket.addEventListener('click', () => this.openBasketModal());

      // Stage click for petting plant
      const stage = document.getElementById('garden-stage');
      if (stage) {
        stage.addEventListener('click', (e) => {
          if (!e.target.closest('button')) {
            this.petPlant();
          }
        });
      }
    },

    // 1. Water Action (+25%)
    water() {
      if (this.state.progress >= 100) {
        this.triggerReadyToHarvest();
        return;
      }

      GardenAudio.playWater();
      this.state.moisture = Math.min(100, this.state.moisture + 35);
      this.addProgress(25);

      this.triggerPlantBounce();
      this.triggerWateringAnimation();
      this.spawnParticles('💧', 5);
      this.updateSpeechBubble('Bé cỏ được uống nước mát lành, đang vươn mình lớn nhanh! 💧🍀');
      this.saveState();
      this.render();
    },

    // 2. Sunlight Action (+20%)
    sunbathe() {
      if (this.state.progress >= 100) {
        this.triggerReadyToHarvest();
        return;
      }

      GardenAudio.playSun();
      this.state.sunlight = Math.min(100, this.state.sunlight + 30);
      this.addProgress(20);

      this.triggerPlantBounce();
      this.triggerSunAnimation();
      this.spawnParticles('✨', 6);
      this.updateSpeechBubble('Ánh nắng ấm áp rọi xuống, lá cỏ 4 lá thêm xanh mướt! ☀️✨');
      this.saveState();
      this.render();
    },

    // 3. Fertilize Action (+30%)
    fertilize() {
      if (this.state.progress >= 100) {
        this.triggerReadyToHarvest();
        return;
      }

      GardenAudio.playFertilize();
      this.addProgress(30);

      this.triggerPlantBounce();
      this.spawnParticles('🧴', 4);
      this.spawnParticles('🌱', 4);
      this.updateSpeechBubble('Bón thêm dinh dưỡng hữu cơ, rễ bám chắc và mầm xanh bung tỏa! 🪴✨');
      this.saveState();
      this.render();
    },

    // 4. Pet Plant
    petPlant() {
      GardenAudio.playSun();
      this.triggerPlantBounce();
      this.spawnParticles('💚', 3);
      this.spawnParticles('✨', 3);
      if (this.state.progress < 100) {
        this.addProgress(5);
        this.updateSpeechBubble('Cô Nguyệt nhẹ nhàng vuốt ve mầm cây, bé cỏ rung rinh thích thú! 🥰🌿');
      } else {
        this.updateSpeechBubble('Cỏ 4 lá may mắn đã nở trọn vẹn rồi! Mau bấm "Thu hoạch" để đón may mắn nha cô! 🍀✨');
      }
      this.saveState();
      this.render();
    },

    triggerPlantBounce() {
      const pot = document.getElementById('garden-pot-wrapper');
      if (pot) {
        pot.classList.remove('plant-bouncing');
        void pot.offsetWidth;
        pot.classList.add('plant-bouncing');
        setTimeout(() => pot.classList.remove('plant-bouncing'), 650);
      }
    },

    addProgress(amount) {
      const prev = this.state.progress;
      this.state.progress = Math.min(100, this.state.progress + amount);

      if (prev < 100 && this.state.progress >= 100) {
        GardenAudio.playHarvest();
        this.triggerBloomCelebration();
      }
    },

    triggerReadyToHarvest() {
      this.updateSpeechBubble('Cỏ 4 Lá May Mắn đã bung nở tuyệt đẹp! Hãy bấm "Thu hoạch" để đón may mắn nhé cô Nguyệt! 🍀✨');
      if (typeof showToast === 'function') {
        showToast('🍀 Cỏ 4 Lá đã nở rộ! Bấm nút "Thu hoạch" để nhận may mắn!');
      }
    },

    // 5. Harvest Action
    harvest() {
      const flower = (root.FLOWER_CATALOG && root.FLOWER_CATALOG.clover) || {
        name: 'Cỏ 4 Lá May Mắn',
        icon: '🍀',
        quote: 'Bé cỏ 4 lá mang đến vạn sự may mắn cho cô Nguyệt!'
      };

      GardenAudio.playHarvest();

      // Update count
      this.state.harvestCount = (this.state.harvestCount || 0) + 1;
      this.state.basket.clover = (this.state.basket.clover || 0) + 1;

      // Log history
      this.state.history.unshift({
        flowerId: 'clover',
        flowerName: flower.name,
        icon: flower.icon,
        timestamp: new Date().toISOString()
      });

      // Celebration effects
      this.triggerHarvestCelebration(flower);

      // Reset for next clover sprout
      this.state.progress = 0;
      this.state.moisture = 70;
      this.state.sunlight = 70;
      this.state.currentFlowerId = 'clover';

      this.saveState();
      this.render();

      if (typeof showToast === 'function') {
        showToast(`🎉 Thu hoạch thành công ${flower.icon} ${flower.name}! Chúc cô Nguyệt vạn sự như ý! 🍀✨`);
      }
    },

    // Visual Rendering
    render() {
      const flower = (root.FLOWER_CATALOG && root.FLOWER_CATALOG.clover) || {
        name: 'Cỏ 4 Lá May Mắn',
        icon: '🍀',
        bgGlow: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%)'
      };
      const p = Math.round(this.state.progress || 0);

      // 1. Render Flower Pot SVG
      const potWrapper = document.getElementById('garden-pot-wrapper');
      if (potWrapper && typeof root.renderFlowerPotSvg === 'function') {
        potWrapper.innerHTML = root.renderFlowerPotSvg('clover', p);
      }

      // 2. Info elements
      const nameEl = document.getElementById('garden-flower-name');
      const stageBadge = document.getElementById('garden-stage-badge');
      const fillBar = document.getElementById('garden-progress-fill');
      const textVal = document.getElementById('garden-progress-text');
      const moistureVal = document.getElementById('garden-moisture-val');
      const sunlightVal = document.getElementById('garden-sunlight-val');
      const harvestVal = document.getElementById('garden-harvest-val');
      const harvestBadge = document.getElementById('garden-harvest-count');

      if (nameEl) nameEl.innerHTML = `${flower.icon} ${flower.name}`;
      if (fillBar) fillBar.style.width = `${p}%`;
      if (textVal) textVal.textContent = `${p}%`;
      if (moistureVal) moistureVal.textContent = `${Math.round(this.state.moisture)}%`;
      if (sunlightVal) sunlightVal.textContent = `${Math.round(this.state.sunlight)}%`;
      if (harvestVal) harvestVal.textContent = `${this.state.harvestCount} cành`;
      if (harvestBadge) harvestBadge.textContent = this.state.harvestCount;

      // 3. Stage Badge Text & Styling
      if (stageBadge) {
        if (p >= 100) {
          stageBadge.textContent = '🍀 Bừng Nở 4 Lá May Mắn!';
          stageBadge.className = 'garden-stage-badge stage-blooming';
        } else if (p >= 60) {
          stageBadge.textContent = '☘️ Cỏ 3 Lá Đang Phát Triển';
          stageBadge.className = 'garden-stage-badge stage-budding';
        } else if (p >= 25) {
          stageBadge.textContent = '🌿 Cây Con 2 Lá Non';
          stageBadge.className = 'garden-stage-badge stage-sprouting';
        } else {
          stageBadge.textContent = '🌱 Vừa Gieo Mầm Cỏ';
          stageBadge.className = 'garden-stage-badge stage-seeding';
        }
      }

      // 4. Action buttons: show/hide harvest vs care
      const btnHarvest = document.getElementById('btn-harvest-flower');
      if (btnHarvest) {
        if (p >= 100) {
          btnHarvest.classList.remove('hidden');
          btnHarvest.classList.add('pulse-glow');
        } else {
          btnHarvest.classList.add('hidden');
          btnHarvest.classList.remove('pulse-glow');
        }
      }

      // 5. Weather Background Glow
      const glow = document.getElementById('garden-weather-glow');
      if (glow) {
        glow.style.background = p >= 100 ? flower.bgGlow : 'radial-gradient(circle, rgba(209, 250, 229, 0.45) 0%, transparent 70%)';
      }
    },

    updateSpeechBubble(msg) {
      const bubble = document.getElementById('garden-subtitle');
      if (bubble) {
        bubble.textContent = msg;
        bubble.classList.remove('pop-anim');
        void bubble.offsetWidth;
        bubble.classList.add('pop-anim');
      }
    },

    // Animations
    triggerWateringAnimation() {
      const can = document.getElementById('garden-watering-can');
      if (can) {
        can.classList.remove('active');
        void can.offsetWidth;
        can.classList.add('active');
        setTimeout(() => can.classList.remove('active'), 1800);
      }
    },

    triggerSunAnimation() {
      const sun = document.getElementById('garden-sun-rays');
      if (sun) {
        sun.classList.remove('active');
        void sun.offsetWidth;
        sun.classList.add('active');
        setTimeout(() => sun.classList.remove('active'), 1800);
      }
    },

    triggerBloomCelebration() {
      this.updateSpeechBubble('WOOHOO! 🍀 Cỏ 4 Lá May Mắn đã nở rộ tuyệt đẹp! Chúc cô Nguyệt luôn ngập tràn niềm vui và may mắn! 🌟💚');
      this.spawnParticles('🍀', 8);
      this.spawnParticles('✨', 8);
      this.spawnParticles('🌟', 6);
    },

    triggerHarvestCelebration(flower) {
      const symbols = ['🍀', '✨', '🌟', '💚', '🎉', '🌸'];
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          this.spawnParticles(symbols[Math.floor(Math.random() * symbols.length)], 2);
        }, i * 60);
      }
      this.updateSpeechBubble(`Đã thu hoạch ${flower.icon} ${flower.name}! ${flower.quote}`);
    },

    spawnParticles(symbol, count = 3) {
      const stage = document.getElementById('garden-floating-particles');
      if (!stage || typeof stage.appendChild !== 'function') return;

      for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'garden-float-particle';
        p.textContent = symbol;
        p.style.left = `${20 + Math.random() * 60}%`;
        p.style.bottom = `${30 + Math.random() * 40}%`;
        p.style.fontSize = `${16 + Math.random() * 14}px`;
        p.style.animationDuration = `${1.2 + Math.random() * 0.8}s`;
        stage.appendChild(p);
        setTimeout(() => {
          if (typeof p.remove === 'function') p.remove();
        }, 2000);
      }
    },

    startAmbientDecay() {
      setInterval(() => {
        if (this.state.progress < 100) {
          this.state.moisture = Math.max(20, this.state.moisture - 0.5);
          this.state.sunlight = Math.max(20, this.state.sunlight - 0.5);
          this.render();
          this.saveState();
        }
      }, 60000);
    },

    // ==========================================
    // 3. LUCKY CLOVER BASKET MODAL
    // ==========================================
    openBasketModal() {
      let modal = document.getElementById('garden-basket-modal');
      if (!modal) {
        modal = this.createBasketModalDom();
        document.body.appendChild(modal);
      }
      this.renderBasketContent();
      modal.classList.add('active');
    },

    createBasketModalDom() {
      const modal = document.createElement('div');
      modal.className = 'modal-overlay garden-modal';
      modal.id = 'garden-basket-modal';
      modal.innerHTML = `
        <div class="modal-card garden-modal-card">
          <div class="modal-header">
            <h3>🧺 Bộ Sưu Tập Cỏ 4 Lá May Mắn</h3>
            <button class="modal-close-btn" id="btn-close-basket-modal">&times;</button>
          </div>
          <div class="garden-title-badge-wrap">
            <span class="gardener-title-badge" id="gardener-title-badge">🌱 Người Gieo Mầm Hạnh Phúc</span>
            <span class="total-harvested-badge">Tổng: <b id="basket-total-count">0</b> cành cỏ 4 lá</span>
          </div>
          <p class="modal-subtext">Mỗi cành cỏ 4 lá may mắn được cô Nguyệt vun trồng là một điều ước tốt lành gửi đến lớp học:</p>
          <div class="garden-basket-grid" id="garden-basket-grid"></div>
        </div>
      `;
      modal.querySelector('#btn-close-basket-modal').addEventListener('click', () => {
        modal.classList.remove('active');
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
      return modal;
    },

    renderBasketContent() {
      const grid = document.getElementById('garden-basket-grid');
      const totalCount = document.getElementById('basket-total-count');
      const titleBadge = document.getElementById('gardener-title-badge');
      if (!grid) return;

      const total = this.state.harvestCount || 0;
      if (totalCount) totalCount.textContent = total;

      if (titleBadge) {
        if (total >= 20) titleBadge.textContent = '👑 Nàng Tiên Cỏ May Mắn';
        else if (total >= 10) titleBadge.textContent = '🌟 Bàn Tay Gieo Phép Màu';
        else if (total >= 5) titleBadge.textContent = '🍀 Vườn Ươm May Mắn';
        else titleBadge.textContent = '🌱 Người Gieo Mầm Hạnh Phúc';
      }

      grid.innerHTML = '';
      const flower = (root.FLOWER_CATALOG && root.FLOWER_CATALOG.clover) || {
        name: 'Cỏ 4 Lá May Mắn',
        icon: '🍀',
        meaning: 'May mắn ngập tràn, niềm tin, hy vọng và tình yêu vĩnh cửu.',
        bgGlow: 'rgba(16, 185, 129, 0.25)'
      };

      const item = document.createElement('div');
      item.className = 'basket-item collected';
      item.innerHTML = `
        <div class="basket-item-icon" style="background: ${flower.bgGlow}; font-size: 2.2rem;">${flower.icon}</div>
        <div class="basket-item-info">
          <h4>${flower.name}</h4>
          <span class="basket-item-count">Đã thu hoạch: <b>${total}</b> cành may mắn</span>
          <p style="font-size: 0.85rem; color: #047857; margin-top: 4px;">"${flower.meaning}"</p>
        </div>
      `;
      grid.appendChild(item);
    },

    closeModal() {
      document.querySelectorAll('.garden-modal').forEach(m => m.classList.remove('active'));
    }
  };

  root.FlowerGarden = FlowerGarden;

})(typeof window !== 'undefined' ? window : global);
