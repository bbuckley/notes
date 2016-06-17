* use a new branch
  * git branch test
  * git checkout test
  * (do work on test)
  * (change back to master then...)
  * git branch -d test
  
* git checkout -b test  (all at once)
* [git-tips](http://git.io/git-tips)
* to unstage a file
 * git reset HEAD filename 

* to rewind history
 * git reset commit_SHA
 
* list the files aleady commited 
 *git ls-tree --full-tree -r --name-only HEAD
 *git ls-tree --full-tree -r HEAD
