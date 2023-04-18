using AircraftParkingPlanning.Controllers;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using System.Data.SqlClient;


namespace AircraftParkingPlannigTests
{
    public class ParkingSpotTest
    {
        // Arrange
        string connectionString = "Server=DESKTOP-I22771H; Database=FlightDB; Trusted_Connection=True; MultipleActiveResultSets=True;TrustServerCertificate=true";
      
        [Fact]
        public void TestRetrieveParkingSpotDataFromDatabase()
        {
            string query = "SELECT * FROM ParkingSpot";
            // Act
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        // Assert
                        Assert.True(reader.HasRows);
                    }
                }
            }
        }

                [Fact]
        public void TestRetrieveParkingAreaDataFromDatabase()
        {
            string query = "SELECT * FROM ParkingArea";
            // Act
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        // Assert
                        Assert.True(reader.HasRows);
                    }
                }
            }
        }
    }
}