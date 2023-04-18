using AircraftParkingPlanning.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AircraftParkingPlanning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AircraftController : ControllerBase
    {

        private readonly FlightDBContext _context;
        public AircraftController(FlightDBContext context)
        {
            _context = context;
        }

        // GET: api/GetAircraft
        [HttpGet]
        [Route("GetAircraft")]
        public async Task<ActionResult<IEnumerable<Aircraft>>> GetAircraft()
        {
            return await _context.Aircraft.ToListAsync();
        }

        // GET: api/GetAircraftByID/1
        [HttpGet("{id}")]
        [Route("GetAircraftByID/{id}")]
        public async Task<ActionResult<Aircraft>> GetAircraftByID(int id)
        {
            var aircraft = await _context.Aircraft.FindAsync(id);

            if (aircraft == null)
            {
                return NotFound();
            }

            return aircraft;
        }
    }
}