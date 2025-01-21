// 함수나 기능 정의하기 위해 HTML선택
const partyForumDetailTitle = document.querySelector('.partyForumDetail-title-content');                //게시글 제목
const partyForumDetailWriterUserName = document.querySelector('.partyForumDetail-writer-userName');     //게시글 작성자
const partyForumDetailContent = document.querySelector('.partyForumDetail-content-text');               //게시글 내용
const partyForumDetailUploadTime = document.querySelector('.partyForumDetail-writer-uploadTime');       //게시글 시간
const partyForumDetailTypeText = document.querySelector('.partyForumDetail-title-text');                //유저 티어
const partyForumDetailContentImage = document.querySelector('.partyForumDetail-content-images');        //게시글 사진
let imageUrl = null;                                                                                            //이미지 경로
const partyForumIndexButton = document.querySelector('.partyForumDetail-partyForum-index-button');  //목록 버튼
const partyForumEditButton = document.querySelector('.partyForumDetail-edit-button');                   //수정 버튼
const partyForumDeleteButton = document.querySelector('.partyForumDetail-delete-button');               //삭제 버튼
const partyForumApplyButton = document.querySelector('.partyForumDetail-userApply-button');             //참가신청 버튼
const partyForumDetailCommentTextInput = document.querySelector('.partyForumDetail-comment-list-container');//댓글작성하는 요소의 부모 
const CommentInput = partyForumDetailCommentTextInput.querySelector('input');                               //댓글 인풋 특정하기
const commentAddButton = partyForumDetailCommentTextInput.querySelector('button');                          //등록하기 특정하기
const commentList = document.querySelector('.partyForumDetail-comment-list');
const commentDeleteButton = document.querySelector('.partyForumDetail-comment-delete');


let forumTitle = "";
let userTier = "";
let userNickname = "";
let forumDate = "";
let forumUpDate = "";
let forumContent = "";
forumDetail.forEach(forumDetail => {
/*  console.log(forumDetail.forumTitle);
  console.log(forumDetail.userNickname);
  console.log(forumDetail.forumDate);
  console.log(forumDetail.forumUpDate);*/
  forumTitle = forumDetail.forumTitle;
  userTier = forumDetail.userTier;
  userNickname = forumDetail.userNickname;
  forumDate = forumDetail.forumDate;
  forumUpDate = forumDetail.forumUpDate;
  forumContent = forumDetail.forumContent;

});
//1. 게시글 정보 불러오기(제목, 내용, 시간, 작성자, 사진 링크 등등)
function getpartyForumDetailValue() {
  partyForumDetailTitle.innerText = forumTitle;
  partyForumDetailTypeText.innerText = userTier;
  partyForumDetailWriterUserName.innerText = userNickname;
  if(forumUpDate === undefined){
	partyForumDetailUploadTime.innerText = forumDate
  }else{
	partyForumDetailUploadTime.innerText = forumUpDate
  }
  partyForumDetailContent.innerText = forumContent;


}
function getpartyForumComment() {
  // 서버에서 댓글 가져오기
}
//2. 댓글 작성하기(작성자, 내용, 시간, 본인글이면 삭제)
function addCommentList(text) {
  const upLoadTime = new Date();
  const year = upLoadTime.getFullYear();
  let month = upLoadTime.getMonth() + 1;
  month = String(month).padStart(2, '0');
  let day = upLoadTime.getDate();
  day = String(day).padStart(2, '0');
  let hours = upLoadTime.getHours();
  hours = String(hours).padStart(2, '0');
  let minutes = upLoadTime.getMinutes();
  minutes = String(minutes).padStart(2, '0');

  let partyForumCommentList = document.createElement("li");
  let partyForumCommentDiv = document.createElement("div");
  let partyForumCommentUserName = document.createElement('p');
  let partyForumCommentColon = document.createElement('p');
  let partyForumCommentContent = document.createElement('p');
  let partyForumCommentTime = document.createElement('p');
  let partyForumCommentHr = document.createElement('hr');
  let partyForumCommentDeleteButton = document.createElement('button');


  partyForumCommentList.classList.add("partyForumDetail-comment-list-item");
  partyForumCommentDiv.classList.add("partyForumDetail-comment-list-details");

  // 닉네임 DOM
  partyForumCommentUserName.classList.add("partyForumDetail-comment-list-userName");
  partyForumCommentUserName.textContent = '티모 뺨 후려치기';
  partyForumCommentDiv.appendChild(partyForumCommentUserName);
  //콜론 DOM
  partyForumCommentColon.classList.add("partyForumDetail-comment-list-colon");
  partyForumCommentColon.textContent = ":";
  partyForumCommentDiv.appendChild(partyForumCommentColon);
  //내용 DOM
  partyForumCommentContent.classList.add("partyForumDetail-comment-list-content");
  partyForumCommentContent.textContent = text;
  partyForumCommentDiv.appendChild(partyForumCommentContent);
  //날짜 DOM
  partyForumCommentTime.classList.add("partyForumDetail-comment-list-time");
  partyForumCommentTime.textContent = `${year}-${month}-${day} ${hours}:${minutes}`;
  partyForumCommentDiv.appendChild(partyForumCommentTime);
  //삭제 DOM
  partyForumCommentDeleteButton.classList.add("partyForumDetail-comment-delete");
  partyForumCommentDeleteButton.textContent = "삭제";
  partyForumCommentDiv.appendChild(partyForumCommentDeleteButton);
  //구분선 DOM
  partyForumCommentHr.classList.add("partyForumDetail-comment-line-line");
  //리스트에 담기
  partyForumCommentList.appendChild(partyForumCommentDiv);
  partyForumCommentList.appendChild(partyForumCommentHr);
  //댓글 아이템 추가
  commentList.appendChild(partyForumCommentList);
}

//3. 각 버튼들의 이벤트(목록, 수정, 삭제 등)
partyForumIndexButton.addEventListener("click", function () {
  var link = '../../html/partyForum/partyForum.html';
  location.href = link;
  window.open(link);
});
partyForumEditButton.addEventListener("click", function () {
  var link = '../../html/partyForum/partyForumEdit.html';
  location.href = link;
  window.open(link);
});


partyForumDeleteButton.addEventListener("click", function () {
  if (confirm("해당 게시글을 삭제하시겠습니까?")) {
    alert("삭제되었습니다");
    var link = '../../html/partyForum/partyForum.html';
    location.href = link;
    location.replace(link);
    window.open(link);
  } else {

  }
});

partyForumApplyButton.addEventListener("click", function () {
  if (confirm("참가 하시겠습니까??")) {
    alert("신청이 완료되었습니다");
  } else {

  }
});
commentAddButton.addEventListener("click", function () { //댓글, 빈값과 값이 없을떄 제한
  let input = CommentInput.value.trim();
  if (input === '') {
    alert('댓글을 입력해 주세요.');
  } else {
    addCommentList(input);
    alert('댓글 등록이 완료 되었습니다');
    CommentInput.value = '';
  }
});
document.querySelector('.partyForumDetail-comment-list').addEventListener('click', function (event) {
  if (event.target.classList.contains('partyForumDetail-comment-delete')) {
    const commentItem = event.target.closest('li');
    if (commentItem) {
      commentItem.remove();
    }
  }
});

// 정의한 함수나 기능 호출하기
getpartyForumDetailValue();