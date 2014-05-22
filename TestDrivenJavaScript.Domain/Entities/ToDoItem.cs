using System;

namespace TestDrivenJavaScript.Domain.Entities
{
    public class ToDoItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Priority { get; set; }
        public bool IsDone { get; set; }
    }
}