export interface Planet {
  id: string;
  name: string;
  diameter: string;
  mass: string;
  distanceFromSun: string;
  orbitalPeriod: string;
  rotationPeriod: string;
  moons: number;
  type: string;
  composition: string;
  temperature: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  description: string;
  history: string;
  currentStatus: string;
  discovered: string;
  funFacts: string[];
}

export const planets: Planet[] = [
  {
    id: "sun",
    name: "Sun",
    diameter: "1,391,000 km",
    mass: "1.989 × 10³⁰ kg",
    distanceFromSun: "0 km (center)",
    orbitalPeriod: "N/A",
    rotationPeriod: "27 days",
    moons: 0,
    type: "G-type Main-Sequence Star",
    composition: "Hydrogen (73%), Helium (25%)",
    temperature: "5,778 K (surface)",
    color: "#FDB813",
    size: 3,
    orbitRadius: 0,
    orbitSpeed: 0,
    description: "The Sun is the star at the center of our Solar System, providing light and heat essential for life on Earth.",
    history: "The Sun formed about 4.6 billion years ago from the gravitational collapse of matter within a region of a large molecular cloud.",
    currentStatus: "Currently in the main sequence phase, burning hydrogen into helium. Expected to remain stable for another 5 billion years.",
    discovered: "Ancient times - observed by all early civilizations",
    funFacts: [
      "The Sun accounts for 99.86% of the mass in the Solar System",
      "One million Earths could fit inside the Sun",
      "Light from the Sun takes 8 minutes to reach Earth",
      "The Sun's core temperature is about 15 million degrees Celsius"
    ]
  },
  {
    id: "mercury",
    name: "Mercury",
    diameter: "4,879 km",
    mass: "3.285 × 10²³ kg",
    distanceFromSun: "57.9 million km",
    orbitalPeriod: "88 days",
    rotationPeriod: "59 days",
    moons: 0,
    type: "Terrestrial Planet",
    composition: "Iron core, rocky mantle",
    temperature: "-173°C to 427°C",
    color: "#8C7853",
    size: 0.4,
    orbitRadius: 5,
    orbitSpeed: 1.5,
    description: "Mercury is the smallest planet in our Solar System and the closest to the Sun.",
    history: "Known since ancient times. First visited by Mariner 10 in 1974, later studied extensively by MESSENGER (2011-2015).",
    currentStatus: "Currently being studied by BepiColombo mission (ESA/JAXA), launched in 2018, expected to arrive in 2025.",
    discovered: "Ancient times - visible to naked eye",
    funFacts: [
      "Mercury has the most eccentric orbit of all planets",
      "Despite being closest to the Sun, it's not the hottest planet",
      "A year on Mercury is just 88 Earth days",
      "Mercury has a comet-like tail"
    ]
  },
  {
    id: "venus",
    name: "Venus",
    diameter: "12,104 km",
    mass: "4.867 × 10²⁴ kg",
    distanceFromSun: "108.2 million km",
    orbitalPeriod: "225 days",
    rotationPeriod: "243 days (retrograde)",
    moons: 0,
    type: "Terrestrial Planet",
    composition: "Rocky with metal core",
    temperature: "462°C average",
    color: "#FFC649",
    size: 0.9,
    orbitRadius: 8,
    orbitSpeed: 1.2,
    description: "Venus is the second planet from the Sun and the hottest planet in our Solar System due to its thick atmosphere.",
    history: "Known since prehistoric times. Multiple Soviet Venera missions in 1960s-1980s. Most recently studied by Akatsuki orbiter.",
    currentStatus: "Target of future missions including NASA's DAVINCI and VERITAS, and ESA's EnVision, all planned for late 2020s.",
    discovered: "Ancient times - brightest natural object in night sky after Moon",
    funFacts: [
      "Venus rotates backwards compared to other planets",
      "A day on Venus is longer than its year",
      "Venus is often called Earth's 'sister planet' due to similar size",
      "Surface pressure on Venus is 92 times that of Earth"
    ]
  },
  {
    id: "earth",
    name: "Earth",
    diameter: "12,742 km",
    mass: "5.972 × 10²⁴ kg",
    distanceFromSun: "149.6 million km",
    orbitalPeriod: "365.25 days",
    rotationPeriod: "24 hours",
    moons: 1,
    type: "Terrestrial Planet",
    composition: "Iron core, silicate mantle and crust",
    temperature: "-88°C to 58°C",
    color: "#4169E1",
    size: 1,
    orbitRadius: 11,
    orbitSpeed: 1,
    description: "Earth is the third planet from the Sun and the only known planet to harbor life.",
    history: "Formed approximately 4.54 billion years ago. Life emerged roughly 3.5 billion years ago. Modern humans appeared around 300,000 years ago.",
    currentStatus: "Only known planet with life. Climate change due to human activity is current major concern. Over 7,000 satellites in orbit.",
    discovered: "N/A - our home planet",
    funFacts: [
      "Earth is the only planet not named after a god",
      "70% of Earth's surface is covered by water",
      "Earth's atmosphere is 78% nitrogen, 21% oxygen",
      "The planet travels at 107,000 km/h around the Sun"
    ]
  },
  {
    id: "moon",
    name: "Moon",
    diameter: "3,474 km",
    mass: "7.342 × 10²² kg",
    distanceFromSun: "149.6 million km (with Earth)",
    orbitalPeriod: "27.3 days (around Earth)",
    rotationPeriod: "27.3 days",
    moons: 0,
    type: "Natural Satellite",
    composition: "Rocky, metal-poor",
    temperature: "-173°C to 127°C",
    color: "#C0C0C0",
    size: 0.27,
    orbitRadius: 12,
    orbitSpeed: 1,
    description: "The Moon is Earth's only natural satellite and the fifth largest moon in the Solar System.",
    history: "Formed about 4.5 billion years ago, likely from debris after a Mars-sized object collided with Earth. First human landing in 1969.",
    currentStatus: "Artemis program aims to return humans by 2025. Multiple nations planning lunar bases for 2030s. Gateway station in development.",
    discovered: "Ancient times - visible from Earth",
    funFacts: [
      "The Moon is gradually moving away from Earth at about 3.8 cm per year",
      "There is no dark side of the Moon - all sides receive sunlight",
      "The Moon causes tides on Earth through gravitational pull",
      "Twelve humans have walked on the Moon (1969-1972)"
    ]
  },
  {
    id: "mars",
    name: "Mars",
    diameter: "6,779 km",
    mass: "6.39 × 10²³ kg",
    distanceFromSun: "227.9 million km",
    orbitalPeriod: "687 days",
    rotationPeriod: "24.6 hours",
    moons: 2,
    type: "Terrestrial Planet",
    composition: "Iron-rich rocky body",
    temperature: "-87°C to -5°C",
    color: "#CD5C5C",
    size: 0.5,
    orbitRadius: 15,
    orbitSpeed: 0.8,
    description: "Mars is the fourth planet from the Sun, often called the 'Red Planet' due to iron oxide on its surface.",
    history: "Studied since ancient times. Multiple successful missions since 1960s. Curiosity (2012) and Perseverance (2021) rovers currently active.",
    currentStatus: "Active exploration by multiple rovers and orbiters. Search for past microbial life ongoing. Human missions planned for 2030s.",
    discovered: "Ancient times - visible to naked eye",
    funFacts: [
      "Mars has the largest volcano in the Solar System: Olympus Mons",
      "A day on Mars is only 37 minutes longer than Earth",
      "Mars has seasons like Earth due to similar axial tilt",
      "Evidence suggests Mars once had liquid water on its surface"
    ]
  },
  {
    id: "jupiter",
    name: "Jupiter",
    diameter: "139,820 km",
    mass: "1.898 × 10²⁷ kg",
    distanceFromSun: "778.5 million km",
    orbitalPeriod: "11.9 years",
    rotationPeriod: "9.9 hours",
    moons: 95,
    type: "Gas Giant",
    composition: "Hydrogen and Helium",
    temperature: "-108°C (cloud tops)",
    color: "#DAA520",
    size: 2.5,
    orbitRadius: 20,
    orbitSpeed: 0.5,
    description: "Jupiter is the largest planet in our Solar System and a gas giant with a prominent Great Red Spot storm.",
    history: "Known since ancient times. Pioneer and Voyager missions in 1970s. Galileo orbiter (1995-2003). Juno currently in orbit since 2016.",
    currentStatus: "Juno mission studying Jupiter's atmosphere, magnetosphere, and interior. Europa Clipper launching 2024 to study moon Europa.",
    discovered: "Ancient times - brightest object in night sky after Venus",
    funFacts: [
      "Jupiter has the shortest day of all planets (9.9 hours)",
      "The Great Red Spot is a storm larger than Earth",
      "Jupiter has the strongest magnetic field of any planet",
      "Jupiter protects Earth from asteroids with its gravity"
    ]
  },
  {
    id: "saturn",
    name: "Saturn",
    diameter: "116,460 km",
    mass: "5.683 × 10²⁶ kg",
    distanceFromSun: "1.43 billion km",
    orbitalPeriod: "29.4 years",
    rotationPeriod: "10.7 hours",
    moons: 146,
    type: "Gas Giant",
    composition: "Hydrogen and Helium",
    temperature: "-139°C",
    color: "#F4A460",
    size: 2.1,
    orbitRadius: 25,
    orbitSpeed: 0.35,
    description: "Saturn is best known for its spectacular ring system, the most extensive of any planet in the Solar System.",
    history: "Known since ancient times. Rings discovered by Galileo (1610). Studied by Pioneer, Voyager, and extensively by Cassini (1997-2017).",
    currentStatus: "Cassini mission ended 2017. Dragonfly mission to moon Titan launching 2027, arriving 2034.",
    discovered: "Ancient times - visible to naked eye",
    funFacts: [
      "Saturn could float in water due to its low density",
      "Saturn's rings are made of ice and rock particles",
      "Titan, Saturn's largest moon, has a thick atmosphere",
      "Saturn has winds up to 1,800 km/h at its equator"
    ]
  },
  {
    id: "uranus",
    name: "Uranus",
    diameter: "50,724 km",
    mass: "8.681 × 10²⁵ kg",
    distanceFromSun: "2.87 billion km",
    orbitalPeriod: "84 years",
    rotationPeriod: "17.2 hours (retrograde)",
    moons: 27,
    type: "Ice Giant",
    composition: "Water, methane, ammonia ices",
    temperature: "-197°C",
    color: "#4FD0E0",
    size: 1.6,
    orbitRadius: 30,
    orbitSpeed: 0.25,
    description: "Uranus is an ice giant that rotates on its side, making it unique among the planets.",
    history: "Discovered by William Herschel in 1781 - first planet discovered with telescope. Voyager 2 only spacecraft to visit (1986).",
    currentStatus: "No active missions. Future Uranus Orbiter and Probe mission recommended by NASA for 2030s launch.",
    discovered: "March 13, 1781 by William Herschel",
    funFacts: [
      "Uranus rotates on its side at 98-degree angle",
      "Uranus has the coldest planetary atmosphere in the Solar System",
      "Uranus has 13 faint rings",
      "A season on Uranus lasts 21 years"
    ]
  },
  {
    id: "neptune",
    name: "Neptune",
    diameter: "49,244 km",
    mass: "1.024 × 10²⁶ kg",
    distanceFromSun: "4.5 billion km",
    orbitalPeriod: "165 years",
    rotationPeriod: "16.1 hours",
    moons: 16,
    type: "Ice Giant",
    composition: "Water, methane, ammonia ices",
    temperature: "-201°C",
    color: "#4169FF",
    size: 1.5,
    orbitRadius: 35,
    orbitSpeed: 0.18,
    description: "Neptune is the eighth and farthest known planet from the Sun, known for its deep blue color and supersonic winds.",
    history: "Discovered in 1846 through mathematical predictions. Only visited once by Voyager 2 in 1989.",
    currentStatus: "No active missions. Proposed Neptune Odyssey mission for 2030s to study the planet and moon Triton.",
    discovered: "September 23, 1846 (predicted mathematically)",
    funFacts: [
      "Neptune has the strongest winds in the Solar System (2,100 km/h)",
      "Neptune's blue color comes from methane in its atmosphere",
      "One year on Neptune equals 165 Earth years",
      "Neptune has a Great Dark Spot similar to Jupiter's Red Spot"
    ]
  }
];

