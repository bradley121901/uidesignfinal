import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div class="confirm">
      <br></br>
      <br></br>
      <h1 class="middle">
        About
        <img src="./uidesignfinal/logo.png" alt="bug" height={60} />
      </h1>
      <br></br>
      <br></br>
      <p>
        Welcome to ChatSpace, the next-generation social media platform designed
        to revolutionize the way people connect and interact online. Unlike
        previous platforms, ChatSpace goes beyond the standard features to
        provide a truly personalized and meaningful experience for its users.
      </p>

      <p>
        At ChatSpace, we understand the importance of self-expression and
        individuality. That's why we offer extensive profile customization
        options, allowing you to showcase your unique personality and interests.
        From customizable themes and layouts to personalized bio sections, your
        profile will truly reflect who you are.
      </p>
      <p>
        But ChatSpace is more than just a platform for self-expression; it's a
        powerful tool for forging meaningful connections. With our advanced chat
        matching customization, you can find like-minded individuals and form a
        network of people who are ready to support and help each other, no
        matter the type of assistance needed. Whether you're seeking advice,
        collaboration, or simply a friendly conversation, ChatSpace is here to
        facilitate those connections.
      </p>
      <p>
        We've drawn inspiration from some of the most popular social media
        platforms to create an intuitive and user-friendly interface. From the
        real-time updates and concise interactions reminiscent of Twitter, to
        the visually stunning feeds and image-sharing capabilities of Instagram,
        we've combined the best elements from various platforms to deliver an
        unparalleled social media experience.
      </p>
      <p>
        And it's not just for the younger generation - ChatSpace is designed to
        be accessible to users of all ages, regardless of their previous
        experience with social media. We believe that everyone should have the
        opportunity to connect and engage with others in a meaningful way.
      </p>
      <p>
        Join us at ChatSpace and unlock a world of possibilities. Connect,
        collaborate, and find the support you need, all within a vibrant and
        inclusive community. It's time to take your social media experience to
        the next level with ChatSpace.
      </p>
      <br></br>
      <span>
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <Link to="/login">
          <button class="ntb aboutbtn" type="submit">
            Login/Register Now
          </button>
        </Link>
      </span>
      <br></br>
    </div>
  );
}
