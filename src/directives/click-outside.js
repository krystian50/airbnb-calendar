let handleOutsideClick;

export default {
  bind(el, binding) {
    handleOutsideClick = e => {
      e.stopPropagation();

      const handler = binding.value;

      if (!el.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },
  unbind() {
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  }
};
