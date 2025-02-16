<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/preset/adminPreset.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/admin/adminCommunity.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/deleteFont/fontello.css">
</head>
<title>커뮤니티 관리</title>

<body>
  <!-- <div class="mng-container"> -->

  <header class="main-nonLogin-header">
    <nav>
      <div class="main-nonLogin-nav">
        <div class="main-nonLogin-logo"><a href="${pageContext.request.contextPath}/adminMain.ad">learning</a></div>
        <ul class="main-nonLogin-contents main-nonLogin-ul">
          <div class="mng-users-contentes-drop">
            <div class="mng-users-text"><a href="${pageContext.request.contextPath}/adminUser.ad">회원 관리</a>  
              <div id="mng-users-dropText"><a href="${pageContext.request.contextPath}/ben.ad">밴 회원 관리</a></div>
            </div>
          </div>
          <li id="mng-contents-drop">게시글 관리
              <div class="mng-header-drop" onclick="">
                <div id="mng-header-dropDown1"><a href="${pageContext.request.contextPath}/adminParty.ad">파티 관리</a></div>
                <div id="mng-header-dropDown2"><a href="${pageContext.request.contextPath}/adminCommunity.ad">커뮤니티</a></div>
              </div>
          </li>
        </ul>
      </div>
      <ul class="main-nonLogin-join-box main-nonLogin-ul">
        <li class="main-nonLogin-join"><a href="${pageContext.request.contextPath}/adminlogoutOk.ad">로그아웃</a></li>
      </ul>
    </nav>
  </header>
  <main class="mng-main">
    <div class="mng-main-container">
      <div class="mng-main-container-title">
        <h1 class="mng-main-title">커뮤니티 관리</h1>
      </div>

      <div class="mng-options-container">
        <button id="mng-reset-button">초기화</button>
        <div class="mng-options-search">
          <i class="icon-search"></i>
          <input type="text" name="search" id="mng-search" placeholder="내용 검색">
          <i class="icon-down-dir">
            <div class="mng-search-dropDown">
              <ul class="mng-dropDown-text">
                <li id="mng-text-un">자유</li>
                <li id="mng-text-br">공략</li>
              </ul>
            </div>
          </i>
        </div>
      </div>

      <div class="mng-list-header-container">
        <hr class="mng-list-line">
        <div class="mng-list-main">
          <div class="mng-main-list-check">
            <p>선택</p>
          </div>
          <div class="mng-main-list-writeNum">
            <p>게시글 번호</p>
          </div>
          <div class="mng-main-list-nickName">
            <p>닉네임</p>
          </div>
          <div class="mng-main-list-tier">
            <p>티어</p>
          </div>
          <div class="mng-main-list-category">
            <p>카테고리</p>
          </div>
          <div class="mng-main-list-title">
            <p>제목</p>
          </div>
          <div class="mng-main-list-write-time">
            <p>작성 시간</p>
          </div>
        </div>
        <hr class="mng-list-line">
        <ul class="mng-list">
          <li class="mng-list-item">

        </ul>
      </div>
      <div class="mng-box-footer">
        <button class="icon-trash"></button>
        <div id="mng-totalcount">총 커뮤니티 게시글 수 : ${totalCommunityCount}개</div>
      </div>
    </div>
    
    <div class="mng-page-number-container">
      <div class="mng-page-number-button">
        <i class="icon-angle-double-left"></i>
        <i class="icon-left-open"></i>
        <div class="mng-page-numbers"></div>
        <i class="icon-right-open"></i>
        <i class="icon-angle-double-right"></i>
      </div>
    </div>
  </main>
  <footer class="main-footer">
    <div class="main-nonLogin-footer-text">
      <span><a href="">이용약관</a></span> | <span><a href="">개인정보 처리 방침</a></span> | <span><a href="">고객센터</a></span>
    </div>
  </footer>

  <script defer src="${pageContext.request.contextPath}/assets/js/admin/adminCommunity.js"></script>
</body>

</html>