let merahB = '<img class="BulatWarna"src="merahB.png" alt="bulat merah" />';
let hijauB = '<img class="BulatWarna"src="hijauB.png" alt="bulat hijau" />';
$.getJSON('bookList_v1.json', function (data) {
  let list = data.buku;
  console.log(list);
  $.each(list, function (i, data) {
    if (data.kondisi == "tersedia") {
      $('#contentBook').append('<div class="card text-bg-light mb-3" style="max-width: 18rem;"><img class="img-thumbnail" src="'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">['+ hijauB +'] '+ data.judul +'</h5><a class="btn btn-outline-warning" href="'+ data.link +'">baca</a></div></div>');
    }else {
      $('#contentBook').append('<div class="card text-bg-light mb-3" style="max-width: 18rem;"><img class="img-thumbnail" src="'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">['+ merahB +'] '+ data.judul +'</h5><a class="btn btn-outline-warning" href="'+ data.link +'">baca</a></div></div>');
    }
    
  });
});


