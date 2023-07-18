import { Link } from 'react-router-dom';
export default function Confirm() {
  return (
    <div class="confirm">
      <br></br>
      <br></br>
      <h1 class="middle">
        <img src="./uidesignfinal/logo.png" alt="bug" height={80} />
      </h1>
      <br></br>
      <br></br>
      <h2>Successful Registration! Start Chatting</h2>
      <br></br>
      <br></br>
      <br></br>
      <h class="middle bd">
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Quick
        Navigation Tips
      </h>
      <br></br>

      <h1 class="mid">
        <img src="./uidesignfinal/instructions.png" alt="bug" height={350} />
      </h1>
      <br></br>
      <p class="middlebtn">
        <Link to="/uidesignfinal">
          <button class="ntb" type="submit">
            Continue
          </button>
        </Link>
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
