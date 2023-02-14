import { useState } from "react";
import MainPage from "./MainPage";
import Button from "react-bootstrap/Button";
import FinalPage from "./FinalPage";

function App() {
  const [currentStep, setCurrentStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "My favourite weekend activity is:",
      type: "textAnswers",

      image:
        "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/09/13161633/Tiana-Belle-Reading-Disney-Princess-Beyond-the-Tiara.jpg",
      options: [
        { id: 1, title: "Cooking" },
        { id: 2, title: "Alone time" },
        { id: 3, title: "Curling up with a book" },
        { id: 4, title: "Hanging with friends" },
      ],
    },
    {
      id: 2,
      title: "Which of these outfit elements are you most likely to wear?",
      type: "textAnswers",

      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-celebs-dressed-as-disney-princesses-1605909291.jpg",
      options: [
        { id: 1, title: "Sportwear" },
        { id: 2, title: "Dresses and heels" },
        { id: 3, title: "Sweaters and skirt" },
        { id: 4, title: "Jeans and sweatshirt" },
      ],
    },
    {
      id: 3,
      title: "The most important quality I look for in a prince is:",
      type: "textAnswers",
      content: "",
      image:
        "https://i.ytimg.com/vi/JkiVveAC798/maxresdefault.jpg",
      options: [
        { id: 1, title: "Personality" },
        { id: 2, title: "Wealth" },
        { id: 3, title: "Charm" },
        { id: 4, title: "Kindness" },
      ],
    },
    {
      id: 4,
      title: "My favorite hair style is:",
      type: "textAnswers",
      content: "",
      image:
        "https://www.kennythepirate.com/wp-content/uploads/2022/09/New-Rapunzel-attraction-and-exciting-updates-for-this-Disney-Park.jpeg",
      options: [
        { id: 1, title: "A stylish bob" },
        { id: 2, title: "A high ponytail" },
        { id: 3, title: "Long, really long hair" },
        { id: 4, title: "Practical" },
      ],
    },
    {
      id: 5,
      title: "The animal who will lead my (inevitable) royal parade is:",
      type: "textAnswers",
      content: "",
      image:
        "https://www.peta.org/wp-content/uploads/2019/04/Pocahontas-with-Raccoon-and-Hummingbird.png",
      options: [
        { id: 1, title: "A racoon" },
        { id: 2, title: "A tiger" },
        { id: 3, title: "A dragon" },
        { id: 4, title: "A chameleon" },
      ],
    },
  ];

  const optionClick = (option, stepId) => {
    console.log(option, stepId);
    setCurrentStep(stepId + 1);
  };

  const startTest = () => {
    setCurrentStep(1);
  };

  return (
    <div
      style={{ display: "flex", textAlign: "center", justifyContent: "center" }}
    >
      {currentStep === null && <MainPage startTest={startTest} />}

      {steps.map((step) => (
        <div key={step.id}>
          {step.id === currentStep && (
            <div>
              <div>
                <img
                  src={step.image}
                  alt="stepImage"
                  style={{ width: "500px", height: "250px" }}
                />
              </div>
              <div  style={{width: '500px', marginTop:'10px', marginBottom: '20px'}}>
              <h3>{step.id}. {step.title}</h3>
            
              </div>
             

              {step.type === "textAnswers" && (
                <div>
                  {step.options.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => optionClick(option, step.id)}
                    >
                      <div
                        style={{
                          width: "300px",
                          display: "flex",
                          alignItems: "left",
                          justifyContent: "left",
                        }}
                      >
                        <div className="d-grid gap-2">
                          <Button
                            variant="outline-dark"
                            size="sm"
                            style={{ margin: "5px", textAlign: "left",width: "300px" }}
                          >
                            <h5>
                              {option.id}. {option.title}
                            </h5>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>
      ))}
      {currentStep === 6 && <FinalPage />}
    </div>
  );
}

export default App;
