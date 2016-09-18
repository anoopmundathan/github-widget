// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import GithubWidget from '../src/GithubWidget';

// Styles
import '../src/theme.scss';

ReactDOM.render(<GithubWidget username="schaab" />, document.getElementById('app'));

