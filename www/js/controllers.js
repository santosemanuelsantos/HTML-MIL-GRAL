angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, login) {
  $scope.email = "";
  $scope.senha = "";

  $scope.fazerLogin = function(email, senha) {
    alert(email+senha);
  }
  $scope.novoCadastro= function(email, senha){
    login.novo(email, senha, function(erro){
      alert(erro);
    });
  }
})
.controller("TarefasCtrl",function($scope) {
  $scope.tarefas = [
    {
      nome: 'tarefa 01'
    },
    {
      nome: 'tarefa 02'
    },
    {
      nome: 'tarefa 03'
    }
  ];
})