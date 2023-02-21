import rickAndMorty from '../images/rickandmorty.png';
import superCards from '../images/supercards.png';
import guerreras from '../images/guerreras.png';
import hunter from '../images/hunterxhunter.png';
import lord from '../images/lord.png';
import '../styles/components/Projects.scss';
import { Link } from 'react-router-dom';
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
    <div className='projectsPage'>
    <div className="projectsPage__back">
        <Link to="/menu" className="projectsPage__back--link link">
          <i class="fa-sharp fa-solid fa-circle-arrow-left"></i></Link>
    </div>
      <div className="projectsPage__paper">
        <ul className='projectsPage__paper--list list'>
          <li key="1">
            <a href="https://elenavar.github.io/Rick-and-Morty-Finder/" target="_blank" rel='noreferrer'>
              <article className="list__one project">
                <img
                  src={rickAndMorty}
                  className="project__img"
                  alt="Rick and mMorty project"
                />
                <h2 className="project__title">
                  Rick and Morty character finder
                </h2>
                <p className="project__desc">
                  Filter characters by status, specie, etc.
                </p>
              </article>
            </a>
          </li>
          <a href="https://elenavar.github.io/superCards/" target="_blank" rel='noreferrer'>
            <li key="">
              <article className="list__two project">
                <img
                  src={superCards}
                  className="project__img"
                  alt="Rick and mMorty project"
                />
                <h2 className="project__title">Awesome Women Cards</h2>
                <p className="project__desc">
                  Create your own business card.
                </p>
              </article>
            </li>
            </a>
            <a href="https://elenavar.github.io/project-promo-R-module-1-team-3/" target="_blank" rel='noreferrer'>
            <li key="">
              <article className="list__two project">
                <img
                  src={guerreras}
                  className="project__img"
                  alt="Guerreras del Front project"
                />
                <h2 className="project__title">Guerreras del Front</h2>
                <p className="project__desc">
                  Create your own business card.
                </p>
              </article>
            </li>
            </a>
            <a href="https://hunterxhunters-production.up.railway.app/#/" target="_blank" rel='noreferrer'>
            <li key="">
              <article className="list__two project">
                <img
                  src={hunter}
                  className="project__img"
                  alt="HunterxHunter project"
                />
                <h2 className="project__title">HunterxHunter</h2>
                <p className="project__desc">
                Migration of an already created project to React and creation of a database.
                </p>
              </article>
            </li>
            </a>
            <a href='https://elenavar.github.io/Lord-of-the-Rings-Game/' target="_blank" rel='noreferrer'>
            <li key="">
              <article className="list__two project">
                <img
                  src={lord}
                  className="project__img"
                  alt="Lord of the Rings game"
                />
                <h2 className="project__title">Lord of the Rings game</h2>
                <p className="project__desc">
                Fight evil with the Lord of the Rings game.
                </p>
              </article>
            </li>
            </a>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Projects;
