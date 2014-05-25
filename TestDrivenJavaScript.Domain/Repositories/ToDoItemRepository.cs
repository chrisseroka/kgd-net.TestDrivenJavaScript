using System;
using System.Linq;
using System.Collections.Generic;
using System.Xml.Serialization;
using TestDrivenJavaScript.Domain.Entities;

namespace TestDrivenJavaScript.Domain.Repositories
{
    public class ToDoItemRepository
    {
        private readonly string _basePath;

        public ToDoItemRepository(string basePath)
        {
            _basePath = basePath;
        }

        private XmlSerializer serializer;
        public XmlSerializer Serializer {
            get {
                return this.serializer ??
                       (this.serializer = new System.Xml.Serialization.XmlSerializer(typeof (ToDoItem[])));
            }
        }

        private string GetFilePath()
        {
            return System.IO.Path.Combine(this._basePath, "ToDoItemRepository.xml");
        }

        private int GenerateId()
        {
            return this.GetAll().DefaultIfEmpty().Max(x => x != null ? x.Id : 0) + 1;
        }

        public IEnumerable<ToDoItem> GetAll()
        {
            if (System.IO.File.Exists(this.GetFilePath()) == false)
            {
                return Enumerable.Empty<ToDoItem>();
            }

            using (var inputStream = System.IO.File.OpenRead(this.GetFilePath()))
            {
                return (ToDoItem[])this.Serializer.Deserialize(inputStream);
            }
        }

        public void SaveAll(ToDoItem[] items)
        {
            using (var inputStream = System.IO.File.OpenWrite(this.GetFilePath()))
            {
                this.Serializer.Serialize(inputStream, items);
            }
        }

        public int Add(ToDoItem item)
        {
            item.Id = this.GenerateId();
            var items = this.GetAll();
            var newItems = items.Concat(new[] {item});
            this.SaveAll(newItems.ToArray());
            return item.Id;
        }

        public void Save(ToDoItem item)
        {
            var items = this.GetAll();
            var newItems = items.Where(x => x.Id != item.Id).Concat(new[] {item});
            this.SaveAll(newItems.ToArray());
        }

        public void Remove(ToDoItem item)
        {
            var items = this.GetAll();
            var newItems = items.Where(x => x.Id != item.Id);
            this.SaveAll(newItems.ToArray());
        }
    }
}