var $ = require('jQuery');

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch(e) {

        }
        return $.isArray(todos) ? todos:[];
    },
    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        //filter by three different items, by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        //FIlter by searchText
        //sort todos with non-completed first

        return filteredTodos;
    }
};