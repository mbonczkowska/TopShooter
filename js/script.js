(function(){
	'use strict';
		var topScorers = angular.module("topScorers",[]);
		topScorers.controller("nameCtrl", function($scope,$http){
			var req = {     
				  headers: {          
				   'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw' 
				  },
				   url: 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers'
			};

			$http(req).then(function successCallback(response) {
				console.log(response.data.data.topscorers);
			    $scope.topscorers = response.data.data.topscorers;
			});
		});
})();