export interface CelestialEvent {
  id: string;
  name: string;
  type: "eclipse" | "transit" | "conjunction" | "opposition";
  date: string;
  description: string;
  visibility: string;
  planets?: string[];
}

export const celestialEvents: CelestialEvent[] = [
  {
    id: "solar-eclipse-2024",
    name: "Total Solar Eclipse",
    type: "eclipse",
    date: "April 8, 2024",
    description: "A total solar eclipse visible across North America, with the path of totality crossing Mexico, United States, and Canada.",
    visibility: "North America",
    planets: ["sun", "moon", "earth"]
  },
  {
    id: "mercury-transit-2032",
    name: "Mercury Transit",
    type: "transit",
    date: "November 13, 2032",
    description: "Mercury will pass directly between Earth and the Sun, appearing as a small dark spot moving across the Sun's face.",
    visibility: "Global (daylight side)",
    planets: ["mercury", "sun", "earth"]
  },
  {
    id: "venus-jupiter-conjunction",
    name: "Venus-Jupiter Conjunction",
    type: "conjunction",
    date: "March 2, 2023",
    description: "Venus and Jupiter appeared extremely close together in the evening sky, less than 1 degree apart.",
    visibility: "Global",
    planets: ["venus", "jupiter"]
  },
  {
    id: "lunar-eclipse-2025",
    name: "Total Lunar Eclipse",
    type: "eclipse",
    date: "March 14, 2025",
    description: "A total lunar eclipse where the Moon passes through Earth's shadow, appearing red or copper-colored.",
    visibility: "Americas, Europe, Africa",
    planets: ["moon", "earth", "sun"]
  },
  {
    id: "mars-opposition-2025",
    name: "Mars Opposition",
    type: "opposition",
    date: "January 16, 2025",
    description: "Mars will be directly opposite the Sun in Earth's sky, appearing at its brightest and largest.",
    visibility: "Global",
    planets: ["mars", "earth"]
  }
];
