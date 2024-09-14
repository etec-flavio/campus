export default function useScroll(element, scrollAfter) {
    // Lógica
    function sticky(selector) {
        const scrollable = document.querySelector(selector)
        scrollable.classList.toggle("sticky", window.scrollY > scrollAfter)
    }

    // Verificação de tipo
    if (Array.isArray(element)) {
        for (let i = 0; i < element.length; i++) {
            sticky(element[i])
        }
    } else if (typeof element === "string") {
        sticky(element)
    }
}
