var app = angular.module('todoApp', []);

app.controller('todoController', ["$scope", function ($scope) {
  $scope.todos = [
    { text: 'one', done: false }, 
    { text: 'two', done: false }
  ];

  $scope.newTodo = '';

  $scope.addTodo = function() {
    $scope.todos.push(
      { text: $scope.newTodo, done: false }
    );
    $scope.newTodo = '';
  }

  $scope.clearDone = function() {
    $scope.todos = $scope.todos.filter(function(todo) {
      if (!todo.done) {
        return todo;
      }
    });
  }
}]);
