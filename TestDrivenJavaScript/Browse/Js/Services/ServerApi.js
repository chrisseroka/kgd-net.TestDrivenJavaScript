var Browse = Browse || {};
    Browse.Services = Browse.Services || {};

Browse.Services.ServerApi = function() {
    var self = this;

    self.getAll = function() {
        return $.get("/Browse/Api/ToDo/GetAll");
    }
}