import rickAndMorty from '../images/rickandmorty.png';
import '../styles/components/Projects.scss';
function Projects() {
  return (
    <div className="projects">
      <article className="projects__one">
        <img
          src={rickAndMorty}
          className="projects__one--img"
          alt="Rick and Morty project"
        />
        <h2 className="projects__one--title">
          Rick and Morty character finder.
        </h2>
        <p className="projects__one--desc">
          You can filter character by status, specie, etc.
        </p>
      </article>
    </div>
  );
}

export default Projects;
