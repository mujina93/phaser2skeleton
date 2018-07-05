# Phaser 2 skeleton

This is a basic skeleton to quickly get up and coding with [Phaser](https://phaser.io) (version 2).
It can be useful during BecameAGameDeveloper meetups where you need something working as soon as possible. Oh, you can use it at game jams too! ;-)

## Prerequisites

* A programmer file editor (like [Visual Studio Code](https://code.visualstudio.com/)). This is really a matter of taste.

* [Git](https://git-scm.com/downloads) (this is mandatory to access this repository and to share your work with teammates).

* A GitHub account (if you're reading this probably you already have one, but in case you don't [register a new account](https://github.com/join), it's free!). If you're new to GitHUb you'll need to register an SSH key too: detailed instruction [here](https://help.github.com/articles/connecting-to-github-with-ssh/) (sorry, it's out of this document' scope).

* A local web server. This is the tricky part, more details below.

## Setup a new project

The idea is to fork this repository and create a new project based on this, which you and your team can work on, sharing the code with each other. To give your modifications to the team you do a commit and a push (they are git commands); to get other teammates' work, you do a pull (another git command).

1. Fork the repository: after having logged in on GitHub, on top of this page use the "fork" command. It creates a copy of this project owned by you (the process is completely online and quite straightforward).

2. Download your brand new project on your workstation. To do this you need to issue a git command in your command prompt. To create the complete Git command, click on the green button on top of this page named "Clone or download" then click on the copy icon near the url inside the dialog just opened. It will copy the url in the clipboard for your convenience.
Then, open a command prompt on your workstation (exact method depends on your operative system), go into your preferred development folder (for example ~/devel on Linux) and issue this command:
```
git clone <PASTE HERE THE URL>
```
And voilà! You have your brand new Phaser project on your workstation (Git creates a subfolder for you)!

3. To run the project and test it works, you need to run a local web server. Maybe it happens you have Python already installed, you can check this going to your command prompt and issuing this command:
```
python --version
```
If it answer something like ```Python 2.7.12```, hurra! You're ready to go. Assure you're in the Phaser Skeleton root directory (the one you created with the git clone command above), than launch a minimal web server with the command:
```
python -m SimpleHTTPServer
```
then launch a web browser and open the URL:
```
http://localhost:8000/
```
BOOM! You'll (well, actually should) see the Phaser skeleton running, with a sprite on the screen which responds to the arrows command.

If you haven't Python installed, you have a few choices.

  1. [Install Python](https://www.python.org/downloads/). It's multiplatform and it's (well, actually should) be easy.

  2. If you have [Node.js](https://nodejs.org/en/download/) installed (or you prefer to install it over Python), you can install a simple web server with:
  ```
  npm i local-web-server
  ```
  then you can fire up a web server with the command (always in the Phaser 2 Skeleton root directory):
  ```
  ws
  ```
  ## Work and share the project with your team

  The idea is: everybody in the team works (hard!) writing code and creating whatever other files needed for your project (more on this later). 
  
  When you're good with a modification, you "commit" your work: this makes Git save a new version of your project' status (think of it as a snapshot).

  When you're good with your project' status and you want/need to share it with your teammates, you need to "push" your codebase. This makes Git actually transfer all your modifications (since the last push) to the remote repository, hosted on GitHub.

  From here, other teammates can do a "pull": this makes Git do the opposite: transfer all pending modifications from the remote repository to the local one, on everybody's workstation. So they can run and try them on their local Phaser instance (using the local webserver, as explained above).

  A word about "other files needed": the point using Git (or any other Source Control System) is to put under version control only the "source files" and not any other derivative or elseway "automatically" produced files.

  For example, is good to put under Git's control:

  * language source files (like .js or .html)
  * manually created assets (like .png, sound files, etc.)
  * main project configuration files (like the .vscode folder if using Visual Studio Code (1))
  * build files (like makefile, package.json, etc.)

  Is NOT good to put under Git's control:

  * Final .exe files (not present for Phaser projects, but it's the idea)
  * Automatically minified .js files (produced by a build script)
  * External dependencies like libraries, node modules, etc.
  * In general, every item easily produced or downloaded by a script or another build tool (like make, shell script, etc.). Particularly if it's a large file.

  To make this easy, Git uses an ignore file, called `.gitignore`, that can be put inside every directory under version control (even more than one per repository). Every line of this file is a file pattern to ignore. You can specify file names, folder names, subfolders, etc. More details here: https://git-scm.com/docs/gitignore

  There are pre-made .gitignore files for the most common environments and development libraries: https://github.com/github/gitignore (er... no, there isn't a .gitignore file for Phaser, but you've learnt something new, isn't it good anyway? ^_^')

  ---

  (1) This is more my own opinion than a general and well supported best practice. Let's say that if everybody in your team is using the same IDE (for example, Visual Studio Code) with roughly the same extensions, then it's a good idea (good as in time and work saving) to put .vscode under version control.