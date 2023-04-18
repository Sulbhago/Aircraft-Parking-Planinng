using System.ComponentModel.DataAnnotations;

namespace AircraftParkingPlanning.Model
{
    public class ParkingSpot
    {

        [Key]
        public int id { get; set; }
        public string Name { get; set; }
        public double FootprintSqm { get; set; }
        public int ParkingAreaid { get; set; }

    }
}
