import { React, useState } from 'react';

export default function Home() {
    const [ gallery, setGallery ] = useState()

    function handleClick(e){
            e.preventDefault();

            const page = e.currentTarget.textContent.toLowerCase();
            // const activeElemnt =

            // $('.tm-gallery-page').addClass('hidden');
            // $('#tm-gallery-page-' + page).removeClass('hidden');
            // $('.tm-paging-link').removeClass('active');
            // e.addClass("active");
    };

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
                                        <li className="tm-nav-li"><a href="index.html" className="tm-nav-link active">Home</a></li>
                                        <li className="tm-nav-li"><a href="about.html" className="tm-nav-link">About</a></li>
                                        <li className="tm-nav-li"><a href="contact.html" className="tm-nav-link">Contact</a></li>
                                    </ul>
                                </nav>	
                            </div>
                        </div>
                    </div>
                </div>
                <main>

                    <header className="row tm-welcome-section">
                        <h2 className="col-12 text-center tm-section-title">Welcome to Simple House</h2>
                        <p className="col-12 text-center">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
                    </header>
                    
                    <div className="tm-paging-links">
                        <nav>
                            <ul>
                                <li className="tm-paging-item"><a href="#" className="tm-paging-link active" onClick={handleClick}>Pizza</a></li>
                                <li className="tm-paging-item"><a href="#" className="tm-paging-link" onClick={handleClick}>Salad</a></li>
                                <li className="tm-paging-item"><a href="#" className="tm-paging-link" onClick={handleClick}>Noodle</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* <!-- Gallery --> */}
                    <div className="row tm-gallery">
                        {/* <!-- gallery page 1 --> */}
                        <div id="tm-gallery-page-pizza" className="tm-gallery-page">
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/01.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Fusce dictum finibus</h4>
                                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                                        <p className="tm-gallery-price">$45 / $55</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/02.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Aliquam sagittis</h4>
                                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                                        <p className="tm-gallery-price">$65 / $70</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/03.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Sed varius turpis</h4>
                                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                                        <p className="tm-gallery-price">$30.50</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/04.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Aliquam sagittis</h4>
                                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                                        <p className="tm-gallery-price">$25.50</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/05.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Maecenas eget justo</h4>
                                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                                        <p className="tm-gallery-price">$80.25</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/06.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Quisque et felis eros</h4>
                                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                                        <p className="tm-gallery-price">$20 / $40 / $60</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/07.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Sed ultricies dui</h4>
                                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                                        <p className="tm-gallery-price">$94</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/08.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Donec porta consequat</h4>
                                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                                        <p className="tm-gallery-price">$15</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div> 
                        {/* <!-- gallery page 1 --> */}
                        
                        {/* <!-- gallery page 2 --> */}
                        <div id="tm-gallery-page-salad" className="tm-gallery-page hidden">
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/04.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Salad Menu One</h4>
                                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                                        <p className="tm-gallery-price">$25</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/03.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Second Title Salad</h4>
                                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                                        <p className="tm-gallery-price">$30</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/05.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Third Salad Item</h4>
                                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                                        <p className="tm-gallery-price">$45</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/01.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Superior Salad</h4>
                                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                                        <p className="tm-gallery-price">$50</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/08.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Sed ultricies dui</h4>
                                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                                        <p className="tm-gallery-price">$55 / $60</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/07.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Maecenas eget justo</h4>
                                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                                        <p className="tm-gallery-price">$75</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div> 
                        {/* <!-- gallery page 2 --> */}
                        
                        {/* <!-- gallery page 3 --> */}
                        <div id="tm-gallery-page-noodle" className="tm-gallery-page hidden">
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/08.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Noodle One</h4>
                                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        <p className="tm-gallery-price">$12.50</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/07.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Noodle Second</h4>
                                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        <p className="tm-gallery-price">$15.50</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/06.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Third Soft Noodle</h4>
                                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        <p className="tm-gallery-price">$20.50</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/05.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Aliquam sagittis</h4>
                                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        <p className="tm-gallery-price">$30.25</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/04.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Maecenas eget justo</h4>
                                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        <p className="tm-gallery-price">$35.50</p>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <figure>
                                    <img src="img/gallery/03.jpg" alt="some stuf" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">Quisque et felis eros</h4>
                                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        <p className="tm-gallery-price">$40.50</p>
                                    </figcaption>
                                </figure>
                            </article>

                        </div> 
                        {/* <!-- gallery page 3 --> */}
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