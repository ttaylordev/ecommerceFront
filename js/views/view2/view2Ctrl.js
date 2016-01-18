angular.module('shareDraw')
  .controller('view2Ctrl', function($scope, mainSvc, chatSvc) { // inject dependancies, $scope, and service objects
    $scope.testview2Ctrl = 'view2Ctrl is working';
    console.log('view2Ctrl: view2Ctrl is linking up');
});
