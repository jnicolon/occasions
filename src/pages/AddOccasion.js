import React from "react";

//React hooks
import { useState, useEffect } from "react";

//Slides
import AddOccSlide1 from "../components/occasions/addOccasion/addOccSlide1";
import AddOccSlide2 from "../components/occasions/addOccasion/addOccSlide2";
import AddOccSlide3 from "../components/occasions/addOccasion/addOccSlide3";
import AddOccSlide4 from "../components/occasions/addOccasion/addOccSlide4";
import AddOccSlide5 from "../components/occasions/addOccasion/addOccSlide5";

//Functions
import isEmailValid from "../functions/isEmailValid";
import isDateInPast from "../functions/isDateInPast";

function AddOccasion() {
  const [slide, setSlide] = useState(1);
  const [error, setError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const [occasion, setOccasion] = useState("");
  const [occName, setOccName] = useState("");
  const [occDate, setOccDate] = useState("");
  const [occEmail, setOccEmail] = useState("");

  // const userId = useSelector((state) => state.firebase.auth.uid);

  // const firestore = useFirestore();

  const handleChange = (e) => {
    setError(false);
    switch (e.target.name) {
      case "occasion":
        setOccasion(e.target.value);
        break;
      case "occName":
        setOccName(e.target.value);
        break;
      case "date":
        setOccDate(e.target.value);
        break;
      case "email":
        setOccEmail(e.target.value);
        break;
      default:
        break;
    }
  };

  // const addOccasion = () => {
  //   const date = new Date(`${occDate} 00:00:00`);

  //   firestore
  //     .collection("occasions")
  //     .doc(userId)
  //     .collection("userOccasions")
  //     .add({
  //       occasion,
  //       occDate: date,
  //       occName,
  //       occEmail,
  //       occGift: false,
  //     })
  //     .then(console.log("occasion added to firestore"));
  // };

  useEffect(() => {
    setSlide(1);
  }, []);

  const nextSlide = (value) => {
    if (value.trim().length < 1) {
      setError(true);
      console.log("trim - trim");
    } else {
      setSlide((slide) => slide + 1);
      setError(false);
      console.log("click");
    }
  };

  const prevSlide = () => {
    setSlide((slide) => slide - 1);
  };

  const checkDate = () => {
    if (!occDate) {
      setError(true);
    } else {
      if (isDateInPast(occDate)) {
        setDateError(true);
      } else {
        setSlide((slide) => slide + 1);
      }
    }
  };

  const handleSubmit = (value) => {
    if (isEmailValid(value)) {
      setSlide((slide) => slide + 1);
      // addOccasion();
      console.log({ occasion, occDate, occEmail, occName });
    } else {
      setError(true);
    }
  };

  return (
    <div className="add-occ-main-container">
      <AddOccSlide1
        occasion={occasion}
        handleChange={handleChange}
        slide={slide}
        nextSlide={nextSlide}
        error={error}
      />
      <AddOccSlide2
        occName={occName}
        handleChange={handleChange}
        slide={slide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        error={error}
      />
      <AddOccSlide3
        dateError={dateError}
        occDate={occDate}
        handleChange={handleChange}
        slide={slide}
        prevSlide={prevSlide}
        error={error}
        checkDate={checkDate}
      />
      <AddOccSlide4
        occEmail={occEmail}
        handleChange={handleChange}
        slide={slide}
        prevSlide={prevSlide}
        handleSubmit={handleSubmit}
        error={error}
      />
      <AddOccSlide5 slide={slide} />
    </div>
  );
}

export default AddOccasion;
