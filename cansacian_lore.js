/**
 * ============================================================================
 * CANSACIAN LORE & ORACLE RULEBOOK (cansacian_lore.js)
 * ============================================================================
 * Place this file in the exact same folder as your_patta_cansacian_birth_chart.html.
 */

window.CANSACIAN_LORE = {
  // 1. THE 12 BIRDS ACROSS THE 4 ANQUARS (KEYWORDS & THEMES FOR AI SYNTHESIS)
  birds: [
    {
      index: 0,
      month: 'Mar',
      anquar: 'Anq I',
      stage: 'Birth · New Beginning',
      bird: 'Pandur',
      colors: ['#7c3aed', '#ffffff'],
      theme: 'Birth',
      keywords: ['Birth', 'Motherhood', 'Care', 'Nurturing']
    },
    {
      index: 1,
      month: 'Apr',
      anquar: 'Anq I',
      stage: 'Birth · New Beginning',
      bird: 'Cyam',
      colors: ['#1e1b2e', '#fb7185', '#f59e0b'],
      theme: 'Thoughts Form',
      keywords: ['Planning', 'Stepping-Back', 'Illusions', 'Thinking Long-Term']
    },
    {
      index: 2,
      month: 'May',
      anquar: 'Anq I',
      stage: 'Birth · New Beginning',
      bird: 'Pade',
      colors: ['#10b981', '#f472b6'],
      theme: 'Movement & First Decisions',
      keywords: ['Exploration', 'Making Choices', 'Trusting Oneself', 'Belonging']
    },
    {
      index: 3,
      month: 'Jun',
      anquar: 'Anq II',
      stage: 'Youth · Ripening',
      bird: 'Mandal',
      colors: ['#38bdf8', '#2563eb'],
      theme: 'Curiosity & Will to Explore',
      keywords: ['Refining/Perfecting', 'Curiosity', 'Illusions', 'Inner-Child']
    },
    {
      index: 4,
      month: 'Jul',
      anquar: 'Anq II',
      stage: 'Youth · Ripening',
      bird: 'Vissa',
      colors: ['#065f46', '#10b981'],
      theme: 'Learning About the World',
      keywords: ['Relationships', 'Community/Family', 'Social Awareness', 'Selflessness']
    },
    {
      index: 5,
      month: 'Aug',
      anquar: 'Anq II',
      stage: 'Youth · Ripening',
      bird: 'Muksa',
      colors: ['#1e3a8a', '#cbd5e1'],
      theme: 'Stepping into Independence',
      keywords: ['Creativity', 'Social Awareness', 'Dedication', 'Relationships']
    },
    {
      index: 6,
      month: 'Sep',
      anquar: 'Anq III',
      stage: 'Maturity · Ripened Life',
      bird: 'Surur',
      colors: ['#f97316', '#92400e'],
      theme: 'Interacting with Other Elements',
      keywords: ['Long-Lasting Friendships', 'Independence', 'Resilience', 'Community/Family']
    },
    {
      index: 7,
      month: 'Oct',
      anquar: 'Anq III',
      stage: 'Maturity · Ripened Life',
      bird: 'Rup',
      colors: ['#9333ea', '#10b981', '#7dd3fc', '#f8fafc'],
      theme: 'Multifaceted Reality',
      keywords: ['Transformation', 'Reflection', 'Individuality', 'Superficiality']
    },
    {
      index: 8,
      month: 'Nov',
      anquar: 'Anq III',
      stage: 'Maturity · Ripened Life',
      bird: 'Acroth',
      colors: ['#78350f', '#a16207'],
      theme: 'Immersion & Purpose Fulfilled',
      keywords: ['Abstinence', 'Attachments', 'Learning', 'Exploration', 'Concentration']
    },
    {
      index: 9,
      month: 'Dec',
      anquar: 'Anq IV',
      stage: 'Departure · End of Cycle',
      bird: 'Acaria',
      colors: ['#dc2626', '#f9a8d4'],
      theme: 'Sharing Wisdom Before Leaving',
      keywords: ['Learning', 'Humility', 'Social Preservation', 'Prudence/Discretion']
    },
    {
      index: 10,
      month: 'Jan',
      anquar: 'Anq IV',
      stage: 'Departure · End of Cycle',
      bird: 'Chintan',
      colors: ['#bae6fd', '#334155'],
      theme: 'Re-evaluating Existence',
      keywords: ['Discipline', 'Dedication', 'Refining/Perfecting', 'Self-Reliance']
    },
    {
      index: 11,
      month: 'Feb',
      anquar: 'Anq IV',
      stage: 'Departure · End of Cycle',
      bird: 'Anjali',
      colors: ['#facc15', '#fef08a'],
      theme: 'Departing Empty-Handed',
      keywords: ['Humility', 'Completion', 'Selflessness', 'Family']
    }
  ],

  // 2. THE TWIN MOONS: SWEET (EMOTIONS) & BITTER (REALITY)
  moons: {
    chashnac: {
      name: 'Chashnac',
      alias: 'Blue Moon (Chashnac) · Sweet Side',
      color: '#60a5fa',
      haloColor: '#dbeafe',
      orbitColor: '#60a5fa',
      orbitDays: 12,
      direction: 'Counter-Clockwise',
      keywords: ['Emotions', 'Tenderness', 'Nostalgia', 'Attachment', 'Subjective Feeling'],
      interpretationRule: 'Synthesize Chashnac’s emotional, tender lens with the keywords of whichever Bird sector Chashnac sits in.'
    },
    chrysomela: {
      name: 'Chrysomela',
      alias: 'White Moon (Chrysomela) · Bitter Side',
      color: '#ffffff',
      haloColor: '#f8fafc',
      orbitColor: '#4b5563',
      orbitDays: 52,
      direction: 'Clockwise',
      keywords: ['Unvarnished Truth', 'Objective Weight', 'Grounded Reality', 'Clear-Eyed Clarity'],
      interpretationRule: 'Synthesize Chrysomela’s objective, grounded reality lens with the keywords of whichever Bird sector Chrysomela sits in.'
    },
    dynamicRule: 'The Blue Moon (Chashnac) and White Moon (Chrysomela) travel in opposite directions on intersecting star-diamonds, balancing emotional perspective (Sweet) against grounded reality (Bitter), and meet only at the 4 Crossing Gates.'
  },

  // 3. THE 4 CROSSING GATES (156-DAY EXACT OVERLAP CYCLE)
  gates: [
    {
      id: 0,
      name: 'Memory / Nostalgia',
      short: 'Memory',
      direction: 'North Crossing',
      anquar: 'Anq I',
      x: 170,
      y: 114,
      keywords: ['Past Encounters', 'Echoes', 'Emotional Sweetness', 'Objective Truth']
    },
    {
      id: 1,
      name: 'Collection',
      short: 'Collection',
      direction: 'East Crossing',
      anquar: 'Anq II',
      x: 226,
      y: 170,
      keywords: ['New Connections', 'Social Volume', 'Recall', 'Sorting Bonds']
    },
    {
      id: 2,
      name: 'Pace / Tension',
      short: 'Pace',
      direction: 'South Crossing',
      anquar: 'Anq III',
      x: 170,
      y: 226,
      keywords: ['High Velocity', 'Momentum', 'Swept in the Current', 'Unnoticed Speed']
    },
    {
      id: 3,
      name: 'White',
      short: 'White',
      direction: 'West Crossing',
      anquar: 'Anq IV',
      x: 114,
      y: 170,
      keywords: ['Stillness', 'Neutral Trance', 'Absorption', 'Zero Pull']
    }
  ],

  // 4. CHART PLACEMENT RULES
  chartRules: {
    homeBird: 'Determined by the birth month sector (1 of 12 Birds)—giving core temperament and life-stage archetype.',
    birthClock: 'The exact 30-hour CT (or 24-hour ST) birth time determines the exact positions of Chashnac, Chrysomela, and whether an exact dead-center Gate overlap is active at birth.',
    gateCycle: 'Exact dead-center Gate overlaps follow a repeating 156-day cycle (alternating 70.2-day and 7.8-day intervals across North, East, South, and West).'
  },

  extraModules: []
};
