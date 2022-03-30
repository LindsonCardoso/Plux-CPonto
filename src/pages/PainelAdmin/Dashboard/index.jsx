import "./dashboard.css";

import WidgetPonto from '../../../components/WidgetPonto'
import Chart from "../../../components/chart";


export default function Home() {
  return (
    <div className="home">
       <div className="homeWidgets">
       <WidgetPonto/>
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
    </div>
  );
} 