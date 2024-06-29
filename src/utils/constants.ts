export const ROUTE_PATHS = {
  ROOT: "/",
  QUIZ_1: "/quiz/1",
  QUIZ_2: "/quiz/2",
  QUIZ_3: "/quiz/3",
  QUIZ_4: "/quiz/4",
  QUIZ_5: "/quiz/5",
  SEARCH: "/search",
  EMAIL: "/email",
  FINISH: "/finish",
  NOT_FOUND: "*",
};

export const QUIZ_ROUTES = [
  ROUTE_PATHS.QUIZ_1,
  ROUTE_PATHS.QUIZ_2,
  ROUTE_PATHS.QUIZ_3,
  ROUTE_PATHS.QUIZ_4,
  ROUTE_PATHS.QUIZ_5,
];

export const AGES = {
  young: "18-29 years",
  middle: "30-39 years",
  mature: "40-49 years",
  senior: "50+",
};

export const LANGUAGES = {
  English: "en",
  French: "fr",
  German: "de",
  Spanish: "es",
};

export const GENDERS = [
  { name: "Female", icon: "👩" },
  { name: "Male", icon: "👨" },
  { name: "Other", icon: "😉" },
];

export const DISLIKES = {
  logic: "Lack of logic",
  speed: "A slow speed",
  humor: "Lack of humor",
  ending: "Way too generic ending",
};

export const PREFERENCES = {
  YOUNG: [
    { name: "Adventure", labelKey: "Quiz5.young.option1", icon: "⛰️" },
    { name: "Fantasy", labelKey: "Quiz5.young.option2", icon: "🧙‍♂️" },
    { name: "Sci-Fi", labelKey: "Quiz5.young.option3", icon: "🚀" },
    { name: "Magic", labelKey: "Quiz5.young.option4", icon: "🔮" },
    { name: "Friendship", labelKey: "Quiz5.young.option5", icon: "🤝" },
    { name: "Humor", labelKey: "Quiz5.young.option6", icon: "😄" },
    { name: "Thriller", labelKey: "Quiz5.young.option7", icon: "🎢" },
  ],
  MIDDLE: [
    { name: "Werewolf", labelKey: "Quiz5.middle.option1", icon: "🐺" },
    { name: "Romance", labelKey: "Quiz5.middle.option2", icon: "🥰" },
    { name: "Action", labelKey: "Quiz5.middle.option3", icon: "💃🏼" },
    { name: "Young", labelKey: "Quiz5.middle.option4", icon: "💁‍♀️" },
    { name: "Royal Obsession", labelKey: "Quiz5.middle.option5", icon: "👑" },
    { name: "Bad Boy", labelKey: "Quiz5.middle.option6", icon: "🤠" },
    { name: "Billionaire", labelKey: "Quiz5.middle.option7", icon: "🤑" },
  ],
  MATURE: [
    { name: "Mystery", labelKey: "Quiz5.mature.option1", icon: "🕵️‍♀️" },
    { name: "Historical", labelKey: "Quiz5.mature.option2", icon: "🏰" },
    { name: "Drama", labelKey: "Quiz5.mature.option3", icon: "🎭" },
    { name: "Crime", labelKey: "Quiz5.mature.option4", icon: "🔪" },
    { name: "Politics", labelKey: "Quiz5.mature.option5", icon: "🏛️" },
    { name: "Philosophy", labelKey: "Quiz5.mature.option6", icon: "🤔" },
    { name: "History", labelKey: "Quiz5.mature.option7", icon: "📜" },
  ],
  SENIOR: [
    { name: "Biography", labelKey: "Quiz5.senior.option1", icon: "👴" },
    { name: "Self-Help", labelKey: "Quiz5.senior.option2", icon: "📚" },
    { name: "Health", labelKey: "Quiz5.senior.option3", icon: "🏥" },
    { name: "Travel", labelKey: "Quiz5.senior.option4", icon: "🌍" },
    { name: "Cooking", labelKey: "Quiz5.senior.option5", icon: "🍳" },
    { name: "Art", labelKey: "Quiz5.senior.option6", icon: "🎨" },
    { name: "Music", labelKey: "Quiz5.senior.option7", icon: "🎵" },
  ],
};
