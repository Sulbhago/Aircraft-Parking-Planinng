using System.ComponentModel.DataAnnotations;

namespace AircraftParkingPlanning.Model
{
    public class Aircraft
    {
        [Key]
        public int id { get; set; }
        public string RegistrationCode { get; set; }
        public double FootprintSqm { get; set; }

    }
}
