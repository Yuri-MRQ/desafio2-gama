import React from 'react';

function Article(props) {
    const listItens = props.listItens;
    

    if (props.type.toLowerCase() === 'novos'){
        return listItens.map((item) => {
            let srcImg;
            let title;
            let descr;
            let price;
        
            try{
                srcImg = item[0].src;
                title = item[0].title;
                descr = item[0].descr;
                price = item[0].price;
            }catch(e){
    
            }finally{
                srcImg = 'img/gallery/02.jpg'
            }
           
            return (
                <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src= {srcImg} alt="some stuf" className="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 className="tm-gallery-title">{title}</h4>
                            <p className="tm-gallery-description">{descr}</p>
                            <p className="tm-gallery-price">{price}</p>
                        </figcaption>
                    </figure>
                </article>
            )
        }); 
    }else{
        return listItens.map((item) => {
            const srcImg = item.src;
            const title = item.title;
            const descr = item.descr;
            const price = item.price;
    
            return (
                <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src= {srcImg} alt="some stuf" className="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 className="tm-gallery-title">{title}</h4>
                            <p className="tm-gallery-description">{descr}</p>
                            <p className="tm-gallery-price">{price}</p>
                        </figcaption>
                    </figure>
                </article>
            )
        }); 
    };
    
       
};

function ActiveGalery(props) {
    const listItens = props.listItens;
    const type = props.type

    return(
        <div id= {`tm-gallery-page-${type}`} className="tm-gallery-page">
            <Article listItens={listItens} type={type}/>
        </div>
        );
};

function DisabledGalery(props) {
    const listItens = props.listItens;
    const type = props.type

    return(
        <div id= {`tm-gallery-page-${type}`} className="tm-gallery-page hidden">
            <Article listItens={listItens} type={type}/>
        </div>
        );
};

export default function changeGalery(type, gallery, listItens) {

    
    if (gallery === type.toLowerCase()){
        return <ActiveGalery type= {type} listItens={listItens}/>;
    }else{
        return <DisabledGalery type= {type} listItens={listItens}/>;
    }
};