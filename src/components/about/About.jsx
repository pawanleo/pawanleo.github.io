import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://source.unsplash.com/random/?web-development-animation"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I love applying responsive design principles and watching my web pages
          shrink into mobile screens and still look amazing .
        </p>
        <p className="a-desc">
          My specialties include quickly learning new skills and programming
          languages , problem solving , responsive design principles, website
          optimization, and Model View Controller(MVC) methods of organizing
          code. So far I have JavaScript, HTML, CSS, Bootstrap ,React,
          React-Redux and GitHub under my belt. I've started learning Node.JS,
          MongoDB, and Express.JS.
        </p>
      </div>
    </div>
  );
};

export default About;
