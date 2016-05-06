var app = angular.module("redditClone", []);
app.controller("RedditController", function($scope) {
  $scope.view = {};

  $scope.view.newPostOpen = false;

  $scope.view.newPost = {
    date: moment(new Date()).fromNow(),
    votes: 0,
    comments: []
  };
  $scope.view.newComment = {
    date: moment(new Date()).fromNow()
  };
  $scope.view.search = {};

  $scope.view.cancelPost = function() {
    $scope.view.newPostOpen = false;
    $scope.view.clearForm(newPost);
  }

  $scope.view.openPost = function() {
    $scope.view.newPostOpen = true;
  }

  $scope.view.upVote = function(title) {
    for (var i = 0; i < $scope.view.posts.length; i++) {
      if (title === $scope.view.posts[i].title) {
        $scope.view.posts[i].votes++;
        return;
      }
    }
  }

  $scope.view.downVote = function(title) {
    for (var i = 0; i < $scope.view.posts.length; i++) {
      if (title === $scope.view.posts[i].title) {
        $scope.view.posts[i].votes--;
        return;
      }
    }
  }

  $scope.view.posts = [
    {
      title: 'M[boyfriends]RW I come home telling him I had a bad day.',
      author: 'gypsy_tomato',
      image: 'https://i.imgur.com/OMAvgUd.jpg',
      votes: 3262,
      description: 'Gummi bears dragée jelly sesame snaps jujubes. Cheesecake chocolate cake marshmallow. Brownie lollipop powder. Candy canes oat cake pudding pastry. Topping wafer topping. Candy canes jelly-o jelly danish caramels chocolate cake chocolate brownie.',
      date: moment(new Date()).fromNow(),
      comments: [
        {
          author: 'Devany Moe',
          text: 'This post sucks'
        },
        {
          author: 'Brian Mathews',
          text: 'This post rocks'
        }
      ]
    },
    {
      title: 'One of us! One of us!',
      author: 'feminazi_gold',
      image: 'http://i.imgur.com/mqxqXyO.jpg',
      votes: 1247,
      description: 'Candy sweet oat cake biscuit. Tart carrot cake candy. Tart chupa chups sweet chupa chups oat cake. Wafer marshmallow cake halvah caramels dessert marshmallow sweet. Candy canes pudding sweet roll gingerbread danish powder chocolate biscuit. Bear claw jujubes sweet chocolate sweet lemon drops pie jelly beans tart.',
      date: moment('2016-05-04T00:43:51.177Z').fromNow(),
      comments: []
    },
    {
      title: 'I see what they did there',
      author: 'JustHereForTheMemes',
      image: 'http://i.imgur.com/q4JoNQC.jpg',
      votes: 752,
      description: 'Halvah cake muffin marshmallow cake ice cream. Pastry jelly beans danish dragée wafer soufflé bonbon dessert chupa chups. Cheesecake apple pie candy chupa chups liquorice brownie wafer jujubes. Ice cream lollipop biscuit gingerbread caramels marshmallow soufflé jelly beans.',
      date: moment('2016-04-01T00:43:51.177Z').fromNow(),
      comments: []
    },
    {
      title: 'Let\'s be honest, it was the plan all along.',
      author: 'LilboBaggins',
      image: 'http://i.imgur.com/e7ssg1v.jpg',
      votes: 2216,
      description: 'Gummies jelly-o dragée candy canes. Soufflé sugar plum pastry cupcake sugar plum cotton candy chupa chups. Dragée dessert tart jelly beans gummies soufflé fruitcake sweet roll. Caramels ice cream caramels biscuit cake candy canes dragée carrot cake.',
      date: new Date(),
      comments: []
    },
    {
      title: 'Ay yo, Mary Magdalen!',
      author: 'MissSuzyQ',
      image: 'http://i.imgur.com/bl7hhHl.jpg',
      votes: 2,
      description: 'Ice cream soufflé cheesecake sesame snaps candy canes tart chocolate donut. Icing pastry sesame snaps jelly chupa chups oat cake. Danish chupa chups cake candy ice cream lollipop bear claw jelly. Lemon drops sweet gummi bears marzipan chocolate powder soufflé jelly-o chupa chups.',
      date: new Date(),
      comments: []
    }
  ];

  $scope.view.clearForm = function(formName) {
    var clearedForm = {
      date: moment(new Date()).fromNow(),
      votes: 0,
      comment: []
    };

    $scope.view[formName] = angular.copy(clearedForm);
    $scope[formName].$setPristine();
    $scope[formName].$setUntouched();
  };

  $scope.view.submitPost = function() {
    $scope.view.posts.push($scope.view.newPost);
    $scope.view.clearForm('newPost');
    $scope.view.newPostOpen = false;
  };

  $scope.view.submitComment = function(index) {
    $scope.view.posts[index].comments.push($scope.view.newComment);
    $scope.view.clearForm(newComment);
  };

});
