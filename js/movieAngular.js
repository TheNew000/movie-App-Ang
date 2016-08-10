var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){

    var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=spiderman';
    $scope.imagePath = 'http://image.tmdb.org/t/p/w300/';
    var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
    var apiBaseUrl = 'http://api.themoviedb.org/3/';


    $http({
        method: 'GET',
        url: apiBaseUrl + 'genre/movie/list' + apiKey
    }).then(function successFunction(genreData){
            $scope.genreArray = genreData.data.genres;
            console.dir(genreData.data.genres)
        }, function failureFunction(genreData){
            alert(error);
        }
    );

    var searchType = '';
    $scope.optionChosen = false;

    $scope.searchOption = function(option){
        searchType = option;
        $scope.optionChosen = true;
    }

    $scope.genreSearch = function(id){
        $http({
            method: 'GET',
            url: apiBaseUrl + 'genre/' + id + '/movies' + apiKey
        }).then(function successFunction(genreResults){
            $scope.movieArray = genreResults.data.results;
            // createGenreName(genreResults.data.results.genre_ids);
            }, function failureFunction(genreResults){
                alert(error);
            }
        );
    }

    function createGenreName(arr){
        for (var i = 0; i < arr.length; i++) {
            for (var i = 0; i < $scope.genreArray.length; i++) {
                Things[i]
            }
            if(arr[i] == )
        }
    }

    $scope.getMovieStuff = function(){
        $http({
            method: 'GET',
            url: apiBaseUrl + 'search/' + searchType + apiKey + '&query=' + $scope.userChoice
        }).then(function success(mData){
            console.log($scope.userChoice);
            $scope.movieArray = mData.data.results;
        }, function failure(mData){
            alert(error);
        }
        );

    }

    $scope.sortOption = function(type){
        $http({
            method: 'GET',
            url: apiBaseUrl + 'movie/' + type + apiKey
        }).then(function success(mData){
            $scope.movieArray = mData.data.results;
        }, function failure(mData){
            alert(error);
        }
        );
    }


});
