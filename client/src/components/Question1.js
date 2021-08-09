/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { questions } from './Questions';

const Question1 = () => {
  const [answer, setAnswer] = useState('');
  const history = useHistory();
  const nextQuestionHandler = () => {
    history.push('/2');
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      <div>
        {questions.map(((question) => (
          <h1 key={question.id}>{question.question1}</h1>
        )))}
      </div>
      <div>
        <input
          type="radio"
          value="strongly_agree"
          onChange={handleAnswerChange}
          checked={answer === 'strongly_agree'}
        />
        <label
          className="strongly_agree"
        >
          Strongly Agree
        </label>
      </div>
      <div>
        <input
          type="radio"
          value="agree"
          onChange={handleAnswerChange}
          checked={answer === 'agree'}
        />
        <label
          className="agree"
        >
          Agree
        </label>
      </div>
      <div>
        <input
          type="radio"
          value="disagree"
          onChange={handleAnswerChange}
          checked={answer === 'disagree'}
        />
        <label
          className="disagree"
        >
          Disagree
        </label>
      </div>
      <div>
        <input
          type="radio"
          value="strongly_disagree"
          onChange={handleAnswerChange}
          checked={answer === 'strongly_disagree'}
        />
        <label
          className="strongly_disagree"
        >
          Strongly Disagree
        </label>
      </div>
      <button
        className="next_button"
        type="button"
        onClick={nextQuestionHandler}
      >
        next
      </button>
      {answer}
    </div>
  );
};

export default Question1;
