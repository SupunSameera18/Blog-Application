import { useState } from "react"

export default function Login() {

    const [userMail, setUserMail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e) {
        e.preventDefault();
        await fetch("http://localhost:4000/login", {
            method: 'POST',
            body: JSON.stringify({
                userMail: userMail,
                password: password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    return (
        <main className="form-signin">
            <form onSubmit={login}>
                <h1 className="h2 mb-4 fw-bold text-center">Login</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control email"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={userMail}
                        onChange={(e) => setUserMail(e.target.value)}
                    ></input>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control pass"
                        id="floatingPassword"
                        placeholder="Password"
                        alue={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <label for="floatingPassword">Password</label>
                </div>
                <button className="w-100 mt-4 btn btn-lg btn-primary" type="submit">Login</button>
                <p className="mt-4 mb-3 text-muted text-center">&copy; Supun Sameera - 2023</p>
            </form>
        </main>
    )
}