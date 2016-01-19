angular.module( 'shareDraw' )
  .service( 'cRUDSvc', function( $firebaseObject, $firebaseArray, $firebaseAuth, mainSvc ) {
    var baseUrl = 'https://dmecommerce.firebaseio.com/data';

    this.testcRUDSvc = function() {
      var cRUDSvcIsLoading = 'cRUDSvc is loading';
      // console.log('From: cRUDSvc via cRUDCtrl: cRUDSvc is logging');
      return cRUDSvcIsLoading;
    };

    this.getMessages = function( location ) {
      var messagesRef = new Firebase( baseUrl + "/cRUD-message/" + location );
      var messages = $firebaseArray( messagesRef );
      return messages;
    };

    //
    // this.removeMessage = function(message) {
    //   messages.$remove(message);
    // };

  } );