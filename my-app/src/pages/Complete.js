import { Link } from 'react-router-dom';
export default function Complete() {
  return (
    <div class="complete">
      <br></br>
      <br></br>
      <h1>Complete your Profile</h1>
      <br></br>
      <br></br>
      <br></br>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">
          Upload Picture:
          <button class="ntb">
            <img
              src="/uidesignfinal/complete.png"
              class="completebtn"
              alt=" "
            />
          </button>
        </label>
      </div>
      <br></br>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-3 col-form-label">
          Name:
        </label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="staticEmail"></input>
        </div>
      </div>
      <br></br>
      <div class="form-group row">
        <label for="staticComment" class="col-sm-6 col-form-label">
          Provide a caption:
        </label>

        <div class="col-sm-10">
          <input
            type="text"
            id="staticComment"
            placeholder=""
            class="comment"
          ></input>
        </div>
      </div>
      <br></br>
      <br></br>
      <div class="form-group row">
        <label for="staticComment" class="col-sm-6 col-form-label">
          About:
        </label>

        <div class="col-sm-10">
          <input
            type="text"
            id="staticComment"
            placeholder=""
            class="comment"
          ></input>
        </div>
      </div>
      <br></br>
      <br></br>
      <div class="form-group row">
        <label for="staticComment" class="col-sm-6 col-form-label">
          Wants to learn about:
        </label>

        <div class="col-sm-10">
          <input
            type="text"
            id="staticComment"
            placeholder=""
            class="comment"
          ></input>
        </div>
      </div>
      <br></br>
      <br></br>
      <span>
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        <Link to="/confirm">
          <button class="ntb" type="submit">
            Create
          </button>
        </Link>
      </span>

      <br></br>
      <br></br>
    </div>
  );
}
