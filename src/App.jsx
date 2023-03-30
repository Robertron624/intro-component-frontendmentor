import { useState } from "react";
import "./App.scss";

function TrialForm() {
    const [email, setEmail] = useState("");

    return (
        <div className="form-container">
            <form>
                <label hidden htmlFor="first_name">Email</label>
                <input id="first_name" type="text" placeholder="First Name" />
                <label hidden htmlFor="last_name">Lastname</label>
                <input id="last_name" type="text" placeholder="Last Name" />
                <label hidden htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                />
                <label hidden htmlFor="password"></label>
                <input id="password" type="password" placeholder="Password" />
                <button type="submit">CLAIM YOU FREE TRAIL</button>
                <p className="terms">
                    {" "}
                    By clicking the button, you are agreeing to our{" "}
                    <a>Terms and Services</a>
                </p>
            </form>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <div className="main-message">
                <h1>Learn to code by watching others</h1>
                <p>
                    See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great, but understanding how
                    developers think is invaluable.
                </p>
            </div>
            <div className="try-form">
                <div className="try-it">
                    <h2>Try it free 7 days </h2>
                    then $20/mo, thereafter
                </div>
                <TrialForm />
            </div>
        </div>
    );
}

export default App;
