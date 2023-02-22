import { FormEvent, useState } from "react"
import { Header } from "../../components/Header"
import { Separator } from "../../components/Separator"
import { Tweet } from "../../components/Tweet"
import { Form } from "../../components/Form"
import "../../components/Form/index.css"

export function Timeline() {
  const [ newTweet, setNewTweet ] = useState("")
  const [ tweets, setTweets ] = useState<string[]>([])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([...tweets ,newTweet])
    setNewTweet("")
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <Form
        onSubmit={createNewTweet}
        onChange={(event) => setNewTweet(event.target.value)}
        value={newTweet}
        className="new-tweet-form"
        placeholder="What's happening?"
        text="Tweet"
      />
      <Separator />
      {tweets.map((tweet, index) => {
        return <Tweet key={index} content={tweet} />;
      })}
    </main>
  );
}
