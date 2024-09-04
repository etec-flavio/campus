export default function useScroll(element, scrollAfter) {
    
    function sticky(selector) {
        const scrollable = document.querySelector(selector)
        scrollable.classList.toggle("sticky", window.scrollY > scrollAfter)
    }

    if (Array.isArray(element)) {
        for (let i = 0; i < element.length; i++) {
            sticky(element[i])
        }

    } else if (typeof element === "string") {
        sticky(element)
    }

}