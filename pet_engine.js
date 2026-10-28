/**
 * VIRTUAL PET INTERACTION & ANIMATION ENGINE
 * Handles:
 * 1. Procedural Web Audio API sound synthesis (meow, bark, squeak, crunch, chime, purr, happy)
 * 2. Species-specific animations, facial expression morphs, and interactive gestures
 * 3. Character Gallery modal builder with category filters and instant live pet switching
 * 4. Stats management (hunger, happiness, streak, level, exp)
 * 5. Floating particle effects & cartoon speech bubbles
 */
(function(root) {
  'use strict';

  // ==========================================
  // 1. PROCEDURAL WEB AUDIO SYNTHESIZER
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
            // Sweet cat kitten meow with soft harmonic envelope
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(640, now);
            osc.frequency.exponentialRampToValueAtTime(860, now + 0.16);
            osc.frequency.exponentialRampToValueAtTime(520, now + 0.48);

            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.18, now + 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.52);
            break;
          }

          case 'bark': {
            // Playful puppy woof: punchy downward sweep with warm triangle wave
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.exponentialRampToValueAtTime(180, now + 0.18);

            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.24, now + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.25);
            break;
          }

          case 'squeak': {
            // High-pitched cute chirp for rabbit / fox / penguin
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1100, now);
            osc.frequency.exponentialRampToValueAtTime(1650, now + 0.09);
            osc.frequency.exponentialRampToValueAtTime(950, now + 0.18);

            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.14, now + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.22);
            break;
          }

          case 'crunch': {
            // Crisp bite / munching sound: filtered noise burst
            const bufferSize = Math.floor(ctx.sampleRate * 0.12);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
              data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
            }
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1400, now);
            filter.Q.setValueAtTime(1.8, now);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.28, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(now);
            break;
          }

          case 'chime': {
            // Zen Capybara singing bowl chime: 528Hz + overtone
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gain = ctx.createGain();

            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(528, now);
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1056, now);

            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.2, now + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(ctx.destination);
            osc1.start(now);
            osc2.start(now);
            osc1.stop(now + 1.25);
            osc2.stop(now + 1.25);
            break;
          }

          case 'purr': {
            // Low rhythmic vibration for cats
            const osc = ctx.createOscillator();
            const lfo = ctx.createOscillator();
            const lfoGain = ctx.createGain();
            const mainGain = ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(75, now);

            lfo.type = 'sine';
            lfo.frequency.setValueAtTime(26, now);
            lfoGain.gain.setValueAtTime(35, now);
            lfo.connect(osc.frequency);

            mainGain.gain.setValueAtTime(0.001, now);
            mainGain.gain.linearRampToValueAtTime(0.2, now + 0.1);
            mainGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

            osc.connect(mainGain);
            mainGain.connect(ctx.destination);
            lfo.start(now);
            osc.start(now);
            lfo.stop(now + 0.65);
            osc.stop(now + 0.65);
            break;
          }

          case 'happy': {
            // Level-up / celebration harp arpeggio: C5 -> E5 -> G5 -> C6
            const freqs = [523.25, 659.25, 783.99, 1046.50];
            freqs.forEach((freq, idx) => {
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              const start = now + idx * 0.07;
              osc.type = 'triangle';
              osc.frequency.setValueAtTime(freq, start);
              gain.gain.setValueAtTime(0.001, start);
              gain.gain.linearRampToValueAtTime(0.12, start + 0.02);
              gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start(start);
              osc.stop(start + 0.3);
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
      // Dynamic delegation in modal
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

    /**
     * Get pet character data from registry
     */
    getPetData(id) {
      if (root.PetDefinitions && typeof root.PetDefinitions.getPet === 'function') {
        return root.PetDefinitions.getPet(id);
      }
      if (root.PET_REGISTRY && root.PET_REGISTRY[id]) {
        return root.PET_REGISTRY[id];
      }
      return null;
    },

    /**
     * Render the active pet onto the stage
     */
    render(petState) {
      const avatarWrapper = document.getElementById('pet-avatar-wrapper');
      if (!avatarWrapper) return;

      const petId = (petState && petState.id) ? petState.id : 'nana';
      const petData = this.getPetData(petId) || this.getPetData('nana');
      if (!petData) return;

      // Ensure stage has correct species class
      avatarWrapper.className = `pet-avatar-wrapper anim-${petData.idleType || 'cat-swish'}`;
      avatarWrapper.innerHTML = petData.svg;

      // Update name and species tag
      const nameEl = document.getElementById('pet-name');
      const speciesEl = document.getElementById('pet-species-name');
      const feedIcon = document.getElementById('pet-feed-icon');

      if (nameEl) nameEl.textContent = (petState && petState.name) ? petState.name : petData.name;
      if (speciesEl) speciesEl.textContent = petData.species;
      if (feedIcon) feedIcon.textContent = petData.foodIcon;

      // Update segment bars
      this.updateStatusBars(petState);

      // Trigger greeting speech
      this.speakGreeting(petData, petState);
    },

    /**
     * Make pet speak a message with cute speech bubble
     */
    speak(text) {
      const bubble = document.getElementById('pet-speech');
      if (!bubble) return;
      bubble.textContent = `"${text}"`;
      bubble.classList.remove('bubble-pop');
      void bubble.offsetWidth; // force reflow
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

    /**
     * Morph facial expressions to happy state
     */
    triggerHappyReaction(petData, customSound) {
      const wrapper = document.getElementById('pet-avatar-wrapper');
      if (wrapper) {
        wrapper.classList.add('is-happy');
        if (this.happyTimer) clearTimeout(this.happyTimer);
        this.happyTimer = setTimeout(() => {
          if (wrapper) wrapper.classList.remove('is-happy');
        }, 2200);
      }

      // Play sound
      const soundType = customSound || (petData ? petData.soundType : 'happy');
      PetSoundEngine.play(soundType);
    },

    /**
     * Floating heart / particle animation
     */
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
        particle.remove();
      }, 1200);
    },

    /**
     * Bounce / Wiggle physical animation
     */
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

    /**
     * Update Segmented Bars for hunger & happiness
     */
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

      // Render 10 blocks for hunger
      if (hungerSegments) {
        hungerSegments.innerHTML = '';
        const activeHungerCount = Math.round((pet.hunger / 100) * 10);
        for (let i = 0; i < 10; i++) {
          const block = document.createElement('div');
          block.className = `segment-block ${i < activeHungerCount ? 'active-hunger' : ''}`;
          hungerSegments.appendChild(block);
        }
      }

      // Render 10 blocks for happiness
      if (happinessSegments) {
        happinessSegments.innerHTML = '';
        const activeHappyCount = Math.round((pet.happiness / 100) * 10);
        for (let i = 0; i < 10; i++) {
          const block = document.createElement('div');
          block.className = `segment-block ${i < activeHappyCount ? 'active-happiness' : ''}`;
          happinessSegments.appendChild(block);
        }
      }

      // Mood badge text & colors
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

    /**
     * Handle Feeding the Pet
     */
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

    /**
     * Handle Stroking / Petting the Pet
     */
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

    /**
     * Add Experience and Level Up
     */
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

    /**
     * Open Character Gallery Modal
     */
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
          <div class="card-avatar">
            ${p.svg}
          </div>
          <h4 class="card-pet-name">${p.name}</h4>
          <span class="card-pet-title">${p.title}</span>
          <p class="card-pet-desc">${p.description}</p>
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

          // Suggest pet's default name if input has previous default or empty
          const inputName = document.getElementById('input-pet-name');
          if (inputName) {
            const curVal = inputName.value.trim();
            const isAnyDefault = allPets.some(item => item.name === curVal || item.defaultName === curVal);
            if (!curVal || isAnyDefault) {
              inputName.value = p.name;
            }
          }

          // Play preview sound
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
