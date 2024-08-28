import GenericTable from "../../Generics/Table";
import { Container } from "./style";

const AllLids = () => {
  const headCells = [
    { id: "name", label: "O'quvchining ismi" },
    { id: "group", label: "Guruh / Fan" },
    { id: "date", label: "Dars kuni va vaqti" },
    { id: "addedDate", label: "Qo'shilgan sana" },
    { id: "admin", label: "Moderator" },
  ];

  const rows = [
    {
      id: "1",
      name: "Webbrain",
      group: "FrontEnd",
      date: "28.08.2024",
      addedDate: "28.08.2024",
      admin: "Webbrain admin",
    },
    {
      id: "2",
      name: "Webbrain",
      group: "FrontEnd",
      date: "28.08.2024",
      addedDate: "28.08.2024",
      admin: "Webbrain admin",
    },
    {
      id: "3",
      name: "Webbrain",
      group: "FrontEnd",
      date: "28.08.2024",
      addedDate: "28.08.2024",
      admin: "Webbrain admin",
    },
    {
      id: "4",
      name: "Webbrain",
      group: "FrontEnd",
      date: "28.08.2024",
      addedDate: "28.08.2024",
      admin: "Webbrain admin",
    },
  ];

  return (
    <Container>
      <GenericTable headCells={headCells} rows={rows} />
    </Container>
  );
};

export default AllLids;
