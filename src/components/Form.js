import { useDispatch, useSelector } from "react-redux";
function Form() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return state.user;
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    const newUser = { ...userData, [name]: value };
    dispatch(newUser);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, email, phone } = userData;
    const res = await fetch("http://localhost:5000/read-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, email, phone }),
    });
    const re = await res.json();
    console.log(re);
  };
  return (
    <div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="register-form"
        id="register-form"
      >
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={userData.firstname}
            onChange={handleInputs}
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputs}
            value={userData.email}
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            onChange={handleInputs}
            value={userData.phone}
            placeholder="phone"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Form;
