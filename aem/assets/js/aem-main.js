$(document).ready(function(){
 $("#head-nav").load("header.html"); 	
 $("#left-nav").load("left-navigation.html"); 
 $("#footer-nav").load("footer.html"); 
 $("#display-date").append(&copy;&nbsp;""+ new Date().getFullYear());
 
});