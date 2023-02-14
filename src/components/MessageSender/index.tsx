import classes from "./index.module.css";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import VideoCamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string>("");

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    //some db actions

    setInput("");
    setImage("");
  }

  return (
    <>
      <div className={classes.messageSender}>
        <div className={classes.messageSender__top}>
          <Avatar />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={classes.messageSender__input}
              type={"text"}
              placeholder={"Whats On Your Mind..."}
            />
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder={"Image URL (Optional)"}
            />
            <button onClick={handleSubmit} type={"submit"}>
              Hidden Submit
            </button>
          </form>
        </div>
        <div className={classes.messageSender__bottom}>
          <div className={classes.messageSender__option}>
            <VideoCamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
          <div className={classes.messageSender__option}>
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
          <div className={classes.messageSender__option}>
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageSender;
