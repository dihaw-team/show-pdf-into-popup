
/**

*/

(function ()
{
 'use strict';

  angular.module('myApp', []).controller('PdfController', PdfController);


    function PdfController($scope,$log){

      $log.info('Welcome to Pop up pdf');
      
      $scope.title = 'Some Title';
      $scope.pathToPdf = 'http://192.168.1.3:8080/ma-gpro-logistique-rest/report/inventaire?client=1&metrageA=&metrageDu=&nombreColieA=&emplacement=&nombreColieDu=&entrepot=&dateEtat=2016-01-20&designationQuiContient=&fini=&orderBy=&type=pdf';



      }//end function Pdf Controller


})();