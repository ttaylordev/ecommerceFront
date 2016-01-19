angular.module( 'shareDraw' )
  .directive( 'cRUDDir', function( mainSvc, cRUDSvc ) { // inject dependancies, $scope, and service objects
    return {
      restrict: 'E',
      templateUrl: './js/directives/cRUD/cRUDTmpl.html',
      controller: 'cRUDCtrl',
      link: function( scope, element, attributes ) {
        // console.log(attributes);
        scope.messages = cRUDSvc.getMessages( attributes.room );
      }
    };
  } );