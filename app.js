var app = angular.module("redditClone", []);
app.controller("RedditController", function($scope) {
  $scope.view = {};

  $scope.view.newPost = {};
  $scope.view.newComment = {};
  $scope.view.search = {};

  $scope.view.posts = [
    {
      title: '',
      author: '',
      image: '',
      votes: 2,
      description: '',
      date: '',
      comments: []
    }
  ];

  $scope.view.clearForm = function(formName) {
    var clearedForm = {};

    $scope.formName = angular.copy(clearedForm);
    $scope.formName.$setPristine();
    $scope.formName.$setUntouched();
  };

  $scope.view.submitPost = function() {
    $scope.view.posts.push($scope.view.newPost);
    $scope.view.clearForm(newPost);
  };

  $scope.view.submitComment = function(index) {
    $scope.view.posts[index].comments.push($scope.view.newComment);
    $scope.view.clearForm(newComment);
  };

});
