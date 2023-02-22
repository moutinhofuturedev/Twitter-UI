import "./index.css"

interface FormProps {
  className?: string;
  placeholder?: string;
  text?: string;
  value?: string;
  onSubmit?: (value: any) => void;
  onChange?: (value: any) => void;
}

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
          value={props.value}
        ></textarea>
      </label>

      <button type="submit">{props.text}</button>
    </form>
  );
}