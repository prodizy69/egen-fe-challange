/**
 * Created by Sateesh on 10/01/2016.
 */

describe('creditcardType', function () {

    beforeEach(function () {
        module('cccheck');
    });
    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));


    describe('checking discover type', function() {
        it('assign a class', function() {
            var $scope = {};

            var controller = $controller('creditCardcontroller', { $scope: $scope });

            expect($scope.add(3,4)).toEqual(7);
            //expect($scope.ccinfo.type).toEqual('discover');

        });
    });
});