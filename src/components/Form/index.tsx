import "./index.css"
import { FormProps } from "../../types/type";
import { PaperPlaneRight } from "phosphor-react";

export function Form(props: FormProps) {
  return (
    <form onSubmit={props.onSubmit} className={props.className}>
      <label htmlFor="tweet">
        <img
          src="https://github.com/moutinhofuturedev.png"
          alt="Paulo Moutinho"
        />
        <textarea
          id="tweet"
          placeholder={props.placeholder}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          value={props.value}
        ></textarea>
      </label>

      <button type="submit">
        <PaperPlaneRight />
        <span>{props.text}</span>
      </button>
    </form>
  );
}