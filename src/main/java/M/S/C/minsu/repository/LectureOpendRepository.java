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
import java.util.stream.Collectors;

@Repository
@RestController
public class LectureOpendRepository {
    private Map<String, Object> temp;
    public static final int size = 5;
    public static int noodle = 0;
    public static String[][][] result={};
    public static String[][] availableBuild={
            {"신공학관","원흥관","정보문화관","명진관","과학관","중앙도서관"},
            {"원흥관","신공학관","정보문화관","명진관","과학관","중앙도서관"},
            {"학림관","정보문화관","원흥관"},
            {"정보문화관","원흥관","신공학관","명진관","과학관","만해관","학림관"},
            {"중앙도서관","신공학관","명진관","원흥관","정보문화관","만해관"},
            {"만해관","명진관","혜화관","과학관","중앙도서관","신공학관","사회과학관","학술문화관"},
            {"명진관","과학관","중앙도서관","만해관","신공학관","혜화관"},
            {"과학관","명진관","중앙도서관","만해관","신공학관"},
            {"혜화관","학술문화관","사회과학관","만해관"},
            {"사회과학관","혜화관","학술문화관","만해관"},
            {"학술문화관","사회과학관","혜화관","만해관"}
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
    public Map<String,Object> makeTable(){
        Map<String, Object> resultMap = new HashMap<String,Object>();
        System.out.println("1"+temp);
        return null;
    }


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
        System.out.println(tokens.length);
        String[][] divLec=new String[tokens.length][5];

        for(int i=0;i< divLec.length;i++){
            for(int j=0;j<divLec[i].length;j++){
                divLec[i][j]="0";
            }
        }

        for(String s : tokens){
            s=s.replace("{",""); s=s.replace("[","");  s=s.replace("}",""); s=s.replace("]","");
            s=s.replace(",","");  s=s.replace("=",",");
            System.out.println(s);
            divLec[n] = s.split(","); // 2차원배열 divLec에 저장돼있음. fuck,, split -> 배열 크기도 똑같이 맞춰짐 개같은거..

            n++;
        }
        var query=""; int a=0;
        String[][] strA=new String[tokens.length][5];
        for(int i=0;i<divLec.length;i++){
            for(int j=0;j<divLec[i].length;j++){
                strA[i][j]=divLec[i][j];
            }
        }
        for(String[] s : divLec){
            query = "SELECT DayTime, Lname, Campus" +
                    " FROM Dongguk.LECTURE_OPEND"+
                    " WHERE LectureCode='"+s[1]+"'; ";
            List<LectureOpendDTO> li= jdbcTemplate.query(query, lectureOpendMapper);
            for(LectureOpendDTO l : li){
                String s1=l.getDayTime();
                String s2=l.getLname();
                String s3=l.getCampus();
                System.out.println(s1 + s2 + s3 + a);
                strA[a][2]=s1; strA[a][3]=s2; strA[a][4]=s3;

            }a++;
            System.out.println();
        }


        for(int i=0;i< strA.length;i++){
            for(int j=0;j<strA[i].length;j++){
                System.out.print(strA[i][j]+"\t");
            }
            System.out.println();
        }
        String[][][] resultMap={};
        resultMap=makeSchedule(strA);
        System.out.println("im return!");
        return resultMap;
    }


    // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ Line

