export default function Login() {
    return (
        <main class="form-signin">
            <form>
                <h1 class="h2 mb-4 fw-bold text-center">Login</h1>

                <div class="form-floating">
                    <input type="email" class="form-control email" id="floatingInput" placeholder="name@example.com"></input>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control pass" id="floatingPassword" placeholder="Password"></input>
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 mt-4 btn btn-lg btn-primary" type="submit">Login</button>
                <p class="mt-4 mb-3 text-muted text-center">&copy; Supun Sameera - 2023</p>
            </form>
        </main>
    )
}