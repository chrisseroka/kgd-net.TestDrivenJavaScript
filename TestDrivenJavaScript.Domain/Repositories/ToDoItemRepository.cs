using System;
using System.Linq;
using System.Collections.Generic;
using System.Xml.Serialization;
using TestDrivenJavaScript.Domain.Entities;

namespace TestDrivenJavaScript.Domain.Repositories
{
    public class ToDoItemRepository
    {
        private const string FileName = "ToDoItemRepository.txt";

        private XmlSerializer serializer;
        public XmlSerializer Serializer {
            get {
                return this.serializer ??
                       (this.serializer = new System.Xml.Serialization.XmlSerializer(typeof (ToDoItem[])));
            }
        }

        public IEnumerable<ToDoItem> GetAll()
        {
            if (System.IO.File.Exists(FileName) == false)
            {
                return Enumerable.Empty<ToDoItem>();
            }

            using (var inputStream = System.IO.File.OpenRead(FileName))
            {
                return (ToDoItem[])this.serializer.Deserialize(inputStream);
            }
        }

        public void SaveAll(IEnumerable<ToDoItem> items)
        {
            using (var inputStream = System.IO.File.OpenWrite(FileName))
            {
                this.serializer.Serialize(inputStream, items);
            }
        }

        public void Add(ToDoItem item)
        {
            var items = this.GetAll();
            var newItems = items.Concat(new[] {item});
            this.SaveAll(newItems);
        }

        public void Save(ToDoItem item)
        {
            var items = this.GetAll();
            var newItems = items.Where(x => x.Id != item.Id).Concat(new[] {item});
            this.SaveAll(newItems);
        }

        public void Remove(ToDoItem item)
        {
            var items = this.GetAll();
            var newItems = items.Where(x => x.Id != item.Id);
            this.SaveAll(newItems);
        }
    }
}