<p align="center">
<img src="https://i.imgur.com/aGQm6Uz.jpeg" alt="nexus" width="350"/>
</p>

## Rimuru-Tempest

> WhatsApp Bot which supported in both Multi Device and legacy whatsapp

> User must have zenz apikey to use this repo, register [here](https://zenzapis.xyz/) to get apikey

> Upload your session Id in the Folder  named <b>Database<b>

</p>
</br>

<a href="https://github.com/nexusNw"><img title="Author" src="https://img.shields.io/badge/Author-nexusNw-blue.svg?color=54aeff&style=for-the-badge&logo=github" /></a>  
<a href="https://github.com/nexusNw/Rimuru-Tempest"><img title="Stars" src="https://img.shields.io/github/stars/nexusNw/Rimuru-Tempest?color=54aeff&style=flat-square" /></a>
<a href="https://github.com/nexusNw/Rimuru-Tempest/network/members"><img title="Forks" src="https://img.shields.io/github/forks/nexusNw/Rimuru-Tempest?color=54aeff&style=flat-square" /></a>
<a href="https://github.com/nexusNw/Rimuru-Tempest/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/nexusNw/Rimuru-Tempest?label=watchers&color=54aeff&style=flat-square" /></a> <br>

---
<!--Scan -->
<b><details><summary>Qr for session id</summary></b>

>Users Who use older version of Whatsapp or is not in Multi Device program -- Click [LEGACY](https://replit.com/@nexusNw/Scanner-for-Legacy-Whatsapp-Users?outputonly=1&lite=1#index.js)

>Users Who use latest version of Whatsapp or is in the Multi Device program -- Click [MD QR](https://replit.com/@nexusNw/Md-Scanner?outputonly=1&lite=1)

</details>

---
 
<!-- Installation -->
<b><details><summary>Heroku Deployment</summary></b>  

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
```
Users who scanned through MD Scanner- upload file in folder database with naming rimuru -multi.json

Users who scanned through Legacy QR - Create a file named rimuru-legacy.json in database folder and paste your session id in it
```
<b>Requirements:</b>
* NodeJS buildpack
* FFmpeg buildpack https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
</details>

---

<!-- Installation -->
<b><details><summary>Windows Installation</summary></b>  
<b>Requirements:</b>
* Download & Install Git [`Click here`](https://git-scm.com/downloads)
* Download & Install NodeJS [`Click here`](https://nodejs.org/en/download)
* Download & Install FFmpeg [`Click here`](https://ffmpeg.org/download.html)
 
```bash
Add FFmpeg to PATH environment variable
```
	
```bash
> git clone https://github.com/nexusNw/Rimuru-Tempest
> cd Rimuru-Tempest
> npm install
```
</details>

---

<b><details><summary>Termux Installation</summary></b>

<p dir="auto">Use Termux application from F-Droid, here is the link: <a href="https://f-droid.org/en/packages/com.termux/" rel="nofollow">https://f-droid.org/en/packages/com.termux/</a>. Google Play variant is deprecated, doesn't receive updates and contains issues as well as outdated repository URLs.</p>
	
* Download & Install Termux [`Click here`](https://f-droid.org/repo/com.termux_118.apk)
	
```bash
> apt update && apt upgrade
> apt install git -y
> apt install nodejs -y
> apt install ffmpeg -y
> git clone https://github.com/nexusNw/Rimuru-Tempest
> cd Rimuru-Tempest
> pkg install yarn
> yarn add @adiwajshing/baileys
> yarn
```
</details>

---

<!-- Edit -->
<b><details><summary>Edit config.json</summary></b>
```bash
"APIs": {
    "zenz": "https://zenzapis.xyz",
    "apikey": "YOURAPIKEY"
 },
"owner": [
    "91812xxx"
 ],
```
</details>

---

<!-- Start -->
<b><details><summary>Start BOT</summary></b>
```bash
1. For Multi Device
> npm run start

2. For Legacy
> npm run legacy

SCAN THE QR USING YOUR WHATSAPP!
```

</details>

---

<details><summary>Available Features</summary><br>
	
| Features |  Availability |
| :------: |  :----------: |
|   Anime Web     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/animeweb)      |
|   Convert     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/convert)      |
|   Creator     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/creator)      |
|   Database     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/database)      |
|   Downloader     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/downloader)      |
|   Entertainment  |     ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/entertainment)      |
|   Group     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/group)      |
|   Information   |  ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/information)      |
|   Islami     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/islami)      |
|   Main     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/main)      |
|   More Nsfw     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/morensfw)      |
|   Nekos Life     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/nekoslife)      |
|   News   |  ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/news)      |
|   Owner     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/owner)      |
|   Photo Editor  |   ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/photoeditor)      |
|   Primbon   |  ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/primbon)      |
|   Random Image     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/randomimage)      |
|   Random Text     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/randomtext)      |
|   Search     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/search)      |
|   Stalker     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/stalker)      |
|   Textmaker     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/textmaker)      |
|   Users     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/users)      |
|   Webzone     |       ✅[here](https://github.com/nexusNw/Rimuru-Tempest/tree/main/commands/webzone)      |
	
	Pull requests are welcome. Your contribution is helping me too
	
</details>


## Thanks To
* [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
* [`Zhwzein`](https://github.com/zhwzein)
* [`DikaArdnt`](https://github.com/DikaArdnt)
* [`N3XU5-51R`](https://github.com/nexusNw)


License: [MIT](https://en.wikipedia.org/wiki/MIT_License)
