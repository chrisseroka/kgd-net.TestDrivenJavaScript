var Browse = Browse || {};
Browse.ViewModels = Browse.ViewModels || {};

Browse.ViewModels.Main = function() {
    var self = this;
    self.toDoList = new Browse.ViewModels.ToDoList(
        new Browse.Services.ServerApi()
    );

    self.toDoList.load();
}