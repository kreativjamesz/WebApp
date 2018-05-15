import React from 'react';
import ReactDom from 'react-dom';

export default class Product extends React.Component {
    // constructor() {
    //     super();
    //     this.state = (
    //         data = []
    //     )
    // }

    // componentWillMount() {
    //     let $this = this;

    //     axios.get('api/products').then(response => {
    //         $this.setState({
    //             data: response.data
    //         });
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    render()
    {
        
    <div>
        <div className="col-lg-9">
            <div className="row">
                
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <input type="hidden" value="{product.id}" />
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        
                                    </h4>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                </div>
                            </div>
                        </div>
                
            </div>
        </div>
    </div>
           
    }
}

if (document.getElementById('product')) {
    ReactDOM.render(<Product />, document.getElementById('product'));
}
