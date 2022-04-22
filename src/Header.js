import Profile from './Profile.jpg';

function Header() {
return (
<div className="Header">
	<header className="text-white bg-dark">
        <div className="container py-5">
            <div className="row">
                <div className="col-xs-3 col-lg-2 text-center">
                    <img src={Profile}
                        alt="Picture" className="border border-5 rounded-circle img-fluid" style={{ width: "150px", height: "150px"}} />
                </div>
                <div className="col text-center text-lg-start">
                    <h1>DongYeon Kim</h1>

                    <p className="lead">Software development student at SAIT (Southern Alberta Institute of Technology).</p>

                    <ul className="list-inline">
                        <li className="list-inline-item my-2"><a href="mailto: dongyeon.kim@edu.sait.ca" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-envelope pe-1"></i>
                                <span className="text-center">E-mail</span></a></li>
                        <li className="list-inline-item my-2"><a href="https://www.linkedin.com/in/dongyeon-kim-28344b204/" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-linkedin pe-1"></i>
                                LinkedIn</a></li>
                        <li className="list-inline-item my-2"><a href="https://github.com/calgarysanta" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-github pe-1"></i>
                                GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</div>
);
}

export default Header;