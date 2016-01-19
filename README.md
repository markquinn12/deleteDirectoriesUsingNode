# deleteDirectoriesUsingNode
Delete a list of directories/paths passed from a json file using Node.js

####Pre-requisites
You will need to install Node.js to run the utility and also GIT to be able to download from my repository. I use [chocolatey](https://chocolatey.org/) where available:

`choco install nodejs.install`

`choco install git.install`

Git will also need to be added to the env PATH of your machine. For my machine I added the following directory to the PATH:
`C:\Program Files (x86)\Git\cmd;`

##Utility installation
Run the below command to install globally. This will install the files checked into this project on GITHUB and allow us to run the utility using the keyword: deletedirs

`npm install markquinn12/deleteDirectoriesUsingNode -g`

##Directory/Path explaination
We can save as many directories as we need in the [directoriesToDelete.json](directoriesToDelete.json) file. 

There are a few rules that we must follow in this file:
- Each entry must contain a different key. The keys don't have to be in order or make any sense, just make sure each key is unique!
- The path must contain double backslashes for the .json format to recognise the string correctly. c:\test\folder will not work. It must be c:\\\test\\\folder

The path that you enter accepts [glob pattern matching](https://github.com/isaacs/node-glob). This means we can denote wildcards, full directories, file subsets... anything we want really. 

In the [directoriesToDelete.json](directoriesToDelete.json) file there are a few examples which I will explain:

"dir1": "C:\\test1\\*"
- The utility will delete all files and directories that live in the path but the test1 directory will not be deleted

"dir3": "C:\\test3"
- The utility will recursively delete the test3 directory and all files and folders that live in this path

"dir4": "C:\\test4\\*.js"
- The utility will delete all .js files in the test4 directory only.

The options are very flexible and each path can be tailored to suit our needs.

##Utility usage
- Once installed locate the directoriesToDelete.json file. On my machine this is located at: C:\Users\mark\AppData\Roaming\npm\node_modules\deletedirectoriesusingnode
- Edit the [directoriesToDelete.json](directoriesToDelete.json) file remembering to follow the rules above.
- Open the command prompt anywhere
- Run the following command: `deletedirs`
- You will then see some output.
- Done!

Just keep a shortcut to  [directoriesToDelete.json](directoriesToDelete.json) somewhere accessible so you can edit the file quickly. I can quickly open the file using a hotkey which I have mapped using autohotkey!

**Note:** There is no confirmation before a deletion takes place so please be careful when specifying directories paths to delete. Depending on your usage, the utility will delete everything below the directory specified so caution should be taken!

