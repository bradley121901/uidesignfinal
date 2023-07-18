import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const navigate = useNavigate();
  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (userName.length == 0) {
      alert('Username can not be empty');
      navigate('/login');
      return;
    }
    if (passWord.length == 0) {
      alert('Password can not be empty');
      navigate('/login');
      return;
    }
    navigate('/uidesignfinal');
  }

  return (
    <div class="login">
      <br></br>
      <br></br>
      <h1>
        Welcome to
        <img src="./uidesignfinal/logo.png" alt="bug" height={57} />
      </h1>
      <br></br>
      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Username
        </label>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            id="staticEmail"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>

      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            id="staticEmail"
            onChange={(e) => setPassWord(e.target.value)}
          ></input>
        </div>
      </div>

      <br></br>
      <br></br>
      <p>
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Forgot username or
        password?
      </p>

      <br></br>
      <span>
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        <button
          class="ntb"
          type="submit"
          onClick={() => {
            validateForm();
          }}
        >
          LOGIN
        </button>
      </span>
      <br></br>
      <br></br>
      <p>
        <Link to="/register">
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; New here? Register
          now!
        </Link>
      </p>

      <br></br>
      <br></br>

      <div class="accordion language" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Change Language
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: 'grey',
                  marginLeft: '2em',
                }}
              >
                English
              </Link>
              <br></br>
              <br></br>
              <Link
                to="/loginf"
                style={{
                  textDecoration: 'none',
                  color: 'grey',
                  marginLeft: '2em',
                }}
              >
                Français
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
