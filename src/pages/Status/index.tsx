import './style.css'

import { Header } from "../../components/Header"
import { Separator } from "../../components/Separator"
import { Tweet } from "../../components/Tweet";
import { FormEvent, useState, KeyboardEvent} from 'react';
import { PaperPlaneRight } from 'phosphor-react';


export function Status() {
 
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
      'Recomendo muito',
      'Gostei do conteúdo'
    ])

    function createNewAnswer(event: FormEvent) {
      event.preventDefault()
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }  

    function handleHotKeySubmit(event: KeyboardEvent) {
      if (event.key == "Enter" && (event.ctrlKey || event.metaKey)) {
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
      }
    }

    return (
        <main className='status'>
          <Header title='Tweet'/>

          <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, minus, accusamus in facere sapiente dolorum quo voluptatem veritatis ipsum tempore assumenda, corrupti ab non laboriosam eveniet odit tenetur inventore delectus!'/>  

          <Separator />

          <form className='answer-tweet-form' onSubmit={createNewAnswer}>
            <label htmlFor="tweet">
              <img src="https://github.com/arthurmousinho.png" alt="Arthur Mousinho" />
              <textarea id="tweet" placeholder="Tweet your answer"
              value={newAnswer}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => setNewAnswer(event.target.value)}
              ></textarea>
            </label>

            <button type='submit'>
              <PaperPlaneRight/>
              <span>Answer</span>
            </button>
          </form>
      
          {
            answers.map(answer => {
              return <Tweet key={answer}  content={answer}/>
            })
          }

        </main>
    )
}