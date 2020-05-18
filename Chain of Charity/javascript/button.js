function subQuantity(i) {
    var temp = $('#quantity' + i).val();
    if (temp > 0)
        $('#quantity' + i).val(parseInt(parseInt(temp) - 1));
}

function addQuantity(i) {
    var temp = $('#quantity' + i).val();
    $('#quantity' + i ).val(parseInt(parseInt(temp) + 1));
}


function insert_dlists() {

  var i;
  for (i = 1; i <7 ; i++) {

	const id = document.getElementById("d"+i);
	const dlist = document.getElementById("dlist"+i);

  let a=id.innerHTML;
  let b=dlist.innerHTML;



  $.ajax({
  type: "POST",
  url: "dbconnect.php",
  data: {a:a,b:b},
  datatype:JSON,
  success: function (data) { console.log(data) },
  error: function (jqXHR, textStatus, errorThrown) {
    alert("Error in Insert PHP");
  }
});

  }
}

function onclick(){
  var data;

  $.ajax({
    type: "GET",
    url: "donat_tab.php",
    data: data,
    success: function (data) {
      console.log(data);
      $('#tab').html(data);

     },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error in Get PHP");
    }
  });
}

onclick();


function onclickDonate(a,b,c){

  $.ajax({
  type: "POST",
  url: "modal_tab.php",
  data: {a:a,b:b,c:c},
  datatype:JSON,
  success: function (data) {
      $('#modtab').html(data);
  },

  error: function (jqXHR, textStatus, errorThrown) {
    alert("Error in Insert PHP");
    }
  });

  }
