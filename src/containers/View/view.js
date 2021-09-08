import React, { useState } from 'react'
import cn from 'classnames'
import Tree from '../../components/tree/tree'
import Table from '../../components/table/table'
import { ChevronRightIcon, ChevronLeftIcon, ChevronMenuIcon } from '@heroicons/react/solid'

const tree_data = {
      id: 'root',
      name: 'LEVEL 00',
      children: [
        {
          id: '1',
          name: 'LEVEL 01',
          children: [
            {
              id: '2',
              name: 'LEVEL 02',
              children: [
                {
                  id: '3',
                  name: 'LEVEL 03',
                  children: [
                    {
                      id: '03-1',
                      name: '2020'
                    },
                    {
                      id: '03-2',
                      name: '2019'
                    },
                    {
                      id: '03-3',
                      name: '2016'
                    },
                    {
                      id: '03-4',
                      name: '2012'
                    },
                  ],
                }
              ],
            },
          ],
        },
      ],
    };

const getData = () => {
  const data = [
    {
      column01: 1,
      column02: 'LEVEL00',
      column03: 'LEVEL01',
      column04: 'LEVEL02',
      column05: 'LEVEL02',
      column06: 'LEVEL03',
      column07: 2019,
    },
    {
      column01: 2,
      column02: 'LEVEL00',
      column03: 'LEVEL01',
      column04: 'LEVEL02',
      column05: 'LEVEL02',
      column06: 'LEVEL03',
      column07: 2019,
    },
    {
      column01: 3,
      column02: 'LEVEL00',
      column03: 'LEVEL01',
      column04: 'LEVEL02',
      column05: 'LEVEL02',
      column06: 'LEVEL03',
      column07: 2019,
    },
    {
      column01: 4,
      column02: 'LEVEL00',
      column03: 'LEVEL01',
      column04: 'LEVEL02',
      column05: 'LEVEL02',
      column06: 'LEVEL03',
      column07: 2019,
    },
  ]
  return [...data, ...data, ...data]
}

function View({...rest}) {
  const columns = React.useMemo(() => [
    {
      Header: "Column01",
      accessor: 'column01',
    },
    {
      Header: "Column02",
      accessor: 'column02',
    },
    {
      Header: "Column03",
      accessor: 'column03',
    },
    {
      Header: "Column04",
      accessor: 'column04',
    },
    {
      Header: "Column05",
      accessor: 'column05',
    },
    {
      Header: "Column06",
      accessor: 'column06',
    },
    {
      Header: "Column07",
      accessor: 'column07',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  const [showTree, setshowTree] = useState(false)

  return (
    <div className={cn("bg-black w-screen h-screen flex flex-row relative h-full")}>
      <div className={ cn( showTree ? "left-1/2.27 " : "", "md:hidden block top-1/2 fixed z-20 h-8 w-8 rounded-3xl opacity-50 hover:opacity-100 bg-white") } onClick={() => setshowTree(!showTree)}>
        { showTree ? <ChevronLeftIcon className="text-gray-400" aria-hidden="true" /> : <ChevronRightIcon className="text-gray-400" aria-hidden="true" /> }
      </div>
      <div className={cn( showTree ? "block shadow-2xl" : "hidden", "w-1/2 md:block md:w-1/5 fixed z-10 left-0 top-0 md:relative h-full p-1 bg-secondary rounded")}>
        <Tree jsonData={tree_data} />
      </div>
      <div className={cn("md:w-4/5 w-full relative h-full overflow-auto p-1 bg-secondary rounded md:ml-4")}>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

export default View;