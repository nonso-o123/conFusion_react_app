import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <div className="container">
                    <Menu
                        dishes={this.state.dishes}
                        onClick={(d) => this.onDishSelect(d)}
                    />
                    <DishDetail
                        selectedDish={this.state.dishes.filter(d =>
                            d.id === this.state.selectedDish)[0]}
                    />
                </div>
            </div>
        );
    }
}
