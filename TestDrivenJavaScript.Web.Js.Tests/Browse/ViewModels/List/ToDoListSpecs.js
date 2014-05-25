/// <reference path="../../../../testdrivenjavascript/browse/js/viewmodels/list/todolist.js" />

describe("Browse module acceptance tests", function() {

    describe("Given a list of todo items", function() {
        var toDoList;
        beforeEach(function() {
            toDoList = new Browse.ViewModels.List.ToDoList();
            toDoList.add(new Browse.ViewModels.List.ToDoItem("sample item 1"));
            toDoList.add(new Browse.ViewModels.List.ToDoItem("sample item 2"));
            toDoList.add(new Browse.ViewModels.List.ToDoItem("sample item 3"));
        });
        describe("and selecting todo item", function() {
            var selectedItem;
            beforeEach(function() {
                selectedItem = toDoList.items()[0];
                toDoList.select(selectedItem);
            });
            describe("when performing 'Delete' action", function() {
                beforeEach(function() {
                    toDoList.deleteSelected();
                });
                it("should delete selected item", function() {
                    expect(toDoList.items().indexOf(selectedItem)).toBeLessThan(0);
                });
            });
        });
    });
});