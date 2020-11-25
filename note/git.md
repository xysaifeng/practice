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