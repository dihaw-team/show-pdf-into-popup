
/**

*/

(function ()
{
 'use strict';

  angular.module('myApp', ['ngProgress']).controller('PdfController', PdfController);


    function PdfController($scope,$log,pdfPopService){

      $log.info('Welcome to Pop up pdf');
      
      $scope.title = 'Some Title';
      $scope.showPdf = showPdf;

	      function showPdf(){
	         pdfPopService.getPdfStream($scope).then
	        (
	        	function(backData){
	        		$log.info("Back data is "+JSON.stringify(backData, null, '    '));
	        		$scope.pathToPdf = backData.pdfLocation;
	        		eventFire(document.getElementById('picToClick'), 'click');
	        	}
	      	);
	      }


       //this function is used to fire click event
		function eventFire(el, etype){
		  if (el.fireEvent) {
		    el.fireEvent('on' + etype);
		  } else {
		    var evObj = document.createEvent('Events');
		    evObj.initEvent(etype, true, false);
		    el.dispatchEvent(evObj);
		  }
		}




      }//end function Pdf Controller


})();