import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div class="register">
      <br></br>
      <br></br>
      <h1>
        Register your
        <img src="./uidesignfinal/logo.png" alt="bug" height={50} />
      </h1>
      <br></br>

      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">
          First Name:
        </label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="staticEmail"></input>
        </div>
      </div>

      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">
          Last Name:
        </label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="staticEmail"></input>
        </div>
      </div>

      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">
          Display ID:
        </label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="staticEmail"></input>
        </div>
      </div>

      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">
          Enter Username:
        </label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="staticEmail"></input>
        </div>
      </div>

      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">
          Create Password:
        </label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="staticEmail"></input>
        </div>
      </div>

      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">
          Birthday:
        </label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="staticEmail"></input>
        </div>
      </div>
      <br></br>
      <br></br>
      <span>
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        <Link to="/complete">
          <button class="ntb" type="submit">
            Register
          </button>
        </Link>
      </span>

      <br></br>
      <br></br>
    </div>
  );
}
