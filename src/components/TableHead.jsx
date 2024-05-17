const TableHead = ({ headers }) => (
    <thead>
        <tr className="text-zinc-400 text-base font-light text-left">
            {headers.map((header, index) => (
                <th key={index} className="px-4 py-2 font-light text-nowrap">
                    {header}
                </th>
            ))}
        </tr>
    </thead>
);

export default TableHead