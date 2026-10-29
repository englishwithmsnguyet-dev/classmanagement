/**
 * FLOWER GARDEN INTERACTION & ANIMATION ENGINE ("VƯỜN HOA CỦA CÔ NGUYỆT")
 * Features interactive flower care (water, sun, fertilize, music),
 * procedural Web Audio synthesis, 4 visual growth stages, flower harvest,
 * and a persistent flower basket collection.
 */
(function(root) {
  'use strict';

  // ==========================================
  // 1. PROCEDURAL WEB AUDIO SYNTHESIZER FOR GARDEN
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

      // 4 tiny bubbling drops
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

      // Warm harp triad: C5, E5, G5, B5, C6
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

    // Bloom & Harvest Joyous Fanfare
    function playHarvest() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      // Joyous chime sequence: G5, C6, E6, G6 (Major chord arpeggio)
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
  // 2. FLOWER GARDEN ENGINE STATE & LOGIC
  // ==========================================
  const FlowerGarden = {
    STORAGE_KEY: 'flower_garden_data_v1',
    state: {
      currentFlowerId: 'sunflower',
      progress: 30, // 0 to 100
      moisture: 75,
      sunlight: 80,
      harvestCount: 0,
      basket: {
        'sunflower': 1,
        'tulip': 0,
        'rose': 0,
        'lotus': 0,
        'daisy': 0,
        'cherry': 0,
        'lavender': 0,
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

      // Header modal buttons
      const btnOpenBasket = document.getElementById('btn-open-flower-basket');
      const btnChangeSeed = document.getElementById('btn-change-flower-seed');

      if (btnOpenBasket) btnOpenBasket.addEventListener('click', () => this.openBasketModal());
      if (btnChangeSeed) btnChangeSeed.addEventListener('click', () => this.openSeedModal());

      // Stage click for petting plant
      const stage = document.getElementById('garden-stage');
      if (stage) {
        stage.addEventListener('click', (e) => {
          // If clicking pot directly, give a little love
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

      // Trigger watering can animation
      this.triggerWateringAnimation();
      this.spawnParticles('💧', 5);
      this.updateSpeechBubble('Cây được uống nước mát lành, đang lớn nhanh vùn vụt! 💧✨');
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

      // Trigger sunshine rays animation
      this.triggerSunAnimation();
      this.spawnParticles('✨', 6);
      this.updateSpeechBubble('Ánh nắng ấm áp rọi xuống, mầm hoa quang hợp tràn đầy sức sống! ☀️🌸');
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

      this.spawnParticles('🧴', 4);
      this.spawnParticles('🌱', 4);
      this.updateSpeechBubble('Bón thêm dinh dưỡng hữu cơ, rễ cây bám chắc và lá xanh mơn mởn! 🪴✨');
      this.saveState();
      this.render();
    },

    // 4. Pet Plant
    petPlant() {
      this.spawnParticles('💚', 3);
      if (this.state.progress < 100) {
        this.addProgress(5);
        this.updateSpeechBubble('Cô Nguyệt nhẹ nhàng vuốt ve mầm cây, cây hoa vui mừng đung đưa! 🥰🌿');
      } else {
        this.updateSpeechBubble('Hoa đã nở rộ thơm ngát rồi! Mau bấm "Thu hoạch" để cất vào giỏ nha cô! 💐✨');
      }
      this.saveState();
      this.render();
    },

    addProgress(amount) {
      const prev = this.state.progress;
      this.state.progress = Math.min(100, this.state.progress + amount);

      // Check if newly reached 100%
      if (prev < 100 && this.state.progress >= 100) {
        GardenAudio.playHarvest();
        this.triggerBloomCelebration();
      }
    },

    triggerReadyToHarvest() {
      this.updateSpeechBubble('Bông hoa đã nở rộ tuyệt đẹp rồi cô ơi! Hãy bấm "Thu hoạch" để đón bé vào giỏ nhé! 💐✨');
      if (typeof showToast === 'function') {
        showToast('🌸 Hoa đã nở rộ! Bấm nút "Thu hoạch" để cất vào giỏ hoa của cô!');
      }
    },

    // 5. Harvest Action
    harvest() {
      const flower = root.FLOWER_CATALOG[this.state.currentFlowerId] || root.FLOWER_CATALOG.sunflower;

      GardenAudio.playHarvest();

      // Update basket
      this.state.harvestCount = (this.state.harvestCount || 0) + 1;
      this.state.basket[this.state.currentFlowerId] = (this.state.basket[this.state.currentFlowerId] || 0) + 1;

      // Log history
      this.state.history.unshift({
        flowerId: this.state.currentFlowerId,
        flowerName: flower.name,
        icon: flower.icon,
        timestamp: new Date().toISOString()
      });

      // Celebration effects
      this.triggerHarvestCelebration(flower);

      // Reset for next seed
      this.state.progress = 0;
      this.state.moisture = 70;
      this.state.sunlight = 70;

      // Choose next random seed or keep current
      const allSeeds = Object.keys(root.FLOWER_CATALOG);
      const nextSeed = allSeeds[Math.floor(Math.random() * allSeeds.length)];
      this.state.currentFlowerId = nextSeed;

      this.saveState();
      this.render();

      // Show toast
      if (typeof showToast === 'function') {
        showToast(`🎉 Thu hoạch thành công ${flower.icon} ${flower.name}! Đã thêm vào giỏ hoa của cô Nguyệt! 🧺`);
      }
    },

    selectSeed(flowerId) {
      if (!root.FLOWER_CATALOG[flowerId]) return;
      this.state.currentFlowerId = flowerId;
      this.state.progress = 0;
      this.state.moisture = 80;
      this.state.sunlight = 80;

      const flower = root.FLOWER_CATALOG[flowerId];
      this.saveState();
      this.render();
      this.closeModal();

      if (typeof showToast === 'function') {
        showToast(`🌱 Đã gieo hạt giống ${flower.icon} ${flower.name}! Cùng chăm sóc để hoa sớm nở rộ nhé! ✨`);
      }
    },

    // Visual Rendering
    render() {
      const flower = root.FLOWER_CATALOG[this.state.currentFlowerId] || root.FLOWER_CATALOG.sunflower;
      const p = Math.round(this.state.progress || 0);

      // 1. Render Flower Pot SVG
      const potWrapper = document.getElementById('garden-pot-wrapper');
      if (potWrapper && typeof root.renderFlowerPotSvg === 'function') {
        potWrapper.innerHTML = root.renderFlowerPotSvg(this.state.currentFlowerId, p);
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
      if (harvestVal) harvestVal.textContent = `${this.state.harvestCount} bông`;
      if (harvestBadge) harvestBadge.textContent = this.state.harvestCount;

      // 3. Stage Badge Text & Styling
      if (stageBadge) {
        if (p >= 100) {
          stageBadge.textContent = '🌸 Nở Rộ Rực Rỡ!';
          stageBadge.className = 'garden-stage-badge stage-blooming';
        } else if (p >= 60) {
          stageBadge.textContent = '🪴 Đang E Ấp Nụ';
          stageBadge.className = 'garden-stage-badge stage-budding';
        } else if (p >= 25) {
          stageBadge.textContent = '🌿 Đang Nảy Mầm';
          stageBadge.className = 'garden-stage-badge stage-sprouting';
        } else {
          stageBadge.textContent = '🌱 Vừa Gieo Hạt';
          stageBadge.className = 'garden-stage-badge stage-seeding';
        }
      }

      // 4. Action buttons: show/hide harvest vs care
      const btnHarvest = document.getElementById('btn-harvest-flower');
      const btnWater = document.getElementById('btn-water-flower');
      const btnSun = document.getElementById('btn-sun-flower');
      const btnFertilize = document.getElementById('btn-fertilize-flower');

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
        glow.style.background = p >= 100 ? flower.bgGlow : 'radial-gradient(circle, rgba(254, 243, 199, 0.4) 0%, transparent 70%)';
      }
    },

    updateSpeechBubble(msg) {
      const bubble = document.getElementById('garden-subtitle');
      if (bubble) {
        bubble.textContent = msg;
        bubble.classList.remove('pop-anim');
        void bubble.offsetWidth; // trigger reflow
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
      const flower = root.FLOWER_CATALOG[this.state.currentFlowerId];
      this.updateSpeechBubble(`WOOHOO! ${flower.icon} ${flower.name} đã bung nở tuyệt đẹp! Chúc cô một ngày thật rực rỡ! 🌸💖`);
      this.spawnParticles('🌸', 8);
      this.spawnParticles('✨', 8);
    },

    triggerHarvestCelebration(flower) {
      // Confetti burst
      const symbols = [flower.icon, '💐', '✨', '🎉', '🌟', '💖'];
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          this.spawnParticles(symbols[Math.floor(Math.random() * symbols.length)], 2);
        }, i * 60);
      }
      this.updateSpeechBubble(`Đã thu hoạch ${flower.icon} ${flower.name} vào giỏ! ${flower.quote}`);
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
      // Very slow decay over hours so plant feels alive
      setInterval(() => {
        if (this.state.progress < 100) {
          this.state.moisture = Math.max(20, this.state.moisture - 0.5);
          this.state.sunlight = Math.max(20, this.state.sunlight - 0.5);
          this.render();
          this.saveState();
        }
      }, 60000); // every minute
    },

    // ==========================================
    // 3. MODALS: SEED SELECTOR & FLOWER BASKET
    // ==========================================
    openSeedModal() {
      let modal = document.getElementById('garden-seed-modal');
      if (!modal) {
        modal = this.createSeedModalDom();
        document.body.appendChild(modal);
      }
      this.renderSeedGrid();
      modal.classList.add('active');
    },

    createSeedModalDom() {
      const modal = document.createElement('div');
      modal.className = 'modal-overlay garden-modal';
      modal.id = 'garden-seed-modal';
      modal.innerHTML = `
        <div class="modal-card garden-modal-card">
          <div class="modal-header">
            <h3>🌱 Chọn Hạt Giống Hoa Mới</h3>
            <button class="modal-close-btn" id="btn-close-seed-modal">&times;</button>
          </div>
          <p class="modal-subtext">Hãy chọn một loài hoa mà cô Nguyệt muốn gieo trồng trong khu vườn hôm nay:</p>
          <div class="garden-seed-grid" id="garden-seed-grid"></div>
        </div>
      `;
      modal.querySelector('#btn-close-seed-modal').addEventListener('click', () => {
        modal.classList.remove('active');
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
      return modal;
    },

    renderSeedGrid() {
      const grid = document.getElementById('garden-seed-grid');
      if (!grid) return;
      grid.innerHTML = '';

      Object.values(root.FLOWER_CATALOG).forEach(f => {
        const isCurrent = (f.id === this.state.currentFlowerId);
        const card = document.createElement('div');
        card.className = `garden-seed-card ${isCurrent ? 'selected' : ''}`;
        card.innerHTML = `
          <div class="seed-card-icon" style="background: ${f.bgGlow};">${f.icon}</div>
          <div class="seed-card-info">
            <h4 style="color: ${f.accentColor};">${f.name}</h4>
            <span class="seed-scientific">${f.scientific}</span>
            <p class="seed-meaning">"${f.meaning}"</p>
          </div>
          <button class="btn ${isCurrent ? 'btn-primary' : 'btn-secondary'} btn-small btn-plant-seed">
            ${isCurrent ? '🌱 Đang trồng' : 'Gieo hạt'}
          </button>
        `;
        card.querySelector('.btn-plant-seed').addEventListener('click', () => {
          this.selectSeed(f.id);
        });
        grid.appendChild(card);
      });
    },

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
            <h3>🧺 Giỏ Hoa Của Cô Nguyệt</h3>
            <button class="modal-close-btn" id="btn-close-basket-modal">&times;</button>
          </div>
          <div class="garden-title-badge-wrap">
            <span class="gardener-title-badge" id="gardener-title-badge">🌸 Người Gieo Mầm Hạnh Phúc</span>
            <span class="total-harvested-badge">Tổng: <b id="basket-total-count">0</b> bông hoa</span>
          </div>
          <p class="modal-subtext">Bộ sưu tập các loài hoa tuyệt đẹp mà cô giáo đã tự tay vun trồng:</p>
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

      // Dynamic Title based on harvest count
      if (titleBadge) {
        if (total >= 20) titleBadge.textContent = '👑 Nàng Thơ Vườn Địa Đàng';
        else if (total >= 10) titleBadge.textContent = '🌟 Bàn Tay Xanh Kỳ Diệu';
        else if (total >= 5) titleBadge.textContent = '🌷 Chuyên Gia Làm Vườn';
        else titleBadge.textContent = '🌱 Người Gieo Mầm Hạnh Phúc';
      }

      grid.innerHTML = '';
      Object.values(root.FLOWER_CATALOG).forEach(f => {
        const count = (this.state.basket && this.state.basket[f.id]) || 0;
        const item = document.createElement('div');
        item.className = `basket-item ${count > 0 ? 'collected' : 'locked'}`;
        item.innerHTML = `
          <div class="basket-item-icon" style="background: ${f.bgGlow};">${f.icon}</div>
          <div class="basket-item-info">
            <h4>${f.name}</h4>
            <span class="basket-item-count">Đã thu hoạch: <b>${count}</b> bông</span>
          </div>
        `;
        grid.appendChild(item);
      });
    },

    closeModal() {
      document.querySelectorAll('.garden-modal').forEach(m => m.classList.remove('active'));
    }
  };

  root.FlowerGarden = FlowerGarden;

})(typeof window !== 'undefined' ? window : global);
