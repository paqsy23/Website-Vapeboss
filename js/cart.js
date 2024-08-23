$(document).ready(function() {
    $('#location-input').val('')
})

$('#promo').change(function() {

})

function decQty(e) {
    var id = $(e).attr('id_menu')
    $('#qty-' + id).val(parseInt($('#qty-' + id).val()) - 1)
    if ($('#qty-' + id).val() == 1) {
        $(e).attr('disabled', true)
    }
}

function incQty(e) {
    var id = $(e).attr('id_menu')
    $('#qty-' + id).val(parseInt($('#qty-' + id).val()) + 1)
    if ($('#qty-' + id).val() > 1) {
        $('#qty-dec').attr('disabled', false)
    }
}

function delMenu(e) {
    var id = $(e).attr('id_menu')
    Swal.fire({
        icon: 'warning',
        title: 'Hapus Menu',
        text: 'Apakah anda yakin menghapus menu ini?',
        showDenyButton: true,
        confirmButtonText: 'Hapus Menu',
        denyButtonText: 'Kembali',
        focusConfirm: false,
        focusDeny: true
    }).then((result) => {
        if (result.isConfirmed) {
            
        }
    })
}

function showMaps() {
    $('#select-address').modal('show')
}