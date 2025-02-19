const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Write a script to generate a 30 second long video on the topic: "Interesting history story" along with AI image prompts in a "Realistic" image style for each scene and give me the result in JSON format with imagePrompt and contentText as  fields, where imagePrompt describes the scene and contentText is the audio that will be used by the AI voice.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A dimly lit, medieval library filled with ancient scrolls and leather-bound books. A single candle illuminates a scholar hunched over a desk, writing with a quill pen.",\n    "contentText": "Did you know, in 1325, a wooden warship accidentally ran aground on the Isle of Portland, England? "\n  },\n  {\n    "imagePrompt": "Realistic aerial view of a 14th century wooden warship stuck on a rocky beach, waves crashing around it. People are gathering on the shore.",\n    "contentText": "Instead of the locals helping, they swarmed it, eager to loot its cargo of wine intended for King Edward II."\n  },\n  {\n    "imagePrompt": "A chaotic scene of villagers scrambling to steal barrels of wine from the stranded warship. Some are already drinking, laughing, and fighting over the spoils. Realistic, slightly blurry, action-shot style.",\n    "contentText": "They made off with hundreds of barrels, throwing a massive impromptu beach party fueled by royal wine."\n  },\n  {\n    "imagePrompt": "King Edward II looking furious, seated on his throne, receiving the news of the ship\'s looting from a messenger. Royal guards stand behind him.",\n    "contentText": "King Edward wasn\'t amused.  He fined the Isle of Portland a hefty sum for their drunken escapade."\n  },\n  {\n    "imagePrompt": "A weathered, old parchment scroll detailing the account of the wine ship looting, with a royal seal at the bottom. The scroll is displayed under soft lighting in a museum setting.",\n    "contentText": "The incident is recorded in royal documents, a testament to a wild day of unexpected treasure and royal displeasure. History is full of surprising tales!"\n  }\n]\n```',
        },
      ],
    },
  ],
});
