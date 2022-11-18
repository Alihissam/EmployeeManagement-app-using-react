import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">Crud Application</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">

                        </ul>

                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            onClick={() => navigate("/create-employee")}
                        >
                            Create Employee
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}


