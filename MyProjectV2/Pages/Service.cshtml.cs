using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace MyProject.Pages
{
    public class ServiceModel : PageModel
    {
        private readonly ILogger<ServiceModel> _logger;

        public ServiceModel(ILogger<ServiceModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}