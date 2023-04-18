# 1. SQL server database
    In this application SQL server database used to fetch and store the data.

# 2. Replace database connection string to yours

 connection String: "Server= your sql server name; Database=FlightDB; Trusted_Connection=True; MultipleActiveResultSets=True;TrustServerCertificate=true"

 # 3. used entity framework Code-First approach to create database
    run command  to create database
    # 1. dotnet ef migrations add initial
    # 2. dotnet ef database update

# 4. To run backend enter bellow cmd(I am using visual studio code editor)
        dotnet run
# 5. To run test files enter 
        dotnet test
     