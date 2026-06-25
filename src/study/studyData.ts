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
    id: 'industrialization',
    unit: 'Unit 8.2',
    subject: 'history',
    emoji: '🏭',
    title: 'A Changing Society: Industrialization',
    blurb: 'Factories, railroads, and millions of immigrants turn America into an industrial giant — but who pays the price?',
    readingTime: '7–9 min',
    body: [
      { type: 'h', text: 'America transforms' },
      { type: 'p', text: 'After the Civil War, the United States changed faster than at almost any time in its history. In just a few decades it went from a country of farms and small towns to the world\'s leading **industrial** power — a place of giant factories, booming cities, and new technology. This period (roughly 1865–1900) is sometimes called the **Gilded Age**, because on the surface it glittered with wealth, but underneath there were serious problems.' },
      { type: 'h', text: 'The engines of growth' },
      { type: 'list', items: [
        '**Railroads** tied the whole country together. The **Transcontinental Railroad** (finished 1869) connected the East and West coasts, so goods and people could cross the country in days instead of months.',
        '**Steel and oil** powered everything. New ways to make cheap steel let cities build bridges and skyscrapers.',
        '**New inventions** changed daily life: the light bulb (Edison), the telephone (Bell), and electricity in homes and factories.',
        '**The assembly line** and factories let companies produce huge amounts of goods quickly and cheaply.',
      ] },
      { type: 'h', text: 'Big business and its bosses' },
      { type: 'p', text: 'A few businessmen became incredibly rich and powerful. **Andrew Carnegie** dominated steel; **John D. Rockefeller** controlled oil. Their companies grew so large they became **monopolies** — meaning one company controlled almost an entire industry, leaving customers and workers with no other choice. People argued about these men: were they **"captains of industry"** who built the modern economy, or **"robber barons"** who got rich by crushing competition and underpaying workers? (Great debate question!)' },
      { type: 'h', text: 'Immigration and the growth of cities' },
      { type: 'p', text: 'Factories needed workers, and millions of **immigrants** came to fill the jobs — especially from southern and eastern Europe. Many arrived through **Ellis Island** in New York Harbor. They crowded into fast-growing cities, a process called **urbanization**. Cities offered jobs and opportunity, but also packed people into **tenements** — crowded, often unsafe apartment buildings.' },
      { type: 'callout', text: 'Use your geography skill here: PUSH factors (poverty, persecution in Europe) drove immigrants away from home; PULL factors (factory jobs, freedom) drew them to American cities.' },
      { type: 'h', text: 'The price workers paid' },
      { type: 'p', text: 'Factory work was often dangerous: long hours, low pay, no safety rules, and even child labor. To fight for better conditions, workers joined together in **labor unions**. Unions used **strikes** (refusing to work) to demand higher pay and safer workplaces. Their struggles in this era set the stage for the reforms of the next unit, the Progressive Era.' },
    ],
    quiz: [
      { id: 'i1', type: 'mc', question: 'What is a monopoly?', options: ['A type of factory', 'When one company controls almost an entire industry', 'A labor union', 'A government tax'], answer: 1, explanation: 'A monopoly is when a single company controls an industry, leaving customers and workers little choice. Rockefeller\'s oil company is a classic example.' },
      { id: 'i2', type: 'mc', question: 'The Transcontinental Railroad (1869) was important because it:', options: ['Ended slavery', 'Connected the East and West coasts, speeding up travel and trade', 'Started World War I', 'Created the first labor union'], answer: 1, explanation: 'It linked the coasts so goods and people could cross the country in days instead of months — a huge boost to the national economy.' },
      { id: 'i3', type: 'mc', question: 'Why did workers form labor unions?', options: ['To buy railroads', 'To move to the cities', 'To fight together for better pay and safer working conditions', 'To stop immigration'], answer: 2, explanation: 'Unions gave workers strength in numbers to demand higher pay and safer conditions, often using strikes.' },
      { id: 'i4', type: 'mc', question: 'A crowded, often unsafe apartment building where many immigrants lived was called a:', options: ['Tenement', 'Monopoly', 'Plantation', 'Union hall'], answer: 0, explanation: 'Tenements were the packed, often unhealthy apartments of fast-growing industrial cities.' },
      { id: 'i5', type: 'short', question: 'Were men like Carnegie and Rockefeller "captains of industry" or "robber barons"? Pick a side and give a reason for each label.', modelAnswer: 'There is no single right answer. "Captains of industry" because they built industries, created jobs, and gave money to libraries and schools. "Robber barons" because they crushed competition with monopolies and paid workers low wages in unsafe conditions. A strong answer picks one but acknowledges the other.', explanation: 'This is a classic debate question — the best answers take a position AND admit the other view has evidence.' },
    ],
  },
  {
    id: 'progressive-era',
    unit: 'Unit 8.3',
    subject: 'history',
    emoji: '📰',
    title: 'The Progressive Era',
    blurb: 'Once industrialization created big problems, who stepped up to fix them?',
    readingTime: '6–8 min',
    body: [
      { type: 'h', text: 'Fixing the problems of the Gilded Age' },
      { type: 'p', text: 'The industrial boom created real problems: dangerous factories, child labor, dirty and unsafe food, corrupt politicians, and huge gaps between rich and poor. Starting around 1890, a wave of reformers called **Progressives** set out to fix these problems using government power. Their goal was to make society fairer and safer — to make democracy work for ordinary people, not just the wealthy.' },
      { type: 'h', text: 'The muckrakers' },
      { type: 'p', text: 'Reform often started with journalists called **muckrakers** — writers who "raked up the muck" by exposing problems to the public. The most famous example is **Upton Sinclair\'s book *The Jungle***, which revealed the disgusting and dangerous conditions in meatpacking factories. The public was so horrified that it pushed the government to act.' },
      { type: 'callout', text: 'Cause and effect: muckrakers expose a problem → the public gets angry → the government passes a reform. That chain repeats all through this unit.' },
      { type: 'h', text: 'Real reforms that resulted' },
      { type: 'list', items: [
        '**Food and drug safety laws** (like the Pure Food and Drug Act, 1906) — partly thanks to *The Jungle*.',
        '**Limits on child labor** and safer working conditions in factories.',
        '**"Trust-busting"** — President Theodore Roosevelt used the government to break up some huge monopolies (called "trusts") so they couldn\'t abuse their power.',
        '**Women\'s suffrage** — the right to vote. After decades of activism, the **19th Amendment (1920)** finally guaranteed women the right to vote nationwide.',
      ] },
      { type: 'h', text: 'Why it matters' },
      { type: 'p', text: 'The Progressive Era is when Americans decided that government *should* step in to protect people from the worst effects of business and industry. Many rules you take for granted today — safe food, limits on child labor, the right of women to vote — come from this period.' },
    ],
    quiz: [
      { id: 'p1', type: 'mc', question: 'Who were the "muckrakers"?', options: ['Factory owners', 'Journalists who exposed problems in society', 'Soldiers in World War I', 'Members of Congress'], answer: 1, explanation: 'Muckrakers were journalists who "raked up the muck" — exposing corruption and dangers to push for reform.' },
      { id: 'p2', type: 'mc', question: 'Upton Sinclair\'s book *The Jungle* led most directly to:', options: ['Women getting the vote', 'Food safety laws', 'The end of slavery', 'The building of railroads'], answer: 1, explanation: 'Its shocking look at the meatpacking industry pushed the government to pass food-safety laws like the Pure Food and Drug Act.' },
      { id: 'p3', type: 'mc', question: 'The 19th Amendment (1920) did what?', options: ['Ended child labor', 'Broke up monopolies', 'Gave women the right to vote', 'Created the income tax'], answer: 2, explanation: 'The 19th Amendment guaranteed women the right to vote nationwide after decades of the suffrage movement.' },
      { id: 'p4', type: 'mc', question: '"Trust-busting" by Theodore Roosevelt meant:', options: ['Building trust between countries', 'Using government to break up giant monopolies', 'Trusting big business to fix itself', 'Ending all taxes'], answer: 1, explanation: 'Trusts were giant monopolies; "trust-busting" used government power to break them up so they couldn\'t abuse customers and workers.' },
      { id: 'p5', type: 'short', question: 'In your own words, explain the cause-and-effect chain of how a muckraker could lead to a new law.', modelAnswer: 'A muckraker exposes a problem (like unsafe food) in a book or article → the public reads it and becomes angry/scared → that public pressure pushes the government to pass a reform law (like food-safety rules).', explanation: 'Strong answers show the three-step chain: expose → public anger → government reform.' },
    ],
  },
  {
    id: 'american-power',
    unit: 'Unit 8.4',
    subject: 'history',
    emoji: '🌍',
    title: 'The Rise of American Power & World War I',
    blurb: 'How did the United States grow from a continental nation into a world power?',
    readingTime: '7–9 min',
    body: [
      { type: 'h', text: 'Looking outward' },
      { type: 'p', text: 'By the late 1800s the US had finished expanding across the continent and had a booming industrial economy. It began looking *beyond* its borders. This new desire to gain territory and influence overseas is called **imperialism**. Reasons included wanting new markets to sell goods, raw materials for factories, naval bases around the world, and national pride.' },
      { type: 'h', text: 'The Spanish-American War (1898)' },
      { type: 'p', text: 'A short war with Spain marked America\'s arrival as a world power. The US won quickly and gained control of overseas territories including **Puerto Rico, Guam, and the Philippines**. Suddenly the United States had an overseas empire — and a debate at home about whether a country founded on freedom should be ruling other peoples.' },
      { type: 'h', text: 'World War I begins (1914)' },
      { type: 'p', text: 'In 1914, a massive war broke out in Europe, eventually called **World War I**. It was driven by tangled **alliances** (countries promising to defend each other), militarism, and nationalism. New weapons like machine guns made it incredibly deadly, and soldiers got stuck in brutal **trench warfare**.' },
      { type: 'h', text: 'America joins (1917)' },
      { type: 'p', text: 'At first the US stayed **neutral** (not taking sides) — a tradition of **isolationism** (staying out of other countries\' conflicts). But two things pulled America in: German submarines sinking ships (including ones carrying Americans), and the discovery that Germany had secretly tried to get Mexico to attack the US. In 1917 the US entered the war, saying it would help "make the world safe for democracy." Fresh American troops and supplies helped the Allies win in 1918.' },
      { type: 'callout', text: 'Key vocab pair: NEUTRALITY (not taking sides) and ISOLATIONISM (staying out of foreign conflicts). The US started WWI with both — then gave them up to join the fight.' },
      { type: 'h', text: 'After the war' },
      { type: 'p', text: 'The war ended with the **Treaty of Versailles (1919)**, which punished Germany harshly. President Wilson wanted a **League of Nations** to prevent future wars, but the US Senate refused to join — America swung back toward isolationism. (That harsh treaty and weak peace would help set the stage for World War II.)' },
    ],
    quiz: [
      { id: 'a1', type: 'mc', question: 'Imperialism means:', options: ['Staying out of foreign affairs', 'A nation extending its power by gaining overseas territory and influence', 'Breaking up monopolies', 'Giving women the vote'], answer: 1, explanation: 'Imperialism is a stronger nation gaining control of territory, markets, and influence beyond its borders.' },
      { id: 'a2', type: 'mc', question: 'The Spanish-American War (1898) resulted in the US gaining control of:', options: ['Canada and Mexico', 'Puerto Rico, Guam, and the Philippines', 'England and France', 'Alaska and Hawaii'], answer: 1, explanation: 'Victory over Spain gave the US an overseas empire including Puerto Rico, Guam, and the Philippines.' },
      { id: 'a3', type: 'mc', question: 'What was US policy toward World War I at first?', options: ['It immediately declared war', 'It stayed neutral / isolationist', 'It joined Germany', 'It refused to trade with anyone'], answer: 1, explanation: 'The US tried to stay neutral and out of the European conflict before being pulled in by 1917.' },
      { id: 'a4', type: 'mc', question: 'Which helped pull the US into World War I in 1917?', options: ['The stock market crash', 'German submarine attacks on ships', 'The 19th Amendment', 'The Transcontinental Railroad'], answer: 1, explanation: 'German submarine warfare (plus the secret Zimmermann Telegram to Mexico) pushed the US to enter the war.' },
      { id: 'a5', type: 'short', question: 'Explain the difference between "neutrality" and "isolationism," and how the US gave both up in World War I.', modelAnswer: 'Neutrality means not taking sides in a specific conflict; isolationism is a broader policy of staying out of foreign affairs in general. The US started WWI neutral and isolationist, but German submarine attacks and the Zimmermann Telegram pushed it to declare war in 1917, abandoning both.', explanation: 'Good answers define each term separately and connect them to the 1917 decision to enter the war.' },
    ],
  },
  {
    id: 'prosperity-depression',
    unit: 'Unit 8.5',
    subject: 'history',
    emoji: '📉',
    title: 'Prosperity & Depression',
    blurb: 'How did America go from the booming 1920s to the worst economic disaster in its history?',
    readingTime: '7–9 min',
    body: [
      { type: 'h', text: 'The Roaring Twenties' },
      { type: 'p', text: 'The 1920s were a decade of fun, change, and prosperity for many Americans. After WWI, the economy boomed. New things became common: **cars** (Henry Ford\'s assembly line made them affordable), radios, movies, and jazz music. Young people, especially women called **"flappers,"** challenged old rules about how to dress and behave. In New York City, the **Harlem Renaissance** was an explosion of African American art, music, and literature.' },
      { type: 'p', text: 'But not everyone shared the wealth — farmers and many workers struggled — and a lot of the boom was built on people buying stocks and goods **on credit** (borrowed money). That was a hidden danger.' },
      { type: 'h', text: 'The Crash (1929)' },
      { type: 'p', text: 'In October 1929, the **stock market crashed** — stock prices collapsed, and people who had borrowed money to buy stocks were wiped out. The crash helped trigger the **Great Depression**, the worst economic downturn in US history.' },
      { type: 'h', text: 'The Great Depression (1929–1939)' },
      { type: 'list', items: [
        'Banks failed, and people lost their savings.',
        'Businesses closed, and about **1 in 4 workers became unemployed** (no job).',
        'Many lost their homes; some built shanty-towns out of scraps.',
        'In the Plains, a terrible drought and dust storms called the **Dust Bowl** forced farm families to flee.',
      ] },
      { type: 'h', text: 'The New Deal' },
      { type: 'p', text: 'In 1932, Americans elected **Franklin D. Roosevelt (FDR)** president. His response was the **New Deal** — a huge set of government programs to fight the Depression. The New Deal aimed at the **"3 R\'s": Relief** (help for the suffering, like jobs programs), **Recovery** (getting the economy going again), and **Reform** (rules to prevent another crash, like bank regulations and **Social Security**, which still helps elderly Americans today).' },
      { type: 'callout', text: 'Big idea: the New Deal permanently changed Americans\' expectations — that the federal government should help protect people during hard economic times.' },
    ],
    quiz: [
      { id: 'd1', type: 'mc', question: 'The 1920s are nicknamed the "Roaring Twenties" because:', options: ['There was a major war', 'It was a decade of economic boom and big cultural change', 'The stock market crashed', 'Everyone was unemployed'], answer: 1, explanation: 'The 1920s boomed economically and culturally — cars, radio, jazz, movies, and the Harlem Renaissance.' },
      { id: 'd2', type: 'mc', question: 'What event in 1929 helped trigger the Great Depression?', options: ['The stock market crash', 'World War I', 'The 19th Amendment', 'The Spanish-American War'], answer: 0, explanation: 'The October 1929 stock market crash wiped out fortunes and helped trigger the Great Depression.' },
      { id: 'd3', type: 'mc', question: 'The Dust Bowl was:', options: ['A sporting event', 'A drought with huge dust storms that drove farmers off their land', 'A New Deal program', 'A type of factory'], answer: 1, explanation: 'The Dust Bowl was a severe drought and dust storms in the Plains that forced many farm families to flee.' },
      { id: 'd4', type: 'mc', question: 'FDR\'s New Deal aimed at the "3 R\'s." What were they?', options: ['Read, Write, Repeat', 'Relief, Recovery, Reform', 'Rich, Royal, Ready', 'Rules, Rights, Roads'], answer: 1, explanation: 'Relief (help people now), Recovery (restart the economy), and Reform (prevent future crashes).' },
      { id: 'd5', type: 'short', question: 'How did the New Deal change what Americans expect from their government? Give an example.', modelAnswer: 'It established the idea that the federal government should step in to help people during hard economic times. Example: Social Security still provides income to elderly and disabled Americans today; bank regulations were created to prevent another crash.', explanation: 'Strong answers state the bigger expectation AND give a concrete New Deal example like Social Security.' },
    ],
  },
  {
    id: 'world-war-2',
    unit: 'Unit 8.6',
    subject: 'history',
    emoji: '⚔️',
    title: 'World War II',
    blurb: 'Why did the US fight, and how did the war change America and the world?',
    readingTime: '8–10 min',
    body: [
      { type: 'h', text: 'The world slides toward war' },
      { type: 'p', text: 'In the 1930s, harsh conditions after WWI and the Great Depression helped **dictators** rise to power — leaders with total control. **Adolf Hitler** and the Nazi Party took over Germany, preaching hatred and conquest. **World War II** began in 1939 when Germany invaded Poland. The world split into the **Allies** (Britain, France, the Soviet Union, and later the US) versus the **Axis** (Germany, Italy, Japan).' },
      { type: 'h', text: 'America enters: Pearl Harbor (1941)' },
      { type: 'p', text: 'The US wanted to stay out (isolationism again). But on **December 7, 1941**, Japan launched a surprise attack on the US naval base at **Pearl Harbor**, Hawaii. The next day the US declared war. As President Roosevelt said, it was "a date which will live in infamy."' },
      { type: 'h', text: 'The Holocaust' },
      { type: 'p', text: 'One of the most important and tragic parts of WWII is the **Holocaust** — the Nazis\' systematic murder of about **six million Jews**, along with millions of others they targeted. It stands as a warning of where hatred, prejudice, and unchecked government power can lead.' },
      { type: 'h', text: 'The war on the home front' },
      { type: 'list', items: [
        '**Women** took factory jobs to build planes, ships, and weapons — symbolized by "Rosie the Riveter."',
        'Americans rationed food and supplies and bought war bonds to support the effort.',
        '**Japanese American internment:** the US government forced about 120,000 Japanese Americans — most of them citizens — into prison camps out of fear and prejudice. It\'s now widely seen as a serious injustice.',
      ] },
      { type: 'h', text: 'Turning points and the end' },
      { type: 'p', text: 'In Europe, the **D-Day** invasion (June 6, 1944) landed Allied troops in France and began pushing the Nazis back; Germany surrendered in May 1945. In the Pacific, the US dropped two **atomic bombs** on the Japanese cities of Hiroshima and Nagasaki in August 1945. Japan surrendered, ending the war — but the atomic bomb opened a frightening new age of weapons.' },
      { type: 'callout', text: 'WWII left the US as the most powerful country in the world — and set up its rivalry with the Soviet Union, which becomes the next unit: the Cold War.' },
    ],
    quiz: [
      { id: 'w1', type: 'mc', question: 'What event brought the US into World War II?', options: ['The stock market crash', 'The attack on Pearl Harbor', 'The Treaty of Versailles', 'D-Day'], answer: 1, explanation: 'Japan\'s surprise attack on Pearl Harbor on December 7, 1941 brought the US into the war.' },
      { id: 'w2', type: 'mc', question: 'The Holocaust refers to:', options: ['A New Deal program', 'The Nazis\' systematic murder of about six million Jews and millions of others', 'A WWII battle', 'The bombing of Pearl Harbor'], answer: 1, explanation: 'The Holocaust was the Nazi genocide of about six million Jews, plus millions of other targeted people.' },
      { id: 'w3', type: 'mc', question: 'Japanese American internment during WWII was:', options: ['A program to help immigrants', 'The forced imprisonment of about 120,000 Japanese Americans, now seen as an injustice', 'A military victory', 'A type of war bond'], answer: 1, explanation: 'The US imprisoned ~120,000 Japanese Americans (most of them citizens) out of fear and prejudice — now widely recognized as a grave injustice.' },
      { id: 'w4', type: 'mc', question: 'How did World War II end in the Pacific?', options: ['A peace treaty in Versailles', 'The US dropped two atomic bombs on Japan, which then surrendered', 'Germany surrendered', 'The Soviet Union invaded the US'], answer: 1, explanation: 'After atomic bombs were dropped on Hiroshima and Nagasaki in August 1945, Japan surrendered, ending the war.' },
      { id: 'w5', type: 'short', question: 'Describe two ways World War II changed life on the American home front.', modelAnswer: 'Examples: women took factory jobs building war supplies ("Rosie the Riveter"); families rationed food and bought war bonds; and the government wrongly forced Japanese Americans into internment camps. Any two of these work.', explanation: 'Good answers give two concrete home-front changes — production by women, rationing, war bonds, or internment.' },
    ],
  },
  {
    id: 'cold-war',
    unit: 'Unit 8.7',
    subject: 'history',
    emoji: '❄️',
    title: 'Foreign Policy & the Cold War',
    blurb: 'How did the US and the Soviet Union compete for decades without fighting each other directly?',
    readingTime: '7–9 min',
    body: [
      { type: 'h', text: 'Two superpowers, two systems' },
      { type: 'p', text: 'After WWII, two **superpowers** stood above the rest: the **United States** (democratic, **capitalist**) and the **Soviet Union (USSR)** (dictatorship, **communist**). They distrusted each other deeply. Their long rivalry (about 1945–1991) is called the **Cold War** — "cold" because the two never fought each other directly in an all-out war. Instead they competed through an arms race, spying, propaganda, and "proxy" wars in other countries.' },
      { type: 'h', text: 'Capitalism vs. communism' },
      { type: 'list', items: [
        '**Capitalism (US):** businesses and property are privately owned; people are free to vote and to start businesses.',
        '**Communism (USSR):** the government controls the economy and property; one party holds total political power.',
      ] },
      { type: 'h', text: 'How the US fought the Cold War' },
      { type: 'p', text: 'The main US strategy was **containment** — stopping communism from spreading to new countries (instead of trying to destroy it where it already existed). This led to several conflicts:' },
      { type: 'list', items: [
        '**The Korean War (1950s)** and **Vietnam War (1960s–70s)** — the US fought to stop communism from taking over.',
        '**The arms race** — both sides built huge stockpiles of nuclear weapons, creating constant fear of nuclear war.',
        '**The Cuban Missile Crisis (1962)** — the US and USSR came terrifyingly close to nuclear war over Soviet missiles in Cuba, then backed down. The scariest moment of the Cold War.',
        '**The Space Race** — competing to reach space; the US landed astronauts on the Moon in 1969.',
      ] },
      { type: 'h', text: 'How it ended' },
      { type: 'p', text: 'The Cold War ended around **1991**, when the Soviet Union collapsed and broke apart. The symbol of its end was the fall of the **Berlin Wall (1989)**, which had divided communist East Germany from the democratic West. The US emerged as the world\'s only superpower.' },
      { type: 'callout', text: 'Remember the core idea: containment. The US did not try to conquer the USSR — it tried to "contain" communism, stopping it from spreading. That idea explains Korea, Vietnam, and most US Cold War choices.' },
    ],
    quiz: [
      { id: 'c1', type: 'mc', question: 'Why is it called the "Cold" War?', options: ['It was fought in cold climates', 'The two superpowers never fought each other directly in an all-out war', 'It happened in winter', 'No weapons were ever built'], answer: 1, explanation: '"Cold" because the US and USSR never fought each other directly — they competed through arms races, spying, and proxy wars.' },
      { id: 'c2', type: 'mc', question: 'The main US strategy of stopping the spread of communism was called:', options: ['Imperialism', 'Containment', 'Isolationism', 'Trust-busting'], answer: 1, explanation: 'Containment meant stopping communism from spreading to new countries — the logic behind Korea and Vietnam.' },
      { id: 'c3', type: 'mc', question: 'The Cuban Missile Crisis (1962) is remembered as:', options: ['The start of WWII', 'The closest the world came to nuclear war', 'The end of slavery', 'A space mission'], answer: 1, explanation: 'It was the tensest moment of the Cold War, when the US and USSR nearly went to nuclear war over missiles in Cuba.' },
      { id: 'c4', type: 'mc', question: 'What is a key difference between capitalism and communism?', options: ['There is no difference', 'Capitalism has privately owned businesses and elections; communism has government control of the economy and one-party rule', 'Communism allows more business competition', 'Capitalism bans private property'], answer: 1, explanation: 'Capitalism = private ownership + democracy; communism = government-controlled economy + one-party rule.' },
      { id: 'c5', type: 'short', question: 'Explain the idea of "containment" and give one example of the US acting on it.', modelAnswer: 'Containment meant stopping communism from spreading to new countries rather than destroying it where it existed. Example: the US fought in the Korean War or the Vietnam War to keep those nations from becoming communist.', explanation: 'Good answers define containment AND name a containment-driven conflict like Korea or Vietnam.' },
    ],
  },
  {
    id: 'uncertain-times',
    unit: 'Unit 8.8',
    subject: 'history',
    emoji: '💻',
    title: 'A World in Uncertain Times',
    blurb: 'What does America look like after the Cold War ends — in the age of the internet and globalization?',
    readingTime: '6–8 min',
    body: [
      { type: 'h', text: 'The only superpower' },
      { type: 'p', text: 'With the Soviet Union gone in 1991, the United States became the world\'s only **superpower**. The years since have been shaped by fast technological change, a more connected world, and new kinds of threats.' },
      { type: 'h', text: 'Globalization and technology' },
      { type: 'p', text: '**Globalization** means the world\'s countries became more economically and culturally connected — goods, money, information, and people moving across borders more easily than ever. A huge driver was technology: **personal computers, the internet, and smartphones** changed how people work, shop, learn, and talk to each other. A product might be designed in one country, built in another, and sold worldwide.' },
      { type: 'callout', text: 'Globalization has trade-offs: cheaper goods and instant global communication, but also jobs moving overseas and worries about losing local industries — a real debate today.' },
      { type: 'h', text: '9/11 and the War on Terror' },
      { type: 'p', text: 'On **September 11, 2001**, the terrorist group al-Qaeda hijacked planes and attacked the United States, destroying the World Trade Center towers in New York City and striking the Pentagon. Nearly 3,000 people died. In response, the US launched a long **"War on Terror,"** including wars in Afghanistan and Iraq, and major changes to security at home (like airport screening).' },
      { type: 'h', text: 'America today' },
      { type: 'p', text: 'The 21st century has brought rapid change: social media, debates about immigration and the economy, climate concerns, and questions about America\'s role in the world. This is the part of history you are *living in* — which means you get to help shape what comes next.' },
    ],
    quiz: [
      { id: 'u1', type: 'mc', question: 'Globalization refers to:', options: ['The US becoming isolationist', 'The world\'s countries becoming more economically and culturally connected', 'The Cold War arms race', 'The end of the internet'], answer: 1, explanation: 'Globalization is the growing connection of the world\'s economies and cultures — goods, money, and information crossing borders.' },
      { id: 'u2', type: 'mc', question: 'What technology most transformed daily life and helped drive globalization?', options: ['The railroad', 'The internet and smartphones', 'The atomic bomb', 'The assembly line'], answer: 1, explanation: 'Personal computers, the internet, and smartphones reshaped how people work, learn, and connect worldwide.' },
      { id: 'u3', type: 'mc', question: 'The September 11, 2001 attacks led the US to launch:', options: ['The New Deal', 'The War on Terror', 'The Space Race', 'The Cold War'], answer: 1, explanation: 'After 9/11, the US began a long "War on Terror," including wars in Afghanistan and Iraq and new security measures at home.' },
      { id: 'u4', type: 'short', question: 'Name one benefit and one drawback of globalization.', modelAnswer: 'Benefit: cheaper goods, instant global communication, and access to products from around the world. Drawback: jobs moving overseas, loss of some local industries, or over-dependence on other countries. Any reasonable pair works.', explanation: 'Good answers give one clear benefit and one clear drawback — globalization is genuinely a trade-off.' },
    ],
  },
  {
    id: 'civil-rights',
    unit: 'Unit 8.9',
    subject: 'history',
    emoji: '⚖️',
    title: 'Domestic Politics & Reform: Civil Rights',
    blurb: 'How did Americans fight to make "all men are created equal" actually true?',
    readingTime: '8–10 min',
    body: [
      { type: 'h', text: 'The promise and the problem' },
      { type: 'p', text: 'Remember Reconstruction (Unit 8.1)? The 14th and 15th Amendments promised Black Americans equality and the vote — but Jim Crow laws and segregation took those rights away across the South for almost 100 years. The **Civil Rights Movement** of the 1950s and 1960s was the fight to finally make those promises real.' },
      { type: 'callout', text: 'The big connection: the Civil Rights Movement used the 14th Amendment\'s "equal protection" — the very promise made back in Reconstruction — as its legal weapon. The story comes full circle.' },
      { type: 'h', text: 'Key events and people' },
      { type: 'list', items: [
        '**Brown v. Board of Education (1954):** the Supreme Court ruled that segregated public schools were unconstitutional, overturning "separate but equal." A landmark legal victory.',
        '**Rosa Parks & the Montgomery Bus Boycott (1955):** Parks refused to give up her bus seat; Black residents boycotted the buses for over a year until segregation on them ended.',
        '**Martin Luther King Jr.:** the movement\'s most famous leader, who preached **nonviolent civil disobedience** (peacefully breaking unjust laws to expose injustice). His 1963 "I Have a Dream" speech is one of the most famous in US history.',
        '**Civil Rights Act (1964)** and **Voting Rights Act (1965):** federal laws that outlawed segregation and discrimination and protected the right to vote — huge victories of the movement.',
      ] },
      { type: 'h', text: 'How they fought' },
      { type: 'p', text: 'The movement used **nonviolent protest**: boycotts, marches, and sit-ins (peacefully sitting at segregated lunch counters and refusing to leave). Protesters faced arrests and violence but stayed peaceful, which won public sympathy and pressured the government to act. This strategy is **civil disobedience** — deliberately and peacefully breaking unjust laws to call attention to them.' },
      { type: 'h', text: 'A movement that kept going' },
      { type: 'p', text: 'The Civil Rights Movement inspired other groups seeking equality — including the **women\'s rights movement** and movements for other minority groups — to use similar methods. The fight to live up to the nation\'s founding promise of equality continues today, which is part of why this history matters so much.' },
    ],
    quiz: [
      { id: 'v1', type: 'mc', question: 'What did the Supreme Court decide in Brown v. Board of Education (1954)?', options: ['That segregated public schools were unconstitutional', 'That women could vote', 'That slavery was legal', 'That the US should join WWII'], answer: 0, explanation: 'Brown v. Board ruled school segregation unconstitutional, overturning the "separate but equal" doctrine.' },
      { id: 'v2', type: 'mc', question: 'Rosa Parks is best known for:', options: ['Leading the New Deal', 'Refusing to give up her bus seat, sparking the Montgomery Bus Boycott', 'Winning World War II', 'Writing The Jungle'], answer: 1, explanation: 'Her refusal to give up her seat sparked the year-long Montgomery Bus Boycott against segregation.' },
      { id: 'v3', type: 'mc', question: 'Martin Luther King Jr. is most associated with which strategy?', options: ['Armed rebellion', 'Nonviolent civil disobedience', 'Isolationism', 'Trust-busting'], answer: 1, explanation: 'King championed nonviolent civil disobedience — peacefully breaking unjust laws to expose injustice.' },
      { id: 'v4', type: 'mc', question: 'The Civil Rights Act (1964) and Voting Rights Act (1965) did what?', options: ['Started the Cold War', 'Outlawed segregation/discrimination and protected the right to vote', 'Ended World War I', 'Created Social Security'], answer: 1, explanation: 'These federal laws outlawed segregation and discrimination and protected voting rights — major victories of the movement.' },
      { id: 'v5', type: 'short', question: 'How does the Civil Rights Movement connect back to Reconstruction (Unit 8.1)?', modelAnswer: 'Reconstruction\'s 14th and 15th Amendments promised equality and voting rights, but Jim Crow erased them. The Civil Rights Movement used those same amendments — especially the 14th\'s "equal protection" — to finally force the country to keep the promise it made in the 1860s.', explanation: 'Strong answers link the Reconstruction amendments to the movement using them ~100 years later — the story coming full circle.' },
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
