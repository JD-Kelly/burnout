import React from 'react';
import { useHistory } from 'react-router-dom';

const Splash = () => {
  const history = useHistory();
  const nextQuestionHandler = () => {
    history.push('/1');
  };

  return (
    <div>
      <h1>burnout</h1>
      <button type="button" onClick={nextQuestionHandler}>
        next
      </button>
    </div>
  );
};

export default Splash;
