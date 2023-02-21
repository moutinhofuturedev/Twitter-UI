
import { Header } from "../../components/Header"
import { Separator } from "../../components/Separator"
import { Tweet } from "../../components/Tweet"
import { Form } from "../../components/Form"
import "../../components/Form/index.css"

const tweets = ["Hello", "How are you", "I'm fine"]

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />
      <Form
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
