import './style.css'

import { Header } from "../../components/Header"
import { Separator } from "../../components/Separator"
import { Tweet } from "../../components/Tweet"
import { FormEvent, KeyboardEvent, useState } from 'react'


export function Timeline() {

    const [newTweet, setNewTweet] = useState('')
    const [tweets, setTweets] = useState([
      'Aprendi muito sobre react juntamente com typescript',
      'Projeto desenvolvido, durante a Masterclass React da rocketseat',
    ])

    function createNewTweet(event: FormEvent) {
      event.preventDefault()
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
      if (event.key == "Enter" && (event.ctrlKey || event.metaKey)) {
        setTweets([newTweet, ...tweets])
        setNewTweet('')
      }
    }

    return (
        <main className='timeline'>
          <Header title='Home'/>

          <form className='new-tweet-form' onSubmit={createNewTweet}>
            <label htmlFor="tweet">
              <img src="https://github.com/arthurmousinho.png" alt="Arthur Mousinho"/>
              <textarea id="tweet" placeholder="What's happening?"
              value={newTweet}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => setNewTweet(event.target.value)}></textarea>
            </label>

            <button type='submit'>
              Tweet
            </button>
          </form>
          
          <Separator />

          {
            tweets.map(tweet => {
              return <Tweet key={tweet}  content={tweet}/>
            })
          }

        </main>
    )
}