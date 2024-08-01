# StoryBook
for AI-generative book

steps
1. install node:
-install node (node v18 for this project)
use v18.20.4 LTS: 
https://nodejs.org/en/download/package-manager

use `node -v` & `npm -v` to ensure download $ check the version.

2. git clone
run `git clone git clone https://github.com/yiiihsuan/StoryBook.git`

- 進入專案目錄
run `cd frontend`

- install packages
run `npm install`

- change branch
run `git checkout -b develop`

-pull origin
run `git pull origin develop`

- start the project
run `npm start`

- check 
check on "http:localhost:3000"




# structure
入口：home [text](frontend/src/pages/StartPage.js)


頁面：
創建故事 [text](frontend/src/pages/CreateStory.js)
新故事 [text](frontend/src/pages/NewStory.js)
角色分析  [text](frontend/src/pages/CharacterAnalyze.js)
  --角色分析卡片
段落分析 [text](frontend/src/pages/ParagraphAnalyze.js)
  --有聲書書本 Book
  --有聲書頁面 Page
有聲書影片  [text](frontend/src/pages/NewVideo.js)
影片下載  [text](frontend/src/pages/DownloadVideo.js)
聯繫我們 [text](frontend/src/pages/ContactPage.js)

- component
進度條 - [text](frontend/src/component/ProgressContainer.js)
登入modal - [text](frontend/src/component/LoginModal.js)

API 串接 - [api.js](frontend/src/api.js)



#some sources
圖片來源：freepik

1.Start Page的背景
https://www.freepik.com/free-vector/flat-illustration-world-book-day-celebration_38480974.htm#page=2&query=reading%20imagination&position=49&from_view=keyword&track=ais_user&uuid=5548f101-4d8e-4223-ac6d-1a94478d20f9

2.CreateStory的背景：

1.api 串接內容


