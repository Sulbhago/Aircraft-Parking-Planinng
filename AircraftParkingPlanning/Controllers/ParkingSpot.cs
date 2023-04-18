using AircraftParkingPlanning.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AircraftParkingPlanning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParkingSpotController : ControllerBase
    {

        private readonly FlightDBContext _context;
        public ParkingSpotController(FlightDBContext context)
        {
            _context = context;
        }

        // GET: api/GetParkingSpot
        [HttpGet]
        [Route("GetParkingSpot")]
        public async Task<ActionResult<IEnumerable<ParkingSpot>>> GetParkingSpot()
        {
            return await _context.ParkingSpot.ToListAsync();
        }

         // GET: api/GetParkingSpotByID/1
        [HttpGet("{id}")]
        [Route("GetParkingSpotByID/{id}")]
        public async Task<ActionResult<ParkingSpot>> GetParkingSpotByID(int id)
        {
            var parkingSpot = await _context.ParkingSpot.FindAsync(id);

            if (parkingSpot == null)
            {
                return NotFound();
            }

            return parkingSpot;
        }
    }
}