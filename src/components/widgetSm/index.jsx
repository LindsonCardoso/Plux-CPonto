import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';

//pontos batidos no dia
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Pontos batidos hoje</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
        <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hora: 10:40</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Visualizar
          </button>
        </li>

        <li className="widgetSmListItem">
        <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hora: 10:40</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Visualizar
          </button>
        </li>
      </ul>
    </div>
  );
}
