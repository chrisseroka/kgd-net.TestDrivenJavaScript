var Browse = Browse || {};
Browse.ViewModels = Browse.ViewModels || {};

Browse.ViewModels.ToDoList = function(serverApi) {
    var self = this;

    self.items = ko.observableArray([]);

    self.load = function() {
        $.when(serverApi.getAll()).done(function(result) {
            var koItems = ko.utils.arrayMap(result, function(item) {
                return new Browse.ViewModels.ToDoItem(item);
            });
            self.items(koItems);
        });
    }
}