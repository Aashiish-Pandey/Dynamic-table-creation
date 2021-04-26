import TableData from "./TableData";
import TableHeader from "./TableHeader";
const MyTable = (props) => {
  return (
    <table>
      <tr>
        <TableHeader getHeader={props.getHeader} />
      </tr>
      <TableData getData={props.getData} />
    </table>
  );
};

export default MyTable;
