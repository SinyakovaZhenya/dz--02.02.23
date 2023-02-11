import landingImg1 from "./../image/music/golod.png";
import landingImg2 from "./../image/music/Звери_Страха_нет.jpg";
import landingImg3 from "./../image/music/Когда_мы_вместе,_никто_не_круче.jpg";
import landingImg4 from "./../image/music/районы-кварталы.jpg";

const Music = () => {
	return (
		<div className="container">
			<h1>Моя любимая музыкальная группа</h1>
			<div className="link">
				<ul>
					<li>Название группы: "ЗВЕРИ";</li>
					<li>Название альбомов: "Голод", "Районы-кварталы", "Когда мы вместе", "Никто не круче", "Дальше", "Музы", "Один на один", "Страха нет";</li>
					<li>Участники группы: Роман Билык, Вячеслав Зарубов, Герман «Албанец» Осипов, Валентин Тарасов, Кирилл Джалалов;</li>
					<li>Обложки альбомов:
						<li className="liImg"><img src={landingImg1} alt="" className="Music_img"/></li>
						<li className="liImg"><img src={landingImg2} alt="" className="Music_img"/></li>
						<li className="liImg"><img src={landingImg3} alt="" className="Music_img"/></li>
						<li className="liImg"><img src={landingImg4} alt="" className="Music_img"/></li>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Music;