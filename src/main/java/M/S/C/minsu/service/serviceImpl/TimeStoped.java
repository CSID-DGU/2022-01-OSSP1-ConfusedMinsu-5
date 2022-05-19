package M.S.C.minsu.service.serviceImpl;

public class TimeStoped {

    public static final int size=3; //데이터 단위개수  1 시간 강의명 2 시간 강의명 3 시간 강의명 <<이런식

    public static String time(String lec[]){
        
        String[][] divLec=new String[lec.length/size][size]; // 입력된 데이터를 담을 배열 생성
        int i=0, j=0;
        for(String str : lec){ // 2차원 배열 divLec에 강의 넣기
            if(i==size) {
                i = 0;
                j++;
            }
            divLec[j][i]=str;
            i++;
        }

        int count=check_count(divLec); // count에는 그룹의 개수가 담김
        int[] arr=new int[count]; //3개크기 가진 arr생성
        for(int k=0;k<count;k++){ arr[k]=0; } // arr 전부 0으로초기화
        for(int x=0;x< divLec.length;x++){
            for(int y=1;y<count+1;y++){
                if(divLec[x][0].equals(y)){
                    arr[y-1]++;
                }
            }
        }
        //count -> 3 , divLec.length-> 7 , arr 각 자리수에 그룹별 강의개수
        i=0;
        /*
        while(complete_time_scheuling){
        A:
            String[] resultLec=new String[divLec.length*size]; // 강의 개수만큼 String배열 선언

            if(i<arr[i]){
                resultLec = divLec[i][0-3];
                j=0;
                B:
                if(j<arr[i+1]){
                    if(check_overlap(divLec[i][0-3])){
                        j++;
                        goto B;
                    }else{
                        if(check_connected(divLec[i][0-3]){ 연강인가?
                            if(allow_connected(divLec[i][0-3]){ 연강이 가능한건물인가?
                                resultLec=divLec[i+1][0-3]; //
                            }
                        }else{
                            resultLec=divLec[i+1][0-3];
                        }
                        int k=0;
                        if(k<arr[i+2]){
                            C:
                            if(check_overlap(divLec[i+1][0-3])){
                                k++;
                                goto C;
                            }else{
                                if(check_connected(divLec[i+1][0-3])){
                                    if(allow_connected(divLec[i+1][0-3]){
                                        resultLec=divLec[i+2][0-3];
                                    }
                                }else{
                                    resultLec=divLec[i+2][0-3];
                                }
                            }

                        }else{
                            goto A;
                        }

                    }
                }else{
                    i++;
                    goto A;
                }



            }else{
                return "";
            }


            }



    */

        return "";
    }

    private static int check_count(String[][] divLec) {
        int cnt=0;
        for(String s[] : divLec){
            if(s[0].equals(cnt)){ cnt++; } }
        // a에는 그룹의 개수가 담겨있음.
        return cnt;
    }
    private static boolean check_overlap(String[][] divLec){
        //강의가 겹치는가?
        return true;
    }
    private static boolean check_connected(String[][] divLec){
        //연강인가?
        return true;
    }
    private static boolean allow_connected(String[][] divLec){
        //연강가능한 건물인가?
        return true;
    }
}
