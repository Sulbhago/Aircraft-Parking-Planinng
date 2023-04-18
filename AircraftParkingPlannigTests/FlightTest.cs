using AircraftParkingPlanning.Controllers;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using System.Data.SqlClient;


namespace AircraftParkingPlannigTests
{
    public class FlightTest
    {
        // Arrange
        string connectionString = "Server=DESKTOP-I22771H; Database=FlightDB; Trusted_Connection=True; MultipleActiveResultSets=True;TrustServerCertificate=true";

        [Fact]
        public void TestRetrieveFlightDataFromDatabase()
        {

            string query = "SELECT * FROM Flight";

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
        public void TestSaveFlightParkingDataToDatabase()
        {

            string insertQuery = "INSERT INTO Flight (Aircraftid, ParkingSpotid, StartDateTime, EndDateTime) VALUES (1, 2, '2023-04-10 21:30:00.0000000', '2023-04-10 22:00:00.0000000')";

            // Act
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(insertQuery, connection))
                {
                    int rowsAffected = command.ExecuteNonQuery();

                    // Assert
                    Assert.Equal(1, rowsAffected);
                }
            }
        }
    }
}