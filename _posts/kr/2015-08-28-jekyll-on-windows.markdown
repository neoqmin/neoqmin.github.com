---
layout: post
title:  "윈도우에서 github.io용 Jekyll 블로그 만들기"
date:   2015-08-28 00:59:22
categories: jekyll Windows
---
사실, github를 사용하는 사람이라면, 이런 포스트가 별로 필요없을 것 같지만(다들 실력이 뛰어나기 때문에),
혹시라도 나 처럼 헤매는 사람이 있다면, 지금 보고있는 github.io 블로그처럼 돌아갈 수 있도록 조금이나마
도움을 주기 위해서 나의 github.io 블로그의 첫 포스트를 '윈도우에서 github.io용 Jekyll 블로그 만들기'로
정했다.
이 포스트는 내가 github.io 블로그를 사용하면서 헤매던 내용들을 정리하였으며, 앞으로도 계속 추가할 예정이다.

우선, git이 설치되어 있어야 한다. 

[![git](http://www.git-scm.com/images/logo@2x.png)](http://www.git-scm.com/download/win){:target="_blank"}

그리고 github.io용 블로그를 작성해서 직접 돌려보기 위해서는 Jekyll을 설치해야 한다.(바로 github에 (사용자이름).github.com 레포지토리를 만들어서 index.html을 작성해도 블로그를 만들 수도 있다.)
jekyll을 설치하기 위해서는 Ruby도 설치해야한다.

많이 복잡하고, 귀찮은 작업이지만, 아래의 사이트를 참조하여 그 설치는 어렵지 않게 할 수 있었다.

[Run Jekyll on Windows](http://jekyll-windows.juthilo.com){:target="_blank"}

진행은 아래와 같이 진행된다. 위의 사이트가 매우 잘~되어 있기 때문에 설치 부분은 그냥 넘어가도록 하겠다.
설치시에 'path에 등록' 옵션을 check 하는 것이 좋다.(기본 un-check)

1. ruby와 ruby-devkit 설치([rubyinstaller.org](http://rubyinstaller.org/downloads/){:target="_blank"})
  - 'gem update && gem cleanup' 명령 실행
2. jekyll 설치
3. Syntax 설치
4. 실행 테스트
  - 실행시 [에러](http://stackoverflow.com/questions/28985481/hitimes-require-error-when-running-jekyll-serve-on-windows-8-1){:target="_blank"}가 발생하면
    해당 페이지에서 처럼 hitimes를 재설치하면 된다.

 거의 대부분의 웹에서 그렇듯이 jekyll 또한 Windows에서 작성하기 위해서는
파일의 encoding에 신경을 써야한다.

 얼마전에 구매한 WebStorm 또한 Windows 버전에서는 기본으로 utf-8로 저장하는
 것이 아니기 때문에 File/FileEncoding을 선택하고, utf-8로 저장해야 한다.

 이미 입력한 한글이 다 날아갈 수 있기 때문에 작성된 글이 있을 경우 백업을 하고,
 변경해야 한다. 그런다음 Jekyll의 환경설정 파일 _config.yml에 아래의 코드를 추가한다.

 encoding: "utf-8"
