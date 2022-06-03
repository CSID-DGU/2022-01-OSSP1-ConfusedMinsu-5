package M.S.C.minsu.repository;

import M.S.C.minsu.dto.LectureOpendDTO;
import M.S.C.minsu.dto.scheduleForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.Map;
import java.util.HashMap;

import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors; // 해야할 것! 1. resultLec에 -1인 면 없애서 넘겨주기  2. 연강이면서 연강불가인거 -1로 바꿔주기

@Repository
@RestController
public class LectureOpendRepository {
    private Map<String, Object> temp;
    public static final int size = 5;
    public static int noodle = 0;
    public static String[][][] result={};
    public static String[][] availableBuild={
            {"401","405","408","407","307","308","310"},
            {"405","401","408","407","307","308","310"},
            {"501","408","407","405"},
            {"408","405","401","307","308","303","501"},
            {"407","405","401","307","308","303","501"},
            {"310","401","307","405","408","407","303"},
            {"303","307","207","308","310","401","201","102"},
            {"307","308","310","303","401","207"},
            {"308","307","310","303","401"},
            {"207","102","201","303"},
            {"201","207","102","303"},
            {"102","201","207","303"}
    };
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private RowMapper<LectureOpendDTO> lectureOpendMapper = BeanPropertyRowMapper.newInstance(LectureOpendDTO.class);

    @PostMapping("/scheduleGuide")
    public List<LectureOpendDTO> getAllDataLectureOpend(){

        var query = "SELECT *" +
                " FROM Dongguk.LECTURE_OPEND;";

        return jdbcTemplate.query(query, lectureOpendMapper);
    }

    @PostMapping("/scheduleGuide/scheduleTable")
    public List<LectureOpendDTO> getAllDataLectureOpend1(){

        var query = "SELECT *" +
                " FROM Dongguk.LECTURE_OPEND;";

        return jdbcTemplate.query(query, lectureOpendMapper);
    }

//    @PostMapping("/scheduleGuide/scheduleTable")
//    public Map<String,Object> makeTable(){
//        Map<String, Object> resultMap = new HashMap<String,Object>();
//        System.out.println("1"+temp);
//        return null;
//    }


    @RequestMapping(value="/scheduleTable.do", method=RequestMethod.POST)
    public String[][][] check(@RequestBody Map<String,Object> paramMap) throws SQLException, Exception{
        System.out.println("RequestBody 어노테이션을 통해 받은 객체 paramMap : " + paramMap);
        //Map<String, Object> resultMap = new HashMap<String,Object>();
        temp = paramMap;

        List<String> keyList = paramMap.keySet().stream()
                .collect(Collectors.toCollection(ArrayList::new));
        List<Object> valueList = paramMap.values().stream()
                .collect(Collectors.toCollection(ArrayList::new));
        String[] strArray=new String[valueList.size()];
        int size=0;
        for(Object temp : valueList)
        {
            strArray[size++] = temp.toString();
        }
        String []tokens=strArray[0].split(" ");
        int n=0;
        String[][] divLec=new String[tokens.length][6];

        for(int i=0;i< divLec.length;i++){
            for(int j=0;j<divLec[i].length;j++){
                divLec[i][j]="0";
            }
        }

        for(String s : tokens){
            s=s.replace("{",""); s=s.replace("[","");  s=s.replace("}",""); s=s.replace("]","");
            s=s.replace(",","");  s=s.replace("=",",");
            divLec[n] = s.split(","); // 2차원배열 divLec에 저장돼있음. fuck,, split -> 배열 크기도 똑같이 맞춰짐 개같은거..
            n++;
        }
        var query=""; int a=0;
        String[][] strA=new String[tokens.length][6];
        for(int i=0;i<divLec.length;i++){
            for(int j=0;j<divLec[i].length;j++){
                strA[i][j]=divLec[i][j];
            }
        }
        for(String[] s : divLec){
            query = "SELECT DayTime, Lname, Campus, LectureRoom" +
                    " FROM Dongguk.LECTURE_OPEND"+
                    " WHERE LectureCode='"+s[1]+"'; ";
            List<LectureOpendDTO> li= jdbcTemplate.query(query, lectureOpendMapper);
            for(LectureOpendDTO l : li){
                String s1=l.getDayTime();
                String s2=l.getLname();
                String s3=l.getCampus();
                String s4=l.getLectureRoom();
                strA[a][2]=s1; strA[a][3]=s2; strA[a][4]=s3; strA[a][5]=s4;
            }
            a++;
        }
        String[][][] resultMap={};
        resultMap=makeSchedule(strA);

        System.out.println("im return!");
        return resultMap;
    }//postMapping


    // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ Line

    private String[][][] makeSchedule(String[][] strA) {
        noodle=0;
        int i = 0, j = 0, flag = 1;

        int[] cntArray = new int[10];
        int[] ccntArray = new int[10];

        for (int k = 0; k < 10; k++) {
            cntArray[k] = 0;
        }
        for (String s[] : strA) {
            for (int a = 0; a < s.length; a++) {
                if (a == 0) {
                    cntArray[Integer.parseInt(s[0])]++;
                }
            }
        }

        for (int k = 0; k < cntArray.length - 1; k++) {
            if (cntArray[k + 1] == 0) break;
            ccntArray[k + 1] += ccntArray[k] + cntArray[k + 1];
        }
        int avg = 1;
        for (int x = 1; x < cntArray.length; x++) {
            if (cntArray[x] == 0) continue;
            avg *= cntArray[x];
        }
        System.out.println("나올 수 있는 모든 경우의 수 avg : " + avg);
        int[][][] resultLec = new int[avg][30][6];

        flag = 0;
        for (int x = 1; x < cntArray.length; x++) {
            if (cntArray[x] == 0) {
                flag = x - 1;
                break;
            }
        }
        int[] group = new int[flag];
        System.out.println("입력된 그룹 개수 flag : " + flag);


        for (int x = 0; x < resultLec.length; x++) {
            for (int y = 0; y < resultLec[x].length; y++) {
                for (int z = 0; z < resultLec[x][y].length; z++) {
                    resultLec[x][y][z] = 0;
                }
            }
        }

        String[][] str = new String[cntArray.length][6];

        result=new String[avg][flag][6];

        print_table(strA, 0, str, cntArray, ccntArray, flag, avg, resultLec);

        System.out.println();
        for (int k = 0; k < resultLec.length; k++) {   // result
            for (int l = 0; l < resultLec[k].length; l++) {
                for (int n = 0; n < resultLec[k][l].length; n++) {
                    System.out.print(resultLec[k][l][n] + " \t");
                }
                System.out.println();
            }
            System.out.println("\n");
        }

        for(int k=0;k<avg;k++){
            if(resultLec[k][0][0] == -1) {
               for(int a=0;a<flag;a++){
                    result[k][a]= new String[]{",", ",", ",", ",", ",", ","};
                }
            }
        }

        for (int k = 0; k < result.length; k++) {   // result
            for (int l = 0; l < result[k].length; l++) {
                for (int n = 0; n < result[k][l].length; n++) {
                    System.out.print(result[k][l][n] + " \t");
                }
                System.out.println();
            }
            System.out.println("\n");
        }

        return result;
    }//main makeSchedule

