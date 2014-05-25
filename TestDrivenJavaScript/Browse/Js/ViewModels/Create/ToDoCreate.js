var Browse = Browse || {};
Browse.ViewModels = Browse.ViewModels || {};
Browse.ViewModels.Create = Browse.ViewModels.Create || {};

Browse.ViewModels.Create.ToDoCreate = function (events) {
    var self = this;
    events = events || {
        onCreate: null
    };

    self.name = ko.observable();
    self.priority = ko.observable();
    self.clickCreate = function() {
        if (events.onCreate != null && typeof events.onCreate === "function") {
            events.onCreate(self.name(), self.priority());
        }
    }
}