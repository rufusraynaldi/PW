 function terimainput(){

 	var data confirm('Apakah anda yakin ingin menambahkan data?');
 	if (data == true) {
 		alert( "selamat data anda berhasil di entry");

 		var x=document.forms['biodata']['Nama'].value;
       var y=document.forms['biodata']['Alamat'].value;
       var z=document.forms['biodata']['Jenis'].value;
       var a=document.forms['biodata']['Deskripsi'].value;
               
                                               
       var tabel = document.getElementById("tabelinput");
       var row = tabel.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
               
       cell1.innerHTML = x;
       cell2.innerHTML = y;
       cell3.innerHTML = z;
       cell4.innerHTML = a;
 	}else	{
 		alert("silahkan cek kembali data anda");
 	}

       
} 

