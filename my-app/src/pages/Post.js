import { Link } from 'react-router-dom';
export default function Post() {
  return (
    <div class="post">
      <br></br>
      <br></br>
      <span>
        <h2>
          Add to <img src="./uidesign/logo.png" alt="bug" height={50} />
        </h2>
      </span>

      <div class="row 10">
        <div class="col ">
          <textarea rows="8" cols="60" name="blog">
            Enter description
          </textarea>
        </div>
        <div class="col ">
          <Link to="/post">
            <button class="postbtn" type="submit">
              <img src="./uidesign/addimage.png" alt="bug" height={150} />
            </button>
          </Link>
        </div>
      </div>

      <br></br>
      <span>
        <Link to="/uidesign">
          <button class="ntb" type="submit">
            Return
          </button>
        </Link>
      </span>
      <span>
        <Link to="/uidesign">
          <button class="ntb findbtn" type="submit">
            Post
          </button>
        </Link>
      </span>
    </div>
  );
}
