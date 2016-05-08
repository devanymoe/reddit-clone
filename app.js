var app = angular.module("redditClone", []);
app.controller("RedditController", function($scope) {
  $scope.view = {};

  $scope.view.filter = 'votes';
  $scope.view.search = '';
  $scope.view.newPostOpen = false;

  $scope.view.newPost = {
    date: moment(new Date()).fromNow(),
    votes: 0,
    comments: [],
    openComments: false,
    commentForm: false,
    hoverIsVisible: false
  };

  $scope.view.newComment = {
    date: moment(new Date()).fromNow()
  };

  $scope.view.filterBy = function(filterChoice) {
    $scope.view.filter = filterChoice;
  }

  $scope.view.cancelPost = function() {
    var form = $scope.newPost;

    $scope.view.newPostOpen = false;
    $scope.view.clearForm($scope.newPost);
  }

  $scope.view.cancelComment = function(title, form) {
    event.preventDefault();
    for (var i = 0; i < $scope.view.posts.length; i++) {
      if (title === $scope.view.posts[i].title) {
        $scope.view.posts[i].commentForm = false;
        $scope.view.clearForm(form);
        return;
      }
    }
  }

  $scope.view.openPostForm = function() {
    if ($scope.view.newPostOpen === false) {
      $scope.view.newPostOpen = true;
    }
    else {
      var newPostLink = document.getElementById('newPostLink');
      newPostLink.blur();
      $scope.view.cancelPost();
    }
  }

  $scope.view.openCommentForm = function(title) {
    event.preventDefault();
    for (var i = 0; i < $scope.view.posts.length; i++) {
      if (title === $scope.view.posts[i].title) {
        if ($scope.view.posts[i].commentForm === false) {
          $scope.view.posts[i].commentForm = true;
        }
        else {
          $scope.view.cancelComment(title);
        }
        return;
      }
    }
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

  $scope.view.showComments = function(title) {
    event.preventDefault();
    for (var i = 0; i < $scope.view.posts.length; i++) {
      if (title === $scope.view.posts[i].title) {
        if ($scope.view.posts[i].openComments === false) {
          $scope.view.posts[i].openComments = true;
        }
        else {
          $scope.view.posts[i].openComments = false;
        }
        return;
      }
    }
  }

  $scope.view.posts = [
    {
      title: 'M[boyfriends]RW I come home telling him I had a bad day.',
      author: 'gypsy_tomato',
      image: 'https://i.imgur.com/OMAvgUd.jpg',
      votes: 684,
      description: 'Gummi bears dragée jelly sesame snaps jujubes. Cheesecake chocolate cake marshmallow. Brownie lollipop powder. Candy canes oat cake pudding pastry. Topping wafer topping. Candy canes jelly-o jelly danish caramels chocolate cake chocolate brownie.',
      date: moment('2016-05-07T00:43:51.177Z').fromNow(),
      comments: [
        {
          username: 'EspadaNumberNine',
          text: 'Something tells me the rabbit\'s intentions are not purely altruistic.'
        },
        {
          username: 'leonjackman',
          text: 'Trust me, we just look for any excuse to eat bad food.'
        }
      ],
      openComments: false,
      commentForm: false,
      hoverIsVisible: false
    },
    {
      title: 'One of us! One of us!',
      author: 'feminazi_gold',
      image: 'http://i.imgur.com/mqxqXyO.jpg',
      votes: -2,
      description: 'Candy sweet oat cake biscuit. Tart carrot cake candy. Tart chupa chups sweet chupa chups oat cake. Wafer marshmallow cake halvah caramels dessert marshmallow sweet. Candy canes pudding sweet roll gingerbread danish powder chocolate biscuit. Bear claw jujubes sweet chocolate sweet lemon drops pie jelly beans tart.',
      date: moment('2016-05-04T00:43:51.177Z').fromNow(),
      comments: [
        {
          username: 'kiwip04',
          text: 'Shit, I\'ll never have Enya status. Guess I\'ll sail away...'
        },
        {
          username: 'Zenning2',
          text: 'Awwww.. Thats so sad... She can\'t afford to get her cats castles too. Poor kitties.'
        },
        {
          username: 'mike_pants',
          text: 'When I was a teen, I decided I was really into Yanni and Enya and listened to them both obsessively. Went so far as to going to a Yanni concert with my mother and gf. The finding-yourself phase is really weird.'
        },
        {
          username: 'eatspaintchips',
          text: 'Do you need extra litter boxes if you live in a (presumably) large castle? What if the cat is in one wing of the castle and needs to poop, but his box is on the other side of the place? I have neither a cat nor a castle (or a litter box for that matter) and I don\'t know how any of this works.'
        }
      ],
      openComments: false,
      commentForm: false,
      hoverIsVisible: false
    },
    {
      title: 'I see what they did there',
      author: 'JustHereForTheMemes',
      image: 'http://i.imgur.com/q4JoNQC.jpg',
      votes: 752,
      description: 'Halvah cake muffin marshmallow cake ice cream. Pastry jelly beans danish dragée wafer soufflé bonbon dessert chupa chups. Cheesecake apple pie candy chupa chups liquorice brownie wafer jujubes. Ice cream lollipop biscuit gingerbread caramels marshmallow soufflé jelly beans.',
      date: moment('2016-03-01T00:43:51.177Z').fromNow(),
      comments: [
        {
          username: 'ummeiko',
          text: 'I agree. Dark Souls 3 for everyone!'
        }
      ],
      openComments: false,
      commentForm: false,
      hoverIsVisible: false
    },
    {
      title: 'Let\'s be honest, it was the plan all along.',
      author: 'LilboBaggins',
      image: 'http://i.imgur.com/e7ssg1v.jpg',
      votes: 1236,
      description: 'Gummies jelly-o dragée candy canes. Soufflé sugar plum pastry cupcake sugar plum cotton candy chupa chups. Dragée dessert tart jelly beans gummies soufflé fruitcake sweet roll. Caramels ice cream caramels biscuit cake candy canes dragée carrot cake.',
      date: moment('2016-05-05T00:40:51.177Z').fromNow(),
      comments: [],
      openComments: false,
      commentForm: false,
      hoverIsVisible: false
    },
    {
      title: 'Ay yo, Mary Magdalen!',
      author: 'MissSuzyQ',
      image: 'http://i.imgur.com/bl7hhHl.jpg',
      votes: 2343,
      description: 'Ice cream soufflé cheesecake sesame snaps candy canes tart chocolate donut. Icing pastry sesame snaps jelly chupa chups oat cake. Danish chupa chups cake candy ice cream lollipop bear claw jelly. Lemon drops sweet gummi bears marzipan chocolate powder soufflé jelly-o chupa chups.',
      date: moment('2016-05-21T00:43:51.177Z').fromNow(),
      comments: [
        {
          username: 'americaninquisition',
          text: 'I get it but I can\'t find a pun :('
        },
        {
          username: 'blanchedubois',
          text: 'I just snorted into my tea.'
        }
      ],
      openComments: false,
      commentForm: false,
      hoverIsVisible: false
    }
  ];

  $scope.view.clearForm = function(form) {
    var clearedForm;

    if (form.$name === 'newPost') {
      clearedForm = {
        date: moment(new Date()).fromNow(),
        votes: 0,
        comment: [],
        openComments: false,
        commentForm: false,
        hoverIsVisible: false,
      };
    }

    if (form.$name === 'newComment') {
      clearedForm = {
        date: moment(new Date()).fromNow()
      };
    }

    form.$setPristine();
    form.$setUntouched();
    $scope.view[form.$name] = angular.copy(clearedForm);
  };

  $scope.view.submitPost = function() {
    var form = $scope.newPost
    if ($scope.newPost.$invalid) {
      return;
    }
    else {
      $scope.view.posts.push($scope.view.newPost);
      $scope.view.clearForm(form);
      $scope.view.newPostOpen = false;
    }
  };

  $scope.view.submitComment = function(title, form) {
    event.preventDefault();
    if (form.$invalid) {
      return;
    }
    else {
      for (var i = 0; i < $scope.view.posts.length; i++) {
        if (title === $scope.view.posts[i].title) {
          $scope.view.posts[i].commentForm = false;
          $scope.view.posts[i].comments.push($scope.view.newComment);
          $scope.view.posts[i].openComments = true;
          $scope.view.clearForm(form);
          return;
        }
      }
    }
  };

  $scope.view.showHoverZoom = function(image) {
    for (var i = 0; i < $scope.view.posts.length; i++) {
      if (image === $scope.view.posts[i].image) {
        $scope.view.posts[i].hoverIsVisible = true;
        return;
      }
    }
  }

  $scope.view.hideHoverZoom = function(image) {
    for (var i = 0; i < $scope.view.posts.length; i++) {
      if (image === $scope.view.posts[i].image) {
        $scope.view.posts[i].hoverIsVisible = false;
        return;
      }
    }
  }

});
