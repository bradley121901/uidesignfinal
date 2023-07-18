import { Link } from 'react-router-dom';
export default function Profile() {
  return (
    <div class="home">
      <div>
        <span>
          <img src="/uidesignfinal/goodwill.png" class="profile-logo" alt=" " />{' '}
          <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
          <h1>
            Will Hunting{' '}
            <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
          </h1>
          <img src="/uidesignfinal/ig.png" class="social-logo" alt=" " />
          <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
          <img src="/uidesignfinal/fb.png" class="social-logo" alt=" " />
          <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
          <img src="/uidesignfinal/twitter.png" class="social-logo" alt=" " />
          <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
        </span>
      </div>
      <p>
        full time golfer part time analyst{' '}
        <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
      </p>
      <div class="row">
        <div class="col">
          <img src="/uidesignfinal/golf.png" class="homegolf" alt=" " />
          first time at the new course
          <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
        </div>

        <div class="col">
          <img src="/uidesignfinal/dog.png" class="dog" alt=" " />
          <p>
            great to see my buddy again! just look at that smile
            <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
          </p>
        </div>

        <div class="col ">
          <Link to="/profile">
            <button class="imagebtn" type="submit">
              <img src="/uidesignfinal/edit.png" alt="bug" height={100} />
            </button>
          </Link>
        </div>
      </div>
      <div>
        <br></br>
        <h1>
          About <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
        </h1>
        <p>
          When I'm not crunching numbers or perfecting my golf game, you'll find
          me sharing my adventures, thoughts, and insights on both topics here
          on social media. From the highs and lows on the golf course to the
          excitement and risks of the financial world, I love sharing my
          experiences with all of you. 📲💬 So, if you're into golfing or
          interested in finance, hit that follow button and join me on this
          amazing journey! Let's tee off together, both on the course and in the
          financial markets! 🚀🏌️‍♂️💰 #GolfingPassion #FinanceEnthusiast
          #SwingAndWin #InvestorLife #GolfAndFinance #JoinMyJourney
        </p>
      </div>

      <div>
        <h1>
          Wants to learn more about{' '}
          <img src="/uidesignfinal/edit.png" class="edit" alt=" " />
        </h1>
        <p>
          Have any golf pages or events you think I shouldn't miss? Drop your
          recommendations in the comments below! Let's make this a collaborative
          journey to enhance our love for the game! 🤝💚 Here's to teeing off on
          new adventures, meeting amazing people, and making memories that last
          a lifetime! 🎉⛳️
        </p>
      </div>
      <br></br>
      <span>
        <Link to="/uidesignfinal">
          <button class="ntb findbtn" type="submit">
            Return
          </button>
        </Link>
      </span>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
