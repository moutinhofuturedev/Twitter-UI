import { useState, FormEvent } from "react";
import "./Status.css"
import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Form } from "../../components/Form";
import { Tweet } from "../../components/Tweet";

export function Status() {
  const [ newAnswer, setNewAnswer ] = useState("");
  const [ answers, setAnswers ] = useState<string[]>(["Corcordo...", "Depende da situação"]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([...answers, newAnswer]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: React.KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([...answers ,newAnswer])
      setNewAnswer("")
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis soluta ex, nesciunt mollitia a ducimus laborum iste repellat voluptas provident suscipit vitae autem sunt reiciendis libero ipsam? Incidunt, quae!"/>
      <Separator />
      <Form
        onSubmit={createNewAnswer}
        onChange={(event) => setNewAnswer(event.target.value)}
        onKeyDown={handleHotKeySubmit}
        value={newAnswer}
        className="answer-tweet-form"
        placeholder="Tweet your answer"
        text="Answer"
      />
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}