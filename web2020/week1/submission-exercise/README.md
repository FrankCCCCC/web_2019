# Practice Submission

This repository is built for practicing submissions for assignments and projects.</br>
You can follow the instructions below in order to know the whole workflow for submitting a lab or a project.

## Try It !!

1. Fork this project.
2. Clone the project from GitLab to your local environment.
3. Add a new file and write something.
4. Commit your work.
5. Push your work to GitLab.
6. Open a merge request to the original repository.
  - Source branch: Your working branch.
  - Target branch: The branch with your student id. (e.g. `104062987`)
  - Title: `Student ID Submission` (e.g. `104062987 Submission`).
	- You can choose arbitrary branch if your branch doesn't exist. 
7. Submit the merge request.
8. Done !

# FAQ
<br />
1. push的時候出錯： <br />
  - clone完之後沒有進到project再進行操作<br />
以這次lab為例，clone完之後要cd submission-exercise，進到資料夾之後再進行操作。<br/>
<br />
  - clone錯project<br />
沒有clone自己帳號底下的project，所以沒辦法push。<br />
雖然你可以clone助教的repository，然而你會沒有權限push回去，這也是為甚麼需要做fork的原因。<br/>
因此，<b>記得要先將助教的repository fork到自己的帳號內在clone下來，你才能夠做push的動作。</b><br/>
<br />
  - git會儲存帳號密碼<br />
若另外一位使用者要在你的電腦上面push的話，就需要把舊的帳號密碼刪除。<br />
windows : 控制台 -> (使用者帳戶和家庭安全) -> 使用者帳戶 -> 管理您的認證<br />
然後把一般認證的gitlab帳號刪除。<br />
mac : 到keychain把shwu10.cs.nthu.edu.tw刪除<br />
<br />
要注意的是git config --global的email主要是用來識別commit的人是誰，而不是用來與遠端的伺服器進行授權認證用的。<br />
<br />
2. merge request的title輸入學號後變成奇怪的數字： <br />
這問題是gitlab本身的神秘bug，助教會確認一下發生了什麼事，同學不用擔心。<br />
<br />
3. 已經開過merge request後又修改了檔案，想再開一個merge request卻顯示error：<br />
可以到助教的repository底下點選merge request，找到自己的merge request並把他close掉，就可以開新的request。<br />
<br />
4. 不懂branch的意義：<br/>
大家可以嘗試google gitflow，上面會有很詳細的解釋。<br />
那最簡單的解釋是說，在大型的軟體開發上，master branch永遠都是最穩定的版本。<br/>
而在開發新功能時若直接在master branch上修改，若是爆炸了可能會直接影響到想要使用該軟體的user，<br/>
因此通常會new一個branch並在上面做開發，這樣就算爆炸了也不會影響到其他user的使用(也就是不會影響到master)。<br/>
<br/>
5. Mac install git的指令有錯：<br />
由於slides轉pdf時多加了幾個空白導致錯誤，slides已經更新。<br />
<br />
6. 裝完Atom之後呢？：<br/>
這邊推薦幾個好用的package可以安裝
  - emmet
  - linter-htmlhint
  - language-babel
  - linter-csslint 
  - linter-jshint
  - minimap
<br />
大家可以裝完之後玩玩看，或是可以參考這篇：http://negaihoshi.logdown.com/posts/220517-atom-use-ideas-and-recommendations
