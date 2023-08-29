## プロジェクト作成
npx create-react-app プロジェクト名

## インストール

### axios
npm install axios

### json-server
npm install json-server

#### package.jsonのscriptsに追記
"json-server": "npx json-server -w ./db/db.json -p 3030"

### tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## tailwind設定
### tailwind.config.jsのcontentに追記
`"./src/**/*.{js,jsx,ts,tsx}"`

### index.cssに追記
@tailwind base;
@tailwind components;
@tailwind utilities;

## Reactを起動
npm run start
npm run json-server
