using AircraftParkingPlanning.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AircraftParkingPlanning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FlightsController : ControllerBase
    {
        private readonly FlightDBContext _context;
        public FlightsController(FlightDBContext context)
        {
            _context = context;
        }

        // GET: api/GetFlight
        [HttpGet]
        [Route("GetFlight")]
        public async Task<ActionResult<IEnumerable<Flight>>> GetFlight()
        {
            return await _context.Flight.ToListAsync();
        }

        // POST: api/AddFlight
        [HttpPost]
        [Route("AddFlight")]
        public async Task<Flight> AddFlight(Flight objFlight)
        {
            _context.Flight.Add(objFlight);
            await _context.SaveChangesAsync();
            return objFlight;
        }
    }
}