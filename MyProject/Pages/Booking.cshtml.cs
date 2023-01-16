using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyProject.Pages
{
    public class BookingModel : PageModel
    {
        private readonly ILogger<BookingModel> _logger;

        public BookingModel(ILogger<BookingModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}