/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('todoApp', [])
        .controller('TodoController', ['$scope', function($scope) {
                $scope.todos = [
                    {text : 'learn angular' , done:true},
                    {text:'build angular application', done : false}
                ];
                
                $scope.addTodo =function(){
                   $scope.todos.push({text:$scope.todoText,done:false}) ;
                   $scope.todoText = '';
                };
                
                $scope.remaining = function(){
                        var count = 0;
                        angular.forEach($scope.todos,function(todo){
                             count+= todo.done ? 0 : 1;
                        });
                        return count;
                };
                
                $scope.archive= function(){
                        var oldTodos = $scope.todos;
                        $scope.todos = [];
                        angular.forEach(oldTodos,function(todo){
                            if(!todo.done)
                                $scope.todos.push(todo);
                        });
                };
    
        }]);
