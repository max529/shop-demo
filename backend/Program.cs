using AventusSharp.Tools;
using Microsoft.AspNetCore.StaticFiles;
using ZstdSharp.Unsafe;

namespace Shop;

public class Program
{
    public static void Main(string[] args)
    {
        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
        builder.Services
            .AddDistributedMemoryCache()
            .AddCors(o => o.AddPolicy("corsPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }))
            .AddSession(options =>
                {
                    options.IdleTimeout = TimeSpan.FromMinutes(30);
                    options.Cookie.HttpOnly = true;
                    options.Cookie.IsEssential = true;
                });
        WebApplication app = builder.Build();

        app
            .UseHsts()
            .UseCors("corsPolicy")
            .UseSession()
            .UseCookiePolicy()
            .UseWebSockets(new WebSocketOptions()
            {
                KeepAliveInterval = TimeSpan.FromSeconds(120),
            })
            .UseDefaultFiles();

        FileExtensionContentTypeProvider provider = new FileExtensionContentTypeProvider();
        provider.Mappings[".avt"] = "text/plain";
        app.UseStaticFiles(new StaticFileOptions
        {
            ContentTypeProvider = provider
        });


        app.Lifetime.ApplicationStopping.Register(Aventus.Stop);

        VoidWithError initResult = Aventus.Init(app);
        if (initResult.Success)
            app.Run();
        else
            initResult.Print();

    }
}
