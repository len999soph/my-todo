// Social studies study content for Sophia (8th grade, JJMS).
// Aligned to the New York State K-8 Social Studies Framework.
// Add more articles to the `articles` array to grow the study library.

export type Subject = 'history' | 'geography';

export type ArticleBlock =
  | { type: 'h'; text: string }
  | { type: 'p'; text: string }      // supports **bold** markers
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string };

export interface QuizQuestion {
  id: string;
  // 'mc' = multiple choice (auto-graded). 'short' = open answer (self-graded).
  type: 'mc' | 'short';
  question: string;
  options?: string[];   // for 'mc'
  answer?: number;      // index into options for 'mc'
  modelAnswer?: string; // for 'short'
  explanation: string;  // shown after answering
}

export interface Article {
  id: string;
  unit: string;
  subject: Subject;
  emoji: string;
  title: string;
  blurb: string;
  readingTime: string;
  body: ArticleBlock[];
  quiz: QuizQuestion[];
}

export const articles: Article[] = [
  {
    id: 'reconstruction',
    unit: 'Unit 8.1',
    subject: 'history',
    emoji: '🏛️',
    title: 'Reconstruction: Rebuilding a Broken Nation',
    blurb: 'After the Civil War, how do you rebuild the country and bring 4 million freed people into American life?',
    readingTime: '8–10 min',
    body: [
      { type: 'h', text: 'Setting the scene' },
      { type: 'p', text: 'In April 1865, the Civil War ended. The North (the Union) had won, and the country was technically whole again. But "the war is over" did not mean "everything is fine." Imagine a giant group project that completely fell apart — people fought, things got broken, and now everyone has to figure out how to work together again. That is the challenge the United States faced. We call this rebuilding period **Reconstruction**.' },
      { type: 'p', text: 'There were two huge problems to solve:' },
      { type: 'list', items: [
        '**How do you bring the Southern states back into the United States?** They had tried to leave and form their own country (the Confederacy). What were the rules for letting them back in?',
        '**What happens to the roughly 4 million people just freed from slavery?** Were they citizens? Could they vote, own land, go to school, or get paid for work? Almost nothing was decided yet.',
      ] },
      { type: 'p', text: 'How the country answered these questions would shape America for the next 100 years.' },
      { type: 'h', text: 'The South after the war' },
      { type: 'p', text: 'The South was wrecked. Much of the fighting had happened there, so farms, railroads, and whole cities (like Atlanta) were burned or destroyed. The Southern economy had been built on enslaved labor growing cotton — and now that system was gone. Many white Southerners were angry about losing the war. Meanwhile, formerly enslaved people were free for the first time, full of hope, but with no money and no land.' },
      { type: 'h', text: 'Three amendments that changed everything' },
      { type: 'p', text: 'The biggest, most lasting results of Reconstruction were three additions to the Constitution, the **Reconstruction Amendments**. Know these cold:' },
      { type: 'list', items: [
        '**13th Amendment (1865):** Ended slavery everywhere in the US. Made freedom permanent and national.',
        '**14th Amendment (1868):** Anyone born in the US is a **citizen** — and states must give all citizens **"equal protection of the laws."** One of the most important amendments in all of US history; still used in court today.',
        '**15th Amendment (1870):** A citizen cannot be denied the right to **vote** because of race. In practice, Black men gained the vote. (Women of all races still could not vote — that fight came later.)',
      ] },
      { type: 'callout', text: 'Memory trick: 13 – free, 14 – citizen, 15 – vote. Freedom, then citizenship, then a voice. Each one builds on the last.' },
      { type: 'h', text: 'Help, and hope' },
      { type: 'p', text: 'The government created the **Freedmen\'s Bureau** to help millions start new lives. It set up schools (many freed people had been denied the chance to learn to read), helped people find work, and provided food and medical care. For a brief time, Black men were elected to office — including the US Congress — and Black communities built churches and schools that lasted for generations.' },
      { type: 'h', text: 'Sharecropping' },
      { type: 'p', text: 'Freed people wanted **land** of their own, but most never got any. So a system called **sharecropping** developed: a landowner let a family farm a piece of land, and in return the family gave the owner a large *share* of the crop. It sounds fair, but usually was not — prices and debts were set against the farmer, so sharecroppers often got trapped in debt, unable to leave or get ahead.' },
      { type: 'h', text: 'The backlash, and the end of Reconstruction' },
      { type: 'p', text: 'Many white Southerners resisted — sometimes violently. Hate groups like the **Ku Klux Klan** used terror to stop Black people from voting. Then, in **1877**, as part of a political deal, the federal government pulled its troops out of the South. Without that protection, Southern states passed **Jim Crow laws** — rules forcing **segregation** (separating people by race) in schools, trains, and restaurants. Tricks like poll taxes and literacy tests blocked Black men from voting, even though the 15th Amendment said they could.' },
      { type: 'h', text: 'So… did Reconstruction succeed or fail?' },
      { type: 'p', text: 'This is exactly the kind of big-thinking question your teachers love, and there is no single right answer — which is what makes it a great essay question.' },
      { type: 'list', items: [
        '**In some ways it failed:** Within a few years, segregation erased much of the progress. Real equality would not come for almost another 100 years (the Civil Rights Movement — Unit 8.9!).',
        '**In some ways it succeeded:** The 13th, 14th, and 15th Amendments never went away. They became the legal *foundation* the Civil Rights Movement later used to win.',
      ] },
      { type: 'callout', text: 'The connection to remember: Reconstruction is why the Civil Rights Movement was even possible. The promise made in the 1860s is the promise people demanded the country keep in the 1960s.' },
    ],
    quiz: [
      {
        id: 'r1', type: 'mc',
        question: 'Which amendment ended slavery everywhere in the United States?',
        options: ['13th Amendment', '14th Amendment', '15th Amendment', '19th Amendment'],
        answer: 0,
        explanation: 'The 13th Amendment (1865) ended slavery nationwide. Memory trick: 13 – free.',
      },
      {
        id: 'r2', type: 'mc',
        question: 'The 14th Amendment is famous for granting citizenship and promising what to all citizens?',
        options: ['The right to vote', '"Equal protection of the laws"', 'Free land', 'The end of taxes'],
        answer: 1,
        explanation: '"Equal protection of the laws" is the powerful phrase still used in court today — including by the Civil Rights Movement.',
      },
      {
        id: 'r3', type: 'mc',
        question: 'What were Jim Crow laws?',
        options: [
          'Laws that gave freed people their own land',
          'Laws that funded the Freedmen\'s Bureau',
          'Laws that forced segregation and blocked Black citizens\' rights',
          'Laws that ended the Civil War',
        ],
        answer: 2,
        explanation: 'After troops left the South in 1877, Jim Crow laws forced segregation and used tricks like poll taxes to get around the 15th Amendment.',
      },
      {
        id: 'r4', type: 'mc',
        question: 'Why did sharecropping often trap families even though they were free?',
        options: [
          'They were forced to move every year',
          'Debts and crop prices were set against them, so they could not get ahead',
          'It was illegal to farm',
          'They had to give away 100% of their crops',
        ],
        answer: 1,
        explanation: 'Sharecroppers owed a large share of their crop plus debts that were stacked against them, keeping many stuck in poverty.',
      },
      {
        id: 'r5', type: 'short',
        question: 'In your own words: how does Reconstruction connect to the Civil Rights Movement that comes ~100 years later?',
        modelAnswer: 'The 13th, 14th, and 15th Amendments stayed in the Constitution even after Reconstruction ended. The Civil Rights Movement used them — especially the 14th\'s "equal protection" — to demand that America finally keep the promise of equality it made in the 1860s.',
        explanation: 'Strong answers mention that the amendments survived and became the legal foundation the Civil Rights Movement later used.',
      },
      {
        id: 'r6', type: 'short',
        question: 'Do you think Reconstruction was mostly a success or mostly a failure? Give two reasons.',
        modelAnswer: 'There is no single right answer. A strong response picks a side AND admits the other has a point — e.g., "Mostly a failure because Jim Crow erased the gains, BUT the amendments survived and later powered the Civil Rights Movement."',
        explanation: 'On NY essays, the best answers take a clear position but acknowledge the opposing view with evidence.',
      },
    ],
  },
  {
    id: 'geography-skills',
    unit: 'Geography',
    subject: 'geography',
    emoji: '🗺️',
    title: 'Reading Maps & Why Geography Shapes History',
    blurb: 'Maps, regions, and migration — the geography skills that show up all year and on every test.',
    readingTime: '7–9 min',
    body: [
      { type: 'h', text: 'Why geography matters in a history class' },
      { type: 'p', text: 'Geography is not just memorizing where places are. It is about understanding **why people live where they live, why cities grow where they grow, and why history happened where it did.** Almost every event you study has a geography reason hiding behind it.' },
      { type: 'callout', text: 'Big idea for the whole year: geography shapes history. Rivers become cities. Resources become industries. Mountains and oceans become borders and protection.' },
      { type: 'h', text: 'The three main types of maps' },
      { type: 'list', items: [
        '**Political maps** show human-made features: countries, states, borders, capitals, and cities. (Think: the map of US states.)',
        '**Physical maps** show natural features: mountains, rivers, deserts, and elevation (often shown with colors — green for low, brown for high).',
        '**Thematic maps** show one specific topic or "theme," like population, climate, where battles happened, or where immigrants settled.',
      ] },
      { type: 'h', text: 'Parts of a map (the test loves these)' },
      { type: 'list', items: [
        '**Title** — tells you what the map is about. Always read it first.',
        '**Legend / Key** — explains what the colors and symbols mean. You cannot read a map without it.',
        '**Compass rose** — shows direction (N, S, E, W).',
        '**Scale** — shows how map distance compares to real distance (e.g., 1 inch = 100 miles).',
        '**Latitude & longitude** — the grid lines. **Latitude** lines run east–west and measure north/south (the equator is 0°). **Longitude** lines run north–south and measure east/west.',
      ] },
      { type: 'callout', text: 'Memory trick: latitude lines are like the rungs of a "ladder" (lat-itude → ladder) — flat, going across.' },
      { type: 'h', text: 'Regions: grouping places that share something' },
      { type: 'p', text: 'A **region** is an area whose places share a common feature — climate, landforms, economy, or culture. Geographers use regions to make sense of big areas. For example, the US is often split into the **Northeast, South, Midwest, and West.** During the Civil War era you studied, the **North** (industrial, factories) and the **South** (agricultural, plantations) were two regions whose different economies helped cause the conflict — geography driving history again.' },
      { type: 'h', text: 'Migration: push and pull factors' },
      { type: 'p', text: 'When you study immigration and westward movement, you will constantly use **push and pull factors** — the reasons people leave one place and move to another.' },
      { type: 'list', items: [
        '**Push factors** drive people *away* from where they are: war, famine, poverty, persecution, or natural disasters.',
        '**Pull factors** attract people *toward* a new place: jobs, freedom, safety, cheap or free land, and family already there.',
      ] },
      { type: 'p', text: 'Example: millions of immigrants came to the US in the late 1800s. **Push:** poverty and persecution in Europe. **Pull:** factory jobs and the hope of a better life. Same skill applies to the Great Migration, the Dust Bowl, and more — so master it once and reuse it all year.' },
      { type: 'h', text: 'How geography questions show up on NY tests' },
      { type: 'p', text: 'You will often get a map, chart, or graph and be asked to read information from it — then explain *why*. The trick is always the same: **read the title, then the legend, then answer.** And when they ask "why," look for the geography reason (a river, a resource, a border, a climate).' },
    ],
    quiz: [
      {
        id: 'g1', type: 'mc',
        question: 'Which type of map shows natural features like mountains and rivers?',
        options: ['Political map', 'Physical map', 'Thematic map', 'Road map'],
        answer: 1,
        explanation: 'Physical maps show natural features (mountains, rivers, elevation). Political maps show borders and cities.',
      },
      {
        id: 'g2', type: 'mc',
        question: 'What part of a map explains what its colors and symbols mean?',
        options: ['The scale', 'The compass rose', 'The legend (key)', 'The title'],
        answer: 2,
        explanation: 'The legend or key decodes the symbols and colors. You cannot read a thematic map without it.',
      },
      {
        id: 'g3', type: 'mc',
        question: 'A family leaves their country because of war and famine. Those are examples of:',
        options: ['Pull factors', 'Push factors', 'Regions', 'Latitude'],
        answer: 1,
        explanation: 'Push factors drive people away (war, famine, persecution). Pull factors attract them to a new place (jobs, freedom).',
      },
      {
        id: 'g4', type: 'mc',
        question: 'Latitude lines on a map:',
        options: [
          'Run east–west and measure how far north or south you are',
          'Run north–south and measure east or west',
          'Show the map\'s scale',
          'Point toward the North Pole',
        ],
        answer: 0,
        explanation: 'Latitude lines run east–west (like ladder rungs) and measure north/south. The equator is 0° latitude.',
      },
      {
        id: 'g5', type: 'short',
        question: 'Explain one way geography helped cause differences between the North and the South before the Civil War.',
        modelAnswer: 'The North\'s climate, rivers, and resources favored factories and trade (an industrial economy), while the South\'s warm climate and large flat land favored plantation farming that relied on enslaved labor. These different economies created different interests that helped lead to conflict.',
        explanation: 'Good answers connect a geographic feature (climate, land, rivers, resources) to an economic difference between the regions.',
      },
    ],
  },
];
