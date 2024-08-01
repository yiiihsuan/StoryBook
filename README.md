# quick start - for AI-generative book frontend

steps
- install node:
-install node (node v18 for this project)
use v18.20.4 LTS: 
https://nodejs.org/en/download/package-manager

use `node -v` & `npm -v` to ensure download & check the version.

- git clone
run `git clone https://github.com/yiiihsuan/StoryBook.git`

- 拉取遠端分支最新訊息
`git fetch origin`

- 檢查遠端分支列表 
`git branch -r`

- 創建並切換到本地develop分支
`git checkout -t origin/develop`

- 確認目前所在branch為develop
`git branch`

- 拉取最新遠端資料 
`git pull origin develop`

- 進入專案目錄
run `cd frontend`

- 安裝相關依賴包
run `npm install`

- 拉取最新遠端資料
run `git pull origin develop`

- start the project
run `npm start`

- 確認網頁
check on "http:localhost:3000"


* 若本地已經有develop分支：
  - `git pull origin develop` 拉取最新資訊
  - `npm install` (如果還有安裝新的package)
  - `npm start`  即可啟動




# structure
入口：frontend/src/pages/StartPage.js


頁面：
創建故事 frontend/src/pages/CreateStory.js  
新故事 frontend/src/pages/NewStory.js    
角色分析 frontend/src/pages/CharacterAnalyze.js  
  --角色分析卡片
段落分析 frontend/src/pages/ParagraphAnalyze.js  
  --有聲書書本 Book  
  --有聲書頁面 Page  
有聲書影片 frontend/src/pages/NewVideo.js  
影片下載  frontend/src/pages/DownloadVideo.js  
聯繫我們 frontend/src/pages/ContactPage.js  

- component
進度條 - frontend/src/component/ProgressContainer.js  
登入modal - frontend/src/component/LoginModal.js  

API 串接 - frontend/src/api.js  

API串接：  




# some sources
圖片來源：freepik

1.Start Page的背景
https://www.freepik.com/free-vector/flat-illustration-world-book-day-celebration_38480974.htm#page=2&query=reading%20imagination&position=49&from_view=keyword&track=ais_user&uuid=5548f101-4d8e-4223-ac6d-1a94478d20f9

2.CreateStory的背景：

1.api 串接內容


