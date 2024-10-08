// Arquivo de script vazio 
function ModalSuccess() {
  Swal.fire({
    title: "Bom Trabalho!",
    text: "Adicionado ao Carrinho",
    icon: "success"
  });
}

function ModalWarning() {
  Swal.fire({
    title: "Deseja finalizar a compra?",
    text: "Você não poderá desfazer esta ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Finalizar",
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // 0 usuário clicou em "Sim, excluir!"
      Swal.fire(
        'Compra finalizada!',
        'o item foi excluído com sucesso.',
        'success'
      );
    } else if (result.isDismissed) {
      // 0 usuário clicou em "Cancelar"
      Swal.fire(
        'Cancelado' ,
        'Seu item está seguro :)',
        'info'
      );
    }
  });
}
