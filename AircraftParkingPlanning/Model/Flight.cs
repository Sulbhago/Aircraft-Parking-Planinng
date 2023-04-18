using System.ComponentModel.DataAnnotations;

namespace AircraftParkingPlanning.Model
{
    public class Flight
    {
        [Key]
        public int id { get; set; }   
        public int Aircraftid { get; set; }
        public int ParkingSpotid { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
    }
}
