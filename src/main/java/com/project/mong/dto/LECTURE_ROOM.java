package com.project.mong.dto;

import lombok.Getter;

public class LECTURE_ROOM {
    @Getter
    String Bname;

    @Getter
    String Laddr;

    public LECTURE_ROOM(String Bname, String Laddr) {
        this.Bname = Bname;
        this.Laddr = Laddr;
    }



}
