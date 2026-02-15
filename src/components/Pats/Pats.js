import './Pats.css';

function Pats(props) {
  return <div id="mainp">
    <h1>Домашний любимец</h1>
    <img src = {props.photo}></img>
    <p>{props.name}</p>
    <p>{props.type}</p>
    <p>{props.age}</p>
    <p>{props.food}</p>
    <p>{props.character}</p>
  </div>
}

export function Groupp(props)
{
  return <div id='containerp'>
    <Pats photo = "cat.jpg" name = "Имя: Мурчик" type = "Вид: Кот" age = "Возраст: 3 года" food = "Любимая еда: рыба " character = "Характер: ласковый, любит спать"/>
    <Pats photo = "dog.jpg" name = "Имя: Рокки" type = "Вид: Собака" age = "Возраст: 5 лет" food = "Любимая еда: мясо" character = "Характер: активная, любит гулять и играть" />
    <Pats photo = "homa.jpg" name = "Имя: Пушок" type = "Вид: Хомяк" age = "Возраст: 1 год" food = "Любимая еда: семечки" character = "Характер: спокойный, активный ночью" />
    </div>
}

export default Pats;
