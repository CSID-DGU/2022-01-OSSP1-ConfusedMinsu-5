package dbTest;

import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.DriverManager;

public class MySQLConnectionTest {
    // MySQL Connector 의 클래스. DB 연결 드라이버 정의
    private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    // DB 경로
    private static final String URL = "jdbc:mysql://minsuisconfused.cijinkootmoi.ap-northeast-2.rds.amazonaws.com:3306/Dongguk?serverTimezone=UTC&characterEncoding=UTF-8";
    private static final String USER = "minsu_05";
    private static final String PASSWORD = "rlaalstn1!";

    @Test
    public void testConnection() throws Exception {
        // DBMS에게 DB 연결 드라이버의 위치를 알려주기 위한 메소드
        Class.forName(DRIVER);
        try {
            Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println(connection);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
