function terimainput() {
       var data = confirm ('Apakah Anda yakin?');
if (data===true) {
       alert ('Terimakasih');
       var x=document.forms['biodata']['Kritik'].value;
       var y=document.forms['biodata']['Saran'].value;
       var a=document.forms['biodata']['Email'].value;
       var tabel = document.getElementById("tabelinput");
       var row = tabel.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       cell1.innerHTML = x;
       cell2.innerHTML = y;
       cell3.innerHTML = a;
}else{
       alert('Silahkan Di Cek Kembali');
}
}