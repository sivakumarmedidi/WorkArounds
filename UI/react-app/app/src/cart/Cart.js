import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItems } from "./actions";

function mapStateToProps(state) {
    return {
        items: state.cartReducer.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItem(item) {
            dispatch(addItems(item))
        }
    }
}

class Cart extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map(item => 
                        <div key={item.id}>{item.name}</div>
                    )
                }
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);