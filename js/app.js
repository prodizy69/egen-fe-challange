/**
 * Created by Sateesh on 10/01/2016.
 */
(function(ng) {

    'use strict';

    ng.module('cccheck',[])

    .controller('ccController',CCController)

    .directive( 'creditCardType', CreditCardType);

    CCController.$inject = ['$scope'];

    function CCController($scope) {
        $scope.ccinfo = { type: 'default' };
    }

    CreditCardType.$inject = [];

    function CreditCardType() {
        var directive = {};
        directive.require = 'ngModel';
        directive.restrict = 'A';
        directive.link = linkFn;

        function linkFn(scope, elm, attrs, ctrl){
            ctrl.$parsers.unshift(function(value){
                scope.ccinfo.type =
                    (/^5[1-5]/.test(value)) ? "master"
                        : (/^4/.test(value)) ? "visa"
                        : (/^3[47]/.test(value)) ? "amex"
                        :(/^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/).test(value)? "maestro"
                        : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? "discover"
                        : 'default';
                return value;
            })
        }
        return directive;
    }


})(angular);