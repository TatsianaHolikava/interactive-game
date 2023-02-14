import React from "react";

const finals = [
  {
    id: 1,
    title: "Jasmine",
    content:
      "Jasmine is incredibly independent and strong. She isn’t afraid to speak her mind, no matter who she’s up against, and won’t hesitate to stand up for what’s right. She is extremely compassionate and caring towards her kingdom, her family, and her friends. She knows that she shouldn’t let anyone else decide her future, and in her adventure to self-discovery, breaks out of her comfort zone to find a whole new world just outside the palace walls.",
    image: "https://i.ytimg.com/vi/Ud3Y8nN-qjU/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Cinderella",
    content:
      "Cinderella is incredibly hardworking and kind-hearted. She has a strong sense of empathy and always sees the best in people, even when they don't deserve it. She is patient and persevering in the face of adversity, and never gives up hope. In her journey to self-discovery, she learns to believe in herself and her dreams, and finds true love and happiness along the way.",
    image: "https://i.ytimg.com/vi/Ud3Y8nN-qjU/maxresdefault.jpg",
  },
];

const FinalPage = ({ stepId, optionId }) => {
  function calculateResult(stepId, optionId) {
    if (stepId === 1 && optionId === 3) {
      return finals[1].title; // Cinderella
    } else if (stepId === 1 && optionId === 4) {
      return finals[0].title; // Jasmine
    } else {
      return "Unknown";
    }
  }

  const result = calculateResult(stepId, optionId);

  return (
    <div>
      <h1>You are {result}!</h1>
      <img
        src={finals[result === "Cinderella" ? 1 : 0].image}
        alt={result}
        style={{ width: "600px", height: "250px" }}
      />
      <div style={{ width: "600px", marginTop: "20px" }}>
        <h5>{finals[result === "Cinderella" ? 1 : 0].content}</h5>
      </div>
    </div>
  );
};

export default FinalPage;



