import React from "react";
import { useState, useEffect } from "react";
import cardsData from "../cardsData.json";
import Card from "./Card";
import Score from "./Score";

const Board = () => {
  const [mixCards, setMixCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [prevCard, setPrevCard] = useState();
  const [lockBoard, setLockBoard] = useState(false);
  const [score, setScore] = useState(0);
  const [intentos, setIntentos] = useState(0);

  useEffect(() => {
    // Mezclar las cartas al cargar el componente
    setMixCards(
      cardsData
        .map((card) => ({ ...card, isFlipped: false }))
        .sort(() => Math.random() - 0.5)
    );
  }, []);

  const validateCards = (currentCard) => {
    // Si la carta ya esta volteada no se hace nada
    if (flippedCards.includes(currentCard.id) || lockBoard) {
      return;
    }

    // volteamos la carta actual
    setFlippedCards((state) => [...state, currentCard.id]);

    if (!prevCard) {
      // si no hay carta anterior, guardamos la carta actual
      setPrevCard(currentCard);
    } else {
      // si exite la carta previa, verificamos is coincide con la atual
      setLockBoard(true);
      if (prevCard.match === currentCard.match) {
        // Hubo match
        setPrevCard();
        setLockBoard(false);

        if (intentos < 3) {
          setScore(score + 10);
        } else if (intentos < 5) {
          setScore(score + 5);
        } else {
          setScore(score + 1);
        }
      } else {
        // no hubo match revertimo las cartas
        setTimeout(() => {
          setFlippedCards((prev) =>
            prev.filter((id) => id != prevCard.id && id != currentCard.id)
          );
          setPrevCard();
          setLockBoard(false);
          setIntentos(intentos + 1);
        }, 600);
      }
    }
  };

  return (
    <div className="flex flex-col items-center bg-stone-300/75 p-6 rounded-2xl ">
      <Score 
      score={score} 
      intentos={intentos} 
      />

      <div className="grid grid-cols-4 grid-rows-4 gap-x-25 gap-y-10 place-items-center h-full w-full ">
        {mixCards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              validateCards={validateCards}
              isFlippled={flippedCards.includes(card.id)}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Board;
