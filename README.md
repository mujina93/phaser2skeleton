# Phaser 2 skeleton

This is a basic skeleton to quickly get up and coding with [Phaser](https://phaser.io) (version 2).
It can be useful during BecameAGameDeveloper meetups where you need something working as soon as possible. Oh, you can use it at game jams too! ;-)

## Prerequisites

* A programmer file editor (like [Visual Studio Code](https://code.visualstudio.com/)). This is really a matter of taste.

* [Git](https://git-scm.com/downloads) (this is mandatory to access this repository and to share your work with teammates).

* A GitHub account (if you're reading this probably you already have one, but in case you don't [register a new account](https://github.com/join), it's free!). If you're new to GitHUb you'll need to register an SSH key too: detailed instruction [here](https://help.github.com/articles/connecting-to-github-with-ssh/) (sorry, it's out of this document's scope).

* A local web server. This is the tricky part, more details below.

## Setup a new project

The idea is to fork this repository and create a new project based on this, which you and your team can work on, sharing the code with each other. To give your modifications to the team you do a commit and a push (they are git commands); to get other teammates' work, you do a pull (another git command).

1. Fork the repository: after having logged in on GitHub, on top of this page use the "fork" command. It creates a copy of this project owned by you (the process is completely online and quite straightforward).

2. Download your brand new project on your workstation. To do this you need to issue a git command in your command prompt. So, open a command prompt on your workstation (exact method depends on your operative system), go into your preferred development folder (for example ~/devel on Linux) and issue this command:
```
git clone https://github.com/becomeagamedeveloper/phaser2skeleton.git
```
And voilà! You have your brand new Phaser project on your workstation!

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

  TBD