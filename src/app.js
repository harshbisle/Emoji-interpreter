import { useState } from "react";
import "./styles.css";

export default function App() {
  var [meaning, setMeaning] = useState("-");
  var emojiDictionary = {
    "😀": "Grinning face",
    "😅": "Grinning Face with Sweat",
    "🙂": "Slightly smiling face",
    "🤣": "Rolling on the floor laughing",
    "🙃": "Upside-down face",
    "😉": "Winking face",
    "🤩": "Star-Struck",
    "😋": "Face Savoring Food",
    "🤑": "Money-Mouth Face",
    "🤗": "Hugging Face",
    "😒": "Unamused Face",
    "😵": "Dizzy Face",
    "🤓": "Nerd Face",
    "🥳": "Partying Face",
    "🤯": "Exploding Head aka Mind-Blown"
  };
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database :(";
    }
    setMeaning(meaning);
  }
  var emojisWeKnow = Object.keys(emojiDictionary);
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter ✨</h1>
      <h3 style={{ color: "orange" }}>
        Enter an emoji below and get its meaning 👇
      </h3>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
