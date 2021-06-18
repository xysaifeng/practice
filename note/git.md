### 一、git 如何将本地分支同远程分支进行关联

#### 将本地分支同远程分支进行关联，可以分为以下 2 种情形：

##### 1. 本地已经创建了分支 dev（以 dev 为例，下同），而远程没有

可以通过以下 2 种方法在远程创建分支 dev，并与本地分支进行关联：  
_方法 1（方法 2 的简写）： git push -u origin dev_  
_方法 2： git push --set-upstream origin dev_

##### 2.远程已经创建了分支 dev,而本地没有

在本地创建分支并与远程分支进行关联的方法:  
 1.git fetch 获取远程分支  
 2.git checkout -b dev origin/dev 穿件 dev 本地分支并关联上远程分支

##### 3.当使用 git push -u origin remote_branch_name 方法时，如果本地已有分支与远程分支 remote_branch_name 关联，则该方法会不会关联成功。则可以使用下面方法（本地多个分支关联远程同一个分支）：

方法 1.git branch --set-upstream-to origin/远程分支名  
方法 2（方法 1）.git branch -u origin/远程分支名

### 二、git 将本地分支取消关联远程分支

-   切换到需要取消关联的分支上：git branch --unset-upstream

### 三、删除远程分支

-   git push origin --delete [remote_branchname]

[参考]https://blog.csdn.net/litongqiang/article/details/107388918

### 四、回滚到指定版本并推送到远程分支

1.本地分支会滚到指定版本 git reset --hard <commit ID 号>  
2.推送到远程分支 git push -f origin master  
[参考]https://blog.csdn.net/u013452335/article/details/97277936?utm_medium=distribute.pc_relevant.none-task-blog-baidulandingword-2&spm=1001.2101.3001.4242

### 五、git 版本回退:git rerset 和 git revert

[参考链接 1](https://github.com/includeios/document/issues/12)、
[参考链接 2](https://includeios.github.io/archives/)

### 六、.gitignore 文件例子
\# 表示此为注释,将被Git忽略  
1.txt     表示忽略1.txt 文件  
*.txt    表示忽略所有 .txt 结尾的文件  
!2.txt  不忽略2.txt这个文件  
/TODO  表示仅仅忽略项目根目录下的 TODO 文件，如果这个文件不在根目录下，则不会忽略  
build/   表示忽略 build/目录下的所有文件，过滤整个build文件夹，不管是否在根目录下；

### 七、.gitignore忽略一提交的文件 [参考](https://www.cnblogs.com/zqifa/p/git-rm-1.html)
**作用：删除远程文件同时保留本地文件**  
1.git rm --cached file_name(要忽略的文件名) or git rm --cached -r folder_name(要忽略的文件夹名) or git rm --cached -f filename(强制删除)  
2.git add .  
3.git commit -m 'description'   
4.git push  

### 八、git pull 提示Not possible to fast-forward，无法提交也无法更新[link](https://blog.csdn.net/dingyi4815313/article/details/114068189)
出现这个错误提示的原因是，你和其他人修改了同一个文件，而且别人比你先提交。所提此时你在本地执行git pull和git push都无法完成。

1、此时你需要执行下面命令（--rebase顾名思义，重新校准基础版本，将本地的基础版本更新为git上的基础版本）【注意执行这个命令之前你需要将本地代码全部暂存
```
// master指的是当前修改的分支，请修改当前你所修改的分支名称（不然会出人命的0.0）
git pull origin dev-real --rebase
```
2、一般情况下执行完这个，如果没有冲突，后面就可以正常进行更新和提交操作了。

3、但是如果代码有冲突（别人和你修改了同一行代码，导致git不能自动合并），你会发现执行完之后本地版本变成了：develop|REBASE 1/157，类似于这样的，说明rebase失败了，命令会提示哪些文件没有rebase成功，你需要手动将这些冲突合并。

4、等待所有冲突文件修改完成，暂存所有文件。

5、执行命令: 
```
git rebase --continue
```
6、如果依然存在冲突文件，重复步骤3、4、5，直到所有冲突修改完毕就可以了，最后就能正常提交更新了。

说在最后，步骤1的rebase命令，一定要注意，网上给出的都是git pull origin master --rebase，指的是将本地基础版本修改为远程的master最新版本，如果你本地修改的是develop或者其他分支，就会导致代码错乱，此时需要恢复rebase操作请移步[这里](https://blog.csdn.net/dingyi4815313/article/details/114078534)


### git相关知识[参考](https://www.yiibai.com/git/git_rebase.html)