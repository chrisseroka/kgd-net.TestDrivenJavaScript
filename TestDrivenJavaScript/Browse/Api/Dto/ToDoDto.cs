namespace TestDrivenJavaScript.Web.Browse.Api.Dto
{
    public class ToDoDto
    {
        public ToDoDto()
        {   }

        public ToDoDto(int id, string name, string priority)
        {
            this.Id = id;
            this.Name = name;
            this.Priority = priority;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Priority { get; set; }
    }
}