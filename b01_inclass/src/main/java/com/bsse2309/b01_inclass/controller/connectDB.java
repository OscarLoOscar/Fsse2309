package com.bsse2309.b01_inclass.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class connectDB {
  public static void main(String[] args) throws SQLException {
    String connectionString =
        "jdbc:mysql://venturenixlab-fsse.cjso0ornj9if.ap-southeast-1.rds.amazonaws.com/employees";
    String username = "quiz_employee";
    String password = "password";
    Connection connection =
        DriverManager.getConnection(connectionString, username, password);

    Statement statement = connection.createStatement();
    String position = "Manager"; // User input
    ResultSet resultSet = statement.executeQuery(
        "SELECT * " + "FROM Employee " + "WHERE " + "position LIKE '%"
            + position + "%' AND " + "department_id = 'HR'");

            System.out.println(resultSet);
  }
}
