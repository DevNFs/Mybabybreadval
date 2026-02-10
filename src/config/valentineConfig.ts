import img1 from "@/public/mytype.jpg"
import img2 from "@/public/young.jpg"
import img3 from "@/public/grown.jpg"
import img4 from "@/public/birth.jpg"


// ============================================
// PERSONALIZE YOUR VALENTINE'S MESSAGE HERE
// ============================================

export const valentineConfig = {
  // Her name - displayed prominently throughout
  herName: "My Baby bread",

  // Your photos together - add image URLs here
  // You can upload photos to the project and import them, or use external URLs
  photos: [
     img1,
     img2,
     img3,
     img4,
  ] as string[],

  // Photo captions (optional) - one for each photo
  photoCaptions: [
    "you're the first girl that in less than two months i trusted soo much to open up to and felt safe.",
    "you're the first girl i ever laguhed and gisted with for over 6 hours and wasn't tired.",
    "when i look into your eyes, i see my first daughter having the same eye color with that mathematics brain of yours😅🥰.",
    " Fide & El, me and you against the world,🖤❤️."
    
  ] as string[],

  // Custom facts about her (used in FactsSection)
  facts: [
    "The way you always want me to keep talking even when there's nothing else to say🤭💫🌠",
    "The fact that you're open to corrections and trust my decisions✨",
    "your hardworking nature keeps me in awwww✨✨ ",
    "the fact that you're a packged, covered and preserved lady(my baby bread), makes me wanna marry you already🌹",
  ],

  // Memory section lines
  memoryLines: [
    "In every quiet moment,",
    "in every shared laugh,",
    "in every glance that says more than words ever could",
    "I've found something I never knew I was looking for.",
  ],

  // The special closing line in memory section
  memoryClosingLine: "You are my unexpected everything...",

  // Final celebration message
  celebrationMessage: "I can't wait to create more beautiful memories together.",
};
