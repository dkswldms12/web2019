<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="UTF-8">
	<title>문서 제목</title>
</head>
<body>
	<?
		$name = $_GET["myname"];
		$email = $_GET["email"];
	?>
	이름 : <? echo $name;?>님 반갑습니다<br>
	emil : <? echo $email;?>

</body>
</html>