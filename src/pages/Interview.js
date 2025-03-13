import React, { useEffect, useState, useRef } from "react";
import "./Interview.css";

// const inventoryItems = ;

const responses = ["Hi, how's it going!", "Hey, how are ya!", "Yo!"];

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function App() {
  // const [prompt, setPrompt] = useState("");
  const [inventoryItems, setInventoryItems] = useState([
    {
      name: "Toothbrush",
      desc: "Keeps your teeth clean",
      qty: 10,
    },
    {
      name: "Toothpaste",
      desc: "Goes well with a toothbrush",
      qty: 20,
    },
    {
      name: "Dental Floss",
      desc: "Mint-flavored!",
      qty: 5,
    },
  ]);
  const [messageList, setMessageList] = useState([]);
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    process();
  };

  const onClickBuy = (e) => {
    // e.preventDefault();
    const index = e.target.dataset.index;
    // setInventoryItems[1].qty(3);
    // setInventoryItems((inventoryItems) => ({
    //   ...inventoryItems, // Copy existing properties
    //   inventoryItems: (inventoryItems[1].qty = 3), // Update the specific property
    // }));
    // const updatedItems = inventoryItems.map((item, i) =>
    //   index === i ? { ...item, qty: 3 } : item
    // );
    inventoryItems[index].qty--;
    setInventoryItems(inventoryItems);

    // console.log(`BUY :: ${index}`);
    console.log(inventoryItems);
  };

  // useEffect(() => {
  //   process();
  // }, [inventoryItems]);

  const InventoryItem = (props) => {
    const { name, desc, qty, index } = props;
    return (
      <div>
        <div>{name}</div>
        <div>{desc}</div>
        <div>{qty}</div>
        <div>
          <button data-index={index} onClick={onClickBuy}>
            BUY
          </button>
        </div>
      </div>
    );
  };

  const inventoryElements = inventoryItems.map((item, i) => (
    <InventoryItem
      key={i}
      name={item.name}
      desc={item.desc}
      qty={item.qty}
      index={i}
    />
  ));

  const process = () => {
    const prompt = inputRef.current.value;

    const newList = [...messageList];
    newList.push({ type: "text", isUser: true, content: prompt });

    if (prompt.toLowerCase() === "hello") {
      const i = getRandomArbitrary(0, responses.length - 1);
      console.log(i);
      newList.push({ type: "text", isUser: false, content: responses[i] });
    } else if (prompt.toLowerCase().includes("show")) {
      newList.push({ type: "text", isUser: false, content: inventoryElements });
    }

    setMessageList(newList);
    inputRef.current.value = "";
  };

  useEffect(() => {
    const theReadout = document.getElementById("readout");
    theReadout.scrollTop = theReadout.scrollHeight;
  }, [messageList]);

  const containerStyles = {
    border: "1px solid #ccc",
    display: "grid",
    height: "640px",
    gridTemplateRows: "11fr 1fr",
    margin: "auto",
    maxWidth: "480px",
    width: "100%",
  };
  const readoutContainerStyles = {
    overflow: "auto",
    padding: "1rem",
  };
  const inputContainerStyles = {
    borderTop: "1px solid #ccc",
    display: "grid",
    gridTemplateColumns: "5fr 1fr",
  };

  const chatTextContainerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
  };
  const chatTextStyles = {
    animationDuration: "200ms",
    animationName: "chatText",
    animationTimingFunction: "ease-in",
    backgroundColor: "#292929",
    borderRadius: "4px",
    marginBottom: "8px",
    maxWidth: "60%",
    opacity: "1",
    padding: "8px",
    transform: "scale(1)",
    // width: "100%",
  };
  const userStyles = {
    fontWeight: "700",
    justifyContent: "end",
  };

  // useEffect(() => {
  //   console.log(`prompt === ${prompt}`);
  //   const newList = [...messageList];
  //   newList.push({ type: "text", user: true, content: prompt });

  //   let responseValue;
  //   if (prompt === "Hello") {
  //     newList.push({ type: "text", user: false, content: responses[0] });
  //   } else if (prompt === "Show inventory") {
  //     responseValue = "Show inventory";
  //   }

  //   setMessageList(newList);
  //   setPrompt("");

  //   console.log(`responseValue === ${responseValue}`);
  // }, [messageList, prompt]);

  return (
    <div style={containerStyles}>
      <div
        style={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <ul id="readout" style={readoutContainerStyles}>
          {messageList.map((message, i) => {
            const finalChatTextContainerStyles = message.isUser
              ? {
                  ...chatTextContainerStyles,
                  ...userStyles,
                }
              : chatTextContainerStyles;
            // const finalChatTextStyles = message.isUser
            //   ? {
            //       ...chatTextStyles,
            //       ...userStyles,
            //     }
            //   : chatTextStyles;
            return (
              <li key={i} style={finalChatTextContainerStyles}>
                <div style={chatTextStyles}>{message.content}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <form style={inputContainerStyles} onSubmit={onSubmit}>
        <input type="text" ref={inputRef} style={{ paddingLeft: "8px" }} />
        <button type="submit">click me!</button>
      </form>
    </div>
  );
}

export default App;
