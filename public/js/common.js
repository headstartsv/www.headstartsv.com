$(function () {
  $('.drawer-nav > li > a').click(function () {
    $('#drawer').drawer('hide');
  });
  $('.under-construction').click(function () {
    alert('서비스 준비 중 입니다.');
    return false;
  });
});
