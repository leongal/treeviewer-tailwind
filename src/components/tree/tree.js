import React, { useState } from 'react'
import cn from 'classnames'
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { MinusSquare } from '../../assets/Icons';
import { PlusSquare } from '../../assets/Icons';
import { SortUpIcon, SortDownIcon } from '../../assets/Icons'

function Tree({ jsonData, children, className, ...rest }) {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );
  const [showTree, setshowTree] = useState(false)
  return (
    <div className={cn("bg-primary")}>
      <div className={"bg-black text-white text-center"} onClick={setshowTree}>
        <span>
          {showTree===true ? <SortDownIcon className="w-4 h-4 text-white" /> : <SortUpIcon className="w-4 h-4 text-white" />}
        </span>
        ASSET CLASSIFICATION
      </div>
      <TreeView
        className={cn("text-left text-white")}
        defaultCollapseIcon={ <MinusSquare /> }
        defaultExpandIcon={ <PlusSquare /> }
      >
        {renderTree(jsonData)}
      </TreeView>
    </div>
  );
}

export default Tree;