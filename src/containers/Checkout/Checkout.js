import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Route , Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    // state = {
    //     ingredients: null,
    //     price: 0
    // }

    // componentWillMount(){
        
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         if(param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1]  
    //         }
            
    //     }

    //     this.setState({ingredients: ingredients, totalPrice: price });
    // }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
      
        this.props.history.push({ 
            pathname: '/checkout/contact-data'
        });
    }

    render () {
       
        let summary = <Redirect to="/" />
        if(this.props.ings) {
            const purchasedRedirect  = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                    ingredients={this.props.ings} 
                    onCheckOutCancel={this.checkoutCancelHandler}
                    onCheckOutContinue={this.checkoutContinueHandler}
                    />

                    <Route path={this.props.match.path+'/contact-data'} component={ContactData} />
                </div>
            );
        }

        return summary;
            
    }

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps)(Checkout);