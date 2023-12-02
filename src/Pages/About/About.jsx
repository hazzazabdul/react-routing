
import Style from "./About.module.css";

const About = () => {
  return (
    <div className={Style.about__container}>
      <div className={Style.about__section}>
        <h2
          className={Style.about__heading}
        >
          Our Team
        </h2>
        <div className={Style.row}>
          <div className={Style.column}>
            <div className={Style.card}>
              <img src="https://images.pexels.com/photos/3183145/pexels-photo-3183145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <div className={Style.container}>
                <h2>Jane Doe</h2>
                <p className={Style.title}>CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className={Style.button}>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.card}>
              <img
                src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mike"
              />
              <div className={Style.container}>
                <h2>Mike Ross</h2>
                <p className={Style.title}>Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button className={Style.button}>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.card}>
              <img src="https://images.pexels.com/photos/3785931/pexels-photo-3785931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <div className={Style.container}>
                <h2>John Doe</h2>
                <p className={Style.title}>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className={Style.button}>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
