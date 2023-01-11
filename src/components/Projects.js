import rickAndMorty from '../images/rickandmorty.jpeg';
import superCards from '../images/supercards.jpeg';
import '../styles/components/Projects.scss';
import { motion } from 'framer-motion';
// import projects from '../data/projectsData.json';

// const listProjects = () => {
//   const project = projects.map((project) => (
//     <li key={project.id}>
//       <article className="projects__one">
//         <img
//           src={project.img}
//           className="projects__one--img"
//           alt={project.img}
//         />
//         <h2 className="projects__one--title">{project.title}</h2>
//         <p className="projects__one--desc">{project.desc}</p>
//       </article>
//     </li>
//   ));
//   return project;
// };
function Projects() {
  return (
    <>
      <ul className="projects">
        {/* {listProjects()} */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <li key="1">
            <article className="projects__one">
              <img
                src={rickAndMorty}
                className="projects__one--img"
                alt="Rick and mMorty project"
              />
              <h2 className="projects__one--title">
                Rick and Morty character finder
              </h2>
              <p className="projects__one--desc">
                Filter characters by status, specie, etc.
              </p>
              <a
                href="https://elenavar.github.io/Rick-and-Morty-Finder/"
                className="linkProject"
              >
                <p className="projects__one--button">Go to project</p>
              </a>
            </article>
          </li>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li key="">
            <article className="projects__one">
              <img
                src={superCards}
                className="projects__one--img"
                alt="Rick and mMorty project"
              />
              <h2 className="projects__one--title">Awesome Women Cards</h2>
              <p className="projects__one--desc">
                Create your own business card.
              </p>
              <a
                href="https://elenavar.github.io/Rick-and-Morty-Finder/"
                className="linkProject"
              >
                <p className="projects__one--button">Go to project</p>
              </a>
            </article>
          </li>
        </motion.div>
      </ul>
    </>
  );
}

export default Projects;
