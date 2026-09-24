import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");
  const [selected, setSelected] = useState(null);

  const openExample = (section, number) => {
    setPage(section);
    setSelected(number);
  };

  const back = () => {
    setSelected(null);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>React Programs</h2>

        <div>
          <button onClick={() => { setPage("Home"); setSelected(null); }}>
            Home
          </button>

          <button onClick={() => { setPage("Components"); setSelected(null); }}>
            Components
          </button>

          <button onClick={() => { setPage("Hooks"); setSelected(null); }}>
            Hooks
          </button>

          <button onClick={() => { setPage("Forms"); setSelected(null); }}>
            Forms
          </button>
        </div>
      </nav>

      <div className="container">

        {/* HOME */}
        {page === "Home" && (
          <div className="home">
            <h1>React Programs</h1>
            <p>
              Components, Hooks and Forms examples
            </p>

            <div className="home-cards">
              <div onClick={() => setPage("Components")}>
                <h2>Components</h2>
                <p>10 Examples</p>
              </div>

              <div onClick={() => setPage("Hooks")}>
                <h2>Hooks</h2>
                <p>10 Examples</p>
              </div>

              <div onClick={() => setPage("Forms")}>
                <h2>Forms</h2>
                <p>10 Examples</p>
              </div>
            </div>
          </div>
        )}

        {/* EXAMPLES LIST */}
        {!selected && page !== "Home" && (
          <div>
            <h1>{page}</h1>
            <p>Click on an example to see its output.</p>

            <div className="examples">
              {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                <button
                  className="example"
                  key={num}
                  onClick={() => openExample(page, num)}
                >
                  Example {num}
                  <span> →</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* OUTPUT */}
        {selected && (
          <div className="output-page">
            <button className="back" onClick={back}>
              ← Back
            </button>

            <h1>
              {page} - Example {selected}
            </h1>

            <div className="output">
              <Output section={page} number={selected} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}


/* ================= OUTPUT ================= */

function Output({ section, number }) {

  /* COMPONENTS */

  if (section === "Components") {

    if (number === 1)
      return (
        <div>
          <h2>Hello React!</h2>
          <p>This is JSX Element example.</p>
        </div>
      );

    if (number === 2)
      return (
        <div className="box">
          <h2>Functional Component</h2>
          <p>This component is created using a function.</p>
        </div>
      );

    if (number === 3)
      return (
        <div className="box">
          <h2>Student Component</h2>
          <p>Name: Shravani</p>
          <p>Course: BCS</p>
        </div>
      );

    if (number === 4)
      return (
        <div className="box">
          <h2>Product</h2>
          <p>Product: React Book</p>
          <p>Price: ₹499</p>
        </div>
      );

    if (number === 5)
      return (
        <div className="box">
          <h2>Children Prop</h2>
          <p>This content is passed using children.</p>
        </div>
      );

    if (number === 6) {
      const fruits = ["Apple", "Mango", "Banana", "Orange"];

      return (
        <div>
          <h2>Fruit List</h2>
          <ul>
            {fruits.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </div>
      );
    }

    if (number === 7)
      return (
        <div>
          <h2>Conditional Rendering</h2>
          <p>Welcome User!</p>
        </div>
      );

    if (number === 8)
      return <EventExample />;

    if (number === 9)
      return (
        <div>
          <h2>Reusable Components</h2>
          <button className="primary">Save</button>
          <button className="primary">Submit</button>
        </div>
      );

    if (number === 10)
      return (
        <div className="box">
          <h2>Student Portal</h2>
          <p>Welcome to React Application</p>
        </div>
      );
  }


  /* HOOKS */

  if (section === "Hooks") {

    if (number === 1)
      return <Counter />;

    if (number === 2)
      return <Toggle />;

    if (number === 3)
      return <Timer />;

    if (number === 4)
      return <NameEffect />;

    if (number === 5)
      return <RefExample />;

    if (number === 6)
      return <MemoExample />;

    if (number === 7)
      return <CallbackExample />;

    if (number === 8)
      return <CustomHook />;

    if (number === 9)
      return (
        <div className="box">
          <h2>useContext Example</h2>
          <p>Current User: Shravani</p>
        </div>
      );

    if (number === 10)
      return <MultipleHooks />;
  }


  /* FORMS */

  if (section === "Forms") {

    if (number === 1)
      return <TextInput />;

    if (number === 2)
      return <LoginForm />;

    if (number === 3)
      return <RadioForm />;

    if (number === 4)
      return <Checkbox />;

    if (number === 5)
      return <SelectForm />;

    if (number === 6)
      return <TextArea />;

    if (number === 7)
      return <Validation />;

    if (number === 8)
      return <Registration />;

    if (number === 9)
      return <SearchForm />;

    if (number === 10)
      return <ContactForm />;
  }
}


/* ================= COMPONENT EXAMPLES ================= */

function EventExample() {

  const [message, setMessage] = useState("Click the button");

  return (
    <div>
      <h2>{message}</h2>

      <button
        className="primary"
        onClick={() => setMessage("Button Clicked!")}
      >
        Click Me
      </button>
    </div>
  );
}


/* ================= HOOK EXAMPLES ================= */

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>

      <h1>{count}</h1>

      <button
        className="primary"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}


function Toggle() {

  const [show, setShow] = useState(true);

  return (
    <div>
      <button
        className="primary"
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>

      {show && <h2>Content is Visible</h2>}
    </div>
  );
}


function Timer() {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);

  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <h1>{seconds} seconds</h1>
    </div>
  );
}


function NameEffect() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {

    if (name)
      setMessage("Hello " + name);

    else
      setMessage("Enter your name");

  }, [name]);

  return (
    <div>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>{message}</h2>
    </div>
  );
}


