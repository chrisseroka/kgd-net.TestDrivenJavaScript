/// <reference path="../../About/Js/ViewModels/Main.js" />
/// <reference path="../../Browse/Js/ViewModels/Main.js" />
/// <reference path="../../_External/knockout-3.1.0.js" />

var Shared = Shared || {};

Shared.MainViewModel = function () {
    var self = this;

    self.browseViewModel = new Browse.ViewModels.Main(
        new Browse.Services.ServerApi()
        );
    self.aboutViewModel = new About.ViewModels.Main();
    self.selectedView = ko.observable(self.browseViewModel);

    self.select = function (value) {
        return function() {
            self.selectedView(value);
        }
    }
}