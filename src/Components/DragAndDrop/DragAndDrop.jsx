import React, { useState, useContext, useLayoutEffect, useEffect } from "react";
import "./DragAndDrop.css";
import IdeaCard from "../Card/IdeaCard";
import DataContext from "../../Data/DataContext";
import CreateIdea from "../CreateIdea/CreateIdea";
import axios from "axios";


const DragAndDrop = () => {
  const { authMiddleware, auth, checkValues } = useContext(DataContext);
  // console.log(auth);
  useLayoutEffect(() => {
    authMiddleware();
    setNewAuth(JSON.parse(sessionStorage.getItem("auth")));
  }, []);

  const[newAuth, setNewAuth] = useState("");
  const [toggle, setToggle] = useState(false);
  const [draggingItem, setDraggingItem] = useState(null);
  const {
    column1Items,
    setColumn1Items,
    column2Items,
    setColumn2Items,
    column3Items,
    setColumn3Items,
    column4Items,
    setColumn4Items,
    column5Items,
    setColumn5Items,
  } = useContext(DataContext);

  function asign1(data) {
    var array = [];
    data.map((item) => {
      array.push(
        <IdeaCard
          id={item.id}
          title={item.title}
          status={item.status}
          like={item.like}
          name={item.name}
          
        />
      );
      return 1;
    });
    // console.log(data, "IN Review");
    setColumn3Items(array);
  }

  function asign2(data) {
    var array = [];
    data.map((item) => {
      array.push(
        <IdeaCard
          id={item.id}
          title={item.title}
          status={item.status}
          like={item.like}
          name={item.name}
        />
      );
      return 1;
    });
    // console.log(data, "IN review");
    setColumn4Items(array);
  }

  function asign3(data) {
    var array = [];
    data.map((item) => {
      array.push(
        <IdeaCard
          id={item.id}
          title={item.title}
          status={item.status}
          like={item.like}
          name={item.name}
        />
      );
      return 1;
    });
    // console.log(data, "IN review");
    setColumn5Items(array);
  }

  useEffect(() => {
    axios.get("https://localhost:7265/api/Idea/inprogess").then((response) => {
      asign1(response.data);
    });

    axios.get("https://localhost:7265/api/Idea/inreview").then((response) => {
      // console.log(response.data);
      asign2(response.data);
    });

    axios.get("https://localhost:7265/api/Idea/done").then((response) => {
      // console.log(response.data);
      asign3(response.data);
    });
  }, []);

  const handleDragStart = (e, item, column) => {
    setDraggingItem({ item, column });
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    

    if (draggingItem.column === targetColumn) return;
    if (targetColumn === "Done") return;
    if (targetColumn === "New Idea") return;

    console.log();

    if (draggingItem) {
      switch (targetColumn) {
        case "New Idea": {
          axios
            .put("https://localhost:7265/api/Idea/update/id", {
              id: draggingItem.item.props.id,
              status: "New Idea",
            })
            .then((response) =>
              setColumn1Items([...column1Items, draggingItem.item])
            );

          break;
        }

        case "To Do": {
          axios
            .put("https://localhost:7265/api/Idea/update/id", {
              id: draggingItem.item.props.id,
              status: "To Do",
            })
            .then((response) =>
              setColumn2Items([...column2Items, draggingItem.item])
            );
          break;
        }

        case "In Progress": {
          axios
            .put("https://localhost:7265/api/Idea/update/id", {
              id: draggingItem.item.props.id,
              status: "In Progress",
            })
            .then((response) =>
              setColumn3Items([...column3Items, draggingItem.item])
            );
          break;
        }

        case "In Review": {
          setColumn4Items([...column4Items, draggingItem.item]);
          axios
            .put("https://localhost:7265/api/Idea/update/id", {
              id: draggingItem.item.props.id,
              status: "In Review",
            })
            .then((response) => console.log(response));
          break;
        }

        case "Done": {
          setColumn5Items([...column5Items, draggingItem.item]);
          axios
            .put("https://localhost:7265/api/Idea/update/id", {
              id: draggingItem.item.props.id,
              status: "Done",
            })
            .then((response) => console.log(response));
          break;
        }

        default:
          break;
      }

      if (targetColumn !== draggingItem.column) {
        switch (draggingItem.column) {
          case "New Idea":
            setColumn1Items(
              column1Items.filter((item) => item !== draggingItem.item)
            );
            break;

          case "To Do":
            setColumn2Items(
              column2Items.filter((item) => item !== draggingItem.item)
            );
            break;

          case "In Progress":
            setColumn3Items(
              column3Items.filter((item) => item !== draggingItem.item)
            );
            break;

          case "In Review":
            setColumn4Items(
              column4Items.filter((item) => item !== draggingItem.item)
            );
            break;

          case "Done":
            setColumn5Items(
              column5Items.filter((item) => item !== draggingItem.item)
            );
            break;

          default:
            break;
        }
      }
    }
  };

  return (
    <div className="scrolling-wrapper-flexbox">
      {toggle ? (
        <CreateIdea setToggle={setToggle} />
      ) : (
        <div
          className="btn-create"
          onClick={() => {
            setToggle(true);
          }}
        >
          +
        </div>
      )}

      <div className="container" style={{ userSelect: "none" }}>
        <div
          className="main-column"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "New Idea")}
        >
          <h2 onClick={checkValues}>New Idea</h2>
          <div className="column">
            {column1Items.map((item, index) => (
              <div
                key={index}
                className="item"
                // draggable
                onDragStart={(e) => handleDragStart(e, item, "New Idea")}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          className="main-column"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "To Do")}
        >
          <h2>To Do</h2>
          <div className="column">
            {column2Items.map((item, index) => (
              <div
                key={index}
                className="item"
                draggable={
                  auth.role == "Admin" || item?.props?.name == auth.name
                    ? "true"
                    : "false"
                }
                onDragStart={(e) => handleDragStart(e, item, "To Do")}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          className="main-column"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "In Progress")}
        >
          <h2>In Progress</h2>
          <div className="column">
            {column3Items.map((item, index) => (
              <div
                key={index}
                className="item"
                draggable={
                  auth.role == "Admin" || item?.props?.name == auth.name
                    ? "true"
                    : "false"
                }
                // {authdraggable}
                onDragStart={(e) => handleDragStart(e, item, "In Progress")}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          className="main-column"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "In Review")}
        >
          <h2>In Review</h2>
          <div className="column">
            {column4Items.map((item, index) => (
              <div
                key={index}
                className="item"
                draggable={auth.role=="Admin"||item?.props?.name==auth.name?"true":"false"}

                // {authdraggable}
                onDragStart={(e) => handleDragStart(e, item, "In Review")}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          className="main-column"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "Done")}
        >
          <h2>Done</h2>
          <div className="column">
            {column5Items.map((item, index) => (
              <div
                key={index}
                className="item"
                // draggable
                onDragStart={(e) => handleDragStart(e, item, "Done")}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
