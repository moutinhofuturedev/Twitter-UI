import "./index.css"

export function Form() {
  return (
    <form className="new-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/moutinhofuturedev.png" alt="Paulo Moutinho" />
        <textarea id="tweet" placeholder="What's happening"></textarea>
      </label>

      <button type="submit">Tweet</button>
    </form>
  )
}