function RefExample() {

  const inputRef = useRef();

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Enter something"
      />

      <button
        className="primary"
        onClick={() => inputRef.current.focus()}
      >
        Focus Input
      </button>
    </div>
  );
}


function MemoExample() {

  const [number, setNumber] = useState(5);

  const square = number * number;

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h2>Square = {square}</h2>
    </div>
  );
}


function CallbackExample() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button
        className="primary"
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  );
}


function CustomHook() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Custom Hook Counter</h2>

      <h1>{count}</h1>

      <button
        className="primary"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
    </div>
  );
}


function MultipleHooks() {

  const [name, setName] = useState("Student");
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count " + count;
  }, [count]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>

      <h3>Count: {count}</h3>

      <button
        className="primary"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}


/* ================= FORM EXAMPLES ================= */

function TextInput() {

  const [name, setName] = useState("");

  return (
    <div>
      <h2>Text Input</h2>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>You entered: {name}</p>
    </div>
  );
}


function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = (e) => {

    e.preventDefault();

    if (username && password)
      setMessage("Login Successful!");

    else
      setMessage("Please fill all fields");
  };

  return (
    <form onSubmit={login}>

      <h2>Login Form</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="primary">
        Login
      </button>

      <p>{message}</p>

    </form>
  );
}


function RadioForm() {

  const [gender, setGender] = useState("");

  return (
    <div>

      <h2>Gender</h2>

      <label>
        <input
          type="radio"
          name="gender"
          onChange={() => setGender("Male")}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          onChange={() => setGender("Female")}
        />
        Female
      </label>

      <p>Selected: {gender}</p>

    </div>
  );
}


function Checkbox() {

  const [agree, setAgree] = useState(false);

  return (
    <div>

      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />

        I agree to terms
      </label>

      <p>
        {agree ? "Accepted" : "Not Accepted"}
      </p>

    </div>
  );
}


function SelectForm() {

  const [course, setCourse] = useState("");

  return (
    <div>

      <h2>Select Course</h2>

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >

        <option value="">Select Course</option>
        <option>Java Full Stack</option>
        <option>Data Analytics</option>
        <option>React</option>

      </select>

      <p>Selected: {course}</p>

    </div>
  );
}


function TextArea() {

  const [text, setText] = useState("");

  return (
    <div>

      <textarea
        rows="5"
        placeholder="Write message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>

    </div>
  );
}


function Validation() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const check = (e) => {

    e.preventDefault();

    if (email.includes("@"))
      setMessage("Valid Email");

    else
      setMessage("Invalid Email");
  };

  return (
    <form onSubmit={check}>

      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="primary">
        Validate
      </button>

      <p>{message}</p>

    </form>
  );
}


function Registration() {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const register = (e) => {

    e.preventDefault();

    setMessage(
      "Registered: " + name + " - " + course
    );
  };

  return (
    <form onSubmit={register}>

      <h2>Registration</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button className="primary">
        Register
      </button>

      <p>{message}</p>

    </form>
  );
}


function SearchForm() {

  const [search, setSearch] = useState("");

  const items = [
    "React",
    "Java",
    "Python",
    "HTML",
    "CSS"
  ];

  const result = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h2>Search</h2>

      <input
        placeholder="Search technology"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {result.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </div>
  );
}


function ContactForm() {

  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {

    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <form onSubmit={submit}>

      <h2>Contact Form</h2>

      <input required placeholder="Full Name" />

      <input required type="email" placeholder="Email" />

      <textarea required placeholder="Message" />

      <button className="primary">
        Send Message
      </button>

      {submitted && (
        <p className="success">
          Message submitted successfully!
        </p>
      )}

    </form>
  );
}

export default App;