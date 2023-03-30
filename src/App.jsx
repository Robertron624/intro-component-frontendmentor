import { useState } from "react";
import "./App.scss";

function TrialForm() {
    const [email, setEmail] = useState("");

    return (
        <div className="form-container">
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                />
                <input type="password" placeholder="Password" />
                <button>CLAIM YOU FREE TRAIL</button>
                <p className="terms">
                    {" "}
                    By clicking the button, you are agreeing to our <span>Terms and
                    Services</span>
                </p>
            </form>
        </div>
    );
}

function App() {
    const [count, setCount] = useState(0);

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
            <div className="try-it">
                <h2>Try it free 7 days then $20/mo. thereafter</h2>
                <span>$20/mo, thereafter</span>
            </div>
            <TrialForm />
        </div>
    );
}

export default App;
