import s from '../styles/navbar.module.css'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

const NavBar = () => {

    useEffect(() => {
        window.onscroll = () => {
            const con = document.getElementsByClassName(s.con)[0]
            if(con.offsetTop > 6){
                con.style.background = "#007bff"
                document.getElementsByClassName(s.item)[0].style.color = "white"
                document.getElementsByClassName(s.item)[1].style.color = "white"
                document.getElementsByClassName(s.item)[2].style.color = "white"
                document.getElementsByClassName(s.item)[3].style.color = "white"
                document.getElementsByClassName(s.item)[4].style.color = "white"
                document.getElementById("NavHeading").style.color = "white"
            }else{
                con.style.background = "white"
                document.getElementsByClassName(s.item)[0].style.color = "black"
                document.getElementsByClassName(s.item)[1].style.color = "black"
                document.getElementsByClassName(s.item)[2].style.color = "black"
                document.getElementsByClassName(s.item)[3].style.color = "black"
                document.getElementsByClassName(s.item)[4].style.color = "black"
                
            }
        }
    }, [])

    return(
        <div className={s.con}>
        <Head>
        {/* <!-- JavaScript Bundle with Popper --> */}
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossOrigin="anonymous"></script> */}
        </Head>

<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossOrigin="anonymous"></Script>

        <nav className="navbar navbar-expand-sm">
                <div className="container-md">
                    <a className="navbar-brand text-dark" id="NavHeading">SaiPuram</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><img width="50px" src="/spade.png" /></button>

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