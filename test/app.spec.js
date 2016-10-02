describe('creditcardDirective', function() {

    var element,
     scope,
    compiledElement,
        html;

    beforeEach(function() {
        module('cccheck');
        html='<credit-card-type  ng-model="formData.ccnumber"></credit-card-type>';
        // Create a new dependency injector using the 'cccheck' module

        inject(function($rootScope, $compile) {
            // Get a new scope
            scope = $rootScope.$new();
            scope.ccinfo={};
            scope.formData={ccnumber:"4622715351868171"};
            // Compile some HTML that uses the directive
            compiledElement = $compile(html)(scope);
            scope.$digest();
        });
    });

    it('credit card types', function() {
        expect(compiledElement.scope().formData.ccnumber).toBe("4622715351868171")
       });
});