using AircraftParkingPlanning.Controllers;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using System.Data.SqlClient;


namespace AircraftParkingPlannigTests
{
    public class AircraftTest
    {
        // Arrange
        string connectionString = "Server=DESKTOP-I22771H; Database=FlightDB; Trusted_Connection=True; MultipleActiveResultSets=True;TrustServerCertificate=true";

        [Fact]
        public void TestRetrieveAircraftDataFromDatabase()
        {

            string query = "SELECT * FROM Aircraft";

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