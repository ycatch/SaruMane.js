* SaruMane Script
Copyright 2012 Yutaka Kachi
MIT License

kmyaccによる簡易スクリプト言語。

それらしく書かれたプログラムの末尾に、「;」を追加するだけ。
なのに、いちおう字句解析と構文解析しています。
だから、猿真似(SaruMane)。

ターゲット言語は、「processing.js」。これは、グラフィックデザイン向けプログラミング言語「processing」をJavascriptで実装したもの。

つまり、SaruMane Scriptは、Javascript上で動く、Processing.js上で動作することになる。


起動するには、SaruMane_Script.htmlを開きます。

ソースから変換するには、kmyaccを呼び出します。

> kmyacc sarumane_script.jsy


*links

http://www.catch.jp/wiki/
http://www.catch.jp/wiki/index.php?making_script02


*kmyaccについて

yaccファイルの変換には、kmyaccを使用しています。
kmyacc本体のライセンスは、GPL2です。ただし、kmyaccが生成するコードは(元になるプロトタイプも含め) 従来通りpublic domain(ないし*.yの作者のもの)ですので、 使用上の制限は全くありません。

-kmyaccの情報
http://www005.upp.so-net.ne.jp/kmori/kmyacc/

-kmyaccのソースコード
http://www005.upp.so-net.ne.jp/kmori/kmyacc/kmyacc-4.1.4.tar.gz
http://www.catch.jp/wiki/program/yacc/kmyacc-4.1.4.tar.gz

-実行ファイル
http://aoikujira.com/demo/hakkaku/rc/S7hRMjV3R7qZZsXTUkfnmw_kmyacc-as.zip


* processing-1.3.6.js
MIT License
http://processingjs.org


* processing.js for Browser
Copyright 2011 Ubiquitous Entertainment Inc.
http://www.uei.co.jp/
