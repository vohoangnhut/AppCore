
/***
 * 1 : CREATE
 * 2 : UPDATE
 * **/
var mode = 1;

const onClickBtnSave = () => {

	if(mode === 2)
	{
		//Update Case
		var txtUsrId = document.getElementsByName('txtUsrId')[0].value
		var txtUsrNm = document.getElementsByName('txtUsrNm')[0].value
		var txtPsw = document.getElementsByName('txtPsw')[0].value	
		var txtEmail = document.getElementsByName('txtEmail')[0].value

		$.ajax({
			type: "PUT",
			url: '/sys_001',
			dataType: 'json',
			data: {txtUsrId:txtUsrId,txtUsrNm:txtUsrNm,txtPsw:txtPsw,txtEmail:txtEmail},
			success: function (result) {
				alert(result.msg)
				//console.log(result);
				$('#btnSave').html('<strong>Save</strong>')
				mode = 1;

				//set value into grid
				document.getElementById(result.localElement).childNodes[1].innerHTML = document.getElementsByName('txtUsrNm')[0].value
				document.getElementById(result.localElement).childNodes[2].innerHTML = document.getElementsByName('txtEmail')[0].value
				document.getElementById(result.localElement).childNodes[3].setAttribute("att-usrId", document.getElementsByName('txtUsrId')[0].value);
				document.getElementById(result.localElement).childNodes[3].setAttribute("att-pass", document.getElementsByName('txtPsw')[0].value);
				document.getElementById(result.localElement).childNodes[3].setAttribute("att-email", document.getElementsByName('txtEmail')[0].value);
				document.getElementById(result.localElement).childNodes[3].setAttribute("att-name", document.getElementsByName('txtUsrNm')[0].value);

				resetField();
				document.getElementsByName('txtUsrId')[0].disabled = false;
			}
		});	

	}else {
		//Insert Case
		var txtUsrId = document.getElementsByName('txtUsrId')[0].value
		var txtUsrNm = document.getElementsByName('txtUsrNm')[0].value
		var txtPsw = document.getElementsByName('txtPsw')[0].value	
		var txtEmail = document.getElementsByName('txtEmail')[0].value

		$.ajax({
			type: "POST",
			url: '/sys_001',
			dataType: 'json',
			data: {txtUsrId:txtUsrId,txtUsrNm:txtUsrNm,txtPsw:txtPsw,txtEmail:txtEmail},
			success: function (result) {
				alert(result.msg)
				//console.log(result);

				//$('#table-user').children().append('<tr id="nhutvo"><td class="tbl-content-col count"> </td><td class="tbl-content-col">nhut vo</td><td class="tbl-content-col">kutreo@gmail.com</td><td att-name="nhut vo" att-email="kutreo@gmail.com" att-pass="1111" att-usrid="nhutvo"><button class="btn btn-primary" type="button" onclick="btnEdit(this)"><i class="fa fa-pencil"></i></button><button class="btn btn-danger" type="button" onclick="btnDelete(this)" style="margin-left: 3px;"><i class="fa fa-times"></i></button></td></tr>')
				$('#table-user').children().append(result.newRow)

				resetField();
			},
			error: function(result){
				console.log(result);
			}
		});	
	}

	
}

const resetField = () => {
		document.getElementsByName('txtUsrId')[0].value = "";
		document.getElementsByName('txtUsrNm')[0].value = "";
		document.getElementsByName('txtPsw')[0].value = "";
		document.getElementsByName('txtEmail')[0].value = "";
}


const btnEdit = (e) => {
	$('#btnSave').html('<strong>Update</strong>')
	mode = 2;
	//Disable UserId
	document.getElementsByName('txtUsrId')[0].disabled = true;

	const id = e.parentNode.getAttribute('att-usrId')
	const pass = e.parentNode.getAttribute('att-pass')
	const email = e.parentNode.getAttribute('att-email')
	const name = e.parentNode.getAttribute('att-name')


	document.getElementsByName('txtUsrId')[0].value = id;
	document.getElementsByName('txtUsrNm')[0].value = name;
	document.getElementsByName('txtPsw')[0].value = pass;
	document.getElementsByName('txtEmail')[0].value = email;

	//alert("btnNew")
}

const btnDelete = (e) => {
	var r = confirm("ARE YOU SURE !");
	if (r == true) {
		const usrId = e.parentNode.getAttribute('att-usrId')

		$.ajax({
			type: "DELETE",
			url: '/sys_001',
			dataType: 'json',
			data: {usrId:usrId},
			success: function (result) {
				//console.log(result);
				//if(result.status == 200){
					//self.isEditMode(!self.isEditMode());
				//}

				//alert(result.msg)
				$('#'+result.localElement).remove()

				resetField();
			},
			error: function(result){
				console.log(result);
			}
		});	
	}
}



