package com.project.mong.dto;

import lombok.Getter;

public class GRADUATION_REQUIRMENT {

    @Getter
    String GetGrade;

    @Getter
    String AvgGrade;

    @Getter
    String EngTest;

    @Getter
    String Discussion;

    @Getter
    String Project;

    @Getter
    String MajorName;

    public GRADUATION_REQUIRMENT(String GetGrade, String AvgGrade, String EngTest, String Discussion, String Project, String MajorName) {
        this.GetGrade=GetGrade;
        this.AvgGrade=AvgGrade;
        this.EngTest=EngTest;
        this.Discussion=Discussion;
        this.Project=Project;
        this.MajorName=MajorName;
    }

}
