import React, { Component } from 'react';
import Menu from './MenuComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// import { DISHES } from '../shared/dishes'
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    }
}
class Main extends Component {
    constructor(props) {
        super(props)
        this.props = {

        };
    }



    render() {
        const HomePage = () => {
            return (<Home
                dish={this.props.dishes.filter(dish => dish.featured)[0]}
                promotion={this.props.promotions.filter(promo => promo.featured)[0]}
                leader={this.props.leaders.filter(leader => leader.featured)[0]}
            />)
        }

        const SelectedDish = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter(d =>
                    d.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter(comment =>
                        comment.dishId === parseInt(match.params.dishId, 10))}
                />
            )
        }

        return (
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu"
                        component={() =>
                            <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={SelectedDish} />
                    <Route path="/contactus" component={Contact} />
                    <Route path="/aboutus" component={() =>
                        <About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </>
        );
    }
}
export default withRouter(connect(mapStateToProps)(Main))