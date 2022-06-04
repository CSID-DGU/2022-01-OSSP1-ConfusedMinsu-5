package M.S.C.minsu.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

@Configuration
@PropertySources({
    @PropertySource(value = "file:c:/MinsuSecure/config.properties", ignoreResourceNotFound = true),
    @PropertySource(value = "file:${user.home}/env/config.properties", ignoreResourceNotFound = true)
})

public class GlobalPropertySource {

  @Value("${spring.datasource.driver-class-name}")
  private String driverClassName;

  @Value("${spring.datasource.url}")
  private String url;

  @Value("${spring.datasource.username}")
  private String username;

  @Value("${spring.datasource.password}")
  private String password;

  public String getDriverClassName() {
    return driverClassName;
  }

  public String getUrl() {
    return url;
  }

  public String getUsername() {
    return username;
  }

  public String getPassword() {
    return password;
  }
}
