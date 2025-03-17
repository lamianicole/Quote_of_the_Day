import { useEffect, useState } from "react";
import "./Quotebox.css";

const Quotebox = () => {
  const [quote, setQuote] = useState<string>("");

  // arrrow function für rendern eines random quote
  const fetchNewQuote = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setQuote(data.slip.advice))
      .catch((error) =>
        console.error("Fehler beim Abrufen des Zitats:", error)
      );
  };

  // Beim ersten Rendern initiales Zitat laden
  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div className="quotebox">
      <h1>Quote of the Day</h1>
      <p>{`"${quote}"`}</p>
      {/* Pattern Divider */}
      <img
        src="/images/pattern-divider-mobile.svg"
        alt="Pattern Divider"
        className="pattern-divider"
      />
      {/* Würfel-Icon mit Kreis */}
      <div className="dice-icon-wrapper" onClick={fetchNewQuote}>
        <img
          src="/images/icon-dice.svg"
          alt="Dice icon"
          className="dice-icon"
        />
      </div>
    </div>
  );
};

export default Quotebox;
