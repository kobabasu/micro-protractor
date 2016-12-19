# micro-protractor
`node_modules`が親ディレクトリにあれば、project追加用。  
なければstandaloneで動作するよう設定

```
hub clone kobabasu/micro-protractor e2e
```

## npm - for project
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. 親フォルダに移動 (package.jsonはmicro-gulp参照)
1. `npm start`
1. `npm install`
1. `gulp e2e`

## npm - standalone
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`
1. `npm test`

## gulp
1. gulp/dir.es6.sampleをコピーしgulp/dir.es6を作成
1. gulp/dir.es6を変更
1. documentRootでgulp e2eを実行し動作するか確認
1. documentRootのgulpfile.babel.js内で読み込み

## check
1. `npm test` もしくは `gulp e2e`
1. すべてsuccessならOK
