export default function useCopy(config) {
    const configs = Array.isArray(config) ? config : [config]

    configs.forEach(({ buttonId, textAreaId }) => {
        const button = document.getElementById(buttonId)
        const textArea = document.getElementById(textAreaId)

        if (button && textArea) {
            // Cria um parágrafo para a mensagem de feedback
            const feedback = document.createElement("p")
            feedback.style.display = "none" // Esconde o parágrafo inicialmente
            feedback.style.margin = "0" // Remove a margin padrão
            button.appendChild(feedback)

            button.addEventListener("click", () => {
                const code = textArea.textContent || textArea.value
                
                const tempTextArea = document.createElement("textarea")
                tempTextArea.value = code
                document.body.appendChild(tempTextArea)
                tempTextArea.select()
                document.execCommand("copy")
                document.body.removeChild(tempTextArea)

                // Esconde o conteúdo original do botão
                Array.from(button.children).forEach(child => {
                    if (child !== feedback) {
                        child.style.display = "none"
                    }
                })

                // Exibe a mensagem no parágrafo sem alterar a estilização do botão
                feedback.textContent = "Código copiado!"
                feedback.style.display = "block" // Exibe o parágrafo
                setTimeout(() => {
                    // Esconde a mensagem de feedback e exibe o conteúdo original do botão
                    feedback.style.display = "none"
                    Array.from(button.children).forEach(child => {
                        if (child !== feedback) {
                            child.style.display = ""
                        }
                    })
                }, 2000)
            })
        } else {
            console.warn(`Botão ou área de texto não encontrados para o ID: ${buttonId}, ${textAreaId}`)
        }
    })
}
