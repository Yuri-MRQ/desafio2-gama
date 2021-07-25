import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Client(){
    const [ client, setClient ] = useState([{
        id: "",
        name: "",
        birthDate: "",
        creditCard: "",
        adress: ""
    }])
    const [ counter, setCounter ] = useState(0)
    const [ showMsg, setShowMsg ] = useState(false)

function handleChange(e){
    const text = e.target.value
    const dataToChange = [...client];
    dataToChange[0][e.target.name] = text
    setClient(dataToChange)


};

function handleCadastrar(){
    const keys = Object.keys(localStorage);
    let i = keys.length;
    
    localStorage.setItem(`client-${counter}`, JSON.stringify(client))
    // to-do, implementar flashmensage
    setShowMsg(true)
}



    return (
        <>
           <div className="container">
            {/* <!-- Top box -->
                <!-- Logo & Site Name --> */}
                <div className="placeholder">
                    <div className="parallax-window" data-parallax="scroll" data-image-src="img/simple-house-01.jpg">
                        <div className="tm-header">
                            <div className="row tm-header-inner">
                                <div className="col-md-6 col-12">
                                    <img src="img/simple-house-logo.png" alt="Logo" className="tm-site-logo" /> 
                                    <div className="tm-site-text-box">
                                    <h1 className="tm-site-title">Hiring Coders</h1>
                                    <h6 className="tm-site-description">Gamma Academy</h6>	
                                    </div>
                                </div>
                                <nav className="col-md-6 col-12 tm-nav">
                                    <ul className="tm-nav-ul">
                                        <li className="tm-nav-li"><Link to="/" className="tm-nav-link">Home</Link></li>
                                        <li className="tm-nav-li"><Link to="/produto" className="tm-nav-link">Cadastrar Produto</Link></li>
                                        <li className="tm-nav-li"><Link to="/client" className="tm-nav-link active">Cadastrar Cliente</Link></li>
                                    </ul>
                                </nav>	
                            </div>
                        </div>
                    </div>
                </div>

                <main>
                    <header className="row tm-welcome-section">
                        <h2 className="col-12 text-center tm-section-title">Cadastrar Cliente</h2>
                    </header>

                    <div className="tm-container-inner-2 tm-contact-section">
                        <div className="row">
                            <div className="col-md-6">
                                
                                <form action="" method="POST" className="tm-contact-form">
                                    <div className="form-group">
                                    <input type="text" name="name" value= {client.name} className="form-control" placeholder="Nome" onChange={handleChange} />
                                    </div>
                        
                                    <div className="form-group">
                                    <input type="date" name="birthDate" value= {client.birthDate} className="form-control" placeholder="Data de Nascimento" onChange={handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                    <input type="text" name="creditCard" value= {client.creditCard} className="form-control" placeholder="Cartão de Crédito" onChange={handleChange} />
                                    </div>

                                    <div className="form-group">
                                    <input type="text" name="adress" value= {client.adress} className="form-control" placeholder="Endereço" onChange={handleChange} />
                                    </div>
                            
                                    <div className="form-group tm-d-flex">
                                    <button type="button" className="tm-btn tm-btn-success tm-btn-right" onClick={handleCadastrar}>
                                        Cadastrar
                                    </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div classNAme="tm-address-box">
                                    {/* to do: setar upload foto e trocar nome das classes */}
                                    <img src= "img/about-03.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                </div>
					        </div>
                        </div>
                    </div>
                    
                </main>

                <footer className="tm-footer text-center">
                    <p>Copyright &copy; Yuri M R Quintanilha 
                    
                    | Design Template: <a rel="nofollow" href="https://templatemo.com">TemplateMo</a></p>
                </footer>
            </div>
            <script src="js/jquery.min.js"></script>
            <script src="js/parallax.min.js"></script>
        </>
    )
}