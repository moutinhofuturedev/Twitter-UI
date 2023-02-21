import "./index.css"

interface FormProps {
  className?: string;
  placeholder?: string;
  text?: string;
}

export function Form(props: FormProps) {
  return (
    <form className={props.className}>
      <label htmlFor="tweet">
        <img src="https://github.com/moutinhofuturedev.png" alt="Paulo Moutinho" />
        <textarea id="tweet" placeholder={props.placeholder}></textarea>
      </label>

      <button type="submit">{props.text}</button>
    </form>
  )
}