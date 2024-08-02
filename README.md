# quick start - for AI-generative book frontend

steps
- install node:
-install node (node v18 for this project)
use v18.20.4 LTS: 
https://nodejs.org/en/download/package-manager  

`node -v`  
`npm -v`  
確認node和npm成功下載＆版本


- git clone  
`git clone https://github.com/yiiihsuan/StoryBook.git`

- 拉取遠端分支最新訊息  
`git fetch origin`

- 檢查遠端分支列表   
`git branch -r`

- 創建並切換到本地develop分支  
`git checkout -t origin/develop`

- 確認目前所在branch為develop  
`git branch`

- 拉取develop最新遠端資料   
`git pull origin develop`

- 進入專案目錄  
`cd frontend`

- 安裝相關依賴包  
`npm install`

- 拉取最新遠端資料  
`git pull origin develop`

- start the project  
`npm start`

- 確認網頁  
check on "http:localhost:3000"




* 若本地已經有develop分支：  
  - 拉取最新資訊  
  `git pull origin develop`  
  - (如果還有安裝新的package)  
  `npm install` 
  - 啟動  
  `npm start`
  - check on "http:localhost:3000"




# structure
入口：/Users/yihsuan/Desktop/StoryBook/frontend/src/App.js  

頁面：
首頁 frontend/src/pages/Home.js  (page)  
  -- 進度條 - ProgressContainer.js (component)   
開始頁面 frontend/src/pages/StartPage.js (page)  
  -- 登入modal - LoginModal.js  (component)   
創建故事 frontend/src/pages/CreateStory.js (page)   
新故事 frontend/src/pages/NewStory.js (page)     
角色分析 frontend/src/pages/CharacterAnalyze.js (page)   
  --角色分析卡片 CharacterCard (component)  
段落分析 frontend/src/pages/ParagraphAnalyze.js  (page)   
  --有聲書書本 Book (component)   
  --有聲書頁面 Page (component)   
有聲書影片 frontend/src/pages/NewVideo.js (page)   
影片下載  frontend/src/pages/DownloadVideo.js (page)   
聯繫我們 frontend/src/pages/ContactPage.js (page)    

API 串接 - frontend/src/api.js  



# 圖片來源 ：freepik  

1.Start Page背景  
https://www.freepik.com/free-vector/flat-illustration-world-book-day-celebration_38480974.htm#page=2&query=reading%20imagination&position=49&from_view=keyword&track=ais_user&uuid=5548f101-4d8e-4223-ac6d-1a94478d20f9  

2.CreateStory背景：  
https://www.freepik.com/free-vector/hand-drawn-flat-design-literature-illustration_23253002.htm#page=4&query=reading%20imagination&position=26&from_view=keyword&track=ais_user&uuid=5548f101-4d8e-4223-ac6d-1a94478d20f9  

3.NewStory的背景：  
https://www.freepik.com/free-vector/flat-background-world-book-day-celebration_38480907.htm#query=reading%20background&position=23&from_view=keyword&track=ais_user&uuid=9793b191-254b-46cd-874d-365b45673106  

4.故事分析背景：  
https://www.freepik.com/free-vector/memphis-background-orange-pastel-color-design-vector_20170853.htm#fromView=search&page=2&position=1&uuid=5194b7f7-8eb4-4492-b928-9dfb347fa298  

授權規則：   
Attribution: Required  
License: Free  



# api 串接
- StartPage:  
1.註冊 LoginModal ->  handleLogin ->從 api.js串接登入  
2.登入  LoginModal ->  handleRegister ->從 api.js串接註冊  
3.創建故事 handlesubmit -> fetchNewStoryData -> 從 api.js 串接獲取新故事    
4.新故事 handlesubmit -> fetchCharacterData -> 從 api.js 串接角色分析資料  
5.角色分析 handlesubmit -> fetchParagraphData -> 從 api.js 串接段落分析資料  
6.段落分析 handlesubmit -> fetchVideoData -> 從 api.js 串接有聲書影音資料  
7.聯繫我們 handleSubmit ->  ostContactForm -> 從 api.js 串接送出資料




- 新故事  

`{
  "content": "故事的內容"  
}`


- 角色分析:  
`{
  "characters": [
    {
      "name": "角色名稱",
      "image": "圖片url", 
      "description": "角色說明",
      "audio": "音檔url", 
    },
    ...
  ]
}
`


- 段落分析:  
`{
  "pages": [
    {
      "title": "title",
      "image": "圖片url", 
      "content": [
        {
          "character": "角色名稱",
          "dialogue": "對話內容",
          "audio": "音檔url"
        },
        ...
      ]
    },
    ...
  ]
}`


- 影片：  
  `{
  "video": {
    "title": "影片title",
    "src": "影片url"
  }
}




