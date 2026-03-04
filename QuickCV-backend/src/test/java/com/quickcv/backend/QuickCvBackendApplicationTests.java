package com.quickcv.backend;

import com.quickcv.backend.service.ResumeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class QuickCvBackendApplicationTests {

    @Autowired
    private ResumeService resumeService;

	@Test
	void contextLoads() throws IOException {

        resumeService.generateResumeResponse("I am Rahul Raj. Currently in LTIM as SAP Basis Admin");
	}

}
