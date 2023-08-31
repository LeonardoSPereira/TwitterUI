import { useState, FormEvent, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Status.css"
import { PaperPlaneRight } from "phosphor-react"

export function Status() {

  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswer] = useState([
    "Concordo...",
    "Olha, faz sentido",
    "Parabéns pelo progresso"
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswer([newAnswer, ...answers])
    setNewAnswer("")
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswer([newAnswer, ...answers])
      setNewAnswer("")
    }
  }



    return (
        <main className='status'>
          
          <Header title="Tweet"/>

          <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quaerat quisquam fugiat similique, omnis, beatae laboriosam nesciunt numquam totam eveniet cumque autem! Soluta beatae culpa fugit corrupti perspiciatis vero ipsum?"/>

          <Separator />

          <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/leonardospereira.png" alt="user logo" />
              <textarea 
                id="tweet" 
                placeholder="Tweet your answer"
                value={newAnswer}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }}
                />
            </label>

            <button type="submit">
              <PaperPlaneRight />
              <span>Answer</span>
            </button>

          </form>


          {answers.map(answer => {
            return <Tweet key={answer} content={answer}/>
          })}


        </main>
    )
}