import React from "react";

const cardData = [
  {
    title: "Ensure education for every poor child",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.OlU32nYwqmxKRr9GwIiImQHaEz&pid=Api&P=0&h=180",
    raised: 20000,
    goal: 30000,
    progress: 70,
  },
  {
    title: "Supply drinking water for people",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.FUtgWdhLKru8kwKTRd6xtQHaEK&pid=Api&P=0&h=180",
    raised: 20000,
    goal: 30000,
    progress: 50,
  },
  {
    title: "Providing healthy food for children",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.hoj5PPPmGN6qfYpCB2BhcQHaE8&pid=Api&P=0&h=180",
    raised: 20000,
    goal: 30000,
    progress: 25,
  },
  {
    title: "Ensure education for every poor child",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.OlU32nYwqmxKRr9GwIiImQHaEz&pid=Api&P=0&h=180",
    raised: 20000,
    goal: 30000,
    progress: 70,
  },
  {
    title: "Supply drinking water for people",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.FUtgWdhLKru8kwKTRd6xtQHaEK&pid=Api&P=0&h=180",
    raised: 20000,
    goal: 30000,
    progress: 50,
  },
  {
    title: "Providing healthy food for children",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.hoj5PPPmGN6qfYpCB2BhcQHaE8&pid=Api&P=0&h=180",
    raised: 20000,
    goal: 30000,
    progress: 25,
  },
];

const Task = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 max-w-xs mx-auto"
        >
          <img
            src={card.image}
            className="h-52 w-72 object-cover rounded-md mx-auto"
            alt={card.title}
          />
          <p className="mt-4 font-bold text-2xl text-blue-950 text-center break-words">
            {card.title}
          </p>

          <div className="w-full px-4 py-6">
            <div className="relative w-full h-4 bg-gray-100 rounded-full">
              <div
                className="h-full bg-green-400 rounded-full"
                style={{ width: `${card.progress}%` }}
              ></div>
              <span className="absolute left-1/2 top-[-24px] transform -translate-x-1/2 text-green-600 font-semibold">
                {card.progress}%
              </span>
            </div>
          </div>

          <div className="flex justify-between mt-2 text-lg text-blue-950 font-semibold">
            <p>Raised: ${card.raised.toLocaleString()}</p>
            <p>Goal: ${card.goal.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
