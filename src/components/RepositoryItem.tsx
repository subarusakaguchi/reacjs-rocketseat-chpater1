interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    };
}

export function RepositoryItem(props: RepositoryItemProps) {
    const tittle = standardizeTittle(props.repository?.name)

    function standardizeTittle(text: string) {
        const baseText = text.replace(/[-_]/g, " ")

        const words = baseText.split(" ")

        const CapitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        })

        CapitalizedWords.forEach((word, index) => {
            if (word !== 'NLW' && word !== 'CRUD' && word !== 'ORM') {
                let count:number = 1
                let character:string = ''
                const positions = []

                while (count <= word.length) {
                    character = word.charAt(count)
                    if (!isNaN(parseInt(character) * 1)) {
                        return
                    } else {
                        if (character === character.toUpperCase()) {
                            positions.push(count)
                        }
                    }
                    count += 1
                }
                
                if (positions.length > 0) {
                    const temp:string[] = []

                    let initialText = ''
                    let tempWords = ''

                    positions.forEach((pos, posIndex) => {
                        if (posIndex > 0) {
                            
                        } else {
                            if (word[pos] !== ' ') {
                                tempWords = word.slice(0, pos)
                                initialText = [tempWords, " ", word.slice(pos)].join("")
                                temp.push(initialText)
                            }
                        }

                        CapitalizedWords[index] = temp.join("")
                    })

                }
            }
        })

        const newText = CapitalizedWords.join(" ")

        return newText
    }

    return (
        <li>
            <strong>{tittle}</strong>
            <p>{props.repository?.description ?? 'Descrição Padrão'}</p>

            <a href={props.repository?.html_url ?? 'https://github.com/subarusakaguchi'} target='_blank'>
                Acessar Repositório
            </a>
        </li>
    )
}