    private String[][][] makeSchedule(String[][] strA) {

        int i = 0, j = 0, flag = 1;
        boolean bool = false;

        //여기부터 플로우차트 반영됨
        int[] cntArray = new int[10];
        int[] ccntArray = new int[10];

        for (int k = 0; k < 10; k++) {
            cntArray[k] = 0;
        }
        for (String s[] : strA) {
            for (int a = 0; a < s.length; a++) {
                System.out.print(s[a] + "\t");
                if (a == 0) {
                    cntArray[Integer.parseInt(s[0])]++;
                }
            }
            System.out.println();
        }

        for (int k = 0; k < cntArray.length - 1; k++) {
            if (cntArray[k + 1] == 0) break;
            ccntArray[k + 1] += ccntArray[k] + cntArray[k + 1];
        }
//        for (i = 0; i < cntArray.length; i++) {
//            System.out.print(cntArray[i] + "\t");
//        }
//        System.out.println();
//        for (i = 0; i < ccntArray.length; i++) {
//            System.out.print(ccntArray[i] + "\t");
//        }
//        System.out.println();
        int avg = 1;
        for (int x = 1; x < cntArray.length; x++) {
            if (cntArray[x] == 0) continue;
            avg *= cntArray[x];
        }
        System.out.println("나올 수 있는 모든 경우의 수 : " + avg);
        int[][][] resultLec = new int[avg][30][6];

        flag = 0;
        for (int x = 1; x < cntArray.length; x++) {
            if (cntArray[x] == 0) {
                flag = x - 1;
                break;
            }
        }
        int[] group = new int[flag];
        System.out.println("입력된 그룹 개수 : " + flag);


        for (int x = 0; x < resultLec.length; x++) {
            for (int y = 0; y < resultLec[x].length; y++) {
                for (int z = 0; z < resultLec[x][y].length; z++) {
                    resultLec[x][y][z] = 0;
                }
            }
        }

        String[][] str = new String[cntArray.length][5];
        result=new String[avg][flag][5];
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
    }

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
            result[noodle][j]=mem[j];
            j++;
        }

        noodle++;
        System.out.println();
    }
    private static void inputTimeAndCheck(String[][] divLec, String[] mem, int[][][] resultLec, int avg, int noodle,int flag,int j) { // 입력, 결과배열과 함께 넣어야될 데이터배열 str
        String str=mem[2];// DayTime to str
        Double[] d = new Double[4];
        String[][] onesCase= new String[flag][5];
        onesCase[j]=mem;
        System.out.println(onesCase[j][4]);
        for (int k = 0; k < d.length; k++) {
            d[k] = 0.0;
        }
        System.out.println(str + str.length());
        String match = "[^0-9]";
        String str1=str;
        str1 = str1.replaceAll(match, " ");
        System.out.println("\n\n"+str1);
        str1=str1.trim().replaceAll("  ", " ");
        String[] sp=str1.split(" ");

        String str2=str;
        match = "[^\uAC00-\uD7A30-9a-zA-Z]";
        str2 = str2.trim().replaceAll(match, " ");
        match = "[0-9]";
        str2 = str2.replaceAll(" ","").replaceAll(match, " ");
        str2= str2.replaceAll(" ","");
        String[] day=str2.split("");
        System.out.println(str2);


        for(int i=0;i<sp.length;i+=2){
            String s=sp[i]+sp[i+1];
            System.out.print(s + "\t");
            d[i/2]=Double.parseDouble(s);
            System.out.println(d[i/2]);

        }

        for (int k = 0; k < d.length; k += 2) {
            d[k] /= 5;
            d[k + 1] /= 5;

            for (double l = d[k]; l < d[k + 1]; l++) {
                if (k == 0) {
                    switch (day[0]) {
                        case "월":
//                            if(((Integer.parseInt(String.valueOf(Math.round(l))))!=0) && (resultLec[noodle][(Integer.parseInt(String.valueOf(Math.round(l))))-1][0] > 0 )&&l==d[k]){
//                                //연강인지 체크해볼것
//                                resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][0]+=5;
//                            }
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][0]++;
                            break;
                        case "화":
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][1]++;
                            break;
                        case "수":
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][2]++;
                            break;
                        case "목":
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][3]++;
                            break;
                        case "금":
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][4]++;
                            break;
                        case "토":
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
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][0]++;
                            break;
                        case "화":
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][1]++;
                            break;
                        case "수":
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][2]++;
                            break;
                        case "목":
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][3]++;
                            break;
                        case "금":
                            resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][4]++;
                            break;
                        case "토":
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
        System.out.print(d[0] + "" + d[1] + "" + d[2] + "" + d[3]);

    }

    private static void isAllow(String[][] onesCase,int j){
        int i=0;
        while(i<j){
            //onesCase[i][2]과 onesCase[j][2]가 연결인가??
            if(connect(onesCase[i][2],onesCase[j][2])){
                //캠퍼스 같고 연강 가능한 건물??
                // i=j
            }
            i++;
        }

    }
    private static boolean connect(String s1,String s2){
        boolean bool=true;
        System.out.println(s1 + s2);
//        String match = "[^0-9]";
//         String str1=s1,str2=s1;
//        str1 = str1.replaceAll(match, " ");
//        str1=str1.trim().replaceAll("  ", " ");
//        String[] sp=str1.split(" ");
//        match = "[^\uAC00-\uD7A30-9a-zA-Z]";
//        str2 = str2.trim().replaceAll(match, " ");
//        match = "[0-9]";
//        str2 = str2.replaceAll(" ","").replaceAll(match, " ");
//        str2= str2.replaceAll(" ","");
//        String[] day=str2.split("");



        return bool;
    }



}//class