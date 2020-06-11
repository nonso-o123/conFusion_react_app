import React, { Component } from 'react';
import Menu from './MenuComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            // selectedDish: null,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
        };
    }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish })
    // }

    render() {
        const HomePage = () => {
            return (<Home
                dish={this.state.dishes.filter(dish => dish.featured)[0]}
                promotion={this.state.promotions.filter(promo => promo.featured)[0]}
                leader={this.state.leaders.filter(leader => leader.featured)[0]}
            />)
        }
        return (
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu"
                        component={() =>
                            <Menu dishes={this.state.dishes} />} />
                    <Route path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                {/* <div className="container">
                    <Menu
                        dishes={this.state.dishes}
                        onClick={(d) => this.onDishSelect(d)}
                    />
                    <DishDetail
                        selectedDish={this.state.dishes.filter(d =>
                            d.id === this.state.selectedDish)[0]}
                    />
                </div> */}
                <Footer />
            </>
        );
    }
}
