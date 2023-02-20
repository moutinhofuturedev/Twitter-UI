import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Form } from "../../components/Form";
import { Tweet } from "../../components/Tweet";
import "./Status.css"

const answers = ["Concordo...", "Faz sentido!", "Parabéns pelo progresso"]

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis soluta ex, nesciunt mollitia a ducimus laborum iste repellat voluptas provident suscipit vitae autem sunt reiciendis libero ipsam? Incidunt, quae!"/>
      <Separator />
      <Form
        className="answer-tweet-form"
        placeholder="Tweet your answer"
        text="Answer"
      />
      {answers.map((answer, index) => {
        return <Tweet key={index} content={answer}/>
      })}
    </main>
  );
}