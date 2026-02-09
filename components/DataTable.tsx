export default function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: Array<string[]>;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
      <table className="w-full text-left text-sm">
        <thead className="bg-[color:var(--surface-elevated)] text-xs uppercase tracking-wide text-muted">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${row[0]}-${index}`}
              className="border-t border-[color:var(--border)]"
            >
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
