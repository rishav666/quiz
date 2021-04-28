import react,{useState} from 'react';
import './question.css'
import {Link} from "react-router-dom"


function Question() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore]=useState(0);
  const [showScore,setShowScore]=useState(false);
  var [questions,setQuestions] = useState([
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false,isChosen: false },
				{ answerText: 'London', isCorrect: false,isChosen: false },
				{ answerText: 'Paris', isCorrect: true,isChosen: false },
				{ answerText: 'Dublin', isCorrect: false ,isChosen: false},
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false,isChosen: false },
				{ answerText: 'Elon Musk', isCorrect: true,isChosen: false },
				{ answerText: 'Bill Gates', isCorrect: false,isChosen: false },
				{ answerText: 'Tony Stark', isCorrect: false ,isChosen: false},
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true,isChosen: false },
				{ answerText: 'Intel', isCorrect: false,isChosen: false },
				{ answerText: 'Amazon', isCorrect: false,isChosen: false },
				{ answerText: 'Microsoft', isCorrect: false,isChosen: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false ,isChosen: false},
				{ answerText: '4', isCorrect: false,isChosen: false },
				{ answerText: '6', isCorrect: false,isChosen: false },
				{ answerText: '7', isCorrect: true ,isChosen: false},
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
           (<> <div className="btn btn-large btn-primary" onClick={()=>{window.location.reload(false);}}>Give this Quiz agan</div> <Link to='/sec'> <div className="btn btn-large btn-light">Second set of Quiz</div></Link></>)}
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

export default Question;
