angular.module('shareDraw')
  .controller('rawDataObjectsCtrl', function($scope, mainSvc, cRUDSvc) { // inject dependancies, $scope, and service objects
    $scope.testrawDataObjectsCtrl = 'rawDataObjectsCtrl is working';
    console.log('rawDataObjectsCtrl: rawDataObjectsCtrl is linking up');
});
