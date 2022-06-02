### 4 / 27
  AWS를 이용한 mysql 연동 구현
  
### 깃허브 사용

(clone 할 파일 생성 후 그 파일에서 git bash)  
git init은 원래 있던 파일에 github 연결

1. git clone github주소(따옴표 필요x)  
(git clone을 하면 연결이 자동으로 되므로 git init을 할 필요 x)

2. git checkout -b 브랜치이름  
브랜치 생성 후 그 브랜치로 이동  
(로컬 저장소)해당 폴더에 파일 추가 및 작업  

3. git add *  
모든 변경사항을 적용한다  

4. git commit -m '커밋메시지'  
적용할 것이라고 staging

5. git push  
로컬->원격저장소에 연결

6. 원격 저장소(깃허브 사이트)에서 pull request -> merge ->브랜치 삭제

7. git checkout master  
마스터 브랜치로 돌아오기

 
8. git pull  
적용된 파일 업로드  

### 중요! 삭제하기 전에 master에서 git merge 브랜치이름 하고 삭제해야한다!!!!
9. git branch -d 삭제할브랜치이름  
merge한 브랜치 삭제  
### 중요! master에서 git pull을 한 뒤 local의 branch를 삭제해야한다.


->2번으로 돌아가서 무한반복  
브랜치를 생성하고 merge 한 뒤 삭제하는 것이 좋다!  

파일 삭제  
git rm 삭제할파일  
git commit -m '커밋메시지'  
git push
