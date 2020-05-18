 function initMap() {
     var mapProp = {
         center: new google.maps.LatLng(35.7554612, 32.3474496),
         zoom: 5,
     };
     var map = new google.maps.Map(document.getElementById("map"), mapProp);
     // The location of Uluru
     var cyprus = {
         lat: 35.7554612,
         lng: 32.3474496
     };

     // The marker, positioned at Uluru
     var marker = new google.maps.Marker({
         position: cyprus,
         map: map
     });
 }

 function modal_reset() {

 }

 function header_init(name) {
     document.getElementById('Request_Modal_Header').innerHTML = name;
     $('.Item_container').empty();
     $('.plus_container').empty();
     $('.Item_container').append('<div id ="1" class="row"><div class="col-sm-2 col-md-2 col-lg-2" align="center"><i id="SubMore1" onclick="subItem(1)" class="fa fa-minus"></i></div><div class="col-sm-6 col-md-6 col-lg-6"><input type="text" class="form-control input-sm " id="input1_1" placeholder="Item"></div><div class="col-sm-1 col-md-1 col-lg-1"><i id="sub1" class="fa fa-minus" onclick="subQuantity(1)"></i></i></div><div class="col-sm-2 col-md-2 col-lg-2"><input type="text" class="form-control input-sm " id="input1_2" value="1"></div>  <div class="col-sm-1 col-md-1 col-lg-1"><i id="add1" onclick="addQuantity(1)" class="fa fa-plus"></i> </div></div>');
     $('.plus_container').append('<div class="row"><div class="col-sm-3 col-md-3 col-lg-3"><button type="button" id="AddMore" onclick="addItem(1)" class="btn btn-secondary"><i class="fa fa-plus"></i>Add Item</button></div><div class="col-sm-9 col-md-9 col-lg-9" align="right"><button type="button" id="SubmitButton" onclick="submitRequest()" class="btn btn-primary">Submit</button></div></div>');
 }

 function addItem(i) {
     $('#AddMore').attr('onclick', 'addItem(' + (i + 1) + ')');
     $('.Item_container').append('<div id ="' + i + '" class="row"><div class="col-sm-2 col-md-2 col-lg-2" align="center"><i id="SubMore' + i + '" onclick="subItem(' + i + ')" class="fa fa-minus"></i></div><div class="col-sm-6 col-md-6 col-lg-6"><input type="text" class="form-control input-sm " id="input' + i + '_1" placeholder="Item"></div><div class="col-sm-1 col-md-1 col-lg-1"><i id="sub' + i + '" class="fa fa-minus" onclick="subQuantity(' + i + ')"></i></div><div class="col-sm-2 col-md-2 col-lg-2"><input type="text" class="form-control input-sm " id="input' + i + '_2" value="1"></div>  <div class="col-sm-1 col-md-1 col-lg-1"><i id="add' + i + '" onclick="addQuantity(' + i + ')" class="fa fa-plus"></i> </div></div>');
 }

 function subItem(i) {
     $('#SubMore' + i).remove();
     $('#' + i).remove();
 }

 function subQuantity(i) {
     var temp = $('#input' + i + '_2').val();
     if (temp > 0)
         $('#input' + i + '_2').val(parseInt(parseInt(temp) - 1));
 }

 function addQuantity(i) {
     var temp = $('#input' + i + '_2').val();
     $('#input' + i + '_2').val(parseInt(parseInt(temp) + 1));
 }

 function submitRequest() {
     var type = document.getElementById('Request_Modal_Header').innerHTML;
     var location = document.getElementById('dis_loc').value;
     var date = document.getElementById('dis_date').value;
     console.log(date);
     console.log(location);
     console.log(type);

     var array =$(".Item_container input");

     var i=0;

     for(i=0;i<array.length;i+=2){
       var name=array[i].value;
       var quantity=array[i+1].value;

     }
     $.ajax({
         method: "POST",
         url: "request_post.php",
         data: {
             type: type,
             location: location,
             date: date,
             name:name,
             quantity:quantity,
         },
         success: function (results) {

             console.log(results);
         },
         error: function (results) {
             alert("400 Bad request:" + results);
         }

     });
 }
