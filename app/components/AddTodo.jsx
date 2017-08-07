var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var {dispatch} = this.props
        var strTodo = this.refs.todoText.value;

        if (strTodo.length > 0) {
            this.refs.todoText.value = "";
            dispatch(actions.addTodo(strTodo))
        } else {
            this.refs.todoText.focus();
            //if there isnt valid data, puts cursor on text automatically
        }
        
    },
    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.handleSubmit} className="countdown-form">
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddTodo);