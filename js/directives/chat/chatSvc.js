angular.module( 'shareDraw' )
  .service( 'chatSvc', function( $firebaseObject, $firebaseArray, $firebaseAuth, mainSvc ) {
    var baseUrl = 'yourFbUrlHere';

    this.testchatSvc = function() {
      var chatSvcIsLoading = 'chatSvc is loading';
      // console.log('From: chatSvc via chatCtrl: chatSvc is logging');
      return chatSvcIsLoading;
    };

    this.getMessages = function( location ) {
      var messagesRef = new Firebase( baseUrl + "/chat-message/" + location );
      var messages = $firebaseArray( messagesRef );
      return messages;
    };

    //
    // this.removeMessage = function(message) {
    //   messages.$remove(message);
    // };

  } );