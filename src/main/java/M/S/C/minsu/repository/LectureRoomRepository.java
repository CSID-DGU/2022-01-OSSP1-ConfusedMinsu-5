package M.S.C.minsu.repository;

import M.S.C.minsu.dto.OpenedLectureRoomDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class LectureRoomRepository {

    private final JdbcTemplate jdbcTemplate;

    public LectureRoomRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public List<String> oneVariable(String LectureRoom, String nowOfDay, double thisTime, String roomCode){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%"+LectureRoom+"%'";
        List<String> list =jdbcTemplate.queryForList(query, String.class);

        String str=String.join(",",list); //list를 ','를 기준으로 string변환
        List<String> mylist= Arrays.asList(str.split(","));

        // List를 Set으로 변경
        Set<String> set = new HashSet<String>(mylist);

        // Set을 List로 변경 (중복 제거)
        List<String> newList =new ArrayList<String>(set);

        for(int i=0;i<newList.size();i++){
            if(newList.get(i).indexOf(roomCode+"-")==-1)
                newList.remove(i);
        }

        //----------------------------------------------------------------전체 리스트 (newList)

        List<String> exceptList = new ArrayList<String>();

        var query2 = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%"+LectureRoom+"%'" +
                " AND DayTime LIKE '%"+nowOfDay+"%'";
        List<String> Llist = jdbcTemplate.queryForList(query2, String.class);


        var query3 = "SELECT DayTime" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%"+LectureRoom+"%'" +
                " AND DayTime LIKE '%"+nowOfDay+"%'";

        List<String> Dlist = jdbcTemplate.queryForList(query3, String.class);


        for (int i = 0; i < Dlist.size(); i++) {
            if (Dlist.get(i).indexOf(",") != -1) { //여러 개의 시간표가 있을 때
                List<String> myDlist = Arrays.asList(Dlist.get(i).split(","));
                List<String> myLlist = Arrays.asList(Llist.get(i).split(","));

                List<Integer> findIndex = new ArrayList<Integer>(); //해당 요일이 있는 인덱스
                for (int j = 0; j < myDlist.size(); j++) {
                    if (myDlist.get(j).contains(nowOfDay))
                        findIndex.add(j);
                }
                for (int k = 0; k < findIndex.size(); k++) {
                    String str2 = myDlist.get(findIndex.get(k));
                    String str3 = str2.substring(1);
                    String[] timeArr = str3.split("-");
                    double firstTime = Double.parseDouble(timeArr[0]);
                    double secondTime = Double.parseDouble(timeArr[1]);
                    if (firstTime <= thisTime && thisTime <= secondTime) { //해당 요일에서 해당 시간이 사이에 있으면
                        exceptList.add(myLlist.get(findIndex.get(k)));
                    }
                }

            } else { //시간표가 하나만 있을 때
                String str4 = Dlist.get(i);
                String str5 = str4.substring(1);
                String[] timeArr = str5.split("-");
                double firstTime = Double.parseDouble(timeArr[0]);
                double secondTime = Double.parseDouble(timeArr[1]);
                if (firstTime <= thisTime && thisTime <= secondTime) { //해당 요일에서 해당 시간이 사이에 있으면
                    exceptList.add(Llist.get(i));
                }
            }
        }
        Set<String> set2 = new HashSet<String>(exceptList);

        List<String> newexceptlist = new ArrayList<String>(set2); //전체 시간표에서 가능한 시간표 빼기

        newList.removeAll(newexceptlist);
        return newList;
    }

    public List<String> twoVariable(String LectureRoom, String nowOfDay, double thisTime, String roomCode1, String roomCode2){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%"+LectureRoom+"%'";
        List<String> list =jdbcTemplate.queryForList(query, String.class);

        String str=String.join(",",list); //list를 ','를 기준으로 string변환
        List<String> mylist= Arrays.asList(str.split(","));

        // List를 Set으로 변경
        Set<String> set = new HashSet<String>(mylist);

        // Set을 List로 변경 (중복 제거)
        List<String> newList =new ArrayList<String>(set);

        for(int i=0;i<newList.size();i++){
            if(newList.get(i).indexOf(roomCode1+"-")==-1&&newList.get(i).indexOf(roomCode2+"-")==-1)
                newList.remove(i);
        }

        //----------------------------------------------------------------전체 리스트 (newList)

        List<String> exceptList = new ArrayList<String>();

        var query2 = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%"+LectureRoom+"%'" +
                " AND DayTime LIKE '%"+nowOfDay+"%'";
        List<String> Llist = jdbcTemplate.queryForList(query2, String.class);


        var query3 = "SELECT DayTime" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%"+LectureRoom+"%'" +
                " AND DayTime LIKE '%"+nowOfDay+"%'";

        List<String> Dlist = jdbcTemplate.queryForList(query3, String.class);


        for (int i = 0; i < Dlist.size(); i++) {
            if (Dlist.get(i).indexOf(",") != -1) { //여러 개의 시간표가 있을 때
                List<String> myDlist = Arrays.asList(Dlist.get(i).split(","));
                List<String> myLlist = Arrays.asList(Llist.get(i).split(","));

                List<Integer> findIndex = new ArrayList<Integer>(); //해당 요일이 있는 인덱스
                for (int j = 0; j < myDlist.size(); j++) {
                    if (myDlist.get(j).contains(nowOfDay))
                        findIndex.add(j);
                }
                for (int k = 0; k < findIndex.size(); k++) {
                    String str2 = myDlist.get(findIndex.get(k));
                    String str3 = str2.substring(1);
                    String[] timeArr = str3.split("-");
                    double firstTime = Double.parseDouble(timeArr[0]);
                    double secondTime = Double.parseDouble(timeArr[1]);
                    if (firstTime <= thisTime && thisTime <= secondTime) { //해당 요일에서 해당 시간이 사이에 있으면
                        exceptList.add(myLlist.get(findIndex.get(k)));
                    }
                }

            } else { //시간표가 하나만 있을 때
                String str4 = Dlist.get(i);
                String str5 = str4.substring(1);
                String[] timeArr = str5.split("-");
                double firstTime = Double.parseDouble(timeArr[0]);
                double secondTime = Double.parseDouble(timeArr[1]);
                if (firstTime <= thisTime && thisTime <= secondTime) { //해당 요일에서 해당 시간이 사이에 있으면
                    exceptList.add(Llist.get(i));
                }
            }
        }
        Set<String> set2 = new HashSet<String>(exceptList);

        List<String> newexceptlist = new ArrayList<String>(set2); //전체 시갆표에서 가능한 시간표 빼기

        newList.removeAll(newexceptlist);
        return newList;
    }

    //각 강의실별 비어있는 강의실 호수 반환
    public List<String> entire101_2(String nowOfDay, double thisTime){
        return twoVariable("학술/문화관",nowOfDay,thisTime,"101","102");
    }



    public List<String> entire201_2(String nowOfDay, double thisTime){
        return twoVariable("사회과학/경영관",nowOfDay,thisTime,"201","202");
    }

    public List<String> entire207(String nowOfDay, double thisTime){
        return oneVariable("혜화관",nowOfDay,thisTime,"207");

    }



    public List<String> entire303(String nowOfDay, double thisTime){
        return oneVariable("법학/만해관",nowOfDay,thisTime,"303");
    }


    public List<String> entire307(String nowOfDay, double thisTime){
        return oneVariable("명진관",nowOfDay,thisTime,"307");
    }

    public List<String> entire308(String nowOfDay, double thisTime){
        return oneVariable("과학관",nowOfDay,thisTime,"308");
    }

    public List<String> entire310(String nowOfDay, double thisTime){
        return oneVariable("중앙도서관",nowOfDay,thisTime,"310");
    }


    public List<String> entire401(String nowOfDay, double thisTime){
        return oneVariable("신공학관",nowOfDay,thisTime,"401");
    }


    public List<String> entire405(String nowOfDay, double thisTime){
        return oneVariable("원흥관",nowOfDay,thisTime,"405");
    }

    public List<String> entire407_8(String nowOfDay, double thisTime){
        return twoVariable("정보문화관",nowOfDay,thisTime,"407","408");
    }

    public List<String> entire501(String nowOfDay, double thisTime){
        return oneVariable("학림관",nowOfDay,thisTime,"501");
    }


    //------------------------------------------------



}
