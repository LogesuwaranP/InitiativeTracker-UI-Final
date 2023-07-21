import axios from "axios";
import React, {
  useState,
  createContext,
  useEffect,
  useLayoutEffect,
} from "react";
import IdeaCard from "../Components/Card/IdeaCard";
import { useNavigate } from "react-router-dom";
import errors from "validators/lib/errors";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({});
  const [list, setList] = useState([]);
  const [column1Items, setColumn1Items] = useState([]);
  const [column2Items, setColumn2Items] = useState([]);
  const [column3Items, setColumn3Items] = useState([]);
  const [column4Items, setColumn4Items] = useState([]);
  const [column5Items, setColumn5Items] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toggle, setToggle] = useState(true);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [discription, setDescription] = useState("");
  const [contributors, setContributors] = useState([]);
  const [data, setData] = useState({});
  const [commonText, setCommonText] = useState("");
  const [ideastatus, setideastatus] = useState("");

  function checkValues() {
    // console.log("Values checking from context");
    // console.log("user signup==="+"email:"+email+"-userName:"+userName+"-password"+password+"-confirmPassword"+confirmPassword)
    console.log(column1Items);
  }

  useLayoutEffect(() => {
    if (sessionStorage.getItem("auth")) {
      setAuth(JSON.parse(sessionStorage.getItem("auth")));
      navigate("/");
    } else {
      setAuth({});
      navigate("/login");
    }
  }, []);

  function authMiddleware() {
    if (sessionStorage.getItem("auth")) {
      setAuth(JSON.parse(sessionStorage.getItem("auth")));
    } else {
      setAuth({});
      navigate("/login");
    }
  }

  function authUser() {
    axios
      .post("https://localhost:7265/auth", {
        email: email,
        password: password,
      })
      .then((response) => {
        setAuth(response.data);
        sessionStorage.setItem("auth", JSON.stringify(response.data));
        if (response.data) {
          navigate("/");
        }
      })
      .catch((errors) => {
        alert(errors.response.data);
      });
  }

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
    setColumn1Items(array);
  }

  function asign2(data) {
    var array = [];
    data.map((item) => {
      array.push(
        <IdeaCard id={item.id} title={item.title} status={item.status} />
      );
      return 1;
    });
    setColumn2Items(array);
  }

  useEffect(() => {
    axios
      .get("https://localhost:7265/api/Idea/newidea")
      .then((response) => {
        asign1(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });

    axios.get("https://localhost:7265/api/Idea/todo").then((response) => {
      // console.log(response.data);
      asign2(response.data);
    });
  }, []);
  return (
    <DataContext.Provider
      value={{
        auth,
        setAuth,
        list,
        setList,
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
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        checkValues,
        authMiddleware,
        toggle,
        setToggle,
        authUser,
        title,
        setTitle,
        summary,
        setSummary,
        discription,
        setDescription,
        contributors,
        setContributors,
        data,
        setData,
        commonText,
        setCommonText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
