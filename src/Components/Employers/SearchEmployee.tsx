import { useState } from "react";
import { Employee } from "./SingleEmployer";

type Props = {
  employers : Employee[]
};

export function SearchEmployee( {employers} : Props) {

    const [search, setSearch] = useState("");

    const filteredEmployers = employers.filter((employer) =>
    employer.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <form>
      <input
        className="search-employer"
        type="text"
        placeholder="Name or job position"
        onChange={(filteredEmployers) => {
          setSearch(filteredEmployers.target.value);
        }}
      />
    </form>
  );
}
