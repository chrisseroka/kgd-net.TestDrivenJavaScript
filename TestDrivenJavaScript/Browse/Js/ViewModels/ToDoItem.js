var Browse = Browse || {};
Browse.ViewModels = Browse.ViewModels || {};

Browse.ViewModels.ToDoItem = function(serverDto) {
    var self = this;
    self.isSelected = ko.observable(false);
    self.id = serverDto.Id;
    self.name = ko.observable(serverDto.Name);
    self.priority = ko.observable(serverDto.Priority);
    self.isDone = ko.observable(serverDto.IsDone);
}