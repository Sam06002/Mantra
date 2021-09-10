import s from '../styles/navbar.module.css'
import Head from 'next/head'

const NavBar = () => {
    return(
        <div>
        <Head>
        {/* <!-- JavaScript Bundle with Popper --> */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        </Head>
        <nav className="navbar navbar-expand-sm">
                <div className="container-md">
                    <a className="navbar-brand text-dark" id="test">MANTRA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">CLICK ME BITCH!!</button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className={"nav-item "}><a className={"nav-link "+s.item}>About</a></li>
                            <li className={"nav-item "}><a className={"nav-link "+s.item}>Resume</a></li>
                            <li className={"nav-item "}><a className={"nav-link "+s.item}>Reviews</a></li>
                            <li className={"nav-item "}><a className={"nav-link "+s.item}>Projects</a></li>
                            <li className={"nav-item "}><a className={"nav-link "+s.item}>Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
    )
}

export default NavBar