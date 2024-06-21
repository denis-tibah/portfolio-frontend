import idreamersMin from 'assets/icons/idreamers.min.webp';
import idreamers from 'assets/icons/idreamers.webp';
import csuMin from 'assets/icons/csu.min.webp';
import csu from 'assets/icons/csu.webp';
import truckpediaMin from 'assets/icons/truckpedia.min.webp';
import truckpedia from 'assets/icons/truckpedia.webp';
import minteaMin from 'assets/icons/mintea.min.webp';
import mintea from 'assets/icons/mintea.webp';
import classdojoMin from 'assets/icons/classdojo.min.webp';
import classdojo from 'assets/icons/classdojo.webp';

const details = {
  name: {
    first: 'Denis Ndaya',
    last: 'Tibah',
    nickname: 'Denis',
  },
  education: [
    {
      school: 'Columbia Southern University',
      url: 'https://start.columbiasouthern.edu/',
      icon: csu,
      iconMin: csuMin,
      location: 'Orange Beach, AL 36561',
      degree: 'Bachelor',
      major: 'Information Technology',
      start: 'Sep 2007',
      end: 'May 2011',
    },
  ],
  experience: [
    {
      company: 'Truckpedia',
      url: 'https://truckpedia.io/',
      icon: truckpedia,
      iconMin: truckpediaMin,
      location: 'Los Angeles, CA',
      contract: 'Contract',
      position: 'Full-stack engineer',
      start: 'May 2022',
      end: 'Apr 2024',
      description: [],
      skills: [
        'R&D',
        'UI/UX',
        'Svelte',
        'GraphQL',
        'NodeJS',
        'Figma',
      ],
    },
    {
      company: 'Mintea',
      url: 'https://www.innovatorspark.com/',
      icon: mintea,
      iconMin: minteaMin,
      location: 'Minneapolis, MN',
      contract: 'Full-time',
      position: 'Front-end engineer',
      start: 'Apr 20218',
      end: 'May 2022',
      description: [],
      skills: [
        'React',
        'Node JS',
        'DevOps',
        'Mapbox.gl',
        'Material UI',
        'Adobe XD',
      ],
    },
    {
      company: 'Classdojo',
      url: 'https://classdojo.com/',
      icon: classdojo,
      iconMin: classdojoMin,
      location: 'San Francisco, CA',
      contract: 'Full-time',
      position: 'Full Stack Developer',
      start: 'May 2016',
      end: 'Apr 2018',
      description: '',
      skills: [
        'Public speaking',
        'Climate change awareness',
        'Teamwork',
      ],
    },
    {
      company: 'iDreamers',
      url: 'https://www.idreamers.app/',
      icon: idreamers,
      iconMin: idreamersMin,
      location: 'Los Angeles, CA',
      contract: 'Freelance',
      position: 'Software Engineer',
      start: 'Apr 2012',
      end: 'May 2016',
      description: '',
      skills: [
        'Node JS',
        'Docker',
        'GitHub CI/CD',
        'React',
        'Bootstrap',
        'Python',
        'OpenCV',
      ],
    },
  ],
  languages: [
    {
      name: 'English',
      level: 'C2',
      native: true,
    },
    {
      name: 'Chinese',
      level: 'B2',
    },
  ],
  contact: {
    address: 'Seagoville, TX 75159',
    email: 'denis.tibah0218@gmail.com',
    phone: '323-521-4182',
    website: 'https://denis-tibah.vercel.app',
    linkedin: 'https://www.linkedin.com/in/denis-tibah-885b44314',
    github: 'https://github.com/denis-tibah',
    stackoverflow: 'https://stackoverflow.com/users/22221109/secret-point',
  },
};

export default details;
