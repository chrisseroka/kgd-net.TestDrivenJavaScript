using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using TestDrivenJavaScript.Domain.Repositories;
using TestDrivenJavaScript.Web.Browse.Api.Dto;

namespace TestDrivenJavaScript.Web.Browse.Api
{
    public class ToDoController : ApiController
    {
        private readonly ToDoItemRepository _repository;

        public ToDoController()
        {
            _repository = new ToDoItemRepository();
        }

        public IEnumerable<ToDoDto> GetAll()
        {
            var items = this._repository.GetAll();
            return items.Select(x => new ToDoDto(x.Id, x.Title, x.Priority));
        }
    }
}
