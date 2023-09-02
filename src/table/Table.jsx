import { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { columnsStructure } from './columns';

const Table = ({data}) => { 

  const columns = useMemo(
    () => columnsStructure,
    [],
  );

  return (
    <MaterialReactTable enableFullScreenToggle={false} enableDensityToggle={false} enableColumnFilters={false} enableGlobalFilter={false} initialState={{density:'compact'}} columns={columns} data={data} enableColumnOrdering />
  );
};

export default Table;
