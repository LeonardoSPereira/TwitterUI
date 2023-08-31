import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Timeline.css"


export function Timeline() {
  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    "meu primeiro tweet",
    "teste",
    "deu certo tweetar"
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet("")
  }

    return (
        <main className='timeline'>
          
          <Header title="Home"/>


          <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/leonardospereira.png" alt="user logo" />
              <textarea 
                id="tweet" 
                placeholder="What's happening?"
                value={newTweet}
                onChange={(e) => {
                  setNewTweet(e.target.value)
                }} 
                />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet}/>
          })}


        </main>
    )
}