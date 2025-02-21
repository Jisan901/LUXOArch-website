<template>
  <!-- Open the modal using ID.showModal() method -->
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box max-w-96 bg-[var(--bg-color)] text-white">
      <slot></slot>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>