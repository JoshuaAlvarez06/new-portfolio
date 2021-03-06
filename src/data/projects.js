import codersspot from '../images/codersspot.jpeg';
import lashempress from '../images/lashempress.jpeg';
import welovemovies from '../images/WeLoveMovies.jpeg';
import amazonclone from '../images/amazonclone.png';

export const projects = [
  {
    name: 'Amazon Clone',
    image: amazonclone,
    description:
      'Developed a full-stack desktop web application that resembles the Amazon website. Implemented user authentication, state management, and payment with Stripe. Used Firebase to implement additional functionality. Test account can be found in GitHub Repo.',
    live: 'https://clone-8b7a4.web.app/',
    repo: 'https://github.com/JoshuaAlvarez06/amazon-clone',
  },
  {
    name: `Coder's Spot`,
    image: codersspot,
    description:
      'Developed a full-stack application from scratch in which users can blog. Created the entire frontend, backend, and the database with a larger focus on the backend. Implemented a fully functional API that can perform CRUD operations. Implemented authentication using Auth0 and performed conditional rendering depending on if user is authenticated or not. Built with: Node.js, Express.js, PostgreSQL, React, JavaScript, CSS',
    live: 'https://codersspot.netlify.app/',
    repo: 'https://github.com/JoshuaAlvarez06/coders-spot-frontend.git',
    repoTwo: 'https://github.com/JoshuaAlvarez06/coders-spot-backend.git',
  },
  {
    name: 'Lash Empress LA',
    image: lashempress,
    description:
      'Created a real responsive website for a client using React and custom CSS (no Bootstrap or framework). Used JavaScript to add functionality. Used various reusable components and implemented the Google Maps API. Built with React, JavaScript, HTML, CSS',
    live: 'https://lashempressla.netlify.app/',
    repo: 'https://github.com/JoshuaAlvarez06/lash-site',
  },

  {
    name: 'WeLoveMovies',
    image: welovemovies,
    description:
      'Developed the backend portion of a web application using several technologies. Created the PostgreSQL database from scratch and created the REST API to be able to call it in the frontend portion of the application. Built with Node.js, Express.js, PostgreSQL, Knex.js',
    live: 'https://welovemovies-ja.netlify.app',
    repo: 'https://github.com/JoshuaAlvarez06/WeLoveMovies',
  },
];
