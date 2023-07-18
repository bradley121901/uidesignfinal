import { Link } from 'react-router-dom';
export default function Find() {
  return (
    <div class="home">
      <div>
        <br></br>
        <span>
          <h1>
            <img
              src="/uidesignfinal/person4.png"
              class="profile-logo"
              alt=" "
            />
            &nbsp; Nicole Hortons
            <img src="/uidesignfinal/ig.png" class="social-logo" alt=" " />
            <img src="/uidesignfinal/fb.png" class="social-logo" alt=" " />
            <img src="/uidesignfinal/twitter.png" class="social-logo" alt=" " />
          </h1>
        </span>
      </div>
      <p>live laugh love cake</p>
      <br></br>

      <div class="row">
        <div class="col">
          special thanks to Tod for driving
          <img src="/uidesignfinal/findphoto.png" class="findtravel" alt=" " />
        </div>

        <div class="col">
          <img src="/uidesignfinal/clover.png" class="clover" alt=" " />
          <p>feeling lucky today!</p>
        </div>

        <div class="col ">
          new receipe!!!
          <img src="/uidesignfinal/dessert.png" class="dessert" alt=" " />
        </div>
      </div>
      <br></br>
      <div>
        <h1>About</h1>
        <p>
          👋 Hey there, everyone! I'm Nick Hortons, and I'm stoked to be joining
          this incredible social media community! 🌟 Let me share a little bit
          about myself: 🎙️ I'm a passionate storyteller and content creator, and
          I live for capturing life's magical moments through words, images, and
          videos. 📸📝 My mission is to inspire, entertain, and bring a smile to
          your face through my content. 🌍 Travel and exploration fuel my soul!
          ✈️🗺️ Whether it's hiking through breathtaking landscapes, diving into
          different cultures, or savoring delicious cuisines, I'm always up for
          an adventure!
        </p>
      </div>
      <br></br>
      <div>
        <h1>Mutuals</h1>
        <img
          src="/uidesignfinal/person1.png"
          class="profile-logo"
          alt=" "
        />{' '}
        <img src="/uidesignfinal/goodwill.png" class="profile-logo" alt=" " />{' '}
        <img src="/uidesignfinal/person2.png" class="profile-logo" alt=" " />{' '}
        <img src="/uidesignfinal/person3.png" class="profile-logo" alt=" " />{' '}
      </div>
      <br></br>

      <div>
        <h1>Wants to learn more about</h1>
        <p>
          Hey, lovelies! 🌸 As I navigate this vibrant social media community, I
          can't help but feel excited about all the incredible things I can
          learn here! 🤩 Here's my learning wish list
          <p> </p>
          🎨 Creative Expression: I'd love to immerse myself in the world of art
          and creativity! 🎨 From painting and sketching to digital art and
          graphic design, I'm eager to learn new techniques and let my
          imagination run wild!
          <p> </p> 📷 Photography Magic: Capturing moments that speak a thousand
          words is a skill I admire! 📸 I'm eager to enhance my photography
          skills, learn about different styles, and explore the art of
          storytelling through images.
        </p>
      </div>
      <br></br>
      <span>
        <Link to="/chat">
          <button class="ntb" type="submit">
            Chat
          </button>
        </Link>
      </span>
      <span>
        <Link to="/find">
          <button class="nextbtn" type="submit">
            Next
          </button>
        </Link>
      </span>
    </div>
  );
}
