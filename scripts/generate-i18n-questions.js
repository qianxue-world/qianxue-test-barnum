// Script to help generate i18n translations for 60 questions
// Run: node scripts/generate-i18n-questions.js

const fs = require('fs');
const path = require('path');

// This is a template - you need to fill in the translations
const questionsTemplate = {
  zh: [
    // Question 0-14: E vs I
    {
      question: "在聚会上，你最可能：",
      options: ["像社交蝴蝶一样穿梭人群 🦋", "找到主人的猫成为好朋友 🐱", "发起康加舞 💃", "像龙一样守护零食桌 🐉"],
      traits: ["E", "I", "E", "I"]
    },
    {
      question: "你理想的周五晚上：",
      options: ["和20个朋友唱卡拉OK！🎤", "Netflix、睡衣、零人类 📺", "主持游戏之夜 🎲", "在毯子堡里看书 📚"],
      traits: ["E", "I", "E", "I"]
    },
    // ... Add all 60 questions here
  ],
  en: [
    {
      question: "At a party, you're most likely to:",
      options: ["Work the room like a social butterfly 🦋", "Find the host's cat and become best friends 🐱", "Start a conga line 💃", "Guard the snack table like a dragon 🐉"],
      traits: ["E", "I", "E", "I"]
    },
    {
      question: "Your ideal Friday night:",
      options: ["Karaoke with 20 friends! 🎤", "Netflix, pajamas, and zero humans 📺", "Hosting a game night 🎲", "Reading a book in a blanket fort 📚"],
      traits: ["E", "I", "E", "I"]
    },
    // ... Add all 60 questions here
  ],
  ja: [
    {
      question: "パーティーでは、あなたは：",
      options: ["社交的な蝶のように部屋を回る 🦋", "ホストの猫を見つけて親友になる 🐱", "コンガラインを始める 💃", "ドラゴンのようにスナックテーブルを守る 🐉"],
      traits: ["E", "I", "E", "I"]
    },
    {
      question: "理想的な金曜日の夜：",
      options: ["20人の友達とカラオケ！🎤", "Netflix、パジャマ、人間ゼロ 📺", "ゲームナイトを主催 🎲", "ブランケット要塞で本を読む 📚"],
      traits: ["E", "I", "E", "I"]
    },
    // ... Add all 60 questions here
  ]
};

function generateI18nFile(lang, questions) {
  const output = {
    questions: questions.map((q, index) => ({
      question: q.question,
      options: q.options,
      traits: q.traits
    }))
  };
  
  return JSON.stringify(output, null, 2);
}

// Generate files
['zh', 'en', 'ja'].forEach(lang => {
  const content = generateI18nFile(lang, questionsTemplate[lang]);
  const outputPath = path.join(__dirname, `../src/i18n/locales/${lang}-questions.json`);
  fs.writeFileSync(outputPath, content);
  console.log(`Generated ${lang}-questions.json`);
});

console.log('\n✅ Translation files generated!');
console.log('📝 Please fill in all 60 questions in each language file.');
