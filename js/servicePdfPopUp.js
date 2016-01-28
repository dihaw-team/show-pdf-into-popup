(function ()
{

'use.strict';

angular
    .module('myApp')
    .factory('pdfPopService', pdfPopService);


    function pdfPopService($http,$q,$log,ngProgressFactory) {


		var myFactory = {
 				getPdfStream : getPdfStream
	    };

	    return myFactory;



	    /*
	    Function implementation
	    */
		function getPdfStream($scope){
			$scope.progressbar = ngProgressFactory.createInstance();
            $scope.progressbar.start();			
		 	
		 	var deferred = $q.defer();
			$http.get('json/content.json').
			    success(function(data, status, headers, config) {
			      deferred.resolve(data);	
			    }).
			    error(function(data, status, headers, config) {
			     $log.info("ERROR files");
			    });		 	

		    return deferred.promise;
		}   



    }//end pdfPopService

})();   