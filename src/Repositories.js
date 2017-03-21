import React, { PropTypes } from 'react';

// Components
import Repository from './Repository';

const sortByStars = (a, b) => (b.stargazers_count - a.stargazers_count);

const Repositories = ({ repositories = [], top }) => {
  const repos = repositories.sort(sortByStars)
    .slice(0, top)
    .map(repo =>
      (<Repository
        key={repo.id}
        url={repo.html_url}
        name={repo.name}
        language={repo.language}
        stars={repo.stargazers_count}
      />
      ));

  return (
    <div>
      <div className="gh-widget-container">
        <div className="gh-widget-heading">
          Top Repositories
        </div>
      </div>
      <div className="gh-widget-repositories">{repos}</div>
    </div>
  );
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    html_url: PropTypes.string,
    name: PropTypes.string,
    language: PropTypes.string,
    stargazers_count: PropTypes.number,
  })),
  top: PropTypes.number,
};

Repositories.defaultProps = {
  repositories: [],
  top: 0,
};

export default Repositories;
