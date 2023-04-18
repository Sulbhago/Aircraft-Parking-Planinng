using AircraftParkingPlanning.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AircraftParkingPlanning.Model
{
    public class FlightDBContext : DbContext
    {
        public FlightDBContext(DbContextOptions<FlightDBContext> options) : base(options)
        {

        }

        public DbSet<Flight> Flight { get; set; }
        public DbSet<Aircraft> Aircraft { get; set; }
        public DbSet<ParkingArea> ParkingArea { get; set; }
        public DbSet<ParkingSpot> ParkingSpot { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ParkingArea>(entity =>
           {
               entity.ToTable("ParkingArea");
           });

            modelBuilder.Entity<ParkingArea>().HasData(
                new ParkingArea { id = 1, Name = "North" },
                new ParkingArea { id = 2, Name = "South" }
            );

            modelBuilder.Entity<ParkingSpot>(entity =>
          {
              entity.ToTable("ParkingSpot");
          });

            modelBuilder.Entity<ParkingSpot>().HasData(
                new ParkingSpot { id = 1, Name = "N1", FootprintSqm = 700, ParkingAreaid = 1 },
                new ParkingSpot { id = 2, Name = "N2", FootprintSqm = 800, ParkingAreaid = 1 },
                new ParkingSpot { id = 3, Name = "N3", FootprintSqm = 1400, ParkingAreaid = 1 },
                new ParkingSpot { id = 4, Name = "N4", FootprintSqm = 1000, ParkingAreaid = 1 },
                new ParkingSpot { id = 5, Name = "N5", FootprintSqm = 1000, ParkingAreaid = 1 },
                new ParkingSpot { id = 6, Name = "N6", FootprintSqm = 1500, ParkingAreaid = 1 },
                new ParkingSpot { id = 7, Name = "S1", FootprintSqm = 1000, ParkingAreaid = 2 },
                new ParkingSpot { id = 8, Name = "S2", FootprintSqm = 800, ParkingAreaid = 2 },
                new ParkingSpot { id = 9, Name = "S3", FootprintSqm = 1400, ParkingAreaid = 2 },
                new ParkingSpot { id = 10, Name = "S4", FootprintSqm = 1000, ParkingAreaid = 2 },
                new ParkingSpot { id = 11, Name = "S5", FootprintSqm = 1000, ParkingAreaid = 2 },
                new ParkingSpot { id = 12, Name = "S6", FootprintSqm = 1500, ParkingAreaid = 2 }
            );

            modelBuilder.Entity<Aircraft>(entity =>
          {
              entity.ToTable("Aircraft");
          });

            modelBuilder.Entity<Aircraft>().HasData(
                 new Aircraft { id = 1, RegistrationCode = "PHNXT", FootprintSqm = 350 },
                 new Aircraft { id = 2, RegistrationCode = "9HLTT", FootprintSqm = 600 },
                 new Aircraft { id = 3, RegistrationCode = "YUPRJ", FootprintSqm = 420 },
                 new Aircraft { id = 4, RegistrationCode = "N123T", FootprintSqm = 1000 },
                 new Aircraft { id = 5, RegistrationCode = "NCDFT", FootprintSqm = 780 },
                 new Aircraft { id = 6, RegistrationCode = "TTPB", FootprintSqm = 490 },
                 new Aircraft { id = 7, RegistrationCode = "ZZZZ", FootprintSqm = 1000 },
                 new Aircraft { id = 8, RegistrationCode = "ERZ1", FootprintSqm = 1000 },
                 new Aircraft { id = 9, RegistrationCode = "ERZ2", FootprintSqm = 3000 }
            );

        }

    }

}
