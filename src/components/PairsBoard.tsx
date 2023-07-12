import { useState } from "react";
import { Card } from "../core/card";
import { CardBox } from "./CardBox";
import { prepareDeck } from "../core/deck";

export function PairsBoard() {
    const [cards, setCards] = useState(prepareDeck());
    function handleFlipCard(cardToFlip: Card) {
        const newCards = cards.map((c) =>
            c.id === cardToFlip.id
                ? { ...c, isFlipped: !c.isFlipped }
                : { ...c }
        );
        setCards(newCards);
    }

    return (
        <group>
            {cards.map((card) => (
                <CardBox card={card} key={card.id} flipCard={handleFlipCard} />
            ))}
        </group>
    );
}
