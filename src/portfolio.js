// import { useTranslation } from 'react-i18next';

// import i18next from 'i18next';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/matheusgomes062',
  title: 'VUE ❤',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matheus Gomes',
  role: 'Front End Engineer',
  description: 'DescriptionData',
  resume: 'ResumeUrl',
  social: {
    linkedin: 'https://www.linkedin.com/in/matheus-gomes-dev/',
    github: 'https://github.com/matheusgomes062',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ProjectTitle1',
    description: 'ProjectDescription1',
    stack: ['Vue2', 'SASS', 'Vuex', 'Vue Router', 'Element UI', 'PugJs', 'Vercel', 'Bootstrap'],
    sourceCode: 'https://github.com/matheusgomes062/app-resiliencia',
    livePreview: 'https://app-resiliencia.vercel.app/',
  },
  {
    name: 'ProjectTitle2',
    description: 'ProjectDescription2',
    stack: ['Markdown'],
    sourceCode: 'https://github.com/matheusgomes062/guia-markdown',
    livePreview: 'https://drive.google.com/file/d/18sS8Pb7p22uRgDwFTOh1kI4VaVSWDy9Y/view?usp=sharing',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Vue2',
  'Vue3',
  'NuxtJs',
  'Vuex',
  'Vue Router',
  'Vuetify',
  'Bootstrap',
  'Element UI',
  'Vite',
  'Storybook',
  'Clean Code',
  'C#',
  '.NET',
  'NodeJs',
  'XUnity',
  'React',
  'React-Native',
  'SASS',
  'Presentation Design',
  'SCRUM',
  'UX/UI',
  'Adobe XD',
  'Figma',
  'Shopify - Dropshipping',
  'Web Design',
  'Inteligência Artifical',
  'REST API',
  'Git',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matheusgomes062@gmail.com',
}

export { header, about, projects, skills, contact }
