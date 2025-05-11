const memories = [
    "Remember when we danced in the kitchen?",
    "Thanks for every bedtime story you told me.",
    "Our road trips and silly songs—I'll never forget them.",
    "You make the best pancakes in the world.",
    "I love how you always know when something's wrong."
  ];
  
  function showMemory() {
    const randomIndex = Math.floor(Math.random() * memories.length);
    document.getElementById("memory-display").innerText = memories[randomIndex];
  }
  
  const imagePaths = [
    { src: "img1.jpg", alt: "Memory 1",message:"jaipur ki yaadein" },
    { src: "img2.jpg", alt: "Memory 2",message:"Beautiful mumma" },
    { src: "img3.jpg", alt: "Memory 3",message:"Diwali memories" },
    { src: "img4.jpg", alt: "Memory 4",message:"Bohot purani photo" },
    { src: "img5.jpg", alt: "Memory 4",message:"Kitni cute hu mein" },
    { src: "img6.jpg", alt: "Memory 4",message:"Sundar mummy" },
    { src: "img7.jpg", alt: "Memory 4",message:"stylo mumma" },
    { src: "img8.jpg", alt: "Memory 4",message:"Yellow mellow" },
    { src: "img9.jpg", alt: "Memory 4",message:"Smilie" },

  ];
  
  const photoGallery = document.getElementById("photo-gallery");
  
  
  imagePaths.forEach((img) => {
    const card = document.createElement("div");
    card.className = "flip-card w-full h-48";
  
    card.innerHTML = `
      <div class="flip-card-inner w-full h-48">
        <div class="flip-card-front bg-white/80 flex items-center justify-center text-gray-800 text-center font-semibold p-4">
          ${img.message}
        </div>
        <div class="flip-card-back">
          <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover">
        </div>
      </div>
    `;
  
    card.onclick = () => flipCard(card);
    photoGallery.appendChild(card);
  });

  function flipCard(clickedCard) {
    // Close all other flipped cards
    document.querySelectorAll(".flip-card.flipped").forEach(card => {
      if (card !== clickedCard) {
        card.classList.remove("flipped");
      }
    });
  
    // Toggle current card
    clickedCard.classList.toggle("flipped");
  }
  
  function revealPhoto(clickedCard) {
    const allCards = document.querySelectorAll('#photo-gallery div');
  
    allCards.forEach(card => {
      const placeholder = card.querySelector(".placeholder");
      const image = card.querySelector("img");
  
      if (placeholder && image) {
        placeholder.style.display = "flex";
        image.classList.remove("opacity-100");
        image.classList.add("opacity-0");
      }
    });
  
    const placeholder = clickedCard.querySelector(".placeholder");
    const image = clickedCard.querySelector("img");
  
    if (placeholder && image) {
      placeholder.style.display = "none";
      image.classList.remove("opacity-0");
      image.classList.add("opacity-100");
    }
  }
  
  
  let memoryShown = false;

function showMemory() {
  if (!memoryShown) {
    showCelebrationEmojis();

    // Delay to show the image after emojis
    setTimeout(() => {
      document.getElementById('memory-overlay').classList.remove('hidden');
    }, 400);

    memoryShown = true;
  }
}

// Hide overlay on click
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('memory-overlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      overlay.classList.add('hidden');
      memoryShown = false;
    });
  }
});

// Show flying emojis
function showCelebrationEmojis() {
  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement('div');
    emoji.textContent = ["🎉", "✨"][Math.floor(Math.random() * 5)];
    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = Math.random() * 100 + "vh";
    emoji.style.fontSize = "2rem";
    emoji.style.animation = "fall 1s ease-out forwards";
    emoji.style.zIndex = 1000;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1000);
  }
}

// Add keyframes for falling effect
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100px); opacity: 0; }
  }
`;
document.head.appendChild(style);
