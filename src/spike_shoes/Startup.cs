using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(spike_shoes.Startup))]
namespace spike_shoes
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