    private static void print_table(String[][] divLec, int i, String[][] mem, int[] cntArray, int[] ccntArray, int flag, int avg, int[][][] resultLec) {
        for (int j = 0; j < cntArray[i + 1]; j++) {
            mem[i] = divLec[ccntArray[i] + j];
            if (i < flag - 1) {
                print_table(divLec, i + 1, mem, cntArray, ccntArray, flag, avg, resultLec);
            } else {
                print_memory(mem, flag, divLec, avg, resultLec);
            }
        }

    }
    public static void print_memory(String[][] mem, int i, String[][] divLec, int avg, int[][][] resultLec) {
        int j = 0;
        while (j < i) {
            inputTimeAndCheck(divLec, mem[j], resultLec, avg, noodle,i,j);
            //System.out.print(mem[j][2]+"\t");
            //result[noodle][j]=mem[j];
            j++;
        }
        noodle++;
        System.out.println();
    }
    private static void inputTimeAndCheck(String[][] divLec, String[] mem, int[][][] resultLec, int avg, int noodle,int flag,int j) { // 입력, 결과배열과 함께 넣어야될 데이터배열 str
        String str=mem[2];// DayTime to str
        Double[] d = new Double[4];
        //String[][] onesCase= new String[flag][5];
        result[noodle][j]=mem;
        for (int k = 0; k < d.length; k++) {
            d[k] = 0.0;
        }
        String match = "[^0-9]";
        String str1=str;
        str1 = str1.replaceAll(match, " ");
        str1=str1.trim().replaceAll("  ", " ");
        String[] sp=str1.split(" ");

        String str2=str;
        match = "[^\uAC00-\uD7A30-9a-zA-Z]";
        str2 = str2.trim().replaceAll(match, " ");
        match = "[0-9]";
        str2 = str2.replaceAll(" ","").replaceAll(match, " ");
        str2= str2.replaceAll(" ","");
        String[] day=str2.split("");


        for(int i=0;i<sp.length;i+=2){
            String s=sp[i]+sp[i+1];
            d[i/2]=Double.parseDouble(s);
        }

        for (int k = 0; k < d.length; k += 2) {
            d[k] /= 5;
            d[k + 1] /= 5;

            for (double l = d[k]; l < d[k + 1]; l++) {
                if (k == 0) {
                    switch (day[0]) {
                        case "월":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][0] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][0]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][0] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][0]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;

                                    }
                                }
                            }

                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][0]++;
                            break;
                        case "화":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][1] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][1]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][0] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][1]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][1]++;
                            break;
                        case "수":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][2] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][2]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][2] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][2]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][2]++;
                            break;
                        case "목":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][3] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][3]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][3] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][3]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][3]++;
                            break;
                        case "금":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][4] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][4]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][4] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][4]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][4]++;
                            break;
                        case "토":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][5] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][5]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][5] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][5]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][5]++;
                            break;
                    }
                    for (int n = 0; n < 6; n++) {
                        if (resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][n] == 2) {
                            resultLec[noodle][0][0] = -1; // 첫번째 값이 -1이면 그 시간표는 버린다는 FLAG
                        }
                    }

                } else if (k == 2) {
                    switch (day[1]) {
                        case "월":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][0] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][0]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][0] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][0]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][0]++;
                            break;
                        case "화":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][1] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][1]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][1] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][1]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][1]++;
                            break;
                        case "수":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][2] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][2]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][2] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][2]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][2]++;
                            break;
                        case "목":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][3] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][3]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][3] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][3]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][3]++;
                            break;
                        case "금":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][4] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][4]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][4] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][4]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][4]++;
                            break;
                        case "토":
                            if( Integer.parseInt(String.valueOf(Math.round(l))) != 0 ){ // 0이면, -1인덱스는 존재하지 않기때문에
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))-1)][5] > 0) && l == d[k]){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][5]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            if(Integer.parseInt(String.valueOf(Math.round(l))) != 29){
                                if( (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l)))+1)][5] > 0) && l == (d[k+1])-1 ){ // 위 인덱스 값이 있다면! 즉 연강이라면
                                    // 기존의 강의들과 시간, 캠퍼스 비교하기
                                    for(int a=0;a<j;a++){
                                        boolean isPossible = true;
                                        isPossible= compareTime(result[noodle][j] , result[noodle][a]);
                                        resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][5]+=5;
                                        if(!isPossible) resultLec[noodle][0][0]=-1;
                                    }
                                }
                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][5]++;
                            break;
                    }
                    for (int n = 0; n < 6; n++) {
                        if (resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][n] >=2) {
                            resultLec[noodle][0][0] = -1; // 첫번째 값이 -1이면 그 시간표는 버린다는 FLAG
                        }
                    }

                }
            }
        }

    }//inputTimeAndCheck

    private static boolean compareTime(String[] s1, String[] s2) {

        //s1[2] , s2[2] 의 시간을 비교
        Double[] d1 = new Double[4];
        Double[] d2 = new Double[4];
        String match = "[^0-9]";
        String str1=s1[2];
        str1 = str1.replaceAll(match, " ");
        str1=str1.trim().replaceAll("  ", " ");
        String[] sp1=str1.split(" ");

        String str2=s1[2];
        match = "[^\uAC00-\uD7A30-9a-zA-Z]";
        str2 = str2.trim().replaceAll(match, " ");
        match = "[0-9]";
        str2 = str2.replaceAll(" ","").replaceAll(match, " ");
        str2= str2.replaceAll(" ","");
        String[] day1=str2.split("");

        match = "[^0-9]";
        str1=s2[2];
        str1 = str1.replaceAll(match, " ");
        str1=str1.trim().replaceAll("  ", " ");
        String[] sp2=str1.split(" ");

        str2=s2[2];
        match = "[^\uAC00-\uD7A30-9a-zA-Z]";
        str2 = str2.trim().replaceAll(match, " ");
        match = "[0-9]";
        str2 = str2.replaceAll(" ","").replaceAll(match, " ");
        str2= str2.replaceAll(" ","");
        String[] day2=str2.split("");

        for(int i=0;i<sp1.length;i++){
            System.out.print(sp1[i]+"\t");
        }System.out.println();
        for(int i=0;i<sp2.length;i++){
            System.out.print(sp2[i]+"\t");
        }System.out.println();
        for(int i=0;i<day1.length;i++){
            System.out.print(day1[i]+"\t");
        }System.out.println();
        for(int i=0;i<day2.length;i++){
            System.out.print(day2[i]+"\t");
        }System.out.println();

        int[][] arr1=new int[2][2];
        for(int i=0;i<2;i++){ arr1[i][0]=0; arr1[i][1]=0; }
        boolean b=true;
        // 1. 겹치는 요일을 찾는다. 2. 겹치는 요일의 시간을 확인한다.
        for(int i=0;i<day1.length;i++){ // 요일이 하나도 안겹치면, false 해당 강의와는 연강이 아님.
            for(int j=0;j<day2.length;j++){
                if(day1[i].equals(day2[j])){
                    b=false;
                    arr1[i][j]++;
                }
            }
        }
        System.out.println(b);
        if(b) return b; // 요일이 하나도 안겹치면 바로 return true;
        //여기까지 정상작동 확인
        for(int i=0;i<sp1.length;i+=2) {
            String s = sp1[i] + sp1[i + 1];
            d1[i / 2] = Double.parseDouble(s);
        }
        for(int i=0;i<sp2.length;i+=2){
            String s=sp2[i]+sp2[i+1];
            d2[i/2]=Double.parseDouble(s);

        }
        for (int k = 0; k < d1.length; k += 2) {
            d1[k] /= 5;
            d1[k + 1] /= 5;
            System.out.println(d1[k] + "" + d1[k+1]);
        }for (int k = 0; k < d2.length; k += 2) {
            d2[k] /= 5;
            d2[k + 1] /= 5;
            System.out.println(d2[k] + "" + d2[k+1]);
        }

        System.out.println(arr1[0][0] + "" +arr1[0][1]);
        System.out.println(arr1[1][0] + "" +arr1[1][1]);

        // 이제 여기까지 왔다면 요일은 무조건 겹친다. 캠퍼스가 겹치는지 확인해보자.
        if(s1[4].equals(s2[4])){ // 캠퍼스가 무조건 같아야함.
            b=false;
        }
        else{ // 캠퍼스 다르면 true 리턴 ( 안되면 트루 , 되면 펄스 )
            return true;
        }
        str1=s1[5].substring(0,3); str2=s2[5].substring(0,3);
        b=true;
        for(int i=0;i<arr1[0].length;i++){
            for(int j=0;j<d1.length/2;j++){
                for(int k=0;k<d2.length/2;k++){
                    if(arr1[0][i]==1){
                        if(d1[j] == d2[k]){
                            for(int l=0;l< availableBuild.length;l++){
                                if(str1.equals(availableBuild[l][0])){
                                    for(int n=0;n< availableBuild[l].length;n++){
                                        if(str2.equals(availableBuild[l][n])){
                                            b=false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return b;
    }


}//class