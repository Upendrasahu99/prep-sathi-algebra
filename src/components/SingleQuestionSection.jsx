import React, {useState} from 'react'
import retrieveData from '../utils/retrieveData';

const SingleQuestionSection = ({totalQuestion, timeLimit}) => {
const [questions, setQuestions] = useState(retrieveData(totalQuestion));

  return (
    <div>SingleQuestionSection</div>
  )
}

export default SingleQuestionSection