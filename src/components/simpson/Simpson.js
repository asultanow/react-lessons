import './Simpson.css';

export default function Simpson({ simpson }) {
    const {
        name,
        surname,
        age,
        info,
        photo
    } = simpson;

    return (
        <div className={'simpson clear-fix'}>
            <h2>{name} {surname}</h2>
            <img src={photo} alt={''}/>
            <p>Вік: {age}</p>
            <p>{info}</p>
            <div className={'clear-fix'}></div>
        </div>
    );
}
