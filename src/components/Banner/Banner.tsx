import './Banner.css'

type Props={
    isComplete:boolean
}

export function Banner({isComplete}:Props) {
    const displayStyle = {
        opacity: isComplete? '1': '0'
    }

    return (
        <section className="banner-container" style={displayStyle}>
            <p>🥳 ¡Usted Ha Ganado! 👏🏽 </p>
        </section>
    );
}
