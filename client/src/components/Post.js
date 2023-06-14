export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img
                    src="https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b"
                    alt="react-logo"
                />
            </div>
            <div className="text">
                <div className="title">
                    <h2>Introduction to React JS</h2>
                </div>
                <div className="details">
                    <div className="author">
                        By <a href="#">Supun Sameera</a>
                    </div>
                    <div className="date">
                        <p>on 14/06/2023</p>
                    </div>
                </div>
                <div className="description">
                    <p>
                        React is a free and open-source front-end JavaScript library for
                        building user interfaces based on components. It is maintained
                        by Meta and a community of individual developers and companies.
                        React can be used to develop single-page, mobile, or
                        server-rendered applications with frameworks like Next.js.
                        Because React is only concerned with the user interface and
                        rendering components to the DOM, React applications often rely
                        on libraries for routing and other client-side functionality.
                    </p>
                </div>
            </div>
        </div>
    )
}