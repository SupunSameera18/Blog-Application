import { useState } from "react";

export default function Register() {
    const [userMail, setUserMail] = useState("");
    const [password, setPassword] = useState("");

    async function register(e) {
        e.preventDefault();
        await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({ userMail, password }),
            headers: { "Content-Type": "application/json" },
        });
    }

    return (
        <main class="form-signin">
            <form onSubmit={register}>
                <h1 class="h2 mb-4 fw-bold text-center">Sign Up</h1>

                <div class="form-floating">
                    <input
                        type="email"
                        class="form-control email"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={userMail}
                        onChange={(e) => setUserMail(e.target.value)}
                    ></input>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control pass"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control verify-pass"
                        id="floatingPassword"
                        placeholder="Verify Password"
                    ></input>
                    <label for="floatingPassword">Verify Password</label>
                </div>
                <button class="w-100 mt-4 btn btn-lg btn-primary" type="submit">
                    Sign Up
                </button>
                <p class="mt-4 mb-3 text-muted text-center">
                    &copy; Supun Sameera - 2023
                </p>
            </form>
        </main>
    );
}
