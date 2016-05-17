angular.module('knowSysApp').controller("purchasesCtrl", ["$scope", "$ionicLoading",
            function ($scope, $ionicLoading) {
    $scope.creditPackItems = [];
    $scope.creditItems = [];
    $scope.currencySymbol = "$";
    $scope.init = function () {
        for (var i = 0; i < 2; i++) {
            $scope.creditItems = $scope.creditItems.concat(
            {
                productId: i + 1,
                name: "Credit Item " + (i + 1),
                price: (i+1) * 10
            });
            $scope.creditPackItems = $scope.creditPackItems.concat(
            {
                productId: i+1,
                name: "Credit Pack " + (i + 1),
                price: (i + 2) * 10
            });
        }
    };
    
    $scope.buyItem = function () {
        $ionicLoading.show();
        setTimeout(function () { $ionicLoading.hide() }, 500);
    };
}]);