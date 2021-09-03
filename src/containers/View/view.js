import React from 'react'
import { ReactDOM } from 'react-dom'
import cn from 'classnames'
import Tree from '../../components/tree/tree'
import StickyHeadTable from '../../components/table/table'

const data = {
  id: 'root',
  name: 'ASSET CLASSIFICATION',
  children: [
    {
      id: '0',
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
    },
  ],
};

function View({...rest}) {
  return (
    <div className={cn("bg-secondary w-screen h-screen flex flex-row relative h-full")}>
      <div className={cn("w-1/5 h-full")}>
        <Tree jsonData={data} />
      </div>
      <div className={cn("w-4/5")}>
        <StickyHeadTable />
      </div>
    </div>
  );
}

export default View;