import "./widgetLg.css";

export default function WidgetLg() {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Pontos para aprovar</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
        <th className="widgetLgTh">Id</th>
          <th className="widgetLgTh">Usuário</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Horario</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgId">10</td>
          <td className="widgetLgUser">Susan Carol</td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgId">10</td>
          <td className="widgetLgUser">Susan Carol</td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        
    
      </table>
    </div>
  );
}
