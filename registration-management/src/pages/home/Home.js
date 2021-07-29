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


    function ActiveLink(props){
        const text = props.text;
        return <li className="tm-paging-item"><Link className="tm-paging-link active" onClick={handleClick}>{text}</Link></li>;
    };

    function DesiabledLink(props) {
        const text = props.text;
        return <li className="tm-paging-item"><Link className="tm-paging-link" onClick={handleClick}>{text}</Link></li>;
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
        function getItensLocal(){
            const keys = Object.keys(localStorage);
            let i = keys.length;
            let data = []
            keys.map((key) => {
                if(key.includes("product")){
                    return data.push(JSON.parse(localStorage.getItem(`product-${i}`)))
                }
            })
            if (data.length !== localStorageList.length){
                setlocalStorageList(data)
            }
            console.log(data)
        };
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
                                        <h1 className="tm-site-title">Hiring Coders</h1>
                                        <h6 className="tm-site-description">Gamma Academy</h6>	
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
                                    <p className="tm-mb-45">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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