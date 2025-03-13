// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'SaivinayGondrala', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['saivinaygondrala/portfolio'], // List of repository names to display.
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'City of Dallas Revenue Budget Analysis',
          description:
            'Analysing the budget allocation and which department got allocated which how much budget and what is the yearly budget. And what is the monthly expenditure. All of them can be analysed by using the tools such as Excel, Tableau, Tableau Prep, OpenRefine.',
          imageUrl:
            'https://img.freepik.com/premium-vector/set-business-graph-charts-icons-business-data-charts_349999-1122.jpg?w=740',
          link: 'https://drive.google.com/file/d/1qGcmyBxgO2lfi2apHndnVjgFrZE0ItlE/view',
        },
        {
          title: 'Telecom Churn Prediction',
          description:
            'By using machine learning algorithms like Linear Regression, Logistic Regression, Random Forest done the telecome churn prediction and achieved an accuracy of 98%.',
          imageUrl:
            'https://images.datacamp.com/image/upload/v1648487930/shutterstock_1624376548_b831bdf4c1.jpg',
          link: 'https://drive.google.com/file/d/1-Vm8hwyB46xcwsnB7MXdtJ4nDybkAgzp/view?usp=drive_link',
        },
        {
          title: 'House Rental Application',
          description:
            'This is a full stack react application which allows tenants to view properties which are available in their current location and the owner of the property can post add in our portal.',
          imageUrl:
            'https://media.licdn.com/dms/image/C4D12AQFJ9DlofYqxNA/article-cover_image-shrink_423_752/0/1633958067245?e=1728518400&v=beta&t=bEzmUhg2-4RJqd3JlhzkubvNjcBQtvouAhHf91XiTuI',
          link: 'https://x.com/i/status/1640245808988815360',
        },
        {
          title: 'E-Insurance Management System',
          description:
            'This is the fullstack Angular application which acts as a mediator between the customers who want to purchase the insurances and companies which offer insurance plans. In this the admin of this application can post an add related to insurance. And our platform allows users to purchase any insurance plan. We used stripe payments to perform payments.',
          imageUrl:
            'https://www.leadsquared.com/wp-content/uploads/2021/11/insurance-software-features-benefits.jpg',
          link: 'https://github.com/saivinaygondrala/E-Insurance-Management-System',
        },
      ],
    },
  },
  seo: {
    title: 'My Portfolio',
    description:
      'Welcome to Vinay`s Portfolio - a showcase of my expertise in advanced data analytics, full-stack development, and innovative technology solutions. With a solid foundation in programming languages like Java, Python, and JavaScript, and proficiency in frameworks such as React, I bring ideas to life with seamless web and mobile applications.\nExplore my projects, including RustCrab, an in-depth resource for Rust enthusiasts, and a comprehensive house rental application integrating cutting-edge technologies like Node.js, MongoDB, and Stripe. Discover my contributions to the field through published research, highlighting my commitment to solving real-world problems with data-driven insights and robust software development practices.\nWhether you`re interested in data visualization, mobile app development, or full-stack solutions, you`ll find a diverse portfolio demonstrating a blend of creativity, technical acumen, and dedication to excellence. Dive into detailed project descriptions, browse through my technical skills, and learn more about my journey in the world of tech.\nConnect with me to collaborate on innovative projects, discuss potential opportunities, or simply exchange ideas. Let`s build the future together, one line of code at a time.',
    imageURL:
      'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?w=740&t=st=1722961555~exp=1722962155~hmac=c132722a8d7f09435c8f525bfd65e32092cdc4f6277b78373a7b4e607a19f865',
  },
  social: {
    linkedin: 'saivinay-g',
    twitter: 'saivinay_g',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://saivinay-portfolio.vercel.app/',
    phone: '',
    email: 'saivinaygondrala@gmail.com',
  },
  resume: {
    fileUrl:
      'https://tinyurl.com/saivinay-resume', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Springboot',
    'JavaScript',
    'React.js',
    'Servlets',
    'JDBC',
    'JSP',
    'MySQL',
    'Git',
    'Github',
    'Python',
    'Bootstrap',
    'CSS',
    'Tailwind',
    'HTML',
    'Terraform',
    'AWS S3',
    'AWS EC2'
  ],
  experiences: [],
  certifications: [
    {
      name: 'Frontend Developer (React) Certificate',
      body: 'A Certification test conducted by Hackerrank.',
      year: 'July 2024',
      link: 'https://www.hackerrank.com/certificates/4c6e49fb8e66',
    },
    {
      name: 'Javascript (Intermediate) Certificate',
      body: 'A Certification test conducted by Hackerrank.',
      year: 'July 2024',
      link: 'https://www.hackerrank.com/certificates/1d8d0d6af194',
    },
    {
      name: 'Postman API Fundamentals Student Expert',
      body: 'A certification course which was conducted by Postman which teaches us the basics of API and how to set up API`s in Postman and create collections.',
      year: 'June 2024',
      link: 'https://badgr.com/public/assertions/k6PkL6n1TTyV9Tabsayb0A?identity__email=saivinaygondrala@gmail.com',
    },
    {
      name: 'Project-Based Learning: build an API Tet Summarizer app',
      body: 'A Certification course which teaches us to learn how to l=build text summerization app using Node.JS and Postman builtin Code generator.',
      year: 'June 2024',
      link: 'https://verify.skilljar.com/c/rfh7t92eech6',
    },
    {
      name: 'Java Programming: Solving Problems with Software',
      body: 'A certification course conducted by Duke University. On Coursera Platform. ',
      year: 'October 2020',
      link: 'https://www.coursera.org/account/accomplishments/verify/6Z4U9CUTD2TW',
    },
    {
      name: 'Citi\'s Technology Software Development on Forage',
      body: 'A certification program which gives you work simulation at Citi bank by giving realworld tasks.',
      link: 'https://tinyurl.com/certificate-simulation'
    }
  ],
  educations: [
    {
      institution: 'University of North Texas',
      degree: 'Ms in Advanced Data Analytics',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Sathyabama Institute of Science and Technology',
      degree: 'BE CSE',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'House Rental Application System',
      conferenceName:
        'ICRTDA 2023 - International Conference on Recent Trends and Technologies',
      journalName: 'River Publishers',
      authors:
        'Sai Vinay Gondrala, Praveen Gongada, Goluguri Venkata Sai Rama Reddy',
      link: 'https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770040723C53.pdf',
      description:
        'House Rental Application System: Developed a comprehensive house rental application with mobile and web clients using React, Node.js, MongoDB, Flutter, and AWS S3. Integrated Stripe for payment processing, enabling users to search, post, and rent properties efficiently.',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'black',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
