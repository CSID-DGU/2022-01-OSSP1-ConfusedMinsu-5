# 2022-01-OSSP1-ConfusedMinsu-5
2022-01 공개SW프로젝트_01 5팀 민수는 혼란스럽다

|학번|이름|
|------|---|
|2018112032|박민균|
|2019111994|이주윤|
|2019113576|최재민|
|2020112377|김민수|

### DB #2 (FOR 시간표 마법사, 건물 별 빈 강의실
![image](https://user-images.githubusercontent.com/68751201/166722346-3af109bb-0758-4b3a-8a8e-597d5a1ffd67.png)

생성한 Entity = SCHEDULED_LECTURE, TIME_LECTURE, BUILDING
* SCHEDULED_LECTURE: 개설강의 entity로 학수강좌번호를 primary key로 갖는다.

* TIME_LECTURE: 강의요일 entity로 학수강좌번호를 foreign key로 갖는다. TIME_LECTURE는 SCHEDULED_LECTURE에 종속된다. (Identifying Relationship)
시작시간, 종료시간 attribute의 data format은 HH:MM:SS이다.

* BUILDING Entity: 강의동 entity로 건물명을 primary key로 갖는다.

Relationship between SCHEDULED_LECTURE and TIME_LECTURE -> one to many

Relationship between SCHEDULED_LECTURE and BUILDING -> many to one
