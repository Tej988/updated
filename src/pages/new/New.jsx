import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {


  // new code 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pswd, setPswd] = useState("")


  const handle = () => {
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("password", pswd)
  }
  //end


  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">



            <form >
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <br />


                 <input type="name" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} /> 

                <input type="email" placeholder="Email or Phone number" onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder="Enter your password" onChange={(e) => setPswd(e.target.value)} />


                <button onClick={handle} >Click Me</button>
                <div>
                  <div>{localStorage.getItem("name")}</div> <br/>
                  <div>{localStorage.getItem("email")}</div><br/>
                  <div>{localStorage.getItem("password")}</div>

                </div> 

                {/* <input type="name" placeholder="Enter your Name" name="data[name]" />

                <input type="email" placeholder="Email or Phone number" name="data[email]" />

                <input type="password" placeholder="Enter your password" name="data[password]" /> */}

              </div>



              {/* <button>Send To</button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
