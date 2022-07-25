$(document).ready(function () {
  $('.dropdown-menu a').click(function(){
    $('#selected').text($(this).text());
  });
  $('.btn-number').click(function(e){
      e.preventDefault();
      
      fieldName = $(this).attr('data-field');
      type      = $(this).attr('data-type');
      var input = $("input[name='"+fieldName+"']");
      var currentVal = parseInt(input.val());
      if (!isNaN(currentVal)) {
          if(type == 'minus') {
              
              if(currentVal > input.attr('min')) {
                  input.val(currentVal - 1).change();
              } 
              if(parseInt(input.val()) == input.attr('min')) {
                  $(this).attr('disabled', true);
              }

          } else if(type == 'plus') {

              if(currentVal < input.attr('max')) {
                  input.val(currentVal + 1).change();
              }
              if(parseInt(input.val()) == input.attr('max')) {
                  $(this).attr('disabled', true);
              }

          }
      } else {
          input.val(0);
      }
  });
  $('.input-number').focusin(function(){
     $(this).data('oldValue', $(this).val());
  });
  $('.input-number').change(function() {
      
      minValue =  parseInt($(this).attr('min'));
      maxValue =  parseInt($(this).attr('max'));
      valueCurrent = parseInt($(this).val());
      
      name = $(this).attr('name');
      if(valueCurrent >= minValue) {
          $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
      } else {
          alert('Sorry, the minimum value was reached');
          $(this).val($(this).data('oldValue'));
      }
      if(valueCurrent <= maxValue) {
          $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
      } else {
          alert('Sorry, the maximum value was reached');
          $(this).val($(this).data('oldValue'));
      }
      
      
  });
  $(".input-number").keydown(function (e) {
      // Allow: backspace, delete, tab, escape, enter and .
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
           // Allow: Ctrl+A
          (e.keyCode == 65 && e.ctrlKey === true) || 
           // Allow: home, end, left, right
          (e.keyCode >= 35 && e.keyCode <= 39)) {
               // let it happen, don't do anything
               return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
      }
  });

  $('#btnAddToCart').click(function(){
    $('#btnPay').addClass('show');
  });

});

function successModal() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Berhasil ditambahkan ke keranjang'
    })
}

function sendToEmail() {
    // const Toast = Swal.mixin({
    //   toast: true,
    //   position: 'top-end',
    //   showConfirmButton: false,
    //   timer: 3000,
    //   timerProgressBar: true,
    //   didOpen: (toast) => {
    //     toast.addEventListener('mouseenter', Swal.stopTimer)
    //     toast.addEventListener('mouseleave', Swal.resumeTimer)
    //   }
    // })

    // Toast.fire({
    //   icon: 'success',
    //   title: 'Tiket akan dikirim ke email anda!'
    // })
    window.location.href = `./index.html`
}

function confirmModal() {
    Swal.fire({
      title: 'Konfirmasi',
      text: "Apakah anda yakin ingin melanjutkan proses pembayaran?",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dbb76f',
      cancelButtonColor: '#ccc',
      confirmButtonText: 'Lanjutkan',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = `./register-form.html`
      }
    })
}

function confirmPayment() {
    Swal.fire({
      title: 'Konfirmasi',
      text: "Apakah anda yakin bayar dengan Virtual Account BCA? Anda tidak dapat mengubah layanan nanti",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dbb76f',
      cancelButtonColor: '#ccc',
      confirmButtonText: 'Lanjutkan',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = `./how-to-pay.html`
      }
    })
}

function confirmPaymentNusapay() {
    Swal.fire({
      title: 'Konfirmasi',
      text: "Apakah anda yakin bayar dengan Nusapay? Anda tidak dapat mengubah layanan nanti",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dbb76f',
      cancelButtonColor: '#ccc',
      confirmButtonText: 'Lanjutkan',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = `./how-to-nusapay.html`
      }
    })
}

function cancelModal() {
    Swal.fire({
      title: 'Batalkan Pemesanan',
      text: "Apakah anda yakin ingin membatalkan pemesanan?",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dbb76f',
      cancelButtonColor: '#ccc',
      confirmButtonText: 'Batalkan',
      cancelButtonText: 'Kembali'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = `./index.html`
      }
    })
}

function submitCustomer() {
    window.location.href = `./checkout.html`
}

function completePayment() {
    window.location.href = `./index.html`
}

function successPage() {
    window.location.href = `./success-page.html`
}

function payNow() {
    window.location.href = `./cart.html`
}






