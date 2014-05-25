var Browse = Browse || {};
Browse.ViewModels = Browse.ViewModels || {};
Browse.ViewModels.List = Browse.ViewModels.List || {};

Browse.ViewModels.List.ToDoList = function () {
    var self = this;

    self.events = {
        onLoadAsync: $.Deferred(function() {}),
        onMarkAsDone: null,
    };

    self.items = ko.observableArray([]);

    self.add = function(toDoItem) {
        self.items.push(toDoItem);
    }

    self.clickMarkAsDone = function () { }
    self.clickDelete = function() {}
}