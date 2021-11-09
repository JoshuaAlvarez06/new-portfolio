import codersspot from '../images/codersspot.png';
import lashempress from '../images/lashempress.png';
import welovemovies from '../images/WeLoveMovies.png';
import companysite from '../images/companysite.png';

export const projects = [
  {
    name: 'Lash Empress LA',
    image: lashempress,
    description:
      'Created a real responsive website for a client using React and custom CSS (no Bootstrap or framework). Used JavaScript to add functionality. Used various reusable components and implemented the Google Maps API. Built with React, JavaScript, HTML, CSS',
    live: 'https://lashempressla.netlify.app/',
    repo: 'https://github.com/JoshuaAlvarez06/lash-site',
  },
  {
    name: `Coder's Spot`,
    image: codersspot,
    description:
      'Developed a full-stack application from scratch in which users can blog. Created the entire frontend, backend, and the database with a larger focus on the backend. Implemented reusable components and a fully functional API that can perform CRUD operations. Built with: Node.js, Express.js, PostgreSQL, React, JavaScript, CSS',
    live: 'https://codersspot.netlify.app/',
    repo: 'https://github.com/JoshuaAlvarez06/blog-project',
  },
  {
    name: 'WeLoveMovies',
    image: welovemovies,
    description:
      'Developed the backend portion of a web application using several technologies. Created the PostgreSQL database from scratch and created the REST API to be able to call it in the frontend portion of the application.Built with Node.js, Express.js, PostgreSQL, Knex.js',
    live: 'https://welovemovies-ja.netlify.app',
    repo: 'https://github.com/JoshuaAlvarez06/WeLoveMovies',
  },
  {
    name: 'Company Site',
    image: companysite,
    description:
      'Developed a responsive, front-end application which can be used as a sales site or a company website. Implemented styled components, React hooks, and single-responsibility components. Used various animations to enhance visuals. Built with: React, JavaScript, HTML, CSS',
    live: 'https://companysite-ja.netlify.app',
    repo: 'https://github.com/JoshuaAlvarez06/Sample-Website',
  },
];
