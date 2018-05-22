﻿define(['app'], function (app) {
    //defining service using factory method
    app.factory('userService', function ($http, utility) {
        var serviceurl = utility.baseAddress + "User/";
        return {
            getUsersList: function () {
                var url = serviceurl;
                return $http.get(url);
            },
            getUser: function (user) {
                var url = serviceurl +  user.UserId;
                return $http.get(url);
            },
            addUser: function (user) {
                var url = serviceurl;
                return $http.post(url, user);
            },
            deleteUser: function (user) {
                var url = serviceurl + user.UserId;
                return $http.delete(url);
            },
            updateUser: function (user) {
                var url = serviceurl + user.UserId;
                return $http.put(url, user);
            }
        };
    });
});