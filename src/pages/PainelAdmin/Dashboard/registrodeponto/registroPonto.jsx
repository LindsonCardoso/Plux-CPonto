import "./registroponto.css";

import Chart from "../../../../components/chart";
import WidgetSm from "../../../../components/widgetSm";
import WidgetLg from "../../../../components/widgetLg";

export default function Home() {
  return (
    <div className="home">
             <div className="homeWidgets">

        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
} 