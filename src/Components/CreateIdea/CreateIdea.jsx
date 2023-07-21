import React, { useState } from "react";
import "./CreateIdea.css";
import TextBox from "../TextBox/TextBox";
import DataContext from "../../Data/DataContext";
import { useContext } from "react";
import AnimatedMulti from "../CuzDrop/DropDown";
import axios from "axios";
import errors from "validators/lib/errors";

const CreateIdea = ({ setToggle }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const {
    title,
    setTitle,
    summary,
    setSummary,
    discription,
    setDescription,
    contributors,
    setContributors,
    auth,
  } = useContext(DataContext);
  // const [ideastatus,setideastatus]=useState("")

  function create() {
    // axios.post
    console.log(title,summary, discription,contributors);
    axios.post("https://localhost:7265/api/Idea",{
      title:title,
      short_Description:summary,
      long_Description:discription,
      status:"New Idea",
      idOfOwner:auth.id,
      idOfContributors:[0]

    }).then((response)=>{
      setToggle(false)
        axios.get("https://localhost:7265/mail/all").then(()=>{
          }).catch((errors)=>{
            console.log(errors);
          })
      console.log(response.data);
    }).catch((errors)=>{
      console.log(errors);
    })
    console.log(contributors);
  }

  return (
    <div className="create-idea-main overlay">
      <div className="create-idea-form">
        <div className="create-idea-owner">
          <div className="profile"></div>
          <h2>User Name</h2>
          <div className="cancel" onClick={() => setToggle(false)}>
            X
          </div>
        </div>
        <div className="create-idea-title">
          <form action="">
            <label htmlFor="Name">Enter Title</label>
            <input
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
        </div>
        <div className="multiselect-container">
          <label>Add Contri</label>
          <AnimatedMulti setContributors={setContributors} />
        </div>
        <div className="create-idea-summary">
          <label htmlFor="Name">Enter Summary</label>
          <TextBox
            mxhight={80}
            mihight={80}
            holder={"Type a summary..."}
            value={summary}
            setValue={setSummary}
          />
        </div>
        <div className="create-idea-summary">
          <label htmlFor="Name">Description</label>
          <TextBox
            mxhight={150}
            mihight={150}
            holder={"Enter your description here ..."}
            value={discription}
            setValue={setDescription}
          />
        </div>
        <div className="submit-idea">
          {" "}
          <div className="SUBMIT" onClick={create}>
            Create
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreateIdea;
