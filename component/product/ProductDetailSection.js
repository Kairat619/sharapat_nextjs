import { Nav, Tab } from 'react-bootstrap';
import ProductDetailTextSection from './ProductDetailTextSection';
import ProductDescTabPane from './ProductDescTabPane';
import ProductReviewTabPane from './ProductReviewTabPane';
import { useState } from 'react';
const ProductDetailSection = ({product,allProduct}) => {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
  return (
    <section className="fz-product-details">
        <div className="container">
            <div className="row align-items-start justify-content-center">
                <div className="col-lg-4 col-md-6 col-12 col-xxs-12">
                    <div className='fz-product-details__img-slider'>
                        <img src={`/${product.imgSrc.toString()}`} alt="Product Image"/>
                    </div>
                </div>

                <div className="col-lg-8 col-md-6">
                    <ProductDetailTextSection product={product} allProduct={allProduct}/>
                </div>

                <div className="col-12">
                    <div className="fz-product-details__additional-info">
                        <Nav 
                        activeKey={activeTab}
                        onSelect={handleTabChange}
                        className="nav nav-tabs" 
                        id="myTab"
                        >
                            <Nav.Item className="nav-item" role="presentation">
                                <Nav.Link 
                                    className="nav-link" 
                                    eventKey='description'
                                    id="descr-tab" 
                                    role="button"
                                >
                                    Description
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item" role="presentation">
                                <Nav.Link 
                                    className="nav-link" 
                                    eventKey='review'
                                    id="review-tab" 
                                    role="button"
                                >
                                    Reviews
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='description' className={`tab-pane ${activeTab === 'description' ? 'show active' : ''}`}>
                                <ProductDescTabPane/>
                            </Tab.Pane>


                            <Tab.Pane eventKey='review' className={`tab-pane ${activeTab === 'review' ? 'show active' : ''}`}>
                                <ProductReviewTabPane/>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetailSection