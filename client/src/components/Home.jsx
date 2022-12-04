import React, { useState } from "react";
import "../styles/home.css";
import petwelcomeimg from "./pet-welcome.svg";
import petlogo from "./pet-logo.svg";

import "../styles/adoptform.css";

import { ImCross } from "react-icons/im";
import "../styles/allpets.css";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  const [showAbortform, setShowAbortform] = useState(false);
  const [showGiveAwayform, setShowGiveAwayform] = useState(false);
  const [showAllPets, setShowAllPets] = useState(false);
  const [pets, setPets] = useState([]);
  const [pet_type, setPet_type] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pno, setPno] = useState(0);
  const [adname, setAdname] = useState("");
  const [ademail, setAdemail] = useState("");
  const [adpno, setAdpno] = useState(0);
  useEffect(() => {
    axios.get("/api/auth/allpets").then((data) => {
      // console.log(data);

      setPets(data.data);
      // debugger
    });
  }, []);
  console.log(pets);
  const giveawayHandler = () => {
    axios
      .post("/api/auth/giveaway", {
        pet_type: pet_type,
        breed: breed,
        username: name,
        email: email,
        phone_no: pno,
      })
      .then((response) => {
        alert("Yay! You are done with your giveaway post.");
        setPet_type("");
        setBreed("");
        setName("");
        setEmail("");
        setPno(0);
      });
  };
  const adoptionHandler = () => {
    if (adname !== "" && ademail !== "" && adpno !== 0) {
      alert("Yayy!Your adoption request has been sent successfully");
      setAdname("");
      setAdemail("");
      setAdpno(0);
    } else {
      alert("Please fill all the required fields.");
    }
  };
  const objectStyle = {
    marginLeft: "9px",
  };
  const objectStyleValid = {
    marginLeft: "0px",
  };
  return (
    <div className="home-bod">
      <div className="home-first">
        <div className="home-first-l">
          <h2>Welcome to the Animal Shelter !</h2>
          <p>
            Glad that you care for the animals so much. We make sure that you’ll
            not repent your decision of adopting your favorite pet !!
          </p>
          <div className="home-first-btns">
            <button
              onClick={() => {
                setShowAbortform(!showAbortform);
              }}
              className="btn1"
            >
              Adopt
            </button>
            {showAbortform && (
              <>
                {" "}
                <div className="adoptformbod">
                  <div className="first-line">
                    <h2>Adopt a pet</h2>
                    <ImCross
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowAbortform(!showAbortform);
                      }}
                    />
                  </div>
                  <h3>What pet do you want to adopt ?</h3>
                  <p>
                    Pet type<span style={{ color: "red" }}>*</span>
                  </p>
                  <select className="animals" name="animals">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                  </select>
                  <p>
                    Breed<span style={{ color: "red" }}>*</span>
                  </p>
                  <select className="animals" name="animals">
                    {/* <option value="dog">Lab</option>
                    <option value="cat">golden</option> */}
                    {pets.map((pet) => {
                      return <option value={pet.breed}>{pet.breed}</option>;
                    })}
                  </select>
                  <h3>What pet do you want to adopt ?</h3>
                  <p>
                    Full Name<span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="text"
                    className="animals"
                    onChange={(e) => {
                      setAdname(e.target.value);
                    }}
                    value={adname}
                  />
                  <p>
                    Email<span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="text"
                    className="animals"
                    onChange={(e) => {
                      setAdemail(e.target.value);
                    }}
                    value={ademail}
                  />
                  <p>
                    Phone No.<span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="number"
                    className="animals"
                    onChange={(e) => {
                      setAdpno(e.target.value);
                    }}
                    value={adpno}
                  />
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={adoptionHandler}
                    className="adoptbtn"
                  >
                    Request for Adoption
                  </button>
                </div>
              </>
            )}
            <button
              onClick={() => {
                setShowAllPets(!showAllPets);
              }}
              className="btn2"
            >
              What all pets do we have ?
            </button>
            {showAllPets && (
              <>
                <div className="all-pets">
                  <div className="first-line">
                    <h2>What all pets do we have ?</h2>
                    <ImCross
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowAllPets(!showAllPets);
                      }}
                    />
                  </div>
                  <div className="all-pets-heading">
                    <h3>Pet Type</h3>
                    <h3>Breed</h3>
                  </div>
                  <div className="all-pets-border"></div>
                  {pets.map((pet) => {
                    return (
                      <div className="all-pets-heading2">
                        <h3>{pet.pet_type}</h3>
                        <h3
                          style={
                            pet.pet_type === "Cat"
                              ? objectStyle
                              : objectStyleValid
                          }
                        >
                          {pet.breed}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="home-first-r">
          <img src={petwelcomeimg} alt="" />
        </div>
      </div>
      <div className="home-second">
        <h2>We do take in pets if you can’t take care of them !</h2>
        <p>
          For millions of shelter animals, getting adopted by someone is their
          only chance at life, which means that you are their best chance at
          experiencing happiness again. These animals end up in shelters due to
          unfortunate circumstances.
        </p>
        <button
          onClick={() => {
            setShowGiveAwayform(!showGiveAwayform);
          }}
          className="btn2"
          id="ga"
        >
          Give Away
        </button>
        {showGiveAwayform && (
          <>
            <div className="adoptformbod2">
              <div className="first-line">
                <h2>Give Away</h2>
                <ImCross
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowGiveAwayform(!showGiveAwayform);
                  }}
                />
              </div>
              <h3>What pet do you want to give away ?</h3>
              <p>
                Pet type<span style={{ color: "red" }}>*</span>
              </p>
              <input
                type="text"
                className="animals"
                placeholder="Cat/Dog"
                onChange={(e) => {
                  setPet_type(e.target.value);
                }}
                value={pet_type}
              />
              <p>
                Breed<span style={{ color: "red" }}>*</span>
              </p>
              <input
                type="text"
                className="animals"
                placeholder="Breed of pet"
                onChange={(e) => {
                  setBreed(e.target.value);
                }}
                value={breed}
              />
              <h3>What pet do you want to adopt ?</h3>
              <p>
                Full Name<span style={{ color: "red" }}>*</span>
              </p>
              <input
                type="text"
                className="animals"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <p>
                Email<span style={{ color: "red" }}>*</span>
              </p>
              <input
                type="text"
                className="animals"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <p>
                Phone No.<span style={{ color: "red" }}>*</span>
              </p>
              <input
                type="number"
                className="animals"
                onChange={(e) => {
                  setPno(e.target.value);
                }}
                value={pno}
              />
              <button
                style={{ cursor: "pointer" }}
                onClick={giveawayHandler}
                className="adoptbtn"
              >
                Request for Give Away
              </button>
            </div>
          </>
        )}
      </div>
      <div className="home-third">
        <div className="home-third-f">
          <img src={petlogo} alt="" />
        </div>
        <div className="home-third-s">
          <p>
            There are many health benefits of owning a pet. They can increase
            opportunities to exercise, get outside, and socialize. Regular
            walking or playing with pets can decrease blood pressure,
            cholesterol levels, and triglyceride levels. Pets can help manage
            loneliness and depression by giving us companionship
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
