package com.dsd.dsdpdcoaching.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.core.GrantedAuthorityDefaults;

import com.dsd.dsdpdcoaching.service.LoginService;

import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
    @Autowired
    LoginService loginService;
    
//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/css/**", "/images/**");
    }
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers().permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login.html")
                .permitAll()
                .defaultSuccessUrl("/dashboard.html", true)
                .and()
            .logout()
	            .logoutUrl("/logout")
	            .logoutSuccessUrl("/login.html");
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    		//TODO Once we have the admin page that can reset/set passwords lets start hashing all of them
//		auth.userDetailsService(loginService).passwordEncoder(bCryptPasswordEncoder);
    		auth.userDetailsService(loginService);
    }
    
    @Bean 
    GrantedAuthorityDefaults grantedAuthorityDefaults() {
        return new GrantedAuthorityDefaults(""); // Remove the ROLE_ prefix
    }
}