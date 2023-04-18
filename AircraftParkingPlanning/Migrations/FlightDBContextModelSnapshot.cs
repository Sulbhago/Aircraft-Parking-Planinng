﻿// <auto-generated />
using System;
using AircraftParkingPlanning.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AircraftParkingPlanning.Migrations
{
    [DbContext(typeof(FlightDBContext))]
    partial class FlightDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("AircraftParkingPlanning.Model.Aircraft", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<double>("FootprintSqm")
                        .HasColumnType("float");

                    b.Property<string>("RegistrationCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Aircraft", (string)null);

                    b.HasData(
                        new
                        {
                            id = 1,
                            FootprintSqm = 350.0,
                            RegistrationCode = "PHNXT"
                        },
                        new
                        {
                            id = 2,
                            FootprintSqm = 600.0,
                            RegistrationCode = "9HLTT"
                        },
                        new
                        {
                            id = 3,
                            FootprintSqm = 420.0,
                            RegistrationCode = "YUPRJ"
                        },
                        new
                        {
                            id = 4,
                            FootprintSqm = 1000.0,
                            RegistrationCode = "N123T"
                        },
                        new
                        {
                            id = 5,
                            FootprintSqm = 780.0,
                            RegistrationCode = "NCDFT"
                        },
                        new
                        {
                            id = 6,
                            FootprintSqm = 490.0,
                            RegistrationCode = "TTPB"
                        },
                        new
                        {
                            id = 7,
                            FootprintSqm = 1000.0,
                            RegistrationCode = "ZZZZ"
                        },
                        new
                        {
                            id = 8,
                            FootprintSqm = 1000.0,
                            RegistrationCode = "ERZ1"
                        },
                        new
                        {
                            id = 9,
                            FootprintSqm = 3000.0,
                            RegistrationCode = "ERZ2"
                        });
                });

            modelBuilder.Entity("AircraftParkingPlanning.Model.Flight", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<int>("Aircraftid")
                        .HasColumnType("int");

                    b.Property<DateTime>("EndDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("ParkingSpotid")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartDateTime")
                        .HasColumnType("datetime2");

                    b.HasKey("id");

                    b.ToTable("Flight");
                });

            modelBuilder.Entity("AircraftParkingPlanning.Model.ParkingArea", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("ParkingArea", (string)null);

                    b.HasData(
                        new
                        {
                            id = 1,
                            Name = "North"
                        },
                        new
                        {
                            id = 2,
                            Name = "South"
                        });
                });

            modelBuilder.Entity("AircraftParkingPlanning.Model.ParkingSpot", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<double>("FootprintSqm")
                        .HasColumnType("float");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ParkingAreaid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("ParkingSpot", (string)null);

                    b.HasData(
                        new
                        {
                            id = 1,
                            FootprintSqm = 700.0,
                            Name = "N1",
                            ParkingAreaid = 1
                        },
                        new
                        {
                            id = 2,
                            FootprintSqm = 800.0,
                            Name = "N2",
                            ParkingAreaid = 1
                        },
                        new
                        {
                            id = 3,
                            FootprintSqm = 1400.0,
                            Name = "N3",
                            ParkingAreaid = 1
                        },
                        new
                        {
                            id = 4,
                            FootprintSqm = 1000.0,
                            Name = "N4",
                            ParkingAreaid = 1
                        },
                        new
                        {
                            id = 5,
                            FootprintSqm = 1000.0,
                            Name = "N5",
                            ParkingAreaid = 1
                        },
                        new
                        {
                            id = 6,
                            FootprintSqm = 1500.0,
                            Name = "N6",
                            ParkingAreaid = 1
                        },
                        new
                        {
                            id = 7,
                            FootprintSqm = 1000.0,
                            Name = "S1",
                            ParkingAreaid = 2
                        },
                        new
                        {
                            id = 8,
                            FootprintSqm = 800.0,
                            Name = "S2",
                            ParkingAreaid = 2
                        },
                        new
                        {
                            id = 9,
                            FootprintSqm = 1400.0,
                            Name = "S3",
                            ParkingAreaid = 2
                        },
                        new
                        {
                            id = 10,
                            FootprintSqm = 1000.0,
                            Name = "S4",
                            ParkingAreaid = 2
                        },
                        new
                        {
                            id = 11,
                            FootprintSqm = 1000.0,
                            Name = "S5",
                            ParkingAreaid = 2
                        },
                        new
                        {
                            id = 12,
                            FootprintSqm = 1500.0,
                            Name = "S6",
                            ParkingAreaid = 2
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
