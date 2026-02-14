import './Page.css';

function Page(props) {
  return <div id="mainp">
    <h1>Персональная страница</h1>
    <img src = {props.photo}></img>
    <p>{props.fullname}</p>
    <p>{props.phone}</p>
    <p>{props.email}</p>
    <p>{props.city}</p>
    <p>{props.experience}</p>
    <p>{props.skills}</p>
  </div>
}

export function Groupp(props)
{
  return <div id='containerp'>
    <Page photo = "I.jpg" fullname = "ФИО: Топал Ирина Викторовна" phone = "Телефон: 09612345678"  email = "Почта: topalira@gmail.com" city = "Город: Одесса" 
    experience = "Опыт работы: - BTS Camera Operator 2025 || Filmed behind-the-scenes content, worked with framing, composition, and capturing the overall atmosphere of the production process." 
    skills = "Навыки: Basic C++ || Photoshop || Lightroom || Figma || Illustrator || Basic HTML || Basic JavaScript || Basic CSS"/>
    </div>
}

export default Page;
