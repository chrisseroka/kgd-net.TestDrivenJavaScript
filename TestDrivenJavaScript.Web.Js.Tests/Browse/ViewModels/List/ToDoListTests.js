/// <reference path="../../../../testdrivenjavascript/browse/js/viewmodels/list/todolist.js" />

describe("Browse module tests", function() {

    describe("ToDoList", function() {
        var toDoList;
        beforeEach(function() {
            toDoList = new Browse.ViewModels.List.ToDoList();
        });
        describe("selected", function() {
            beforeEach(function() {
                toDoList.add(new Browse.ViewModels.List.ToDoItem("todo1"));
                toDoList.add(new Browse.ViewModels.List.ToDoItem("todo2"));
            });
            it("when selecting it should be possible to get selected elements", function() {
                //ARRANGE
                toDoList.select(toDoList.items()[0]);

                //ACT
                var selected = toDoList.selected();

                //ASSERT
                expect(selected.indexOf(toDoList.items()[0])).toBeGreaterThan(-1);
                expect(selected.indexOf(toDoList.items()[1])).toBeLessThan(0);
            });
        });
    });
});