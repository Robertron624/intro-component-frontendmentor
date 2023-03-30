import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.scss";

function TrialForm() {
    
    const [ emailErrors, setEmailErrors ] = useState(false);
    const [ passwordErrors, setPasswordErrors ] = useState(false);
    const [ firstNameErrors, setFirstNameErrors ] = useState(false);
    const [ lastNameErrors, setLastNameErrors ] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        // console.log(data);

        const { email, password, first_name, last_name } = data;

        if(!email) {
            setEmailErrors(true);
        }
        if(!password) {
            setPasswordErrors(true);
        }
        if(!first_name) {
            setFirstNameErrors(true);
        }
        if(!last_name) {
            setLastNameErrors(true);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-container">
                    <label hidden htmlFor="first_name">
                        Email
                    </label>
                    <input
                        className={`input ${firstNameErrors ? 'input-error' : ''}`}
                        required={false}
                        id="first_name"
                        type="text"
                        placeholder={`${!firstNameErrors ? 'First Name' : ''}`}
                        {...register("first_name", { required: false })}
                    />
                    {firstNameErrors && (<div className="form-error">First Name cannot be empty</div>)}
                    {firstNameErrors && (<img src="/icon-error.svg" className="error-icon"/>)}
                </div>

                <div className="input-container">
                    <label hidden htmlFor="last_name">
                        Lastname
                    </label>
                    <input
                        className={`input ${lastNameErrors ? 'input-error' : ''}`}
                        id="last_name"
                        type="text"
                        placeholder={`${!lastNameErrors ? 'Last Name' : ''}`}
                        {...register("last_name", { required: false })}
                    />
                    { lastNameErrors && (<div className="form-error">Last Name cannot be empty</div>)}
                    { lastNameErrors && (<img src="/icon-error.svg" className="error-icon"/>)}
                </div>

                <div className="input-container">
                    <label hidden htmlFor="email">
                        Email
                    </label>
                    <input
                        className={`input ${emailErrors ? 'input-error' : ''}`}
                        id="email"
                        type="email"
                        placeholder={`${!emailErrors ? 'Email Address' : 'email@example/com'}`}
                        {...register("email", {
                            required: false,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        })}
                    />
                    { emailErrors && (<div className="form-error">Looks like this is not an email</div>) }
                    { emailErrors && (<img src="/icon-error.svg" className="error-icon"/>)}
                </div>

                <div className="input-container">
                    <label hidden htmlFor="password"></label>
                    <input
                        className={`input ${passwordErrors ? 'input-error' : ''}`}
                        id="password"
                        type="password"
                        placeholder={`${!passwordErrors ? 'Password' : ''}`}
                        {...register("password", { required: false })}
                    />
                    { passwordErrors && (<div className="form-error">Password cannot be empty</div>)}
                    { passwordErrors && (<img src="/icon-error.svg" className="error-icon"/>)}
                </div>

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
