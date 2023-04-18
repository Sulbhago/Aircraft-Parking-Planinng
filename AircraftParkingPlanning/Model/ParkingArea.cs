using System.ComponentModel.DataAnnotations;

namespace AircraftParkingPlanning.Model
{
    public class ParkingArea
    {
        [Key]
        public int id { get; set; }
        public string Name { get; set; }
        
    }
}
