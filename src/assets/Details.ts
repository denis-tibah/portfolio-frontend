import enseeiht from 'assets/icons/enseeiht.png';
import aau from 'assets/icons/aau.jpg';
import kanop from 'assets/icons/kanop.png';
import lfdc from 'assets/icons/lfdc.png';
import akanthas from 'assets/icons/akanthas.jpg';
import supadm from 'assets/icons/supadm.jpg';

const details = {
  education: [
    {
      school: 'ENSEEIHT',
      url: 'https://www.enseeiht.fr/en/index.html',
      icon: enseeiht,
      location: 'Toulouse, France',
      degree: 'Master',
      major: 'Computer Science',
      start: 'Sep 2020',
      end: 'May 2023',
    },
    {
      school: 'AAU Klagenfurt',
      url: 'https://www.aau.at/en/',
      icon: aau,
      location: 'Klagenfurt, Austria',
      degree: 'Master',
      major: 'Computer Science',
      start: 'Sep 2022',
      end: 'Mar 2023',
    },
    {
      school: 'CPGE Lycée Déodat de Séverac',
      location: 'Toulouse, France',
      degree: 'Bachelor',
      major: 'Mathematics and Physics',
      start: 'Sep 2018',
      end: 'Jul 2020',
    },
    {
      school: 'Lycée Pierre de Fermat',
      location: 'Toulouse, France',
      degree: 'High School',
      major: 'Mathematics and Physics',
      start: 'Sep 2016',
      end: 'Jul 2018',
    },
  ],
  experience: [
    {
      company: 'Kanop',
      url: 'https://www.kanop.io/',
      icon: kanop,
      location: 'Paris, France',
      contract: 'Internship',
      position: 'Front-end web developer',
      start: 'Mar 2023',
      end: 'Sep 2023',
      description: [
        'Developed React TypeScript tools for map and chart visualizations of polygon and raster data at Kanop.',
        'Automated the testing, building, versioning, and deployment system by creating a robust CI pipeline.',
        'Integrated APIs and popular libraries like D3.js and Mapbox GL to ensure optimal performance and accessibility.',
        'Collaborated with data science team to create data visualizations that provided critical insights for stakeholders and policymakers.',
      ],
      technologies: [
        'React',
        'Node JS',
        'Gitlab CI/CD',
        'Mapbox.gl',
        'MUI Joy',
      ],
    },
    {
      company: 'Kanop',
      url: 'https://www.kanop.io/',
      location: 'Klagenfurt, Austria (remote)',
      icon: kanop,
      contract: 'Freelance',
      position: 'Front-end web developer',
      start: 'Sep 2022',
      end: 'Feb 2023',
      description: [
        'Performed unit testing of web applications and individual components.',
        'Optimized web applications for scalability, speed and security.',
        'Completed full redesigns of existing websites to improve navigation, enhance visuals and strengthen search engine rankings.',
        'Employed coding practices based on commonly accepted standards to establish site layout and user interface.',
      ],
      technologies: [
        'REST API',
        'Redux',
        'SASS',
        'WebGL',
        'Typescript',
        'Node JS',
        'MUI Joy',
      ],
    },
    {
      company: 'Kanop',
      url: 'https://www.kanop.io/',
      icon: kanop,
      location: 'Paris, France',
      contract: 'Internship',
      position: 'Front-end web developer',
      start: 'Jun 2022',
      end: 'Sep 2022',
      description: [
        'Documented project changes in team manuals for future reference and use.',
        'Collaborated with UX designers to optimize design and user workflow.',
        'Worked with Deck.gl cartography and mass data rendering tools.',
        'Adapted quickly to constantly changing, deadline-driven environment.',
      ],
      technologies: [
        'React',
        'Node JS',
        'Express',
        'Gitlab CI/CD',
        'Figma',
        'WebGL',
        'Mapbox.gl',
      ],
    },
    {
      company: 'La Fresque du Climat',
      url: 'https://fresqueduclimat.org/',
      icon: lfdc,
      location: 'Toulouse, France',
      contract: 'Volunteering',
      position: 'Facilitator',
      start: 'Feb 2022',
      end: 'Jun 2022',
      description: 'Facilitation of workshops on climate change awareness.',
    },
    {
      company: 'Akanthas',
      url: 'https://www.akanthas.fr/',
      icon: akanthas,
      location: 'Toulouse, France',
      contract: 'Internship',
      position: 'Data Processing & Management architecture developer',
      start: 'Jun 2021',
      end: 'Jul 2021',
      description:
        'Development of continuous integration/deployment infrastructure, improvements to a Node JS web app and retrieval of image data from Arlo autonomous cameras via public API.',
      technologies: [
        'Node JS',
        'Docker',
        'GitHub CI/CD',
        'Arlo API',
        'React',
        'Bootstrap',
        'Microsoft Azure',
        'Python',
        'OpenCV',
      ],
    },
    {
      company: 'Sup admission',
      url: 'https://www.sup-admission.com/',
      icon: supadm,
      location: 'Toulouse, France',
      contract: 'Freelance',
      position: 'Lecturer & Tutor',
      start: 'Sep 2021',
      end: 'Nov 2021',
      description:
        'Lectures and tutoring for students preparing for the competitive entrance exams to French engineering schools.',
      technologies: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    },
  ],
  skills: {
    languages: [
      'JavaScript',
      'Typescript',
      'Python',
      'Java',
      'C',
      'C++',
      'Matlab',
      'HTML',
      'CSS',
      'SASS',
      'Julia',
      'OCaml',
    ],
    frameworks: [
      'React',
      'Node JS',
      'Express',
      'Git',
      'CI/CD',
      'Docker',
      'Bootstrap',
      'Linux',
      'Windows',
      'Keras',
      'Tensorflow',
    ],
    tools: [
      'Scrum',
      'Agile',
      'GitHub',
      'Gitlab',
      'Notion',
      'Figma',
      'Mapbox',
      'Deck.gl',
      'OpenCV',
      'MUI Joy',
      'Blender',
    ],
    others: [
      'REST API',
      'Multi-threading',
      'Multi-processing',
      'Object-oriented programming',
      'UML',
      'Design patterns',
      'MVC',
      'Functional programming',
      'Algorithms',
      '3D rendering',
      'OpenGL',
    ],
  },
  languages: [
    {
      name: 'French',
      level: 'C2',
      native: true,
    },
    {
      name: 'English',
      level: 'C1',
    },
    {
      name: 'Spanish',
      level: 'C1',
    },
    {
      name: 'Polish',
      level: 'B2',
    },
    {
      name: 'German',
      level: 'B1',
    },
  ],
  contact: {
    address: 'Paris, France',
    email: 'negreljerzy.elliot@gmail.com',
    phone: '+33 7 83 79 29 25',
    website: 'https://www.bsodium.fr',
    linkedin: 'https://www.linkedin.com/in/bsodium/',
    github: 'https://www.github.com/bsodium',
    researchgate: 'https://www.researchgate.net/profile/Elliot-Negrel-Jerzy',
    gitlab: 'https://www.gitlab.com/bsodium',
    twitter: 'https://www.twitter.com/bs0dium',
    deviantart: 'https://www.deviantart.com/bsodium',
  },
};

export default details;
