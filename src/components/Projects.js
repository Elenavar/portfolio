import rickAndMorty from '../images/rickandmorty.jpeg';
import superCards from '../images/supercards.jpeg';
import '../styles/components/Projects.scss';
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
          </article>
        </li>
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
          </article>
        </li>
      </ul>
    </>
  );
}

export default Projects;
