import Swal from "sweetalert2";

export const SweetAlert = (title,icon,text) =>{
    return Swal.fire({
        title: title,
        text: text ,
        icon: icon,
        timer: 1500,
        showConfirmButton : true
        });
}