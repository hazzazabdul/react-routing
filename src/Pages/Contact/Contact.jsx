
import Style from "./Contact.module.css";

const Contact = () => {

  const formSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div className={Style.form__section}>
      <div className={Style.container}>
        <h2>SEND US A MESSAGE</h2>
        <form onSubmit={(event) => formSubmit(event)}>
          <div className={Style.form__name__email}>
            <div className={Style.form__input}>
              <input
                type="text"
                placeholder="Name"
                className={Style.form__control}
              />
            </div>
            <div className={Style.form__input}>
              <input
                type="email"
                placeholder="Email"
                className={Style.form__control}
              />
            </div>
          </div>
          <div className={Style.form__input}>
            <textarea
              name="message"
              placeholder="Tell us more about your needs"
            ></textarea>
          </div>

          <div className={Style.send__btn}>
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

//<div className={Style.form__group}>
{
  /* <form action="#">
<div className={Style.row}>
  <label htmlFor="name">Name</label>
  <input
    placeholder="Your name"
    type="name"
    id="name"
  />
</div>
<div className={Style.row}>
  <label htmlFor="country">Country</label>
  <select name="country" id="country">
    <option value="France">France</option>
    <option value="unitedstate">United State</option>
    <option value="germany">Germany</option>
    <option value="italy">Italy</option>
  </select>
</div>
<div className={Style.row}>
  <label htmlFor="name">Message</label>
  <textarea name="message" id="message" maxLength='30' resi></textarea>
</div>
<button type="submit">Submit</button>
</form>
</div> */
}
