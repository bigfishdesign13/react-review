import React, { useEffect, useState, useRef } from "react";
import styles from "./Chatbot.module.css";

const responses = ["Hi, how's it going!", "Hey, how are ya!", "Yo!"];

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function App() {
  const [messageList, setMessageList] = useState([]);
  const inputRef = useRef(null);
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

  const onSubmit = (e) => {
    e.preventDefault();

    const prompt = inputRef.current.value;
    prompt ? processPrompt(prompt) : inputRef.current.focus();
  };

  const onClickBuy = (e) => {
    const itemIndex = e.target.dataset.index;
    const newInventory = [...inventoryItems];
    newInventory[itemIndex]["qty"] > 0 && newInventory[itemIndex]["qty"]--;
    setInventoryItems(newInventory);
  };

  const processPrompt = (prompt) => {
    const newList = [...messageList];
    newList.push({ isText: true, isUser: true, content: prompt });

    if (prompt.toLowerCase().includes("hello")) {
      const i = getRandomArbitrary(0, responses.length - 1);
      newList.push({ isText: true, isUser: false, content: responses[i] });
    } else if (prompt.toLowerCase().includes("show")) {
      newList.push({
        isText: false,
        isUser: false,
      });
    }
    inputRef.current.value = "";
    setMessageList(newList);
  };

  const InventoryItem = (props) => {
    const { name, desc, qty, index } = props;
    return (
      <li className={styles.inventoryItem}>
        <div className={styles.text}>
          <div className={styles.name}>{name}</div>
          <div className={styles.desc}>{desc}</div>
          <div className={styles.desc}>Qty: {qty}</div>
        </div>
        <button
          className={styles.btn}
          data-index={index}
          onClick={onClickBuy}
          type="text"
        >
          BUY
        </button>
      </li>
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

  useEffect(() => {
    const theReadout = document.getElementById("readout");
    theReadout.scrollTop = theReadout.scrollHeight;
  }, [messageList]);

  return (
    <div className={styles.containerStyles}>
      <div
        style={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <ul id="readout" className={styles.readoutContainerStyles}>
          {messageList.map((message, i) => {
            const finalChatRowStyles = message.isUser
              ? `${styles.chatRowStyles} ${styles.chatRowUserStyles}`
              : styles.chatRowStyles;
            return (
              <li key={i} className={finalChatRowStyles}>
                <div className={styles.chatContainerStyles}>
                  {message.isText ? (
                    <div className={styles.chatTextStyles}>
                      {message.content}
                    </div>
                  ) : (
                    <ul className={styles.inventoryItemsList}>
                      {inventoryElements}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <form className={styles.inputContainerStyles} onSubmit={onSubmit}>
        <input
          autoFocus
          type="text"
          ref={inputRef}
          style={{ backgroundColor: "#191919", paddingLeft: "8px" }}
        />
        <button style={{ cursor: "pointer" }} type="submit">
          click me!
        </button>
      </form>
    </div>
  );
}

export default App;
