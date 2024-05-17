import { useState, useEffect } from "react";
import { deckStructure } from "../types";

export function useDeksLocalStorage(initialDeck: deckStructure) {
  const [deck1, setDeck1] = useState<deckStructure>(initialDeck);
  const [deck2, setDeck2] = useState<deckStructure>([]);
  const [deck3, setDeck3] = useState<deckStructure>([]);

  useEffect(() => {
    const savedDeck1 = localStorage.getItem("deck1");
    if (savedDeck1) {
      setDeck1(JSON.parse(savedDeck1));
    }

    const savedDeck2 = localStorage.getItem("deck2");
    if (savedDeck2) {
      setDeck2(JSON.parse(savedDeck2));
    }

    const savedDeck3 = localStorage.getItem("deck3");
    if (savedDeck3) {
      setDeck3(JSON.parse(savedDeck3));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("deck1", JSON.stringify(deck1));
  }, [deck1]);

  useEffect(() => {
    localStorage.setItem("deck2", JSON.stringify(deck2));
  }, [deck2]);

  useEffect(() => {
    localStorage.setItem("deck3", JSON.stringify(deck3));
  }, [deck3]);

  return{
    deck1, setDeck1,
    deck2, setDeck2,
    deck3, setDeck3,
  }
}
