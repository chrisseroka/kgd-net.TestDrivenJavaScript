var Browse = Browse || {};
Browse.ViewModels = Browse.ViewModels || {};

Browse.ViewModels.Main = function(serverApi) {
    var self = this;

    self.toDoCreate = new Browse.ViewModels.Create.ToDoCreate({
        onCreate: function(name, priority) {
            var toDo = new Browse.ViewModels.List.ToDoItem(name, priority);
            self.toDoList.add(toDo);
            serverApi.create(toDo);
        }
    });

    self.toDoList = new Browse.ViewModels.List.ToDoList();

    self.loadItems = function () {
        $.when(serverApi.getAll()).done(function (result) {
            var koItems = ko.utils.arrayMap(result, function (item) {
                return Browse.ViewModels.List.ToDoItem.fromDto(item);
            });
            self.toDoList.items(koItems);
        });
    }
    self.loadItems();
}