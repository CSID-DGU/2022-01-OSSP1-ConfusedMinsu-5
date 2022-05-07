package com.project.mong.dto;

import lombok.Getter;

public class SMALL_GROUP {

    @Getter
    String Gname;

    @Getter
    String Bname;

    @Getter
    String Laddr;
    @Getter
    String MajorName;



    public SMALL_GROUP(String Gname, String Bname, String Laddr, String MajorName) {
        this.Gname=Gname;
        this.Bname=Bname;
        this.Laddr=Laddr;
        this.MajorName=MajorName;
    }

}
