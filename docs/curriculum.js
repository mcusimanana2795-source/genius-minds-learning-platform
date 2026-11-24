/* Genius Minds curriculum map. Original teaching support topics; verify sequencing against each school's current DBE ATP. */
(function(){
 const termTopics={
  'Afrikaans FAL':[
   ['Luister en praat','Woordeskat en mondelinge taal','Luister na instruksies en vertel gebeure'],
   ['Leesbegrip','Klanke en woordbou','Sinne en leestekens'],
   ['Meervoude en verkleinwoorde','Werkwoorde en byvoeglike naamwoorde','Skryf ’n paragraaf'],
   ['Ontkenning en woordorde','Tydsvorme en woordeskat','Lees en skryf hersiening']
  ],
  'English':[
   ['Listening and speaking','Vocabulary and oral communication','Reading short texts'],
   ['Reading comprehension','Phonics and spelling patterns','Sentences and punctuation'],
   ['Nouns, verbs and adjectives','Paragraph writing','Vocabulary in context'],
   ['Tenses and sentence structure','Transactional writing','Reading and language revision']
  ],
  'Mathematics':[
   ['Numbers, place value and operations','Mental mathematics and problem solving','Patterns and sequences'],
   ['Fractions and number relationships','Measurement','Geometric shapes and properties'],
   ['Multiplication, division and word problems','Time, length, mass and capacity','Data handling'],
   ['Fractions, decimals and percentages','Space and shape','Consolidation and problem solving']
  ],
  'Life Skills':[
   ['Personal identity and self-concept','Healthy habits and safety','Relationships and communication'],
   ['Emotions and empathy','Rights, responsibilities and respect','Creative arts and movement'],
   ['Friendships and conflict resolution','Physical activity and coordination','Environmental awareness'],
   ['Making responsible choices','Community and citizenship','Creative expression and revision']
  ],
  'Natural Sciences and Technology':[
   ['Living and non-living things','Materials and their properties','Investigating and recording'],
   ['Plants, animals and habitats','Structures and strengthening materials','Designing solutions'],
   ['Energy and energy transfer','Matter and materials','Systems and mechanisms'],
   ['Earth and beyond / environment','Processing and systems','Scientific investigation and revision']
  ],
  'Social Sciences':[
   ['Local history and sources','Maps, direction and place','People and communities'],
   ['Heritage and historical change','Physical features and landscapes','Weather and climate'],
   ['Historical leaders and societies','Resources and economic activity','Settlement and land use'],
   ['Historical evidence and timelines','South Africa and the wider world','Geography skills and revision']
  ],
  'Natural Sciences':[
   ['Cells, living systems and biodiversity','Matter and materials','Scientific investigations'],
   ['Photosynthesis and ecosystems','Energy transfer','Forces and interactions'],
   ['Electricity and magnetism','Chemical and physical change','Earth systems'],
   ['Planet Earth and beyond','Environmental sustainability','Scientific skills and revision']
  ],
  'Technology':[
   ['Technology and the design process','Investigating needs and constraints','Sketching and planning'],
   ['Structures and materials','Mechanical systems and control','Making and testing models'],
   ['Electrical systems and circuits','Processing and systems','Evaluating design solutions'],
   ['Communication and technical drawings','Improving products','Design project and revision']
  ],
  'EMS':[
   ['Needs, wants and resources','Entrepreneurs and businesses','Goods and services'],
   ['The economy and economic cycle','Financial literacy and budgeting','Production and trade'],
   ['Markets and prices','Business functions','Saving, spending and records'],
   ['Economic growth and development','Entrepreneurship project','Financial literacy revision']
  ],
  'Creative Arts':[
   ['Visual art elements and design','Drama, voice and movement','Music, rhythm and expression'],
   ['Two-dimensional and three-dimensional art','Role-play and storytelling','Dance and musical patterns'],
   ['Art techniques and media','Performance and collaboration','Music notation and rhythm'],
   ['Creative project planning','Presenting and responding to art','Portfolio and reflection']
  ],
  'Life Orientation':[
   ['Development of the self','Health and safety','Social responsibility'],
   ['Healthy relationships','Constitutional rights and responsibilities','Physical education'],
   ['Careers and learning skills','Environmental and community responsibility','Movement and fitness'],
   ['Personal goals and decision-making','Substance abuse prevention and safety','Revision and personal development']
  ]
 };
 const subjectsByGrade={
  3:['Afrikaans FAL','English','Mathematics','Life Skills'],
  4:['Afrikaans FAL','English','Mathematics','Natural Sciences and Technology','Social Sciences','Life Skills'],
  5:['Afrikaans FAL','English','Mathematics','Natural Sciences and Technology','Social Sciences','Life Skills'],
  6:['Afrikaans FAL','English','Mathematics','Natural Sciences and Technology','Social Sciences','Life Skills'],
  7:['Afrikaans FAL','English','Mathematics','Natural Sciences','Social Sciences','Technology','EMS','Creative Arts','Life Orientation']
 };
 const existing=new Set(courses.map(c=>[c.grade,c.subject,c.term].join('|')));
 const explain={
  'Afrikaans FAL':'Learn the language skill step by step. Study the examples, practise using the words in context and explain your answer aloud.',
  'English':'Build language knowledge through listening, speaking, reading and writing. Use the examples to practise the skill in a new sentence.',
  'Mathematics':'Understand the method, work through the example and apply it to a new problem. Show each step and check whether your answer is reasonable.',
  'Life Skills':'Explore how this topic connects to everyday choices, relationships, health and responsible participation in the community.',
  'Natural Sciences and Technology':'Observe, ask questions, identify patterns and use evidence. Explain what happens and connect the concept to an everyday example.',
  'Social Sciences':'Use evidence, maps, timelines and key vocabulary to understand people, places and events. Support your answer with a reason.',
  'Natural Sciences':'Investigate the natural world using observations, explanations and evidence. Describe the process and apply the idea to a new example.',
  'Technology':'Identify a need, investigate possible solutions, plan, make, evaluate and communicate. Consider safety, materials and design requirements.',
  'EMS':'Connect economic ideas to households, businesses and communities. Use examples, calculations and responsible financial decisions.',
  'Creative Arts':'Explore, create, perform and respond. Use the elements and techniques to communicate an idea or feeling.',
  'Life Orientation':'Apply the knowledge to personal development, health, relationships, rights and responsible decision-making.'
 };
 const examples={
  'Mathematics':'Try a worked example, explain why each operation is needed, then solve a similar question independently.',
  'Afrikaans FAL':'Lees die voorbeeld hardop. Gebruik die nuwe woord of taalreël in jou eie sin.',
  'English':'Read the example aloud and use the new skill in your own sentence.',
  'Technology':'A learner designs a model, tests whether it meets the need and improves the weak parts.',
  'EMS':'A family plans how to use limited money for needs before wants.',
  'Social Sciences':'A map, photograph, artefact or oral account can provide evidence about a place or the past.',
  'Natural Sciences':'A fair investigation changes one factor, observes the result and records evidence.',
  'Natural Sciences and Technology':'A fair investigation changes one factor, observes the result and records evidence.',
  'Life Skills':'Think of a real situation at school or home and describe a safe, respectful choice.',
  'Life Orientation':'Think of a real situation and explain a healthy, safe and responsible response.',
  'Creative Arts':'Create a short piece, present it and describe the choices you made.'
 };
 for(const grade of [3,4,5,6,7]){
  for(const subject of subjectsByGrade[grade]){
   const terms=termTopics[subject]||termTopics.English;
   for(let term=1;term<=4;term++){
    if(existing.has([grade,subject,term].join('|')))continue;
    const concepts=terms[term-1].map((topic,i)=>[
     topic,
     'In Grade '+grade+', '+topic.toLowerCase()+' is explored through guided explanation, examples and practice. '+(explain[subject]||'Study the idea and apply it in context'),
     examples[subject]||'Use an everyday example to explain the idea, then practise independently.',
     'Explain the key idea in your own words. Check your work and correct any misunderstanding.'
    ]);
    courses.push({grade,subject,term,concepts});
   }
  }
 }
 window.GM_CURRICULUM_MAP={version:'2026.1',grades:Object.keys(subjectsByGrade),topicsAdded:courses.length,subjectsByGrade};
 if(typeof view==='function')view('home');
})();