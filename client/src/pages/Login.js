export default function Login() {
    return (
        <main class="form-signin">
            <form>
                <h1 class="h3 mb-4 fw-normal text-center">Log in</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 mt-4 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p class="mt-4 mb-3 text-muted text-center">&copy; Supun Sameera - 2023</p>
            </form>
        </main>
    )
}