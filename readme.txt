* SaruMane Script
2012-05-04
Yutaka Kachi


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
http://www.catch.jp/wiki/?%A5%D7%A5%ED%A5%B0%A5%E9%A5%DF%A5%F3%A5%B0%B8%C0%B8%EC%A4%CF%BA%EE%A4%EC%A4%F3%A4%CE%A4%AB%A1%AA


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


