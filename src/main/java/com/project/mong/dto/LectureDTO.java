package com.project.mong.dto;

import com.fasterxml.jackson.annotation.JsonGetter;
import lombok.Getter;

public class LectureDTO {

    @Getter
    String Lname;
    String Mname;
    Integer Semester;
    String MajorCategory;
    String MajorCategoryDetail;

    public LectureDTO(String Lname, String Mname, Integer Semester, String MajorCategory, String MajorCategoryDetail){
        this.Lname=Lname;
        this.Mname=Mname;
        this.Semester=Semester;
        this.MajorCategory=MajorCategory;
        this.MajorCategoryDetail=MajorCategoryDetail;
    }

}