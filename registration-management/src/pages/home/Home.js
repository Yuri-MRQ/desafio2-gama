import { React, useState, useEffect } from 'react';
import changeGalery from './gallery';
import dataBaseProduct from '../../database/product.json';
import { Link } from 'react-router-dom';


export default function Home() {
    const [ gallery, setGallery ] = useState('cadastrados')
    const [ link, setLinkActive ] = useState('cadastrados')
    const [ localStorageList, setlocalStorageList ] = useState([{
        title: "",
        descr: "",
        price: ""
    }])
    const galleryType = ['Novos', 'Cadastrados']
    
    const alreadyInsertList = dataBaseProduct.slice(0, 8)
    
    function getItensLocal(){
        const keys = Object.keys(localStorage);
        let i = keys.length;
        let data = []
        while(i --){
            data.push(JSON.parse(localStorage.getItem(`product-${i}`)))
        };
        
        if (data.length !== localStorageList.length){
            setlocalStorageList(data)
        }

    };

    function ActiveLink(props){
        const text = props.text;
        return <li className="tm-paging-item"><a href="#" className="tm-paging-link active" onClick={handleClick}>{text}</a></li>;
    };

    function DesiabledLink(props) {
        const text = props.text;
        return <li className="tm-paging-item"><a href="#" className="tm-paging-link" onClick={handleClick}>{text}</a></li>;
    };

    function handleClick(e){
            e.preventDefault();

            const page = e.currentTarget.textContent.toLowerCase();

            setGallery(page);
            setLinkActive(page);

    };

    function changeLink(type) {

        if (link === type.toLowerCase()){
            return <ActiveLink text={type}/>;
        }else{
            return <DesiabledLink text={type}/>;
        }
    };

    useEffect(() => {
        getItensLocal()
        
    }, [localStorageList])


    return(
        <>
            <div className= "container">
                {/* Top box */}
                {/* Logo & Site Name */}
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
                        <h2 className="col-12 text-center tm-section-title">Desafio #2 Hiring Coders</h2>
                        <p className="col-12 text-center">Site elaborado para o desafio #2 do Hiring Coders. Cadastre novos produtos e clientes.</p>
                    </header>
                    
                    <div className="tm-paging-links">
                        <nav>
                            <ul>
                                {galleryType.map((element) => {
                                    return changeLink(element)
                                })}
                            </ul>
                        </nav>
                    </div>

                    {/* <!-- Gallery --> */}
                    <div className="row tm-gallery">
                        { galleryType.map((type) => {
                            
                            if (type.toLowerCase() === 'novos'){
                    
                                return changeGalery(type, gallery, localStorageList)

                            }else{

                                return changeGalery(type, gallery, alreadyInsertList)
                            }

                        })}
                    </div>
                    <div className="tm-section tm-container-inner">
                        <div className="row">
                            <div className="col-md-6">
                                <figure className="tm-description-figure">
                                    <img src="img/img-01.jpg" alt="some stuf" className="img-fluid" />
                                </figure>
                            </div>
                            <div className="col-md-6">
                                <div className="tm-description-box"> 
                                    <h4 className="tm-gallery-title">Maecenas nulla neque</h4>
                                    <p className="tm-mb-45">Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a rel="nofollow" href="https://templatemo.com/contact">talk to us</a> for additional permissions about our templates. Thank you.</p>
                                    <a href="about.html" className="tm-btn tm-btn-default tm-right">Read More</a>
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
};