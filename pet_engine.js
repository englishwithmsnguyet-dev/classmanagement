/**
 * VIRTUAL PET INTERACTION & ANIMATION ENGINE (V3.0 - MASTER ARTWORK ALIGNED)
 * Exactly aligned with Cô Nguyệt's master illustration sheet:
 * - 13 Original Characters with authentic artwork portraits & 3-state sprites (Idle, Action, Sleep)
 * - Trait descriptions in both English & Vietnamese
 * - Procedural acoustic formant audio synthesis
 */
(function(root) {
  'use strict';

  // ==========================================
  // 1. ADVANCED PROCEDURAL WEB AUDIO SYNTHESIZER
  // ==========================================
  const PetSoundEngine = (function() {
    let audioCtx = null;
    let isMuted = localStorage.getItem('pet_sound_muted') === 'true';

    function getAudioContext() {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function toggleMute() {
      isMuted = !isMuted;
      localStorage.setItem('pet_sound_muted', isMuted);
      updateMuteButtonUI();
      return isMuted;
    }

    function updateMuteButtonUI() {
      const icon = document.getElementById('pet-sound-icon');
      const btn = document.getElementById('btn-pet-sound');
      if (icon) {
        icon.textContent = isMuted ? '🔇' : '🔊';
      }
      if (btn) {
        btn.title = isMuted ? 'Bật âm thanh thú cưng' : 'Tắt âm thanh thú cưng';
        btn.classList.toggle('is-muted', isMuted);
      }
    }

    function play(type) {
      if (isMuted) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;

        switch (type) {
          case 'meow': {
            // Realistic kitten meow with dual formant vocal tract filtering
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            osc1.type = 'sawtooth';
            osc2.type = 'triangle';

            osc1.frequency.setValueAtTime(460, now);
            osc1.frequency.exponentialRampToValueAtTime(740, now + 0.18);
            osc1.frequency.exponentialRampToValueAtTime(480, now + 0.55);

            osc2.frequency.setValueAtTime(462, now);
            osc2.frequency.exponentialRampToValueAtTime(744, now + 0.18);
            osc2.frequency.exponentialRampToValueAtTime(482, now + 0.55);

            // Formant 1: Oral cavity sweep [e] -> [o]
            const formant1 = ctx.createBiquadFilter();
            formant1.type = 'bandpass';
            formant1.Q.setValueAtTime(4.0, now);
            formant1.frequency.setValueAtTime(650, now);
            formant1.frequency.exponentialRampToValueAtTime(1200, now + 0.18);
            formant1.frequency.exponentialRampToValueAtTime(600, now + 0.55);

            // Formant 2: Nasal peak ~1750Hz
            const formant2 = ctx.createBiquadFilter();
            formant2.type = 'peaking';
            formant2.frequency.setValueAtTime(1750, now);
            formant2.gain.setValueAtTime(6, now);

            // Lowpass to soften saw edges
            const lpf = ctx.createBiquadFilter();
            lpf.type = 'lowpass';
            lpf.frequency.setValueAtTime(2800, now);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.linearRampToValueAtTime(0.20, now + 0.08);
            gain.gain.exponentialRampToValueAtTime(0.14, now + 0.25);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);

            osc1.connect(formant1);
            osc2.connect(formant1);
            formant1.connect(formant2);
            formant2.connect(lpf);
            lpf.connect(gain);
            gain.connect(ctx.destination);

            osc1.start(now);
            osc2.start(now);
            osc1.stop(now + 0.6);
            osc2.stop(now + 0.6);
            break;
          }

          case 'bark': {
            // Realistic energetic double bark ("Gâu! Gâu!")
            function singleWoof(startTime, pitch, vol) {
              const bufSize = Math.floor(ctx.sampleRate * 0.025);
              const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
              const data = buf.getChannelData(0);
              for (let i = 0; i < bufSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufSize * 0.2));
              }
              const noise = ctx.createBufferSource();
              noise.buffer = buf;
              const nFilter = ctx.createBiquadFilter();
              nFilter.type = 'bandpass';
              nFilter.frequency.setValueAtTime(800, startTime);
              const nGain = ctx.createGain();
              nGain.gain.setValueAtTime(vol * 0.35, startTime);
              noise.connect(nFilter);
              nFilter.connect(nGain);
              nGain.connect(ctx.destination);
              noise.start(startTime);

              const osc = ctx.createOscillator();
              osc.type = 'sawtooth';
              osc.frequency.setValueAtTime(pitch, startTime);
              osc.frequency.exponentialRampToValueAtTime(pitch * 0.45, startTime + 0.14);

              const bpf = ctx.createBiquadFilter();
              bpf.type = 'bandpass';
              bpf.frequency.setValueAtTime(pitch * 1.3, startTime);
              bpf.Q.setValueAtTime(2.5, startTime);

              const gain = ctx.createGain();
              gain.gain.setValueAtTime(0.0001, startTime);
              gain.gain.linearRampToValueAtTime(vol, startTime + 0.015);
              gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.16);

              osc.connect(bpf);
              bpf.connect(gain);
              gain.connect(ctx.destination);

              osc.start(startTime);
              osc.stop(startTime + 0.18);
            }

            singleWoof(now, 380, 0.24);
            singleWoof(now + 0.14, 320, 0.28);
            break;
          }

          case 'squeak': {
            // Cute melodic double chirp for rabbit & penguin
            function chirp(startTime, f1, f2) {
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              osc.type = 'sine';
              osc.frequency.setValueAtTime(f1, startTime);
              osc.frequency.exponentialRampToValueAtTime(f2, startTime + 0.06);
              osc.frequency.exponentialRampToValueAtTime(f1 * 0.9, startTime + 0.12);

              gain.gain.setValueAtTime(0.0001, startTime);
              gain.gain.linearRampToValueAtTime(0.18, startTime + 0.02);
              gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.14);

              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start(startTime);
              osc.stop(startTime + 0.15);
            }

            chirp(now, 1300, 1950);
            chirp(now + 0.11, 1500, 2200);
            break;
          }

          case 'crunch': {
            // Triple crisp crunch bursts for eating bamboo / carrot
            function oneCrunch(t, pitch) {
              const bufSize = Math.floor(ctx.sampleRate * 0.07);
              const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
              const data = buf.getChannelData(0);
              for (let i = 0; i < bufSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufSize * 0.3));
              }
              const noise = ctx.createBufferSource();
              noise.buffer = buf;

              const bpf = ctx.createBiquadFilter();
              bpf.type = 'bandpass';
              bpf.frequency.setValueAtTime(pitch, t);
              bpf.Q.setValueAtTime(2.2, t);

              const gain = ctx.createGain();
              gain.gain.setValueAtTime(0.32, t);
              gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

              noise.connect(bpf);
              bpf.connect(gain);
              gain.connect(ctx.destination);
              noise.start(t);
            }

            oneCrunch(now, 1600);
            oneCrunch(now + 0.08, 1350);
            oneCrunch(now + 0.17, 1800);
            break;
          }

          case 'chime': {
            // Tibetan Singing Bowl with 432Hz fundamental & golden harmonics
            const harmonics = [
              { freq: 432, gain: 0.20, decay: 2.2 },
              { freq: 864, gain: 0.14, decay: 1.8 },
              { freq: 1296, gain: 0.09, decay: 1.4 },
              { freq: 2160, gain: 0.05, decay: 0.9 }
            ];

            harmonics.forEach(h => {
              const osc = ctx.createOscillator();
              const g = ctx.createGain();
              osc.type = 'sine';
              osc.frequency.setValueAtTime(h.freq, now);

              g.gain.setValueAtTime(0.0001, now);
              g.gain.linearRampToValueAtTime(h.gain, now + 0.04);
              g.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

              osc.connect(g);
              g.connect(ctx.destination);
              osc.start(now);
              osc.stop(now + h.decay + 0.1);
            });
            break;
          }

          case 'purr': {
            // Dual AM rhythmic purring for cats
            const carrier = ctx.createOscillator();
            const mod = ctx.createOscillator();
            const modGain = ctx.createGain();
            const mainGain = ctx.createGain();

            carrier.type = 'triangle';
            carrier.frequency.setValueAtTime(78, now);

            mod.type = 'sine';
            mod.frequency.setValueAtTime(25, now);
            modGain.gain.setValueAtTime(45, now);
            mod.connect(carrier.frequency);

            mainGain.gain.setValueAtTime(0.0001, now);
            mainGain.gain.linearRampToValueAtTime(0.24, now + 0.15);
            mainGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

            carrier.connect(mainGain);
            mainGain.connect(ctx.destination);

            carrier.start(now);
            mod.start(now);
            carrier.stop(now + 0.85);
            mod.stop(now + 0.85);
            break;
          }

          case 'happy': {
            // 5-note sparkling harp arpeggio
            const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
            notes.forEach((freq, idx) => {
              const osc = ctx.createOscillator();
              const g = ctx.createGain();
              const t = now + idx * 0.06;
              osc.type = 'triangle';
              osc.frequency.setValueAtTime(freq, t);

              g.gain.setValueAtTime(0.0001, t);
              g.gain.linearRampToValueAtTime(0.14, t + 0.02);
              g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);

              osc.connect(g);
              g.connect(ctx.destination);
              osc.start(t);
              osc.stop(t + 0.38);
            });
            break;
          }
        }
      } catch (err) {
        console.warn('Audio play error:', err);
      }
    }

    return {
      play,
      toggleMute,
      updateMuteButtonUI,
      get isMuted() { return isMuted; }
    };
  })();

  // ==========================================
  // 2. PET INTERACTION & RENDERING ENGINE
  // ==========================================
  const PetEngine = {
    currentCategory: 'all',
    tempSelectedPetId: 'nana',
    happyTimer: null,
    speechTimer: null,

    init() {
      PetSoundEngine.updateMuteButtonUI();
      this.bindSoundButton();
      this.bindCategoryTabs();
    },

    bindSoundButton() {
      const btn = document.getElementById('btn-pet-sound');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const muted = PetSoundEngine.toggleMute();
          if (typeof showToast === 'function') {
            showToast(muted ? '🔇 Đã tắt âm thanh thú cưng' : '🔊 Đã bật âm thanh thú cưng');
          }
        });
      }
    },

    bindCategoryTabs() {
      const modal = document.getElementById('pet-modal');
      if (modal) {
        modal.addEventListener('click', (e) => {
          const tab = e.target.closest('.pet-category-tab');
          if (tab) {
            const category = tab.dataset.category;
            this.filterModalPets(category);
          }
        });
      }
    },

    getPetData(id) {
      if (root.PetDefinitions && typeof root.PetDefinitions.getPet === 'function') {
        return root.PetDefinitions.getPet(id);
      }
      if (root.PET_REGISTRY && root.PET_REGISTRY[id]) {
        return root.PET_REGISTRY[id];
      }
      return null;
    },

    render(petState) {
      const avatarWrapper = document.getElementById('pet-avatar-wrapper');
      if (!avatarWrapper) return;

      const petId = (petState && petState.id) ? petState.id : 'nana';
      const petData = this.getPetData(petId) || this.getPetData('nana');
      if (!petData) return;

      // Render the living, fully animated SVG character on stage
      avatarWrapper.className = `pet-avatar-wrapper anim-${petData.idleType || 'cat-swish'}`;
      avatarWrapper.style.setProperty('--pet-accent', petData.accentColor || '#EA580C');
      avatarWrapper.innerHTML = petData.svg;

      const nameEl = document.getElementById('pet-name');
      const speciesEl = document.getElementById('pet-species-name');
      const feedIcon = document.getElementById('pet-feed-icon');

      if (nameEl) nameEl.textContent = (petState && petState.name) ? petState.name : petData.name;
      if (speciesEl) speciesEl.textContent = `${petData.species} (${petData.enName || ''})`;
      if (feedIcon) feedIcon.textContent = petData.foodIcon;

      this.updateStatusBars(petState);
      this.speakGreeting(petData, petState);
    },

    speak(text) {
      const bubble = document.getElementById('pet-speech');
      if (!bubble) return;
      bubble.textContent = `"${text}"`;
      bubble.classList.remove('bubble-pop');
      void bubble.offsetWidth;
      bubble.classList.add('bubble-pop');

      if (this.speechTimer) clearTimeout(this.speechTimer);
      this.speechTimer = setTimeout(() => {
        if (bubble) bubble.classList.remove('bubble-pop');
      }, 5000);
    },

    speakGreeting(petData, petState) {
      if (!petData) return;
      const quotes = petData.quotes || {};
      if (petState && petState.hunger < 35 && quotes.hungry && quotes.hungry.length > 0) {
        const rand = quotes.hungry[Math.floor(Math.random() * quotes.hungry.length)];
        this.speak(rand);
      } else if (quotes.greetings && quotes.greetings.length > 0) {
        const rand = quotes.greetings[Math.floor(Math.random() * quotes.greetings.length)];
        this.speak(rand);
      }
    },

    triggerHappyReaction(petData, customSound) {
      const wrapper = document.getElementById('pet-avatar-wrapper');
      const actionBadge = document.getElementById('pet-sprite-action-badge');

      if (wrapper) {
        wrapper.classList.add('is-happy');
        if (actionBadge) actionBadge.style.display = 'block';

        if (this.happyTimer) clearTimeout(this.happyTimer);
        this.happyTimer = setTimeout(() => {
          if (wrapper) wrapper.classList.remove('is-happy');
          if (actionBadge) actionBadge.style.display = 'none';
        }, 2200);
      }

      const soundType = customSound || (petData ? petData.soundType : 'happy');
      PetSoundEngine.play(soundType);
    },

    spawnParticle(emoji) {
      const container = document.getElementById('pet-floating-effects');
      if (!container) return;
      const particle = document.createElement('span');
      particle.className = 'floating-particle';
      particle.textContent = emoji;

      const randomX = (Math.random() - 0.5) * 70;
      particle.style.left = `calc(50% + ${randomX}px)`;
      particle.style.bottom = '55px';
      const driftX = (Math.random() - 0.5) * 60;
      particle.style.setProperty('--tx', `${driftX}px`);

      container.appendChild(particle);
      setTimeout(() => {
        if (typeof particle.remove === 'function') {
          particle.remove();
        } else if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1200);
    },

    triggerPhysicalMotion(animClass) {
      const wrapper = document.getElementById('pet-avatar-wrapper');
      if (!wrapper) return;
      wrapper.classList.remove('bouncing', 'wiggling');
      void wrapper.offsetWidth;
      wrapper.classList.add(animClass);
      setTimeout(() => {
        if (wrapper) wrapper.classList.remove(animClass);
      }, 600);
    },

    updateStatusBars(pet) {
      if (!pet) return;
      const hungerSegments = document.getElementById('pet-hunger-segments');
      const hungerText = document.getElementById('pet-hunger-text');
      const happinessSegments = document.getElementById('pet-happiness-segments');
      const happinessText = document.getElementById('pet-happiness-text');
      const moodBadge = document.getElementById('pet-mood-badge');
      const levelEl = document.getElementById('pet-level');
      const streakEl = document.getElementById('pet-streak');
      const foodBowlCount = document.getElementById('food-bowl-count');

      if (levelEl) levelEl.textContent = pet.level || 1;
      if (streakEl) streakEl.textContent = pet.streak || 1;
      if (hungerText) hungerText.textContent = pet.hunger;
      if (happinessText) happinessText.textContent = pet.happiness;
      if (foodBowlCount) foodBowlCount.textContent = pet.hunger;

      if (hungerSegments) {
        hungerSegments.innerHTML = '';
        const activeHungerCount = Math.round((pet.hunger / 100) * 10);
        for (let i = 0; i < 10; i++) {
          const block = document.createElement('div');
          block.className = `segment-block ${i < activeHungerCount ? 'active-hunger' : ''}`;
          hungerSegments.appendChild(block);
        }
      }

      if (happinessSegments) {
        happinessSegments.innerHTML = '';
        const activeHappyCount = Math.round((pet.happiness / 100) * 10);
        for (let i = 0; i < 10; i++) {
          const block = document.createElement('div');
          block.className = `segment-block ${i < activeHappyCount ? 'active-happiness' : ''}`;
          happinessSegments.appendChild(block);
        }
      }

      if (moodBadge) {
        if (pet.happiness >= 80 && pet.hunger >= 60) {
          moodBadge.textContent = 'Cực Kỳ Vui Vẻ 🥰';
          moodBadge.style.color = '#276749';
          moodBadge.style.background = '#c6f6d5';
          moodBadge.style.borderColor = '#9ae6b4';
        } else if (pet.happiness >= 50) {
          moodBadge.textContent = 'Thư Thái 🌸';
          moodBadge.style.color = '#2b6cb0';
          moodBadge.style.background = '#ebf8ff';
          moodBadge.style.borderColor = '#bee3f8';
        } else {
          moodBadge.textContent = 'Cần Vuốt Ve 💕';
          moodBadge.style.color = '#97266d';
          moodBadge.style.background = '#fed7e2';
          moodBadge.style.borderColor = '#fbb6ce';
        }
      }
    },

    feed(petState, onSave) {
      if (!petState) return;
      const petData = this.getPetData(petState.id) || this.getPetData('nana');

      if (petState.hunger >= 100) {
        this.speak(`Em no căng tròn bụng rồi cô Nguyệt ơi! Lát nữa cô hãy cho em ăn tiếp nha! 😋`);
        this.triggerPhysicalMotion('bouncing');
        this.spawnParticle('😋');
        PetSoundEngine.play('happy');
        return;
      }

      petState.hunger = Math.min(100, (petState.hunger || 0) + 25);
      petState.happiness = Math.min(100, (petState.happiness || 0) + 8);
      petState.lastFedDate = new Date().toISOString();

      this.addExp(petState, 15);
      this.triggerPhysicalMotion('bouncing');
      this.triggerHappyReaction(petData, 'crunch');
      this.spawnParticle(petData.foodIcon);

      if (petData.quotes && petData.quotes.feed && petData.quotes.feed.length > 0) {
        const rand = petData.quotes.feed[Math.floor(Math.random() * petData.quotes.feed.length)];
        this.speak(rand);
      }

      this.updateStatusBars(petState);
      if (typeof onSave === 'function') onSave();
    },

    stroke(petState, onSave) {
      if (!petState) return;
      const petData = this.getPetData(petState.id) || this.getPetData('nana');

      petState.happiness = Math.min(100, (petState.happiness || 0) + 18);
      petState.lastPettedDate = new Date().toISOString();

      this.addExp(petState, 10);
      this.triggerPhysicalMotion('wiggling');
      this.triggerHappyReaction(petData, petData.soundType);

      const hearts = ['💖', '💕', '✨', '🥰', '🌸', '🐾'];
      this.spawnParticle(hearts[Math.floor(Math.random() * hearts.length)]);

      if (petData.quotes && petData.quotes.pet && petData.quotes.pet.length > 0) {
        const rand = petData.quotes.pet[Math.floor(Math.random() * petData.quotes.pet.length)];
        this.speak(rand);
      }

      this.updateStatusBars(petState);
      if (typeof onSave === 'function') onSave();
    },

    addExp(petState, amount) {
      if (!petState) return;
      petState.exp = (petState.exp || 0) + amount;
      if (petState.exp >= 100) {
        petState.level = (petState.level || 1) + 1;
        petState.exp = petState.exp - 100;
        PetSoundEngine.play('happy');
        if (typeof showToast === 'function') {
          showToast(`🎉 Tuyệt vời! Bé ${petState.name} đã thăng cấp lên Cấp ${petState.level}!`);
        }
        this.speak(`WOOHOO! Em đã lên Cấp ${petState.level} rồi cô Nguyệt ơi! 🎉✨ Cảm ơn cô đã chăm sóc em thật tốt! 🥰`);
      }
    },

    openModal(petState) {
      const modal = document.getElementById('pet-modal');
      const grid = document.getElementById('pet-selection-grid');
      const inputName = document.getElementById('input-pet-name');
      if (!modal || !grid) return;

      this.tempSelectedPetId = (petState && petState.id) ? petState.id : 'nana';

      if (inputName) {
        const curPet = this.getPetData(this.tempSelectedPetId);
        inputName.value = (petState && petState.name) ? petState.name : (curPet ? curPet.name : 'Na Na');
      }

      this.renderCategoryTabsHeader();
      this.renderGalleryGrid(grid, this.currentCategory);

      modal.classList.add('active');
    },

    renderCategoryTabsHeader() {
      let tabsContainer = document.getElementById('pet-category-tabs');
      if (!tabsContainer) {
        const modalBody = document.querySelector('#pet-modal .modal-body');
        if (!modalBody) return;
        tabsContainer = document.createElement('div');
        tabsContainer.id = 'pet-category-tabs';
        tabsContainer.className = 'pet-category-tabs';
        modalBody.insertBefore(tabsContainer, document.getElementById('pet-selection-grid'));
      }

      const categories = [
        { id: 'all', label: 'Tất Cả', icon: '🐾', count: 13 },
        { id: 'cat', label: 'Mèo Cưng', icon: '🐱', count: 5 },
        { id: 'dog', label: 'Cún Cưng', icon: '🐶', count: 3 },
        { id: 'other', label: 'Muông Thú', icon: '🐰', count: 5 }
      ];

      tabsContainer.innerHTML = categories.map(cat => `
        <button type="button" class="btn pet-category-tab ${this.currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
          <span>${cat.icon} ${cat.label}</span>
          <span class="tab-count">${cat.count}</span>
        </button>
      `).join('');
    },

    filterModalPets(category) {
      this.currentCategory = category || 'all';
      this.renderCategoryTabsHeader();
      const grid = document.getElementById('pet-selection-grid');
      if (grid) {
        this.renderGalleryGrid(grid, this.currentCategory);
      }
    },

    renderGalleryGrid(grid, category) {
      grid.innerHTML = '';
      const allPets = root.PetDefinitions ? root.PetDefinitions.getAllPets() : Object.values(root.PET_REGISTRY || {});
      const filtered = (category === 'all' || !category)
        ? allPets
        : allPets.filter(p => p.category === category);

      filtered.forEach(p => {
        const isSelected = p.id === this.tempSelectedPetId;
        const card = document.createElement('div');
        card.className = `pet-select-card ${isSelected ? 'active' : ''}`;
        card.dataset.id = p.id;

        card.innerHTML = `
          <div class="card-species-badge species-${p.category}">
            ${p.category === 'cat' ? '🐱 Mèo' : (p.category === 'dog' ? '🐶 Cún' : '✨ Thú Khác')}
          </div>
          <div class="card-master-portrait" style="background: ${p.bgColor || '#fef3c7'};">
            <img src="${p.portraitImg}" alt="${p.name}">
          </div>
          <h4 class="card-pet-name">${p.name} <small style="font-weight: normal; color: #64748b;">(${p.enName})</small></h4>
          <span class="card-trait-tag">✨ ${p.traitVi}</span>
          <p class="card-pet-desc" title="${p.description}">${p.description}</p>
          
          <!-- 3-Sprite Pose Showcase (Ngoan - Vui - Ngủ) -->
          <div class="card-sprite-row" title="3 trạng thái: Đứng ngoan, Vui chơi, Ngủ ngon">
            <div class="sprite-col">
              <img src="${p.idleSprite}" alt="idle">
              <small>Ngoan</small>
            </div>
            <div class="sprite-col">
              <img src="${p.actionSprite}" alt="action">
              <small>Vui</small>
            </div>
            <div class="sprite-col">
              <img src="${p.sleepSprite}" alt="sleep">
              <small>Ngủ</small>
            </div>
          </div>

          <div class="card-pet-food">
            <span>Khoái khẩu:</span> <b>${p.foodIcon} ${p.favoriteFood}</b>
          </div>
          <button type="button" class="btn btn-card-select ${isSelected ? 'btn-selected' : ''}">
            ${isSelected ? '✓ Đang Nuôi' : 'Chọn Bé Này'}
          </button>
        `;

        card.addEventListener('click', () => {
          this.tempSelectedPetId = p.id;
          grid.querySelectorAll('.pet-select-card').forEach(c => {
            c.classList.remove('active');
            const btn = c.querySelector('.btn-card-select');
            if (btn) {
              btn.classList.remove('btn-selected');
              btn.textContent = 'Chọn Bé Này';
            }
          });
          card.classList.add('active');
          const btn = card.querySelector('.btn-card-select');
          if (btn) {
            btn.classList.add('btn-selected');
            btn.textContent = '✓ Đang Chọn';
          }

          const inputName = document.getElementById('input-pet-name');
          if (inputName) {
            const curVal = inputName.value.trim();
            const isAnyDefault = allPets.some(item => item.name === curVal || item.defaultName === curVal);
            if (!curVal || isAnyDefault) {
              inputName.value = p.name;
            }
          }

          PetSoundEngine.play(p.soundType);
        });

        grid.appendChild(card);
      });
    },

    confirmSelection(petState, onSave) {
      if (!petState) return;
      const chosenData = this.getPetData(this.tempSelectedPetId) || this.getPetData('nana');
      petState.id = this.tempSelectedPetId;

      const inputName = document.getElementById('input-pet-name');
      const newName = inputName ? inputName.value.trim() : '';
      petState.name = newName || chosenData.name;

      const modal = document.getElementById('pet-modal');
      if (modal) modal.classList.remove('active');

      this.render(petState);
      if (typeof onSave === 'function') onSave();

      PetSoundEngine.play('happy');
      if (typeof showToast === 'function') {
        showToast(`🐾 Đã chọn bé ${petState.name} (${chosenData.species}) đồng hành cùng cô Nguyệt!`);
      }
    }
  };

  root.PetSoundEngine = PetSoundEngine;
  root.PetEngine = PetEngine;

})(typeof window !== 'undefined' ? window : global);
