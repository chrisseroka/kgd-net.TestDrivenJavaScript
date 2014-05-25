using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TestDrivenJavaScript.Domain.Entities;
using TestDrivenJavaScript.Domain.Repositories;
using TestDrivenJavaScript.Web.Browse.Api.Dto;

namespace TestDrivenJavaScript.Web.Browse.Api
{
    public class ToDoController : ApiController
    {
        private readonly ToDoItemRepository _repository;

        public ToDoController()
        {
            _repository = new ToDoItemRepository(HttpContext.Current.Server.MapPath("~/"));
        }

        public IEnumerable<ToDoDto> GetAll()
        {
            var items = this._repository.GetAll();
            return items.Select(x => new ToDoDto(x.Id, x.Title, x.Priority));
        }

        [HttpPost]
        public int Create(ToDoDto dto)
        {
            var item = new ToDoItem() {Title = dto.Name, Priority = dto.Priority};
            this._repository.Add(item);
            return item.Id;
        }
    }
}
