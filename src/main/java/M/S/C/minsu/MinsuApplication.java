package M.S.C.minsu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;

@SpringBootApplication
public class MinsuApplication {

	public static void main(String[] args) {
		try (ConfigurableApplicationContext ctx =SpringApplication.run(MinsuApplication.class, args)){
			MinsuApplication m = ctx.getBean(MinsuApplication.class);
			m.method();
		}
	}

	@Autowired
	private JdbcTemplate jdbc;

	public void method() {
		List<Map<String, Object>> list = this.jdbc.queryForList("SELECT * FROM LECTURE");
		list.forEach(System.out::println);
	}

}
