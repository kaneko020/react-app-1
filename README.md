## プロジェクト作成
npx create-react-app プロジェクト名

## インストール

### axios
npm install axios

### json-server
npm install json-server

### tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### react-router-dom
npm install react-router-dom

### swiper
npm install swiper

### react-icons
npm install react-icons

### fontawesome
npm install @fortawesome/react-fontawesome

## 各設定

### tailwind
#### tailwind.config.jsのcontentを以下のように修正
```
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
```

#### index.cssに追記
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### json-server
#### package.jsonのscriptsに追記
```
"json-server": "npx json-server -w ./db/db.json -p 3030"
```

## Reactを起動
npm run start

npm run json-server