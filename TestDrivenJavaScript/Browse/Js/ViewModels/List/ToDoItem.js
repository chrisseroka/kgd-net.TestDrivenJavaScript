var Browse = Browse || {};
Browse.ViewModels = Browse.ViewModels || {};
Browse.ViewModels.List = Browse.ViewModels.List || {};

Browse.ViewModels.List.ToDoItem = function(name, priority, id) {
    var self = this;
    self.isSelected = ko.observable(false);
    self.id = id;
    self.title = ko.observable(name);
    self.priority = ko.observable(priority || "Normal");
    self.isDone = ko.observable(false);
    self.createdOn = ko.observable(new Date().toLocaleString());
}

Browse.ViewModels.List.ToDoItem.fromDto = function(serverDto) {
    return new Browse.ViewModels.List.ToDoItem(
        serverDto.Name,
        serverDto.Priority,
        serverDto.Id);
}

Browse.ViewModels.List.ToDoItem.prototype.toDto = function () {
    return {
        Name: this.title(),
        Priority: this.priority(),
        Id: this.id
    }
}