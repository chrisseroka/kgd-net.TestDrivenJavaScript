var Browse = Browse || {};
    Browse.Services = Browse.Services || {};

Browse.Services.ServerApi = function() {
    var self = this;

    self.getAll = function() {
        return $.get("/Browse/Api/ToDo/GetAll");
    }

    self.create = function (toDo) {
        var result = $.ajax({
            type: "POST",
            url: "/Browse/Api/ToDo/Create",
            data: JSON.stringify(toDo.toDto()),
            contentType: 'application/json',
        });
        result.then(function(response) {
            toDo.id = response;
        });
        return result;
    }
}