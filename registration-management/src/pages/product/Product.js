import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Product(){
    const [ product, setProduct ] = useState([{
        title: "",
        descr: "",
        price: ""
    }])
    const [ counter, setCounter ] = useState(0)

function handleChange(e){
    const text = e.target.value
    const dataToChange = [...product];
    dataToChange[0][e.target.name] = text
    setProduct(dataToChange)

};

function handleCadastrar(){
    localStorage.setItem(`product-${counter}`, JSON.stringify(product))
    setCounter( + 1 )
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
                                        <h1 className="tm-site-title">Simple House</h1>
                                        <h6 className="tm-site-description">new restaurant template</h6>	
                                    </div>
                                </div>
                                <nav className="col-md-6 col-12 tm-nav">
                                    <ul className="tm-nav-ul">
                                        <li className="tm-nav-li"><Link to="/" className="tm-nav-link active">Home</Link></li>
                                        <li className="tm-nav-li"><Link to="/produto" className="tm-nav-link">Cadastrar Produto</Link></li>
                                        <li className="tm-nav-li"><Link to="/client" className="tm-nav-link">Cadastrar Cliente</Link></li>
                                    </ul>
                                </nav>	
                            </div>
                        </div>
                    </div>
                </div>

                <main>
                    <header className="row tm-welcome-section">
                        <h2 className="col-12 text-center tm-section-title">Cadastrar Produto</h2>
                    </header>

                    <div className="tm-container-inner-2 tm-contact-section">
                        <div className="row">
                            <div className="col-md-6">
                                <form action="" method="POST" className="tm-contact-form">
                                    <div className="form-group">
                                    <input type="text" name="title" value= {product.title} className="form-control" placeholder="Título" onChange={handleChange} />
                                    </div>
                        
                                    <div className="form-group">
                                    <textarea rows="2" name="descr" value= {product.desc} className="form-control" placeholder="Descrição" onChange={handleChange}></textarea>
                                    </div>

                                    <div className="form-group">
                                    <input type="text" name="price" value= {product.price} className="form-control" placeholder="Preço" onChange={handleChange} />
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
                                    <img src= "img/gallery/01.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
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