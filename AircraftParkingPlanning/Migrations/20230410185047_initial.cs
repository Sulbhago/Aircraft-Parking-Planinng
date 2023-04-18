using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace AircraftParkingPlanning.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Aircraft",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RegistrationCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FootprintSqm = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aircraft", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Flight",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Aircraftid = table.Column<int>(type: "int", nullable: false),
                    ParkingSpotid = table.Column<int>(type: "int", nullable: false),
                    StartDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flight", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ParkingArea",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParkingArea", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ParkingSpot",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FootprintSqm = table.Column<double>(type: "float", nullable: false),
                    ParkingAreaid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParkingSpot", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "Aircraft",
                columns: new[] { "id", "FootprintSqm", "RegistrationCode" },
                values: new object[,]
                {
                    { 1, 350.0, "PHNXT" },
                    { 2, 600.0, "9HLTT" },
                    { 3, 420.0, "YUPRJ" },
                    { 4, 1000.0, "N123T" },
                    { 5, 780.0, "NCDFT" },
                    { 6, 490.0, "TTPB" },
                    { 7, 1000.0, "ZZZZ" },
                    { 8, 1000.0, "ERZ1" },
                    { 9, 3000.0, "ERZ2" }
                });

            migrationBuilder.InsertData(
                table: "ParkingArea",
                columns: new[] { "id", "Name" },
                values: new object[,]
                {
                    { 1, "North" },
                    { 2, "South" }
                });

            migrationBuilder.InsertData(
                table: "ParkingSpot",
                columns: new[] { "id", "FootprintSqm", "Name", "ParkingAreaid" },
                values: new object[,]
                {
                    { 1, 700.0, "N1", 1 },
                    { 2, 800.0, "N2", 1 },
                    { 3, 1400.0, "N3", 1 },
                    { 4, 1000.0, "N4", 1 },
                    { 5, 1000.0, "N5", 1 },
                    { 6, 1500.0, "N6", 1 },
                    { 7, 1000.0, "S1", 2 },
                    { 8, 800.0, "S2", 2 },
                    { 9, 1400.0, "S3", 2 },
                    { 10, 1000.0, "S4", 2 },
                    { 11, 1000.0, "S5", 2 },
                    { 12, 1500.0, "S6", 2 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Aircraft");

            migrationBuilder.DropTable(
                name: "Flight");

            migrationBuilder.DropTable(
                name: "ParkingArea");

            migrationBuilder.DropTable(
                name: "ParkingSpot");
        }
    }
}
