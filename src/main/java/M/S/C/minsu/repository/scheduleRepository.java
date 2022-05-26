package M.S.C.minsu.repository;

import java.util.*;
import M.S.C.minsu.dto.LectureDTO;
import M.S.C.minsu.dto.LectureOpendDTO;
import M.S.C.minsu.dto.scheduleForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class scheduleRepository {

    public static final int size = 3;
    public static int noodle = 0;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private RowMapper<scheduleForm> sfMapper = BeanPropertyRowMapper.newInstance(scheduleForm.class);

    public List<?> gethaksooNumberSchedule(scheduleForm sf) {

        List<?> list = new ArrayList<>();
        List<?> result = new ArrayList<>();
        var query = "SELECT DayTime, Lname, Campus" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureCode = '" + sf.getHaksooNumber() + "' ";
        list = jdbcTemplate.query(query, sfMapper);

        result = makeSchedule(list,sf); //algo

        return result;
    }

    private List<?> makeSchedule(List<?> list,scheduleForm sf) {

        String[][] args=new String[5][5];
        String[][] divLec = new String[args.length / size][size];
        int i = 0, j = 0, flag = 1;
        boolean bool = false;

        //여기부터 플로우차트 반영됨
        int[] cntArray = new int[10];
        int[] ccntArray = new int[10];
//                for (String str : args) {
//                    if (i == size) {
//                        i = 0;
//                        j++;
//                    }
//                    divLec[j][i] = str;
//                    i++;
//                }

        for (int k = 0; k < 10; k++) {
            cntArray[k] = 0;
        }
        for (String s[] : divLec) {
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
        for (i = 0; i < cntArray.length; i++) {
            System.out.print(cntArray[i] + "\t");
        }
        System.out.println();
        for (i = 0; i < ccntArray.length; i++) {
            System.out.print(ccntArray[i] + "\t");
        }
        System.out.println();
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


        String[] str = new String[cntArray.length];
        print_table(divLec, 0, str, cntArray, ccntArray, flag, avg, resultLec);


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


        HashMap<String, String> map = new HashMap<String, String>() {{//초기값 지정

        }};
        map.put("a", "1");
        map.put("a", "c");
        map.put("a", "d");
        System.out.println(map.get("a"));

        return list;

    }

    private static void print_table(String[][] divLec, int i, String[] mem, int[] cntArray, int[] ccntArray, int flag, int avg, int[][][] resultLec) {
        for (int j = 0; j < cntArray[i + 1]; j++) {
            mem[i] = divLec[ccntArray[i] + j][1];

            if (i < flag - 1) {
                print_table(divLec, i + 1, mem, cntArray, ccntArray, flag, avg, resultLec);
            } else {
                print_memory(mem, flag, divLec, avg, resultLec);
            }
        }
    }

    public static void print_memory(String[] mem, int i, String[][] divLec, int avg, int[][][] resultLec) {
        int j = 0;

        while (j < i) {
            inputTimeAndCheck(divLec, mem[j], resultLec, avg, noodle);
            //System.out.print(mem[j]+"\t");

            j++;
        }
        noodle++;
        System.out.println();
    }

    private static void inputTimeAndCheck(String[][] divLec, String str, int[][][] resultLec, int avg, int noodle) { // 입력, 결과배열과 함께 넣어야될 데이터배열 str

        Double[] d = new Double[4];
        String[] day = new String[2];

        for (int k = 0; k < d.length; k++) {
            d[k] = 0.0;
        }
        //System.out.println(str + str.length());

        switch (str.length()) {
            case 0:
                break;
            case 17:
                d[2] = Double.parseDouble(str.substring(10, 13));
                d[3] = Double.parseDouble(str.substring(14, 17));
                day[1] = str.substring(9, 10);
            default:
                d[0] = Double.parseDouble(str.substring(1, 4));
                d[1] = Double.parseDouble(str.substring(5, 8));
                day[0] = str.substring(0, 1);
        }


        for (int k = 0; k < d.length; k += 2) {
            d[k] *= 10;
            d[k] /= 5;
            d[k + 1] *= 10;
            d[k + 1] /= 5;

            for (double l = d[k]; l < d[k + 1]; l++) {
                if (k == 0) {
                    switch (day[0]) {
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
                        if (resultLec[noodle][Integer.parseInt(String.valueOf(Math.round(l)))][n] == 2) {
                            resultLec[noodle][0][0] = -1; // 첫번째 값이 -1이면 그 시간표는 버린다는 FLAG
                        }
                    }

                }
            }
        }
        System.out.print(d[0] + "" + d[1] + "" + d[2] + "" + d[3]);

    }


    private static boolean check(String[][] divLec, int i, int j, int f) {

        boolean[][] check = new boolean[4][20];
        Double[] d = new Double[8];
        String[] day = new String[4];
        int flag = 0;
        for (int k = 0; k < d.length; k++) {
            d[k] = 0.0;
        }
        switch (divLec[i][1].length()) {
            case 0:
            case 1:
                break;
            case 16:
            case 17:
            case 18:
                d[2] = Double.parseDouble(divLec[i][1].substring(10, 13));
                d[3] = Double.parseDouble(divLec[i][1].substring(14, 17));
                day[1] = divLec[i][1].substring(9, 10);
            default:
                d[0] = Double.parseDouble(divLec[i][1].substring(1, 4));
                d[1] = Double.parseDouble(divLec[i][1].substring(5, 8));
                day[0] = divLec[i][1].substring(0, 1);
        }
        switch (divLec[j][1].length()) {
            case 0:
            case 1:
                break;
            case 16:
            case 17:
            case 18:
                d[6] = Double.parseDouble(divLec[j][1].substring(10, 13));
                d[7] = Double.parseDouble(divLec[j][1].substring(14, 17));
                day[3] = divLec[j][1].substring(9, 10);
            default:
                d[4] = Double.parseDouble(divLec[j][1].substring(1, 4));
                d[5] = Double.parseDouble(divLec[j][1].substring(5, 8));
                day[2] = divLec[j][1].substring(0, 1);
        }
        for (int k = 0; k < d.length; k++) {
            d[k] *= 10;
            d[k] /= 5;
        }
        for (int k = 0; k < d.length; k += 2) {
            for (double dou = d[k]; dou < d[k + 1]; dou++) {
                System.out.print(dou);
                check[flag][Integer.parseInt(String.valueOf(Math.round(dou)))] = true;
                System.out.print(check[flag][Integer.parseInt(String.valueOf(Math.round(dou)))]);
            }
            flag++;
            System.out.println();
        }

        if (f == 1) {
            if (day[0].equals(day[2]) || day[0].equals(day[3]) || day[1].equals(day[2]) || day[1].equals(day[3])) {

            } else {
                return true;
            }
            for (int k = 0; k < 20; k++) {
                if ((check[0][k] && check[2][k]) || (check[0][k] && check[3][k]) || (check[1][k] && check[2][k]) || (check[1][k] && check[3][k])) {
                    return false;
                } else {
                    return true;
                }
            }
        } else if (f == 2) { // check_connected

        } else if (f == 3) { // allow_connected

        }
        return false;
    }


}

