angular.module( 'shareDraw' )
  .controller( 'cRUDCtrl', [ '$scope', 'cRUDSvc', function( $scope, cRUDSvc ) { // inject dependancies, $scope, and service objects
    // if you want to do uglification, it messes up $scope,
    // adding/logging tests for cRUDCtrl to the DOM
    // $scope.testcRUDCtrl = 'cRUDCtrl is working';
    // console.log('cRUDCtrl is logging');
    // // $scope.messages = cRUDSvc.getMessages();
    // $scope.viewableMessage = cRUDSvc.getMessages();
    // $scope.useless = "fart";
    // var messages = ['one', 'two', 'three'];
    // console.log(messages);

    console.log( $scope );
    console.log( $scope.$parent );

    $scope.sendMessage = function() {
      $scope.messages.$add( {
        userId: $scope.$parent.user.email,
        time: Firebase.ServerValue.TIMESTAMP,
        text: $scope.typeMessage
      } );

    };
  } ] );