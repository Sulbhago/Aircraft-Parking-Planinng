using AircraftParkingPlanning.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AircraftParkingPlanning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParkingAreasController : ControllerBase
    {

        private readonly FlightDBContext _context;
        public ParkingAreasController(FlightDBContext context)
        {
            _context = context;
        }

        // GET: api/ParkingArea
        [HttpGet]
        [Route("GetParkingArea")]
        public async Task<ActionResult<IEnumerable<ParkingArea>>> GetParkingArea()
        {
            return await _context.ParkingArea.ToListAsync();
        }
    }
}