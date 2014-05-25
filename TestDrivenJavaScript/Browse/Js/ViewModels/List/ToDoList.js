/// <reference path="../../../../_External/jquery-1.10.2.min.js" />
/// <reference path="../../../../_External/knockout-3.1.0.js" />
/// <reference path="ToDoItem.js" />
var Browse = Browse || {};
Browse.ViewModels = Browse.ViewModels || {};
Browse.ViewModels.List = Browse.ViewModels.List || {};

Browse.ViewModels.List.ToDoList = function() {
    var self = this;

    self.events = {
        onLoadAsync: $.Deferred(function() {}),
        onMarkAsDone: null,
    };

    self.items = ko.observableArray([]);

    self.add = function(toDoItem) {
        self.items.push(toDoItem);
    };
    var selected = ko.observableArray();
    self.select = function(toDoItem) {
        if (selected().indexOf(toDoItem) < 0) {
            selected.push(toDoItem);
        }
    };
    self.deleteSelected = function() {
        var itemsToDelete = self.selected();
        itemsToDelete.forEach(function(item) {
            self.items.remove(item);
        });
    };
    self.selected = ko.computed(function() {
        return selected();
    });
};