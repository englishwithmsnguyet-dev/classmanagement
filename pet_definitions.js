/**
 * VIRTUAL PET REGISTRY & CHARACTER DEFINITIONS
 * Dedicated Single Pet Edition: Na Na (Mèo Mướp Cam)
 * Featuring 2D kawaii character artwork, independent animated poses:
 * Idle, Happy / Stroked, Paw-Licking Grooming, and Peaceful Sleep.
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
          "Cô Nguyệt ơi, Na Na đợi cô từ sớm nè! Hôm nay cô có mệt không? 🥰",
          "Meo~ Cô giáo dạy giỏi số một luôn! Na Na ngồi ngoan cổ vũ cô nè! 🌸🐾"
        ],
        "feed": [
          "Nham nham~ Bát hạt cá hồi thơm lừng giòn rụm! Na Na no căng bụng rồi, cảm ơn cô Nguyệt! 🍲💖",
          "Meo~ Món này ngon tuyệt đỉnh cô ơi! Na Na yêu cô Nguyệt nhất trên đời! ✨",
          "Ngoạm ngoạm... hạt cá hồi giòn tanh tách! Na Na đầy ắp năng lượng rồi ạ! 🐟💖"
        ],
        "pet": [
          "Purrr... Tay cô Nguyệt xoa ấm quá đi à~ Na Na cọ cọ má vào tay cô nè! 🥰🌸",
          "Meo meo~ Đang được cô vuốt ve thì bao nhiêu mệt mỏi tan biến hết luôn! 💕",
          "Đừng dừng lại nha cô ơi, xoa thêm một xíu nữa đi ạ! 💖",
          "Purrrrr... Thích quá đi mất thôi! Na Na giơ hai tay lên ôm cô nè! 🥰✨"
        ],
        "hungry": [
          "Mèo nhà khác toàn được ăn ngon! Hừ... Na Na đói meo rồi cô Nguyệt ơi! 🥺🍲",
          "Meo... bụng Na Na kêu rột rột rồi nè cô Nguyệt ơi! Cho Na Na xin chút hạt cá hồi nha! 🥺🐟"
        ],
        "sleep": [
          "Khò khò... Na Na nằm cuộn tròn ngủ ngoan một xíu nha cô giáo... 💤",
          "Zzz... trong mơ Na Na thấy cả một ngọn núi cá hồi giòn rụm... 🐟💤",
          "Khò... cô Nguyệt dạy xong gọi Na Na dậy nha... zzz 🐾"
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
      "isAuthentic": true,
      "idleImg": "assets/pet/nana_master_2d.png",
      "happyImg": "assets/pet/nana_master_happy.png",
      "lickImg": "assets/pet/nana_master_lick.png",
      "sleepImg": "assets/pet/nana_master_sleep.png",
      "stageImg": "assets/pet/nana_master_2d.png",
      "eyeConfig": {
        "left": { "top": "34.6%", "left": "43.6%", "width": "8.5%", "height": "8.2%" },
        "right": { "top": "27.7%", "left": "61.5%", "width": "7.2%", "height": "9.0%" },
        "furColor": "#f8c896",
        "lashColor": "#371e14"
      },
      "portraitImg": "assets/pet/nana_thumb.png",
      "cardImg": "assets/pet/nana_thumb.png"
    }
  };

  const PetDefinitions = {
    getAllPets() {
      return Object.values(PET_REGISTRY);
    },
    getPet(id) {
      return PET_REGISTRY['nana'];
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
