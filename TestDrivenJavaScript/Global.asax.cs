using System;
using System.Linq;
using System.Net.Http.Formatting;
using System.Runtime.Serialization;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Http;

namespace TestDrivenJavaScript.Web
{
    public class Global : HttpApplication
    {
        public static void RegisterWebApi(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "{feature}/api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Default", action = "Index", id = UrlParameter.Optional }
            );
        }

        public static void RegisterViewLocation()
        {
            var engine = ViewEngines.Engines.OfType<RazorViewEngine>().Single();
            var newViewLocations = new [] { "~/{1}/{0}.cshtml", "~/{0}.cshtml" };
            engine.ViewLocationFormats = newViewLocations;
            engine.PartialViewLocationFormats = newViewLocations;
        }

        public static void ConfigureFormatter(HttpConfiguration config)
        {
            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());
        }

        void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(RegisterWebApi);
            GlobalConfiguration.Configure(ConfigureFormatter);
            RegisterRoutes(RouteTable.Routes);    
            RegisterViewLocation();
        }
    }
}