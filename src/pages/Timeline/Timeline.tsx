import { FormEvent, useState } from "react"
import { Header } from "../../components/Header"
import { Separator } from "../../components/Separator"
import { Tweet } from "../../components/Tweet"
import { Form } from "../../components/Form"
import "../../components/Form/index.css"

export function Timeline() {
  const [ newTweet, setNewTweet ] = useState("")
  const [ tweets, setTweets ] = useState<string[]>([
    "Terminei a Masterclass de React",
    "Super empolgado para continuar aprendendo React 🤙🏾"
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([...tweets ,newTweet])
    setNewTweet("")
  }

  function handleHotKeySubmit(event: React.KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([...tweets ,newTweet])
      setNewTweet("")
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <Form
        onSubmit={createNewTweet}
        onChange={(event) => setNewTweet(event.target.value)}
        onKeyDown={handleHotKeySubmit}
        value={newTweet}
        className="new-tweet-form"
        placeholder="What's happening?"
        text="Tweet"
      />
      <Separator />
      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
