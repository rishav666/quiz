import react,{useState} from 'react';
import './question.css'
import {Link} from "react-router-dom"


function Sec() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore]=useState(0);
  const [showScore,setShowScore]=useState(false);
  var [questions,setQuestions] = useState([
		{
			questionText: 'How many continents in earth?',
			answerOptions: [
				{ answerText: 'one', isCorrect: false,isChosen: false },
				{ answerText: 'four', isCorrect: false,isChosen: false },
				{ answerText: 'seven', isCorrect: true,isChosen: false },
				{ answerText: 'three', isCorrect: false ,isChosen: false},
			],
		},
		{
			questionText: 'How many states in india?',
			answerOptions: [
				{ answerText: '25', isCorrect: false,isChosen: false },
				{ answerText: '28', isCorrect: true,isChosen: false },
				{ answerText: '30', isCorrect: false,isChosen: false },
				{ answerText: '29', isCorrect: false ,isChosen: false},
			],
		},
		{
			questionText: 'which country has highest population?',
			answerOptions: [
				{ answerText: 'China', isCorrect: true,isChosen: false },
				{ answerText: 'India', isCorrect: false,isChosen: false },
				{ answerText: 'USA', isCorrect: false,isChosen: false },
				{ answerText: 'Russia', isCorrect: false,isChosen: false },
			],
		},
		{
			questionText: 'Which country has largest area?',
			answerOptions: [
				{ answerText: 'India', isCorrect: false ,isChosen: false},
				{ answerText: 'Australia', isCorrect: false,isChosen: false },
				{ answerText: 'China', isCorrect: false,isChosen: false },
				{ answerText: 'Russia', isCorrect: true ,isChosen: false},
			],
		},
	]);

  const renderScore=(isCorrect,answer)=>{
    setCurrentQuestion(currentQuestion+1)
    if(isCorrect){
      setScore(score+1);
    }

 answer.isChosen=true;
if(currentQuestion+1 >=  questions.length){
  setShowScore(true)
  console.log(questions)
  setCurrentQuestion(0)
}

  }
const renderAnswer=(answers)=>{
  return(
    answers.map((answer)=>{
      return(
        	<button onClick={()=>renderScore(answer.isCorrect,answer)}>{answer.answerText}</button>
      )
    })
  )
}

 const renderquestion=(questions)=>{
   return(

         <div>
         {showScore?(           <> <h1>Your Score

           </h1>


           <div className='question-section'>
            <h1>{score}</h1>
             <div className='question-count'>
               <span>Question {currentQuestion+1}</span>/{questions.length}
             </div>
             <div className='question-text'>{questions[currentQuestion].questionText}</div>
           </div>
           <div className='answer-section'>
           {questions[currentQuestion].answerOptions.map((answerOption) => (
							<button style={answerOption.isCorrect?{backgroundColor:"green"}:{}} >{(answerOption.isChosen==true && answerOption.isCorrect==true)?(<i class="fa fa-check-circle"></i>):(<></>)} {(answerOption.isChosen==true && answerOption.isCorrect==false)?(<i style={{color:"red"}} class="fa fa-times"></i>):(<></>)}        {answerOption.answerText}</button>

						))}
           </div>
           <div>
           {(currentQuestion +1 <  questions.length)?(<div onClick={()=>{setCurrentQuestion(currentQuestion+1)}} className="btn btn-success btn-large">NEXT QUESTION</div>):
           (<> <Link to ="/thanks"><div className="btn btn-success">Finish</div></Link></>)}
           </div>

           </>






         ):(
           <>
           <div className='question-section'>
            <h1>Welcome to the quiz</h1>
             <div className='question-count'>
               <span>Question {currentQuestion+1}</span>/{questions.length}
             </div>
             <div className='question-text'>{questions[currentQuestion].questionText}</div>
           </div>
           <div className='answer-section'>
           {renderAnswer(questions[currentQuestion].answerOptions)}
           </div>
           </>
         )}

          </div>
   )
 }



  return (
    <div className="Card">
    {renderquestion(questions)}
    </div>
  );
}

export default Sec;
