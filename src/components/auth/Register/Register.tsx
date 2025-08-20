import { useState } from "react";
import "./Register.css";
import Stepper, { Step } from './Stepper';

export function Register() {
    const [nickname, setNickname] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(25);
    const [city, setCity] = useState('Haifa');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="Register">
            <Stepper
                initialStep={1}
                onStepChange={(step) => {
                    console.log(step);
                }}
                onFinalStepCompleted={() => console.log("All steps completed!")}
                backButtonText="Previous"
                nextButtonText="Next"
            >
                <Step>
                    <h2>Welcome to FinTalk!</h2>
                    <p>Let's get it started!</p>
                </Step>
                <Step>
                    <h2>Credentials</h2>
                    <label htmlFor="email"></label>
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </Step>
                <Step>
                    <h2>Let us get to know you better...</h2>
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="your anonymous nickname" />
                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="your gender" />
                    <input type="number" name="age" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="your age" />
                    <input type="string" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="your city" />
                </Step>
                <Step>
                    <h2>Some more info to give you the best results</h2>
                    <input type="string" name="profession" placeholder="your profession" />
                    <input type="string" name="status" placeholder="your status" />
                </Step>
                <Step>
                    <h2>Final Step</h2>
                    <p>Now the show begins!!!</p>
                </Step>
            </Stepper>
        </div>
    );
}
