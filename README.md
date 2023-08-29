## プロジェクト作成
npx create-react-app プロジェクト名

## インストール

### axios
npm i axios

### json-server
npm i json-server

### tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## tailwind設定
### tailwind.config.jsの「content」を以下のように修正
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],

### index.cssに追記
@tailwind base;
@tailwind components;
@tailwind utilities;


## Reactを起動
npm run start
npm run json-server
