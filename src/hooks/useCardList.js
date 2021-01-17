import { useState, useEffect } from "react";
import { useFirestore } from "react-redux-firebase";

const useCardList = () => {
  const [cards, setCards] = useState([]);
  const firestore = useFirestore();

  useEffect(() => {
    firestore
      .collection("cards")
      .get()
      .then((snap) => {
        let tempCards = [];
        snap.forEach((doc) => {
          tempCards.push({ ...doc.data(), cardId: doc.id });
        });
        setCards(tempCards);
      })
      .catch((err) => console.log(err));
  }, [firestore, setCards]);

  return cards;
};

export default useCardList;
